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
    title: "20 GÃ¼nlÃ¼k Umre TurlarÄ±",
    price: "1.450",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "BaÅŸlayan Fiyatlar"
  },
  {
    id: 2,
    title: "Muhafazakar YurtiÃ§i TurlarÄ±",
    price: "1.200",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    currency: "â‚º",
    subtitle: "BaÅŸlayan Fiyatlar"
  },
  {
    id: 3,
    title: "10 GÃ¼nlÃ¼k Umre TurlarÄ±",
    price: "1.250",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "BaÅŸlayan Fiyatlar"
  },
  {
    id: 4,
    title: "15 GÃ¼nlÃ¼k Umre TurlarÄ±",
    price: "1.350",
    image: "https://images.unsplash.com/photo-1565552629477-cdcb16e2329b?q=80&w=1600&auto=format&fit=crop",
    currency: "$",
    subtitle: "BaÅŸlayan Fiyatlar"
  }
];

const reasons = [
  {
    icon: IconTrophy,
    title: "1996 YÄ±lÄ±ndan Beri TecrÃ¼beli Acente",
  },
  {
    icon: IconPlane,
    title: "Direkt Ankara UÃ§uÅŸ",
  },
  {
    icon: IconGroup,
    title: "Her 45 KiÅŸiye TecrÃ¼beli Ehil Rehber",
  },
  {
    icon: IconScale,
    title: "Manevi Yolculukta Manevi Hizmet",
  },
  {
    icon: IconShield,
    title: "KapsamlÄ± Ã¶zel seyahat saÄŸlÄ±k sigortasÄ±",
  },
  {
    icon: IconCutlery,
    title: "Evinizde Hissettirecek TÃ¼rk MutfaÄŸÄ± Ekibimiz",
  }
];

const tabs = [
  { id: "HAC", label: "HAC" },
  { id: "UMRE", label: "UMRE" }
];

const testimonials = [
  {
    text: "Her ÅŸey gerÃ§ekten gÃ¼zeldi ilgi alaka her ÅŸey vardÄ± baÅŸta ÅŸirketinin sahiblerinden bizlerle Ã§ok ilgilenen dost olduÄŸumuz HakkÄ± bey'e ve bizlerle ilgilenen Salih hocamÄ±za Ã§ok teÅŸekkÃ¼r ederim. BaÅŸka bir Vuslatta yine vuslat turizmle gÃ¶rÃ¼ÅŸmek Ã¼zere inÅŸallah",
    author: "Yasin AltunbaÅŸ",
    rating: 5
  },
  {
    text: "Allah razÄ± olsun, Ã§ok memnun kaldÄ±k. Ã–zellikle rehberlerimizin ilgisi ÅŸahaneydi.",
    author: "Mehmet YÄ±lmaz",
    rating: 5
  },
  {
    text: "Manevi atmosferi hissetmemize vesile olan Vuslat Turizm'e teÅŸekkÃ¼rler.",
    author: "AyÅŸe Kaya",
    rating: 5
  }
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
    <div className="min-h-screen bg-white font-sans text-[#1f2937]">
      {/* Top Bar */}
      <div className="striped-bar text-md relative z-50 flex items-center justify-between border-b border-white/10 bg-[#00c4b4] py-2.5 text-white sm:px-8">
        <div className="flex items-center space-x-6 pl-18">
          <span className="flex cursor-pointer items-center gap-2 transition-colors hover:text-white/80">
            <IconPhoneAlt className="h-[15px] w-[15px]" /> 0554 113 40 02
          </span>
          <span className="hidden cursor-pointer items-center gap-2 transition-colors hover:text-white/80 sm:flex">
            <IconMailAlt className="h-[15px] w-[15px]" /> info@vuslatturizm.com
          </span>
        </div>
        <div className="flex items-center space-x-3 px-15">
          <Link
            href="#"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-all hover:bg-white/30"
          >
            <IconFacebookAlt className="h-4 w-4 text-[#00c4b4]" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center rounded-full transition-all"
          >
            <IconInstagramAlt className="h-6 w-6 text-white hover:text-white/50" />
          </Link>
        </div>
      </div>

      {/* Header & Navigation */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-8 py-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </Link>

          <nav className="hidden items-center space-x-8 text-base font-semibold text-gray-700 md:flex">
            <Link href="#" className="transition-colors hover:text-[#00c4b4]">
              Hac
            </Link>
            <Link href="#" className="transition-colors hover:text-[#00c4b4]">
              Umre
            </Link>
            <Link href="#" className="transition-colors hover:text-[#00c4b4]">
              KÃ¼ltÃ¼r TurlarÄ±
            </Link>
            <Link href="#" className="transition-colors hover:text-[#00c4b4]">
              Ã–deme
            </Link>
            <Link href="#" className="transition-colors hover:text-[#00c4b4]">
              Ä°letiÅŸim
            </Link>
          </nav>
          {/* Mobile Menu Icon */}
          <button className="text-gray-700 md:hidden">
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] w-full md:h-[700px]">
        <div className="absolute inset-0 z-10 bg-black/30"></div>
        <Image
          src="/hero_image.jpg"
          alt="Hero background"
          fill
          className="no-radius object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <h1 className="font-display mb-8 text-6xl font-bold tracking-tight text-white drop-shadow-lg md:text-8xl">
            Şükür Turism
          </h1>
        </div>

        {/* Search Bar Floating */}
        <div className="absolute bottom-0 left-1/2 z-30 w-full max-w-5xl -translate-x-1/2 translate-y-1/2 transform px-4">
          <div className="flex flex-col items-center justify-between gap-4 divide-y divide-gray-100 rounded-3xl bg-white px-8 py-6 shadow-xl md:flex-row md:gap-0 md:divide-x md:divide-y-0">
            <div className="flex w-full flex-col gap-1 px-4 md:w-1/4">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconLocation className="h-5 w-5 text-[#00c4b4]" />
                <span>Konum</span>
                {/* <span className="ml-auto">â–¼</span> */}
              </div>
            </div>
            <div className="flex w-full flex-col gap-1 px-4 md:w-1/4">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <svg
                  className="h-5 w-5 text-[#00c4b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
                <span>Turlar</span>
                {/* <span className="ml-auto">â–¼</span> */}
              </div>
            </div>
            <div className="flex w-full flex-col gap-1 px-4 md:w-1/4">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconCalendar className="h-5 w-5 text-[#00c4b4]" />
                <span>GidiÅŸ Tarihi</span>
              </div>
              <span className="pl-7 font-semibold text-gray-900">
                GidiÅŸ Yeri
              </span>
            </div>
            <div className="flex w-full flex-col gap-1 px-4 md:w-1/4">
              <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                <IconUser className="h-5 w-5 text-[#00c4b4]" />
                <span>KiÅŸi SayÄ±sÄ±</span>
                <svg
                  className="ml-auto h-5 w-5 rotate-90 text-[#00c4b4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full pl-4 md:w-auto">
              <button className="flex w-full justify-center rounded-2xl bg-[#00c4b4] p-4 text-white transition-colors hover:bg-[#00a89a] md:w-auto">
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
          <h2 className="font-display text-4xl font-bold text-[#1f2937] md:text-5xl">
            Ã–ne Ã‡Ä±kan Turlar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-8 min-h-[3rem] text-2xl leading-tight font-semibold text-[#1f2937]">
                  {tour.title}
                </h3>

                <div className="mt-auto">
                  <p className="text-base text-gray-500">{tour.subtitle}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#1f2937]">
                        {tour.currency}
                        {tour.price}
                      </span>
                      <span className="text-base text-gray-500">'dan</span>
                    </div>
                    <button className="rounded-full bg-[#00c4b4] p-2 text-white transition-colors hover:bg-[#00a89a]">
                      <IconArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search Form Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
        {/* Background Pattern dots */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#00C4B4 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="font-display mb-12 text-center text-4xl font-bold text-[#00c4b4]">
            Size uygun Umre Turunu Beraber BulalÄ±m
          </h2>

          <form className="space-y-6 bg-transparent">
            <div className="space-y-2">
              <label className="ml-1 text-base font-semibold text-gray-800">
                Ad Soyad
              </label>
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full rounded-2xl border-none bg-gray-100/50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-2 focus:ring-[#00c4b4]"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 text-base font-semibold text-gray-800">
                Telefon
              </label>
              <input
                type="text"
                placeholder="0501 000 00 00"
                className="w-full rounded-2xl border-none bg-gray-100/50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-2 focus:ring-[#00c4b4]"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 text-base font-semibold text-gray-800">
                PlanladÄ±ÄŸÄ±nÄ±z Zaman
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-2xl border-none bg-gray-100/50 px-4 py-3 text-gray-500 transition-all outline-none focus:bg-white focus:ring-2 focus:ring-[#00c4b4]">
                  <option>Planlanan Ay</option>
                  <option>Ocak</option>
                  <option>Åžubat</option>
                </select>
                {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><span className="text-gray-400">â–¼</span></div> */}
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <input
                type="checkbox"
                id="kvkk"
                className="mt-1 h-4 w-4 rounded-2xl border-gray-300 text-[#00c4b4] focus:ring-[#00c4b4]"
              />
              <label htmlFor="kvkk" className="text-base text-gray-500">
                Hisar Turizm KVKK PolitikasÄ±'nÄ± okudum ve kabul ediyorum.
              </label>
            </div>
          </form>
          <div className="fixed right-4 bottom-10 z-50 flex flex-col gap-2">
            <button className="flex h-[100px] w-10 flex-col items-center justify-center gap-8 rounded-2xl bg-[#60359E] p-3 text-white shadow-lg">
              <span className="mt-4 rotate-[-90deg] text-sm font-bold tracking-widest whitespace-nowrap">
                Ä°letiÅŸim
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
        <h2 className="font-display mb-12 text-center text-4xl font-bold text-[#1f2937]">
          Neden Biz ?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex cursor-default flex-row items-center gap-4 rounded-3xl bg-[#00c4b4] p-6 text-white transition-colors hover:bg-[#00a89a]"
            >
              <div className="rounded-3xl bg-white/20 p-3 backdrop-blur-sm">
                <reason.icon className="h-8 w-8 text-white md:h-10 md:w-10" />
              </div>
              <p className="text-base leading-snug font-semibold md:text-lg">
                {reason.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Info Tabs Section */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="mb-8 flex justify-center border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-3 text-base font-semibold tracking-wider transition-all ${activeTab === tab.id ? "text-[#00c4b4]" : "text-gray-400 hover:text-gray-600"}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00c4b4]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-4 text-center text-base leading-relaxed text-gray-500">
          {activeTab === "HAC" && (
            <div className="animate-fade-in">
              <p>
                Hac programÄ± ile farzlarÄ±n, vaciplerin, sÃ¼nnetlerin, hatta
                mÃ¼stehaplarÄ±n bile yerine getirilmesi iÃ§in ehil ve tecrÃ¼beli
                hocalarÄ±mÄ±zÄ±n rehberliÄŸinde hac ve umre iÃ§in lÃ¼tfen{" "}
                <strong className="text-gray-800">0312 309 00 26</strong> nolu
                telefondan bizi arayÄ±nÄ±z.
              </p>
              <p>
                Vuslat Turizm web sitemizde{" "}
                <strong className="text-gray-800">umre turlarÄ±</strong> ve{" "}
                <strong className="text-gray-800">
                  2025 yÄ±lÄ± umre fiyatlarÄ± ve hac fiyatlarÄ±
                </strong>{" "}
                hakkÄ±nda detaylÄ± bilgiye sahip olabilirsiniz.
              </p>
              <p>
                Hac ve umre nedir, nasÄ±l yapÄ±lÄ±r, tavaf, say gibi merak
                ettiÄŸiniz tÃ¼m sorulara web sitemizde cevap bulabilirsiniz.
                Gerek Ã¶ncesinde, gerekse bizzat{" "}
                <strong className="text-gray-800">
                  hac ve umre esnasÄ±nda
                </strong>{" "}
                bilginize bilgi katacaÄŸÄ±nÄ±zdan emin olabilirsiniz.
              </p>
              <p>
                Hac oda tercihli konaklama ve hac otel tercihli konaklama
                turlarÄ± ile bÃ¼tÃ§enize en uygun hac ve{" "}
                <strong className="text-gray-800">2025 yÄ±lÄ± umre turu</strong>{" "}
                seÃ§eneÄŸi tercih ederek, Hazreti Allah'Ä±n (Celle CelÃ¢lÃ¼hÃ¼),
                Sevgili Resullah Efendimiz'in (Sallallahu Aleyhi Vesellem)
                misafirleri olarak tam anlamÄ±yla hac yapmanÄ±z iÃ§in
                dÃ¼ÅŸÃ¼ndÃ¼ÄŸÃ¼nÃ¼zÃ¼n de Ã¶tesinde muazzam bir hizmet sizleri
                bekliyor.
              </p>
            </div>
          )}
          {activeTab === "UMRE" && (
            <div className="animate-fade-in">
              <p>
                Umre ibadeti, MÃ¼slÃ¼manlarÄ±n Kabe-i Muazzama'yÄ± ziyaret
                ederek manevi duygularÄ±nÄ± pekiÅŸtirdiÄŸi Ã¶zel bir
                yolculuktur. Vuslat Turizm olarak bu kutsal yolculukta sizlere
                en iyi hizmeti sunmak iÃ§in buradayÄ±z.
              </p>
              <p>
                FarklÄ± konaklama seÃ§enekleri ve tecrÃ¼beli rehberlerimiz
                eÅŸliÄŸinde, gÃ¶nÃ¼l rahatlÄ±ÄŸÄ±yla ibadetinizi yerine
                getirebilirsiniz. DetaylÄ± bilgi iÃ§in bizimle iletiÅŸime
                geÃ§in.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="mb-12 text-3xl font-bold text-[#1f2937]">
          Misafirlerimiz Ne Diyor ?
        </h2>
        <p className="mb-8 text-sm text-gray-400">
          TÃ¼m yorumlar Google'dan alÄ±nmÄ±ÅŸtÄ±r. DiÄŸer yorumlarÄ± gÃ¶rmek
          iÃ§in Google profilimizi ziyaret edebilirsiniz.
        </p>

        <div className="mx-auto flex h-32 max-w-2xl items-center justify-center text-xl leading-relaxed font-light text-gray-500 italic transition-all duration-500 ease-in-out md:text-2xl">
          "{testimonials[currentTestimonial]?.text}"
        </div>

        <div className="mt-8 flex flex-col items-center">
          <h4 className="mb-2 text-base font-bold text-gray-800">
            {testimonials[currentTestimonial]?.author}
          </h4>
          <div className="flex gap-0.5 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                â˜…
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${currentTestimonial === idx ? "bg-gray-800" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f24] px-4 py-16 text-sm text-gray-400">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                Şükür
                <span className="-mt-1 block font-sans text-xs font-normal tracking-normal text-gray-400">
                  Turism
                </span>
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-[#00c4b4] hover:text-white"
              >
                <IconFacebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-[#00c4b4] hover:text-white"
              >
                <IconInstagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold text-white">
              Ã–ne Ã‡Ä±kan Turlar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Umre TurlarÄ±
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  KÃ¼ltÃ¼r TurlarÄ±
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  YurtdÄ±ÅŸÄ± Turlar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold text-white">Sayfalar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  HakkÄ±mÄ±zda
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  SÄ±kÃ§a Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  KVKK PolitikamÄ±z
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-bold text-white">Ä°letiÅŸim</h3>
            <ul className="space-y-3">
              <li>Adliye sk. No:3 ULUS-ALTINDAÄž/ANKARA</li>
              <li>0312 309 00 26</li>
              <li>0554 113 40 02</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center md:flex-row">
          <p>Â© 2023 TÃ¼m HaklarÄ± SaklÄ±dÄ±r. - www.vuslatturizm.com</p>
          <div className="flex gap-4 opacity-50">
            {/* Placeholder for payment logos or associations if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}

