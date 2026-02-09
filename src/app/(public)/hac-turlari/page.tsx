import type { Metadata } from "next";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { StorySection } from "~/components/public/StorySection";
import { TourGrid } from "~/components/public/TourGrid";
import { categoryHeroCopy } from "~/content/site";
import { getToursByCategory } from "~/content/tours";

export const metadata: Metadata = {
  title: "Hac Turları",
  description:
    "Şükür Turizm hac turları: saha koordinasyonu güçlü, konaklama ve rehberlik dengesi kurulmuş kapsamlı hac programları.",
};

export default function HacToursPage() {
  const hero = categoryHeroCopy.hac;
  const tours = getToursByCategory("hac");

  return (
    <>
      <HeroCinematic
        mode="page"
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        chips={hero.chips}
        primaryCta={{ href: "/iletisim", label: "Hac Planımı Oluştur" }}
        secondaryCta={{ href: "/turlar/otel-tercihli-hac-2026", label: "Örnek Program" }}
      />

      <TourGrid
        tours={tours}
        title="Hac Paketleri"
        subtitle="Saha planlaması, konaklama tercihi ve ulaşım modeline göre hazırlanmış hac programları."
      />

      <StorySection
        eyebrow="Saha Yönetimi"
        title="Hac Operasyonunda Kritik Noktalar"
        intro="Hac programında başarıyı belirleyen unsur; yalnızca otel kalitesi değil, yoğun günlerdeki saha koordinasyonudur."
        items={[
          {
            title: "Kritik Gün Senaryoları",
            description:
              "Arafat ve Mina geçişleri için alternatif zamanlama ve toplanma planları önceden hazırlanır.",
          },
          {
            title: "Grup İçi Segmentasyon",
            description:
              "Yaş, fiziksel durum ve tempo beklentisine göre mikro grup düzeni kurularak kalabalık yönetimi iyileştirilir.",
          },
          {
            title: "Gerçek Zamanlı İletişim",
            description:
              "Saha sorumluları, rehberler ve merkez ekip aynı operasyon hattında ilerleyerek gecikmeleri azaltır.",
          },
          {
            title: "Konfor ve İbadet Dengesi",
            description:
              "Konaklama tercihi ibadet akışını destekleyecek şekilde belirlenir; yorgunluğu artıran gereksiz hareket azaltılır.",
          },
        ]}
      />

      <InquiryPanel
        compact
        title="Hac Dönemini Erken Planlayın"
        subtitle="Kontenjanlar dolmadan bütçe ve konaklama önceliklerinize göre hac paketini birlikte netleştirelim."
      />
    </>
  );
}
