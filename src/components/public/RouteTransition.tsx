"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useMotionTier } from "~/lib/motion/use-motion-tier";

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const motionTier = useMotionTier();
  const cinematic = motionTier === "cinematic";

  if (reduceMotion || motionTier === "lite") {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: cinematic ? 30 : 16, filter: cinematic ? "blur(6px)" : "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: cinematic ? -24 : -12, filter: cinematic ? "blur(6px)" : "blur(2px)" }}
        transition={{
          duration: cinematic ? 0.52 : 0.32,
          ease: cinematic ? [0.22, 1, 0.36, 1] : "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
