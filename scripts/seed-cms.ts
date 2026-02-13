import { PrismaClient } from "../generated/prisma";
import {
  defaultInquiryPanelData,
  defaultLandingFaqData,
  defaultLandingHeroData,
  defaultLandingSliderData,
  defaultLandingTestimonialsData,
  defaultSiteShellData,
  defaultTourCategoryHeroesData,
} from "../src/server/cms/fallbacks";
import { tourDetails } from "../src/content/tours";

const prisma = new PrismaClient();

const sectionEntries: Array<{ key: string; data: unknown }> = [
  { key: "site_shell", data: defaultSiteShellData },
  { key: "landing_hero", data: defaultLandingHeroData },
  { key: "landing_slider", data: defaultLandingSliderData },
  { key: "landing_testimonials", data: defaultLandingTestimonialsData },
  { key: "landing_faq", data: defaultLandingFaqData },
  { key: "inquiry_panel", data: defaultInquiryPanelData },
  { key: "tour_category_heroes", data: defaultTourCategoryHeroesData },
];

async function upsertSections() {
  for (const entry of sectionEntries) {
    await prisma.cmsSection.upsert({
      where: { key: entry.key },
      update: { data: entry.data as never },
      create: {
        key: entry.key,
        data: entry.data as never,
      },
    });
  }
}

async function upsertTours() {
  for (const [index, tour] of tourDetails.entries()) {
    const upserted = await prisma.tour.upsert({
      where: { slug: tour.slug },
      update: {
        title: tour.title,
        category: tour.category,
        durationDays: tour.durationDays,
        priceFrom: tour.priceFrom,
        currency: tour.currency,
        heroImage: tour.heroImage,
        shortBlurb: tour.shortBlurb,
        seoTitle: tour.seo.title,
        seoDescription: tour.seo.description,
        isPublished: true,
        isLandingFeatured: index < 6,
        landingFeaturedOrder: index < 6 ? index + 1 : null,
      },
      create: {
        slug: tour.slug,
        title: tour.title,
        category: tour.category,
        durationDays: tour.durationDays,
        priceFrom: tour.priceFrom,
        currency: tour.currency,
        heroImage: tour.heroImage,
        shortBlurb: tour.shortBlurb,
        seoTitle: tour.seo.title,
        seoDescription: tour.seo.description,
        isPublished: true,
        isLandingFeatured: index < 6,
        landingFeaturedOrder: index < 6 ? index + 1 : null,
      },
      select: { id: true },
    });

    await prisma.$transaction(
      async (tx) => {
        await tx.tourBadge.deleteMany({ where: { tourId: upserted.id } });
        await tx.tourItineraryStep.deleteMany({ where: { tourId: upserted.id } });
        await tx.tourInclude.deleteMany({ where: { tourId: upserted.id } });
        await tx.tourExclude.deleteMany({ where: { tourId: upserted.id } });
        await tx.tourFaq.deleteMany({ where: { tourId: upserted.id } });
        await tx.tourGalleryImage.deleteMany({ where: { tourId: upserted.id } });

        if (tour.badges.length > 0) {
          await tx.tourBadge.createMany({
            data: tour.badges.map((label, badgeIndex) => ({
              tourId: upserted.id,
              label,
              order: badgeIndex + 1,
            })),
          });
        }

        if (tour.itinerary.length > 0) {
          await tx.tourItineraryStep.createMany({
            data: tour.itinerary.map((item, itineraryIndex) => ({
              tourId: upserted.id,
              day: item.day,
              title: item.title,
              description: item.description,
              order: itineraryIndex + 1,
            })),
          });
        }

        if (tour.includes.length > 0) {
          await tx.tourInclude.createMany({
            data: tour.includes.map((item, includeIndex) => ({
              tourId: upserted.id,
              item,
              order: includeIndex + 1,
            })),
          });
        }

        if (tour.excludes.length > 0) {
          await tx.tourExclude.createMany({
            data: tour.excludes.map((item, excludeIndex) => ({
              tourId: upserted.id,
              item,
              order: excludeIndex + 1,
            })),
          });
        }

        if (tour.faq.length > 0) {
          await tx.tourFaq.createMany({
            data: tour.faq.map((item, faqIndex) => ({
              tourId: upserted.id,
              question: item.question,
              answer: item.answer,
              order: faqIndex + 1,
            })),
          });
        }

        if (tour.gallery.length > 0) {
          await tx.tourGalleryImage.createMany({
            data: tour.gallery.map((imageUrl, galleryIndex) => ({
              tourId: upserted.id,
              imageUrl,
              order: galleryIndex + 1,
            })),
          });
        }
      },
      {
        maxWait: 15_000,
        timeout: 60_000,
      },
    );
  }
}

async function main() {
  await upsertSections();
  await upsertTours();
  console.log("CMS seed completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
