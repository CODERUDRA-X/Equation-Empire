"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import StarField from "@/components/ui/StarField";
import GlowButton from "@/components/ui/GlowButton";
import FloatingEquation from "@/components/landing/FloatingEquation";
import WorldPreviewCard from "@/components/landing/WorldPreviewCard";
import { EQUATION_WORLDS } from "@/lib/worlds";

// Equations floating in the background of the hero
const AMBIENT_EQUATIONS = [
  { eq: "E = mc²",                 top: "15%", left: "8%",  delay: 0,   color: "#f59e0b" },
  { eq: "∇²ψ + k²ψ = 0",          top: "25%", right: "6%", delay: 1.5, color: "#06b6d4" },
  { eq: "P(A|B) = P(B|A)P(A)/P(B)", top: "70%", left: "5%",  delay: 3,   color: "#8b5cf6" },
  { eq: "z_{n+1} = z_n² + c",      top: "60%", right: "8%", delay: 2,   color: "#ec4899" },
  { eq: "G_μν = 8πG/c⁴ T_μν",     top: "40%", left: "3%",  delay: 4,   color: "#f97316" },
  { eq: "H = -Σpᵢlog pᵢ",          top: "80%", right: "5%", delay: 2.5, color: "#34d399" },
  { eq: "e^{iπ} + 1 = 0",          top: "10%", right: "25%",delay: 1,   color: "#a78bfa" },
];

export default function LandingClient() {
  const router = useRouter();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "#030712" }}
    >
      {/* Animated star field */}
      <StarField starCount={220} speed={0.3} />

      {/* Deep nebula radial gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(109,40,217,0.12) 0%, transparent 100%), " +
            "radial-gradient(ellipse 40% 40% at 80% 60%, rgba(6,182,212,0.08) 0%, transparent 100%)",
        }}
      />

      {/* Ambient floating equations */}
      {AMBIENT_EQUATIONS.map((item, i) => (
        <FloatingEquation
          key={i}
          equation={item.eq}
          top={item.top}
          left={"left" in item ? (item as { left: string }).left : undefined}
          right={"right" in item ? (item as { right: string }).right : undefined}
          delay={item.delay}
          color={item.color}
        />
      ))}

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase"
            style={{
              background: "rgba(109, 40, 217, 0.12)",
              border: "1px solid rgba(109, 40, 217, 0.4)",
              color: "#a78bfa",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#a78bfa" }}
            />
            The Mathematical Universe
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-5"
        >
          <h1 className="font-display font-bold tracking-tight leading-none">
            <span
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #06b6d4 70%, #f59e0b 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animation: "shimmer 6s linear infinite",
              }}
            >
              Equation
            </span>
            <span
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent mt-1"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animation: "shimmer 6s linear infinite reverse",
              }}
            >
              Empire
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-comet text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 font-body"
        >
          Every mathematical equation creates an{" "}
          <span style={{ color: "#a78bfa" }}>interactive universe</span>.
          Explore a galaxy of connected equations — drag, zoom, and discover the hidden
          fabric of mathematics.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <GlowButton
            href="/universe"
            variant="primary"
            size="lg"
            className="min-w-52"
          >
            <span>Enter the Universe</span>
            <span className="text-lg">→</span>
          </GlowButton>
          <GlowButton
            href="#worlds"
            variant="secondary"
            size="lg"
            className="min-w-52"
          >
            Explore Worlds
          </GlowButton>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-asteroid text-xs font-mono tracking-wider uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, #6d28d9, transparent)" }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DIVIDER — animated rule
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 flex items-center gap-6 px-12 py-4">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(109,40,217,0.3))" }} />
        <span className="font-mono text-xs text-asteroid tracking-widest uppercase">7 Worlds</span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(109,40,217,0.3))" }} />
      </div>

      {/* ═══════════════════════════════════════════════════
          WORLDS GRID
      ═══════════════════════════════════════════════════ */}
      <section id="worlds" className="relative z-10 px-6 pb-24 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stardust mb-3">
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Seven Worlds
            </span>
          </h2>
          <p className="text-comet max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Each world is a galaxy of interconnected equations, concepts, and applications.
            Click any world to enter its universe.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {EQUATION_WORLDS.map((world, i) => (
            <WorldPreviewCard
              key={world.id}
              world={world}
              index={i}
              onClick={() => router.push(`/universe?world=${world.id}`)}
            />
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <GlowButton href="/universe" variant="primary" size="lg">
            <span>🌌</span>
            <span>Open All Worlds</span>
          </GlowButton>
          <p className="text-asteroid text-xs font-mono mt-3">
            {EQUATION_WORLDS.reduce((a, w) => a + w.nodes.length, 0)} equations ·{" "}
            {EQUATION_WORLDS.reduce((a, w) => a + w.edges.length, 0)} connections
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 border-t py-6 px-8 flex items-center justify-between"
        style={{ borderColor: "rgba(109,40,217,0.15)" }}
      >
        <span className="font-display text-sm text-asteroid">Equation Empire</span>
        <span className="font-mono text-xs text-asteroid">
          Where mathematics meets the cosmos
        </span>
      </footer>
    </div>
  );
}
