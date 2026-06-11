# 🌌 Equation Empire

> Every mathematical equation creates an interactive universe.

A stunning interactive exploration of mathematical equations — built with Next.js 15, React Flow, Framer Motion, and Tailwind CSS.
view.png
---

## ✨ Features

- **Interactive graph universe** — Drag, zoom, and pan through connected equation nodes
- **7 mathematical worlds** — Fractal, Butterfly, Bayes, Gravity, Waves, Probability, Geometry
- **42 equation nodes** — Each with title, equation, description, tags, and category
- **Animated star-field** — Canvas-based procedural star field with parallax motion
- **Futuristic dark-space theme** — Custom design tokens, glow effects, and micro-animations
- **World selector sidebar** — Filter the universe to a single world with animated transitions
- **Node detail panel** — Click any node for an expanded information overlay
- **Responsive design** — Accessible and responsive down to mobile

---

## 🗂 Project Structure

```
equation-empire/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Landing page (server component)
│   ├── LandingClient.tsx       # Landing page interactive content
│   ├── globals.css             # Global styles, React Flow overrides
│   ├── not-found.tsx           # Custom 404 page
│   └── universe/
│       ├── page.tsx            # Universe page (server component)
│       └── UniverseClient.tsx  # Universe page with dynamic import
│
├── components/
│   ├── ui/
│   │   ├── StarField.tsx       # Animated canvas star field
│   │   ├── GlowButton.tsx      # Reusable CTA button with glow
│   │   └── index.ts
│   ├── landing/
│   │   ├── FloatingEquation.tsx  # Ambient floating equation pills
│   │   ├── WorldPreviewCard.tsx  # World cards in the landing grid
│   │   └── index.ts
│   ├── flow/
│   │   ├── EquationNode.tsx    # Custom React Flow node type
│   │   ├── UniverseGraph.tsx   # Main React Flow canvas component
│   │   ├── UniverseNav.tsx     # Top navigation bar
│   │   ├── WorldSelector.tsx   # Sidebar world filter
│   │   └── index.ts
│   └── index.ts                # Root barrel export
│
├── lib/
│   ├── worlds.ts               # All 7 worlds data (nodes + edges)
│   ├── utils.ts                # Utility functions (cn, hexToRgba, etc.)
│   └── index.ts
│
├── types/
│   ├── equation.ts             # Core domain TypeScript types
│   └── index.ts
│
├── public/                     # Static assets
├── tailwind.config.ts          # Custom space theme tokens
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

---

## 🌍 The 7 Worlds

| World | Icon | Colour | Key Equation |
|-------|------|--------|--------------|
| **Fractal** | 🌀 | Cyan | Mandelbrot: `z_{n+1} = z_n² + c` |
| **Butterfly** | 🦋 | Gold | Lorenz System: `ẋ = σ(y−x)` |
| **Bayes** | 🎯 | Violet | Bayes: `P(H\|E) = P(E\|H)P(H)/P(E)` |
| **Gravity** | 🪐 | Orange | Einstein: `G_μν + Λg_μν = 8πG/c⁴ T_μν` |
| **Waves** | 〰️ | Emerald | Wave Eq: `∂²u/∂t² = c²∇²u` |
| **Probability** | 🎲 | Pink | Normal: `f(x) = 1/(σ√2π) e^(-(x-μ)²/2σ²)` |
| **Geometry** | 📐 | Lavender | Euler: `e^{iπ} + 1 = 0` |

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | Framework, App Router |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility styling |
| @xyflow/react | 12 | Interactive graph (React Flow) |
| Framer Motion | 12 | Animations & transitions |

---

## 🎨 Design System

**Fonts**
- `Space Grotesk` — Display / headings (geometric, futuristic)
- `JetBrains Mono` — Equations, code, tags
- `Inter` — Body copy

**Signature element**: Procedural canvas star-field with velocity-based depth rendering, giving the universe a genuine sense of 3D depth as stars streak toward the viewer.

---

*Built with curiosity and caffeine. May contain trace amounts of beauty.*
