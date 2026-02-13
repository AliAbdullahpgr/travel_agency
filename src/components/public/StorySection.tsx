"use client";

import { useRef } from "react";
import { FiCompass, FiEye, FiPhone, FiShield } from "react-icons/fi";
import { storyContent } from "~/content/homepage";
import { useMotionTier } from "~/lib/motion/use-motion-tier";
import { useScrollReveal } from "~/lib/motion/use-scroll-reveal";
import { useParallaxLayer } from "~/lib/motion/homeGsap";

type StorySectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: Array<{ title: string; description: string }>;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: FiShield,
  compass: FiCompass,
  eye: FiEye,
  phone: FiPhone,
};

export function StorySection({ eyebrow, title, intro, items }: StorySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const motionTier = useMotionTier();

  useScrollReveal(sectionRef, { tier: motionTier });
  useParallaxLayer(sectionRef, motionTier);

  const resolvedEyebrow = eyebrow ?? storyContent.eyebrow;
  const resolvedTitle = title ?? storyContent.title;
  const resolvedIntro = intro ?? storyContent.intro;
  const resolvedItems =
    items ??
    storyContent.values.map((v) => ({
      title: v.title,
      description: v.description,
      icon: v.icon,
    }));

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 md:px-8 md:py-24">
      {/* Parallax geometric background */}
      <div
        data-parallax="0.12"
        className="pointer-events-none absolute inset-[-15%_0] z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 15deg, rgba(200,168,78,0.15) 15deg 15.5deg, transparent 15.5deg 30deg)",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10">
        <div data-reveal className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.26em] uppercase text-[color:var(--gold)]">
            <span className="inline-block h-px w-6 bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
            {resolvedEyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight text-[color:var(--emerald)] whitespace-pre-line md:text-5xl">
            {resolvedTitle}
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 md:text-base">
            {resolvedIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resolvedItems.map((item, index) => {
            const iconKey = "icon" in item ? (item as { icon: string }).icon : undefined;
            const Icon = iconKey ? iconMap[iconKey] : undefined;

            return (
              <article
                key={item.title}
                data-reveal
                className="group relative overflow-hidden rounded-[1.8rem] border border-gray-100 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-all duration-350 hover:border-[color:var(--gold)]/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              >
                {/* Glow */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--gold)]/[0.08] blur-[2rem] transition-transform duration-500 group-hover:scale-150" />

                {/* Icon */}
                {Icon && (
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--emerald)]/15 bg-[color:var(--emerald)]/[0.06]">
                    <Icon className="h-5 w-5 text-[color:var(--emerald)]" />
                  </div>
                )}

                <p className="relative text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[color:var(--gold)]">
                  {`0${index + 1}`}
                </p>
                <h3 className="relative mt-2 font-display text-xl text-gray-900 md:text-2xl">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
