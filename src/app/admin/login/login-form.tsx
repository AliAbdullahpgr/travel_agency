"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/admin",
    });

    setIsSubmitting(false);

    if (!result || result.error) {
      setError("Kullanici adi veya sifre hatali.");
      return;
    }

    router.push(result.url ?? "/admin");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="admin-card admin-editor space-y-5 p-7 md:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="admin-username" className="admin-field-label">
          Kullanici Adi
        </label>
        <input
          id="admin-username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="admin-field"
          required
          autoComplete="username"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="admin-password" className="admin-field-label">
          Sifre
        </label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="admin-field"
          required
          autoComplete="current-password"
        />
      </div>

      {error && (
        <p className="admin-message admin-message-error">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="admin-btn admin-btn-primary w-full py-3.5 text-sm disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Giris yapiliyor..." : "Admin Girisi"}
      </button>
    </form>
  );
}
