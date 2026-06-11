import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Equation Empire — Every Equation is a Universe",
};

export default function HomePage() {
  return <LandingClient />;
}
