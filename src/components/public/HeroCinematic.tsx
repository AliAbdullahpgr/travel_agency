"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
};

type HeroHotel = {
  name: string;
  city: string;
  nights: number;
  image: string;
};

type HeroFeaturedCard = {
  category: string;
  price: string;
  currency: string;
  perPerson: string;
  remainingSeats: number;
  tourCode: string;
  flightType: string;
  badges: string[];
  hotels: HeroHotel[];
  dates: {
    departure: string;
    transfer: string;
    returnDate: string;
  };
  href: string;
  ctaLabel: string;
  seatLabelPrefix: string;
  tourNameLabel: string;
  dateLabels: {
    departure: string;
    transfer: string;
    returnDate: string;
  };
};

type LandingHeroProps = {
  mode?: "landing";
  slides?: HeroSlide[];
  primaryCtaLabel?: string;
  featuredCard?: HeroFeaturedCard;
};

type PageHeroProps = {
  mode: "page";
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  chips?: string[];
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

type HeroCinematicProps = LandingHeroProps | PageHeroProps;

const defaultSlides: HeroSlide[] = [
  {
    image: "/kabbah1.jpg",
    title: "2026 Ramazan\nProgramlarımız",
    subtitle: "Açıklanmıştır.",
  },
  {
    image: "/kabbah2.jpg",
    title: "Kutsal Topraklara\nGüvenli Yolculuk",
    subtitle: "30 yıllık tecrübe ile.",
  },
  {
    image: "/kabbah3.jpg",
    title: "Hac ve Umre\nOrganizasyonu",
    subtitle: "Profesyonel rehberlik eşliğinde.",
  },
];

const defaultFeaturedCard: HeroFeaturedCard = {
  category: "Umre Turları",
  price: "3,200",
  currency: "$",
  perPerson: "per person",
  remainingSeats: 8,
  tourCode: "RL-0323-MOVNPCK",
  flightType: "Tarifeli Sefer",
  badges: ["Ramazan Umre Turları", "Lüks Umre Turları", "5 Yıldızlı Umre Turları"],
  hotels: [
    { name: "ANWAR AL MÖVENPİCK", city: "MEDİNE", nights: 4, image: "/3.jpg" },
    { name: "MAKKAH HOTEL", city: "MEKKE", nights: 4, image: "/4.jpg" },
  ],
  dates: {
    departure: "15 Mart",
    transfer: "19 Mart",
    returnDate: "23 Mart",
  },
  href: "/umre-turlari",
  ctaLabel: "Detayları İncele",
  seatLabelPrefix: "Son",
  tourNameLabel: "Tur Adı",
  dateLabels: {
    departure: "Gidiş",
    transfer: "Geçiş",
    returnDate: "Dönüş",
  },
};

const AUTOPLAY_MS = 5000;

function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  chips = [],
  primaryCta,
  secondaryCta,
}: Omit<PageHeroProps, "mode">) {
  const hasAnyCta = (primaryCta ?? secondaryCta) !== undefined;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,14,13,0.45),rgba(2,14,13,0.9))]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 md:px-8 md:pb-16 md:pt-28">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--gold-light)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/78 md:text-base">
          {subtitle}
        </p>

        {chips.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white/85"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {hasAnyCta && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-[color:var(--gold-light)]"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/35"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function LandingHero({
  slides,
  featuredCard,
  primaryCtaLabel,
}: {
  slides: HeroSlide[];
  featuredCard: HeroFeaturedCard;
  primaryCtaLabel: string;
}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  }, [slides.length]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const goTo = (index: number) => {
    stopAutoplay();
    setCurrent(index);
    startAutoplay();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: "clamp(560px, 90vh, 960px)" }}
    >
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, i) =>
            i === current && (
              <motion.div
                key={slide.image}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title.replace("\n", " ")}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
              </motion.div>
            ),
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="font-display text-4xl leading-[1.15] font-bold text-white [text-shadow:0_2px_12px_rgb(0_0_0/80%),0_4px_24px_rgb(0_0_0/60%)] md:text-5xl lg:text-6xl whitespace-pre-line">
                {slides[current]!.title}
              </h1>
              <p className="mt-3 text-xl font-medium text-white/90 [text-shadow:0_2px_8px_rgb(0_0_0/70%)] md:text-2xl italic">
                {slides[current]!.subtitle}
              </p>
              <Link
                href="/umre-turlari"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-bold text-gray-900 shadow-lg transition hover:bg-[color:var(--gold-light)] hover:shadow-xl"
              >
                {primaryCtaLabel}
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/40 md:left-5"
        aria-label="Önceki slayt"
      >
        <FiChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/40 md:right-5"
        aria-label="Sonraki slayt"
      >
        <FiChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-3 w-3 rounded-full border-2 border-white transition-all ${
              i === current ? "bg-white scale-110" : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 md:block xl:right-8">
        <div className="w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl xl:w-[380px]">
          <div className="relative">
            <div className="flex h-[160px]">
              {featuredCard.hotels.map((hotel, idx) => (
                <div key={hotel.name} className="relative flex-1">
                  <Image src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="200px" />
                  {idx === 0 && <div className="absolute right-0 top-0 bottom-0 w-px bg-white/60" />}
                </div>
              ))}

              <span className="absolute left-3 top-3 rounded-md bg-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow">
                {featuredCard.category}
              </span>
              <span className="absolute left-3 bottom-3 rounded-lg bg-[color:var(--emerald)] px-3 py-1.5 text-sm font-extrabold text-white shadow-lg">
                {featuredCard.currency} {featuredCard.price}{" "}
                <span className="text-xs font-normal opacity-90">{featuredCard.perPerson}</span>
              </span>
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white shadow">
                <FiUsers className="h-3 w-3" />
                {featuredCard.seatLabelPrefix} {featuredCard.remainingSeats} Yer
              </span>
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow transition hover:bg-white"
                aria-label="Sonraki tur"
              >
                <FiChevronRight className="h-4 w-4 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="px-4 py-3.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-800">
                {featuredCard.tourNameLabel}: <span className="text-gray-600">{featuredCard.tourCode}</span>
              </p>
              <span className="rounded bg-amber-100 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-700">
                {featuredCard.flightType}
              </span>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {featuredCard.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-700"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3">
              {featuredCard.hotels.map((hotel) => (
                <div key={hotel.name} className="text-center">
                  <div className="flex items-center justify-center gap-1 text-[0.65rem] font-medium text-emerald-600">
                    <FiMapPin className="h-3 w-3" />
                    {hotel.nights} GECE {hotel.city}
                  </div>
                  <p className="mt-0.5 text-xs font-bold text-gray-800 uppercase leading-tight">
                    {hotel.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 text-center">
              <div>
                <p className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-wide">
                  {featuredCard.dateLabels.departure}
                </p>
                <div className="mt-0.5 flex items-center justify-center gap-1">
                  <MdFlightTakeoff className="h-3.5 w-3.5 text-emerald-500" />
                  <p className="text-xs font-bold text-gray-800">{featuredCard.dates.departure}</p>
                </div>
              </div>
              <div>
                <p className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-wide">
                  {featuredCard.dateLabels.transfer}
                </p>
                <div className="mt-0.5 flex items-center justify-center gap-1">
                  <FiCalendar className="h-3 w-3 text-amber-500" />
                  <p className="text-xs font-bold text-gray-800">{featuredCard.dates.transfer}</p>
                </div>
              </div>
              <div>
                <p className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-wide">
                  {featuredCard.dateLabels.returnDate}
                </p>
                <div className="mt-0.5 flex items-center justify-center gap-1">
                  <MdFlightLand className="h-3.5 w-3.5 text-red-500" />
                  <p className="text-xs font-bold text-gray-800">{featuredCard.dates.returnDate}</p>
                </div>
              </div>
            </div>

            <Link
              href={featuredCard.href}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--emerald)] py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--emerald-light)]"
            >
              {featuredCard.ctaLabel}
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroCinematic(props: HeroCinematicProps = {}) {
  if (props.mode === "page") {
    return (
      <PageHero
        eyebrow={props.eyebrow}
        title={props.title}
        subtitle={props.subtitle}
        image={props.image}
        chips={props.chips}
        primaryCta={props.primaryCta}
        secondaryCta={props.secondaryCta}
      />
    );
  }

  const slides = props.slides?.length ? props.slides : defaultSlides;
  const featuredCard = props.featuredCard ?? defaultFeaturedCard;
  const primaryCtaLabel = props.primaryCtaLabel ?? "Turları İncele";

  return (
    <LandingHero
      slides={slides}
      featuredCard={featuredCard}
      primaryCtaLabel={primaryCtaLabel}
    />
  );
}
