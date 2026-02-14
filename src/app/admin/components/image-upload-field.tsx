"use client";

import { useId, useState, useCallback } from "react";
import { useUploadThing } from "~/utils/uploadthing";

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
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onUploadProgress: (p) => setProgress(p),
    onClientUploadComplete: (res) => {
      if (res?.[0]) {
        onChange(res[0].ufsUrl);
        setMessage("uploaded");
        setProgress(0);
        setTimeout(() => setMessage(null), 3000);
      }
    },
    onUploadError: (error) => {
      setMessage(error.message || "Yukleme sirasinda hata olustu.");
      setProgress(0);
      setTimeout(() => setMessage(null), 4000);
    },
  });

  const handleFiles = useCallback(
    (files: FileList | File[]) => {
      const file = files[0];
      if (!file) return;

      const allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
      if (!allowed.includes(file.type)) {
        setMessage("Desteklenmeyen dosya turu. (JPEG, PNG, WebP, AVIF)");
        setTimeout(() => setMessage(null), 4000);
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        setMessage("Dosya boyutu 8MB'dan buyuk olamaz.");
        setTimeout(() => setMessage(null), 4000);
        return;
      }

      setMessage(null);
      setProgress(0);
      void startUpload([file]);
    },
    [startUpload],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles],
  );

  const isError =
    message &&
    message !== "uploaded" &&
    (message.toLowerCase().includes("hata") ||
      message.toLowerCase().includes("desteklenmeyen") ||
      message.toLowerCase().includes("buyuk") ||
      message.toLowerCase().includes("yetkisiz"));

  const isSuccess = message === "uploaded";

  return (
    <div className="space-y-2">
      <span className="admin-field-label">{label}</span>

      {/* Image preview */}
      {value && (
        <div className="relative group w-full max-w-[240px] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <img
            src={value}
            alt={label}
            className="w-full h-36 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-black/80"
            title="Gorseli kaldir"
          >
            ✕
          </button>
        </div>
      )}

      {/* URL input */}
      <input
        className="admin-field"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? "Gorsel URL"}
      />

      {/* Drop zone / Upload button */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        className={`relative rounded-xl border-2 border-dashed transition-all duration-200 ${
          isDragOver
            ? "border-blue-400 bg-blue-50/60"
            : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-50"
        } ${isUploading ? "pointer-events-none" : ""}`}
      >
        <label
          htmlFor={inputId}
          className="flex flex-col items-center justify-center py-5 px-4 cursor-pointer"
        >
          {isUploading ? (
            /* Uploading state */
            <div className="flex flex-col items-center gap-3 w-full">
              {/* Spinner */}
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 animate-spin" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${progress * 1.005} 100.5`}
                    transform="rotate(-90 20 20)"
                    className="transition-all duration-300"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-blue-600">
                  {progress}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-[200px] h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-xs font-medium text-blue-600">
                Yukleniyor... %{progress}
              </p>
            </div>
          ) : (
            /* Idle state */
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">
                  {isDragOver
                    ? "Birak ve yukle"
                    : "Dosya sec veya surukle birak"}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  JPEG, PNG, WebP, AVIF - Maks 8MB
                </p>
              </div>
            </div>
          )}
        </label>

        <input
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          disabled={isUploading}
          className="hidden"
          onChange={(event) => {
            if (event.target.files) {
              handleFiles(event.target.files);
            }
            event.currentTarget.value = "";
          }}
        />
      </div>

      {/* Status messages */}
      {isSuccess && (
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 animate-in">
          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          Gorsel basariyla yuklendi!
        </div>
      )}

      {isError && (
        <div className="flex items-center gap-2 text-sm font-medium text-rose-600 animate-in">
          <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          {message}
        </div>
      )}
    </div>
  );
}
