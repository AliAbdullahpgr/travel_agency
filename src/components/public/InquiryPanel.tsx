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
  { number: "01", title: "Personal" },
  { number: "02", title: "Trip" },
  { number: "03", title: "Confirm" },
] as const;

const fieldClass =
  "w-full rounded-xl border border-transparent bg-black/[0.04] px-4 py-4 text-base text-black placeholder:text-black/45 outline-none transition focus:bg-white focus:ring-2 focus:ring-black/20";
const labelClass = "flex flex-col gap-2.5";

export function InquiryPanel({ compact = false }: InquiryPanelProps) {
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
        setFeedback({ type: "error", message: "Enter full name and valid phone." });
        return false;
      }
    }

    if (step === 1) {
      if (!form.plannedMonth || !form.adults) {
        setFeedback({ type: "error", message: "Planned month and adults are required." });
        return false;
      }
    }

    if (step === 2 && !form.consentAccepted) {
      setFeedback({ type: "error", message: "Accept consent to complete." });
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
      setFeedback({ type: "success", message: "Form completed (UI only)." });
    }, 350);
  };

  return (
    <section
      id="hizli-basvuru"
      className={`mx-auto px-4 py-20 md:px-8 md:py-28 ${compact ? "max-w-5xl" : "max-w-7xl"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] bg-white p-5 text-black shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-10"
      >
        <div className="mb-10">
          <div className="relative">
            <div className="absolute left-6 right-6 top-6 h-px bg-black/20" />
            <div
              className="absolute left-6 top-6 h-0.5 bg-black transition-all duration-300"
              style={{ width: `calc((100% - 3rem) * ${progressRatio})` }}
              role="progressbar"
              aria-valuenow={Math.round(progressRatio * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Form progress: ${Math.round(progressRatio * 100)}%`}
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
                          ? "border-[#f59e0b] bg-[#f59e0b] text-white"
                          : active
                            ? "border-black bg-white text-black"
                            : "border-black/30 bg-white text-black/60"
                      }`}
                    >
                      {step.number}
                    </span>
                    <p className="mt-2 text-base font-semibold text-black/75">{step.title}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {currentStep === 0 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Full Name</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="John Doe"
                value={form.fullName}
                onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Phone</span>
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
              <span className="text-base font-semibold text-black/85">Email</span>
              <input
                className={fieldClass}
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">City</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Ankara"
                value={form.city}
                onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Country</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Turkey"
                value={form.country}
                onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Date of Birth</span>
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
              <span className="text-base font-semibold text-black/85">Planned Month</span>
              <select
                className={fieldClass}
                value={form.plannedMonth}
                onChange={(e) => setForm((prev) => ({ ...prev, plannedMonth: e.target.value }))}
                required
              >
                <option value="">Select month</option>
                {plannedMonths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Duration</span>
              <select
                className={fieldClass}
                value={form.duration}
                onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
              >
                <option value="">Select duration</option>
                <option value="7">7 Days</option>
                <option value="10">10 Days</option>
                <option value="15">15 Days</option>
                <option value="20">20 Days</option>
                <option value="30">30 Days</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Departure City</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Istanbul"
                value={form.departureCity}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, departureCity: e.target.value }))
                }
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Tour Category</span>
              <select
                className={fieldClass}
                value={form.tourCategory}
                onChange={(e) => setForm((prev) => ({ ...prev, tourCategory: e.target.value }))}
              >
                <option value="">Select category</option>
                <option value="umre">Umre</option>
                <option value="hac">Hac</option>
                <option value="kultur">Cultural</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Traveler Profile</span>
              <select
                className={fieldClass}
                value={form.travelerProfile}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, travelerProfile: e.target.value }))
                }
              >
                <option value="">Select profile</option>
                <option value="solo">Solo</option>
                <option value="couple">Couple</option>
                <option value="family">Family</option>
                <option value="group">Group</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Adults</span>
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
              <span className="text-base font-semibold text-black/85">Children</span>
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
              <span className="text-base font-semibold text-black/85">Room Type</span>
              <select
                className={fieldClass}
                value={form.roomType}
                onChange={(e) => setForm((prev) => ({ ...prev, roomType: e.target.value }))}
              >
                <option value="">Select room type</option>
                <option value="double">Double</option>
                <option value="triple">Triple</option>
                <option value="quad">Quad</option>
                <option value="single">Single</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Budget Range</span>
              <select
                className={fieldClass}
                value={form.budgetRange}
                onChange={(e) => setForm((prev) => ({ ...prev, budgetRange: e.target.value }))}
              >
                <option value="">Select budget</option>
                <option value="economy">Economy</option>
                <option value="comfort">Comfort</option>
                <option value="premium">Premium</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Flexible Dates</span>
              <select
                className={fieldClass}
                value={form.flexibleDates}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, flexibleDates: e.target.value }))
                }
              >
                <option value="">Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Accommodation Style</span>
              <select
                className={fieldClass}
                value={form.accommodationStyle}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, accommodationStyle: e.target.value }))
                }
              >
                <option value="">Select style</option>
                <option value="near-haram">Near Haram</option>
                <option value="balanced">Balanced</option>
                <option value="budget">Budget Friendly</option>
              </select>
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid gap-7 md:grid-cols-2 md:gap-8">
            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Contact Channel</span>
              <select
                className={fieldClass}
                value={form.contactChannel}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, contactChannel: e.target.value }))
                }
              >
                <option value="">Select channel</option>
                <option value="phone">Phone Call</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Best Contact Time</span>
              <select
                className={fieldClass}
                value={form.contactTime}
                onChange={(e) => setForm((prev) => ({ ...prev, contactTime: e.target.value }))}
              >
                <option value="">Select time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Passport Status</span>
              <select
                className={fieldClass}
                value={form.passportStatus}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, passportStatus: e.target.value }))
                }
              >
                <option value="">Select status</option>
                <option value="ready">Ready</option>
                <option value="renewal">Need Renewal</option>
                <option value="new">Need New Passport</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Visa Status</span>
              <select
                className={fieldClass}
                value={form.visaStatus}
                onChange={(e) => setForm((prev) => ({ ...prev, visaStatus: e.target.value }))}
              >
                <option value="">Select status</option>
                <option value="ready">Ready</option>
                <option value="required">Need Support</option>
              </select>
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Emergency Contact Name</span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Contact person"
                value={form.emergencyContactName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, emergencyContactName: e.target.value }))
                }
              />
            </label>

            <label className={labelClass}>
              <span className="text-base font-semibold text-black/85">Emergency Contact Phone</span>
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
              <span className="text-base font-semibold text-black/85">Notes</span>
              <textarea
                className="min-h-36 w-full rounded-xl border border-transparent bg-black/[0.04] px-4 py-4 text-base text-black placeholder:text-black/45 outline-none transition focus:bg-white focus:ring-2 focus:ring-black/20"
                placeholder="Extra details"
                value={form.notes}
                onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
              />
            </label>

            <label className="md:col-span-2 flex items-start gap-3 rounded-xl bg-black/6 px-4 py-4 text-base text-black/85">
              <input
                type="checkbox"
                checked={form.consentAccepted}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, consentAccepted: e.target.checked }))
                }
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer"
                style={{ accentColor: "#0a3d2e" }}
              />
              I approve this UI demo registration form.
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
                : "border-black/25 text-black hover:border-black hover:bg-black/5"
            }`}
          >
            <FiArrowLeft className="h-4 w-4" />
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition hover:bg-black/85"
            >
              Next
              <FiArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition hover:bg-black/85 disabled:opacity-60"
            >
              {isSubmitting ? "Saving..." : "Finish"}
              {!isSubmitting && <FiArrowRight className="h-4 w-4" />}
            </button>
          )}
        </div>

        {feedback && (
          <p
            className={`mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ${
              feedback.type === "success"
                ? "bg-black text-white"
                : "bg-black/[0.06] text-black"
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
