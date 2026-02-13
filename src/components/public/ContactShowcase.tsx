"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiClock,
  FiHeadphones,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

type ContactInfo = {
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  email: string;
  address: string;
};

type ContactShowcaseProps = {
  contactInfo: ContactInfo;
  whatsapp: string;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ContactShowcase({ contactInfo, whatsapp }: ContactShowcaseProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      {/* Section header */}
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-(--gold-light)">
          Bize Ulaşın
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-5xl">
          Yolculuğunuz Bir <span className="text-(--gold)">Mesaj</span> Kadar Yakın
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
          Hangi kanaldan ulaşırsanız ulaşın, aynı gün içinde size geri dönüş yapıyoruz.
        </p>
      </div>

      {/* Bento grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid auto-rows-[minmax(160px,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12"
      >
        {/* Phone — large highlight card */}
        <motion.a
          variants={item}
          href={`tel:${contactInfo.phonePrimary.replace(/\s/g, "")}`}
          className="group relative col-span-full overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(196,164,105,0.15),rgba(196,164,105,0.04))] p-6 transition-all hover:border-(--gold)/30 hover:shadow-[0_0_40px_rgba(196,164,105,0.08)] md:col-span-3 lg:col-span-5 lg:row-span-2 lg:p-8"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-(--gold)/5 blur-3xl transition-all group-hover:bg-(--gold)/10" />
          <div className="relative">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--gold)/15 ring-1 ring-(--gold)/20">
              <FiPhone className="h-6 w-6 text-(--gold-light)" />
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-(--gold-light)/70">
              Hemen Arayın
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-white lg:text-3xl">
              {contactInfo.phonePrimary}
            </p>
            <p className="mt-1 text-sm text-white/50">{contactInfo.phoneSecondary}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--gold)/10 px-4 py-2 text-xs font-semibold text-(--gold-light) ring-1 ring-(--gold)/20 transition-all group-hover:bg-(--gold)/20">
              <FiHeadphones className="h-3.5 w-3.5" />
              Danışman Hattı Aktif
            </div>
          </div>
        </motion.a>

        {/* WhatsApp card */}
        <motion.div variants={item} className="col-span-full md:col-span-3 lg:col-span-4">
          <Link
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/15 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(16,185,129,0.03))] p-6 transition-all hover:border-emerald-400/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-500/20">
                <FiMessageCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <FiArrowUpRight className="h-5 w-5 text-emerald-400/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
            </div>
            <div className="mt-4">
              <p className="font-display text-lg font-bold text-white">WhatsApp ile Yazın</p>
              <p className="mt-1 text-sm text-white/50">Hızlı yanıt, kolay iletişim</p>
              <p className="mt-2 text-sm font-medium text-emerald-400">{contactInfo.whatsapp}</p>
            </div>
          </Link>
        </motion.div>

        {/* Working hours — compact pill */}
        <motion.div
          variants={item}
          className="col-span-full flex flex-col justify-center rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:col-span-3 lg:col-span-3"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/8">
            <FiClock className="h-5 w-5 text-white/60" />
          </div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">Çalışma Saatleri</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Pazartesi — Cuma</span>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-400">09:00 — 19:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Cumartesi</span>
              <span className="rounded-full bg-(--gold)/15 px-2.5 py-0.5 text-xs font-bold text-(--gold-light)">10:00 — 17:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Pazar</span>
              <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-bold text-red-400">Kapalı</span>
            </div>
          </div>
        </motion.div>

        {/* Email card */}
        <motion.a
          variants={item}
          href={`mailto:${contactInfo.email}`}
          className="group col-span-full flex items-center gap-5 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:border-white/15 hover:bg-white/[0.05] md:col-span-3 lg:col-span-5"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 ring-1 ring-sky-500/15">
            <FiMail className="h-6 w-6 text-sky-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">E-Posta</p>
            <p className="mt-1 truncate font-display text-lg font-bold text-white">{contactInfo.email}</p>
            <p className="mt-0.5 text-xs text-white/40">Detaylı bilgi talepleriniz için</p>
          </div>
          <FiArrowUpRight className="h-5 w-5 shrink-0 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/50" />
        </motion.a>

        {/* Address — wide card with decorative pattern */}
        <motion.div
          variants={item}
          className="relative col-span-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:col-span-3 lg:col-span-7"
        >
          {/* Decorative concentric arcs */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full border border-white/[0.04]" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-white/[0.04]" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 ring-1 ring-amber-500/15">
              <FiMapPin className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">Merkez Ofis</p>
              <p className="mt-2 text-base leading-relaxed text-white/80">{contactInfo.address}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-white/40">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Hafta içi randevusuz ziyaret edilebilir
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
