import type { Metadata } from "next";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { StorySection } from "~/components/public/StorySection";
import { TestimonialsDeck } from "~/components/public/TestimonialsDeck";


export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Şükür Turizm'in yolculuk yaklaşımı, operasyon disiplini ve yıllara yayılan saha tecrübesi hakkında detaylar.",
};

export default function AboutPage() {
  return (
    <>
      <HeroCinematic
        mode="page"
        eyebrow="Şirket Hafızası"
        title="1996'dan Bu Yana Aynı Söz: Güvenli ve Nitelikli Yolculuk"
        subtitle="Şükür Turizm, umre ve hac organizasyonunu yalnızca bir hizmet değil, emanet bilinciyle yürütülen çok katmanlı bir operasyon olarak görür."
        image="/5.jpg"
        chips={["1996 Kuruluş", "Ankara Merkez", "Saha Tecrübesi", "Kurumsal Operasyon"]}
        primaryCta={{ href: "/iletisim", label: "Ekibimizle Tanışın" }}
      />

      <StorySection
        eyebrow="Yaklaşım"
        title="Nasıl Çalışıyoruz?"
        intro="Süreçlerimizi üç ana eksende tasarlarız: planlama, saha yönetimi ve iletişim sürekliliği."
        items={[
          {
            title: "Planlama Önceliği",
            description:
              "Her tur döneminden önce program akışı, konaklama senaryosu ve transfer planı detaylı biçimde gözden geçirilir.",
          },
          {
            title: "Sahada Çevik Operasyon",
            description:
              "Grup yönetiminde hızlı karar alabilmek için rehber ve merkez ekip anlık iletişim altyapısı ile çalışır.",
          },
          {
            title: "İnsan Odaklı İletişim",
            description:
              "Misafirlerimize kayıt sürecinden dönüşe kadar aynı iletişim çizgisinde, net ve sade bilgi sunarız.",
          },
          {
            title: "Sürekli İyileştirme",
            description:
              "Her dönemin sonunda geri bildirimleri raporlar, bir sonraki sezona operasyonel geliştirme olarak taşırız.",
          },
        ]}
      />
      <TestimonialsDeck />
    </>
  );
}
