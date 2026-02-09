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
      className="space-y-5 rounded-[30px] border bg-white p-7 shadow-xl md:p-8"
      style={{ borderColor: "rgba(10, 61, 46, 0.1)" }}
    >
      <div className="space-y-2">
        <label
          htmlFor="admin-username"
          className="text-sm font-semibold uppercase tracking-[0.13em]"
          style={{ color: "var(--emerald)" }}
        >
          Kullanici Adi
        </label>
        <input
          id="admin-username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
          style={{ borderColor: "rgba(200, 168, 78, 0.35)" }}
          required
          autoComplete="username"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="admin-password"
          className="text-sm font-semibold uppercase tracking-[0.13em]"
          style={{ color: "var(--emerald)" }}
        >
          Sifre
        </label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
          style={{ borderColor: "rgba(200, 168, 78, 0.35)" }}
          required
          autoComplete="current-password"
        />
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        style={{ backgroundColor: "var(--emerald)" }}
      >
        {isSubmitting ? "Giris yapiliyor..." : "Admin Girisi"}
      </button>
    </form>
  );
}
