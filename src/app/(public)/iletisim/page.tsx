import type { Metadata } from "next";
import { ContactShowcase } from "~/components/public/ContactShowcase";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { getSiteShellContent } from "~/server/cms/sections";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Şükür Turizm iletişim kanalları, hızlı ön başvuru formu ve program danışmanlığı için doğrudan erişim.",
};

export default async function ContactPage() {
  const shell = await getSiteShellContent();
  const contactInfo = shell.contactInfo;

  return (
    <>
      <HeroCinematic
        mode="page"
        eyebrow="İletişim Merkezi"
        title="15 Dakikada Program Çerçevenizi Netleştirelim"
        subtitle="Telefonla ya da form ile ulaşın; ekip aynı gün geri dönüş yaparak rota, süre ve bütçe dengenizi netleştirsin."
        image="/3.jpg"
        chips={["Aynı Gün Dönüş", "Ankara Merkez Ofis", "WhatsApp Destek", "Ön Kayıt Hattı"]}
        primaryCta={{ href: "#hizli-basvuru", label: "Hızlı Form" }}
      />

      <ContactShowcase contactInfo={contactInfo} whatsapp={shell.socialUrls.whatsapp} />
    </>
  );
}
