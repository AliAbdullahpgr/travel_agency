"use client";

import { type FormEvent, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { plannedMonths } from "~/content/site";

type InquiryPanelProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

type InquiryState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  birthDate: string;
  plannedMonth: string;
  duration: string;
  departureCity: string;
  tourCategory: string;
  travelerProfile: string;
  adults: string;
  children: string;
  roomType: string;
  budgetRange: string;
  flexibleDates: string;
  accommodationStyle: string;
  contactChannel: string;
  contactTime: string;
  passportStatus: string;
  visaStatus: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  notes: string;
  consentAccepted: boolean;
};

const initialState: InquiryState = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  country: "",
  birthDate: "",
  plannedMonth: "",
  duration: "",
  departureCity: "",
  tourCategory: "",
  travelerProfile: "",
  adults: "2",
  children: "0",
  roomType: "",
  budgetRange: "",
  flexibleDates: "",
  accommodationStyle: "",
  contactChannel: "",
  contactTime: "",
  passportStatus: "",
  visaStatus: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  notes: "",
  consentAccepted: false,
};

const steps = [
  { number: "01", title: "Kişisel Bilgiler" },
  { number: "02", title: "Seyahat Detayları" },
  { number: "03", title: "Onay" },
] as const;

const fieldClass =
  "w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--cream)] px-4 py-4 text-base text-[color:var(--text)] placeholder:text-[color:var(--text-faint)] outline-none transition focus:bg-white focus:border-[color:var(--emerald)] focus:ring-2 focus:ring-[color:var(--emerald)]/15";
const labelClass = "flex flex-col gap-2.5";

export function InquiryPanel({ title, subtitle, compact = false }: InquiryPanelProps) {
  const [form, setForm] = useState<InquiryState>(initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<
    { type: "success" | "error"; message: string } | undefined
  >(undefined);

  const progressRatio = currentStep / (steps.length - 1);

  const validateStep = (step: number) => {
    if (step === 0) {
      if (form.fullName.trim().length < 2 || form.phone.trim().length < 8) {
        setFeedback({ type: "error", message: "Ad soyad ve geçerli telefon numarası girin." });
        return false;
      }
    }

    if (step === 1) {
      if (!form.plannedMonth || !form.adults) {
        setFeedback({ type: "error", message: "Planlanan ay ve yetişkin sayısı zorunludur." });
        return false;
      }
    }

    if (step === 2 && !form.consentAccepted) {
      setFeedback({ type: "error", message: "Devam etmek için onay verin." });
      return false;
    }

    return true;
  };

  const goNext = () => {
    setFeedback(undefined);
    if (!validateStep(currentStep)) return;
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    setFeedback(undefined);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(undefined);

    if (currentStep < steps.length - 1) {
      goNext();
      return;
    }

    if (!validateStep(2)) return;

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setForm(initialState);
      setCurrentStep(0);
      setFeedback({ type: "success", message: "Başvurunuz alınmıştır." });
    }, 350);
  };

  return (
    <section
      id="hizli-basvuru"
      className={`mx-auto px-4 py-20 md:px-8 md:py-28 ${compact ? "max-w-5xl" : "max-w-7xl"}`}
    >
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && (
            <h2 className="font-display text-3xl leading-tight text-[color:var(--emerald)] md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[color:var(--text-muted)]">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-[color:var(--border-light)] bg-white p-5 text-[color:var(--text)] shadow-[0_30px_90px_rgba(0,0,0,0.08)] sm:p-10"
      >
        <div className="mb-10">
          <div className="relative">
            <div className="absolute left-6 right-6 top-6 h-px bg-[color:var(--border)]" />
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
              {steps.map((step, index) => {
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
                            : "border-[color:var(--border)] bg-white text-[color:var(--text-faint)]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <p className="mt-2 text-base font-semibold text-[color:var(--text-secondary)]">{step.title}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {currentStep === 0 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Ad Soyad</span>
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
              <span className="text-base font-semibold text-[color:var(--text)]">Telefon</span>
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
              <span className="text-base font-semibold text-[color:var(--text)]">E-posta</span>
              <input
                className={fieldClass}
                type="email"
                placeholder="ornek@email.com"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Şehir</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Ankara"
                value={form.city}
                onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Ülke</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Türkiye"
                value={form.country}
                onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Doğum Tarihi</span>
              <input
                className={fieldClass}
                type="date"
                value={form.birthDate}
                onChange={(e) => setForm((prev) => ({ ...prev, birthDate: e.target.value }))}
              />
            </label>
          </div>
        )}

        {currentStep === 1 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Planlanan Ay</span>
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
              <span className="text-base font-semibold text-[color:var(--text)]">Süre</span>
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
              <span className="text-base font-semibold text-[color:var(--text)]">Kalkış Şehri</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="İstanbul"
                value={form.departureCity}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, departureCity: e.target.value }))
                }
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Tur Kategorisi</span>
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
              <span className="text-base font-semibold text-[color:var(--text)]">Yolcu Profili</span>
              <select
                className={fieldClass}
                value={form.travelerProfile}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, travelerProfile: e.target.value }))
                }
              >
                <option value="">Profil seçin</option>
                <option value="solo">Bireysel</option>
                <option value="couple">Çift</option>
                <option value="family">Aile</option>
                <option value="group">Grup</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Yetişkin</span>
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
              <span className="text-base font-semibold text-[color:var(--text)]">Çocuk</span>
              <input
                className={fieldClass}
                type="number"
                min={0}
                max={12}
                value={form.children}
                onChange={(e) => setForm((prev) => ({ ...prev, children: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Oda Tipi</span>
              <select
                className={fieldClass}
                value={form.roomType}
                onChange={(e) => setForm((prev) => ({ ...prev, roomType: e.target.value }))}
              >
                <option value="">Oda tipi seçin</option>
                <option value="double">Çift Kişilik</option>
                <option value="triple">Üç Kişilik</option>
                <option value="quad">Dört Kişilik</option>
                <option value="single">Tek Kişilik</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Bütçe Aralığı</span>
              <select
                className={fieldClass}
                value={form.budgetRange}
                onChange={(e) => setForm((prev) => ({ ...prev, budgetRange: e.target.value }))}
              >
                <option value="">Bütçe seçin</option>
                <option value="economy">Ekonomik</option>
                <option value="comfort">Konfor</option>
                <option value="premium">Premium</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Esnek Tarih</span>
              <select
                className={fieldClass}
                value={form.flexibleDates}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, flexibleDates: e.target.value }))
                }
              >
                <option value="">Seçin</option>
                <option value="yes">Evet</option>
                <option value="no">Hayır</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Konaklama Tercihi</span>
              <select
                className={fieldClass}
                value={form.accommodationStyle}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, accommodationStyle: e.target.value }))
                }
              >
                <option value="">Stil seçin</option>
                <option value="near-haram">Harem Yakını</option>
                <option value="balanced">Dengeli</option>
                <option value="budget">Bütçe Dostu</option>
              </select>
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">İletişim Kanalı</span>
              <select
                className={fieldClass}
                value={form.contactChannel}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, contactChannel: e.target.value }))
                }
              >
                <option value="">Kanal seçin</option>
                <option value="phone">Telefon</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">E-posta</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Uygun İletişim Saati</span>
              <select
                className={fieldClass}
                value={form.contactTime}
                onChange={(e) => setForm((prev) => ({ ...prev, contactTime: e.target.value }))}
              >
                <option value="">Zaman seçin</option>
                <option value="morning">Sabah</option>
                <option value="afternoon">Öğleden Sonra</option>
                <option value="evening">Akşam</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Pasaport Durumu</span>
              <select
                className={fieldClass}
                value={form.passportStatus}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, passportStatus: e.target.value }))
                }
              >
                <option value="">Durum seçin</option>
                <option value="ready">Hazır</option>
                <option value="renewal">Yenileme Gerekli</option>
                <option value="new">Yeni Pasaport Gerekli</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Vize Durumu</span>
              <select
                className={fieldClass}
                value={form.visaStatus}
                onChange={(e) => setForm((prev) => ({ ...prev, visaStatus: e.target.value }))}
              >
                <option value="">Durum seçin</option>
                <option value="ready">Hazır</option>
                <option value="required">Destek Gerekli</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Acil Durum Kişisi</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="İrtibat kişisi"
                value={form.emergencyContactName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, emergencyContactName: e.target.value }))
                }
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-[color:var(--text)]">Acil Durum Telefonu</span>
              <input
                className={fieldClass}
                type="tel"
                placeholder="+90 5xx xxx xx xx"
                value={form.emergencyContactPhone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, emergencyContactPhone: e.target.value }))
                }
              />
            </label>

            <label className="md:col-span-2 flex flex-col gap-2.5">
              <span className="text-base font-semibold text-[color:var(--text)]">Notlar</span>
              <textarea
                className="min-h-36 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--cream)] px-4 py-4 text-base text-[color:var(--text)] placeholder:text-[color:var(--text-faint)] outline-none transition focus:bg-white focus:border-[color:var(--emerald)] focus:ring-2 focus:ring-[color:var(--emerald)]/15"
                placeholder="Ek detaylar"
                value={form.notes}
                onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
              />
            </label>

            <label className="md:col-span-2 flex items-start gap-3 rounded-xl bg-[color:var(--sand)] px-4 py-4 text-base text-[color:var(--text)]">
              <input
                type="checkbox"
                checked={form.consentAccepted}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, consentAccepted: e.target.checked }))
                }
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
            Geri
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--emerald)] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[color:var(--emerald-light)]"
            >
              İleri
              <FiArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--emerald)] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[color:var(--emerald-light)] disabled:opacity-60"
            >
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
              {!isSubmitting && <FiArrowRight className="h-4 w-4" />}
            </button>
          )}
        </div>

        {feedback && (
          <p
            className={`mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ${
              feedback.type === "success"
                ? "bg-[color:var(--emerald)] text-white"
                : "bg-[color:var(--emerald)]/[0.06] text-[color:var(--emerald-deep)]"
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
