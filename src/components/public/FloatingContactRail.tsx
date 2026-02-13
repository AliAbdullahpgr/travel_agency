import { FiMessageCircle, FiPhoneCall } from "react-icons/fi";

type FloatingContactRailProps = {
  phone: string;
  whatsapp: string;
  callLabel: string;
  whatsappLabel: string;
};

export function FloatingContactRail({
  phone,
  whatsapp,
  callLabel,
  whatsappLabel,
}: FloatingContactRailProps) {
  const phoneHref = `tel:${phone.replaceAll(" ", "")}`;
  const whatsappHref = `https://wa.me/${whatsapp.replace("+", "")}`;

  return (
    <>
      <aside className="fixed bottom-24 right-4 z-40 hidden flex-col gap-3 md:flex">
        <a href={phoneHref} className="contact-rail-btn" aria-label="Telefonla ara">
          <FiPhoneCall className="h-5 w-5" />
          <span>{callLabel}</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-rail-btn contact-rail-btn--wa"
          aria-label="WhatsApp ile iletişim"
        >
          <FiMessageCircle className="h-5 w-5" />
          <span>{whatsappLabel}</span>
        </a>
      </aside>

      <div className="fixed inset-x-0 bottom-3 z-40 px-4 md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/20 bg-[rgba(6,33,28,0.92)] p-2 backdrop-blur-md">
          <a href={phoneHref} className="flex-1 rounded-xl bg-white/10 px-3 py-2 text-center text-xs font-semibold text-white">
            {callLabel}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-[#25D366] px-3 py-2 text-center text-xs font-semibold text-white"
          >
            {whatsappLabel}
          </a>
        </div>
      </div>
    </>
  );
}

