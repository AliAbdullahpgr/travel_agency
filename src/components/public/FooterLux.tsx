import Link from "next/link";
import {
  FiArrowUpRight,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";
import { contactInfo, navLinks } from "~/content/site";

export function FooterLux() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[radial-gradient(circle_at_20%_0%,rgba(200,168,78,0.12),transparent_46%),linear-gradient(165deg,rgba(5,26,23,1),rgba(4,35,29,1))] px-4 pb-10 pt-14 text-white md:px-8">
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <section>
          <p className="mb-2 text-[0.65rem] tracking-[0.24em] uppercase text-[color:var(--gold-light)]">
            Şükür Turizm
          </p>
          <h2 className="font-display text-3xl leading-tight">
            Manevi Yolculuğunuzu Sıradan Bir Turdan Ayırıyoruz.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Umre, hac ve kültür turlarında operasyonel gücü yüksek, estetik ve
            planlı bir deneyim tasarımı sunuyoruz.
          </p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <FiMail className="h-4 w-4" />
            {contactInfo.email}
          </a>
        </section>

        {/* Quick links */}
        <section>
          <h3 className="mb-4 text-sm font-semibold tracking-[0.15em] uppercase text-white/60">
            Hızlı Geçiş
          </h3>
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  <FiArrowUpRight className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h3 className="mb-4 text-sm font-semibold tracking-[0.15em] uppercase text-white/60">
            İletişim
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="inline-flex items-center gap-2">
              <FiPhone className="h-4 w-4 text-[color:var(--gold-light)]" />
              {contactInfo.phonePrimary}
            </li>
            <li className="inline-flex items-center gap-2">
              <FiPhone className="h-4 w-4 text-[color:var(--gold-light)]" />
              {contactInfo.phoneSecondary}
            </li>
            <li className="inline-flex items-start gap-2 leading-relaxed">
              <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-light)]" />
              {contactInfo.address}
            </li>
          </ul>
        </section>

        {/* Social & Admin */}
        <section>
          <h3 className="mb-4 text-sm font-semibold tracking-[0.15em] uppercase text-white/60">
            Sosyal & Yönetim
          </h3>
          <div className="space-y-3 text-sm">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/65 transition hover:text-white"
            >
              <FiInstagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/65 transition hover:text-white"
            >
              <FiMessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <div>
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                Yönetim Girişi
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-white/[0.08] pt-6 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Şükür Turizm. Tüm hakları saklıdır.</p>
        <p className="hidden tracking-[0.2em] uppercase md:block">
          Manevi Lüks Seyahat
        </p>
      </div>
    </footer>
  );
}
