import Link from "next/link";
import { signOut } from "~/server/auth";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" }).format(date);

const isSameDay = (left: Date, right: Date) =>
  left.getDate() === right.getDate() &&
  left.getMonth() === right.getMonth() &&
  left.getFullYear() === right.getFullYear();

async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/admin/login" });
}

export default async function AdminDashboardPage() {
  const user = await requireContentAdminPage();
  const inquiries = await db.inquiry.findMany({ orderBy: { createdAt: "desc" }, take: 10 });

  const now = new Date();
  const todayCount = inquiries.filter((item) => isSameDay(item.createdAt, now)).length;

  return (
    <main className="admin-root px-4 py-8 md:px-8">
      <section className="admin-container max-w-7xl space-y-7">
        <header className="admin-hero px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="admin-eyebrow">Admin Panel</p>
              <h1 className="admin-title text-2xl font-bold md:text-4xl">Icerik ve Tur Yonetimi</h1>
              <p className="admin-description">
                Hos geldiniz, {user.username ?? "admin"}. Tum icerik, katalog ve basvuru
                akislarini tek panelden yonetebilirsiniz.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" className="admin-btn admin-btn-ghost">
                Siteye Don
              </Link>
              <form action={handleSignOut}>
                <button type="submit" className="admin-btn admin-btn-primary">
                  Cikis Yap
                </button>
              </form>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="admin-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
              Toplam Basvuru
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--emerald)]">{inquiries.length}</p>
          </article>
          <article className="admin-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
              Bugun Gelen
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--emerald)]">{todayCount}</p>
          </article>
          <article className="admin-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
              Rol
            </p>
            <p className="mt-2 inline-flex rounded-full bg-[color:var(--emerald)]/[0.08] px-3 py-1 text-xs font-semibold text-[color:var(--emerald)]">
              {user.role}
            </p>
          </article>
        </section>

        <section
          className={`grid gap-4 md:grid-cols-2 ${
            user.role === "SUPER_ADMIN" ? "xl:grid-cols-4" : "xl:grid-cols-3"
          }`}
        >
          <Link href="/admin/content/shell" className="admin-nav-card p-5">
            <p className="text-sm font-semibold text-[color:var(--emerald)]">Shell Icerikleri</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">Nav, footer, iletisim rayi</p>
          </Link>
          <Link href="/admin/content/landing" className="admin-nav-card p-5">
            <p className="text-sm font-semibold text-[color:var(--emerald)]">Landing Icerikleri</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">Hero, slider, testimonials, FAQ, form</p>
          </Link>
          <Link href="/admin/tours" className="admin-nav-card p-5">
            <p className="text-sm font-semibold text-[color:var(--emerald)]">Tur Katalogu</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">CRUD, yayin ve landing one cikarma</p>
          </Link>
          {user.role === "SUPER_ADMIN" && (
            <Link href="/admin/users" className="admin-nav-card p-5">
              <p className="text-sm font-semibold text-[color:var(--emerald)]">Kullanicilar</p>
              <p className="mt-2 text-xs text-[color:var(--text-muted)]">Rol ve aktivasyon yonetimi</p>
            </Link>
          )}
        </section>

        <section className="admin-table-shell overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Ad Soyad</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Telefon</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Planlanan Ay</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">KVKK</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-[color:var(--text-muted)]">
                      Henuz basvuru bulunmuyor.
                    </td>
                  </tr>
                )}
                {inquiries.map((item) => (
                  <tr key={item.id}>
                    <td className="px-5 py-4 font-medium text-[color:var(--text)]">{item.fullName}</td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">{item.phone}</td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">{item.plannedMonth}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.consentAccepted ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {item.consentAccepted ? "Onayli" : "Onaysiz"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">{formatDate(item.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
