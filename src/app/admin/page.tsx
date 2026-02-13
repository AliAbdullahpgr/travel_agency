import Link from "next/link";
import { revalidatePath } from "next/cache";
import { signOut } from "~/server/auth";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

type InquiryStatus = "PENDING" | "APPROVED" | "REJECTED";

type AdminInquiryRecord = {
  id: string;
  fullName: string;
  phone: string;
  email: string | null;
  city: string | null;
  country: string | null;
  plannedMonth: string;
  duration: string | null;
  departureCity: string | null;
  tourCategory: "umre" | "hac" | "kultur" | null;
  adults: number | null;
  children: number | null;
  notes: string | null;
  consentAccepted: boolean;
  status: InquiryStatus;
  reviewedAt: Date | null;
  createdAt: Date;
};

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

async function updateInquiryStatus(formData: FormData) {
  "use server";

  await requireContentAdminPage();

  const inquiryId = formData.get("inquiryId");
  const nextStatus = formData.get("status");

  if (
    typeof inquiryId !== "string" ||
    typeof nextStatus !== "string" ||
    !["PENDING", "APPROVED", "REJECTED"].includes(nextStatus)
  ) {
    return;
  }

  await (db as any).inquiry.update({
    where: { id: inquiryId },
    data: {
      status: nextStatus as InquiryStatus,
      reviewedAt: nextStatus === "PENDING" ? null : new Date(),
    },
  });

  revalidatePath("/admin");
}

export default async function AdminDashboardPage() {
  const user = await requireContentAdminPage();
  const inquiries = (await db.inquiry.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  })) as unknown as AdminInquiryRecord[];

  const now = new Date();
  const todayCount = inquiries.filter((item) => isSameDay(item.createdAt, now)).length;
  const pendingCount = inquiries.filter((item) => item.status === "PENDING").length;

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
              Bekleyen Onay
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--emerald)]">{pendingCount}</p>
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
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Iletisim</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Seyahat</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Konum</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Durum</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">KVKK</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Aksiyon</th>
                  <th className="px-5 py-4 font-semibold text-[color:var(--emerald)]">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-5 py-10 text-center text-[color:var(--text-muted)]">
                      Henuz basvuru bulunmuyor.
                    </td>
                  </tr>
                )}
                {inquiries.map((item) => (
                  <tr key={item.id}>
                    <td className="px-5 py-4 font-medium text-[color:var(--text)]">
                      <p>{item.fullName}</p>
                      {item.notes && (
                        <p className="mt-1 max-w-[18rem] truncate text-xs text-[color:var(--text-muted)]">
                          Not: {item.notes}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">
                      <p>{item.phone}</p>
                      <p className="text-xs text-[color:var(--text-muted)]">{item.email ?? "E-posta yok"}</p>
                    </td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">
                      <p>Ay: {item.plannedMonth}</p>
                      <p className="text-xs text-[color:var(--text-muted)]">
                        Tur: {item.tourCategory ?? "-"} | Sure: {item.duration ?? "-"}
                      </p>
                      <p className="text-xs text-[color:var(--text-muted)]">
                        Kalkis: {item.departureCity ?? "-"} | Yetiskin/Cocuk: {item.adults ?? 0}/{item.children ?? 0}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">
                      <p>{item.city ?? "-"}</p>
                      <p className="text-xs text-[color:var(--text-muted)]">{item.country ?? "-"}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.status === "APPROVED"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "REJECTED"
                              ? "bg-rose-100 text-rose-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.status === "APPROVED"
                          ? "Onaylandi"
                          : item.status === "REJECTED"
                            ? "Reddedildi"
                            : "Beklemede"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.consentAccepted ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {item.consentAccepted ? "Onay Verdi" : "Onay Vermedi"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-2">
                        <form action={updateInquiryStatus}>
                          <input type="hidden" name="inquiryId" value={item.id} />
                          <input type="hidden" name="status" value="APPROVED" />
                          <button type="submit" className="admin-btn admin-btn-primary">
                            Onayla
                          </button>
                        </form>
                        <form action={updateInquiryStatus}>
                          <input type="hidden" name="inquiryId" value={item.id} />
                          <input type="hidden" name="status" value="REJECTED" />
                          <button type="submit" className="admin-btn admin-btn-danger">
                            Reddet
                          </button>
                        </form>
                        {item.status !== "PENDING" && (
                          <form action={updateInquiryStatus}>
                            <input type="hidden" name="inquiryId" value={item.id} />
                            <input type="hidden" name="status" value="PENDING" />
                            <button type="submit" className="admin-btn admin-btn-ghost">
                              Beklemeye Al
                            </button>
                          </form>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[color:var(--text-secondary)]">
                      <p>{formatDate(item.createdAt)}</p>
                      {item.reviewedAt && (
                        <p className="text-xs text-[color:var(--text-muted)]">Inceleme: {formatDate(item.reviewedAt)}</p>
                      )}
                    </td>
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
