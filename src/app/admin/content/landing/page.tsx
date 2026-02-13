import Link from "next/link";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import {
  getInquiryPanelContent,
  getLandingFaqContent,
  getLandingHeroContent,
  getLandingSliderContent,
  getLandingTestimonialsContent,
  getTourCategoryHeroesContent,
} from "~/server/cms/sections";
import { LandingEditor } from "~/app/admin/content/landing/landing-editor";

export default async function AdminLandingContentPage() {
  await requireContentAdminPage();
  const [hero, slider, testimonials, faq, inquiryPanel, categoryHeroes] = await Promise.all([
    getLandingHeroContent(),
    getLandingSliderContent(),
    getLandingTestimonialsContent(),
    getLandingFaqContent(),
    getInquiryPanelContent(),
    getTourCategoryHeroesContent(),
  ]);

  return (
    <main className="admin-root px-4 py-8 md:px-8">
      <section className="admin-container max-w-7xl space-y-6">
        <header className="admin-hero p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="admin-eyebrow">CMS</p>
              <h1 className="admin-title text-3xl">Landing Icerikleri</h1>
              <p className="admin-description">Ana sayfa bolumlerini duzenleyin.</p>
            </div>
            <Link href="/admin" className="admin-btn admin-btn-ghost">
              Admin Ana Sayfa
            </Link>
          </div>
        </header>

        <LandingEditor
          initialHero={hero}
          initialSlider={slider}
          initialTestimonials={testimonials}
          initialFaq={faq}
          initialInquiryPanel={inquiryPanel}
          initialCategoryHeroes={categoryHeroes}
        />
      </section>
    </main>
  );
}
