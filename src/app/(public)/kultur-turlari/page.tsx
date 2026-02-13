import type { Metadata } from "next";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { StorySection } from "~/components/public/StorySection";
import { TourGrid } from "~/components/public/TourGrid";
import { getInquiryPanelContent, getTourCategoryHeroesContent } from "~/server/cms/sections";
import { listPublishedToursByCategory } from "~/server/cms/tours";

export const metadata: Metadata = {
  title: "Kültür Turları",
  description:
    "Kudüs, Balkanlar ve Anadolu odaklı kültür turlarında tarih, inanç ve şehir hikayesini birlikte yaşayan rotalar.",
};

export default async function KulturToursPage() {
  const [heroes, tours, inquiryPanel] = await Promise.all([
    getTourCategoryHeroesContent(),
    listPublishedToursByCategory("kultur"),
    getInquiryPanelContent(),
  ]);
  const hero = heroes.kultur;

  return (
    <>
      <HeroCinematic
        mode="page"
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        chips={hero.chips}
        primaryCta={{ href: "/iletisim", label: "Rota Danışmanlığı Al" }}
        secondaryCta={{ href: "/turlar/kudus-mescid-i-aksa-6-gun", label: "Kudüs Programı" }}
      />

      <TourGrid
        tours={tours}
        title="Kültür Programları"
        subtitle="Her rotada tarihi bağlamı güçlü, temposu dengeli ve anlatısı zengin kültür turları."
      />

      <StorySection
        eyebrow="Rota Kurgusu"
        title="Sadece Gezi Değil, Anlamlı Bir Hafıza"
        intro="Kültür turlarımız şehirleri hızlı tüketmez; mekânların tarihsel bağlamını ve inanç mirasını birlikte anlatır."
        items={[
          {
            title: "Katmanlı Anlatım",
            description:
              "Mekan, dönem ve olaylar arasında bağ kuran anlatı dili ile ziyaretler daha anlamlı hale gelir.",
          },
          {
            title: "Dengeli Tempo",
            description:
              "Yüksek hareketli şehir akışı ile dinlenme blokları dengelenerek yorgunluk yönetilir.",
          },
          {
            title: "Yerel Dokuyla Buluşma",
            description:
              "Yalnızca turistik noktalara değil, yerel yaşam ritmini hissettiren duraklara da yer verilir.",
          },
          {
            title: "Profesyonel Rehberlik",
            description:
              "Tarihsel ve dini arka planı güçlü rehber kadrosu ile her durakta bağlam net kalır.",
          },
        ]}
      />

      <InquiryPanel
        compact
        content={inquiryPanel}
        title="Kültür Rotanızı Beraber Seçelim"
        subtitle="Seyahat süresi ve ilgi alanınıza göre doğru kültür turunu hızlıca belirleyelim."
      />
    </>
  );
}
