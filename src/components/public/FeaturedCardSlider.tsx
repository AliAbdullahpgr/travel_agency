"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiTag,
} from "react-icons/fi";
import { featuredTours } from "~/content/tours";
import type { TourSummary } from "~/content/types";
import { useMotionTier } from "~/lib/motion/use-motion-tier";

const categoryLabels = {
  umre: "Umre",
  hac: "Hac",
  kultur: "Kültür",
} as const;

const currencySymbols = {
  TRY: "TRY",
  USD: "$",
  EUR: "EUR",
} as const;

const AUTOPLAY_MS = 5600;
const SWIPE_THRESHOLD = 40;
const WHEEL_THRESHOLD = 22;
const WHEEL_COOLDOWN_MS = 420;
const placeholderImages = ["/1.jpg", "/2.jpg", "/3.jpg"] as const;

type FeaturedCardSliderLabels = {
  title: string;
  premiumBadgeLabel: string;
  basePriceLabel: string;
  durationLabel: string;
  programTypeLabel: string;
  programTypeValue: string;
  routeLabel: string;
  ctaLabel: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  cardAriaSuffix: string;
};

const defaultLabels: FeaturedCardSliderLabels = {
  title: "Öne Çıkan Turlar",
  premiumBadgeLabel: "Premium",
  basePriceLabel: "Başlangıç Fiyatı",
  durationLabel: "Süre",
  programTypeLabel: "Program Tipi",
  programTypeValue: "Planlı Grup",
  routeLabel: "Rota",
  ctaLabel: "Programı İncele",
  prevAriaLabel: "Önceki kart",
  nextAriaLabel: "Sonraki kart",
  cardAriaSuffix: "kartına git",
};

type FeaturedCardSliderProps = {
  tours?: TourSummary[];
  labels?: Partial<FeaturedCardSliderLabels>;
};

const normalizeIndex = (value: number, length: number) => {
  if (length === 0) return 0;
  return (value + length) % length;
};

const getCircularOffset = (index: number, activeIndex: number, total: number) => {
  let offset = index - activeIndex;
  const midpoint = total / 2;

  if (offset > midpoint) offset -= total;
  if (offset < -midpoint) offset += total;

  return offset;
};

const formatPrice = (value: number, currency: "TRY" | "USD" | "EUR") => {
  const locale = currency === "TRY" ? "tr-TR" : "en-US";
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value);
};

export function FeaturedCardSlider({ tours: toursProp, labels }: FeaturedCardSliderProps) {
  const tours = (toursProp ?? featuredTours).slice(0, 6);
  const text = { ...defaultLabels, ...labels };
  const motionTier = useMotionTier();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchMoveX = useRef<number | null>(null);
  const wheelLockRef = useRef<number>(0);
  const total = tours.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      setActiveIndex(normalizeIndex(nextIndex, total));
    },
    [total],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || total < 2) return;

    const interval = window.setInterval(
      goNext,
      motionTier === "cinematic" ? AUTOPLAY_MS : AUTOPLAY_MS + 900,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [goNext, isPaused, motionTier, total]);

  if (!tours.length) {
    return null;
  }

  return (
    <section className="relative isolate overflow-hidden bg-white" aria-label="Öne çıkan tur kartları">
      <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-[color:var(--brand)]/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(4,14,12,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(4,14,12,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/45 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight text-[color:var(--emerald)] md:text-5xl">
            {text.title}
          </h2>
        </div>

        <div
          className="relative mt-10 overflow-visible bg-transparent md:mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div
            className="relative h-[40rem] select-none border-0 bg-transparent shadow-none outline-none ring-0 [perspective:1500px] [touch-action:pan-y] focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 sm:h-[42rem]"
            tabIndex={0}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
              touchMoveX.current = touchStartX.current;
            }}
            onTouchMove={(event) => {
              touchMoveX.current = event.changedTouches[0]?.clientX ?? touchMoveX.current;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;

              const endX = touchMoveX.current ?? event.changedTouches[0]?.clientX ?? touchStartX.current;
              const swipeDistance = endX - touchStartX.current;

              if (swipeDistance > SWIPE_THRESHOLD) goPrev();
              if (swipeDistance < -SWIPE_THRESHOLD) goNext();

              touchStartX.current = null;
              touchMoveX.current = null;
            }}
            onTouchCancel={() => {
              touchStartX.current = null;
              touchMoveX.current = null;
            }}
            onWheel={(event) => {
              const horizontalDelta = event.deltaX;
              const verticalDelta = event.deltaY;
              const hasHorizontalIntent = Math.abs(horizontalDelta) > Math.abs(verticalDelta);

              if (!hasHorizontalIntent || Math.abs(horizontalDelta) < WHEEL_THRESHOLD) {
                return;
              }

              const now = Date.now();
              if (now - wheelLockRef.current < WHEEL_COOLDOWN_MS) {
                return;
              }

              event.preventDefault();
              wheelLockRef.current = now;

              if (horizontalDelta > 0) goNext();
              if (horizontalDelta < 0) goPrev();
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goPrev();
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goNext();
              }
            }}
          >
            {tours.map((tour, index) => {
              const offset = getCircularOffset(index, activeIndex, total);
              const distance = Math.abs(offset);
              const isActive = distance === 0;
              const isVisible = distance <= 2;
              const imageSrc = placeholderImages[index % placeholderImages.length]!;

              const travelX = distance === 0 ? 0 : distance === 1 ? 340 : 640;
              const direction = offset === 0 ? 0 : offset > 0 ? 1 : -1;

              const scale = isActive ? 1 : distance === 1 ? 0.86 : 0.74;
              const rotateY = direction * -16;
              const opacity = isActive ? 1 : distance === 1 ? 0.74 : 0.36;

              return (
                <motion.article
                  key={tour.slug}
                  aria-hidden={!isVisible}
                  initial={false}
                  animate={{
                    opacity: isVisible ? opacity : 0,
                    scale: isVisible ? scale : 0.6,
                    x: direction * travelX,
                    rotateY,
                    zIndex: isActive ? 70 : 70 - distance * 10,
                    filter: isActive ? "saturate(1)" : "saturate(0.8)",
                  }}
                  transition={{
                    duration: motionTier === "cinematic" ? 0.72 : 0.46,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute left-1/2 top-1/2 w-[min(92vw,39rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] shadow-[0_38px_95px_rgba(1,10,8,0.75)] ${
                    isActive
                      ? "border border-white/20 bg-[linear-gradient(150deg,var(--emerald-deep),var(--obsidian))] opacity-100"
                      : "border border-white/12 bg-[linear-gradient(150deg,var(--emerald-deep),var(--obsidian))]"
                  } ${isVisible ? "pointer-events-auto" : "pointer-events-none"} ${
                    isActive ? "" : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (!isActive) setActiveIndex(index);
                  }}
                >
                  <div className="relative h-72 overflow-hidden sm:h-80">
                    <Image
                      src={imageSrc}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 95vw, 42rem"
                      className={`object-cover transition duration-700 ${isActive ? "scale-[1.06]" : "scale-100"}`}
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(2,11,9,0.24)_5%,rgba(2,11,9,0.54)_48%,rgba(2,11,9,0.9)_100%)]" />

                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="rounded-full border border-[color:var(--gold)]/38 bg-[color:var(--gold)]/[0.16] px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[color:var(--gold-light)]">
                        {categoryLabels[tour.category]}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/28 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-white/78">
                        {text.premiumBadgeLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <div className="rounded-xl border border-white/12 bg-black/32 px-3 py-2 backdrop-blur-md">
                        <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-white/65">
                          {text.basePriceLabel}
                        </p>
                        <p className="font-display text-xl text-white">
                          {formatPrice(tour.priceFrom, tour.currency)}
                          <span className="ml-1 text-sm text-[color:var(--gold-light)]">
                            {currencySymbols[tour.currency]}
                          </span>
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/12 bg-black/32 px-3 py-2 text-right backdrop-blur-md">
                        <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-white/65">
                          {text.durationLabel}
                        </p>
                        <p className="font-display text-lg text-white">{tour.durationDays} Gün</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative space-y-4 p-5">
                    <div>
                      <h3 className="font-display text-2xl leading-tight text-white">{tour.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/66">{tour.shortBlurb}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tour.badges.slice(0, 3).map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1 rounded-full border border-emerald-300/24 bg-emerald-400/12 px-3 py-1 text-[0.65rem] font-medium text-emerald-100"
                        >
                          <FiTag className="h-3 w-3" />
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-white/74">
                      <div className="rounded-xl border border-white/12 bg-black/26 px-3 py-2">
                        <span className="inline-flex items-center gap-1 text-white/64">
                          <FiCalendar className="h-3.5 w-3.5" />
                          {text.programTypeLabel}
                        </span>
                        <p className="mt-1 font-semibold text-white">{text.programTypeValue}</p>
                      </div>
                      <div className="rounded-xl border border-white/12 bg-black/26 px-3 py-2">
                        <span className="inline-flex items-center gap-1 text-white/64">
                          <FiClock className="h-3.5 w-3.5" />
                          {text.routeLabel}
                        </span>
                        <p className="mt-1 font-semibold text-white">
                          {categoryLabels[tour.category]} Koleksiyonu
                        </p>
                      </div>
                    </div>

                    {isActive ? (
                      <Link
                        href={`/turlar/${tour.slug}`}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[color:var(--gold)]/28 bg-[linear-gradient(120deg,rgba(200,168,78,0.32),rgba(200,168,78,0.16))] px-4 py-3 text-sm font-semibold text-[color:var(--gold-light)] transition hover:border-[color:var(--gold)]/45 hover:bg-[linear-gradient(120deg,rgba(200,168,78,0.42),rgba(200,168,78,0.22))]"
                      >
                        {text.ctaLabel}
                        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[color:var(--gold)]/28 bg-[linear-gradient(120deg,rgba(200,168,78,0.32),rgba(200,168,78,0.16))] px-4 py-3 text-sm font-semibold text-[color:var(--gold-light)] opacity-60">
                        {text.ctaLabel}
                        <FiArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--emerald)]/20 bg-white text-[color:var(--emerald)] shadow-sm transition hover:border-[color:var(--gold)]/45 hover:text-[color:var(--gold-dim)]"
              aria-label={text.prevAriaLabel}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 rounded-full border border-[color:var(--emerald)]/15 bg-white px-3 py-2 shadow-sm">
              {tours.map((tour, index) => (
                <button
                  key={tour.slug}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[color:var(--gold)]"
                      : "w-2.5 bg-[color:var(--emerald)]/25 hover:bg-[color:var(--emerald)]/45"
                  }`}
                  aria-label={`${tour.title} ${text.cardAriaSuffix}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--emerald)]/20 bg-white text-[color:var(--emerald)] shadow-sm transition hover:border-[color:var(--gold)]/45 hover:text-[color:var(--gold-dim)]"
              aria-label={text.nextAriaLabel}
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs font-medium tracking-[0.18em] uppercase text-[color:var(--emerald)]/45">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}

