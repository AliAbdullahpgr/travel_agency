"use client";

import { useState } from "react";
import type { SiteShellData } from "~/server/cms/schemas";

type ShellEditorProps = {
  initialData: SiteShellData;
};

export function ShellEditor({ initialData }: ShellEditorProps) {
  const [form, setForm] = useState<SiteShellData>(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateField = <K extends keyof SiteShellData>(key: K, value: SiteShellData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/sections/site_shell", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setMessage(payload.error ?? "Kaydetme basarisiz.");
        return;
      }
      setMessage("Kaydedildi.");
    } catch {
      setMessage("Sistem hatasi olustu.");
    } finally {
      setSaving(false);
    }
  };

  const messageTone = message?.toLowerCase().includes("kayded")
    ? "admin-message-success"
    : "admin-message-error";

  return (
    <div className="admin-editor space-y-6">
      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Marka ve Ust Alanlar</h2>
        <p className="admin-section-copy">Marka adi ve ust bar metnini bu alandan guncelleyin.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="admin-field-label">Marka Adi</span>
            <input
              className="admin-field"
              value={form.brandName}
              onChange={(event) => updateField("brandName", event.target.value)}
            />
          </label>
          <label>
            <span className="admin-field-label">Ust Bar Metni</span>
            <input
              className="admin-field"
              value={form.topBarText}
              onChange={(event) => updateField("topBarText", event.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Navigasyon Linkleri</h2>
        <p className="admin-section-copy">Menu linklerini sira ile duzenleyin.</p>
        <div className="space-y-3">
          {form.navLinks.map((item, index) => (
            <div key={`${item.href}-${index}`} className="admin-repeater grid gap-2 md:grid-cols-[1fr_2fr_auto]">
              <input
                className="admin-field"
                value={item.href}
                onChange={(event) => {
                  const next = [...form.navLinks];
                  next[index] = { ...next[index]!, href: event.target.value };
                  updateField("navLinks", next);
                }}
                placeholder="/ornek-link"
              />
              <input
                className="admin-field"
                value={item.label}
                onChange={(event) => {
                  const next = [...form.navLinks];
                  next[index] = { ...next[index]!, label: event.target.value };
                  updateField("navLinks", next);
                }}
                placeholder="Menu etiketi"
              />
              <button
                type="button"
                className="admin-btn admin-btn-danger"
                onClick={() => {
                  const next = form.navLinks.filter((_, i) => i !== index);
                  updateField("navLinks", next.length > 0 ? next : [{ href: "/", label: "Ana Sayfa" }]);
                }}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="admin-btn admin-btn-ghost"
          onClick={() =>
            updateField("navLinks", [...form.navLinks, { href: "/yeni-link", label: "Yeni Link" }])
          }
        >
          Link Ekle
        </button>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Iletisim Bilgileri</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="admin-field-label">Telefon (Birincil)</span>
            <input
              className="admin-field"
              value={form.contactInfo.phonePrimary}
              onChange={(event) =>
                updateField("contactInfo", { ...form.contactInfo, phonePrimary: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">Telefon (Ikincil)</span>
            <input
              className="admin-field"
              value={form.contactInfo.phoneSecondary}
              onChange={(event) =>
                updateField("contactInfo", { ...form.contactInfo, phoneSecondary: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">WhatsApp</span>
            <input
              className="admin-field"
              value={form.contactInfo.whatsapp}
              onChange={(event) =>
                updateField("contactInfo", { ...form.contactInfo, whatsapp: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">E-posta</span>
            <input
              className="admin-field"
              value={form.contactInfo.email}
              onChange={(event) =>
                updateField("contactInfo", { ...form.contactInfo, email: event.target.value })
              }
            />
          </label>
        </div>
        <label>
          <span className="admin-field-label">Adres</span>
          <textarea
            className="admin-field admin-textarea"
            value={form.contactInfo.address}
            onChange={(event) =>
              updateField("contactInfo", { ...form.contactInfo, address: event.target.value })
            }
          />
        </label>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Footer Alanlari</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="admin-field-label">Footer Eyebrow</span>
            <input
              className="admin-field"
              value={form.footer.eyebrow}
              onChange={(event) => updateField("footer", { ...form.footer, eyebrow: event.target.value })}
            />
          </label>
          <label>
            <span className="admin-field-label">Footer Motto</span>
            <input
              className="admin-field"
              value={form.footer.mottoText}
              onChange={(event) => updateField("footer", { ...form.footer, mottoText: event.target.value })}
            />
          </label>
        </div>

        <label>
          <span className="admin-field-label">Footer Baslik</span>
          <textarea
            className="admin-field admin-textarea"
            value={form.footer.headline}
            onChange={(event) => updateField("footer", { ...form.footer, headline: event.target.value })}
          />
        </label>

        <label>
          <span className="admin-field-label">Footer Aciklama</span>
          <textarea
            className="admin-field admin-textarea"
            value={form.footer.description}
            onChange={(event) => updateField("footer", { ...form.footer, description: event.target.value })}
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="admin-field-label">Hizli Link Basligi</span>
            <input
              className="admin-field"
              value={form.footer.quickLinksTitle}
              onChange={(event) =>
                updateField("footer", { ...form.footer, quickLinksTitle: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">Iletisim Basligi</span>
            <input
              className="admin-field"
              value={form.footer.contactTitle}
              onChange={(event) =>
                updateField("footer", { ...form.footer, contactTitle: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">Sosyal Basligi</span>
            <input
              className="admin-field"
              value={form.footer.socialTitle}
              onChange={(event) =>
                updateField("footer", { ...form.footer, socialTitle: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">Admin Etiketi</span>
            <input
              className="admin-field"
              value={form.footer.adminLabel}
              onChange={(event) => updateField("footer", { ...form.footer, adminLabel: event.target.value })}
            />
          </label>
        </div>

        <label>
          <span className="admin-field-label">Telif Metni</span>
          <input
            className="admin-field"
            value={form.footer.copyrightText}
            onChange={(event) =>
              updateField("footer", { ...form.footer, copyrightText: event.target.value })
            }
          />
        </label>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Sosyal Baglantilar ve Contact Rail</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="admin-field-label">Instagram URL</span>
            <input
              className="admin-field"
              value={form.socialUrls.instagram}
              onChange={(event) =>
                updateField("socialUrls", { ...form.socialUrls, instagram: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">WhatsApp URL</span>
            <input
              className="admin-field"
              value={form.socialUrls.whatsapp}
              onChange={(event) =>
                updateField("socialUrls", { ...form.socialUrls, whatsapp: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">Ray Telefon Etiketi</span>
            <input
              className="admin-field"
              value={form.contactRail.callLabel}
              onChange={(event) =>
                updateField("contactRail", { ...form.contactRail, callLabel: event.target.value })
              }
            />
          </label>
          <label>
            <span className="admin-field-label">Ray WhatsApp Etiketi</span>
            <input
              className="admin-field"
              value={form.contactRail.whatsappLabel}
              onChange={(event) =>
                updateField("contactRail", { ...form.contactRail, whatsappLabel: event.target.value })
              }
            />
          </label>
        </div>
      </section>

      <div className="admin-sticky-actions flex flex-wrap items-center gap-3">
        <button type="button" onClick={save} disabled={saving} className="admin-btn admin-btn-primary">
          {saving ? "Kaydediliyor..." : "Kaydet"}
        </button>
        {message && <p className={`admin-message ${messageTone}`}>{message}</p>}
      </div>
    </div>
  );
}
