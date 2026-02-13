import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { AdminLoginForm } from "~/app/admin/login/login-form";

export default async function AdminLoginPage() {
  const session = await auth();

  if (session?.user?.role) {
    redirect("/admin");
  }

  return (
    <main className="admin-root px-4 py-12 md:px-8">
      <section className="admin-container mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[1.12fr_1fr]">
        <section className="admin-hero p-7 md:p-10">
          <p className="admin-eyebrow">Yonetim Paneli</p>
          <h1 className="admin-title text-3xl leading-tight font-bold md:text-5xl">Admin Girisi</h1>
          <p className="admin-description max-w-md">
            Landing page uzerinden gelen basvurulari ve CMS iceriklerini bu panelden
            yonetebilirsiniz.
          </p>
          <div className="admin-card-soft mt-7 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--text-muted)]">
              Not
            </p>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
              Bu panel veritabanindaki admin kullanicilariyla calisir. Ilk
              <span className="mx-1 font-semibold">SUPER_ADMIN</span> icin
              <code className="mx-1 rounded-md bg-[color:var(--emerald)]/[0.08] px-1.5 py-0.5 text-[0.78rem]">
                npm run admin:bootstrap -- &lt;kullanici&gt; &lt;sifre&gt;
              </code>
              komutunu calistirin.
            </p>
          </div>
          <Link href="/" className="admin-btn admin-btn-ghost mt-7">
            Ana Sayfaya Don
          </Link>
        </section>

        <section className="md:pt-8">
          <AdminLoginForm />
        </section>
      </section>
    </main>
  );
}
