"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { contactInfo, navLinks } from "~/content/site";

const isActiveLink = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export function MegaNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      {/* Top contact bar */}
      <div className="hidden border-b border-gray-100 bg-gray-50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-gray-500 md:px-8">
          <p className="tracking-wide">Şükür Turizm | Manevi Yolculuk Tasarımı</p>
          <a
            href={`tel:${contactInfo.phonePrimary.replaceAll(" ", "")}`}
            className="inline-flex items-center gap-1.5 font-medium text-[color:var(--emerald)] transition hover:text-[color:var(--emerald-light)]"
          >
            <FiPhone className="h-3 w-3" />
            {contactInfo.phonePrimary}
          </a>
        </div>
      </div>

      {/* Main nav row */}
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
              <Image src="/logo.png" alt="Şükür Turizm" fill className="object-contain p-0.5" priority />
            </span>
            <span className="hidden md:block">
              <span className="block font-display text-lg font-bold leading-tight text-gray-900">
                Şükür Turizm
              </span>
              <span className="block text-[0.65rem] font-medium tracking-[0.15em] text-[color:var(--emerald)] uppercase">
                Umre &bull; Hac &bull; Kültür
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => {
              const active = isActiveLink(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                    active
                      ? "text-[color:var(--emerald)]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[color:var(--emerald)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactInfo.phoneSecondary.replaceAll(" ", "")}`}
              className="hidden items-center gap-2 rounded-full bg-[color:var(--emerald)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--emerald-light)] md:inline-flex"
            >
              <FiPhone className="h-3.5 w-3.5" />
              Hemen Ara
            </a>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 lg:hidden"
              aria-label="Mobil menüyü aç"
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden"
          >
            <nav className="space-y-1">
              {navLinks.map((item) => {
                const active = isActiveLink(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-emerald-50 text-[color:var(--emerald)]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 border-t border-gray-100 pt-3">
              <a
                href={`tel:${contactInfo.phoneSecondary.replaceAll(" ", "")}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--emerald)] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <FiPhone className="h-4 w-4" />
                {contactInfo.phoneSecondary}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
