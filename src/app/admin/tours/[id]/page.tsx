import Link from "next/link";
import { notFound } from "next/navigation";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { getAdminTourById } from "~/server/cms/tours";
import { TourEditor, type TourFormState } from "~/app/admin/tours/tour-editor";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function AdminEditTourPage({ params }: Params) {
  await requireContentAdminPage();
  const { id } = await params;
  const tour = await getAdminTourById(id);

  if (!tour) {
    notFound();
  }

  const initialData: TourFormState = {
    slug: tour.slug,
    title: tour.title,
    category: tour.category,
    durationDays: tour.durationDays,
    priceFrom: tour.priceFrom,
    currency: tour.currency,
    heroImage: tour.heroImage,
    shortBlurb: tour.shortBlurb,
    seoTitle: tour.seoTitle,
    seoDescription: tour.seoDescription,
    isPublished: tour.isPublished,
    isLandingFeatured: tour.isLandingFeatured,
    landingFeaturedOrder: tour.landingFeaturedOrder,
    badges: tour.badges.map((item) => ({ id: item.id, label: item.label })),
    itinerary: tour.itinerarySteps.map((item) => ({
      id: item.id,
      day: item.day,
      title: item.title,
      description: item.description,
    })),
    includes: tour.includes.map((item) => ({ id: item.id, item: item.item })),
    excludes: tour.excludes.map((item) => ({ id: item.id, item: item.item })),
    faq: tour.faqs.map((item) => ({ id: item.id, question: item.question, answer: item.answer })),
    gallery: tour.galleryImages.map((item) => ({ id: item.id, imageUrl: item.imageUrl })),
  };

  return (
    <main className="admin-root px-4 py-8 md:px-8">
      <section className="admin-container max-w-6xl space-y-6">
        <header className="admin-hero p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="admin-eyebrow">Tur Yonetimi</p>
              <h1 className="admin-title text-3xl">{tour.title}</h1>
              <p className="admin-description">Tur icerigini, yayin durumunu ve landing ayarlarini duzenleyin.</p>
            </div>
            <Link href="/admin/tours" className="admin-btn admin-btn-ghost">
              Tur Listesi
            </Link>
          </div>
        </header>

        <TourEditor mode="edit" tourId={tour.id} initialData={initialData} />
      </section>
    </main>
  );
}
