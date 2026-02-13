"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiAward,
  FiSmile,
  FiHeadphones,
  FiStar,
  FiNavigation,
} from "react-icons/fi";

const promises = [
  {
    icon: FiShield,
    title: "Sözümüz Söz",
    description:
      "Belirttiğimiz tarih ve saatlerde, taahhüt ettiğimiz kalite ve fiyatla yanınızdayız.",
  },
  {
    icon: FiAward,
    title: "Özel Hizmet Anlayışı",
    description:
      "Alanında uzman rehber ve hoca kadromuz eşliğinde lüks, delüks, butik ve vip umreler düzenliyoruz.",
  },
  {
    icon: FiSmile,
    title: "Misafir Memnuniyeti",
    description:
      "Misafirlerimizin memnuniyeti için en iyi şekilde hizmet vermek adına kendimizi sürekli yenilemekteyiz.",
  },
  {
    icon: FiHeadphones,
    title: "Her Zaman Destek",
    description:
      "Deneyimli satış ve operasyon ekibimiz ile umre programınız süresince tüm sorularınız için sizlere özel hizmet vermekteyiz.",
  },
  {
    icon: FiStar,
    title: "En İyi Konaklama Seçenekleri",
    description:
      "Tüm turlarımızda konum, temizlik ve hijyen ile yemek konusunda 5 yıldızlı, en iyi ve zincir oteller ile hizmet sunmaktayız.",
  },
  {
    icon: FiNavigation,
    title: "Türk Hava Yolları ile Uçuş Konforu",
    description:
      "Tüm seyahatlerimizde sadece Türkiye'nin gururu 1 numaralı global hava yolu şirketimiz Türk Hava Yollarını tercih etmekteyiz.",
  },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseUs() {
  return (
    <section className="relative z-10 overflow-hidden bg-white px-4 py-24 md:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(10,61,46,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(200,168,78,0.06),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(4,14,12,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(4,14,12,0.1)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      {/* Top edge line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 text-center md:mb-20"
        >
          <span className="mb-4 inline-block rounded-full border border-[color:var(--emerald)]/20 bg-[color:var(--emerald)]/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--emerald)]">
            Neden Biz?
          </span>
          <h2 className="font-display px-4 text-4xl leading-tight text-[color:var(--emerald)] md:text-5xl lg:text-6xl">
            Güvence <span className="text-[color:var(--text-muted)]">ve Kalite</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[color:var(--text-muted)] md:text-base">
            Her detayı titizlikle planlıyor, manevi yolculuğunuzu unutulmaz bir
            deneyime dönüştürüyoruz.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {promises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--cream)] p-7 transition-all duration-500 hover:border-[color:var(--gold)]/40 hover:shadow-lg hover:shadow-[color:var(--gold)]/[0.08] md:p-8"
              >
                {/* Hover glow */}
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[color:var(--gold)]/[0.06] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[color:var(--emerald)]/15 bg-[color:var(--emerald)]/[0.06] transition-colors duration-500 group-hover:border-[color:var(--gold)]/35 group-hover:bg-[color:var(--gold)]/[0.1]">
                    <Icon className="h-6 w-6 text-[color:var(--emerald)] transition-colors duration-500 group-hover:text-[color:var(--gold-dim)]" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display mb-2.5 text-lg font-semibold leading-snug text-[color:var(--text)] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/0 to-transparent transition-all duration-500 group-hover:via-[color:var(--gold)]/30" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent" />
    </section>
  );
}
