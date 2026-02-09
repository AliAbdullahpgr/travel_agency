"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { homeTestimonials } from "~/content/homepage";
import { useMotionTier } from "~/lib/motion/use-motion-tier";
import { useMarquee } from "~/lib/motion/homeGsap";

export function TestimonialRibbon() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const motionTier = useMotionTier();

  useMarquee(sectionRef, motionTier);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 md:py-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-3xl space-y-3">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.24em] uppercase text-[color:var(--gold-light)]">
            <span className="inline-block h-px w-6 bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
            Referanslar
          </p>
          <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
            Misafirlerimiz Ne Diyor?
          </h2>
          <p className="text-sm leading-relaxed text-white/60 md:text-base">
            Gerçek misafir geri bildirimlerinden derlenen yorumlar ile operasyon kalitemizi paylaşıyoruz.
          </p>
        </div>
      </div>

      {/* Scrollable ribbon track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[color:var(--obsidian)] to-transparent md:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[color:var(--obsidian)] to-transparent md:w-24" />

        {/* Track */}
        <div className="flex gap-5 overflow-x-auto px-4 hide-scrollbar md:px-8" data-marquee-track>
          {/* Double the items for seamless loop */}
          {[...homeTestimonials, ...homeTestimonials].map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              className="relative flex-none w-[320px] overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 md:w-[380px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (index % homeTestimonials.length) * 0.06 }}
            >
              {/* Quote mark */}
              <span className="pointer-events-none absolute right-4 top-3 font-display text-[5rem] leading-none text-[color:var(--gold)]/[0.08]">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="mb-3 flex gap-1 text-[0.85rem] text-[color:var(--gold-light)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[0.9rem] leading-[1.8] text-white/75 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                {item.location && (
                  <p className="mt-0.5 text-[0.72rem] tracking-[0.15em] uppercase text-white/40">
                    {item.location}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
