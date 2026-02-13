import { db } from "~/server/db";
import {
  defaultInquiryPanelData,
  defaultLandingFaqData,
  defaultLandingHeroData,
  defaultLandingSliderData,
  defaultLandingTestimonialsData,
  defaultSiteShellData,
  defaultTourCategoryHeroesData,
} from "~/server/cms/fallbacks";
import {
  getCmsSectionSchema,
  type InquiryPanelData,
  type LandingFaqData,
  type LandingHeroData,
  type LandingSliderData,
  type LandingTestimonialsData,
  type SiteShellData,
  type TourCategoryHeroesData,
} from "~/server/cms/schemas";
import type { CmsSectionKey } from "~/server/cms/section-keys";

let cmsSectionTableMissing = false;
let hasLoggedMissingCmsSectionTable = false;

function isMissingTableError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2021"
  );
}

async function readSectionData<T>(
  key: CmsSectionKey,
  fallbackData: T,
): Promise<T> {
  if (cmsSectionTableMissing) {
    if (!hasLoggedMissingCmsSectionTable) {
      console.warn('[CMS] Using section fallbacks because "CmsSection" table is missing.');
      hasLoggedMissingCmsSectionTable = true;
    }
    return fallbackData;
  }

  try {
    const section = await db.cmsSection.findUnique({ where: { key } });
    const schema = getCmsSectionSchema(key);

    if (!section) {
      console.info(`[CMS] Using fallback for section "${key}" (not found).`);
      return fallbackData;
    }

    const parsed = schema.safeParse(section.data);
    if (!parsed.success) {
      console.warn(
        `[CMS] Using fallback for section "${key}" (validation failed).`,
        parsed.error.flatten(),
      );
      return fallbackData;
    }

    return parsed.data as T;
  } catch (error) {
    if (isMissingTableError(error)) {
      cmsSectionTableMissing = true;
      if (!hasLoggedMissingCmsSectionTable) {
        console.warn(
          `[CMS] Using fallback for section "${key}" (CmsSection table missing).`,
        );
        hasLoggedMissingCmsSectionTable = true;
      }
      return fallbackData;
    }

    throw error;
  }
}

async function safeFindSection(key: CmsSectionKey) {
  if (cmsSectionTableMissing) {
    return null;
  }

  try {
    return await db.cmsSection.findUnique({ where: { key } });
  } catch (error) {
    if (isMissingTableError(error)) {
      cmsSectionTableMissing = true;
      return null;
    }

    throw error;
  }
}

export async function getSiteShellContent(): Promise<SiteShellData> {
  return readSectionData("site_shell", defaultSiteShellData);
}

export async function getLandingHeroContent(): Promise<LandingHeroData> {
  return readSectionData("landing_hero", defaultLandingHeroData);
}

export async function getLandingSliderContent(): Promise<LandingSliderData> {
  return readSectionData("landing_slider", defaultLandingSliderData);
}

export async function getLandingTestimonialsContent(): Promise<LandingTestimonialsData> {
  return readSectionData("landing_testimonials", defaultLandingTestimonialsData);
}

export async function getLandingFaqContent(): Promise<LandingFaqData> {
  return readSectionData("landing_faq", defaultLandingFaqData);
}

export async function getInquiryPanelContent(): Promise<InquiryPanelData> {
  return readSectionData("inquiry_panel", defaultInquiryPanelData);
}

export async function getTourCategoryHeroesContent(): Promise<TourCategoryHeroesData> {
  return readSectionData("tour_category_heroes", defaultTourCategoryHeroesData);
}

export async function getAnySectionForAdmin(key: CmsSectionKey) {
  const section = await safeFindSection(key);
  if (!section) {
    return null;
  }

  const schema = getCmsSectionSchema(key);
  const parsed = schema.safeParse(section.data);

  if (!parsed.success) {
    return null;
  }

  return parsed.data;
}

export async function upsertSectionData(
  key: CmsSectionKey,
  data: unknown,
  updatedById: string,
) {
  const schema = getCmsSectionSchema(key);
  const parsed = schema.parse(data);

  return db.cmsSection.upsert({
    where: { key },
    update: {
      data: parsed,
      updatedById,
    },
    create: {
      key,
      data: parsed,
      updatedById,
    },
  });
}
