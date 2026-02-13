"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { testimonials as defaultTestimonials, trustStats as defaultTrustStats } from "~/content/site";
import type { Testimonial, TrustStat } from "~/content/types";

type TestimonialsSectionProps = {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  testimonials?: Testimonial[];
  trustStats?: TrustStat[];
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i < count ? "text-[color:var(--gold)]" : "text-gray-200"}`}
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-[color:var(--emerald)] opacity-10"
      aria-hidden="true"
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
  );
}

const TimelineCard = ({
  item,
  index,
  isMobile,
}: {
  item: Testimonial;
  index: number;
  isMobile: boolean;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 20 : isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative mb-12 flex w-full pl-6 md:mb-24 md:pl-0 ${
        !isMobile && (isLeft ? "justify-end md:pr-12" : "justify-start md:pl-12")
      } ${!isMobile && "md:w-1/2"} ${!isMobile && !isLeft && "md:ml-auto"}`}
    >
      <div
        className={`absolute top-6 hidden h-4 w-4 rounded-full border-[3px] border-[color:var(--gold)] bg-white shadow-[0_0_12px_rgba(212,175,55,0.3)] md:block ${
          isLeft ? "-right-[56px]" : "-left-[56px]"
        }`}
      />

      <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[color:var(--gold)]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[color:var(--gold)]/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <StarRating count={item.rating} />
            <QuoteIcon />
          </div>

          <blockquote className="mb-6">
            <p className="font-serif text-lg leading-relaxed text-gray-700">{item.quote}</p>
          </blockquote>

          <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold-dim)] font-bold text-white shadow-md">
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-gray-900">{item.name}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <FiMapPin className="h-3 w-3 text-[color:var(--gold)]" />
                <span>{item.route}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function TestimonialsSection({
  eyebrow = "Misafir Defteri",
  title = "Yolculuk",
  titleAccent = "Anıları",
  testimonials = defaultTestimonials,
  trustStats = defaultTrustStats,
}: TestimonialsSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yStats = useSpring(useTransform(scrollYProgress, [0, 1], [40, 0]), springConfig);

  return (
    <section ref={containerRef} className="relative z-10 overflow-hidden bg-white px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-[color:var(--emerald)]/15 bg-[color:var(--emerald)]/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--emerald)]">
              {eyebrow}
            </span>
            <h2 className="font-display px-4 text-4xl leading-tight text-[color:var(--emerald)] md:text-6xl lg:text-7xl">
              {title} <span className="text-gray-300">{titleAccent}</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent md:block">
            <motion.div
              style={{ height }}
              className="w-full bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--gold)] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.25)]"
            />
          </div>

          <div className="relative">
            {testimonials.map((item, i) => (
              <TimelineCard key={`${item.name}-${i}`} item={item} index={i} isMobile={false} />
            ))}

            <div className="absolute left-0 top-0 block h-full w-px md:hidden">
              <motion.div
                style={{ height }}
                className="h-full w-px bg-gradient-to-b from-[color:var(--gold)] to-transparent"
              />
            </div>
          </div>
        </div>

        <motion.div style={{ y: yStats }} className="mt-20 border-t border-gray-200 pt-16 md:mt-32">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustStats.map((stat, i) => (
              <div key={`${stat.label}-${i}`} className="group text-center">
                <div className="flex items-end justify-center gap-1 font-display text-4xl text-[color:var(--emerald)] md:text-5xl">
                  {stat.value}
                  <span className="mb-2 text-2xl text-[color:var(--gold)]">{stat.suffix}</span>
                </div>
                <div className="mx-auto mt-4 h-px w-8 bg-gray-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[color:var(--gold)]" />
                <p className="mt-4 text-sm font-medium uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
