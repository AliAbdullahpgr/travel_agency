import type { Metadata } from "next";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { HeroCinematic } from "~/components/public/HeroCinematic";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { contactInfo } from "~/content/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Şükür Turizm iletişim kanalları, hızlı ön başvuru formu ve program danışmanlığı için doğrudan erişim.",
};

export default function ContactPage() {
  return (
    <>
      <HeroCinematic
        mode="page"
        eyebrow="İletişim Merkezi"
        title="15 Dakikada Program Çerçevenizi Netleştirelim"
        subtitle="Telefonla ya da form ile ulaşın; ekip aynı gün geri dönüş yaparak rota, süre ve bütçe dengenizi netleştirsin."
        image="/hero_image.jpg"
        chips={["Aynı Gün Dönüş", "Ankara Merkez Ofis", "WhatsApp Destek", "Ön Kayıt Hattı"]}
        primaryCta={{ href: "#hizli-basvuru", label: "Hızlı Form" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-5">
            <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--gold)]/25 text-[color:var(--gold-light)]">
              <FiPhone />
            </p>
            <h2 className="font-display text-2xl text-white">Telefon</h2>
            <p className="mt-3 text-sm text-white/75">{contactInfo.phonePrimary}</p>
            <p className="text-sm text-white/75">{contactInfo.phoneSecondary}</p>
          </article>

          <article className="rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-5">
            <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--gold)]/25 text-[color:var(--gold-light)]">
              <FiMail />
            </p>
            <h2 className="font-display text-2xl text-white">E-Posta</h2>
            <p className="mt-3 text-sm text-white/75">{contactInfo.email}</p>
          </article>

          <article className="rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-5">
            <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--gold)]/25 text-[color:var(--gold-light)]">
              <FiMapPin />
            </p>
            <h2 className="font-display text-2xl text-white">Adres</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{contactInfo.address}</p>
          </article>

          <article className="rounded-[1.5rem] border border-white/15 bg-white/[0.04] p-5">
            <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--gold)]/25 text-[color:var(--gold-light)]">
              <FiClock />
            </p>
            <h2 className="font-display text-2xl text-white">Çalışma</h2>
            <p className="mt-3 text-sm text-white/75">Hafta içi: 09:00 - 19:00</p>
            <p className="text-sm text-white/75">Cumartesi: 10:00 - 17:00</p>
          </article>
        </div>
      </section>

      <InquiryPanel />
    </>
  );
}
