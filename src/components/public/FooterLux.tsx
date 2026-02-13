import Link from "next/link";
import {
  FiArrowUpRight,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

type FooterNavLink = {
  href: string;
  label: string;
};

type FooterContactInfo = {
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  email: string;
  address: string;
};

type FooterContent = {
  eyebrow: string;
  headline: string;
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialTitle: string;
  adminLabel: string;
  copyrightText: string;
  mottoText: string;
};

type FooterLuxProps = {
  navLinks: FooterNavLink[];
  contactInfo: FooterContactInfo;
  footer: FooterContent;
  socialUrls: {
    instagram: string;
    whatsapp: string;
  };
};

export function FooterLux({ navLinks, contactInfo, footer, socialUrls }: FooterLuxProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[radial-gradient(circle_at_20%_0%,rgba(200,168,78,0.12),transparent_46%),linear-gradient(165deg,rgba(5,26,23,1),rgba(4,35,29,1))] px-4 pb-8 pt-16 text-white md:px-8 md:pb-10 md:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <section className="space-y-5">
          <div>
            <span className="block font-display text-2xl font-bold leading-tight text-white">
              {footer.eyebrow}
            </span>
            <span className="mt-1 block text-[0.7rem] font-medium tracking-[0.2em] text-(--gold-light) uppercase">
              Umre &bull; Hac &bull; Kültür
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">{footer.description}</p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/75 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
          >
            <FiMail className="h-4 w-4" />
            {contactInfo.email}
          </a>
        </section>

        {/* Quick links */}
        <section>
          <h3 className="mb-5 text-xs font-semibold tracking-[0.18em] uppercase text-white/40">
            {footer.quickLinksTitle}
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                >
                  <FiArrowUpRight className="h-3.5 w-3.5 text-white/30" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact info */}
        <section>
          <h3 className="mb-5 text-xs font-semibold tracking-[0.18em] uppercase text-white/40">
            {footer.contactTitle}
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <FiPhone className="h-4 w-4 shrink-0 text-(--gold-light)" />
              {contactInfo.phonePrimary}
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="h-4 w-4 shrink-0 text-(--gold-light)" />
              {contactInfo.phoneSecondary}
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-(--gold-light)" />
              {contactInfo.address}
            </li>
          </ul>
        </section>

        {/* Social & admin */}
        <section>
          <h3 className="mb-5 text-xs font-semibold tracking-[0.18em] uppercase text-white/40">
            {footer.socialTitle}
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={socialUrls.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 transition hover:text-white"
            >
              <FiInstagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={socialUrls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 transition hover:text-white"
            >
              <FiMessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <div className="pt-2">
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-white/35 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white/60"
              >
                {footer.adminLabel}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-white/[0.06] pt-6 text-xs text-white/30">
        <p>
          &copy; {new Date().getFullYear()} {footer.copyrightText}
        </p>
        <p className="hidden tracking-[0.2em] uppercase md:block">{footer.mottoText}</p>
      </div>
    </footer>
  );
}
