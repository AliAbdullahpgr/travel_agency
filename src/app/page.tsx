"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  IconPhoneAlt,
  IconMailAlt,
  IconFacebookAlt,
  IconInstagramAlt,
  IconFacebook,
  IconInstagram,
  IconSearch,
  IconLocation,
  IconCalendar,
  IconUser,
  IconTrophy,
  IconPlane,
  IconGroup,
  IconScale,
  IconShield,
  IconCutlery,
  IconArrowRight,
  IconArrowUpRight,
  IconMenu,
  IconChevronDown,
} from "~/app/_components/icons";

// Data
const featuredTours = [
  {
    id: 1,
    title: "20 G\u00FCnl\u00FCk Umre Turlar\u0131",
    price: "1.450",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "Medine ve Mekke'de konforlu konaklama ile 20 g\u00FCnl\u00FCk manevi yolculuk.",
  },
  {
    id: 2,
    title: "Muhafazakar Yurti\u00E7i Turlar\u0131",
    price: "1.200",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    currency: "\u20BA",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "Anadolu'nun tarihi ve k\u00FClt\u00FCrel g\u00FCzelliklerini ke\u015Ffedin.",
  },
  {
    id: 3,
    title: "10 G\u00FCnl\u00FCk Umre Turlar\u0131",
    price: "1.250",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "K\u0131sa ama dolu dolu bir umre deneyimi. Rehberli ziyaretler dahil.",
  },
  {
    id: 4,
    title: "Hac Turlar\u0131 2025",
    price: "3.950",
    image: "https://images.unsplash.com/photo-1542652735-bff0b49e498e?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "Ehil rehberler e\u015Fli\u011Finde hac ibadetinizi huzurla yerine getirin.",
  },
  {
    id: 5,
    title: "Kud\u00FCs & Mescid-i Aksa",
    price: "1.800",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "\u0130slam'\u0131n \u00FC\u00E7 kutsal mescidinden birini ziyaret edin.",
  },
  {
    id: 6,
    title: "Bosna Hersek Turu",
    price: "950",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c696?q=80&w=1600&auto=format&fit=crop",
    currency: "\u20AC",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "Bosna Hersek'in tarihi camilerini ve \u0130slami miras\u0131n\u0131 ke\u015Ffedin.",
  },
  {
    id: 7,
    title: "VIP Umre Paketi",
    price: "2.450",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "5 y\u0131ld\u0131zl\u0131 otel ve VIP transfer ile \u00F6zel umre deneyimi.",
  },
  {
    id: 8,
    title: "Aile Umre Turlar\u0131",
    price: "1.150",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ki\u015Fi ba\u015F\u0131",
    description: "Ailece kat\u0131labilece\u011Finiz uygun fiyatl\u0131 umre turlar\u0131.",
  },
  {
    id: 9,
    title: "Ramazan Umresi",
    price: "1.650",
    image: "https://images.unsplash.com/photo-1597212618440-806a846b4bb5?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "Ramazan ay\u0131n\u0131n bereketini kutsal topraklarda ya\u015Fay\u0131n.",
  },
  {
    id: 10,
    title: "15 G\u00FCnl\u00FCk Umre Turlar\u0131",
    price: "1.350",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
    description: "15 g\u00FCnl\u00FCk program ile Mekke ve Medine'yi detayl\u0131 ke\u015Ffedin.",
  },
];

const reasons = [
  {
    icon: IconTrophy,
    title: "1996 Y\u0131l\u0131ndan Beri Tecr\u00FCbeli Acente",
  },
  {
    icon: IconPlane,
    title: "Direkt Ankara U\u00E7u\u015F",
  },
  {
    icon: IconGroup,
    title: "Her 45 Ki\u015Fiye Tecr\u00FCbeli Ehil Rehber",
  },
  {
    icon: IconScale,
    title: "Manevi Yolculukta Manevi Hizmet",
  },
  {
    icon: IconShield,
    title: "Kapsaml\u0131 \u00F6zel seyahat sa\u011Fl\u0131k sigortas\u0131",
  },
  {
    icon: IconCutlery,
    title:
      "Evinizde Hissettirecek T\u00FCrk Mutfa\u011F\u0131 Ekibimiz",
  },
];

const tabs = [
  { id: "HAC", label: "HAC" },
  { id: "UMRE", label: "UMRE" },
];

const testimonials = [
  {
    text: "Her \u015Fey ger\u00E7ekten g\u00FCzeldi ilgi alaka her \u015Fey vard\u0131 ba\u015Fta \u015Firketinin sahiblerinden bizlerle \u00E7ok ilgilenen dost oldu\u011Fumuz Hakk\u0131 bey\u2019e ve bizlerle ilgilenen Salih hocam\u0131za \u00E7ok te\u015Fekk\u00FCr ederim.",
    author: "Yasin Altunba\u015F",
    rating: 5,
  },
  {
    text: "Allah raz\u0131 olsun, \u00E7ok memnun kald\u0131k. \u00D6zellikle rehberlerimizin ilgisi \u015Fahaneydi.",
    author: "Mehmet Y\u0131lmaz",
    rating: 5,
  },
  {
    text: "Manevi atmosferi hissetmemize vesile olan \u015e\u00fck\u00fcr Turizm\u2019e te\u015Fekk\u00fcrler.",
    author: "Ay\u015Fe Kaya",
    rating: 5,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("HAC");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Search bar state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedKonum, setSelectedKonum] = useState("");
  const [selectedTur, setSelectedTur] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [passengers, setPassengers] = useState({ cocuk: 0, yasli: 0, genc: 0 });
  const searchBarRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -374 : 374,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPassengers = passengers.cocuk + passengers.yasli + passengers.genc;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "var(--cream)", color: "#1a2e28" }}
    >
      {/* Top Bar */}
      <div
        className="striped-bar relative z-50 flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-white sm:px-8 md:px-18 md:py-3"
        style={{ backgroundColor: "var(--brand)" }}
      >
        <div className="flex items-center space-x-4 pl-0 sm:space-x-6 md:pl-12">
          <span className="flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-white/80 sm:gap-2 sm:text-base">
            <IconPhoneAlt className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 0554 113 40 02
          </span>
          <span className="hidden cursor-pointer items-center gap-2 text-base font-medium transition-colors hover:text-white/80 sm:flex">
            <IconMailAlt className="h-4 w-4" /> info@sukurturizm.com
          </span>
        </div>
        <div className="flex items-center space-x-2 px-0 sm:space-x-3 md:px-12">
          <Link
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white/25 sm:h-8 sm:w-8"
          >
            <IconFacebookAlt className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
          </Link>
          <Link
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white/25 sm:h-8 sm:w-8"
          >
            <IconInstagramAlt className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
          </Link>
        </div>
      </div>

      {/* Header & Navigation */}
      <header
        className="sticky top-0 z-40 shadow-lg"
        style={{ backgroundColor: "var(--emerald)" }}
      >
        <div className="container mx-auto flex items-center justify-between px-8 py-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Şükür Turizm"
              width={160}
              height={160}
              className="h-20 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {[
              "Hac",
              "Umre",
              "K\u00FClt\u00FCr Turlar\u0131",
              "\u00D6deme",
              "\u0130leti\u015Fim",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="nav-link text-lg font-semibold text-white/90 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="text-white md:hidden">
            <IconMenu className="h-7 w-7" />
          </button>
        </div>
        {/* Gold accent line */}
        <div
          className="h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
          }}
        />
      </header>

      {/* Hero Section */}
      <section className="relative h-[820px] w-full md:h-[1000px]">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,61,46,0.45) 0%, rgba(10,61,46,0.25) 50%, rgba(10,61,46,0.6) 100%)",
          }}
        />
        <Image
          src="/hero_image.jpg"
          alt="Hero background"
          fill
          className="no-radius object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <p
            className="mb-4 text-lg font-medium tracking-[0.3em] uppercase"
            style={{ color: "#E8CC6E" }}
          >
            Manevi Yolculuk
          </p>
          <h1 className="font-display mb-6 text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            Şükür Turism
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Hac, Umre ve K{"\u00FC"}lt{"\u00FC"}r Turlar{"\u0131"} i{"\u00E7"}in
            g{"\u00FC"}venilir yol arkada{"\u015F\u0131"}n{"\u0131"}z
          </p>
        </div>

        {/* Search Bar Floating */}
        <div className="absolute bottom-0 left-1/2 z-30 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 transform px-4">
          <div
            ref={searchBarRef}
            className="flex flex-col items-center justify-between gap-4 rounded-3xl border px-8 py-6 shadow-xl backdrop-blur-sm md:flex-row md:gap-0"
            style={{
              backgroundColor: "white",
              borderColor: "rgba(200, 168, 78, 0.2)",
            }}
          >
            {/* Konum Dropdown */}
            <div className="relative flex w-full items-center gap-3 border-b border-gray-100 px-4 pb-3 md:w-1/4 md:border-r md:border-b-0 md:pb-0">
              <button
                className="flex w-full items-center gap-3"
                onClick={() => setOpenDropdown(openDropdown === "konum" ? null : "konum")}
              >
                <IconLocation className="h-8 w-8 shrink-0" style={{ color: "var(--brand)" }} />
                <div className="flex flex-1 flex-col text-left">
                  <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Konum</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {selectedKonum || "Nereye?"}
                  </span>
                </div>
                <IconChevronDown
                  className="h-4 w-4 shrink-0 text-gray-400 cursor-pointer transition-transform duration-200"
                  style={{ transform: openDropdown === "konum" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openDropdown === "konum" && (
                <div className="absolute top-full left-0 z-50 mt-2 w-60 rounded-xl border bg-white py-1 shadow-lg" style={{ borderColor: "rgba(200, 168, 78, 0.15)" }}>
                  <p className="px-4 pt-3 pb-2 text-[11px] font-bold tracking-widest text-gray-400 uppercase">Tur Kategorileri</p>
                  {["K\u00FClt\u00FCr Turlar\u0131", "Umre Turlar\u0131"].map((item) => (
                    <button
                      key={item}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                      style={selectedKonum === item ? { color: "var(--brand)", fontWeight: 600 } : undefined}
                      onClick={() => { setSelectedKonum(item); setOpenDropdown(null); }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: selectedKonum === item ? "var(--brand)" : "transparent" }} />
                      {item}
                    </button>
                  ))}
                  <div className="mx-3 my-1 border-t border-gray-100" />
                </div>
              )}
            </div>

            {/* Turlar Dropdown */}
            <div className="relative flex w-full items-center gap-3 border-b border-gray-100 px-4 pb-3 md:w-1/4 md:border-r md:border-b-0 md:pb-0">
              <button
                className="flex w-full items-center gap-3"
                onClick={() => setOpenDropdown(openDropdown === "turlar" ? null : "turlar")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="h-8 w-8 shrink-0" style={{ color: "var(--brand)" }}>
                  <path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z" />
                </svg>
                <div className="flex flex-1 flex-col text-left">
                  <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Turlar</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {selectedTur || "Tur Se\u00E7in"}
                  </span>
                </div>
                <IconChevronDown
                  className="h-4 w-4 shrink-0 cursor-pointer text-gray-400 transition-transform duration-200"
                  style={{ transform: openDropdown === "turlar" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openDropdown === "turlar" && (
                <div className="absolute top-full left-0 z-50 mt-2 w-60 rounded-xl border bg-white py-1 shadow-lg" style={{ borderColor: "rgba(200, 168, 78, 0.15)" }}>
                  <p className="px-4 pt-3 pb-2 text-[11px] font-bold tracking-widest text-gray-400 uppercase">Tur Se{"\u00E7"}imi</p>
                  {["Hac", "Umre"].map((item) => (
                    <button
                      key={item}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                      style={selectedTur === item ? { color: "var(--brand)", fontWeight: 600 } : undefined}
                      onClick={() => { setSelectedTur(item); setOpenDropdown(null); }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: selectedTur === item ? "var(--brand)" : "transparent" }} />
                      {item}
                    </button>
                  ))}
                  <div className="mx-3 my-1 border-t border-gray-100" />
                </div>
              )}
            </div>

            {/* Gidiş Tarihi - Calendar */}
            <div className="relative flex w-full items-center gap-3 border-b border-gray-100 px-4 pb-3 md:w-1/4 md:border-r md:border-b-0 md:pb-0">
              <button
                className="flex w-full items-center gap-3"
                onClick={() => setOpenDropdown(openDropdown === "tarih" ? null : "tarih")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="h-8 w-8 shrink-0" style={{ color: "var(--brand)" }}>
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z" />
                </svg>
                <div className="flex flex-1 flex-col text-left">
                  <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Gidi{"\u015F"} Tarihi</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {selectedDate ? selectedDate.toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" }) : "Tarih Se\u00E7in"}
                  </span>
                </div>
                <IconChevronDown
                  className="h-4 w-4 shrink-0 text-gray-400 cursor-pointer transition-transform duration-200"
                  style={{ transform: openDropdown === "tarih" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openDropdown === "tarih" && (
                <div className="absolute top-full left-0 z-50 mt-2">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => { setSelectedDate(date); setOpenDropdown(null); }}
                    inline
                    minDate={new Date()}
                    locale="tr"
                    calendarClassName="search-calendar"
                  />
                </div>
              )}
            </div>

            {/* Kişi Sayısı - Passenger Counter */}
            <div className="relative flex w-full items-center gap-3 px-4 md:w-1/4">
              <button
                className="flex w-full items-center gap-3"
                onClick={() => setOpenDropdown(openDropdown === "yolcu" ? null : "yolcu")}
              >
                <IconUser className="h-8 w-8 shrink-0" style={{ color: "var(--brand)" }} />
                <div className="flex flex-1 flex-col text-left">
                  <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Ki{"\u015Fi"} Say{"\u0131"}s{"\u0131"}</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {totalPassengers > 0 ? `${totalPassengers} Yolcu` : "Yolcu Ekle"}
                  </span>
                </div>
                <IconChevronDown
                  className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200"
                  style={{ transform: openDropdown === "yolcu" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openDropdown === "yolcu" && (
                <div className="absolute top-full right-0 z-50 mt-2 w-72 rounded-xl border bg-white p-5 shadow-lg" style={{ borderColor: "rgba(200, 168, 78, 0.15)" }}>
                  <p className="mb-3 text-[11px] font-bold tracking-widest text-gray-400 uppercase">Yolcu Se{"\u00E7"}imi</p>
                  {[
                    { key: "cocuk" as const, label: "\u00C7ocuk", sub: "0-12 ya\u015F" },
                    { key: "yasli" as const, label: "Ya\u015Fl\u0131", sub: "65+ ya\u015F" },
                    { key: "genc" as const, label: "Yeti\u015Fkin", sub: "18+ ya\u015F" },
                  ].map(({ key, label, sub }) => (
                    <div key={key} className="flex items-center justify-between border-b border-gray-50 py-3 last:border-b-0">
                      <div>
                        <span className="text-sm font-semibold text-gray-800">{label}</span>
                        <span className="ml-1.5 text-xs text-gray-400">{sub}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-sm font-bold transition-all hover:opacity-80"
                          style={{ borderColor: "var(--brand)", color: "var(--brand)" }}
                          onClick={() => setPassengers((p) => ({ ...p, [key]: Math.max(0, p[key] - 1) }))}
                        >
                          &minus;
                        </button>
                        <span className="w-5 text-center text-sm font-bold" style={{ color: "var(--emerald)" }}>{passengers[key]}</span>
                        <button
                          className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white transition-all hover:opacity-80"
                          style={{ backgroundColor: "var(--brand)" }}
                          onClick={() => setPassengers((p) => ({ ...p, [key]: p[key] + 1 }))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    className="mt-4 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "var(--brand)" }}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Uygula
                  </button>
                </div>
              )}
            </div>
            <div className="w-full pl-4 md:w-auto">
              <button
                className="flex w-full justify-center rounded-2xl p-4 text-white transition-all hover:shadow-lg md:w-auto"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <IconSearch className="h-6 w-6" />
                <span className="ml-2 md:hidden">Ara</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="mx-auto max-w-7xl px-4 pt-72 pb-20 sm:pt-52 md:pt-32">
        <div className="mb-12 text-center">
          <p
            className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Ke{"\u015F"}fedin
          </p>
          <h2
            className="font-display text-4xl font-bold md:text-5xl"
            style={{ color: "var(--emerald)" }}
          >
            {"\u00D6"}ne {"\u00C7\u0131"}kan Turlar
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollSlider("left")}
            className="absolute -left-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white shadow-md transition-all hover:bg-gray-50 lg:flex"
            style={{ borderColor: "var(--emerald)", color: "var(--emerald)" }}
          >
            <IconArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="absolute -right-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-md transition-all hover:opacity-90 lg:flex"
            style={{ backgroundColor: "var(--emerald)" }}
          >
            <IconArrowRight className="h-5 w-5" />
          </button>

          <div
            ref={sliderRef}
            className="hide-scrollbar flex gap-5 overflow-x-auto pb-4 sm:gap-6"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="group relative flex w-[280px] shrink-0 flex-col overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-300 hover:shadow-xl sm:w-[320px] md:w-[350px]"
                style={{ borderColor: "rgba(200, 168, 78, 0.13)", scrollSnapAlign: "start" }}
              >
                <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="no-radius object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,61,46,0.85), rgba(10,61,46,0.3) 60%, transparent)",
                    }}
                  >
                    <p className="text-sm leading-relaxed text-white/90">
                      {tour.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-grow flex-col p-5 sm:p-6">
                  <h3
                    className="mb-4 text-base leading-tight font-semibold sm:mb-6 sm:text-lg"
                    style={{ color: "var(--emerald)" }}
                  >
                    {tour.title}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500">{tour.subtitle}</p>
                    <div className="mt-1 flex items-end justify-between">
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-xl font-bold sm:text-2xl"
                          style={{ color: "var(--emerald)" }}
                        >
                          {tour.currency}
                          {tour.price}
                        </span>
                        <span className="text-sm text-gray-500">&apos;dan</span>
                      </div>
                      <button
                        className="rounded-full p-2 text-white transition-all hover:shadow-lg"
                        style={{ backgroundColor: "var(--brand)" }}
                      >
                        <IconArrowUpRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider mx-auto max-w-xs" />

      {/* Search Form Section */}
      <section
        className="islamic-pattern relative overflow-hidden py-20"
        style={{ backgroundColor: "var(--sand)" }}
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <p
            className="mb-2 text-center text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Formu Doldurun
          </p>
          <h2
            className="font-display mb-12 text-center text-4xl font-bold"
            style={{ color: "var(--emerald)" }}
          >
            Size Uygun Umre Turunu Beraber Bulal{"\u0131"}m
          </h2>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                className="ml-1 text-base font-semibold"
                style={{ color: "var(--emerald)" }}
              >
                Ad Soyad
              </label>
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full rounded-2xl border bg-white px-5 py-4 text-base transition-all outline-none focus:ring-2"
                style={{ borderColor: "rgba(200, 168, 78, 0.2)" }}
              />
            </div>
            <div className="space-y-2">
              <label
                className="ml-1 text-base font-semibold"
                style={{ color: "var(--emerald)" }}
              >
                Telefon
              </label>
              <input
                type="text"
                placeholder="0501 000 00 00"
                className="w-full rounded-2xl border bg-white px-5 py-4 text-base transition-all outline-none focus:ring-2"
                style={{ borderColor: "rgba(200, 168, 78, 0.2)" }}
              />
            </div>
            <div className="space-y-2">
              <label
                className="ml-1 text-base font-semibold"
                style={{ color: "var(--emerald)" }}
              >
                Planlad{"\u0131\u011F\u0131"}n{"\u0131"}z Zaman
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none rounded-2xl border bg-white px-5 py-4 text-base text-gray-500 transition-all outline-none focus:ring-2"
                  style={{ borderColor: "rgba(200, 168, 78, 0.2)" }}
                >
                  <option>Planlanan Ay</option>
                  <option>Ocak</option>
                  <option>{"\u015E"}ubat</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <input
                type="checkbox"
                id="kvkk"
                className="mt-1 h-4 w-4 rounded border-gray-300"
                style={{ accentColor: "#02CAAD" }}
              />
              <label htmlFor="kvkk" className="text-base text-gray-500">
                Şükür Turizm KVKK Politikas{"\u0131"}&apos;n{"\u0131"} okudum
                ve kabul ediyorum.
              </label>
            </div>

            <button
              className="w-full rounded-2xl px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "var(--brand)" }}
              type="submit"
            >
              G{"\u00F6"}nder
            </button>
          </form>

          {/* Sticky WhatsApp button */}
          <a
            href="https://wa.me/905541134002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile ileti\u015Fime ge\u00E7"
            className="fixed right-4 bottom-10 z-50 rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p
            className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Fark{"\u0131"}m{"\u0131"}z
          </p>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: "var(--emerald)" }}
          >
            Neden Biz?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex cursor-default flex-row items-center gap-4 rounded-3xl p-6 text-white transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              style={{ backgroundColor: "var(--emerald)" }}
            >
              <div
                className="rounded-2xl p-3"
                style={{ backgroundColor: "" }}
              >
                <reason.icon className="h-10 w-10 text-white md:h-12 md:w-12" />
              </div>
              <p className="text-base leading-snug font-semibold md:text-lg">
                {reason.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider mx-auto max-w-xs" />

      {/* Info Tabs Section */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <div className="mb-12 text-center">
          <p
            className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Hizmetlerimiz
          </p>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: "var(--emerald)" }}
          >
            Hac & Umre Rehberiniz
          </h2>
        </div>

        <div
          className="mb-10 flex justify-center gap-2 border-b"
          style={{ borderColor: "rgba(200, 168, 78, 0.2)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-10 py-4 text-xl font-bold tracking-wider transition-all ${
                activeTab === tab.id ? "" : "text-gray-400 hover:text-gray-600"
              }`}
              style={
                activeTab === tab.id ? { color: "var(--emerald)" } : undefined
              }
            >
              {tab.label}
              {activeTab === tab.id && (
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-full rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-6 text-center text-lg leading-relaxed text-gray-600 md:text-xl md:leading-9">
          {activeTab === "HAC" && (
            <div className="animate-fade-in space-y-6">
              <p>
                Hac programımız ile farzların, vaciplerin, sünnetlerin, hatta müstehapların bile
                yerine getirilmesi için ehil ve tecrübeli hocalarımızın rehberliğinde
                hac ve umre için lütfen{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  0312 309 00 26
                </strong>{" "}
                nolu telefondan bizi arayınız.
              </p>
              <p>
                <strong className="font-bold" style={{ color: "var(--emerald)" }}>Şükür Turizm</strong> web sitemizde{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  umre turları
                </strong>{" "}
                ve{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  2025 yılı umre fiyatları ve hac fiyatları
                </strong>{" "}
                hakkında detaylı bilgiye sahip olabilirsiniz.
              </p>
              <p>
                Hac ve umre nedir, nasıl yapılır, tavaf, say gibi merak ettiğiniz tüm sorulara
                web sitemizde cevap bulabilirsiniz. Gerek öncesinde,
                gerekse bizzat{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  hac ve umre esnasında
                </strong>{" "}
                bilginize bilgi katacağınızdan emin olabilirsiniz.
              </p>
              <p>
                Hac oda tercihli konaklama ve hac otel tercihli konaklama turları ile bütçenize en uygun hac ve{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  2025 yılı umre turu
                </strong>{" "}
                seçeneği tercih ederek, Hazreti Allah&apos;ın (Celle Celâlühü), Sevgili
                Resullah Efendimiz&apos;in (Sallallahu Aleyhi Vesellem)
                misafirleri olarak tam anlamıyla hac yapmanız
                için düşündüğünüzün de ötesinde muazzam bir hizmet sizleri bekliyor.
              </p>
            </div>
          )}
          {activeTab === "UMRE" && (
            <div className="animate-fade-in space-y-6">
              <p>
                Umre ibadeti, Müslümanların Kabe-i Muazzama&apos;yı ziyaret ederek manevi duygularını
                pekiştirdiği özel bir yolculuktur.{" "}
                <strong className="font-bold" style={{ color: "var(--emerald)" }}>Şükür Turizm</strong> olarak bu kutsal yolculukta
                sizlere en iyi hizmeti sunmak için buradayız.
              </p>
              <p>
                Farklı konaklama seçenekleri ve tecrübeli rehberlerimiz eşliğinde, gönül rahatlığıyla
                ibadetinizi yerine getirebilirsiniz. Detaylı bilgi için bizimle iletişime geçin.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: "var(--sand)" }}
      >
        <div className="mx-auto max-w-5xl px-4">
          <p
            className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Referanslar
          </p>
          <h2
            className="font-display mb-4 text-4xl font-bold"
            style={{ color: "var(--emerald)" }}
          >
            Misafirlerimiz Ne Diyor?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-base text-gray-400">
            Tüm yorumlar Google&apos;dan alınmıştır. Diğer yorumları görmek için Google profilimizi ziyaret edebilirsiniz.
          </p>

          <div
            className="mx-auto mb-4 flex min-h-[140px] max-w-3xl items-center justify-center px-4 text-2xl leading-relaxed font-light italic transition-all duration-500 ease-in-out md:text-3xl md:leading-snug"
            style={{ color: "var(--emerald-light)" }}
          >
            &ldquo;{testimonials[currentTestimonial]?.text}&rdquo;
          </div>

          <div className="mt-10 flex flex-col items-center">
            <h4
              className="mb-2 text-lg font-bold"
              style={{ color: "var(--emerald)" }}
            >
              {testimonials[currentTestimonial]?.author}
            </h4>
            <div className="flex gap-1" style={{ color: "var(--gold)" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">
                  {"\u2605"}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className="h-2.5 w-2.5 rounded-full transition-all"
                  style={{
                    backgroundColor:
                      currentTestimonial === idx
                        ? "var(--emerald)"
                        : "rgba(200, 168, 78, 0.27)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-4 py-16 text-sm"
        style={{
          backgroundColor: "var(--emerald)",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="mb-4 flex items-center gap-3">
              
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                Şükür
                <span
                  className="-mt-1 block font-sans text-xs font-normal tracking-normal"
                  style={{ color: "var(--gold-light)" }}
                >
                  Turizm
                </span>
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                style={{ backgroundColor: "var(--emerald-light)" }}
              >
                <IconFacebook className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                style={{ backgroundColor: "var(--emerald-light)" }}
              >
                <IconInstagram className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold text-white">
              {"\u00D6"}ne {"\u00C7\u0131"}kan Turlar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Umre Turlar{"\u0131"}
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  K{"\u00FC"}lt{"\u00FC"}r Turlar{"\u0131"}
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Yurtd{"\u0131\u015F\u0131"} Turlar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold text-white">Sayfalar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Hakk{"\u0131"}m{"\u0131"}zda
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  S{"\u0131"}k{"\u00E7"}a Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  KVKK Politikam{"\u0131"}z
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold text-white">
              {"\u0130"}leti{"\u015F"}im
            </h3>
            <ul className="space-y-3">
              <li>Adliye sk. No:3 ULUS-ALTINDA{"\u011E"}/ANKARA</li>
              <li>0312 309 00 26</li>
              <li>0554 113 40 02</li>
            </ul>
          </div>
        </div>

        <div
          className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row"
          style={{ borderColor: "var(--emerald-light)" }}
        >
          <p>
            &copy; 2025 T{"\u00FC"}m Haklar{"\u0131"} Sakl{"\u0131"}d{"\u0131"}
            r. - www.sukurturizm.com
          </p>
        </div>
      </footer>
    </div>
  );
}
