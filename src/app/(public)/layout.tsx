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
    images: ["https://qd24qmfc7c.ufs.sh/f/VJyxt3BRz7oij1O9m8p7PW4LYegd0nuQV51COzZrEAwR3tam"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicShell>{children}</PublicShell>;
}
