import type { Testimonial, TourCategory, TrustStat } from "~/content/types";

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/umre-turlari", label: "Umre Turları" },
  { href: "/hac-turlari", label: "Hac Turları" },
  { href: "/kultur-turlari", label: "Kültür Turları" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const contactInfo = {
  phonePrimary: "0312 309 00 26",
  phoneSecondary: "0554 113 40 02",
  whatsapp: "+905541134002",
  email: "info@sukurturizm.com",
  address: "Adliye Sk. No:3 Ulus Altındağ / Ankara",
} as const;

export const plannedMonths = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
] as const;

export const trustStats: TrustStat[] = [
  {
    label: "Yıllık Tecrübe",
    value: 30,
    suffix: "+",
    note: "1996'dan beri kesintisiz organizasyon",
  },
  {
    label: "Mutlu Misafir",
    value: 18000,
    suffix: "+",
    note: "Hac ve umre yolculuğunu tamamlayan misafir",
  },
  {
    label: "Uçuş Organizasyonu",
    value: 540,
    suffix: "+",
    note: "Direkt ve bağlantılı planlanan uçuş",
  },
  {
    label: "Uzman Rehber",
    value: 45,
    suffix: "",
    note: "Sahada aktif görev alan deneyimli ekip",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Yasin Altunbaş",
    route: "20 Günlük Umre",
    quote:
      "Planlamadan dönüşe kadar her detay düşünülmüştü. Rehber ekibi sayesinde ibadet tarafına tam odaklandık.",
    rating: 5,
  },
  {
    name: "Ayşe Kaya",
    route: "Hac 2025",
    quote:
      "Konaklama düzeni ve grup koordinasyonu çok iyiydi. Zor süreçte sakin, güvenilir bir ekip hissettik.",
    rating: 5,
  },
  {
    name: "Mehmet Yılmaz",
    route: "Kudüs Kültür Turu",
    quote:
      "Manevi atmosferi güçlü, programı iyi dengelenmiş bir turdu. Ailecek memnun döndük.",
    rating: 5,
  },
];

export const categoryHeroCopy: Record<
  TourCategory,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    chips: string[];
  }
> = {
  umre: {
    eyebrow: "Umre Koleksiyonu",
    title: "Katmanlı Umre Paketleri",
    subtitle:
      "Ekonomiden premiuma kadar farklı konaklama seçenekleriyle, ritmi güçlü ve net organize edilmiş umre programları.",
    image: "/2.png",
    chips: ["10-20 Gün", "Medine + Mekke", "Ehil Rehber"],
  },
  hac: {
    eyebrow: "Hac Organizasyonu",
    title: "Disiplinli ve Konforlu Hac Planları",
    subtitle:
      "Farz, vacip ve sünnet adımlarını doğru ritimde ilerleten; ulaşım, konaklama ve saha operasyonunu tek merkezden yöneten kapsamlı hac kurgusu.",
    image: "/3.png",
    chips: ["Arafat Planı", "Otel Tercihli", "Sağlık Destekli"],
  },
  kultur: {
    eyebrow: "Kültür Rotası",
    title: "Manevi Hafızası Güçlü Kültür Turları",
    subtitle:
      "Kudüs, Balkanlar ve Anadolu duraklarında tarih, mimari ve inanç mirasını birlikte okuyan tempolu kültür programları.",
    image: "/hero_image.jpg",
    chips: ["Kudüs", "Balkanlar", "Anadolu"],
  },
};
