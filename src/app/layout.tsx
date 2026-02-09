import "~/styles/globals.css";

import { type Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Şükür Turizm | Travel Agency",
  description:
    "Umre, hac ve kültür turları için planlı, güvenilir ve konforlu yolculuklar.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const bodyFont = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
});

const displayFont = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
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
