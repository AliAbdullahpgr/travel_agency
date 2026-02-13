"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUploadField } from "~/app/admin/components/image-upload-field";

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

function TextArrayEditor({
  title,
  values,
  onChange,
}: {
  title: string;
  values: Array<{ id?: string; item: string }>;
  onChange: (next: Array<{ id?: string; item: string }>) => void;
}) {
  return (
    <div className="admin-repeater space-y-2">
      <p className="text-sm font-semibold text-gray-700">{title}</p>
      {values.map((value, index) => (
        <div key={`${value.id ?? "new"}-${index}`} className="flex gap-2">
          <input
            className="admin-field flex-1"
            value={value.item}
            onChange={(event) => {
              const next = [...values];
              next[index] = { ...next[index]!, item: event.target.value };
              onChange(next);
            }}
          />
          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => onChange(values.filter((_, i) => i !== index))}
          >
            Sil
          </button>
        </div>
      ))}
      <button
        type="button"
        className="admin-btn admin-btn-ghost"
        onClick={() => onChange([...values, { item: "" }])}
      >
        Ekle
      </button>
    </div>
  );
}

export function TourEditor({ mode, tourId, initialData }: TourEditorProps) {
  const router = useRouter();
  const [form, setForm] = useState<TourFormState>(initialData ?? emptyTour);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const endpoint = useMemo(
    () => (mode === "create" ? "/api/admin/tours" : `/api/admin/tours/${tourId}`),
    [mode, tourId],
  );
  const messageTone =
    message &&
    (message.toLowerCase().includes("basarisiz") || message.toLowerCase().includes("hata"))
      ? "admin-message-error"
      : "admin-message-success";

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
        setMessage(payload.error ?? "Kayıt başarısız.");
        return;
      }

      if (mode === "create" && payload.id) {
        router.push(`/admin/tours/${payload.id}`);
        router.refresh();
        return;
      }

      setMessage("Kaydedildi.");
      router.refresh();
    } catch {
      setMessage("Sistem hatası oluştu.");
    } finally {
      setSaving(false);
    }
  };

  const removeTour = async () => {
    if (mode !== "edit" || !tourId) return;
    if (!window.confirm("Bu turu silmek istediğinize emin misiniz?")) return;

    const response = await fetch(`/api/admin/tours/${tourId}`, { method: "DELETE" });
    if (response.ok) {
      router.push("/admin/tours");
      router.refresh();
    }
  };

  return (
    <div className="admin-card admin-editor space-y-5 p-5 md:p-6">
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="admin-field"
          value={form.title}
          onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
          placeholder="Tur başlığı"
        />
        <input
          className="admin-field"
          value={form.slug}
          onChange={(event) => setForm((prev) => ({ ...prev, slug: event.target.value }))}
          placeholder="slug"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <select
          className="admin-field"
          value={form.category}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, category: event.target.value as TourFormState["category"] }))
          }
        >
          <option value="umre">Umre</option>
          <option value="hac">Hac</option>
          <option value="kultur">Kültür</option>
        </select>
        <input
          className="admin-field"
          type="number"
          value={form.durationDays}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, durationDays: Number(event.target.value) || 0 }))
          }
          placeholder="Süre"
        />
        <input
          className="admin-field"
          type="number"
          value={form.priceFrom}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, priceFrom: Number(event.target.value) || 0 }))
          }
          placeholder="Fiyat"
        />
        <select
          className="admin-field"
          value={form.currency}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, currency: event.target.value as TourFormState["currency"] }))
          }
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <ImageUploadField
        label="Hero Gorsel"
        value={form.heroImage}
        onChange={(value) => setForm((prev) => ({ ...prev, heroImage: value }))}
      />

      <textarea
        className="admin-field admin-textarea min-h-20"
        value={form.shortBlurb}
        onChange={(event) => setForm((prev) => ({ ...prev, shortBlurb: event.target.value }))}
        placeholder="Kısa açıklama"
      />

      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="admin-field"
          value={form.seoTitle}
          onChange={(event) => setForm((prev) => ({ ...prev, seoTitle: event.target.value }))}
          placeholder="SEO Başlık"
        />
        <input
          className="admin-field"
          value={form.seoDescription}
          onChange={(event) => setForm((prev) => ({ ...prev, seoDescription: event.target.value }))}
          placeholder="SEO Açıklama"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <label className="inline-flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={form.isPublished}
            onChange={(event) => setForm((prev) => ({ ...prev, isPublished: event.target.checked }))}
          />
          Yayında
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={form.isLandingFeatured}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, isLandingFeatured: event.target.checked }))
            }
          />
          Landing Öne Çıkan
        </label>
        <input
          className="admin-field"
          type="number"
          value={form.landingFeaturedOrder ?? ""}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              landingFeaturedOrder: event.target.value ? Number(event.target.value) : null,
            }))
          }
          placeholder="Landing sırası"
        />
      </div>

      <TextArrayEditor
        title="Paket Dahil"
        values={form.includes}
        onChange={(values) => setForm((prev) => ({ ...prev, includes: values }))}
      />
      <TextArrayEditor
        title="Paket Dışı"
        values={form.excludes}
        onChange={(values) => setForm((prev) => ({ ...prev, excludes: values }))}
      />

      <div className="admin-repeater space-y-2">
        <p className="text-sm font-semibold text-gray-700">Rozetler</p>
        {form.badges.map((badge, index) => (
          <div key={`${badge.id ?? "new"}-${index}`} className="flex gap-2">
            <input
              className="admin-field flex-1"
              value={badge.label}
              onChange={(event) => {
                const next = [...form.badges];
                next[index] = { ...next[index]!, label: event.target.value };
                setForm((prev) => ({ ...prev, badges: next }));
              }}
            />
            <button
              type="button"
              className="admin-btn admin-btn-danger"
              onClick={() =>
                setForm((prev) => ({ ...prev, badges: prev.badges.filter((_, i) => i !== index) }))
              }
            >
              Sil
            </button>
          </div>
        ))}
        <button
          type="button"
          className="admin-btn admin-btn-ghost"
          onClick={() => setForm((prev) => ({ ...prev, badges: [...prev.badges, { label: "" }] }))}
        >
          Rozet Ekle
        </button>
      </div>

      <div className="admin-repeater space-y-2">
        <p className="text-sm font-semibold text-gray-700">Program Akışı</p>
        {form.itinerary.map((item, index) => (
          <div key={`${item.id ?? "new"}-${index}`} className="admin-repeater grid gap-2">
            <input
              className="admin-field"
              value={item.day}
              onChange={(event) => {
                const next = [...form.itinerary];
                next[index] = { ...next[index]!, day: event.target.value };
                setForm((prev) => ({ ...prev, itinerary: next }));
              }}
              placeholder="Gün"
            />
            <input
              className="admin-field"
              value={item.title}
              onChange={(event) => {
                const next = [...form.itinerary];
                next[index] = { ...next[index]!, title: event.target.value };
                setForm((prev) => ({ ...prev, itinerary: next }));
              }}
              placeholder="Başlık"
            />
            <textarea
              className="admin-field admin-textarea min-h-20"
              value={item.description}
              onChange={(event) => {
                const next = [...form.itinerary];
                next[index] = { ...next[index]!, description: event.target.value };
                setForm((prev) => ({ ...prev, itinerary: next }));
              }}
              placeholder="Açıklama"
            />
            <button
              type="button"
              className="admin-btn admin-btn-danger"
              onClick={() =>
                setForm((prev) => ({ ...prev, itinerary: prev.itinerary.filter((_, i) => i !== index) }))
              }
            >
              Adımı Sil
            </button>
          </div>
        ))}
        <button
          type="button"
          className="admin-btn admin-btn-ghost"
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              itinerary: [...prev.itinerary, { day: "", title: "", description: "" }],
            }))
          }
        >
          Adım Ekle
        </button>
      </div>

      <div className="admin-repeater space-y-2">
        <p className="text-sm font-semibold text-gray-700">SSS</p>
        {form.faq.map((item, index) => (
          <div key={`${item.id ?? "new"}-${index}`} className="admin-repeater grid gap-2">
            <input
              className="admin-field"
              value={item.question}
              onChange={(event) => {
                const next = [...form.faq];
                next[index] = { ...next[index]!, question: event.target.value };
                setForm((prev) => ({ ...prev, faq: next }));
              }}
              placeholder="Soru"
            />
            <textarea
              className="admin-field admin-textarea min-h-20"
              value={item.answer}
              onChange={(event) => {
                const next = [...form.faq];
                next[index] = { ...next[index]!, answer: event.target.value };
                setForm((prev) => ({ ...prev, faq: next }));
              }}
              placeholder="Cevap"
            />
            <button
              type="button"
              className="admin-btn admin-btn-danger"
              onClick={() => setForm((prev) => ({ ...prev, faq: prev.faq.filter((_, i) => i !== index) }))}
            >
              Sil
            </button>
          </div>
        ))}
        <button
          type="button"
          className="admin-btn admin-btn-ghost"
          onClick={() => setForm((prev) => ({ ...prev, faq: [...prev.faq, { question: "", answer: "" }] }))}
        >
          SSS Ekle
        </button>
      </div>

      <div className="admin-repeater space-y-2">
        <p className="text-sm font-semibold text-gray-700">Galeri URL</p>
        {form.gallery.map((item, index) => (
          <div key={`${item.id ?? "new"}-${index}`} className="flex gap-2">
            <input
              className="admin-field flex-1"
              value={item.imageUrl}
              onChange={(event) => {
                const next = [...form.gallery];
                next[index] = { ...next[index]!, imageUrl: event.target.value };
                setForm((prev) => ({ ...prev, gallery: next }));
              }}
            />
            <button
              type="button"
              className="admin-btn admin-btn-danger"
              onClick={() =>
                setForm((prev) => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== index) }))
              }
            >
              Sil
            </button>
          </div>
        ))}
        <button
          type="button"
          className="admin-btn admin-btn-ghost"
          onClick={() => setForm((prev) => ({ ...prev, gallery: [...prev.gallery, { imageUrl: "" }] }))}
        >
          Galeri Ekle
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="admin-btn admin-btn-primary disabled:opacity-60"
        >
          {saving ? "Kaydediliyor..." : "Kaydet"}
        </button>
        {mode === "edit" && (
          <button
            type="button"
            onClick={removeTour}
            className="admin-btn admin-btn-danger"
          >
            Turu Sil
          </button>
        )}
        {message && <p className={`admin-message ${messageTone}`}>{message}</p>}
      </div>
    </div>
  );
}



