"use client";

import dynamic from "next/dynamic";
import UniverseNav from "@/components/flow/UniverseNav";

// Dynamic import to avoid SSR issues with React Flow
const UniverseGraph = dynamic(
  () => import("@/components/flow/UniverseGraph"),
  {
    ssr: false,
    loading: () => (
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          {/* Pulsing rings */}
          <div className="relative w-16 h-16">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-nova/40 animate-ping"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: "1.5s" }}
              />
            ))}
            <div
              className="absolute inset-4 rounded-full"
              style={{ background: "radial-gradient(circle, #8b5cf6, #06b6d4)" }}
            />
          </div>
          <p className="font-mono text-sm text-comet animate-pulse">
            Initialising the Universe…
          </p>
        </div>
      </div>
    ),
  }
);

export default function UniverseClient() {
  return (
    <div className="universe-layout">
      <UniverseNav />
      <div className="relative overflow-hidden">
        <UniverseGraph />
      </div>
    </div>
  );
}
