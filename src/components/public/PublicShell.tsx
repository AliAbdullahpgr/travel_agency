import type { ReactNode } from "react";
import { FloatingContactRail } from "~/components/public/FloatingContactRail";
import { MegaNav } from "~/components/public/MegaNav";
import { FooterLux } from "~/components/public/FooterLux";
import { getSiteShellContent } from "~/server/cms/sections";

export async function PublicShell({ children }: { children: ReactNode }) {
  const shell = await getSiteShellContent();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MegaNav
        brandName={shell.brandName}
        topBarText={shell.topBarText}
        navLinks={shell.navLinks}
        contactInfo={{
          phonePrimary: shell.contactInfo.phonePrimary,
          phoneSecondary: shell.contactInfo.phoneSecondary,
        }}
        callLabel={shell.contactRail.callLabel}
      />
      <FloatingContactRail
        phone={shell.contactInfo.phoneSecondary}
        whatsapp={shell.contactInfo.whatsapp}
        callLabel={shell.contactRail.callLabel}
        whatsappLabel={shell.contactRail.whatsappLabel}
      />
      <main>{children}</main>
      <FooterLux
        navLinks={shell.navLinks}
        contactInfo={shell.contactInfo}
        footer={shell.footer}
        socialUrls={shell.socialUrls}
      />
    </div>
  );
}
