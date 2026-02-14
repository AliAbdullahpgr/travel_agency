import { categoryHeroCopy, contactInfo, landingFaqs, navLinks, testimonials, trustStats } from "~/content/site";
import type {
  InquiryPanelData,
  LandingFaqData,
  LandingHeroData,
  LandingSliderData,
  LandingTestimonialsData,
  SiteShellData,
  TourCategoryHeroesData,
} from "~/server/cms/schemas";

export const defaultSiteShellData: SiteShellData = {
  brandName: "Şükür Turizm",
  topBarText: "Şükür Turizm | Manevi Yolculuk Tasarımı",
  navLinks: navLinks.map((item) => ({ href: item.href, label: item.label })),
  contactInfo: {
    phonePrimary: contactInfo.phonePrimary,
    phoneSecondary: contactInfo.phoneSecondary,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
    address: contactInfo.address,
  },
  footer: {
    eyebrow: "Şükür Turizm",
    headline: "Manevi Yolculuğunuzu Sıradan Bir Turdan Ayırıyoruz.",
    description:
      "Umre, hac ve kültür turlarında operasyonel gücü yüksek, estetik ve planlı bir deneyim tasarımı sunuyoruz.",
    quickLinksTitle: "Hızlı Geçiş",
    contactTitle: "İletişim",
    socialTitle: "Sosyal & Yönetim",
    adminLabel: "Yönetim Girişi",
    copyrightText: "Şükür Turizm. Tüm hakları saklıdır.",
    mottoText: "Spiritual Luxury Travel",
  },
  socialUrls: {
    instagram: "https://www.instagram.com",
    whatsapp: `https://wa.me/${contactInfo.whatsapp.replace("+", "")}`,
  },
  contactRail: {
    callLabel: "Hemen Ara",
    whatsappLabel: "WhatsApp",
  },
};

export const defaultLandingHeroData: LandingHeroData = {
  slides: [
    {
      image: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij7JEw8p7PW4LYegd0nuQV51COzZrEAwR3tam",
      title: "2026 Ramazan\nProgramlarımız",
      subtitle: "Açıklanmıştır.",
    },
    {
      image: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oioAOQKxGwAX3OoMuyN8agt4RYbl6mEpU5nxLv",
      title: "Kutsal Topraklara\nGüvenli Yolculuk",
      subtitle: "30 yıllık tecrübe ile.",
    },
    {
      image: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiA1uB8Tl4HshINSvbncRkGL9V2U7XFw6dCPBo",
      title: "Hac ve Umre\nOrganizasyonu",
      subtitle: "Profesyonel rehberlik eşliğinde.",
    },
  ],
  primaryCtaLabel: "Turları İncele",
  featuredCard: {
    category: "Umre Turları",
    price: "3.200",
    currency: "$",
    perPerson: "Kişi başı",
    remainingSeats: 8,
    tourCode: "RL-0323-MOVNPCK",
    flightType: "Tarifeli Sefer",
    badges: ["Ramazan Umre Turları", "Lüks Umre Turları", "5 Yıldızlı Umre Turları"],
    hotels: [
      { name: "ANWAR AL MÖVENPİCK", city: "MEDİNE", nights: 4, image: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oi05IALrmdgQc7h4zyrAEWmnftDZGCSjpuMae9" },
      { name: "MAKKAH HOTEL", city: "MEKKE", nights: 4, image: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiuzDMMw3GrJ6zYTHnXvCN7lcLZdKA3hVmb1UD" },
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
  },
};

export const defaultLandingSliderData: LandingSliderData = {
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

export const defaultLandingTestimonialsData: LandingTestimonialsData = {
  eyebrow: "Misafir Defteri",
  title: "Yolculuk",
  titleAccent: "Anıları",
  testimonials: testimonials.map((item) => ({ ...item })),
  trustStats: trustStats.map((item) => ({ ...item, suffix: item.suffix ?? "" })),
};

export const defaultLandingFaqData: LandingFaqData = {
  eyebrow: "Sıkça Sorulan Sorular",
  title: "Merak Ettikleriniz",
  description:
    "Turlarımız ve hizmetlerimiz hakkında en çok sorulan soruların yanıtlarını burada bulabilirsiniz.",
  ctaPrompt: "Sorunuzun yanıtını bulamadınız mı?",
  ctaLabel: "Bizi Arayın",
  faqs: landingFaqs.map((item) => ({ ...item })),
};

export const defaultInquiryPanelData: InquiryPanelData = {
  title: "Tur Başvuru Formu",
  subtitle: "3 basit adımda talebinizi iletin.",
  steps: [
    { number: "01", title: "Kişisel" },
    { number: "02", title: "Seyahat" },
    { number: "03", title: "Onay" },
  ],
  backLabel: "Geri",
  nextLabel: "İleri",
  finishLabel: "Tamamla",
  savingLabel: "Kaydediliyor...",
  successMessage: "Form gönderildi.",
  stepValidationMessages: {
    personal: "Ad soyad ve telefon zorunludur.",
    trip: "Planlanan ay ve yetişkin sayısı zorunludur.",
    consent: "Onay kutusunu işaretleyin.",
  },
};

export const defaultTourCategoryHeroesData: TourCategoryHeroesData = {
  umre: categoryHeroCopy.umre,
  hac: categoryHeroCopy.hac,
  kultur: categoryHeroCopy.kultur,
};
