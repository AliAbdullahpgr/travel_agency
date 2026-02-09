import type { Metadata } from "next";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { StorySection } from "~/components/public/StorySection";
import { TourGrid } from "~/components/public/TourGrid";
import { categoryHeroCopy } from "~/content/site";
import { getToursByCategory } from "~/content/tours";

export const metadata: Metadata = {
  title: "Umre Turları",
  description:
    "Şükür Turizm umre turları: farklı süre, bütçe ve konaklama seçenekleriyle profesyonel planlanmış umre programları.",
};

export default function UmreToursPage() {
  const hero = categoryHeroCopy.umre;
  const tours = getToursByCategory("umre");

  return (
    <>
      <HeroCinematic
        mode="page"
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        chips={hero.chips}
        primaryCta={{ href: "/iletisim", label: "Uzmanla Görüş" }}
        secondaryCta={{ href: "/turlar/vip-umre-altin-15-gun", label: "VIP Paketi Gör" }}
      />

      <TourGrid
        tours={tours}
        title="Umre Paketleri"
        subtitle="Süre, konaklama ve rehberlik yoğunluğuna göre katmanlı umre koleksiyonumuzu inceleyin."
      />

      <StorySection
        eyebrow="Planlama"
        title="Umrede Doğru Paket Nasıl Seçilir?"
        intro="Paket seçimini sadece fiyat üzerinden değil, yolculuğun fiziksel temposu ve hedeflenen ibadet yoğunluğu üzerinden yapmalısınız."
        items={[
          {
            title: "Süreye Göre Seçim",
            description:
              "10 günlük paketler yoğun tempoya uygundur; 15-20 gün programları daha geniş ve dengeli bir ritim sunar.",
          },
          {
            title: "Konaklama Konumu",
            description:
              "Mescidlere yakınlık yürüyüş yükünü doğrudan etkiler. Özellikle ileri yaş gruplarında kritik fark yaratır.",
          },
          {
            title: "Rehberlik Modeli",
            description:
              "Kalabalık gruplarda rehber başına düşen kişi sayısı, program kalitesini belirleyen ana göstergedir.",
          },
          {
            title: "Ulaşım ve Transfer",
            description:
              "Uçuş tipi ve transfer akışının netliği, ilk ve son günlerdeki yorgunluğu ciddi şekilde düşürür.",
          },
        ]}
      />

      <InquiryPanel
        compact
        title="Size Uygun Umre Programını 15 Dakikada Netleştirelim"
        subtitle="Formu gönderin, danışman ekibimiz bütçe ve süre önceliklerinize göre doğru paketi önersin."
      />
    </>
  );
}
