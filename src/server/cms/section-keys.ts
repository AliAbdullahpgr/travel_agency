export const cmsSectionKeys = [
  "site_shell",
  "landing_hero",
  "landing_slider",
  "landing_testimonials",
  "landing_faq",
  "inquiry_panel",
  "tour_category_heroes",
] as const;

export type CmsSectionKey = (typeof cmsSectionKeys)[number];

export function isCmsSectionKey(value: string): value is CmsSectionKey {
  return cmsSectionKeys.includes(value as CmsSectionKey);
}

