"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiGlobe, FiNavigation, FiUsers } from "react-icons/fi";
import { trustStats } from "~/content/site";
import { useCountUpOnView } from "~/lib/motion/use-count-up-on-view";
import { useMotionTier } from "~/lib/motion/use-motion-tier";
import { useScrollReveal } from "~/lib/motion/use-scroll-reveal";

const iconMap = [FiAward, FiUsers, FiNavigation, FiGlobe];

export function TrustBand() {
  const rootRef = useRef<HTMLElement | null>(null);
  const motionTier = useMotionTier();

  useCountUpOnView(rootRef, { tier: motionTier });
  useScrollReveal(rootRef, {
    selector: "[data-stat-card]",
    y: 24,
    stagger: 0.08,
    tier: motionTier,
  });

  return (
    <section ref={rootRef} className="relative z-20 mx-auto -mt-14 max-w-[80rem] px-4 md:-mt-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="grid gap-3 rounded-[1.8rem] border border-white/[0.12] bg-[linear-gradient(130deg,rgba(9,55,47,0.9),rgba(3,25,21,0.88))] p-4 backdrop-blur-xl sm:grid-cols-2 md:p-6 lg:grid-cols-4"
      >
        {trustStats.map((stat, i) => {
          const Icon = iconMap[i] ?? FiAward;
          return (
            <article
              key={stat.label}
              data-stat-card
              className="rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-center"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--gold)]/[0.12]">
                <Icon className="h-5 w-5 text-[color:var(--gold-light)]" />
              </div>
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-[color:var(--gold-light)]">
                {stat.label}
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-1 text-3xl font-bold text-white">
                <span data-count-to={stat.value}>0</span>
                {stat.suffix ? (
                  <span className="text-xl text-[color:var(--gold-light)]">{stat.suffix}</span>
                ) : null}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/[0.55]">{stat.note}</p>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
