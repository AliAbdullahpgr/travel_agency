import type { TourCategory, TourCurrency } from "~/content/types";

const currencySymbols: Record<TourCurrency, string> = {
  TRY: "₺",
  USD: "$",
  EUR: "€",
};

const categoryLabels: Record<TourCategory, string> = {
  umre: "Umre",
  hac: "Hac",
  kultur: "Kültür",
};

export const formatTourPrice = (value: number, currency: TourCurrency): string =>
  `${currencySymbols[currency]}${new Intl.NumberFormat("tr-TR").format(value)}`;

export const getCategoryLabel = (category: TourCategory): string =>
  categoryLabels[category];
