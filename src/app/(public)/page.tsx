import type { Metadata } from "next";
import { FaqSection } from "~/components/public/FaqSection";
import { FeaturedCardSlider } from "~/components/public/FeaturedCardSlider";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { TestimonialsSection } from "~/components/public/TestimonialsSection";
import {
  getInquiryPanelContent,
  getLandingFaqContent,
  getLandingHeroContent,
  getLandingSliderContent,
  getLandingTestimonialsContent,
  getSiteShellContent,
} from "~/server/cms/sections";
import { listFeaturedPublishedTours } from "~/server/cms/tours";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Şükür Turizm ile umre, hac ve kültür turlarında güvenli ve konforlu yolculuk planlaması.",
  openGraph: {
    title: "Şükür Turizm | Umre, Hac ve Kültür Turları",
    description: "Umre, hac ve kültür turlarında güçlü operasyon ve güvenli planlama.",
    images: ["/1.jpg"],
    locale: "tr_TR",
    type: "website",
  },
};

export default async function HomePage() {
  const [hero, slider, testimonials, faq, inquiryPanel, siteShell, featuredTours] =
    await Promise.all([
      getLandingHeroContent(),
      getLandingSliderContent(),
      getLandingTestimonialsContent(),
      getLandingFaqContent(),
      getInquiryPanelContent(),
      getSiteShellContent(),
      listFeaturedPublishedTours(6),
    ]);

  return (
    <>
      <HeroCinematic
        slides={hero.slides}
        primaryCtaLabel={hero.primaryCtaLabel}
        featuredCard={hero.featuredCard}
      />

      <FeaturedCardSlider tours={featuredTours} labels={slider} />

      <TestimonialsSection
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        titleAccent={testimonials.titleAccent}
        testimonials={testimonials.testimonials}
        trustStats={testimonials.trustStats}
      />

      <FaqSection
        eyebrow={faq.eyebrow}
        title={faq.title}
        description={faq.description}
        ctaPrompt={faq.ctaPrompt}
        ctaLabel={faq.ctaLabel}
        faqs={faq.faqs}
        phone={siteShell.contactInfo.phonePrimary}
      />

      <InquiryPanel content={inquiryPanel} title={inquiryPanel.title} subtitle={inquiryPanel.subtitle} />
    </>
  );
}

