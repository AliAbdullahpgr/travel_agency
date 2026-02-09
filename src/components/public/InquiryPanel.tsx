"use client";

import { type FormEvent, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiPhoneCall,
} from "react-icons/fi";
import { contactInfo, plannedMonths } from "~/content/site";

type InquiryPanelProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

type InquiryState = {
  fullName: string;
  phone: string;
  plannedMonth: string;
  tourCategory: string;
  travelerProfile: string;
  notes: string;
  consentAccepted: boolean;
};

const initialState: InquiryState = {
  fullName: "",
  phone: "",
  plannedMonth: "",
  tourCategory: "",
  travelerProfile: "",
  notes: "",
  consentAccepted: false,
};

const registrationSteps = [
  {
    label: "Step 1",
    title: "Contact Details",
    hint: "Tell us who we should call.",
  },
  {
    label: "Step 2",
    title: "Trip Preferences",
    hint: "Share your program priorities.",
  },
  {
    label: "Step 3",
    title: "Final Approval",
    hint: "Review and submit your registration request.",
  },
] as const;

const tourCategories = [
  { value: "umre", label: "Umre Programs" },
  { value: "hac", label: "Hajj Programs" },
  { value: "kultur", label: "Cultural Tours" },
] as const;

const travelerProfiles = [
  "Solo Traveler",
  "Couple",
  "Family",
  "Small Group",
  "Senior Friendly",
] as const;

export function InquiryPanel({
  title = "Tour Registration in 3 Milestones",
  subtitle =
    "Complete the short 3-step flow and our team will call you the same day with the best-fit package.",
  compact = false,
}: InquiryPanelProps) {
  const [form, setForm] = useState<InquiryState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState<
    { type: "success" | "error"; message: string } | undefined
  >(undefined);

  const totalSteps = registrationSteps.length;
  const progressRatio = currentStep / (totalSteps - 1);

  const validateStep = (stepIndex: number) => {
    if (stepIndex === 0) {
      if (form.fullName.trim().length < 2 || form.phone.trim().length < 8) {
        setFeedback({
          type: "error",
          message: "Please enter your full name and a valid phone number.",
        });
        return false;
      }
    }

    if (stepIndex === 1) {
      if (form.plannedMonth.trim().length < 2) {
        setFeedback({
          type: "error",
          message: "Please choose your planned month before continuing.",
        });
        return false;
      }
    }

    if (stepIndex === 2 && !form.consentAccepted) {
      setFeedback({
        type: "error",
        message: "Please accept the privacy approval to submit the form.",
      });
      return false;
    }

    return true;
  };

  const goToNextStep = () => {
    setFeedback(undefined);

    if (!validateStep(currentStep)) {
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const goToPreviousStep = () => {
    setFeedback(undefined);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(undefined);

    if (currentStep < totalSteps - 1) {
      goToNextStep();
      return;
    }

    if (!validateStep(2)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const requestPayload = {
        fullName: form.fullName,
        phone: form.phone,
        plannedMonth: form.plannedMonth,
        consentAccepted: form.consentAccepted,
      };

      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error ?? "Form could not be submitted.");
      }

      setForm(initialState);
      setCurrentStep(0);
      setFeedback({
        type: "success",
        message: "Registration request received. Our team will call you shortly.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "A system error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hizli-basvuru"
      className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
    >
      <div
        className={`grid overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(8,52,44,0.85),rgba(3,20,18,0.92))] ${
          compact ? "lg:grid-cols-[1fr_1.15fr]" : "lg:grid-cols-[1fr_1fr]"
        }`}
      >
        <aside className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-10">
          <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-[color:var(--gold)]/25 blur-3xl" />

          <p className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[color:var(--gold-light)]">
            <span className="inline-block h-px w-6 bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
            Registration
          </p>

          <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
            {subtitle}
          </p>

          <div className="mt-8 space-y-3 rounded-2xl border border-white/[0.08] bg-black/25 p-4">
            {registrationSteps.map((step, index) => {
              const done = index < currentStep;
              const current = index === currentStep;

              return (
                <div
                  key={step.label}
                  className={`flex items-center gap-3 rounded-xl px-2 py-1.5 transition ${
                    current ? "bg-white/8" : ""
                  }`}
                >
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold ${
                      done
                        ? "border-emerald-300/40 bg-emerald-300/20 text-emerald-100"
                        : current
                          ? "border-[color:var(--gold)]/50 bg-[color:var(--gold)]/20 text-[color:var(--gold-light)]"
                          : "border-white/20 bg-white/5 text-white/60"
                    }`}
                  >
                    {done ? <FiCheck className="h-3.5 w-3.5" /> : `0${index + 1}`}
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/75">
                      {step.label}
                    </p>
                    <p className="text-sm text-white">{step.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 space-y-3 rounded-2xl border border-white/[0.08] bg-black/25 p-4">
            <a
              href={`tel:${contactInfo.phonePrimary.replaceAll(" ", "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              <FiPhoneCall className="h-4 w-4 text-[color:var(--gold-light)]" />
              {contactInfo.phonePrimary}
            </a>
            <a
              href={`tel:${contactInfo.phoneSecondary.replaceAll(" ", "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/85"
            >
              <FiPhoneCall className="h-4 w-4 text-[color:var(--gold-light)]" />
              {contactInfo.phoneSecondary}
            </a>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 lg:p-10">
          <div className="rounded-2xl border border-white/[0.1] bg-black/20 p-4">
            <div className="relative">
              <div className="absolute left-5 right-5 top-5 h-px bg-white/18" />
              <div
                className="absolute left-5 top-5 h-px bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--brand)] transition-all duration-500"
                style={{ width: `calc((100% - 2.5rem) * ${progressRatio})` }}
              />
              <ol className="relative grid grid-cols-3 gap-2">
                {registrationSteps.map((step, index) => {
                  const done = index < currentStep;
                  const current = index === currentStep;

                  return (
                    <li key={step.label} className="text-center">
                      <span
                        className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition ${
                          done
                            ? "border-emerald-300/45 bg-emerald-300/25 text-emerald-100"
                            : current
                              ? "border-[color:var(--gold)]/55 bg-[color:var(--gold)]/22 text-[color:var(--gold-light)]"
                              : "border-white/20 bg-black/30 text-white/65"
                        }`}
                      >
                        {done ? <FiCheck className="h-4 w-4" /> : `0${index + 1}`}
                      </span>
                      <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-white/55">
                        {step.label}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.1] bg-black/22 p-4">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[color:var(--gold-light)]">
              {registrationSteps[currentStep]?.label}
            </p>
            <h3 className="mt-1 font-display text-2xl text-white">
              {registrationSteps[currentStep]?.title}
            </h3>
            <p className="mt-1.5 text-sm text-white/65">
              {registrationSteps[currentStep]?.hint}
            </p>
          </div>

          {currentStep === 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                  Full Name
                </span>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  required
                  minLength={2}
                  maxLength={120}
                  placeholder="Jane Doe"
                  className="lux-input"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                  Phone
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  minLength={8}
                  maxLength={30}
                  placeholder="+90 554 000 00 00"
                  className="lux-input"
                />
              </label>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                    Planned Month
                  </span>
                  <select
                    value={form.plannedMonth}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        plannedMonth: e.target.value,
                      }))
                    }
                    className="lux-input"
                    required
                  >
                    <option value="" disabled>
                      Select a month
                    </option>
                    {plannedMonths.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                    Tour Category
                  </span>
                  <select
                    value={form.tourCategory}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        tourCategory: e.target.value,
                      }))
                    }
                    className="lux-input"
                  >
                    <option value="">Select category</option>
                    {tourCategories.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                  Traveler Profile
                </span>
                <select
                  value={form.travelerProfile}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      travelerProfile: e.target.value,
                    }))
                  }
                  className="lux-input"
                >
                  <option value="">Select profile</option>
                  {travelerProfiles.map((profile) => (
                    <option key={profile} value={profile}>
                      {profile}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                  Notes (optional)
                </span>
                <textarea
                  value={form.notes}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  rows={3}
                  placeholder="Share budget, duration, or hotel preference."
                  className="lux-input min-h-24 resize-y"
                />
              </label>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 sm:grid-cols-2">
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-white/50">
                    Full Name
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {form.fullName || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-white/50">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{form.phone || "-"}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-white/50">
                    Planned Month
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {form.plannedMonth || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-white/50">
                    Tour Category
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {tourCategories.find((item) => item.value === form.tourCategory)?.label ??
                      "-"}
                  </p>
                </div>
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/65">
                <input
                  type="checkbox"
                  checked={form.consentAccepted}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      consentAccepted: e.target.checked,
                    }))
                  }
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ accentColor: "var(--brand)" }}
                />
                I have read the privacy notice and allow my data to be used for this tour
                registration request.
              </label>
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={goToPreviousStep}
              className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                currentStep === 0
                  ? "pointer-events-none opacity-0"
                  : "border-white/20 text-white hover:border-white/35 hover:bg-white/6"
              }`}
            >
              <FiArrowLeft className="h-4 w-4" />
              Back
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                type="button"
                onClick={goToNextStep}
                className="lux-button sm:ml-auto"
              >
                Continue
                <FiArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="lux-button sm:ml-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
                {!isSubmitting && <FiArrowRight className="h-4 w-4" />}
              </button>
            )}
          </div>

          {feedback && (
            <p
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${
                feedback.type === "success"
                  ? "bg-emerald-400/15 text-emerald-200"
                  : "bg-red-400/15 text-red-200"
              }`}
            >
              {feedback.type === "success" && <FiCheckCircle className="h-4 w-4" />}
              {feedback.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
