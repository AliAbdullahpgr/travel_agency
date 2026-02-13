"use client";

import { type FormEvent, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { plannedMonths } from "~/content/site";

type InquiryPanelContent = {
  title: string;
  subtitle: string;
  steps: Array<{ number: string; title: string }>;
  backLabel: string;
  nextLabel: string;
  finishLabel: string;
  savingLabel: string;
  successMessage: string;
  stepValidationMessages: {
    personal: string;
    trip: string;
    consent: string;
  };
};

type InquiryPanelProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  content?: Partial<InquiryPanelContent>;
};

type InquiryState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  plannedMonth: string;
  duration: string;
  departureCity: string;
  tourCategory: string;
  adults: string;
  children: string;
  notes: string;
  consentAccepted: boolean;
};

const initialState: InquiryState = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  country: "",
  plannedMonth: "",
  duration: "",
  departureCity: "",
  tourCategory: "",
  adults: "2",
  children: "0",
  notes: "",
  consentAccepted: false,
};

const defaultContent: InquiryPanelContent = {
  title: "Tur Başvuru Formu",
  subtitle: "3 basit adımda talebinizi iletin.",
  steps: [
    { number: "01", title: "Kişisel" },
    { number: "02", title: "Seyahat" },
    { number: "03", title: "Onay" },
  ],
  backLabel: "Geri",
  nextLabel: "İleri",
  finishLabel: "Tamamla",
  savingLabel: "Gönderiliyor...",
  successMessage: "Başvurunuz alınmıştır.",
  stepValidationMessages: {
    personal: "Ad soyad ve geçerli telefon numarası girin.",
    trip: "Planlanan ay ve yetişkin sayısı zorunludur.",
    consent: "Devam etmek için onay verin.",
  },
};

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:bg-white focus:ring-2 focus:ring-[color:var(--emerald)]/20";
const labelClass = "flex flex-col gap-2.5";

export function InquiryPanel({ title, subtitle, compact = false, content }: InquiryPanelProps) {
  const text = useMemo(() => {
    const merged: InquiryPanelContent = {
      ...defaultContent,
      ...content,
      stepValidationMessages: {
        ...defaultContent.stepValidationMessages,
        ...content?.stepValidationMessages,
      },
      steps: content?.steps?.length === 3 ? content.steps : defaultContent.steps,
    };
    return merged;
  }, [content]);

  const [form, setForm] = useState<InquiryState>(initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string }>();

  const progressRatio = currentStep / (text.steps.length - 1);
  const panelTitle = title ?? text.title;
  const panelSubtitle = subtitle ?? text.subtitle;

  const validateStep = (step: number) => {
    if (step === 0) {
      if (form.fullName.trim().length < 2 || form.phone.trim().length < 8) {
        setFeedback({ type: "error", message: text.stepValidationMessages.personal });
        return false;
      }
    }

    if (step === 1) {
      if (!form.plannedMonth || !form.adults) {
        setFeedback({ type: "error", message: text.stepValidationMessages.trip });
        return false;
      }
    }

    if (step === 2 && !form.consentAccepted) {
      setFeedback({ type: "error", message: text.stepValidationMessages.consent });
      return false;
    }

    return true;
  };

  const goNext = () => {
    setFeedback(undefined);
    if (!validateStep(currentStep)) return;
    setCurrentStep((prev) => Math.min(prev + 1, text.steps.length - 1));
  };

  const goBack = () => {
    setFeedback(undefined);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(undefined);

    if (currentStep < text.steps.length - 1) {
      goNext();
      return;
    }

    if (!validateStep(2)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          phone: form.phone,
          plannedMonth: form.plannedMonth,
          consentAccepted: form.consentAccepted,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setFeedback({
          type: "error",
          message: payload?.error ?? "Başvuru gönderilemedi. Lütfen tekrar deneyin.",
        });
        return;
      }

      setForm(initialState);
      setCurrentStep(0);
      setFeedback({ type: "success", message: text.successMessage });
    } catch {
      setFeedback({
        type: "error",
        message: "Sistem hatası oluştu. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hizli-basvuru"
      className={`mx-auto px-4 py-20 md:px-8 md:py-28 ${compact ? "max-w-5xl" : "max-w-7xl"}`}
    >
      {(panelTitle || panelSubtitle) && (
        <div className="mb-10 text-center">
          {panelTitle && (
            <h2 className="font-display text-3xl leading-tight text-[color:var(--emerald)] md:text-5xl">
              {panelTitle}
            </h2>
          )}
          {panelSubtitle && <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">{panelSubtitle}</p>}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-gray-100 bg-white p-5 text-gray-900 shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-10"
      >
        <div className="mb-10">
          <div className="relative">
            <div className="absolute left-6 right-6 top-6 h-px bg-gray-200" />
            <div
              className="absolute left-6 top-6 h-0.5 bg-[color:var(--emerald)] transition-all duration-300"
              style={{ width: `calc((100% - 3rem) * ${progressRatio})` }}
              role="progressbar"
              aria-valuenow={Math.round(progressRatio * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Form ilerleme: ${Math.round(progressRatio * 100)}%`}
            />

            <ol className="relative grid grid-cols-3 gap-3">
              {text.steps.map((step, index) => {
                const done = index < currentStep;
                const active = index === currentStep;

                return (
                  <li key={step.number} className="text-center">
                    <span
                      className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border text-base font-semibold transition ${
                        done
                          ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-white"
                          : active
                            ? "border-[color:var(--emerald)] bg-white text-[color:var(--emerald)]"
                            : "border-gray-300 bg-white text-gray-500"
                      }`}
                    >
                      {step.number}
                    </span>
                    <p className="mt-2 text-base font-semibold text-gray-700">{step.title}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {currentStep === 0 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Ad Soyad</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Ad Soyad"
                value={form.fullName}
                onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Telefon</span>
              <input
                className={fieldClass}
                type="tel"
                placeholder="+90 555 000 00 00"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                required
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">E-posta</span>
              <input
                className={fieldClass}
                type="email"
                placeholder="ornek@email.com"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Şehir</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Ankara"
                value={form.city}
                onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Ülke</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Türkiye"
                value={form.country}
                onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
              />
            </label>
          </div>
        )}

        {currentStep === 1 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Planlanan Ay</span>
              <select
                className={fieldClass}
                value={form.plannedMonth}
                onChange={(e) => setForm((prev) => ({ ...prev, plannedMonth: e.target.value }))}
                required
              >
                <option value="">Ay seçin</option>
                {plannedMonths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Süre</span>
              <select
                className={fieldClass}
                value={form.duration}
                onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
              >
                <option value="">Süre seçin</option>
                <option value="7">7 Gün</option>
                <option value="10">10 Gün</option>
                <option value="15">15 Gün</option>
                <option value="20">20 Gün</option>
                <option value="30">30 Gün</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Kalkış Şehri</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="İstanbul"
                value={form.departureCity}
                onChange={(e) => setForm((prev) => ({ ...prev, departureCity: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Tur Kategorisi</span>
              <select
                className={fieldClass}
                value={form.tourCategory}
                onChange={(e) => setForm((prev) => ({ ...prev, tourCategory: e.target.value }))}
              >
                <option value="">Kategori seçin</option>
                <option value="umre">Umre</option>
                <option value="hac">Hac</option>
                <option value="kultur">Kültür</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Yetişkin</span>
              <input
                className={fieldClass}
                type="number"
                min={1}
                max={12}
                value={form.adults}
                onChange={(e) => setForm((prev) => ({ ...prev, adults: e.target.value }))}
                required
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-gray-900">Çocuk</span>
              <input
                className={fieldClass}
                type="number"
                min={0}
                max={12}
                value={form.children}
                onChange={(e) => setForm((prev) => ({ ...prev, children: e.target.value }))}
              />
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className="md:col-span-2 flex flex-col gap-2.5">
              <span className="text-base font-semibold text-gray-900">Notlar</span>
              <textarea
                className="min-h-36 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:bg-white focus:ring-2 focus:ring-[color:var(--emerald)]/20"
                placeholder="Ek detaylar"
                value={form.notes}
                onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
              />
            </label>

            <label className="md:col-span-2 flex items-start gap-3 rounded-xl bg-[color:var(--sand)] px-4 py-4 text-base text-gray-900">
              <input
                type="checkbox"
                checked={form.consentAccepted}
                onChange={(e) => setForm((prev) => ({ ...prev, consentAccepted: e.target.checked }))}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer"
                style={{ accentColor: "var(--emerald)" }}
              />
              Kişisel verilerimin işlenmesini ve tur kayıt sürecimi onaylıyorum.
            </label>
          </div>
        )}

        <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={currentStep === 0}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-base font-semibold transition ${
              currentStep === 0
                ? "invisible"
                : "border-[color:var(--emerald)]/25 text-[color:var(--emerald)] hover:border-[color:var(--emerald)] hover:bg-[color:var(--emerald)]/5"
            }`}
          >
            <FiArrowLeft className="h-4 w-4" />
            {text.backLabel}
          </button>

          {currentStep < text.steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--emerald)] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[color:var(--emerald-light)]"
            >
              {text.nextLabel}
              <FiArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--emerald)] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[color:var(--emerald-light)] disabled:opacity-60"
            >
              {isSubmitting ? text.savingLabel : text.finishLabel}
              {!isSubmitting && <FiArrowRight className="h-4 w-4" />}
            </button>
          )}
        </div>

        {feedback && (
          <p
            className={`mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ${
              feedback.type === "success"
                ? "bg-[color:var(--emerald)] text-white"
                : "bg-red-50 text-red-700"
            }`}
          >
            {feedback.type === "success" && <FiCheckCircle className="h-4 w-4" />}
            {feedback.message}
          </p>
        )}
      </form>
    </section>
  );
}

