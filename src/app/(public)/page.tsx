import type { Metadata } from "next";
import { FeaturedCardSlider } from "~/components/public/FeaturedCardSlider";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";

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
      <InquiryPanel
        title="Form for Tour Registration"
        subtitle="Move through 3 simple milestones and send your request in under two minutes."
      />
    </>
  );
}
