"use client";

import { motion } from "framer-motion";

interface FloatingEquationProps {
  equation: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  color?: string;
}

export default function FloatingEquation({
  equation,
  top,
  left,
  right,
  bottom,
  delay = 0,
  color = "#8b5cf6",
}: FloatingEquationProps) {
  return (
    <motion.div
      className="absolute font-mono text-sm px-3 py-1.5 rounded-lg pointer-events-none select-none"
      style={{
        top,
        left,
        right,
        bottom,
        color,
        background: `${color}14`,
        border: `1px solid ${color}30`,
        textShadow: `0 0 12px ${color}`,
        boxShadow: `0 0 20px ${color}20`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 0.7, 0.7, 0],
        y: [20, 0, 0, -20],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      }}
    >
      {equation}
    </motion.div>
  );
}
