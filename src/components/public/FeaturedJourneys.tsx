"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredTours } from "~/content/homepage";
import { useMotionTier } from "~/lib/motion/use-motion-tier";
import { useScrollReveal } from "~/lib/motion/use-scroll-reveal";

const categoryLabels: Record<string, string> = {
  umre: "Umre Programları",
  hac: "Hac Organizasyonu",
  kultur: "Kültür Rotaları",
};

export function FeaturedJourneys() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const motionTier = useMotionTier();

  useScrollReveal(sectionRef, { tier: motionTier });

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div data-reveal className="max-w-3xl space-y-4">
        <p className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.24em] uppercase text-[color:var(--gold-light)]">
          <span className="inline-block h-px w-6 bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
          Yolculuk Koleksiyonu
        </p>
        <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
          Manevi Yolculuğunuzu Seçin
        </h2>
        <p className="text-sm leading-relaxed text-white/60 md:text-base">
          Umre, hac ve kültür turlarımızdan size en uygun programı keşfedin.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
        {featuredTours.map((tour, index) => (
          <motion.div
            key={tour.category}
            data-reveal
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: motionTier === "cinematic" ? 0.7 : 0.5,
              delay: index * 0.12,
            }}
          >
            <Link href={tour.href} className="group relative block overflow-hidden rounded-[1.6rem] aspect-[3/4] md:aspect-auto md:min-h-[480px]">
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,12,0.1)_0%,rgba(4,14,12,0.5)_50%,rgba(4,14,12,0.92)_100%)] transition-all duration-400 group-hover:bg-[linear-gradient(180deg,rgba(4,14,12,0.15)_0%,rgba(4,14,12,0.55)_50%,rgba(4,14,12,0.95)_100%)]" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 md:p-6">
                <span className="mb-3 inline-block rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/[0.15] px-3 py-1 text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[color:var(--gold-light)]">
                  {categoryLabels[tour.category] ?? tour.category}
                </span>

                <h3 className="font-display text-2xl font-bold text-white leading-tight">
                  {tour.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {tour.subtitle}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--gold-light)] opacity-0 translate-y-2 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
                  Keşfet
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
