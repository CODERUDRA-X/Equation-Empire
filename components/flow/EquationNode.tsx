"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import type { EquationNodeData } from "@/types/equation";

const CATEGORY_BADGES: Record<string, { label: string; color: string }> = {
  equation:    { label: "EQ",  color: "#06b6d4" },
  concept:     { label: "CON", color: "#a78bfa" },
  application: { label: "APP", color: "#34d399" },
  theory:      { label: "THE", color: "#f59e0b" },
  constant:    { label: "CST", color: "#ec4899" },
};

function EquationNode({ data, selected }: NodeProps) {
  const nodeData = data as unknown as EquationNodeData;
  const badge = CATEGORY_BADGES[nodeData.category] ?? CATEGORY_BADGES.equation;
  const glow = nodeData.glowColor ?? nodeData.primaryColor ?? "#8b5cf6";

  return (
    <motion.div
      className="equation-node-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      style={{ width: 220 }}
    >
      {/* Handles */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: glow,
          border: `2px solid ${glow}`,
          width: 8,
          height: 8,
          top: -4,
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: glow,
          border: `2px solid ${glow}`,
          width: 8,
          height: 8,
          bottom: -4,
        }}
      />

      {/* Card face */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "rgba(13, 15, 26, 0.95)",
          border: `1px solid ${glow}40`,
          boxShadow: selected
            ? `0 0 0 2px ${glow}, 0 0 30px ${glow}50, 0 0 60px ${glow}20`
            : `0 0 20px ${glow}20, 0 4px 6px rgba(0,0,0,0.4)`,
          transition: "box-shadow 0.2s ease",
        }}
      >
        {/* Top color bar */}
        <div
          className="h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${glow}, transparent)` }}
        />

        {/* Header */}
        <div className="flex items-start justify-between px-3 pt-3 pb-2 gap-2">
          <h3
            className="font-display font-semibold text-sm leading-tight text-stardust flex-1"
            style={{ textShadow: `0 0 8px ${glow}50` }}
          >
            {nodeData.title}
          </h3>
          <span
            className="flex-none font-mono text-[9px] font-bold px-1.5 py-0.5 rounded"
            style={{
              color: badge.color,
              background: `${badge.color}20`,
              border: `1px solid ${badge.color}40`,
            }}
          >
            {badge.label}
          </span>
        </div>

        {/* Equation display */}
        <div
          className="mx-3 mb-2 px-2 py-2 rounded-lg text-center"
          style={{
            background: `${glow}10`,
            border: `1px solid ${glow}25`,
          }}
        >
          <code
            className="font-mono text-xs leading-relaxed block"
            style={{ color: glow, textShadow: `0 0 10px ${glow}80` }}
          >
            {nodeData.equation}
          </code>
        </div>

        {/* Description */}
        <p className="px-3 pb-3 text-comet text-[11px] leading-relaxed line-clamp-2">
          {nodeData.description}
        </p>

        {/* Tags */}
        <div className="px-3 pb-3 flex flex-wrap gap-1">
          {nodeData.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-1.5 py-0.5 rounded font-mono text-asteroid"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom glow line */}
        <div
          className="h-px w-full opacity-30"
          style={{ background: `linear-gradient(90deg, transparent, ${glow}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default memo(EquationNode);
