"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { formatTourPrice, getCategoryLabel } from "~/content/helpers";
import type { TourSummary } from "~/content/types";
import { useMotionTier } from "~/lib/motion/use-motion-tier";

type TourCard3DProps = {
  tour: TourSummary;
};

export function TourCard3D({ tour }: TourCard3DProps) {
  const motionTier = useMotionTier();
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionTemplate`${y}deg`, {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(useMotionTemplate`${x}deg`, {
    stiffness: 180,
    damping: 20,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => {
      setHasFinePointer(pointerQuery.matches);
    };

    updatePointer();
    pointerQuery.addEventListener("change", updatePointer);

    return () => {
      pointerQuery.removeEventListener("change", updatePointer);
    };
  }, []);

  const tiltEnabled = hasFinePointer && motionTier === "cinematic";
  const tiltAmount = motionTier === "cinematic" ? 10 : 5;

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (!tiltEnabled) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(((event.clientX - centerX) / rect.width) * tiltAmount);
    y.set(((centerY - event.clientY) / rect.height) * tiltAmount);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="tour-card-3d group rounded-[1.8rem] border border-gray-200 bg-white p-3 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-colors duration-300 hover:border-(--gold)/40"
      whileHover={
        motionTier === "cinematic" ? { y: -7, scale: 1.012 } : { y: -3, scale: 1.006 }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 1100 } : undefined}
    >
      <Link href={`/turlar/${tour.slug}`} className="block h-full">
        <div className="relative h-60 overflow-hidden rounded-[1.35rem]">
          <Image src={tour.heroImage} alt={tour.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(1,8,7,0.84)_100%)]" />
          <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-white">
            {getCategoryLabel(tour.category)}
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-white/90">
            <FiClock className="h-3.5 w-3.5" />
            {tour.durationDays} Gün
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <h3 className="line-clamp-2 font-display text-2xl leading-tight text-gray-900">{tour.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">{tour.shortBlurb}</p>

          <div className="flex flex-wrap gap-2">
            {tour.badges.slice(0, 2).map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[color:var(--emerald)]/15 bg-[color:var(--emerald)]/[0.05] px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[color:var(--emerald)]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <div>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gray-400">Başlangıç</p>
              <p className="text-lg font-semibold text-[color:var(--gold)]">
                {formatTourPrice(tour.priceFrom, tour.currency)}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--emerald)]">
              Detay
              <FiArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
