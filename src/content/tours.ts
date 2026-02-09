import type { TourCategory, TourDetail, TourSummary } from "~/content/types";

const tours: TourDetail[] = [
  {
    slug: "vip-umre-altin-15-gun",
    title: "VIP Altın Umre 15 Gün",
    category: "umre",
    durationDays: 15,
    priceFrom: 2450,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600&auto=format&fit=crop",
    badges: ["5 Yıldız Otel", "VIP Transfer", "Sınırlı Kontenjan"],
    shortBlurb:
      "Mekke ve Medine'de premium konaklama, yakın mesafe transferleri ve yüksek rehber desteği.",
    itinerary: [
      {
        day: "1-2. Gün",
        title: "Ankara Çıkış ve Medine Yerleşim",
        description:
          "Direkt uçuş sonrası otel yerleşimi, grup tanışması ve ilk bilgilendirme oturumu yapılır.",
      },
      {
        day: "3-6. Gün",
        title: "Medine Ziyaretleri",
        description:
          "Ravza planlaması, rehberli mescit ziyaretleri ve günlük ibadet akışı organize edilir.",
      },
      {
        day: "7. Gün",
        title: "Mekke Geçişi",
        description:
          "Konforlu transfer, ihram bilgilendirmesi ve umre adımlarının uygulamalı rehberliği sunulur.",
      },
      {
        day: "8-15. Gün",
        title: "Mekke Programı ve Dönüş",
        description:
          "Kabe çevresindeki ibadet düzeni, toplu bilgilendirmeler ve güvenli dönüş koordinasyonu tamamlanır.",
      },
    ],
    includes: [
      "Gidiş-dönüş uçak bileti",
      "5 yıldızlı otelde konaklama",
      "Sabah-akşam açık büfe yemek",
      "Alan ve şehir içi transferler",
      "Tecrübeli rehber ekibi",
      "Seyahat sağlık sigortası",
    ],
    excludes: [
      "Kişisel harcamalar",
      "Ekstra özel oda yükseltmeleri",
      "Yurt dışı çıkış harcı",
    ],
    faq: [
      {
        question: "Bu pakette yürüyüş mesafesi ne kadar?",
        answer:
          "Konaklama Kabe ve Mescid-i Nebevi çevresine yakın konumdadır; günlük yoğunluk durumuna göre değişmekle birlikte minimum yürüme hedeflenir.",
      },
      {
        question: "Vize süreçlerini siz yönetiyor musunuz?",
        answer:
          "Evet. Evrak kontrolü, başvuru ve takip süreçleri ekip tarafından yönetilir.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "VIP Altın Umre 15 Gün | Şükür Turizm",
      description:
        "Premium konaklama ve yüksek rehberlik standardıyla 15 günlük VIP umre paketi.",
    },
  },
  {
    slug: "aile-umre-10-gun",
    title: "Aile Umre Programı 10 Gün",
    category: "umre",
    durationDays: 10,
    priceFrom: 1290,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    badges: ["Aile Dostu", "Ekonomik", "Kısa Program"],
    shortBlurb:
      "Çocuklu ailelere uygun ritimde, kısa süreli ama yoğun manevi program.",
    itinerary: [
      {
        day: "1. Gün",
        title: "Uçuş ve Karşılama",
        description:
          "Havaalanı karşılama, otel yerleşimi ve aile odaklı bilgilendirme yapılır.",
      },
      {
        day: "2-4. Gün",
        title: "Medine İbadet Programı",
        description:
          "Ailelerin rahat hareket edebileceği saatlerde rehberli ziyaretler planlanır.",
      },
      {
        day: "5. Gün",
        title: "Mekke Transferi",
        description:
          "Konforlu geçiş ve umre uygulama akışının adım adım rehberliği sağlanır.",
      },
      {
        day: "6-10. Gün",
        title: "Mekke ve Dönüş",
        description:
          "İbadet temposu günlük gruplara bölünür, dönüş öncesi genel değerlendirme yapılır.",
      },
    ],
    includes: [
      "Gidiş-dönüş uçak bileti",
      "4 yıldız otel konaklama",
      "Transferler",
      "Rehberlik hizmeti",
      "Temel sağlık danışmanlığı",
    ],
    excludes: ["Kişisel alışveriş", "Ekstra geziler"],
    faq: [
      {
        question: "Çocuklar için özel düzen var mı?",
        answer:
          "Program saatleri ve yürüyüş yoğunluğu aile konforuna göre planlanır.",
      },
      {
        question: "Odalar kaç kişilik?",
        answer: "Aile büyüklüğüne göre 2, 3 veya 4 kişilik seçenekler sunulur.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597212618440-806a846b4bb5?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Aile Umre Programı 10 Gün | Şükür Turizm",
      description: "Aileler için dengeli tempoda planlanan 10 günlük umre turu.",
    },
  },
  {
    slug: "ramazan-umresi-20-gun",
    title: "Ramazan Umresi 20 Gün",
    category: "umre",
    durationDays: 20,
    priceFrom: 1890,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1597212618440-806a846b4bb5?q=80&w=1600&auto=format&fit=crop",
    badges: ["Ramazan Özel", "İftar Programı", "Uzun Konaklama"],
    shortBlurb:
      "Ramazan ayını kutsal topraklarda geçirmek isteyenler için kapsamlı uzun dönem plan.",
    itinerary: [
      {
        day: "1-5. Gün",
        title: "Medine Başlangıç",
        description: "Ritme alışma süreci, ibadet ve ziyaretlerin dengeli dağılımı.",
      },
      {
        day: "6. Gün",
        title: "Mekke Geçiş",
        description: "İhram ve umre adımları için saha rehberliği.",
      },
      {
        day: "7-19. Gün",
        title: "Ramazan Programı",
        description:
          "Sahur/iftar organizasyonu, günlük ibadet rotaları ve bilgilendirme halkaları.",
      },
      {
        day: "20. Gün",
        title: "Dönüş",
        description: "Grup kapanış toplantısı ve koordineli dönüş.",
      },
    ],
    includes: [
      "Uçak bileti",
      "4-5 yıldız otel opsiyonları",
      "Sahur ve iftar düzeni",
      "Rehberlik ve transfer",
    ],
    excludes: ["Kişisel ikramlar", "Ekstra tur satın alımları"],
    faq: [
      {
        question: "İftar programı otele dahil mi?",
        answer: "Evet, paket kapsamındaki konaklamada iftar düzeni sağlanır.",
      },
      {
        question: "Program tek grup olarak mı ilerliyor?",
        answer:
          "Evet. Ana omurga tek gruptur, ancak günlük ritimlere göre alt grup yönlendirmesi yapılabilir.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542816417-0983676bbda8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542652735-bff0b49e498e?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Ramazan Umresi 20 Gün | Şükür Turizm",
      description: "Ramazan ayı için uzun süreli organize umre planı.",
    },
  },
  {
    slug: "otel-tercihli-hac-2026",
    title: "Otel Tercihli Hac 2026",
    category: "hac",
    durationDays: 32,
    priceFrom: 4950,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1542652735-bff0b49e498e?q=80&w=1600&auto=format&fit=crop",
    badges: ["Hac Özel", "Yakın Konaklama", "Saha Koordinasyonu"],
    shortBlurb:
      "Arafat-Mina-Müzdelife geçişlerinde saha takibi güçlü, otel odaklı kapsamlı hac paketi.",
    itinerary: [
      {
        day: "1-6. Gün",
        title: "Medine Hazırlık Fazı",
        description: "Hac adımları için teorik ve uygulamalı grup eğitimleri.",
      },
      {
        day: "7-12. Gün",
        title: "Mekke'ye Geçiş",
        description: "Konaklama yerleşimi ve ibadet temposunun kurulması.",
      },
      {
        day: "13-20. Gün",
        title: "Hac Günleri Operasyonu",
        description: "Arafat, Mina ve Müzdelife adımlarının saatlik saha koordinasyonu.",
      },
      {
        day: "21-32. Gün",
        title: "Tamamlama ve Dönüş",
        description: "Tavaf ve ziyaret planlarının tamamlanması, dönüş hazırlığı.",
      },
    ],
    includes: [
      "Hac vizesi danışmanlığı",
      "Uçak ve transfer organizasyonu",
      "Konaklama",
      "Saha rehberliği",
      "Sağlık koordinasyonu",
    ],
    excludes: ["Kişisel ekipman", "Kişisel sağlık harcamaları"],
    faq: [
      {
        question: "Hac günlerinde rehber erişimi nasıl sağlanıyor?",
        answer:
          "Her grup için sabit rehber ve destek ekibi atanır, acil durum hattı 7/24 aktiftir.",
      },
      {
        question: "Yaşlı yolcular için destek var mı?",
        answer: "Evet, yürüyüş yoğunluğu ve transfer planı öncelikli destekle yürütülür.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533106958142-8d14dbf8f0ea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Otel Tercihli Hac 2026 | Şükür Turizm",
      description: "Kapsamlı saha koordinasyonuyla otel odaklı hac programı.",
    },
  },
  {
    slug: "ekonomik-hac-programi",
    title: "Ekonomik Hac Programı",
    category: "hac",
    durationDays: 28,
    priceFrom: 3950,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1570203294379-b8f7660d99b4?q=80&w=1600&auto=format&fit=crop",
    badges: ["Bütçe Dostu", "Dengeli Program", "Kontrollü Grup"],
    shortBlurb:
      "Temel ihtiyaçlara odaklanan, maliyet/konfor dengesini koruyan hac organizasyonu.",
    itinerary: [
      {
        day: "1-4. Gün",
        title: "Hazırlık ve Medine",
        description: "Konaklama yerleşimi ve ibadet düzeni.",
      },
      {
        day: "5-9. Gün",
        title: "Mekke Adaptasyon",
        description: "Grup içi görev paylaşımı ve rota planlaması.",
      },
      {
        day: "10-18. Gün",
        title: "Hac Günleri",
        description: "Sahada adım adım yönlendirme ve takip.",
      },
      {
        day: "19-28. Gün",
        title: "Tamamlama",
        description: "Ziyaretler, kapanış ve dönüş işlemleri.",
      },
    ],
    includes: [
      "Uçuş ve transfer",
      "Konaklama",
      "Rehberlik",
      "Operasyon desteği",
    ],
    excludes: ["Ekstra gezi talepleri", "Kişisel alışveriş"],
    faq: [
      {
        question: "Ekonomik paket rehberlik kalitesini etkiler mi?",
        answer:
          "Hayır. Rehberlik standarttır; fark daha çok konaklama ve bazı ek hizmet seçeneklerindedir.",
      },
      {
        question: "Ödeme planı var mı?",
        answer: "Kademeli ödeme seçenekleri sunulur, detay satış ekibince paylaşılır.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Ekonomik Hac Programı | Şükür Turizm",
      description: "Bütçe dostu ve dengeli hac paketi.",
    },
  },
  {
    slug: "ankara-direkt-hac-plus",
    title: "Ankara Direkt Hac Plus",
    category: "hac",
    durationDays: 30,
    priceFrom: 4550,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1585036156171-384164a8c696?q=80&w=1600&auto=format&fit=crop",
    badges: ["Direkt Uçuş", "Plus Hizmet", "Öncelikli Transfer"],
    shortBlurb:
      "Ankara direkt uçuş avantajıyla operasyonel yorgunluğu azaltan plus hac paketi.",
    itinerary: [
      {
        day: "1. Gün",
        title: "Direkt Uçuş ve Yerleşim",
        description: "Aktarmasız ulaşım, hızlı yerleşim ve ekip oryantasyonu.",
      },
      {
        day: "2-8. Gün",
        title: "Medine Programı",
        description: "Günlük ziyaret ve ibadet akışı.",
      },
      {
        day: "9-20. Gün",
        title: "Hac Günleri",
        description: "Yoğun saha desteğiyle ritmik ilerleyiş.",
      },
      {
        day: "21-30. Gün",
        title: "Kapanış",
        description: "Son ziyaretler ve dönüş.",
      },
    ],
    includes: [
      "Direkt uçuş",
      "Havalimanı hızlı geçiş desteği",
      "Konaklama",
      "Rehberlik",
      "Sigorta",
    ],
    excludes: ["Kişisel harcamalar"],
    faq: [
      {
        question: "Direkt uçuş her dönem var mı?",
        answer:
          "Kota ve dönem planına göre sunulur; kesinlik kayıt döneminde teyit edilir.",
      },
      {
        question: "Plus hizmette fark nedir?",
        answer: "Transfer ve saha koordinasyonunda daha sıkı destek paketleri sunulur.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542728928-1413d1894ed1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552573849-45a89ea9f0ad?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b2?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Ankara Direkt Hac Plus | Şükür Turizm",
      description: "Direkt uçuş avantajıyla planlanan hac plus paketi.",
    },
  },
  {
    slug: "kudus-mescid-i-aksa-6-gun",
    title: "Kudüs ve Mescid-i Aksa 6 Gün",
    category: "kultur",
    durationDays: 6,
    priceFrom: 1790,
    currency: "USD",
    heroImage:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1600&auto=format&fit=crop",
    badges: ["Manevi Rota", "Yoğun Program", "Sınırlı Grup"],
    shortBlurb:
      "Kudüs merkezli manevi ve tarihsel duraklarla kısa süreli yoğun kültür turu.",
    itinerary: [
      {
        day: "1. Gün",
        title: "Kudüs Varış",
        description: "Şehir yerleşimi ve akşam bilgilendirme turu.",
      },
      {
        day: "2-4. Gün",
        title: "Kutsal Mekan Ziyaretleri",
        description: "Mescid-i Aksa odağında rehberli kültür ve tarih anlatımları.",
      },
      {
        day: "5. Gün",
        title: "Serbest ve Alternatif Rotalar",
        description: "Ekstra müze ve çarşı rotaları.",
      },
      {
        day: "6. Gün",
        title: "Dönüş",
        description: "Kapanış ve dönüş uçuşu.",
      },
    ],
    includes: [
      "Uçak bileti",
      "Konaklama",
      "Rehberlik",
      "Şehir içi ulaşım",
    ],
    excludes: ["Müze girişleri", "Ekstra öğünler"],
    faq: [
      {
        question: "Tur fiziksel olarak yorucu mu?",
        answer: "Günlük yürüyüşler orta seviyededir, alternatif rota seçenekleri sunulur.",
      },
      {
        question: "Vize desteği var mı?",
        answer: "Evrak ve süreç danışmanlığı verilir.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485811902-fa5bd19b1173?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Kudüs ve Mescid-i Aksa 6 Gün | Şükür Turizm",
      description: "Kudüs merkezli manevi yoğunluklu kısa kültür turu.",
    },
  },
  {
    slug: "bosna-hersek-miras-7-gun",
    title: "Bosna Hersek Miras Turu 7 Gün",
    category: "kultur",
    durationDays: 7,
    priceFrom: 990,
    currency: "EUR",
    heroImage:
      "https://images.unsplash.com/photo-1585036156171-384164a8c696?q=80&w=1600&auto=format&fit=crop",
    badges: ["Balkan Rotası", "Tarih + Doğa", "Rehberli"],
    shortBlurb:
      "Saraybosna, Mostar ve Travnik aksında tarih ve kültürü buluşturan rota.",
    itinerary: [
      {
        day: "1. Gün",
        title: "Saraybosna Karşılama",
        description: "Şehir merkezi turu ve açılış toplantısı.",
      },
      {
        day: "2-3. Gün",
        title: "Saraybosna Detaylı Keşif",
        description: "Osmanlı izleri, müzeler ve anıt bölgeler.",
      },
      {
        day: "4-5. Gün",
        title: "Mostar ve Çevre",
        description: "Köprü, tekke ve tarihsel geçiş noktaları.",
      },
      {
        day: "6-7. Gün",
        title: "Travnik ve Dönüş",
        description: "Kültürel duraklar ve dönüş uçuşu.",
      },
    ],
    includes: ["Uçuş", "Konaklama", "Rehberlik", "Yerel transfer"],
    excludes: ["Kişisel alışveriş", "Ekstra akşam yemekleri"],
    faq: [
      {
        question: "Program aileler için uygun mu?",
        answer: "Evet. Yürüyüş yoğunluğu dengeli tutulur.",
      },
      {
        question: "Yemekler pakete dahil mi?",
        answer: "Kahvaltı dahil, diğer öğünlerde serbest seçim modeli uygulanır.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280695-3c4694ea7f2d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Bosna Hersek Miras Turu 7 Gün | Şükür Turizm",
      description: "Balkanlar'da tarih, mimari ve kültür odaklı rota.",
    },
  },
  {
    slug: "anadolu-medeniyet-rotasi-5-gun",
    title: "Anadolu Medeniyet Rotası 5 Gün",
    category: "kultur",
    durationDays: 5,
    priceFrom: 22900,
    currency: "TRY",
    heroImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    badges: ["Yurt İçi", "Tarihsel Durak", "Konforlu Otobüs"],
    shortBlurb:
      "Kapadokya, Konya ve Sivas hattında inanç-kültür odaklı iç tur programı.",
    itinerary: [
      {
        day: "1. Gün",
        title: "Ankara Çıkış",
        description: "Konforlu otobüsle rota başlangıcı ve rehber anlatımı.",
      },
      {
        day: "2. Gün",
        title: "Konya Programı",
        description: "Mevlana merkezi ve tarihsel noktalar.",
      },
      {
        day: "3-4. Gün",
        title: "Kapadokya",
        description: "Vadiler, müzeler ve bölgesel kültür durakları.",
      },
      {
        day: "5. Gün",
        title: "Dönüş",
        description: "Kapanış toplantısı ve Ankara varışı.",
      },
    ],
    includes: [
      "Ulaşım",
      "Konaklama",
      "Kahvaltı-akşam yemeği",
      "Rehberlik",
    ],
    excludes: ["Müze kartı", "Kişisel harcamalar"],
    faq: [
      {
        question: "Yaş sınırı var mı?",
        answer: "Sert yaş sınırı yoktur; sağlık uygunluğu tavsiye edilir.",
      },
      {
        question: "Tek kişi katılım mümkün mü?",
        answer: "Evet, tek kişi katılım için oda paylaşım opsiyonları sunulur.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    ],
    seo: {
      title: "Anadolu Medeniyet Rotası 5 Gün | Şükür Turizm",
      description: "Anadolu'da tarih ve kültürü birleştiren beş günlük rota.",
    },
  },
];

export const tourDetails: TourDetail[] = tours;

export const allTours: TourSummary[] = tourDetails.map((tour) => ({
  slug: tour.slug,
  title: tour.title,
  category: tour.category,
  durationDays: tour.durationDays,
  priceFrom: tour.priceFrom,
  currency: tour.currency,
  heroImage: tour.heroImage,
  badges: tour.badges,
  shortBlurb: tour.shortBlurb,
}));

export const featuredTours: TourSummary[] = allTours.slice(0, 6);

export const getToursByCategory = (category: TourCategory): TourSummary[] =>
  allTours.filter((tour) => tour.category === category);

export const getTourBySlug = (slug: string): TourDetail | undefined =>
  tourDetails.find((tour) => tour.slug === slug);

export const getRelatedTours = (slug: string): TourSummary[] => {
  const currentTour = getTourBySlug(slug);
  if (!currentTour) {
    return [];
  }

  return allTours
    .filter((tour) => tour.category === currentTour.category && tour.slug !== slug)
    .slice(0, 3);
};
