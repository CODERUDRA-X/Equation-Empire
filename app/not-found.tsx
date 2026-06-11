"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#030712" }}
    >
      {/* Glowing 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span
          className="font-display font-bold text-8xl sm:text-9xl"
          style={{
            background: "linear-gradient(135deg, #6d28d9, #06b6d4)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 30px rgba(109,40,217,0.5))",
          }}
        >
          404
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display text-xl text-stardust mb-2"
      >
        This equation doesn&apos;t exist in our universe
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-comet text-sm mb-8 font-mono"
      >
        P(page | universe) = 0
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <Link
          href="/"
          className="px-6 py-2.5 rounded-xl font-display font-medium text-sm text-white transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #6d28d9, #8b5cf6)",
            boxShadow: "0 0 20px rgba(109,40,217,0.3)",
          }}
        >
          Return Home
        </Link>
        <Link
          href="/universe"
          className="px-6 py-2.5 rounded-xl font-display font-medium text-sm text-aurora transition-all duration-200"
          style={{
            background: "rgba(109,40,217,0.1)",
            border: "1px solid rgba(109,40,217,0.4)",
          }}
        >
          Enter Universe
        </Link>
      </motion.div>
    </div>
  );
}
