"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  IconArrowUpRight,
  IconMenu,
} from "~/app/_components/icons";

// Data
const featuredTours = [
  {
    id: 1,
    title: "20 G\u00FCnl\u00FCk Umre Turlar\u0131",
    price: "1.450",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
  },
  {
    id: 2,
    title: "Muhafazakar Yurti\u00E7i Turlar\u0131",
    price: "1.200",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    currency: "\u20BA",
    subtitle: "Ba\u015Flayan Fiyatlar",
  },
  {
    id: 3,
    title: "10 G\u00FCnl\u00FCk Umre Turlar\u0131",
    price: "1.250",
    image:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
  },
  {
    id: 4,
    title: "15 G\u00FCnl\u00FCk Umre Turlar\u0131",
    price: "1.350",
    image:
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "Ba\u015Flayan Fiyatlar",
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
    text: "Manevi atmosferi hissetmemize vesile olan Vuslat Turizm\u2019e te\u015Fekk\u00FCrler.",
    author: "Ay\u015Fe Kaya",
    rating: 5,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("HAC");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
        className="striped-bar relative z-50 flex items-center justify-between border-b border-white/10 px-6 py-3 text-white sm:px-8"
        style={{ backgroundColor: "var(--brand)" }}
      >
        <div className="flex items-center space-x-6 pl-12">
          <span className="flex cursor-pointer items-center gap-2 text-base font-medium transition-colors hover:text-white/80">
            <IconPhoneAlt className="h-4 w-4" /> 0554 113 40 02
          </span>
          <span className="hidden cursor-pointer items-center gap-2 text-base font-medium transition-colors hover:text-white/80 sm:flex">
            <IconMailAlt className="h-4 w-4" /> info@vuslatturizm.com
          </span>
        </div>
        <div className="flex items-center space-x-3 px-12">
          <Link
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white/25"
          >
            <IconFacebookAlt className="h-4 w-4 text-white" />
          </Link>
          <Link
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white/25"
          >
            <IconInstagramAlt className="h-4 w-4 text-white" />
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
              alt="Vuslat Turizm"
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
      <section className="relative h-[600px] w-full md:h-[700px]">
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
        <div className="absolute bottom-0 left-1/2 z-30 w-full max-w-5xl -translate-x-1/2 translate-y-1/2 transform px-4">
          <div
            className="flex flex-col items-center justify-between gap-4 rounded-3xl border px-8 py-6 shadow-xl backdrop-blur-sm md:flex-row md:gap-0"
            style={{
              backgroundColor: "white",
              borderColor: "rgba(200, 168, 78, 0.2)",
            }}
          >
            <div className="flex w-full flex-col gap-1 border-b border-gray-100 px-4 pb-3 md:w-1/4 md:border-r md:border-b-0 md:pb-0">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconLocation
                  className="h-5 w-5"
                  style={{ color: "var(--brand)" }}
                />
                <span>Konum</span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-b border-gray-100 px-4 pb-3 md:w-1/4 md:border-r md:border-b-0 md:pb-0">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconPlane
                  className="h-5 w-5"
                  style={{ color: "var(--brand)" }}
                />
                <span>Turlar</span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-b border-gray-100 px-4 pb-3 md:w-1/4 md:border-r md:border-b-0 md:pb-0">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconCalendar
                  className="h-5 w-5"
                  style={{ color: "var(--brand)" }}
                />
                <span>Gidi{"\u015F"} Tarihi</span>
              </div>
              <span className="pl-7 font-semibold text-gray-900">
                Gidi{"\u015F"} Yeri
              </span>
            </div>
            <div className="flex w-full flex-col gap-1 px-4 md:w-1/4">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconUser
                  className="h-5 w-5"
                  style={{ color: "var(--brand)" }}
                />
                <span>
                  Ki{"\u015Fi"} Say{"\u0131"}s{"\u0131"}
                </span>
              </div>
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
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-20">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: "rgba(200, 168, 78, 0.13)" }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,61,46,0.4), transparent)",
                  }}
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3
                  className="mb-8 min-h-[3rem] text-xl leading-tight font-semibold"
                  style={{ color: "var(--emerald)" }}
                >
                  {tour.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-base text-gray-500">{tour.subtitle}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: "var(--emerald)" }}
                      >
                        {tour.currency}
                        {tour.price}
                      </span>
                      <span className="text-base text-gray-500">&apos;dan</span>
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
                Vuslat Turizm KVKK Politikas{"\u0131"}&apos;n{"\u0131"} okudum
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

          {/* Floating CTA buttons */}
          <div className="fixed right-4 bottom-10 z-50 flex flex-col gap-2">
            <button
              className="flex h-[100px] w-10 flex-col items-center justify-center gap-8 rounded-2xl p-3 text-white shadow-lg"
              style={{ backgroundColor: "var(--emerald)" }}
            >
              <span className="mt-4 rotate-[-90deg] text-sm font-bold tracking-widest whitespace-nowrap">
                {"\u0130"}leti{"\u015F"}im
              </span>
            </button>
            <button className="rounded-full bg-[#25D366] p-3 text-white shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
          </div>
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
              className="flex cursor-default flex-row items-center gap-4 rounded-3xl p-6 text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "var(--emerald)" }}
            >
              <div
                className="rounded-2xl p-3"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <reason.icon className="h-8 w-8 text-white md:h-10 md:w-10" />
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
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div
          className="mb-8 flex justify-center border-b"
          style={{ borderColor: "rgba(200, 168, 78, 0.2)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-3 text-lg font-semibold tracking-wider transition-all ${
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

        <div className="space-y-4 text-center text-base leading-relaxed text-gray-600">
          {activeTab === "HAC" && (
            <div className="animate-fade-in">
              <p>
                Hac program{"\u0131"} ile farzlar{"\u0131"}n, vaciplerin, s
                {"\u00FC"}nnetlerin, hatta m{"\u00FC"}stehaplar{"\u0131"}n bile
                yerine getirilmesi i{"\u00E7"}in ehil ve tecr{"\u00FC"}beli
                hocalar{"\u0131"}m{"\u0131"}z{"\u0131"}n rehberli{"\u011F"}inde
                hac ve umre i{"\u00E7"}in l{"\u00FC"}tfen{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  0312 309 00 26
                </strong>{" "}
                nolu telefondan bizi aray{"\u0131"}n{"\u0131"}z
              </p>
              <p>
                Vuslat Turizm web sitemizde{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  umre turlar{"\u0131"}
                </strong>{" "}
                ve{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  2025 y{"\u0131"}l{"\u0131"} umre fiyatlar{"\u0131"} ve hac
                  fiyatlar{"\u0131"}
                </strong>{" "}
                hakk{"\u0131"}nda detayl{"\u0131"} bilgiye sahip olabilirsiniz.
              </p>
              <p>
                Hac ve umre nedir, nas{"\u0131"}l yap{"\u0131"}l{"\u0131"}r,
                tavaf, say gibi merak etti{"\u011F"}iniz t{"\u00FC"}m sorulara
                web sitemizde cevap bulabilirsiniz. Gerek {"\u00F6"}ncesinde,
                gerekse bizzat{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  hac ve umre esnas{"\u0131"}nda
                </strong>{" "}
                bilginize bilgi kataca{"\u011F\u0131"}n{"\u0131"}zdan emin
                olabilirsiniz.
              </p>
              <p>
                Hac oda tercihli konaklama ve hac otel tercihli konaklama turlar
                {"\u0131"} ile b{"\u00FC"}t{"\u00E7"}enize en uygun hac ve{" "}
                <strong style={{ color: "var(--emerald)" }}>
                  2025 y{"\u0131"}l{"\u0131"} umre turu
                </strong>{" "}
                se{"\u00E7"}ene{"\u011F"}i tercih ederek, Hazreti Allah&apos;
                {"\u0131"}n (Celle Cel{"\u00E2"}l{"\u00FC"}h{"\u00FC"}), Sevgili
                Resullah Efendimiz&apos;in (Sallallahu Aleyhi Vesellem)
                misafirleri olarak tam anlam{"\u0131"}yla hac yapman{"\u0131"}z
                i{"\u00E7"}in d{"\u00FC\u015F\u00FC"}nd{"\u00FC\u011F\u00FC"}n
                {"\u00FC"}z{"\u00FC"}n de {"\u00F6"}tesinde muazzam bir hizmet
                sizleri bekliyor.
              </p>
            </div>
          )}
          {activeTab === "UMRE" && (
            <div className="animate-fade-in">
              <p>
                Umre ibadeti, M{"\u00FC"}sl{"\u00FC"}manlar{"\u0131"}n Kabe-i
                Muazzama&apos;y{"\u0131"} ziyaret ederek manevi duygular
                {"\u0131"}n{"\u0131"} peki{"\u015F"}tirdi{"\u011F"}i {"\u00F6"}
                zel bir yolculuktur. Vuslat Turizm olarak bu kutsal yolculukta
                sizlere en iyi hizmeti sunmak i{"\u00E7"}in burada{"\u0131"}z.
              </p>
              <p>
                Farkl{"\u0131"} konaklama se{"\u00E7"}enekleri ve tecr{"\u00FC"}
                beli rehberlerimiz e{"\u015F"}li{"\u011F"}inde, g{"\u00F6"}n
                {"\u00FC"}l rahatl{"\u0131\u011F\u0131"}yla ibadetinizi yerine
                getirebilirsiniz. Detayl{"\u0131"} bilgi i{"\u00E7"}in bizimle
                ileti{"\u015F"}ime ge{"\u00E7"}in.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "var(--sand)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <p
            className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Referanslar
          </p>
          <h2
            className="mb-12 text-3xl font-bold"
            style={{ color: "var(--emerald)" }}
          >
            Misafirlerimiz Ne Diyor?
          </h2>
          <p className="mb-8 text-sm text-gray-400">
            T{"\u00FC"}m yorumlar Google&apos;dan al{"\u0131"}nm{"\u0131\u015F"}
            t{"\u0131"}r. Di{"\u011F"}er yorumlar{"\u0131"} g{"\u00F6"}rmek i
            {"\u00E7"}in Google profilimizi ziyaret edebilirsiniz.
          </p>

          <div
            className="mx-auto flex h-32 max-w-2xl items-center justify-center text-xl leading-relaxed font-light italic transition-all duration-500 ease-in-out md:text-2xl"
            style={{ color: "var(--emerald-light)" }}
          >
            &ldquo;{testimonials[currentTestimonial]?.text}&rdquo;
          </div>

          <div className="mt-8 flex flex-col items-center">
            <h4
              className="mb-2 text-base font-bold"
              style={{ color: "var(--emerald)" }}
            >
              {testimonials[currentTestimonial]?.author}
            </h4>
            <div className="flex gap-0.5" style={{ color: "var(--gold)" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">
                  {"\u2605"}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className="h-2 w-2 rounded-full transition-all"
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
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                Vuslat
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
            r. - www.vuslatturizm.com
          </p>
        </div>
      </footer>
    </div>
  );
}
