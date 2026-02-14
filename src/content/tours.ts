import type { TourCategory, TourDetail, TourSummary } from "~/content/types";

const tours: TourDetail[] = [
  {
    slug: "vip-umre-altin-15-gun",
    title: "VIP Altın Umre Paketi · 15 Gün",
    category: "umre",
    durationDays: 15,
    priceFrom: 2750,
    currency: "USD",
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij7JEw8p7PW4LYegd0nuQV51COzZrEAwR3tam",
    badges: ["5★ Harem Manzaralı Otel", "Özel VIP Transfer", "Sınırlı Kontenjan"],
    shortBlurb:
      "Kabe'ye yürüme mesafesinde 5 yıldızlı konaklama, özel araç transferleri ve birebir rehberlik desteğiyle tasarlanmış premium umre deneyimi.",
    itinerary: [
      {
        day: "1-2. Gün",
        title: "Ankara Çıkış & Medine Yerleşim",
        description:
          "Direkt uçuş sonrası VIP karşılama, 5 yıldızlı otele yerleşim ve detaylı program bilgilendirmesi.",
      },
      {
        day: "3-6. Gün",
        title: "Medine Manevi Programı",
        description:
          "Mescid-i Nebevi ziyaretleri, Ravza-i Mutahhara planlaması ve rehber eşliğinde tarihi mekanlar turu.",
      },
      {
        day: "7. Gün",
        title: "Mekke'ye VIP Geçiş",
        description:
          "Özel araçla konforlu transfer, ihram rehberliği ve umre ibadetlerinin adım adım uygulamalı anlatımı.",
      },
      {
        day: "8-15. Gün",
        title: "Mekke İbadet Programı & Dönüş",
        description:
          "Kabe tavafı, sa'y ibadeti, günlük toplu zikir ve sohbet halkaları; son gün koordineli dönüş.",
      },
    ],
    includes: [
      "Gidiş-dönüş direkt uçak bileti",
      "5 yıldızlı Harem manzaralı otel",
      "Sabah-akşam açık büfe yemek",
      "VIP havalimanı & şehir içi transfer",
      "Tecrübeli din görevlisi ve rehber",
      "Seyahat sağlık sigortası",
    ],
    excludes: [
      "Kişisel harcamalar",
      "Özel oda yükseltme farkı",
      "Yurt dışı çıkış harcı",
    ],
    faq: [
      {
        question: "Otel Kabe'ye ne kadar uzaklıkta?",
        answer:
          "Konaklama Harem bölgesine yürüme mesafesindedir; günlük ibadetlerde araç ihtiyacı olmadan ulaşım sağlanır.",
      },
      {
        question: "Vize işlemlerini siz mi yürütüyorsunuz?",
        answer:
          "Evet. Evrak hazırlığı, başvuru ve takip süreçlerinin tamamı ekibimiz tarafından yürütülür.",
      },
    ],
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij7JEw8p7PW4LYegd0nuQV51COzZrEAwR3tam", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oioAOQKxGwAX3OoMuyN8agt4RYbl6mEpU5nxLv", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiA1uB8Tl4HshINSvbncRkGL9V2U7XFw6dCPBo"],
    seo: {
      title: "VIP Altın Umre 15 Gün | Şükür Turizm",
      description:
        "Harem manzaralı 5 yıldızlı konaklama ve VIP transfer ile 15 günlük premium umre paketi.",
    },
  },
  {
    slug: "aile-umre-10-gun",
    title: "Aile Umre Programı · 10 Gün",
    category: "umre",
    durationDays: 10,
    priceFrom: 1490,
    currency: "USD",
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oioAOQKxGwAX3OoMuyN8agt4RYbl6mEpU5nxLv",
    badges: ["Aile & Çocuk Dostu", "Esnek Tempo", "Ekonomik Paket"],
    shortBlurb:
      "Çocuklu aileler için sakin tempoda planlanmış, kısa ama öz manevi program. Rahat konaklama ve esnek ibadet düzeniyle huzurlu bir umre.",
    itinerary: [
      {
        day: "1. Gün",
        title: "Karşılama & Yerleşim",
        description:
          "Havaalanı karşılama, aile odaklı otel yerleşimi ve çocuklar dahil oryantasyon.",
      },
      {
        day: "2-4. Gün",
        title: "Medine Ziyaretleri",
        description:
          "Çocukların rahat edebileceği saatlerde Mescid-i Nebevi ve çevre ziyaretleri.",
      },
      {
        day: "5. Gün",
        title: "Mekke'ye Aile Transferi",
        description:
          "Klimalı araçlarla konforlu geçiş; ihram ve umre adımlarının aile diline uygun anlatımı.",
      },
      {
        day: "6-10. Gün",
        title: "Mekke Programı & Dönüş",
        description:
          "Esnek ibadet temposu, çocuk molalarıyla desteklenmiş tavaf düzeni ve koordineli dönüş.",
      },
    ],
    includes: [
      "Gidiş-dönüş uçak bileti",
      "4 yıldızlı aile odaları",
      "Günlük kahvaltı & akşam yemeği",
      "Tüm transferler",
      "Rehberlik hizmeti",
      "Seyahat sigortası",
    ],
    excludes: ["Kişisel alışveriş", "Ekstra tur satın alımları"],
    faq: [
      {
        question: "Küçük çocuklar için özel düzenleme var mı?",
        answer:
          "Evet. Program saatleri, yürüyüş mesafeleri ve mola süreleri aile konforuna göre ayarlanır.",
      },
      {
        question: "Oda tipleri nasıl belirleniyor?",
        answer: "Aile büyüklüğüne göre 2, 3 veya 4 kişilik oda seçenekleri sunulmaktadır.",
      },
    ],
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oioAOQKxGwAX3OoMuyN8agt4RYbl6mEpU5nxLv", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij7JEw8p7PW4LYegd0nuQV51COzZrEAwR3tam", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiA1uB8Tl4HshINSvbncRkGL9V2U7XFw6dCPBo"],
    seo: {
      title: "Aile Umre Programı 10 Gün | Şükür Turizm",
      description: "Çocuklu aileler için esnek tempoda planlanmış 10 günlük umre paketi.",
    },
  },
  {
    slug: "ramazan-umresi-20-gun",
    title: "Ramazan Özel Umre · 20 Gün",
    category: "umre",
    durationDays: 20,
    priceFrom: 2190,
    currency: "USD",
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiA1uB8Tl4HshINSvbncRkGL9V2U7XFw6dCPBo",
    badges: ["Ramazan Özel", "Sahur & İftar Dahil", "Kadir Gecesi Programı"],
    shortBlurb:
      "Ramazan'ın maneviyatını Haremeyn'de yaşayın. Sahur-iftar organizasyonu, Kadir Gecesi özel programı ve 20 gün boyunca kesintisiz ibadet düzeni.",
    itinerary: [
      {
        day: "1-5. Gün",
        title: "Medine'de Ramazan Başlangıcı",
        description: "Oruç ritmine uyum, Mescid-i Nebevi'de teravih namazları ve rehberli ziyaret programı.",
      },
      {
        day: "6. Gün",
        title: "Mekke'ye Geçiş & İhram",
        description: "Konforlu transfer ile Mekke'ye geçiş; ihram rehberliği ve umre ibadetlerinin uygulanması.",
      },
      {
        day: "7-19. Gün",
        title: "Mekke Ramazan Programı",
        description:
          "Günlük sahur-iftar organizasyonu, Harem'de teravih, Kadir Gecesi özel ibadeti ve sohbet halkaları.",
      },
      {
        day: "20. Gün",
        title: "Veda & Dönüş",
        description: "Veda tavafı, grup kapanış duası ve koordineli havalimanı transferi.",
      },
    ],
    includes: [
      "Gidiş-dönüş uçak bileti",
      "4-5 yıldızlı otel seçenekleri",
      "20 gün sahur & iftar programı",
      "Tüm transferler",
      "Din görevlisi ve rehber",
      "Seyahat sigortası",
    ],
    excludes: ["Kişisel harcamalar", "Ekstra tur satın alımları"],
    faq: [
      {
        question: "Sahur ve iftar programı nasıl işliyor?",
        answer: "Her gün otelde organize sahur ve iftar servisi sunulur; Harem yakınında alternatif düzenler de planlanır.",
      },
      {
        question: "Kadir Gecesi için özel program var mı?",
        answer:
          "Evet. Kadir Gecesi adayı gecelerde Harem'de özel ibadet programı, dua ve zikir halkaları düzenlenir.",
      },
    ],
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiA1uB8Tl4HshINSvbncRkGL9V2U7XFw6dCPBo", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij7JEw8p7PW4LYegd0nuQV51COzZrEAwR3tam", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oioAOQKxGwAX3OoMuyN8agt4RYbl6mEpU5nxLv"],
    seo: {
      title: "Ramazan Umresi 20 Gün | Şükür Turizm",
      description: "Sahur-iftar dahil, Kadir Gecesi özel programlı 20 günlük Ramazan umre paketi.",
    },
  },
  {
    slug: "otel-tercihli-hac-2026",
    title: "Otel Tercihli Hac 2026",
    category: "hac",
    durationDays: 32,
    priceFrom: 4950,
    currency: "USD",
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZo4L6c9d6j3wV7dfPKqsHoXQYEumyNF5kTWD",
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
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZo4L6c9d6j3wV7dfPKqsHoXQYEumyNF5kTWD", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oi05IALrmdgQc7h4zyrAEWmnftDZGCSjpuMae9"],
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
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi",
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
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZo4L6c9d6j3wV7dfPKqsHoXQYEumyNF5kTWD", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oi05IALrmdgQc7h4zyrAEWmnftDZGCSjpuMae9"],
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
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oi05IALrmdgQc7h4zyrAEWmnftDZGCSjpuMae9",
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
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oi05IALrmdgQc7h4zyrAEWmnftDZGCSjpuMae9", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZo4L6c9d6j3wV7dfPKqsHoXQYEumyNF5kTWD"],
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
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oivlAB2HVeYzNhQX9R8VFPsblZDaGuoJSr6gOA",
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
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oivlAB2HVeYzNhQX9R8VFPsblZDaGuoJSr6gOA", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij1O9m8p7PW4LYegd0nuQV51COzZrEAwR3tam"],
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
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiJNkNc68sqg5cU6AbfGCSrxzNYV4veaQm8EZh",
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
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oivlAB2HVeYzNhQX9R8VFPsblZDaGuoJSr6gOA", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oi05IALrmdgQc7h4zyrAEWmnftDZGCSjpuMae9"],
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
    heroImage: "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiGnIWm2jzrpblaJ3e6M70kvfI2jZiCSUcHLTX",
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
    gallery: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij1O9m8p7PW4LYegd0nuQV51COzZrEAwR3tam", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiuzDMMw3GrJ6zYTHnXvCN7lcLZdKA3hVmb1UD", "https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oiZCnWTZd6j3wV7dfPKqsHoXQYEumyNF5kTWDi"],
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
