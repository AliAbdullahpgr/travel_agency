"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, type RefObject } from "react";
import { getGsap } from "~/lib/motion/register-gsap";
import type { MotionTier } from "~/lib/motion/tier";

type HeroRoot = HTMLElement | null;

export const useHeroTimeline = (
  rootRef: RefObject<HeroRoot>,
  tier: MotionTier = "adaptive",
) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion || tier === "lite") {
      return;
    }

    const { gsap } = getGsap();
    const cinematic = tier === "cinematic";

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set("[data-hero-fade]", { opacity: 0, y: cinematic ? 56 : 34 });
      gsap.set("[data-hero-chip]", { opacity: 0, scale: 0.92, y: cinematic ? 28 : 16 });
      gsap.set("[data-hero-panel]", { opacity: 0, y: cinematic ? 44 : 28 });

      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl
        .to("[data-hero-fade]", {
          opacity: 1,
          y: 0,
          duration: cinematic ? 1.05 : 0.74,
          stagger: cinematic ? 0.14 : 0.08,
        })
        .to(
          "[data-hero-chip]",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: cinematic ? 0.72 : 0.52,
            stagger: cinematic ? 0.1 : 0.05,
          },
          cinematic ? "-=0.5" : "-=0.34",
        )
        .to(
          "[data-hero-panel]",
          {
            opacity: 1,
            y: 0,
            duration: cinematic ? 0.8 : 0.54,
          },
          cinematic ? "-=0.62" : "-=0.3",
        );

      mm.add("(min-width: 1024px)", () => {
        gsap.to("[data-hero-parallax='slow']", {
          yPercent: cinematic ? -16 : -9,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: cinematic ? 1 : 0.8,
          },
        });

        gsap.to("[data-hero-parallax='fast']", {
          yPercent: cinematic ? -30 : -14,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: cinematic ? 1.25 : 0.9,
          },
        });

        gsap.to("[data-hero-ribbon]", {
          xPercent: cinematic ? -24 : -14,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: cinematic ? 1 : 0.7,
          },
        });

        if (cinematic) {
          gsap.to("[data-hero-image]", {
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: 1.1,
            },
          });

          gsap.fromTo(
            "[data-hero-scan]",
            { xPercent: -70, opacity: 0.12 },
            {
              xPercent: 72,
              opacity: 0.36,
              duration: 4.6,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            },
          );
        }
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.to("[data-hero-parallax='slow']", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.45,
          },
        });
      });

      const floatTargets = gsap.utils.toArray<HTMLElement>("[data-float]");
      const floatCount = cinematic ? floatTargets.length : Math.min(2, floatTargets.length);

      floatTargets.slice(0, floatCount).forEach((node, index) => {
        gsap.to(node, {
          y: index % 2 === 0 ? (cinematic ? -14 : -8) : cinematic ? 14 : 8,
          rotate: index % 2 === 0 ? (cinematic ? -2.5 : -1.2) : cinematic ? 2.5 : 1.2,
          duration: cinematic ? 3.2 + index : 2.8 + index * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      return () => {
        mm.revert();
      };
    }, root);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, rootRef, tier]);
};
