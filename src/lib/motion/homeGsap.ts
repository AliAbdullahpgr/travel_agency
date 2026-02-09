"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, type RefObject } from "react";
import { getGsap } from "~/lib/motion/register-gsap";
import type { MotionTier } from "~/lib/motion/tier";

type SectionRoot = HTMLElement | null;

export const useHomeSectionReveal = (
  rootRef: RefObject<SectionRoot>,
  tier: MotionTier = "adaptive",
) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion || tier === "lite") return;

    const { gsap } = getGsap();
    const cinematic = tier === "cinematic";

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>("[data-home-reveal]");
      if (reveals.length === 0) return;

      gsap.set(reveals, { opacity: 0, y: cinematic ? 60 : 36 });

      reveals.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: cinematic ? 0.9 : 0.65,
          ease: "power3.out",
          delay: i * (cinematic ? 0.12 : 0.06),
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, rootRef, tier]);
};

export const useParallaxLayer = (
  rootRef: RefObject<SectionRoot>,
  tier: MotionTier = "adaptive",
) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion || tier === "lite") return;

    const { gsap } = getGsap();
    const cinematic = tier === "cinematic";

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-parallax]");

        layers.forEach((layer) => {
          const speed = Number(layer.dataset.parallax ?? 0.15);
          const direction = speed > 0 ? -1 : 1;
          const intensity = Math.abs(speed) * (cinematic ? 100 : 60);

          gsap.to(layer, {
            yPercent: direction * intensity,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: cinematic ? 1.2 : 0.7,
            },
          });
        });
      });

      return () => mm.revert();
    }, root);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, rootRef, tier]);
};

export const useMarquee = (
  rootRef: RefObject<SectionRoot>,
  tier: MotionTier = "adaptive",
) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion || tier === "lite") return;

    const { gsap } = getGsap();
    const cinematic = tier === "cinematic";

    const ctx = gsap.context(() => {
      const tracks = gsap.utils.toArray<HTMLElement>("[data-marquee-track]");

      tracks.forEach((track) => {
        const speed = cinematic ? 40 : 25;
        gsap.to(track, {
          xPercent: -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, rootRef, tier]);
};
