"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, type RefObject } from "react";
import { getGsap } from "~/lib/motion/register-gsap";
import type { MotionTier } from "~/lib/motion/tier";

type CountRoot = HTMLElement | null;

type CountOptions = {
  selector?: string;
  duration?: number;
  start?: string;
  tier?: MotionTier;
};

export const useCountUpOnView = (
  rootRef: RefObject<CountRoot>,
  {
    selector = "[data-count-to]",
    duration = 1.8,
    start = "top 80%",
    tier = "adaptive",
  }: CountOptions = {},
) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const { gsap } = getGsap();
    const formatter = new Intl.NumberFormat("tr-TR");
    const shouldAnimate = !reduceMotion && tier !== "lite";
    const resolvedDuration = tier === "cinematic" ? duration : duration * 0.7;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(selector);

      nodes.forEach((node) => {
        const raw = node.dataset.countTo;
        const endValue = Number(raw ?? 0);

        if (!Number.isFinite(endValue)) {
          return;
        }

        if (!shouldAnimate) {
          node.textContent = formatter.format(endValue);
          return;
        }

        const counter = { value: 0 };

        gsap.to(counter, {
          value: endValue,
          duration: resolvedDuration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start,
            once: true,
          },
          onUpdate: () => {
            node.textContent = formatter.format(Math.round(counter.value));
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [duration, reduceMotion, rootRef, selector, start, tier]);
};
