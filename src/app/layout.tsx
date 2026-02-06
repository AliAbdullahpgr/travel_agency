import "~/styles/globals.css";

import { type Metadata } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Vuslat Turizm | Travel Agency",
  description:
    "Umre, hac ve kültür turları için planlı, güvenilir ve konforlu yolculuklar.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
