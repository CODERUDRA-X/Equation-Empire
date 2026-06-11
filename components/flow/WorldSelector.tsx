"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { EquationWorld, WorldId } from "@/types/equation";

interface WorldSelectorProps {
  worlds: EquationWorld[];
  activeWorld: WorldId | "all";
  onSelect: (id: WorldId | "all") => void;
}

export default function WorldSelector({
  worlds,
  activeWorld,
  onSelect,
}: WorldSelectorProps) {
  return (
    <div className="flex flex-col gap-1 p-2">
      {/* All worlds button */}
      <button
        onClick={() => onSelect("all")}
        className="group relative w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 font-display text-sm font-medium"
        style={{
          background: activeWorld === "all" ? "rgba(109,40,217,0.2)" : "transparent",
          border: activeWorld === "all" ? "1px solid rgba(109,40,217,0.5)" : "1px solid transparent",
          color: activeWorld === "all" ? "#a78bfa" : "#94a3b8",
        }}
      >
        <span className="flex items-center gap-2">
          <span className="text-base">🌌</span>
          <span>All Worlds</span>
        </span>
        {activeWorld === "all" && (
          <motion.div
            layoutId="world-indicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
            style={{ background: "#a78bfa" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>

      {/* Divider */}
      <div className="my-1 h-px bg-gradient-to-r from-transparent via-nova/20 to-transparent" />

      {/* World buttons */}
      {worlds.map((world) => {
        const isActive = activeWorld === world.id;
        return (
          <button
            key={world.id}
            onClick={() => onSelect(world.id)}
            className="group relative w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 font-display text-sm"
            style={{
              background: isActive ? `${world.primaryColor}18` : "transparent",
              border: isActive ? `1px solid ${world.primaryColor}45` : "1px solid transparent",
              color: isActive ? world.primaryColor : "#94a3b8",
            }}
          >
            <span className="flex items-center gap-2">
              <span className="text-base leading-none">{world.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{world.name}</div>
                <div
                  className="text-[10px] mt-0.5 truncate opacity-60"
                  style={{ color: isActive ? world.primaryColor : "#64748b" }}
                >
                  {world.nodes.length} nodes
                </div>
              </div>
            </span>
            {isActive && (
              <motion.div
                layoutId="world-indicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
                style={{ background: world.primaryColor }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
