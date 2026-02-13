"use client";

import { motion } from "framer-motion";
import { testimonials } from "~/content/site";

export function TestimonialsDeck() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[color:var(--gold)]">Referanslar</p>
        <h2 className="font-display text-3xl leading-tight text-[color:var(--emerald)] md:text-5xl">Misafirlerimiz Ne Diyor?</h2>
        <p className="text-sm leading-relaxed text-gray-500 md:text-base">
          Gerçek misafir geri bildirimlerinden derlenen yorumlar ile operasyon kalitemizi şeffaf biçimde paylaşıyoruz.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[1.6rem] border border-gray-100 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-4 flex items-center gap-1 text-[color:var(--gold)]">
              {Array.from({ length: item.rating }).map((_, starIndex) => (
                <span key={`${item.name}-${starIndex}`}>★</span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-600">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-gray-400">{item.route}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
