export type TourCategory = "umre" | "hac" | "kultur";

export type TourCurrency = "TRY" | "USD" | "EUR";

export type TourSummary = {
  slug: string;
  title: string;
  category: TourCategory;
  durationDays: number;
  priceFrom: number;
  currency: TourCurrency;
  heroImage: string;
  badges: string[];
  shortBlurb: string;
};

export type ItineraryStep = {
  day: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TourDetail = TourSummary & {
  itinerary: ItineraryStep[];
  includes: string[];
  excludes: string[];
  faq: FaqItem[];
  gallery: string[];
  seo: {
    title: string;
    description: string;
  };
};

export type TrustStat = {
  label: string;
  value: number;
  suffix?: string;
  note: string;
};

export type Testimonial = {
  name: string;
  route: string;
  quote: string;
  rating: number;
};
