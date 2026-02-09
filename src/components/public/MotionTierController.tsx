"use client";

import { useEffect } from "react";
import { applyMotionTier, detectMotionTier } from "~/lib/motion/tier";

export function MotionTierController() {
  useEffect(() => {
    const updateTier = () => {
      applyMotionTier(detectMotionTier());
    };

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 900px)");

    updateTier();

    reducedMotionQuery.addEventListener("change", updateTier);
    mobileQuery.addEventListener("change", updateTier);
    window.addEventListener("resize", updateTier, { passive: true });

    return () => {
      reducedMotionQuery.removeEventListener("change", updateTier);
      mobileQuery.removeEventListener("change", updateTier);
      window.removeEventListener("resize", updateTier);
    };
  }, []);

  return null;
}
