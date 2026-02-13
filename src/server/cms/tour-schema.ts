import { z } from "zod";

export const tourCategorySchema = z.enum(["umre", "hac", "kultur"]);
export const tourCurrencySchema = z.enum(["TRY", "USD", "EUR"]);

export const tourBadgeInputSchema = z.object({
  id: z.string().optional(),
  label: z.string().trim().min(1),
});

export const tourItineraryInputSchema = z.object({
  id: z.string().optional(),
  day: z.string().trim().min(1),
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
});

export const tourFaqInputSchema = z.object({
  id: z.string().optional(),
  question: z.string().trim().min(1),
  answer: z.string().trim().min(1),
});

export const tourStringListItemInputSchema = z.object({
  id: z.string().optional(),
  item: z.string().trim().min(1),
});

export const tourGalleryInputSchema = z.object({
  id: z.string().optional(),
  imageUrl: z.string().trim().min(1),
});

export const tourInputSchema = z.object({
  slug: z.string().trim().min(1),
  title: z.string().trim().min(1),
  category: tourCategorySchema,
  durationDays: z.number().int().min(1),
  priceFrom: z.number().int().min(0),
  currency: tourCurrencySchema,
  heroImage: z.string().trim().min(1),
  shortBlurb: z.string().trim().min(1),
  seoTitle: z.string().trim().min(1),
  seoDescription: z.string().trim().min(1),
  isPublished: z.boolean().default(true),
  isLandingFeatured: z.boolean().default(false),
  landingFeaturedOrder: z.number().int().nullable().optional(),
  badges: z.array(tourBadgeInputSchema).default([]),
  itinerary: z.array(tourItineraryInputSchema).default([]),
  includes: z.array(tourStringListItemInputSchema).default([]),
  excludes: z.array(tourStringListItemInputSchema).default([]),
  faq: z.array(tourFaqInputSchema).default([]),
  gallery: z.array(tourGalleryInputSchema).default([]),
});

export type TourInput = z.infer<typeof tourInputSchema>;

