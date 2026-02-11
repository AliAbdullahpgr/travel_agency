import type { Metadata } from "next";
import { FaqSection } from "~/components/public/FaqSection";
import { FeaturedCardSlider } from "~/components/public/FeaturedCardSlider";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { TestimonialsSection } from "~/components/public/TestimonialsSection";
import { WhyChooseUs } from "~/components/public/WhyChooseUs";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Şükür Turizm ile umre, hac ve kültür turlarında güvenli ve konforlu yolculuk planlaması.",
  openGraph: {
    title: "Şükür Turizm | Umre, Hac ve Kültür Turları",
    description:
      "Umre, hac ve kültür turlarında güçlü operasyon ve güvenli planlama.",
    images: ["/kabbah1.jpg"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <FeaturedCardSlider />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <InquiryPanel
        title="Tur Kayıt Başvurusu"
        subtitle="3 basit adımda başvurunuzu iki dakikadan kısa sürede gönderin."
      />
    </>
  );
}
