"use client";

import { useState } from "react";
import { ImageUploadField } from "~/app/admin/components/image-upload-field";
import type {
  InquiryPanelData,
  LandingFaqData,
  LandingHeroData,
  LandingSliderData,
  LandingTestimonialsData,
  TourCategoryHeroesData,
} from "~/server/cms/schemas";

type LandingEditorProps = {
  initialHero: LandingHeroData;
  initialSlider: LandingSliderData;
  initialTestimonials: LandingTestimonialsData;
  initialFaq: LandingFaqData;
  initialInquiryPanel: InquiryPanelData;
  initialCategoryHeroes: TourCategoryHeroesData;
};

const categoryLabels: Record<keyof TourCategoryHeroesData, string> = {
  umre: "Umre",
  hac: "Hac",
  kultur: "Kultur",
};

async function saveSection(key: string, data: unknown) {
  const response = await fetch(`/api/admin/sections/${key}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  const payload = (await response.json().catch(() => ({}))) as { error?: string };
  if (!response.ok) {
    throw new Error(payload.error ?? "Kayit basarisiz.");
  }
}

export function LandingEditor({
  initialHero,
  initialSlider,
  initialTestimonials,
  initialFaq,
  initialInquiryPanel,
  initialCategoryHeroes,
}: LandingEditorProps) {
  const [hero, setHero] = useState(initialHero);
  const [slider, setSlider] = useState(initialSlider);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [faq, setFaq] = useState(initialFaq);
  const [inquiryPanel, setInquiryPanel] = useState(initialInquiryPanel);
  const [categoryHeroes, setCategoryHeroes] = useState(initialCategoryHeroes);
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const messageTone =
    message &&
    (message.toLowerCase().includes("basarisiz") || message.toLowerCase().includes("hata"))
      ? "admin-message-error"
      : "admin-message-success";

  const save = async (key: string, data: unknown) => {
    setSaving(key);
    setMessage(null);
    try {
      await saveSection(key, data);
      setMessage(`${key} kaydedildi.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Kayit basarisiz.");
    } finally {
      setSaving(null);
    }
  };

  return (
    <div className="admin-editor space-y-6">
      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Landing Hero</h2>
        <div className="mt-4 space-y-3">
          {hero.slides.map((slide, index) => (
            <div key={index} className="admin-repeater space-y-2">
              <input
                className="admin-field"
                value={slide.title}
                onChange={(event) => {
                  const next = [...hero.slides];
                  next[index] = { ...next[index]!, title: event.target.value };
                  setHero((prev) => ({ ...prev, slides: next }));
                }}
                placeholder="Baslik"
              />
              <input
                className="admin-field"
                value={slide.subtitle}
                onChange={(event) => {
                  const next = [...hero.slides];
                  next[index] = { ...next[index]!, subtitle: event.target.value };
                  setHero((prev) => ({ ...prev, slides: next }));
                }}
                placeholder="Alt baslik"
              />
              <ImageUploadField
                label="Slide Gorsel"
                value={slide.image}
                onChange={(value) => {
                  const next = [...hero.slides];
                  next[index] = { ...next[index]!, image: value };
                  setHero((prev) => ({ ...prev, slides: next }));
                }}
              />
            </div>
          ))}
          <input
            className="admin-field"
            value={hero.primaryCtaLabel}
            onChange={(event) => setHero((prev) => ({ ...prev, primaryCtaLabel: event.target.value }))}
            placeholder="Hero CTA etiketi"
          />

          <div className="admin-repeater space-y-2">
            <p className="text-sm font-semibold text-gray-700">Featured Card</p>
            <div className="grid gap-3 md:grid-cols-2">
              <input
                className="admin-field"
                value={hero.featuredCard.category}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, category: event.target.value },
                  }))
                }
                placeholder="Kategori"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.price}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, price: event.target.value },
                  }))
                }
                placeholder="Fiyat"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.currency}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, currency: event.target.value },
                  }))
                }
                placeholder="Para Birimi"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.perPerson}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, perPerson: event.target.value },
                  }))
                }
                placeholder="Kisi Basi"
              />
              <input
                type="number"
                className="admin-field"
                value={hero.featuredCard.remainingSeats}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      remainingSeats: Number(event.target.value) || 0,
                    },
                  }))
                }
                placeholder="Kalan Yer"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.tourCode}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, tourCode: event.target.value },
                  }))
                }
                placeholder="Tur Kodu"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <input
                className="admin-field"
                value={hero.featuredCard.flightType}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, flightType: event.target.value },
                  }))
                }
                placeholder="Ucus Tipi"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.href}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, href: event.target.value },
                  }))
                }
                placeholder="CTA Link"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.ctaLabel}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, ctaLabel: event.target.value },
                  }))
                }
                placeholder="CTA Etiket"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.seatLabelPrefix}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, seatLabelPrefix: event.target.value },
                  }))
                }
                placeholder="Yer Prefix"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.tourNameLabel}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: { ...prev.featuredCard, tourNameLabel: event.target.value },
                  }))
                }
                placeholder="Tur Isim Etiketi"
              />
            </div>

            <label className="space-y-1">
              <span className="text-xs font-semibold uppercase text-gray-500">Rozetler (virgul ile)</span>
              <input
                className="admin-field"
                value={hero.featuredCard.badges.join(", ")}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      badges: event.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean),
                    },
                  }))
                }
              />
            </label>

            {hero.featuredCard.hotels.map((hotel, index) => (
              <div key={index} className="admin-repeater space-y-2">
                <div className="grid gap-2 md:grid-cols-3">
                  <input
                    className="admin-field"
                    value={hotel.name}
                    onChange={(event) => {
                      const next = [...hero.featuredCard.hotels];
                      next[index] = { ...next[index]!, name: event.target.value };
                      setHero((prev) => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                    }}
                    placeholder="Otel Adi"
                  />
                  <input
                    className="admin-field"
                    value={hotel.city}
                    onChange={(event) => {
                      const next = [...hero.featuredCard.hotels];
                      next[index] = { ...next[index]!, city: event.target.value };
                      setHero((prev) => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                    }}
                    placeholder="Sehir"
                  />
                  <input
                    type="number"
                    className="admin-field"
                    value={hotel.nights}
                    onChange={(event) => {
                      const next = [...hero.featuredCard.hotels];
                      next[index] = { ...next[index]!, nights: Number(event.target.value) || 1 };
                      setHero((prev) => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                    }}
                    placeholder="Gece"
                  />
                </div>
                <ImageUploadField
                  label={`Otel Gorsel ${index + 1}`}
                  value={hotel.image}
                  onChange={(value) => {
                    const next = [...hero.featuredCard.hotels];
                    next[index] = { ...next[index]!, image: value };
                    setHero((prev) => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                  }}
                />
              </div>
            ))}

            <div className="grid gap-3 md:grid-cols-3">
              <input
                className="admin-field"
                value={hero.featuredCard.dates.departure}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      dates: { ...prev.featuredCard.dates, departure: event.target.value },
                    },
                  }))
                }
                placeholder="Gidis Tarihi"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.dates.transfer}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      dates: { ...prev.featuredCard.dates, transfer: event.target.value },
                    },
                  }))
                }
                placeholder="Gecis Tarihi"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.dates.returnDate}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      dates: { ...prev.featuredCard.dates, returnDate: event.target.value },
                    },
                  }))
                }
                placeholder="Donus Tarihi"
              />
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <input
                className="admin-field"
                value={hero.featuredCard.dateLabels.departure}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      dateLabels: { ...prev.featuredCard.dateLabels, departure: event.target.value },
                    },
                  }))
                }
                placeholder="Gidis Etiketi"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.dateLabels.transfer}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      dateLabels: { ...prev.featuredCard.dateLabels, transfer: event.target.value },
                    },
                  }))
                }
                placeholder="Gecis Etiketi"
              />
              <input
                className="admin-field"
                value={hero.featuredCard.dateLabels.returnDate}
                onChange={(event) =>
                  setHero((prev) => ({
                    ...prev,
                    featuredCard: {
                      ...prev.featuredCard,
                      dateLabels: { ...prev.featuredCard.dateLabels, returnDate: event.target.value },
                    },
                  }))
                }
                placeholder="Donus Etiketi"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => save("landing_hero", hero)}
            disabled={saving === "landing_hero"}
            className="admin-btn admin-btn-primary disabled:opacity-60"
          >
            {saving === "landing_hero" ? "Kaydediliyor..." : "Hero Kaydet"}
          </button>
        </div>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Landing Slider</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {Object.entries(slider).map(([key, value]) => (
            <label key={key} className="space-y-1">
              <span className="text-xs font-semibold uppercase text-gray-500">{key}</span>
              <input
                className="admin-field"
                value={value}
                onChange={(event) => setSlider((prev) => ({ ...prev, [key]: event.target.value }))}
              />
            </label>
          ))}
        </div>
        <button
          type="button"
          onClick={() => save("landing_slider", slider)}
          disabled={saving === "landing_slider"}
          className="admin-btn admin-btn-primary mt-4 disabled:opacity-60"
        >
          {saving === "landing_slider" ? "Kaydediliyor..." : "Slider Kaydet"}
        </button>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Testimonials</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <input
            className="admin-field"
            value={testimonials.eyebrow}
            onChange={(event) => setTestimonials((prev) => ({ ...prev, eyebrow: event.target.value }))}
            placeholder="Eyebrow"
          />
          <input
            className="admin-field"
            value={testimonials.title}
            onChange={(event) => setTestimonials((prev) => ({ ...prev, title: event.target.value }))}
            placeholder="Baslik"
          />
          <input
            className="admin-field"
            value={testimonials.titleAccent}
            onChange={(event) => setTestimonials((prev) => ({ ...prev, titleAccent: event.target.value }))}
            placeholder="Baslik Vurgu"
          />
        </div>

        <label className="mt-3 block space-y-1">
          <span className="text-xs font-semibold uppercase text-gray-500">Testimonials (name|route|rating|quote)</span>
          <textarea
            className="admin-field admin-textarea min-h-32"
            value={testimonials.testimonials.map((item) => `${item.name}|${item.route}|${item.rating}|${item.quote}`).join("\n")}
            onChange={(event) =>
              setTestimonials((prev) => ({
                ...prev,
                testimonials: event.target.value
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line) => {
                    const [name = "", route = "", rating = "5", quote = ""] = line.split("|");
                    return { name, route, rating: Math.min(5, Math.max(1, Number(rating) || 1)), quote };
                  }),
              }))
            }
          />
        </label>

        <label className="mt-3 block space-y-1">
          <span className="text-xs font-semibold uppercase text-gray-500">Stats (label|value|suffix|note)</span>
          <textarea
            className="admin-field admin-textarea min-h-28"
            value={testimonials.trustStats.map((item) => `${item.label}|${item.value}|${item.suffix}|${item.note}`).join("\n")}
            onChange={(event) =>
              setTestimonials((prev) => ({
                ...prev,
                trustStats: event.target.value
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line) => {
                    const [label = "", value = "0", suffix = "", note = ""] = line.split("|");
                    return { label, value: Number(value) || 0, suffix, note };
                  }),
              }))
            }
          />
        </label>

        <button
          type="button"
          onClick={() => save("landing_testimonials", testimonials)}
          disabled={saving === "landing_testimonials"}
          className="admin-btn admin-btn-primary mt-4 disabled:opacity-60"
        >
          {saving === "landing_testimonials" ? "Kaydediliyor..." : "Testimonials Kaydet"}
        </button>
      </section>
      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">FAQ</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            className="admin-field"
            value={faq.eyebrow}
            onChange={(event) => setFaq((prev) => ({ ...prev, eyebrow: event.target.value }))}
            placeholder="Eyebrow"
          />
          <input
            className="admin-field"
            value={faq.title}
            onChange={(event) => setFaq((prev) => ({ ...prev, title: event.target.value }))}
            placeholder="Baslik"
          />
        </div>
        <textarea
          className="admin-field admin-textarea mt-3 min-h-24"
          value={faq.description}
          onChange={(event) => setFaq((prev) => ({ ...prev, description: event.target.value }))}
          placeholder="Aciklama"
        />
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <input
            className="admin-field"
            value={faq.ctaPrompt}
            onChange={(event) => setFaq((prev) => ({ ...prev, ctaPrompt: event.target.value }))}
            placeholder="CTA Prompt"
          />
          <input
            className="admin-field"
            value={faq.ctaLabel}
            onChange={(event) => setFaq((prev) => ({ ...prev, ctaLabel: event.target.value }))}
            placeholder="CTA Label"
          />
        </div>

        <label className="mt-3 block space-y-1">
          <span className="text-xs font-semibold uppercase text-gray-500">FAQ (question|answer)</span>
          <textarea
            className="admin-field admin-textarea min-h-32"
            value={faq.faqs.map((item) => `${item.question}|${item.answer}`).join("\n")}
            onChange={(event) =>
              setFaq((prev) => ({
                ...prev,
                faqs: event.target.value
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line) => {
                    const [question = "", answer = ""] = line.split("|");
                    return { question, answer };
                  }),
              }))
            }
          />
        </label>

        <button
          type="button"
          onClick={() => save("landing_faq", faq)}
          disabled={saving === "landing_faq"}
          className="admin-btn admin-btn-primary mt-4 disabled:opacity-60"
        >
          {saving === "landing_faq" ? "Kaydediliyor..." : "FAQ Kaydet"}
        </button>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Basvuru Paneli</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            className="admin-field"
            value={inquiryPanel.title}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, title: event.target.value }))}
            placeholder="Baslik"
          />
          <input
            className="admin-field"
            value={inquiryPanel.subtitle}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, subtitle: event.target.value }))}
            placeholder="Alt Baslik"
          />
          <input
            className="admin-field"
            value={inquiryPanel.backLabel}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, backLabel: event.target.value }))}
            placeholder="Geri"
          />
          <input
            className="admin-field"
            value={inquiryPanel.nextLabel}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, nextLabel: event.target.value }))}
            placeholder="Ileri"
          />
          <input
            className="admin-field"
            value={inquiryPanel.finishLabel}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, finishLabel: event.target.value }))}
            placeholder="Tamamla"
          />
          <input
            className="admin-field"
            value={inquiryPanel.savingLabel}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, savingLabel: event.target.value }))}
            placeholder="Kaydediliyor"
          />
          <input
            className="admin-field md:col-span-2"
            value={inquiryPanel.successMessage}
            onChange={(event) => setInquiryPanel((prev) => ({ ...prev, successMessage: event.target.value }))}
            placeholder="Basari Mesaji"
          />
        </div>

        <label className="mt-3 block space-y-1">
          <span className="text-xs font-semibold uppercase text-gray-500">Adimlar (number|title, 3 satir)</span>
          <textarea
            className="admin-field admin-textarea min-h-24"
            value={inquiryPanel.steps.map((step) => `${step.number}|${step.title}`).join("\n")}
            onChange={(event) =>
              setInquiryPanel((prev) => ({
                ...prev,
                steps: event.target.value
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .slice(0, 3)
                  .map((line) => {
                    const [number = "", title = ""] = line.split("|");
                    return { number, title };
                  }),
              }))
            }
          />
        </label>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <input
            className="admin-field"
            value={inquiryPanel.stepValidationMessages.personal}
            onChange={(event) =>
              setInquiryPanel((prev) => ({
                ...prev,
                stepValidationMessages: {
                  ...prev.stepValidationMessages,
                  personal: event.target.value,
                },
              }))
            }
            placeholder="Personal Mesaj"
          />
          <input
            className="admin-field"
            value={inquiryPanel.stepValidationMessages.trip}
            onChange={(event) =>
              setInquiryPanel((prev) => ({
                ...prev,
                stepValidationMessages: {
                  ...prev.stepValidationMessages,
                  trip: event.target.value,
                },
              }))
            }
            placeholder="Trip Mesaj"
          />
          <input
            className="admin-field"
            value={inquiryPanel.stepValidationMessages.consent}
            onChange={(event) =>
              setInquiryPanel((prev) => ({
                ...prev,
                stepValidationMessages: {
                  ...prev.stepValidationMessages,
                  consent: event.target.value,
                },
              }))
            }
            placeholder="Consent Mesaj"
          />
        </div>

        <button
          type="button"
          onClick={() => save("inquiry_panel", inquiryPanel)}
          disabled={saving === "inquiry_panel"}
          className="admin-btn admin-btn-primary mt-4 disabled:opacity-60"
        >
          {saving === "inquiry_panel" ? "Kaydediliyor..." : "Basvuru Paneli Kaydet"}
        </button>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Kategori Hero Alanlari</h2>
        <div className="mt-4 space-y-4">
          {(Object.keys(categoryHeroes) as Array<keyof TourCategoryHeroesData>).map((key) => (
            <div key={key} className="admin-repeater space-y-3">
              <p className="text-sm font-semibold text-gray-700">{categoryLabels[key]} Hero</p>
              <input
                className="admin-field"
                value={categoryHeroes[key].eyebrow}
                onChange={(event) =>
                  setCategoryHeroes((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], eyebrow: event.target.value },
                  }))
                }
                placeholder="Eyebrow"
              />
              <input
                className="admin-field"
                value={categoryHeroes[key].title}
                onChange={(event) =>
                  setCategoryHeroes((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], title: event.target.value },
                  }))
                }
                placeholder="Baslik"
              />
              <textarea
                className="admin-field admin-textarea min-h-20"
                value={categoryHeroes[key].subtitle}
                onChange={(event) =>
                  setCategoryHeroes((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], subtitle: event.target.value },
                  }))
                }
                placeholder="Alt Baslik"
              />
              <ImageUploadField
                label={`${categoryLabels[key]} Hero Gorsel`}
                value={categoryHeroes[key].image}
                onChange={(value) =>
                  setCategoryHeroes((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], image: value },
                  }))
                }
              />
              <input
                className="admin-field"
                value={categoryHeroes[key].chips.join(", ")}
                onChange={(event) =>
                  setCategoryHeroes((prev) => ({
                    ...prev,
                    [key]: {
                      ...prev[key],
                      chips: event.target.value
                        .split(",")
                        .map((chip) => chip.trim())
                        .filter(Boolean),
                    },
                  }))
                }
                placeholder="Chipler (virgul ile)"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => save("tour_category_heroes", categoryHeroes)}
          disabled={saving === "tour_category_heroes"}
          className="admin-btn admin-btn-primary mt-4 disabled:opacity-60"
        >
          {saving === "tour_category_heroes" ? "Kaydediliyor..." : "Kategori Hero Kaydet"}
        </button>
      </section>

      {message && <p className={`admin-message ${messageTone}`}>{message}</p>}
    </div>
  );
}


