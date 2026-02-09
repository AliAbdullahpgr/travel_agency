import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { TourSummary } from "~/content/types";
import { TourCard3D } from "~/components/public/TourCard3D";

type TourGridProps = {
  tours: TourSummary[];
  title: string;
  subtitle: string;
  cta?: {
    href: string;
    label: string;
  };
};

export function TourGrid({ tours, title, subtitle, cta }: TourGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[color:var(--gold-light)]">Seçilmiş Programlar</p>
          <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">{title}</h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">{subtitle}</p>
        </div>
        {cta && (
          <Link href={cta.href} className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white md:self-auto">
            {cta.label}
            <FiArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard3D key={tour.slug} tour={tour} />
        ))}
      </div>
    </section>
  );
}
