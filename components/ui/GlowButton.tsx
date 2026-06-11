"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide rounded-xl overflow-hidden transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pulsar";

  const variants = {
    primary: cn(
      "bg-gradient-to-r from-quasar to-nova text-white",
      "shadow-glow-sm hover:shadow-glow-md",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-pulsar/20 before:to-nova/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
    ),
    secondary: cn(
      "bg-cosmos/80 border border-nova/40 text-stardust",
      "hover:border-pulsar/60 hover:text-white hover:shadow-glow-sm"
    ),
    ghost: cn(
      "text-aurora hover:text-pulsar border border-transparent hover:border-nova/30"
    ),
  };

  const sizes = {
    sm:  "px-4 py-2 text-sm",
    md:  "px-6 py-3 text-base",
    lg:  "px-10 py-4 text-lg",
  };

  const buttonClasses = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonClasses, disabled && "opacity-50 cursor-not-allowed")}
      whileHover={disabled ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {inner}
    </motion.button>
  );
}
