export type HeroStat = { label: string; value: number };

export type FeaturedTour = {
  title: string;
  subtitle: string;
  category: "umre" | "hac" | "kultur";
  image: string;
  href: string;
};

export type HomeTestimonial = {
  name: string;
  quote: string;
  location?: string;
};

export const heroContent = {
  eyebrow: "1996'dan Beri Manevi Yolculuk Tasarımı",
  title: "Kutsal Topraklara\nGönül Rahatlığıyla",
  subtitle:
    "Şükür Turizm, umre ve hac yolculuğunuzu estetik, disiplin ve 30 yıllık saha tecrübesiyle tasarlar. Her adımda plan net, ekip hazır, iletişim açık kalır.",
  image: "/2.png",
  primaryCta: { href: "/iletisim", label: "Programımı Oluştur" },
  secondaryCta: { href: "/umre-turlari", label: "Turları İncele" },
} as const;

export const heroStats: HeroStat[] = [
  { label: "Yıllık Tecrübe", value: 30 },
  { label: "Mutlu Misafir", value: 18000 },
  { label: "Uçuş", value: 540 },
  { label: "Uzman Rehber", value: 45 },
];

export const featuredTours: FeaturedTour[] = [
  {
    title: "Umre Turları",
    subtitle: "Ekonomiden VIP'e, ritmi güçlü umre programları",
    category: "umre",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600&auto=format&fit=crop",
    href: "/umre-turlari",
  },
  {
    title: "Hac Organizasyonu",
    subtitle: "Disiplinli saha koordinasyonu ile kapsamlı hac planları",
    category: "hac",
    image:
      "https://images.unsplash.com/photo-1542652735-bff0b49e498e?q=80&w=1600&auto=format&fit=crop",
    href: "/hac-turlari",
  },
  {
    title: "Kültür Turları",
    subtitle: "Kudüs, Balkanlar ve Anadolu'da inanç-kültür rotaları",
    category: "kultur",
    image:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1600&auto=format&fit=crop",
    href: "/kultur-turlari",
  },
];

export const storyContent = {
  eyebrow: "Neden Şükür Turizm?",
  title: "Sıradan Bir Tur Değil,\nTam Ölçekli Bir Yolculuk Deneyimi",
  intro:
    "Sadece bilet ve otel satmıyoruz. Yolculuğun temposunu, ibadet yoğunluğunu ve grup psikolojisini birlikte yönetiyoruz.",
  values: [
    {
      icon: "shield",
      title: "Sahada Rehber, Merkezde Koordinasyon",
      description:
        "Her grubun sahadaki karar hızını artıran iki katmanlı model: aktif rehber + merkez koordinasyon ekibi.",
    },
    {
      icon: "compass",
      title: "Program Mimarisi",
      description:
        "Rotalar, ibadet ritmi ve dinlenme blokları önceden tasarlanan bir akış düzeniyle ilerler.",
    },
    {
      icon: "eye",
      title: "Şeffaf Fiyatlandırma",
      description:
        "Paketler arasında konaklama, transfer ve rehberlik farklarını açıkça gösterir; karşılaştırmayı net hale getiririz.",
    },
    {
      icon: "phone",
      title: "Sürekli İletişim",
      description:
        "Kayıt öncesinden dönüşe kadar aynı iletişim hattı ile hızlı cevap, hızlı çözüm sunarız.",
    },
  ],
} as const;

export const homeTestimonials: HomeTestimonial[] = [
  {
    name: "Yasin A.",
    quote:
      "Planlamadan dönüşe kadar her detay düşünülmüştü. Rehber ekibi sayesinde ibadet tarafına tam odaklandık.",
    location: "Ankara",
  },
  {
    name: "Ayşe K.",
    quote:
      "Konaklama düzeni ve grup koordinasyonu çok iyiydi. Zor süreçte sakin, güvenilir bir ekip hissettik.",
    location: "İstanbul",
  },
  {
    name: "Mehmet Y.",
    quote:
      "Manevi atmosferi güçlü, programı iyi dengelenmiş bir turdu. Ailecek memnun döndük.",
    location: "Ankara",
  },
  {
    name: "Fatma D.",
    quote:
      "İlk umremizdi ve her şey o kadar düzenli gitti ki sanki onuncu kez gidiyormuşuz gibi hissettik.",
    location: "Konya",
  },
  {
    name: "Hasan T.",
    quote:
      "Rehberlerimiz sadece gezi yönetmedi, manevi rehberlik de sağladı. Çok değerli bir deneyimdi.",
    location: "Bursa",
  },
  {
    name: "Zeynep S.",
    quote:
      "Aile olarak hac yolculuğumuz mükemmel organize edildi. Çocuklarımız bile keyifle katıldı.",
    location: "İzmir",
  },
];
