import type { Prisma, Tour as PrismaTour } from "../../../generated/prisma";
import { db } from "~/server/db";
import type { TourCategory, TourDetail, TourSummary } from "~/content/types";
import {
  allTours as staticAllTours,
  featuredTours as staticFeaturedTours,
  getRelatedTours as staticGetRelatedTours,
  getTourBySlug as staticGetTourBySlug,
  getToursByCategory as staticGetToursByCategory,
} from "~/content/tours";
import type { TourInput } from "~/server/cms/tour-schema";

let tourTableMissing = false;
let hasLoggedMissingTourTable = false;

function isMissingTableError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2021"
  );
}

function logStaticFallback(scope: string) {
  console.warn(`[CMS] Using static tour fallback (${scope}; Tour table missing).`);
}

function noteTourTableMissing() {
  tourTableMissing = true;
  if (!hasLoggedMissingTourTable) {
    hasLoggedMissingTourTable = true;
  }
}

const tourInclude = {
  badges: {
    orderBy: { order: "asc" as const },
  },
  itinerarySteps: {
    orderBy: { order: "asc" as const },
  },
  includes: {
    orderBy: { order: "asc" as const },
  },
  excludes: {
    orderBy: { order: "asc" as const },
  },
  faqs: {
    orderBy: { order: "asc" as const },
  },
  galleryImages: {
    orderBy: { order: "asc" as const },
  },
} satisfies Prisma.TourInclude;

type TourWithChildren = Prisma.TourGetPayload<{ include: typeof tourInclude }>;

function dbTourToSummary(tour: PrismaTour): TourSummary {
  return {
    slug: tour.slug,
    title: tour.title,
    category: tour.category as TourCategory,
    durationDays: tour.durationDays,
    priceFrom: tour.priceFrom,
    currency: tour.currency,
    heroImage: tour.heroImage,
    badges: [],
    shortBlurb: tour.shortBlurb,
  };
}

function dbTourWithChildrenToDetail(tour: TourWithChildren): TourDetail {
  return {
    slug: tour.slug,
    title: tour.title,
    category: tour.category as TourCategory,
    durationDays: tour.durationDays,
    priceFrom: tour.priceFrom,
    currency: tour.currency,
    heroImage: tour.heroImage,
    badges: tour.badges.map((item) => item.label),
    shortBlurb: tour.shortBlurb,
    itinerary: tour.itinerarySteps.map((item) => ({
      day: item.day,
      title: item.title,
      description: item.description,
    })),
    includes: tour.includes.map((item) => item.item),
    excludes: tour.excludes.map((item) => item.item),
    faq: tour.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    gallery: tour.galleryImages.map((item) => item.imageUrl),
    seo: {
      title: tour.seoTitle,
      description: tour.seoDescription,
    },
  };
}

function withSummaryBadges(
  summary: TourSummary,
  badges: string[],
): TourSummary {
  return {
    ...summary,
    badges,
  };
}

export async function listPublishedTours(): Promise<TourSummary[]> {
  if (tourTableMissing) {
    return staticAllTours;
  }

  try {
    const tours = await db.tour.findMany({
      where: { isPublished: true },
      orderBy: [{ category: "asc" }, { title: "asc" }],
      include: {
        badges: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (!tours.length) {
      return staticAllTours;
    }

    return tours.map((tour) =>
      withSummaryBadges(
        dbTourToSummary(tour),
        tour.badges.map((item) => item.label),
      ),
    );
  } catch (error) {
    if (isMissingTableError(error)) {
      noteTourTableMissing();
      logStaticFallback("listPublishedTours");
      return staticAllTours;
    }

    throw error;
  }
}

export async function listPublishedToursByCategory(
  category: TourCategory,
): Promise<TourSummary[]> {
  if (tourTableMissing) {
    return staticGetToursByCategory(category);
  }

  try {
    const tours = await db.tour.findMany({
      where: { isPublished: true, category },
      orderBy: [{ title: "asc" }],
      include: {
        badges: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (!tours.length) {
      return staticGetToursByCategory(category);
    }

    return tours.map((tour) =>
      withSummaryBadges(
        dbTourToSummary(tour),
        tour.badges.map((item) => item.label),
      ),
    );
  } catch (error) {
    if (isMissingTableError(error)) {
      noteTourTableMissing();
      logStaticFallback(`listPublishedToursByCategory:${category}`);
      return staticGetToursByCategory(category);
    }

    throw error;
  }
}

export async function listFeaturedPublishedTours(
  limit = 6,
): Promise<TourSummary[]> {
  if (tourTableMissing) {
    return staticFeaturedTours.slice(0, limit);
  }

  try {
    const tours = await db.tour.findMany({
      where: { isPublished: true, isLandingFeatured: true },
      include: {
        badges: {
          orderBy: { order: "asc" },
        },
      },
      orderBy: [
        { landingFeaturedOrder: "asc" },
        { updatedAt: "desc" },
      ],
      take: limit,
    });

    if (!tours.length) {
      return staticFeaturedTours.slice(0, limit);
    }

    return tours.map((tour) =>
      withSummaryBadges(
        dbTourToSummary(tour),
        tour.badges.map((item) => item.label),
      ),
    );
  } catch (error) {
    if (isMissingTableError(error)) {
      noteTourTableMissing();
      logStaticFallback("listFeaturedPublishedTours");
      return staticFeaturedTours.slice(0, limit);
    }

    throw error;
  }
}

export async function getPublishedTourBySlug(
  slug: string,
): Promise<TourDetail | null> {
  if (tourTableMissing) {
    return staticGetTourBySlug(slug) ?? null;
  }

  try {
    const tour = await db.tour.findFirst({
      where: { slug, isPublished: true },
      include: tourInclude,
    });

    if (!tour) {
      return staticGetTourBySlug(slug) ?? null;
    }

    return dbTourWithChildrenToDetail(tour);
  } catch (error) {
    if (isMissingTableError(error)) {
      noteTourTableMissing();
      logStaticFallback(`getPublishedTourBySlug:${slug}`);
      return staticGetTourBySlug(slug) ?? null;
    }

    throw error;
  }
}

export async function listRelatedPublishedTours(
  slug: string,
): Promise<TourSummary[]> {
  if (tourTableMissing) {
    return staticGetRelatedTours(slug);
  }

  try {
    const currentTour = await db.tour.findFirst({
      where: { slug, isPublished: true },
    });

    if (!currentTour) {
      return staticGetRelatedTours(slug);
    }

    const tours = await db.tour.findMany({
      where: {
        isPublished: true,
        category: currentTour.category,
        slug: { not: slug },
      },
      include: {
        badges: {
          orderBy: { order: "asc" },
        },
      },
      orderBy: [{ updatedAt: "desc" }],
      take: 3,
    });

    return tours.map((tour) =>
      withSummaryBadges(
        dbTourToSummary(tour),
        tour.badges.map((item) => item.label),
      ),
    );
  } catch (error) {
    if (isMissingTableError(error)) {
      noteTourTableMissing();
      logStaticFallback(`listRelatedPublishedTours:${slug}`);
      return staticGetRelatedTours(slug);
    }

    throw error;
  }
}

export async function listAdminTours(search?: string) {
  return db.tour.findMany({
    where: search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { slug: { contains: search, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: [{ updatedAt: "desc" }],
  });
}

export async function getAdminTourById(id: string) {
  return db.tour.findUnique({
    where: { id },
    include: tourInclude,
  });
}

function toOrder(itemIndex: number) {
  return itemIndex + 1;
}

function toNullableOrder(value: number | null | undefined): number | null {
  if (typeof value !== "number") {
    return null;
  }
  return Number.isFinite(value) ? value : null;
}

export async function createAdminTour(input: TourInput) {
  return db.tour.create({
    data: {
      slug: input.slug,
      title: input.title,
      category: input.category,
      durationDays: input.durationDays,
      priceFrom: input.priceFrom,
      currency: input.currency,
      heroImage: input.heroImage,
      shortBlurb: input.shortBlurb,
      seoTitle: input.seoTitle,
      seoDescription: input.seoDescription,
      isPublished: input.isPublished,
      isLandingFeatured: input.isLandingFeatured,
      landingFeaturedOrder: toNullableOrder(input.landingFeaturedOrder),
      badges: {
        create: input.badges.map((item, index) => ({
          label: item.label,
          order: toOrder(index),
        })),
      },
      itinerarySteps: {
        create: input.itinerary.map((item, index) => ({
          day: item.day,
          title: item.title,
          description: item.description,
          order: toOrder(index),
        })),
      },
      includes: {
        create: input.includes.map((item, index) => ({
          item: item.item,
          order: toOrder(index),
        })),
      },
      excludes: {
        create: input.excludes.map((item, index) => ({
          item: item.item,
          order: toOrder(index),
        })),
      },
      faqs: {
        create: input.faq.map((item, index) => ({
          question: item.question,
          answer: item.answer,
          order: toOrder(index),
        })),
      },
      galleryImages: {
        create: input.gallery.map((item, index) => ({
          imageUrl: item.imageUrl,
          order: toOrder(index),
        })),
      },
    },
  });
}

export async function updateAdminTour(id: string, input: TourInput) {
  return db.$transaction(async (tx) => {
    await tx.tour.update({
      where: { id },
      data: {
        slug: input.slug,
        title: input.title,
        category: input.category,
        durationDays: input.durationDays,
        priceFrom: input.priceFrom,
        currency: input.currency,
        heroImage: input.heroImage,
        shortBlurb: input.shortBlurb,
        seoTitle: input.seoTitle,
        seoDescription: input.seoDescription,
        isPublished: input.isPublished,
        isLandingFeatured: input.isLandingFeatured,
        landingFeaturedOrder: toNullableOrder(input.landingFeaturedOrder),
      },
    });

    await Promise.all([
      tx.tourBadge.deleteMany({ where: { tourId: id } }),
      tx.tourItineraryStep.deleteMany({ where: { tourId: id } }),
      tx.tourInclude.deleteMany({ where: { tourId: id } }),
      tx.tourExclude.deleteMany({ where: { tourId: id } }),
      tx.tourFaq.deleteMany({ where: { tourId: id } }),
      tx.tourGalleryImage.deleteMany({ where: { tourId: id } }),
    ]);

    await Promise.all([
      tx.tourBadge.createMany({
        data: input.badges.map((item, index) => ({
          tourId: id,
          label: item.label,
          order: toOrder(index),
        })),
      }),
      tx.tourItineraryStep.createMany({
        data: input.itinerary.map((item, index) => ({
          tourId: id,
          day: item.day,
          title: item.title,
          description: item.description,
          order: toOrder(index),
        })),
      }),
      tx.tourInclude.createMany({
        data: input.includes.map((item, index) => ({
          tourId: id,
          item: item.item,
          order: toOrder(index),
        })),
      }),
      tx.tourExclude.createMany({
        data: input.excludes.map((item, index) => ({
          tourId: id,
          item: item.item,
          order: toOrder(index),
        })),
      }),
      tx.tourFaq.createMany({
        data: input.faq.map((item, index) => ({
          tourId: id,
          question: item.question,
          answer: item.answer,
          order: toOrder(index),
        })),
      }),
      tx.tourGalleryImage.createMany({
        data: input.gallery.map((item, index) => ({
          tourId: id,
          imageUrl: item.imageUrl,
          order: toOrder(index),
        })),
      }),
    ]);

    return tx.tour.findUnique({
      where: { id },
      include: tourInclude,
    });
  });
}

export async function deleteAdminTour(id: string) {
  await db.tour.delete({ where: { id } });
}
