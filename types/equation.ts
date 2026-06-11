// ============================================================
//  types/equation.ts
//  Core domain types for Equation Empire
// ============================================================

export type WorldId =
  | "fractal"
  | "butterfly"
  | "bayes"
  | "gravity"
  | "waves"
  | "probability"
  | "geometry";

export type NodeCategory =
  | "equation"    // The main equation
  | "concept"     // Underlying mathematical concept
  | "application" // Real-world application
  | "theory"      // Related mathematical theory
  | "constant";   // Notable constants / parameters

export interface EquationNode {
  id: string;
  worldId: WorldId;
  category: NodeCategory;
  title: string;
  equation: string;        // LaTeX-style string for display
  description: string;
  tags: string[];
  position: { x: number; y: number };
  glowColor: string;       // CSS color for node accent
}

export interface EquationEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
  type?: "default" | "smoothstep" | "step" | "straight";
}

export interface EquationWorld {
  id: WorldId;
  name: string;
  tagline: string;
  description: string;
  icon: string;            // Emoji icon
  primaryColor: string;    // CSS hex color
  secondaryColor: string;
  glowColor: string;       // rgba glow
  nodes: EquationNode[];
  edges: EquationEdge[];
}

// React Flow node data shape
export interface EquationNodeData {
  world: WorldId;
  category: NodeCategory;
  title: string;
  equation: string;
  description: string;
  tags: string[];
  glowColor: string;
  primaryColor: string;
}
