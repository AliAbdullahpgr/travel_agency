"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, type RefObject } from "react";
import { getGsap } from "~/lib/motion/register-gsap";
import type { MotionTier } from "~/lib/motion/tier";

type RevealRoot = HTMLElement | null;

type RevealOptions = {
  selector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  tier?: MotionTier;
};

export const useScrollReveal = (
  rootRef: RefObject<RevealRoot>,
  {
    selector = "[data-reveal]",
    y = 36,
    duration = 0.75,
    stagger = 0.09,
    start = "top 82%",
    tier = "adaptive",
  }: RevealOptions = {},
) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion || tier === "lite") {
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();

    const resolvedDuration = tier === "cinematic" ? duration : duration * 0.72;
    const resolvedStagger = tier === "cinematic" ? stagger : stagger * 0.6;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (targets.length === 0) {
        return;
      }

      gsap.set(targets, { opacity: 0, y });

      if (targets.length > 2) {
        ScrollTrigger.batch(targets, {
          start,
          once: true,
          onEnter: (batch: Element[]) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: resolvedDuration,
              stagger: resolvedStagger,
              ease: "power3.out",
              overwrite: true,
            });
          },
        });

        return;
      }

      targets.forEach((target, index) => {
        gsap.to(target, {
          opacity: 1,
          y: 0,
          duration: resolvedDuration,
          ease: "power3.out",
          delay: index * resolvedStagger,
          scrollTrigger: {
            trigger: target,
            start,
            once: true,
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [duration, reduceMotion, rootRef, selector, stagger, start, tier, y]);
};
