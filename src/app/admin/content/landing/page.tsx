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
    <section className="admin-container max-w-7xl space-y-6">
      <header className="admin-hero p-6">
        <p className="admin-eyebrow">CMS</p>
        <h1 className="admin-title text-2xl md:text-3xl">Landing Icerikleri</h1>
        <p className="admin-description">Ana sayfa bolumlerini duzenleyin.</p>
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
  );
}
