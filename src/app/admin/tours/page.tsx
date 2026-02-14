import Link from "next/link";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { listAdminTours } from "~/server/cms/tours";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ q?: string }>;

export default async function AdminToursPage({ searchParams }: { searchParams: SearchParams }) {
  await requireContentAdminPage();
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const tours = await listAdminTours(query || undefined);

  return (
    <section className="admin-container max-w-7xl space-y-6">
      <header className="admin-hero p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="admin-eyebrow">CMS</p>
            <h1 className="admin-title text-2xl md:text-3xl">Tur Katalogu</h1>
            <p className="admin-description">Tum tur kayitlarini yonetin.</p>
          </div>
          <Link href="/admin/tours/new" className="admin-btn admin-btn-primary">
            + Yeni Tur
          </Link>
        </div>
        <form className="admin-editor mt-4">
          <label className="admin-field-label" htmlFor="admin-tour-search">
            Baslik veya slug ara
          </label>
          <input
            id="admin-tour-search"
            name="q"
            defaultValue={query}
            placeholder="Ornek: deluxe-umre"
            className="admin-field"
          />
        </form>
      </header>

      <section className="admin-table-shell overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3 font-semibold text-[color:var(--emerald)]">Baslik</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--emerald)]">Kategori</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--emerald)]">Yayin</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--emerald)]">Landing</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--emerald)]">Guncelleme</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--emerald)]"></th>
              </tr>
            </thead>
            <tbody>
              {tours.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-[color:var(--text-muted)]">
                    Tur kaydi bulunamadi.
                  </td>
                </tr>
              )}
              {tours.map((tour) => (
                <tr key={tour.id}>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-[color:var(--text)]">{tour.title}</p>
                    <p className="text-xs text-[color:var(--text-muted)]">{tour.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-[color:var(--text-secondary)]">{tour.category}</td>
                  <td className="px-4 py-3">
                    <span className={`admin-badge ${tour.isPublished ? "admin-badge--approved" : "admin-badge--rejected"}`}>
                      {tour.isPublished ? "Evet" : "Hayir"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[color:var(--text-secondary)]">
                    {tour.isLandingFeatured
                      ? `Evet (${tour.landingFeaturedOrder ?? "-"})`
                      : "Hayir"}
                  </td>
                  <td className="px-4 py-3 text-[color:var(--text-secondary)]">
                    {new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium" }).format(tour.updatedAt)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/tours/${tour.id}`} className="admin-btn admin-btn-ghost">
                      Duzenle
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
