"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";

/* ── Slide data ── */
const heroSlides = [
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

/* ── Featured card data (matching the screenshot style) ── */
const featuredCard = {
  category: "Umre Turları",
  price: "3.200",
  currency: "$",
  perPerson: "Kişi başı",
  remainingSeats: 8,
  tourCode: "RL-0323-MOVNPCK",
  flightType: "Tarifeli Sefer",
  badges: ["Ramazan Umre Turları", "Lüks Umre Turları", "5 Yıldızlı Umre Turları"],
  hotels: [
    { name: "ANWAR AL MÖVENPİCK", city: "MEDİNE", nights: 4, image: "/kabbah2.jpg" },
    { name: "MAKKAH HOTEL", city: "MEKKE", nights: 4, image: "/kabbah3.jpg" },
  ],
  dates: {
    departure: "15 Mart",
    transfer: "19 Mart",
    returnDate: "23 Mart",
  },
  href: "/umre-turlari",
};

const AUTOPLAY_MS = 5000;

export function HeroCinematic() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
  }, []);

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

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900" style={{ height: "clamp(420px, 75vh, 700px)" }}>
      {/* Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map(
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
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Text content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="font-display text-4xl leading-[1.15] font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl whitespace-pre-line">
                {heroSlides[current]!.title}
              </h1>
              <p className="mt-3 text-xl font-medium text-white/90 drop-shadow-md md:text-2xl italic">
                {heroSlides[current]!.subtitle}
              </p>
              <Link
                href="/umre-turlari"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-bold text-gray-900 shadow-lg transition hover:bg-[color:var(--gold-light)] hover:shadow-xl"
              >
                Turları İncele
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/40 md:left-5 md:p-3"
        aria-label="Önceki slayt"
      >
        <FiChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/40 md:right-5 md:p-3"
        aria-label="Sonraki slayt"
      >
        <FiChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
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

      {/* Featured tour card - positioned on the right, overlaying the hero */}
      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 lg:block xl:right-8">
        <div className="w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl xl:w-[380px]">
          {/* Category + Price header */}
          <div className="relative">
            {/* Hotel images side by side */}
            <div className="flex h-[160px]">
              {featuredCard.hotels.map((hotel, idx) => (
                <div key={hotel.name} className="relative flex-1">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  {idx === 0 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-white/60" />
                  )}
                </div>
              ))}

              {/* Category badge */}
              <span className="absolute left-3 top-3 rounded-md bg-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow">
                {featuredCard.category}
              </span>

              {/* Price badge */}
              <span className="absolute left-3 bottom-3 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-extrabold text-white shadow-lg">
                {featuredCard.price}
                <sup className="text-[0.6em]">{featuredCard.currency}</sup>{" "}
                <span className="text-xs font-normal opacity-90">{featuredCard.perPerson}</span>
              </span>

              {/* Remaining seats */}
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white shadow">
                <FiUsers className="h-3 w-3" />
                Son {featuredCard.remainingSeats} Yer
              </span>

              {/* Next arrow */}
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow transition hover:bg-white"
                aria-label="Sonraki tur"
              >
                <FiChevronRight className="h-4 w-4 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Card body */}
          <div className="px-4 py-3.5">
            {/* Tour code + flight */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-800">
                Tur Adı: <span className="text-gray-600">{featuredCard.tourCode}</span>
              </p>
              <span className="rounded bg-amber-100 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-700">
                {featuredCard.flightType}
              </span>
            </div>

            {/* Badges */}
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

            {/* Hotels row */}
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

            {/* Dates row */}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 text-center">
              <div>
                <p className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-wide">Gidiş</p>
                <div className="mt-0.5 flex items-center justify-center gap-1">
                  <FiCalendar className="h-3 w-3 text-emerald-500" />
                  <p className="text-xs font-bold text-gray-800">{featuredCard.dates.departure}</p>
                </div>
              </div>
              <div>
                <p className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-wide">Geçiş</p>
                <div className="mt-0.5 flex items-center justify-center gap-1">
                  <FiCalendar className="h-3 w-3 text-amber-500" />
                  <p className="text-xs font-bold text-gray-800">{featuredCard.dates.transfer}</p>
                </div>
              </div>
              <div>
                <p className="text-[0.6rem] font-medium text-gray-400 uppercase tracking-wide">Dönüş</p>
                <div className="mt-0.5 flex items-center justify-center gap-1">
                  <FiCalendar className="h-3 w-3 text-red-500" />
                  <p className="text-xs font-bold text-gray-800">{featuredCard.dates.returnDate}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={featuredCard.href}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--emerald)] py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--emerald-light)]"
            >
              Detayları İncele
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
