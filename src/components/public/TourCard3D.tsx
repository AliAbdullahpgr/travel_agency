"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";
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
  const tiltAmount = motionTier === "cinematic" ? 8 : 4;

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
      className="tour-card-3d group flex flex-col overflow-hidden rounded-2xl border border-(--border-light) bg-white shadow-[0_2px_20px_rgba(10,61,46,0.06)] transition-all duration-300 hover:border-(--border-hover) hover:shadow-[0_8px_40px_rgba(10,61,46,0.12)]"
      whileHover={
        motionTier === "cinematic" ? { y: -6, scale: 1.01 } : { y: -2, scale: 1.005 }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 1100 } : undefined}
    >
      <Link href={`/turlar/${tour.slug}`} className="flex h-full flex-col">
        {/* ── Image ── */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          {/* Soft bottom vignette so text below pops */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.35)_100%)]" />

          {/* Category pill — top-left */}
          <div className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-(--emerald) shadow-sm backdrop-blur-sm">
            <FiMapPin className="h-3 w-3" />
            {getCategoryLabel(tour.category)}
          </div>

          {/* Duration pill — bottom-left */}
          <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-(--text) shadow-sm backdrop-blur-sm">
            <FiCalendar className="h-3 w-3 text-(--emerald)" />
            {tour.durationDays} Gün
          </div>

          {/* Price tag — bottom-right */}
          <div className="absolute bottom-3 right-3.5 rounded-full bg-(--emerald) px-3.5 py-1.5 text-sm font-bold text-white shadow-md">
            {formatTourPrice(tour.priceFrom, tour.currency)}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 font-display text-xl leading-snug text-(--text) md:text-[1.35rem]">
            {tour.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[0.82rem] leading-relaxed text-(--text-muted)">
            {tour.shortBlurb}
          </p>

          {/* Badges */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {tour.badges.slice(0, 3).map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-(--gold)/20 bg-(--gold)/[0.07] px-2 py-0.5 text-[0.6rem] font-semibold tracking-[0.08em] uppercase text-(--gold-dark)"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Spacer + CTA row pinned to bottom */}
          <div className="flex items-center justify-between border-t border-(--border-light) pt-4 mt-auto">
            <span className="text-[0.7rem] font-medium tracking-wide uppercase text-(--text-faint)">
              Başlangıç fiyatı
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-(--emerald) px-4 py-1.5 text-xs font-semibold text-white transition-colors group-hover:bg-(--emerald-light)">
              Detayları Gör
              <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
