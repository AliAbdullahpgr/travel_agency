"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUploadField } from "~/app/admin/components/image-upload-field";
import {
  FiSave,
  FiTrash2,
  FiArrowLeft,
  FiImage,
  FiList,
  FiSettings,
  FiDollarSign,
  FiGlobe,
  FiLayout,
  FiPlus,
  FiX,
  FiCheck,
  FiChevronDown,
  FiChevronUp,
  FiFileText,
  FiCalendar,
  FiMapPin,
  FiHelpCircle
} from "react-icons/fi";
import Link from "next/link";

export type TourFormState = {
  slug: string;
  title: string;
  category: "umre" | "hac" | "kultur";
  durationDays: number;
  priceFrom: number;
  currency: "TRY" | "USD" | "EUR";
  heroImage: string;
  shortBlurb: string;
  seoTitle: string;
  seoDescription: string;
  isPublished: boolean;
  isLandingFeatured: boolean;
  landingFeaturedOrder: number | null;
  badges: Array<{ id?: string; label: string }>;
  itinerary: Array<{ id?: string; day: string; title: string; description: string }>;
  includes: Array<{ id?: string; item: string }>;
  excludes: Array<{ id?: string; item: string }>;
  faq: Array<{ id?: string; question: string; answer: string }>;
  gallery: Array<{ id?: string; imageUrl: string }>;
};

type TourEditorProps = {
  mode: "create" | "edit";
  tourId?: string;
  initialData?: TourFormState;
};

const emptyTour: TourFormState = {
  slug: "",
  title: "",
  category: "umre",
  durationDays: 10,
  priceFrom: 0,
  currency: "USD",
  heroImage: "",
  shortBlurb: "",
  seoTitle: "",
  seoDescription: "",
  isPublished: true,
  isLandingFeatured: false,
  landingFeaturedOrder: null,
  badges: [],
  itinerary: [],
  includes: [],
  excludes: [],
  faq: [],
  gallery: [],
};

export function TourEditor({ mode, tourId, initialData }: TourEditorProps) {
  const router = useRouter();
  const [form, setForm] = useState<TourFormState>(initialData ?? emptyTour);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const endpoint = useMemo(
    () => (mode === "create" ? "/api/admin/tours" : `/api/admin/tours/${tourId}`),
    [mode, tourId],
  );

  const save = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch(endpoint, {
        method: mode === "create" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string; id?: string };
      if (!response.ok) {
        setMessage(payload.error ?? "Kayit basarisiz.");
        return;
      }

      if (mode === "create" && payload.id) {
        router.push(`/admin/tours/${payload.id}`);
        return;
      }

      setMessage("Kaydedildi.");
      router.refresh();
    } catch {
      setMessage("Sistem hatasi olustu.");
    } finally {
      setSaving(false);
    }
  };

  const removeTour = async () => {
    if (mode !== "edit" || !tourId) return;
    if (!window.confirm("Bu turu silmek istediginize emin misiniz?")) return;

    const response = await fetch(`/api/admin/tours/${tourId}`, { method: "DELETE" });
    if (response.ok) {
      router.push("/admin/tours");
      router.refresh();
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* ── Action Header ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4">
            <Link href="/admin/tours" className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors">
                <FiArrowLeft size={20} />
            </Link>
            <div>
                <h2 className="text-lg font-bold text-gray-900">
                    {mode === "create" ? "Yeni Tur Olustur" : "Turu Duzenle"}
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className={`inline-block w-2 h-2 rounded-full ${form.isPublished ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                    {form.isPublished ? "Yayinda" : "Taslak Modunda"}
                </div>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
             {mode === "edit" && (
                <button
                    onClick={removeTour}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
                >
                    <FiTrash2 /> Sil
                </button>
            )}
            <button
                onClick={save}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all shadow-sm"
            >
                <FiSave /> {saving ? "Kaydediliyor..." : "Kaydet"}
            </button>
            {message && (
                <span className={`text-sm font-medium ${message.includes("Kaydedildi") ? "text-emerald-600" : "text-rose-600"}`}>
                    {message}
                </span>
            )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Left Column: Main Content ── */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* General Info */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiFileText className="text-gray-400" /> Temel Bilgiler
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Tur Basligi</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                placeholder="Ornek: Luks Umre Turu"
                            />
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">URL Slug</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono text-gray-600 bg-gray-50"
                                value={form.slug}
                                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                placeholder="ornek-luks-umre-turu"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                         <label className="text-xs font-semibold text-gray-500 uppercase">Kisa Aciklama (Blurb)</label>
                         <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[80px]"
                            value={form.shortBlurb}
                            onChange={(e) => setForm({ ...form, shortBlurb: e.target.value })}
                            placeholder="Kartlarda gorunecek kisa ozet..."
                         />
                    </div>
                </div>
            </div>

            {/* Media */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiImage className="text-gray-400" /> Medya
                </div>
                <div className="p-6 space-y-6">
                     <ImageUploadField
                        label="Hero Gorseli (Ana Resim)"
                        value={form.heroImage}
                        onChange={(value) => setForm({ ...form, heroImage: value })}
                     />
                     
                    {/* Gallery Repeater */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Galeri Resimleri</label>
                            <button
                                type="button"
                                onClick={() => setForm(prev => ({ ...prev, gallery: [...prev.gallery, { imageUrl: "" }] }))}
                                className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                            >
                                <FiPlus /> Resim Ekle
                            </button>
                        </div>
                        <div className="space-y-3">
                            {form.gallery.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-50 rounded-lg p-2 border border-gray-200">
                                         <input
                                            className="w-full bg-transparent text-sm focus:outline-none"
                                            value={item.imageUrl}
                                            onChange={(e) => {
                                                const next = [...form.gallery];
                                                next[idx] = { ...next[idx]!, imageUrl: e.target.value };
                                                setForm({ ...form, gallery: next });
                                            }}
                                            placeholder="https://..."
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setForm(prev => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== idx) }))}
                                        className="p-2 text-gray-400 hover:text-rose-600 transition-colors"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </div>
                            ))}
                            {form.gallery.length === 0 && <p className="text-sm text-gray-400 italic">Henuz galeri resmi eklenmedi.</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiCalendar className="text-gray-400" /> Program Akisi
                    </div>
                     <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, itinerary: [...prev.itinerary, { day: "", title: "", description: "" }] }))}
                        className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1"
                    >
                        <FiPlus /> Yeni Gun Ekle
                    </button>
                </div>
                <div className="p-6 space-y-4">
                     {form.itinerary.map((step, idx) => (
                         <div key={idx} className="group relative rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-200 hover:bg-white hover:shadow-md">
                             <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button
                                    type="button"
                                    onClick={() => setForm(prev => ({ ...prev, itinerary: prev.itinerary.filter((_, i) => i !== idx) }))}
                                    className="text-gray-400 hover:text-rose-600"
                                  >
                                      <FiTrash2 />
                                  </button>
                             </div>
                             
                             <div className="grid gap-3">
                                 <div className="flex gap-3">
                                     <div className="w-20">
                                        <input
                                            className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-center focus:border-blue-500 focus:outline-none"
                                            value={step.day}
                                            onChange={(e) => {
                                                const next = [...form.itinerary];
                                                next[idx] = { ...next[idx]!, day: e.target.value };
                                                setForm({ ...form, itinerary: next });
                                            }}
                                            placeholder="1. Gun"
                                        />
                                     </div>
                                     <div className="flex-1">
                                        <input
                                            className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold focus:border-blue-500 focus:outline-none"
                                            value={step.title}
                                            onChange={(e) => {
                                                const next = [...form.itinerary];
                                                next[idx] = { ...next[idx]!, title: e.target.value };
                                                setForm({ ...form, itinerary: next });
                                            }}
                                            placeholder="Gun Basligi (Ornek: Medine Ziyareti)"
                                        />
                                     </div>
                                 </div>
                                 <textarea
                                    className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 focus:border-blue-500 focus:outline-none min-h-[60px]"
                                    value={step.description}
                                    onChange={(e) => {
                                        const next = [...form.itinerary];
                                        next[idx] = { ...next[idx]!, description: e.target.value };
                                        setForm({ ...form, itinerary: next });
                                    }}
                                    placeholder="Detayli aciklama..."
                                 />
                             </div>
                         </div>
                     ))}
                     {form.itinerary.length === 0 && (
                        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                            <p className="text-gray-400 text-sm">Henuz program eklenmedi.</p>
                        </div>
                     )}
                </div>
            </div>

            {/* Includes / Excludes */}
             <div className="grid md:grid-cols-2 gap-6">
                <SimpleListEditor 
                    title="Fiyata Dahil Olanlar"
                    icon={<FiCheck className="text-emerald-500" />}
                    items={form.includes}
                    onChange={(val) => setForm({ ...form, includes: val })}
                    placeholder="Ornek: Ucak bileti"
                />
                <SimpleListEditor 
                    title="Fiyata Dahil Olmayanlar"
                    icon={<FiX className="text-rose-500" />}
                    items={form.excludes}
                    onChange={(val) => setForm({ ...form, excludes: val })}
                    placeholder="Ornek: Kisisel harcamalar"
                />
            </div>
             
             {/* FAQ */}
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiHelpCircle className="text-gray-400" /> Sik Sorulan Sorular
                    </div>
                     <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, faq: [...prev.faq, { question: "", answer: "" }] }))}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                        <FiPlus /> Soru Ekle
                    </button>
                </div>
                <div className="divide-y divide-gray-100">
                     {form.faq.map((item, idx) => (
                         <div key={idx} className="p-4 hover:bg-gray-50 transition-colors grid gap-2">
                             <input
                                className="w-full bg-transparent px-2 py-1 text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
                                value={item.question}
                                onChange={(e) => {
                                    const next = [...form.faq];
                                    next[idx] = { ...next[idx]!, question: e.target.value };
                                    setForm({ ...form, faq: next });
                                }}
                                placeholder="Soru..."
                             />
                             <textarea
                                className="w-full bg-transparent px-2 py-1 text-sm text-gray-600 placeholder-gray-400 focus:outline-none resize-none"
                                value={item.answer}
                                onChange={(e) => {
                                    const next = [...form.faq];
                                    next[idx] = { ...next[idx]!, answer: e.target.value };
                                    setForm({ ...form, faq: next });
                                }}
                                placeholder="Cevap..."
                                rows={2}
                             />
                             <div className="flex justify-end">
                                 <button
                                    type="button"
                                    onClick={() => setForm(prev => ({ ...prev, faq: prev.faq.filter((_, i) => i !== idx) }))}
                                    className="text-xs text-rose-500 hover:underline"
                                >
                                    Sil
                                </button>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

        </div>

        {/* ── Right Column: Sidebar ── */}
        <div className="space-y-6">
            
            {/* Status & Visibility */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <FiSettings className="text-gray-400" /> Durum ve Gorunurluk
                </h3>
                
                <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                    <span className="text-sm font-medium text-gray-700">Yayinda</span>
                    <input
                        type="checkbox"
                        checked={form.isPublished}
                        onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
                        className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                </label>
                
                <div className="p-3 rounded-lg border border-gray-200 space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">Anasayfa Vitrin</span>
                        <input
                            type="checkbox"
                            checked={form.isLandingFeatured}
                            onChange={(e) => setForm({ ...form, isLandingFeatured: e.target.checked })}
                            className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                    </label>
                    {form.isLandingFeatured && (
                         <div className="pt-2 border-t border-gray-100">
                             <label className="text-xs text-gray-500 block mb-1">Vitrin Sirasi</label>
                             <input
                                type="number"
                                className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm"
                                value={form.landingFeaturedOrder ?? ""}
                                onChange={(e) => setForm({ ...form, landingFeaturedOrder: e.target.value ? Number(e.target.value) : null })}
                                placeholder="1"
                             />
                         </div>
                    )}
                </div>
            </div>

             {/* Classification */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <FiMapPin className="text-gray-400" /> Siniflandirma & Rozetler
                </h3>
                
                 <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Kategori</label>
                    <select
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none bg-white"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                    >
                        <option value="umre">Umre</option>
                        <option value="hac">Hac</option>
                        <option value="kultur">Kultur Turu</option>
                    </select>
                </div>
                
                <div className="space-y-2">
                     <label className="text-xs font-semibold text-gray-500 uppercase">Rozetler</label>
                     <div className="flex flex-wrap gap-2">
                         {form.badges.map((badge, idx) => (
                             <span key={idx} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-100">
                                 {badge.label}
                                 <button
                                    type="button"
                                    onClick={() => setForm(prev => ({ ...prev, badges: prev.badges.filter((_, i) => i !== idx) }))}
                                    className="hover:text-rose-600"
                                >
                                     <FiX size={12} />
                                 </button>
                             </span>
                         ))}
                     </div>
                     <div className="flex gap-2">
                        <input
                            className="flex-1 rounded-md border border-gray-200 px-2 py-1.5 text-sm"
                            placeholder="Yeni rozet..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    const val = e.currentTarget.value.trim();
                                    if (val) {
                                        setForm(prev => ({ ...prev, badges: [...prev.badges, { label: val }] }));
                                        e.currentTarget.value = "";
                                    }
                                }
                            }}
                        />
                        <button 
                            type="button" 
                            className="p-2 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200"
                            onClick={(e) => {
                                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                const val = input.value.trim();
                                if(val) {
                                     setForm(prev => ({ ...prev, badges: [...prev.badges, { label: val }] }));
                                     input.value = "";
                                }
                            }}
                        >
                            <FiPlus />
                        </button>
                     </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <FiDollarSign className="text-gray-400" /> Fiyatlandirma
                </h3>
                 <div className="grid grid-cols-2 gap-3">
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Fiyat</label>
                        <input
                            type="number"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                            value={form.priceFrom}
                            onChange={(e) => setForm({ ...form, priceFrom: Number(e.target.value) || 0 })}
                        />
                     </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Para Birimi</label>
                        <select
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none bg-white"
                            value={form.currency}
                            onChange={(e) => setForm({ ...form, currency: e.target.value as any })}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="TRY">TRY</option>
                        </select>
                     </div>
                 </div>
                 
                 <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Sure (Gun)</label>
                    <input
                        type="number"
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                        value={form.durationDays}
                        onChange={(e) => setForm({ ...form, durationDays: Number(e.target.value) || 0 })}
                    />
                 </div>
            </div>

            {/* SEO */}
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <FiGlobe className="text-gray-400" /> SEO Ayarlari
                </h3>
                <div className="space-y-3">
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Meta Baslik</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                            value={form.seoTitle}
                            onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
                            placeholder={form.title}
                        />
                     </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Meta Aciklama</label>
                        <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none resize-none"
                            rows={3}
                            value={form.seoDescription}
                            onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
                        />
                     </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

function SimpleListEditor({ 
    title, 
    items, 
    onChange, 
    icon,
    placeholder
}: { 
    title: string; 
    items: Array<{ id?: string, item: string }>; 
    onChange: (val: any[]) => void;
    icon: React.ReactNode;
    placeholder: string;
}) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                        {icon} {title}
                </div>
                 <button
                    type="button"
                    onClick={() => onChange([...items, { item: "" }])}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                >
                    + Ekle
                </button>
            </div>
            <div className="p-4 space-y-2 flex-1">
                {items.map((entry, idx) => (
                    <div key={idx} className="flex gap-2">
                        <input
                            className="flex-1 rounded-md border border-gray-200 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
                            value={entry.item}
                            onChange={(e) => {
                                const next = [...items];
                                next[idx] = { ...next[idx]!, item: e.target.value };
                                onChange(next);
                            }}
                            placeholder={placeholder}
                        />
                        <button
                            type="button"
                            onClick={() => onChange(items.filter((_, i) => i !== idx))}
                            className="text-gray-400 hover:text-rose-500 px-1"
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}



