import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { AdminLoginForm } from "~/app/admin/login/login-form";

export default async function AdminLoginPage() {
  const session = await auth();

  if (session?.user?.isAdmin) {
    redirect("/admin");
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden px-4 py-14"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(2,202,173,0.16), transparent 36%), radial-gradient(circle at 80% 0%, rgba(200,168,78,0.16), transparent 32%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1.15fr_1fr]">
        <section className="rounded-[36px] border p-8 md:p-10" style={{ borderColor: "rgba(10, 61, 46, 0.1)" }}>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--gold)" }}
          >
            Yonetim Paneli
          </p>
          <h1
            className="font-display text-3xl leading-tight font-bold md:text-5xl"
            style={{ color: "var(--emerald)" }}
          >
            Admin Girisi
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
            Landing page uzerinden gelen form taleplerini bu panelden gorebilir ve takip edebilirsiniz.
          </p>
          <div className="mt-8 rounded-3xl bg-white/70 p-5">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500">
              Not
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Tek bir admin hesabi kullanilir. Kullanici adi ve sifreyi `.env` dosyasinda
              `ADMIN_USERNAME` ve `ADMIN_PASSWORD` ile yonetin.
            </p>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5"
            style={{ borderColor: "rgba(10, 61, 46, 0.2)", color: "var(--emerald)" }}
          >
            Ana Sayfaya Don
          </Link>
        </section>

        <section className="md:pt-10">
          <AdminLoginForm />
        </section>
      </div>
    </main>
  );
}
