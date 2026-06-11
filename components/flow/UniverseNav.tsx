"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface UniverseNavProps {
  title?: string;
}

export default function UniverseNav({ title = "Equation Empire" }: UniverseNavProps) {
  return (
    <nav
      className="flex items-center justify-between px-4 h-14 shrink-0"
      style={{
        background: "rgba(3, 7, 18, 0.95)",
        borderBottom: "1px solid rgba(109, 40, 217, 0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <motion.div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
          style={{
            background: "linear-gradient(135deg, #6d28d9, #06b6d4)",
            boxShadow: "0 0 15px rgba(109,40,217,0.4)",
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          ∑
        </motion.div>
        <span className="font-display font-semibold text-sm text-stardust group-hover:text-white transition-colors">
          {title}
        </span>
      </Link>

      {/* Center hint */}
      <div className="hidden md:flex items-center gap-6 text-xs text-asteroid font-mono">
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 rounded bg-cosmos border border-nova/20 text-comet">drag</kbd>
          <span>move nodes</span>
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 rounded bg-cosmos border border-nova/20 text-comet">scroll</kbd>
          <span>zoom</span>
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 rounded bg-cosmos border border-nova/20 text-comet">space+drag</kbd>
          <span>pan</span>
        </span>
      </div>

      {/* Right pill */}
      <div
        className="flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs"
        style={{
          background: "rgba(6, 182, 212, 0.08)",
          border: "1px solid rgba(6, 182, 212, 0.2)",
          color: "#06b6d4",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "#06b6d4" }}
        />
        <span>LIVE</span>
      </div>
    </nav>
  );
}
