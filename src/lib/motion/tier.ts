export type MotionTier = "cinematic" | "adaptive" | "lite";

export const MOTION_TIER_EVENT = "motion-tier-change";

const isMotionTier = (value: string | undefined): value is MotionTier =>
  value === "cinematic" || value === "adaptive" || value === "lite";

export const detectMotionTier = (): MotionTier => {
  if (typeof window === "undefined") {
    return "adaptive";
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    return "lite";
  }

  const isMobileViewport = window.matchMedia("(max-width: 900px)").matches;

  const navWithHints = navigator as Navigator & {
    connection?: {
      saveData?: boolean;
    };
    deviceMemory?: number;
  };

  const saveData = Boolean(navWithHints.connection?.saveData);
  const lowMemory = (navWithHints.deviceMemory ?? 8) <= 4;
  const lowCpu = (navigator.hardwareConcurrency ?? 8) <= 4;

  if (isMobileViewport || saveData || lowMemory || lowCpu) {
    return "adaptive";
  }

  return "cinematic";
};

export const readMotionTierFromDom = (): MotionTier => {
  if (typeof document === "undefined") {
    return "adaptive";
  }

  const current = document.documentElement.dataset.motionTier;
  if (isMotionTier(current)) {
    return current;
  }

  return detectMotionTier();
};

export const applyMotionTier = (tier: MotionTier) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.dataset.motionTier = tier;

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<MotionTier>(MOTION_TIER_EVENT, { detail: tier }));
  }
};
