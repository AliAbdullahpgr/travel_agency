import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCheckCircle, FiMinusCircle } from "react-icons/fi";
import { InquiryPanel } from "~/components/public/InquiryPanel";
import { TourGrid } from "~/components/public/TourGrid";
import { formatTourPrice } from "~/content/helpers";
import { getInquiryPanelContent } from "~/server/cms/sections";
import { getPublishedTourBySlug, listRelatedPublishedTours } from "~/server/cms/tours";

type TourPageParams = {
  slug: string;
};

type TourPageProps = {
  params: Promise<TourPageParams>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getPublishedTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tur Bulunamadı",
    };
  }

  return {
    title: tour.seo.title,
    description: tour.seo.description,
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      images: [tour.heroImage],
      locale: "tr_TR",
    },
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const [tour, relatedTours, inquiryPanel] = await Promise.all([
    getPublishedTourBySlug(slug),
    listRelatedPublishedTours(slug),
    getInquiryPanelContent(),
  ]);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0">
          <Image src={tour.heroImage} alt={tour.title} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,14,13,0.45),rgba(2,14,13,0.9))]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-20 md:px-8 md:pb-10 md:pt-24">
          <Link href={`/${tour.category}-turlari`} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/80 transition hover:bg-black/30 hover:text-white">
            <FiArrowLeft className="h-3.5 w-3.5" />
            Kategoriye Dön
          </Link>

          <div className="mt-6 max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--gold-light)]">Program Detayı</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-white md:text-6xl">{tour.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/78 md:text-base">{tour.shortBlurb}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/85">{tour.durationDays} Gün</span>
            <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-[color:var(--gold-light)]">
              Başlangıç: {formatTourPrice(tour.priceFrom, tour.currency)}
            </span>
            {tour.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/75">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-[1.3fr_0.7fr] md:px-8">
        <article className="space-y-6">
          <header>
            <h2 className="font-display text-3xl text-white md:text-4xl">Program Akışı</h2>
            <p className="mt-2 text-sm text-white/70">Planlanan günlük ritim aşağıdaki gibidir.</p>
          </header>

          <div className="space-y-3">
            {tour.itinerary.map((item) => (
              <div
                key={`${item.day}-${item.title}`}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-4"
              >
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[color:var(--gold-light)]">{item.day}</p>
                <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-emerald-300/25 bg-emerald-400/10 p-5">
            <h3 className="font-display text-2xl text-white">Paket Dahil</h3>
            <ul className="mt-4 space-y-2">
              {tour.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/82">
                  <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-red-300/25 bg-red-400/10 p-5">
            <h3 className="font-display text-2xl text-white">Paket Dışı</h3>
            <ul className="mt-4 space-y-2">
              {tour.excludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/82">
                  <FiMinusCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <h2 className="font-display text-3xl text-white md:text-4xl">Sık Sorulan Sorular</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {tour.faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
              <h3 className="font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/72">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedTours.length > 0 && (
        <TourGrid
          tours={relatedTours}
          title="Benzer Programlar"
          subtitle="Aynı kategori içinde yakın süre ve hizmet yapısına sahip alternatif paketler."
        />
      )}

      <InquiryPanel
        compact
        content={inquiryPanel}
        title="Bu Program İçin Hızlı Bilgi Alın"
        subtitle="Aynı gün geri dönüş ile uygun tarih ve kontenjan durumunu netleştirelim."
      />
    </>
  );
}
