import type { ReactNode } from "react";
import { FloatingContactRail } from "~/components/public/FloatingContactRail";
import { MegaNav } from "~/components/public/MegaNav";
import { FooterLux } from "~/components/public/FooterLux";

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MegaNav />
      <FloatingContactRail />
      <main>{children}</main>
      <FooterLux />
    </div>
  );
}
