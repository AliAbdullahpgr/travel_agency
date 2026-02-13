"use client";

import { useId, useState } from "react";

type UploadPayload = {
  url?: string;
  error?: string;
};

type ImageUploadFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function ImageUploadField({
  label,
  value,
  placeholder,
  onChange,
}: ImageUploadFieldProps) {
  const inputId = useId();
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleUpload = async (file: File | null | undefined) => {
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/uploads", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => ({}))) as UploadPayload;
      if (!response.ok || !payload.url) {
        setMessage(payload.error ?? "Gorsel yuklenemedi.");
        return;
      }

      onChange(payload.url);
      setMessage("Gorsel yuklendi.");
    } catch {
      setMessage("Yukleme sirasinda hata olustu.");
    } finally {
      setUploading(false);
    }
  };

  const messageTone =
    message && (message.toLowerCase().includes("hata") || message.toLowerCase().includes("yuklenemedi"))
      ? "admin-message-error"
      : "admin-message-success";

  return (
    <div className="space-y-2">
      <span className="admin-field-label">{label}</span>
      <input
        className="admin-field"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? "Gorsel URL"}
      />
      <div className="flex flex-wrap items-center gap-3">
        <label
          htmlFor={inputId}
          className={`admin-btn ${uploading ? "admin-btn-ghost opacity-70" : "admin-btn-ghost"}`}
        >
          {uploading ? "Yukleniyor..." : "Dosya Sec ve Yukle"}
        </label>
        <input
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          disabled={uploading}
          className="hidden"
          onChange={(event) => {
            void handleUpload(event.target.files?.[0]);
            event.currentTarget.value = "";
          }}
        />
        {message && <p className={`admin-message ${messageTone}`}>{message}</p>}
      </div>
    </div>
  );
}
