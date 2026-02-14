"use client";

import { useState } from "react";
import type { SiteShellData } from "~/server/cms/schemas";
import {
  FiSave,
  FiLayout,
  FiGlobe,
  FiPhone,
  FiLink,
  FiInstagram,
  FiMessageCircle,
  FiType,
  FiMenu,
  FiPlus,
  FiTrash2,
  FiCheck
} from "react-icons/fi";

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
    ? "text-emerald-600"
    : "text-rose-600";

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
                    Genel Yerleşim
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                    Aktif
                </div>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
             <button
                onClick={save}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all shadow-sm"
            >
                <FiSave /> {saving ? "Kaydediliyor..." : "Degisiklikleri Kaydet"}
            </button>
            {message && (
                <span className={`text-sm font-medium ${messageTone} flex items-center gap-1`}>
                   {messageTone.includes("emerald") && <FiCheck />} {message}
                </span>
            )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ── Left Column: Main Content ── */}
        <div className="lg:col-span-2 space-y-6">

            {/* Brand & Top Bar */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiGlobe className="text-gray-400" /> Marka ve Ust Alanlar
                </div>
                <div className="p-6 grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Marka Adi</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.brandName}
                            onChange={(e) => updateField("brandName", e.target.value)}
                            placeholder="Ornek: Sukur Turizm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Ust Bar Metni</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.topBarText}
                            onChange={(e) => updateField("topBarText", e.target.value)}
                            placeholder="Ornek: Turkiye'nin en guvenilir turizm acentesi"
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                         <FiMenu className="text-gray-400" /> Navigasyon Linkleri
                    </div>
                     <button
                        type="button"
                        onClick={() => updateField("navLinks", [...form.navLinks, { href: "", label: "" }])}
                        className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1"
                    >
                        <FiPlus /> Yeni Link Ekle
                    </button>
                </div>
                <div className="p-6 space-y-3">
                    {form.navLinks.map((item, index) => (
                        <div key={index} className="flex gap-3 items-start group">
                             <div className="grid gap-3 flex-1 md:grid-cols-2">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-semibold text-gray-400 uppercase">Etiket</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={item.label}
                                        onChange={(e) => {
                                            const next = [...form.navLinks];
                                            next[index] = { ...next[index]!, label: e.target.value };
                                            updateField("navLinks", next);
                                        }}
                                        placeholder="Menu etiketi"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-semibold text-gray-400 uppercase">Link (Href)</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-mono text-gray-600 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={item.href}
                                        onChange={(e) => {
                                            const next = [...form.navLinks];
                                            next[index] = { ...next[index]!, href: e.target.value };
                                            updateField("navLinks", next);
                                        }}
                                        placeholder="/ornek-link"
                                    />
                                </div>
                             </div>
                             <button
                                type="button"
                                onClick={() => {
                                    const next = form.navLinks.filter((_, i) => i !== index);
                                    updateField("navLinks", next);
                                }}
                                className="mt-6 p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                             >
                                <FiTrash2 />
                             </button>
                        </div>
                    ))}
                    {form.navLinks.length === 0 && (
                        <p className="text-sm text-gray-400 italic text-center py-4">Henuz menu linki eklenmedi.</p>
                    )}
                </div>
            </div>

            {/* Footer Content */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiLayout className="text-gray-400" /> Footer Icerigi
                </div>
                <div className="p-6 space-y-4">
                     <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Footer Eyebrow</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={form.footer.eyebrow}
                                onChange={(e) => updateField("footer", { ...form.footer, eyebrow: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Footer Motto</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={form.footer.mottoText}
                                onChange={(e) => updateField("footer", { ...form.footer, mottoText: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                         <label className="text-xs font-semibold text-gray-500 uppercase">Footer Baslik</label>
                         <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[60px]"
                            value={form.footer.headline}
                            onChange={(e) => updateField("footer", { ...form.footer, headline: e.target.value })}
                         />
                    </div>

                    <div className="space-y-1">
                         <label className="text-xs font-semibold text-gray-500 uppercase">Footer Aciklama</label>
                         <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[80px]"
                            value={form.footer.description}
                            onChange={(e) => updateField("footer", { ...form.footer, description: e.target.value })}
                         />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Telif Metni</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.footer.copyrightText}
                            onChange={(e) => updateField("footer", { ...form.footer, copyrightText: e.target.value })}
                        />
                    </div>
                </div>
            </div>
            
             {/* Footer Labels */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiType className="text-gray-400" /> Footer Baslik Etiketleri
                </div>
                <div className="p-6 grid gap-4 grid-cols-2 md:grid-cols-4">
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Hizli Linkler</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.footer.quickLinksTitle}
                            onChange={(e) => updateField("footer", { ...form.footer, quickLinksTitle: e.target.value })}
                        />
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Iletisim</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.footer.contactTitle}
                            onChange={(e) => updateField("footer", { ...form.footer, contactTitle: e.target.value })}
                        />
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Sosyal Medya</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.footer.socialTitle}
                            onChange={(e) => updateField("footer", { ...form.footer, socialTitle: e.target.value })}
                        />
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Admin</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.footer.adminLabel}
                            onChange={(e) => updateField("footer", { ...form.footer, adminLabel: e.target.value })}
                        />
                    </div>
                </div>
            </div>

        </div>

        {/* ── Right Column: Sidebar ── */}
        <div className="space-y-6">
            
            {/* Contact Info */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiPhone className="text-gray-400" /> Iletisim Bilgileri
                </div>
                <div className="p-6 space-y-4">
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Telefon (Birincil)</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.contactInfo.phonePrimary}
                            onChange={(e) => updateField("contactInfo", { ...form.contactInfo, phonePrimary: e.target.value })}
                            placeholder="+90 555..."
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Telefon (Ikincil)</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.contactInfo.phoneSecondary}
                            onChange={(e) => updateField("contactInfo", { ...form.contactInfo, phoneSecondary: e.target.value })}
                            placeholder="+90 555..."
                        />
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">WhatsApp Numarasi</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.contactInfo.whatsapp}
                            onChange={(e) => updateField("contactInfo", { ...form.contactInfo, whatsapp: e.target.value })}
                            placeholder="+90 555..."
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">E-posta</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.contactInfo.email}
                            onChange={(e) => updateField("contactInfo", { ...form.contactInfo, email: e.target.value })}
                            placeholder="bilgi@..."
                        />
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Adres</label>
                        <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[80px]"
                            value={form.contactInfo.address}
                            onChange={(e) => updateField("contactInfo", { ...form.contactInfo, address: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Social & Rail */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiLink className="text-gray-400" /> Sosyal & Ray
                </div>
                <div className="p-6 space-y-4">
                     <div className="space-y-1">
                        <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase">
                            <FiInstagram /> Instagram URL
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.socialUrls.instagram}
                            onChange={(e) => updateField("socialUrls", { ...form.socialUrls, instagram: e.target.value })}
                            placeholder="https://instagram.com/..."
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase">
                            <FiMessageCircle /> WhatsApp Link (Web)
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.socialUrls.whatsapp}
                            onChange={(e) => updateField("socialUrls", { ...form.socialUrls, whatsapp: e.target.value })}
                            placeholder="https://wa.me/..."
                        />
                    </div>
                    <hr className="border-gray-100" />
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Ray Telefon Etiketi</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.contactRail.callLabel}
                            onChange={(e) => updateField("contactRail", { ...form.contactRail, callLabel: e.target.value })}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Ray WhatsApp Etiketi</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={form.contactRail.whatsappLabel}
                            onChange={(e) => updateField("contactRail", { ...form.contactRail, whatsappLabel: e.target.value })}
                        />
                    </div>
                </div>
            </div>

        </div>

      </div>

      
    </div>
  );
}
