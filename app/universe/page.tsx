import type { Metadata } from "next";
import UniverseClient from "./UniverseClient";

export const metadata: Metadata = {
  title: "Universe — Equation Empire",
  description: "Explore the interactive equation universe. Drag, zoom, and discover connections.",
};

export default function UniversePage() {
  return <UniverseClient />;
}
