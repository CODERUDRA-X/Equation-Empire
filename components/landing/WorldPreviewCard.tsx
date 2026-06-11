"use client";

import { motion } from "framer-motion";
import type { EquationWorld } from "@/types/equation";

interface WorldPreviewCardProps {
  world: EquationWorld;
  index: number;
  onClick?: () => void;
}

export default function WorldPreviewCard({
  world,
  index,
  onClick,
}: WorldPreviewCardProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: world.glowColor }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl p-5 overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(17, 24, 39, 0.8)",
          border: `1px solid ${world.primaryColor}25`,
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-20"
          style={{ background: `radial-gradient(circle at top right, ${world.primaryColor}, transparent)` }}
        />

        {/* Icon + title row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{world.icon}</span>
          <div>
            <h3
              className="font-display font-semibold text-base leading-tight"
              style={{ color: world.primaryColor }}
            >
              {world.name}
            </h3>
            <p className="text-asteroid text-xs font-mono mt-0.5">{world.nodes.length} equations</p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-comet text-sm leading-relaxed mb-4">{world.tagline}</p>

        {/* Equation preview */}
        <div
          className="rounded-lg px-3 py-2 font-mono text-xs overflow-hidden"
          style={{
            background: `${world.primaryColor}10`,
            border: `1px solid ${world.primaryColor}20`,
            color: world.primaryColor,
          }}
        >
          <span className="opacity-70">f(x) = </span>
          {world.nodes[0]?.equation?.substring(0, 30)}
          {(world.nodes[0]?.equation?.length ?? 0) > 30 && "…"}
        </div>

        {/* Node count dots */}
        <div className="flex gap-1 mt-3">
          {world.nodes.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-125"
              style={{
                background: i === 0 ? world.primaryColor : `${world.primaryColor}50`,
                transitionDelay: `${i * 30}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
