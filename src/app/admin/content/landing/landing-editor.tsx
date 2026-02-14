"use client";

import { useState } from "react";
import { ImageUploadField } from "~/app/admin/components/image-upload-field";
import { 
  FiSave, 
  FiLayout, 
  FiSliders, 
  FiMessageSquare, 
  FiHelpCircle, 
  FiCheck,
  FiGrid,
  FiMap,
  FiGlobe,
  FiList,
  FiType,
  FiCalendar,
  FiTag,
  FiAlertCircle
} from "react-icons/fi";
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

  const messageTone =
    message &&
    (message.toLowerCase().includes("basarisiz") || message.toLowerCase().includes("hata"))
      ? "text-rose-600"
      : "text-emerald-600";

  return (
    <div className="space-y-6 pb-20">
      {/* ── Action Header ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm sticky top-4 z-10">
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 text-gray-500">
                <FiLayout size={20} />
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-900">
                    Landing Icerikleri
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                    Aktif
                </div>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
             {message && (
                <span className={`text-sm font-medium ${messageTone} flex items-center gap-1`}>
                   {messageTone.includes("emerald") && <FiCheck />} {message}
                </span>
            )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Left Column ── */}
        <div className="space-y-6">
            
            {/* Hero Section */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiLayout className="text-gray-400" /> Landing Hero
                    </div>
                    <button
                        type="button"
                        onClick={() => save("landing_hero", hero)}
                        disabled={saving === "landing_hero"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "landing_hero" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    {hero.slides.map((slide, index) => (
                        <div key={index} className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                            <h4 className="text-xs font-bold text-gray-500 uppercase">Slide {index + 1}</h4>
                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Baslik</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={slide.title}
                                    onChange={(event) => {
                                        const next = [...hero.slides];
                                        next[index] = { ...next[index]!, title: event.target.value };
                                        setHero((prev) => ({ ...prev, slides: next }));
                                    }}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Alt Baslik</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={slide.subtitle}
                                    onChange={(event) => {
                                        const next = [...hero.slides];
                                        next[index] = { ...next[index]!, subtitle: event.target.value };
                                        setHero((prev) => ({ ...prev, slides: next }));
                                    }}
                                />
                            </div>
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
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Hero CTA Etiketi</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={hero.primaryCtaLabel}
                            onChange={(event) => setHero((prev) => ({ ...prev, primaryCtaLabel: event.target.value }))}
                        />
                    </div>
                </div>
            </div>
            
            {/* Featured Card */}
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiGrid className="text-gray-400" /> Featured Card
                    </div>
                     <button
                        type="button"
                        onClick={() => save("landing_hero", hero)}
                        disabled={saving === "landing_hero"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "landing_hero" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 space-y-6">
                     {/* Basic Info */}
                     <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Kategori</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={hero.featuredCard.category} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, category: e.target.value } }))} />
                        </div>
                        <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Fiyat</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={hero.featuredCard.price} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, price: e.target.value } }))} />
                        </div>
                        <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Para Birimi</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={hero.featuredCard.currency} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, currency: e.target.value } }))} />
                        </div>
                        <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Kisi Basi</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={hero.featuredCard.perPerson} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, perPerson: e.target.value } }))} />
                        </div>
                        <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Kalan Yer</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" type="number"
                                value={hero.featuredCard.remainingSeats} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, remainingSeats: Number(e.target.value)||0 } }))} />
                        </div>
                        <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Tur Kodu</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={hero.featuredCard.tourCode} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, tourCode: e.target.value } }))} />
                        </div>
                         <div className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">Ucus Tipi</label>
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={hero.featuredCard.flightType} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, flightType: e.target.value } }))} placeholder="Örn: THY" />
                        </div>
                     </div>
                     
                     {/* Labels & Links */}
                     <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase"><FiType /> Etiketler & Linkler</div>
                        <div className="grid gap-4 md:grid-cols-2">
                             <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">CTA Link</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={hero.featuredCard.href} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, href: e.target.value } }))} />
                            </div>
                             <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">CTA Label</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={hero.featuredCard.ctaLabel} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, ctaLabel: e.target.value } }))} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Yer Prefix</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={hero.featuredCard.seatLabelPrefix} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, seatLabelPrefix: e.target.value } }))} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Tur Isim Etiketi</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={hero.featuredCard.tourNameLabel} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, tourNameLabel: e.target.value } }))} />
                            </div>
                        </div>
                         <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Rozetler (Virgul ile)</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={hero.featuredCard.badges.join(", ")} 
                                    onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, badges: e.target.value.split(',').map(s => s.trim()).filter(Boolean) } }))} />
                         </div>
                     </div>

                     {/* Dates */}
                     <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase"><FiCalendar /> Tarihler</div>
                        <div className="grid gap-3 md:grid-cols-3">
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Gidis Tarihi"
                                value={hero.featuredCard.dates.departure} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, dates: { ...prev.featuredCard.dates, departure: e.target.value } } }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Gecis Tarihi"
                                value={hero.featuredCard.dates.transfer} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, dates: { ...prev.featuredCard.dates, transfer: e.target.value } } }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Donus Tarihi"
                                value={hero.featuredCard.dates.returnDate} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, dates: { ...prev.featuredCard.dates, returnDate: e.target.value } } }))} />
                        </div>
                        <div className="grid gap-3 md:grid-cols-3">
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Gidis Etiketi"
                                value={hero.featuredCard.dateLabels.departure} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, dateLabels: { ...prev.featuredCard.dateLabels, departure: e.target.value } } }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Gecis Etiketi"
                                value={hero.featuredCard.dateLabels.transfer} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, dateLabels: { ...prev.featuredCard.dateLabels, transfer: e.target.value } } }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Donus Etiketi"
                                value={hero.featuredCard.dateLabels.returnDate} onChange={(e) => setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, dateLabels: { ...prev.featuredCard.dateLabels, returnDate: e.target.value } } }))} />
                        </div>
                     </div>

                     {/* Hotels */}
                     <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase"><FiMap /> Oteller</div>
                        {hero.featuredCard.hotels.map((hotel, index) => (
                        <div key={index} className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                            <div className="grid gap-2 md:grid-cols-3">
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Otel Adi"
                                value={hotel.name} onChange={(e) => {
                                    const next = [...hero.featuredCard.hotels];
                                    next[index] = { ...next[index]!, name: e.target.value };
                                    setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                                }} />
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Sehir"
                                value={hotel.city} onChange={(e) => {
                                    const next = [...hero.featuredCard.hotels];
                                    next[index] = { ...next[index]!, city: e.target.value };
                                    setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                                }} />
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" type="number" placeholder="Gece"
                                value={hotel.nights} onChange={(e) => {
                                    const next = [...hero.featuredCard.hotels];
                                    next[index] = { ...next[index]!, nights: Number(e.target.value)||1 };
                                    setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                                }} />
                            </div>
                            <ImageUploadField
                                label={`Otel ${index+1}`}
                                value={hotel.image}
                                onChange={(value) => {
                                    const next = [...hero.featuredCard.hotels];
                                    next[index] = { ...next[index]!, image: value };
                                    setHero(prev => ({ ...prev, featuredCard: { ...prev.featuredCard, hotels: next } }));
                                }}
                            />
                        </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiMessageSquare className="text-gray-400" /> Testimonials
                    </div>
                     <button
                        type="button"
                        onClick={() => save("landing_testimonials", testimonials)}
                        disabled={saving === "landing_testimonials"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "landing_testimonials" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 space-y-4">
                     <div className="grid gap-3 md:grid-cols-3">
                        <div className="space-y-1">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase">Eyebrow</label>
                            <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={testimonials.eyebrow} onChange={(e) => setTestimonials(prev => ({ ...prev, eyebrow: e.target.value }))} />
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase">Baslik</label>
                            <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={testimonials.title} onChange={(e) => setTestimonials(prev => ({ ...prev, title: e.target.value }))} />
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase">Vurgu</label>
                            <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={testimonials.titleAccent} onChange={(e) => setTestimonials(prev => ({ ...prev, titleAccent: e.target.value }))} />
                        </div>
                     </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                             <label className="text-xs font-semibold text-gray-500 uppercase">Yorumlar Listesi</label>
                             <span className="text-[10px] text-gray-400">Format: name|route|rating|quote</span>
                        </div>
                        <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none min-h-32 font-mono text-gray-600 bg-gray-50"
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
                    </div>
                    
                     <div className="space-y-2 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                             <label className="text-xs font-semibold text-gray-500 uppercase">Trust Stats</label>
                             <span className="text-[10px] text-gray-400">Format: label|value|suffix|note</span>
                        </div>
                        <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none min-h-24 font-mono text-gray-600 bg-gray-50"
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
                    </div>
                </div>
            </div>

             {/* FAQ */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiHelpCircle className="text-gray-400" /> FAQ (Sik Sorulanlar)
                    </div>
                     <button
                        type="button"
                        onClick={() => save("landing_faq", faq)}
                        disabled={saving === "landing_faq"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "landing_faq" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 space-y-4">
                     <div className="grid gap-3 md:grid-cols-2">
                        <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                            value={faq.eyebrow} onChange={(e) => setFaq(prev => ({ ...prev, eyebrow: e.target.value }))} placeholder="Eyebrow" />
                        <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                            value={faq.title} onChange={(e) => setFaq(prev => ({ ...prev, title: e.target.value }))} placeholder="Baslik" />
                     </div>
                     <textarea className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none min-h-20" 
                         value={faq.description} onChange={(e) => setFaq(prev => ({ ...prev, description: e.target.value }))} placeholder="Aciklama" />
                     
                     <div className="grid gap-3 md:grid-cols-2">
                        <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                            value={faq.ctaPrompt} onChange={(e) => setFaq(prev => ({ ...prev, ctaPrompt: e.target.value }))} placeholder="CTA Prompt" />
                        <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                            value={faq.ctaLabel} onChange={(e) => setFaq(prev => ({ ...prev, ctaLabel: e.target.value }))} placeholder="CTA Label" />
                     </div>

                     <div className="space-y-2">
                        <div className="flex items-center justify-between">
                             <label className="text-xs font-semibold text-gray-500 uppercase">Soru & Cevaplar</label>
                             <span className="text-[10px] text-gray-400">Format: soru|cevap</span>
                        </div>
                        <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none min-h-[120px] font-mono text-gray-600 bg-gray-50"
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
                    </div>
                </div>
            </div>

        </div>

        {/* ── Right Column ── */}
        <div className="space-y-6">

             {/* Slider */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiSliders className="text-gray-400" /> Slider Ayarlari (Opsiyonel)
                    </div>
                     <button
                        type="button"
                        onClick={() => save("landing_slider", slider)}
                        disabled={saving === "landing_slider"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "landing_slider" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 grid gap-3 md:grid-cols-2">
                     {Object.entries(slider).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                             <label className="text-[10px] font-semibold text-gray-400 uppercase">{key}</label>
                             <input
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                value={value}
                                onChange={(event) => setSlider((prev) => ({ ...prev, [key]: event.target.value }))}
                             />
                        </div>
                     ))}
                </div>
            </div>

            {/* Inquiry Panel */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiList className="text-gray-400" /> Basvuru Paneli
                    </div>
                     <button
                        type="button"
                        onClick={() => save("inquiry_panel", inquiryPanel)}
                        disabled={saving === "inquiry_panel"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "inquiry_panel" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 space-y-4">
                     {/* Titles */}
                     <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-1">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase">Baslik</label>
                            <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={inquiryPanel.title} onChange={(e) => setInquiryPanel(prev => ({ ...prev, title: e.target.value }))} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase">Alt Baslik</label>
                            <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={inquiryPanel.subtitle} onChange={(e) => setInquiryPanel(prev => ({ ...prev, subtitle: e.target.value }))} />
                        </div>
                     </div>
                     <div className="space-y-1">
                            <label className="text-[10px] font-semibold text-gray-400 uppercase">Basari Mesaji</label>
                            <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                value={inquiryPanel.successMessage} onChange={(e) => setInquiryPanel(prev => ({ ...prev, successMessage: e.target.value }))} />
                    </div>

                     {/* Button Labels */}
                     <div className="pt-4 border-t border-gray-100">
                        <label className="text-[10px] font-semibold text-gray-400 uppercase mb-2 block">Buton Etiketleri</label>
                        <div className="grid gap-3 grid-cols-2">
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Geri"
                                value={inquiryPanel.backLabel} onChange={(e) => setInquiryPanel(prev => ({ ...prev, backLabel: e.target.value }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Ileri"
                                value={inquiryPanel.nextLabel} onChange={(e) => setInquiryPanel(prev => ({ ...prev, nextLabel: e.target.value }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Tamamla"
                                value={inquiryPanel.finishLabel} onChange={(e) => setInquiryPanel(prev => ({ ...prev, finishLabel: e.target.value }))} />
                             <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Kaydediliyor"
                                value={inquiryPanel.savingLabel} onChange={(e) => setInquiryPanel(prev => ({ ...prev, savingLabel: e.target.value }))} />
                        </div>
                     </div>
                     
                     {/* Steps */}
                     <div className="space-y-2 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                             <label className="text-xs font-semibold text-gray-500 uppercase">Adimlar</label>
                             <span className="text-[10px] text-gray-400">Format: no|baslik</span>
                        </div>
                         <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none min-h-[80px] font-mono text-gray-600 bg-gray-50"
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
                     </div>

                     {/* Validation Messages */}
                     <div className="pt-4 border-t border-gray-100 space-y-3">
                         <h5 className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2"><FiAlertCircle /> Dogrulama Mesajlari</h5>
                         <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Kisisel Bilgiler Hatasi"
                            value={inquiryPanel.stepValidationMessages.personal} 
                            onChange={(e) => setInquiryPanel(prev => ({ ...prev, stepValidationMessages: { ...prev.stepValidationMessages, personal: e.target.value } }))} />
                         <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Seyahat Bilgiler Hatasi"
                            value={inquiryPanel.stepValidationMessages.trip} 
                            onChange={(e) => setInquiryPanel(prev => ({ ...prev, stepValidationMessages: { ...prev.stepValidationMessages, trip: e.target.value } }))} />
                         <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" placeholder="Onay Hatasi"
                            value={inquiryPanel.stepValidationMessages.consent} 
                            onChange={(e) => setInquiryPanel(prev => ({ ...prev, stepValidationMessages: { ...prev.stepValidationMessages, consent: e.target.value } }))} />
                     </div>
                </div>
            </div>

            {/* Category Heroes */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiGlobe className="text-gray-400" /> Kategori Herolari
                    </div>
                     <button
                        type="button"
                        onClick={() => save("tour_category_heroes", categoryHeroes)}
                        disabled={saving === "tour_category_heroes"}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                    >
                        {saving === "tour_category_heroes" ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                </div>
                <div className="p-6 space-y-4">
                     {(Object.keys(categoryHeroes) as Array<keyof TourCategoryHeroesData>).map((key) => (
                        <div key={key} className="p-4 rounded-xl border border-gray-200 bg-gray-50 space-y-3">
                             <h4 className="text-xs font-bold text-gray-900 uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                {categoryLabels[key]}
                             </h4>
                             <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Eyebrow</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={categoryHeroes[key].eyebrow} onChange={(e) => setCategoryHeroes(prev => ({ ...prev, [key]: { ...prev[key], eyebrow: e.target.value } }))} />
                             </div>
                             <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Baslik</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={categoryHeroes[key].title} onChange={(e) => setCategoryHeroes(prev => ({ ...prev, [key]: { ...prev[key], title: e.target.value } }))} />
                             </div>
                             <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Alt Baslik</label>
                                <textarea className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none min-h-[60px]" 
                                    value={categoryHeroes[key].subtitle} onChange={(e) => setCategoryHeroes(prev => ({ ...prev, [key]: { ...prev[key], subtitle: e.target.value } }))} />
                             </div>
                             <ImageUploadField
                                label="Hero Gorseli"
                                value={categoryHeroes[key].image}
                                onChange={(value) => setCategoryHeroes(prev => ({ ...prev, [key]: { ...prev[key], image: value } }))}
                             />
                             <div className="space-y-1">
                                <label className="text-[10px] font-semibold text-gray-400 uppercase">Chipler (Virgul ile)</label>
                                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" 
                                    value={categoryHeroes[key].chips.join(", ")} 
                                    onChange={(e) => setCategoryHeroes(prev => ({ ...prev, [key]: { ...prev[key], chips: e.target.value.split(',').map(c => c.trim()).filter(Boolean) } }))} />
                             </div>
                        </div>
                     ))}
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}


