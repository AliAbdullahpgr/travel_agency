import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PublicShell } from "~/components/public/PublicShell";

export const metadata: Metadata = {
  title: {
    default: "Şükür Turizm | Umre, Hac ve Kültür Turları",
    template: "%s | Şükür Turizm",
  },
  description:
    "Umre, hac ve kültür turlarında güçlü operasyon, estetik deneyim ve güvenli planlama.",
  openGraph: {
    title: "Şükür Turizm",
    description:
      "Umre, hac ve kültür turlarında güçlü operasyon, estetik deneyim ve güvenli planlama.",
    images: ["/hero_image.jpg"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicShell>{children}</PublicShell>;
}
