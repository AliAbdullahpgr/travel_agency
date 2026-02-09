"use client";

import { useEffect, useState } from "react";
import { MOTION_TIER_EVENT, type MotionTier, readMotionTierFromDom } from "~/lib/motion/tier";

export const useMotionTier = () => {
  const [tier, setTier] = useState<MotionTier>("adaptive");

  useEffect(() => {
    const updateFromDom = () => {
      setTier(readMotionTierFromDom());
    };

    updateFromDom();

    const handleTierEvent = (event: Event) => {
      const custom = event as CustomEvent<MotionTier>;

      if (custom.detail) {
        setTier(custom.detail);
        return;
      }

      updateFromDom();
    };

    window.addEventListener(MOTION_TIER_EVENT, handleTierEvent);

    return () => {
      window.removeEventListener(MOTION_TIER_EVENT, handleTierEvent);
    };
  }, []);

  return tier;
};
