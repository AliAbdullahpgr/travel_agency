import Link from "next/link";

const featuredTours = [
  {
    title: "20 Günlük Umre Turları",
    subtitle: "Konforlu konaklama ve rehberlik",
    price: "$1,450'dan başlayan",
    badge: "En Çok Tercih",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Muhafazakar Yurtiçi Turları",
    subtitle: "Aile dostu rotalar",
    price: "$1,200'den başlayan",
    badge: "Yeni",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "10 Günlük Umre Turları",
    subtitle: "Kısa ama dolu program",
    price: "$1,250'dan başlayan",
    badge: "Hızlı Program",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "15 Günlük Umre Turları",
    subtitle: "Uzun konaklama avantajı",
    price: "$1,350'den başlayan",
    badge: "Avantajlı",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
  },
];

const reasons = [
  {
    title: "1985'ten beri tecrübeli acente",
    detail: "40+ yıllık operasyonel bilgi",
  },
  {
    title: "Direkt Ankara uçuşları",
    detail: "Aktarmasız, konforlu rota",
  },
  {
    title: "Her 45 kişiye uzman rehber",
    detail: "Bire bir ilgi ve destek",
  },
  {
    title: "Manevi yolculukta manevi hizmet",
    detail: "Alanında uzman ekip",
  },
  {
    title: "Kapsamlı seyahat sağlık sigortası",
    detail: "Güvenli ve planlı seyahat",
  },
  {
    title: "Hijyenik mutfak ve Türk lezzetleri",
    detail: "Ev konforunda yemekler",
  },
];

const testimonials = [
  {
    quote:
      "Güven veren bir programdı. Uçuş, otel ve rehberlik tam zamanında ilerledi. Her aşamada bilgilendirildik.",
    name: "Tuğba Yıldırım",
    location: "Ankara",
  },
  {
    quote:
      "Rehberlerimizin ilgisi ve organizasyonun düzeni sayesinde çok rahat ettik. Herkese tavsiye ederim.",
    name: "Mehmet Aksoy",
    location: "Konya",
  },
  {
    quote:
      "Başından sonuna kadar profesyonel bir ekip. Konaklama ve transferler beklediğimizden iyiydi.",
    name: "Zehra Kaya",
    location: "Bursa",
  },
];

const infoCards = [
  {
    title: "Hac Bilgilendirme",
    detail:
      "Hac ibadeti için gerekli belge, vize ve başvuru süreçlerini sizin adınıza takip ediyoruz.",
  },
  {
    title: "Umre Danışmanlığı",
    detail:
      "Program seçenekleri, fiyatlandırma ve konaklama alternatifleri için danışmanlarımızla görüşün.",
  },
  {
    title: "Ödeme Kolaylıkları",
    detail:
      "Esnek ödeme planları ve kredi kartı seçenekleri ile bütçenizi zorlamadan plan yapın.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6fbfb] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-40 -top-24 h-72 w-72 rounded-full bg-[#07b7ad]/20 blur-3xl" />
          <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-[#0bb1a6]/20 blur-3xl" />
          <div className="absolute inset-0 opacity-30 dot-grid" />
        </div>

        <div className="relative">
          <div className="bg-[#07b7ad] text-xs text-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-white/80" />
                  0554 113 40 02
                </span>
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-white/80" />
                  info@vuslatturizm.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="rounded-full border border-white/30 px-2 py-1">f</span>
                <span className="rounded-full border border-white/30 px-2 py-1">in</span>
                <span className="rounded-full border border-white/30 px-2 py-1">ig</span>
              </div>
            </div>
          </div>

          <header className="bg-[#07b7ad] text-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-bold">
                  V
                </div>
                <div>
                  <p className="font-display text-lg font-semibold leading-tight">
                    Vuslat
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Turizm
                  </p>
                </div>
              </div>
              <nav className="hidden items-center gap-8 text-sm md:flex">
                <Link href="#">Hac</Link>
                <Link href="#">Umre</Link>
                <Link href="#">Kültür Turları</Link>
                <Link href="#">Ödeme</Link>
                <Link href="#">İletişim</Link>
              </nav>
              <div className="flex items-center gap-3">
                <button className="hidden rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.2em] md:inline-flex">
                  Teklif Al
                </button>
                <button className="rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.2em] md:hidden">
                  Menü
                </button>
              </div>
            </div>
          </header>

          <section className="relative">
            <div className="absolute inset-0">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/45 via-slate-900/15 to-slate-900/55" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(7,183,173,0.45),_transparent_60%)]" />
            </div>

            <div className="relative mx-auto flex min-h-[540px] max-w-6xl flex-col items-center px-4 pb-28 pt-20 text-center text-white">
              <span className="fade-up rounded-full border border-white/40 px-4 py-1 text-xs uppercase tracking-[0.4em]">
                Manevi Yolculuk
              </span>
              <h1 className="font-display fade-up fade-up-delay-1 mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Vuslat Turizm
              </h1>
              <p className="fade-up fade-up-delay-2 mt-4 max-w-2xl text-sm text-white/90 md:text-base">
                Umre ve hac yolculuklarınızı güvenle planlayın. Tecrübeli kadro,
                planlı program ve konforlu konaklama seçenekleriyle yanınızdayız.
              </p>
              <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap justify-center gap-4">
                <button className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                  Programları Gör
                </button>
                <button className="rounded-full border border-white/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Ücretsiz Danışmanlık
                </button>
              </div>

              <div className="mt-10 grid w-full max-w-3xl gap-3 rounded-3xl border border-white/15 bg-white/10 p-4 text-left text-xs text-white/90 backdrop-blur">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                      2026 Programları
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      52 farklı kalkış, 18 farklı rota
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                      Memnuniyet
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      4.9 / 5 Google puanı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto -mt-14 max-w-5xl px-4">
              <div className="grid gap-3 rounded-3xl bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="rounded-lg bg-[#07b7ad]/15 p-2 text-[#07b7ad]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
                    </svg>
                  </span>
                  <div className="w-full">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Kalkış
                    </p>
                    <input
                      className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
                      placeholder="Gidiş Yeri"
                      aria-label="Kalkış noktası"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="rounded-lg bg-[#07b7ad]/15 p-2 text-[#07b7ad]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12h18" />
                      <path d="m7 8-4 4 4 4" />
                    </svg>
                  </span>
                  <div className="w-full">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Tur
                    </p>
                    <select
                      className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
                      aria-label="Tur tipi"
                    >
                      <option>Umre</option>
                      <option>Hac</option>
                      <option>Kültür</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="rounded-lg bg-[#07b7ad]/15 p-2 text-[#07b7ad]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                    </svg>
                  </span>
                  <div className="w-full">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Tarih
                    </p>
                    <input
                      className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
                      placeholder="Gidiş Tarihi"
                      aria-label="Gidiş tarihi"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="rounded-lg bg-[#07b7ad]/15 p-2 text-[#07b7ad]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <div className="w-full">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Kişi
                    </p>
                    <select
                      className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
                      aria-label="Kişi sayısı"
                    >
                      <option>2 Yetişkin</option>
                      <option>1 Yetişkin</option>
                      <option>3 Yetişkin</option>
                    </select>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#07b7ad] px-4 py-3 text-sm font-semibold text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  Ara
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="absolute -right-24 -top-10 h-48 w-48 rounded-full bg-[#07b7ad]/10 blur-3xl" />
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#07b7ad]">
            Öne Çıkan
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
            Öne Çıkan Turlar
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <article
              key={tour.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-48 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${tour.image})` }}
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-700">
                {tour.badge}
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <h3 className="text-sm font-semibold">{tour.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{tour.subtitle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#07b7ad]">
                    {tour.price}
                  </p>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    Detay
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f1f9f7]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#07b7ad]/10" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#07b7ad]/10" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#07b7ad]">
              Size Uygun
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
              Size uygun Umre Turunu Beraber Bulalım
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Profesyonel danışmanlarımızla planlama, bütçe ve konaklama
              tercihlerinizi belirleyin. Tüm detayları sizin için hazırlayalım.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Ad Soyad
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#07b7ad]"
                  placeholder="Adınız ve soyadınız"
                  aria-label="Ad Soyad"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Telefon
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#07b7ad]"
                  placeholder="(5xx) xxx xx xx"
                  aria-label="Telefon"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Planladığınız Zaman
                </label>
                <select
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#07b7ad]"
                  aria-label="Planlanan ay"
                >
                  <option>Planlanan Ay</option>
                  <option>Nisan</option>
                  <option>Mayıs</option>
                  <option>Haziran</option>
                </select>
              </div>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" className="h-4 w-4" />
                Vuslat Turizm KVKK politikasını okudum ve kabul ediyorum.
              </label>
              <button className="w-full rounded-2xl bg-[#07b7ad] px-4 py-3 text-sm font-semibold text-white">
                Teklif İste
              </button>
            </form>
          </div>
          <div className="relative">
            <div className="absolute -right-8 top-10 h-28 w-28 rounded-full border border-white/40 bg-white/30 blur-sm" />
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl">
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#07b7ad]">
                  Danışmanlık
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold">
                  Kişiye özel Umre programı
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Uçuş, konaklama, rehberlik ve transfer detaylarını size özel
                  planlayalım.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span>Konaklama Seçeneği</span>
                    <span className="font-semibold">4-5 Yıldız</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span>Uçuş</span>
                    <span className="font-semibold">Direkt</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span>Rehberlik</span>
                    <span className="font-semibold">Tecrübeli ekip</span>
                  </div>
                </div>
              </div>
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494475673543-6a6a27143b22?q=80&w=1600&auto=format&fit=crop')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#07b7ad]">
            Neden Biz
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
            Neden Biz?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07b7ad]/15 text-[#07b7ad]">
                <span className="text-lg font-semibold">+</span>
              </div>
              <h3 className="mt-4 text-sm font-semibold">{reason.title}</h3>
              <p className="mt-2 text-xs text-slate-500">{reason.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#07b7ad]">
              Hac / Umre
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
              Manevi yolculuğunuz için güvenli planlama
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Hac ve umre programlarımız, vize, uçuş, konaklama ve rehberlik
              süreçlerinin tamamında profesyonel ekibimizle yürütülür.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              2026 umre programlarımız hakkında detaylı bilgi almak için bizimle
              iletişime geçin. Size en uygun rota ve paketleri birlikte
              belirleyelim.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold text-white">
                Programları İncele
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-2 text-xs font-semibold text-slate-700">
                Hızlı Teklif Al
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5"
              >
                <h3 className="text-sm font-semibold">{card.title}</h3>
                <p className="mt-2 text-xs text-slate-600">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9fbfb]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#07b7ad]">
              Yorumlar
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
              Misafirlerimiz Ne Diyor?
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Tüm yorumlar Google yorumlarından alınmıştır. Daha fazlası için
              profilimizi ziyaret edebilirsiniz.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 text-[#f9b234]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600">“{item.quote}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {item.name} · {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-bold">
                V
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-tight">
                  Vuslat
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Turizm
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Umre ve hac yolculuklarında güvenilir ve planlı hizmet anlayışı.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="rounded-full border border-white/30 px-2 py-1 text-xs">
                f
              </span>
              <span className="rounded-full border border-white/30 px-2 py-1 text-xs">
                in
              </span>
              <span className="rounded-full border border-white/30 px-2 py-1 text-xs">
                ig
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Öne Çıkan Turlar</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Umre Turları</li>
              <li>Kültür Turları</li>
              <li>Yurtiçi Turlar</li>
              <li>Erken Rezervasyon</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Sayfalar</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Hakkımızda</li>
              <li>Sıkça Sorulan Sorular</li>
              <li>KVKK Politikası</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">İletişim</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Adliye Sk. No:3 Ulus Altındağ/Ankara</li>
              <li>0312 309 00 26</li>
              <li>0554 113 40 02</li>
              <li>info@vuslatturizm.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © 2026 Vuslat Turizm. Tüm hakları saklıdır.
        </div>
      </footer>

      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#07b7ad] px-4 py-2 text-xs font-semibold text-white shadow-lg">
        WhatsApp
      </div>
      <div className="fixed right-4 top-40 z-40 -rotate-90 rounded-full bg-[#5b4ce6] px-4 py-2 text-xs font-semibold text-white shadow-lg">
        Bize Ulaşın
      </div>
    </main>
  );
}
