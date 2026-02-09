import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "~/server/auth";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

const isSameDay = (left: Date, right: Date) =>
  left.getDate() === right.getDate() &&
  left.getMonth() === right.getMonth() &&
  left.getFullYear() === right.getFullYear();

async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/admin/login" });
}

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session?.user?.isAdmin) {
    redirect("/admin/login");
  }

  const inquiries = await db.inquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const now = new Date();
  const todayCount = inquiries.filter((item) => isSameDay(item.createdAt, now)).length;

  return (
    <main className="min-h-screen px-4 py-8 md:px-8" style={{ backgroundColor: "var(--cream)" }}>
      <section className="mx-auto max-w-7xl space-y-7">
        <header
          className="rounded-[32px] border px-6 py-6 md:px-8 md:py-7"
          style={{ borderColor: "rgba(10, 61, 46, 0.16)", backgroundColor: "white" }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--gold)" }}
              >
                Admin Panel
              </p>
              <h1
                className="font-display text-2xl font-bold md:text-4xl"
                style={{ color: "var(--emerald)" }}
              >
                Landing Form Basvurulari
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Tüm kullanıcı yanıtları burada listelenir. En yeni kayıtlar üstte görünür.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:bg-black/5"
                style={{ borderColor: "rgba(10, 61, 46, 0.22)", color: "var(--emerald)" }}
              >
                Siteye Don
              </Link>
              <form action={handleSignOut}>
                <button
                  type="submit"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ backgroundColor: "var(--emerald)" }}
                >
                  Cikis Yap
                </button>
              </form>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article
            className="rounded-3xl border bg-white p-5"
            style={{ borderColor: "rgba(200, 168, 78, 0.25)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Toplam Basvuru
            </p>
            <p
              className="mt-2 text-3xl font-bold"
              style={{ color: "var(--emerald)" }}
            >
              {inquiries.length}
            </p>
          </article>
          <article
            className="rounded-3xl border bg-white p-5"
            style={{ borderColor: "rgba(200, 168, 78, 0.25)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Bugun Gelen
            </p>
            <p
              className="mt-2 text-3xl font-bold"
              style={{ color: "var(--emerald)" }}
            >
              {todayCount}
            </p>
          </article>
          <article
            className="rounded-3xl border bg-white p-5"
            style={{ borderColor: "rgba(200, 168, 78, 0.25)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Son Kayit
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-700">
              {inquiries[0] ? formatDate(inquiries[0].createdAt) : "Henüz yok"}
            </p>
          </article>
        </section>

        <section
          className="overflow-hidden rounded-[28px] border bg-white"
          style={{ borderColor: "rgba(10, 61, 46, 0.16)" }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead style={{ backgroundColor: "rgba(10, 61, 46, 0.05)" }}>
                <tr>
                  <th className="px-5 py-4 font-semibold text-gray-700">Ad Soyad</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Telefon</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Planlanan Ay</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">KVKK</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-gray-500">
                      Henüz herhangi bir form yanıtı gelmedi.
                    </td>
                  </tr>
                )}
                {inquiries.map((item) => (
                  <tr key={item.id} className="border-t" style={{ borderColor: "rgba(10, 61, 46, 0.08)" }}>
                    <td className="px-5 py-4 font-medium text-gray-800">{item.fullName}</td>
                    <td className="px-5 py-4 text-gray-700">{item.phone}</td>
                    <td className="px-5 py-4 text-gray-700">{item.plannedMonth}</td>
                    <td className="px-5 py-4">
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: item.consentAccepted
                            ? "rgba(2, 202, 173, 0.12)"
                            : "rgba(244, 63, 94, 0.1)",
                          color: item.consentAccepted ? "var(--emerald)" : "#be123c",
                        }}
                      >
                        {item.consentAccepted ? "Onayli" : "Onaysiz"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-700">{formatDate(item.createdAt)}</td>
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
