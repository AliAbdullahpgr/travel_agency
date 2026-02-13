import { z } from "zod";
import { cmsSectionKeys, type CmsSectionKey } from "~/server/cms/section-keys";

const navLinkSchema = z.object({
  href: z.string().trim().min(1),
  label: z.string().trim().min(1),
});

const contactInfoSchema = z.object({
  phonePrimary: z.string().trim().min(1),
  phoneSecondary: z.string().trim().min(1),
  whatsapp: z.string().trim().min(1),
  email: z.string().trim().min(1),
  address: z.string().trim().min(1),
});

export const siteShellSchema = z.object({
  brandName: z.string().trim().min(1),
  topBarText: z.string().trim().min(1),
  navLinks: z.array(navLinkSchema).min(1),
  contactInfo: contactInfoSchema,
  footer: z.object({
    eyebrow: z.string().trim().min(1),
    headline: z.string().trim().min(1),
    description: z.string().trim().min(1),
    quickLinksTitle: z.string().trim().min(1),
    contactTitle: z.string().trim().min(1),
    socialTitle: z.string().trim().min(1),
    adminLabel: z.string().trim().min(1),
    copyrightText: z.string().trim().min(1),
    mottoText: z.string().trim().min(1),
  }),
  socialUrls: z.object({
    instagram: z.string().trim().min(1),
    whatsapp: z.string().trim().min(1),
  }),
  contactRail: z.object({
    callLabel: z.string().trim().min(1),
    whatsappLabel: z.string().trim().min(1),
  }),
});

const hotelSchema = z.object({
  name: z.string().trim().min(1),
  city: z.string().trim().min(1),
  nights: z.number().int().min(1),
  image: z.string().trim().min(1),
});

export const landingHeroSchema = z.object({
  slides: z
    .array(
      z.object({
        image: z.string().trim().min(1),
        title: z.string().trim().min(1),
        subtitle: z.string().trim().min(1),
      }),
    )
    .min(1),
  primaryCtaLabel: z.string().trim().min(1),
  featuredCard: z.object({
    category: z.string().trim().min(1),
    price: z.string().trim().min(1),
    currency: z.string().trim().min(1),
    perPerson: z.string().trim().min(1),
    remainingSeats: z.number().int().min(0),
    tourCode: z.string().trim().min(1),
    flightType: z.string().trim().min(1),
    badges: z.array(z.string().trim().min(1)).min(1),
    hotels: z.array(hotelSchema).min(2),
    dates: z.object({
      departure: z.string().trim().min(1),
      transfer: z.string().trim().min(1),
      returnDate: z.string().trim().min(1),
    }),
    href: z.string().trim().min(1),
    ctaLabel: z.string().trim().min(1),
    seatLabelPrefix: z.string().trim().min(1),
    tourNameLabel: z.string().trim().min(1),
    dateLabels: z.object({
      departure: z.string().trim().min(1),
      transfer: z.string().trim().min(1),
      returnDate: z.string().trim().min(1),
    }),
  }),
});

export const landingSliderSchema = z.object({
  title: z.string().trim().min(1),
  premiumBadgeLabel: z.string().trim().min(1),
  basePriceLabel: z.string().trim().min(1),
  durationLabel: z.string().trim().min(1),
  programTypeLabel: z.string().trim().min(1),
  programTypeValue: z.string().trim().min(1),
  routeLabel: z.string().trim().min(1),
  ctaLabel: z.string().trim().min(1),
  prevAriaLabel: z.string().trim().min(1),
  nextAriaLabel: z.string().trim().min(1),
  cardAriaSuffix: z.string().trim().min(1),
});

export const landingTestimonialsSchema = z.object({
  eyebrow: z.string().trim().min(1),
  title: z.string().trim().min(1),
  titleAccent: z.string().trim().min(1),
  testimonials: z
    .array(
      z.object({
        name: z.string().trim().min(1),
        route: z.string().trim().min(1),
        quote: z.string().trim().min(1),
        rating: z.number().int().min(1).max(5),
      }),
    )
    .min(1),
  trustStats: z
    .array(
      z.object({
        label: z.string().trim().min(1),
        value: z.number().int().min(0),
        suffix: z.string().default(""),
        note: z.string().trim().min(1),
      }),
    )
    .min(1),
});

export const landingFaqSchema = z.object({
  eyebrow: z.string().trim().min(1),
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  ctaPrompt: z.string().trim().min(1),
  ctaLabel: z.string().trim().min(1),
  faqs: z
    .array(
      z.object({
        question: z.string().trim().min(1),
        answer: z.string().trim().min(1),
      }),
    )
    .min(1),
});

export const inquiryPanelSchema = z.object({
  title: z.string().trim().min(1),
  subtitle: z.string().trim().min(1),
  steps: z
    .array(
      z.object({
        number: z.string().trim().min(1),
        title: z.string().trim().min(1),
      }),
    )
    .length(3),
  backLabel: z.string().trim().min(1),
  nextLabel: z.string().trim().min(1),
  finishLabel: z.string().trim().min(1),
  savingLabel: z.string().trim().min(1),
  successMessage: z.string().trim().min(1),
  stepValidationMessages: z.object({
    personal: z.string().trim().min(1),
    trip: z.string().trim().min(1),
    consent: z.string().trim().min(1),
  }),
});

const categoryHeroEntrySchema = z.object({
  eyebrow: z.string().trim().min(1),
  title: z.string().trim().min(1),
  subtitle: z.string().trim().min(1),
  image: z.string().trim().min(1),
  chips: z.array(z.string().trim().min(1)).min(1),
});

export const tourCategoryHeroesSchema = z.object({
  umre: categoryHeroEntrySchema,
  hac: categoryHeroEntrySchema,
  kultur: categoryHeroEntrySchema,
});

export const cmsSectionSchemaByKey = {
  site_shell: siteShellSchema,
  landing_hero: landingHeroSchema,
  landing_slider: landingSliderSchema,
  landing_testimonials: landingTestimonialsSchema,
  landing_faq: landingFaqSchema,
  inquiry_panel: inquiryPanelSchema,
  tour_category_heroes: tourCategoryHeroesSchema,
} as const satisfies Record<CmsSectionKey, z.ZodTypeAny>;

export function getCmsSectionSchema(key: CmsSectionKey) {
  return cmsSectionSchemaByKey[key];
}

export function assertCmsSectionKey(key: string): CmsSectionKey {
  if (!cmsSectionKeys.includes(key as CmsSectionKey)) {
    throw new Error(`Unsupported CMS section key: ${key}`);
  }
  return key as CmsSectionKey;
}

export type SiteShellData = z.infer<typeof siteShellSchema>;
export type LandingHeroData = z.infer<typeof landingHeroSchema>;
export type LandingSliderData = z.infer<typeof landingSliderSchema>;
export type LandingTestimonialsData = z.infer<typeof landingTestimonialsSchema>;
export type LandingFaqData = z.infer<typeof landingFaqSchema>;
export type InquiryPanelData = z.infer<typeof inquiryPanelSchema>;
export type TourCategoryHeroesData = z.infer<typeof tourCategoryHeroesSchema>;

