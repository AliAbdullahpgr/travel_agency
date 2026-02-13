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

export const landingFaqs: { question: string; answer: string }[] = [
  {
    question: "Umre ve hac turlarınız neleri kapsıyor?",
    answer:
      "Turlarımız uçak bileti, otel konaklaması, vize işlemleri, havalimanı transferleri, rehberlik hizmeti ve ziyaret programlarını kapsar. Detaylı kapsam bilgisi her tur sayfasında belirtilmektedir.",
  },
  {
    question: "Rezervasyon için ne kadar önceden başvurmalıyım?",
    answer:
      "Umre turları için en az 3-4 hafta, hac turları için ise 4-6 ay önceden başvurmanızı öneriyoruz. Erken başvurularda indirimli fiyatlardan faydalanabilirsiniz.",
  },
  {
    question: "Ödeme seçenekleriniz nelerdir?",
    answer:
      "Peşin ödeme, kredi kartına taksit ve havale/EFT seçeneklerimiz mevcuttur. Taksit seçenekleri 3, 6 ve 9 ay olarak sunulmaktadır. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Pasaport ve vize işlemlerinde yardımcı oluyor musunuz?",
    answer:
      "Evet, vize başvuru sürecinizde sizlere rehberlik ediyoruz. Gerekli belgelerin hazırlanması, başvuru formlarının doldurulması ve takip sürecinde ekibimiz yanınızdadır.",
  },
  {
    question: "Turlar sırasında sağlık desteği var mı?",
    answer:
      "Tüm turlarımızda seyahat sağlık sigortası dahildir. Hac turlarında ek olarak sahada sağlık ekibi bulunmaktadır. Kronik rahatsızlığı olan misafirlerimiz için özel düzenlemeler yapılabilir.",
  },
  {
    question: "İptal ve iade politikanız nasıl?",
    answer:
      "Hareket tarihinden 30 gün önce yapılan iptallerde tam iade, 15-30 gün arası %50 iade uygulanır. 15 günden kısa sürede yapılan iptallerde iade yapılamamaktadır. Mücbir sebepler ayrıca değerlendirilir.",
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
    image: "/4.jpg",
    chips: ["10-20 Gün", "Medine + Mekke", "Ehil Rehber"],
  },
  hac: {
    eyebrow: "Hac Organizasyonu",
    title: "Disiplinli ve Konforlu Hac Planları",
    subtitle:
      "Farz, vacip ve sünnet adımlarını doğru ritimde ilerleten; ulaşım, konaklama ve saha operasyonunu tek merkezden yöneten kapsamlı hac kurgusu.",
    image: "/2.jpg",
    chips: ["Arafat Planı", "Otel Tercihli", "Sağlık Destekli"],
  },
  kultur: {
    eyebrow: "Kültür Rotası",
    title: "Manevi Hafızası Güçlü Kültür Turları",
    subtitle:
      "Kudüs, Balkanlar ve Anadolu duraklarında tarih, mimari ve inanç mirasını birlikte okuyan tempolu kültür programları.",
    image: "/8.jpg",
    chips: ["Kudüs", "Balkanlar", "Anadolu"],
  },
};
