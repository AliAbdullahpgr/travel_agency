import { requireContentAdminPage } from "~/server/auth/page-guards";
import { listAdminTours } from "~/server/cms/tours";
import { TourManager } from "../components/tour-manager";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ q?: string }>;

export default async function AdminToursPage({ searchParams }: { searchParams: SearchParams }) {
  await requireContentAdminPage();
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  
  // Fetch all tours (or filtered by query if provided)
  // Since TourManager handles client-side search, we could just fetch all, 
  // but if we want to support deep linking search param, we can keep it.
  // Ideally, fetching all allows client-side filtering without refetch.
  // Let's fetch all for now to empower the client-side sorting/filtering.
  const tours = await listAdminTours(undefined); // Fetch all for client-side management

  const serializedTours = tours.map((t) => ({
    id: t.id,
    title: t.title,
    slug: t.slug,
    category: t.category,
    isPublished: t.isPublished,
    isLandingFeatured: t.isLandingFeatured,
    landingFeaturedOrder: t.landingFeaturedOrder,
    updatedAt: t.updatedAt.toISOString(),
    createdAt: t.createdAt.toISOString(),
  }));

  return (
    <section className="admin-container max-w-7xl space-y-6">
      <header className="admin-hero p-6 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="admin-eyebrow">CMS</p>
            <h1 className="admin-title text-2xl md:text-3xl">Tur Katalogu</h1>
            <p className="admin-description">Tum tur programlarini ve vitrin durumlarini yonetin.</p>
          </div>
        </div>
      </header>

      <TourManager initialTours={serializedTours} />
    </section>
  );
}
