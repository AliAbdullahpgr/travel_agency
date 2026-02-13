"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronDown, FiPhoneCall } from "react-icons/fi";
import { contactInfo, landingFaqs } from "~/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaPrompt?: string;
  ctaLabel?: string;
  faqs?: FaqItem[];
  phone?: string;
};

function AccordionItem({
  item,
  index,
  isOpen,
  toggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease }}
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-[color:var(--emerald)]/20 bg-white shadow-lg shadow-[color:var(--emerald)]/[0.04]"
          : "border-gray-200/80 bg-white hover:border-[color:var(--emerald)]/15"
      }`}
    >
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left transition"
        aria-expanded={isOpen}
        aria-label={`Soru ${index + 1}: ${item.question}`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors duration-300 ${
            isOpen ? "bg-[color:var(--emerald)] text-white" : "bg-[color:var(--sand)] text-[color:var(--emerald)]"
          }`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 text-base font-semibold text-[color:var(--obsidian)] md:text-lg">{item.question}</span>

        <FiChevronDown
          className={`h-5 w-5 shrink-0 text-[color:var(--emerald)]/60 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="border-t border-gray-100 px-6 pb-5 pt-4">
              <p className="pl-12 text-sm leading-relaxed text-gray-600 md:text-base">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection({
  eyebrow = "Sıkça Sorulan Sorular",
  title = "Merak Ettikleriniz",
  description = "Turlarımız ve hizmetlerimiz hakkında en çok sorulan soruların yanıtlarını burada bulabilirsiniz.",
  ctaPrompt = "Sorunuzun yanıtını bulamadınız mı?",
  ctaLabel = "Bizi Arayın",
  faqs = landingFaqs,
  phone = contactInfo.phonePrimary,
}: FaqSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[color:var(--cream)] px-4 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-[color:var(--gold)]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-[color:var(--brand)]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--emerald)]/10 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-[color:var(--gold)]">{eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight text-[color:var(--emerald)] md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">{description}</p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={`${faq.question}-${i}`} item={faq} index={i} isOpen={openIndex === i} toggle={() => toggle(i)} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">{ctaPrompt}</p>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[color:var(--emerald-light)] hover:shadow-xl hover:-translate-y-0.5"
          >
            <FiPhoneCall className="h-4 w-4" />
            {ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

