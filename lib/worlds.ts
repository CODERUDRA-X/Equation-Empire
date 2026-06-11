// ============================================================
//  lib/worlds.ts
//  The 7 Equation Worlds — nodes and edges for each universe
// ============================================================

import type { EquationWorld } from "@/types/equation";

export const EQUATION_WORLDS: EquationWorld[] = [
  // ──────────────────────────────────────────────────────────
  // 1. FRACTAL WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "fractal",
    name: "Fractal",
    tagline: "Infinite complexity from simple rules",
    description:
      "The Mandelbrot set and its kin reveal how infinite intricacy emerges from a single recursive formula. Zoom forever — the boundary never smooths.",
    icon: "🌀",
    primaryColor: "#06b6d4",
    secondaryColor: "#0e7490",
    glowColor: "rgba(6, 182, 212, 0.35)",
    nodes: [
      {
        id: "fractal-mandelbrot",
        worldId: "fractal",
        category: "equation",
        title: "Mandelbrot Set",
        equation: "z_{n+1} = z_n² + c",
        description:
          "The most famous fractal. A complex number c belongs to the Mandelbrot set if this iteration remains bounded.",
        tags: ["complex", "iteration", "chaos"],
        position: { x: 0, y: 0 },
        glowColor: "#06b6d4",
      },
      {
        id: "fractal-julia",
        worldId: "fractal",
        category: "equation",
        title: "Julia Set",
        equation: "f_c(z) = z² + c",
        description:
          "Each point c in the Mandelbrot set generates a connected Julia set. The Mandelbrot set is a map of all Julia sets.",
        tags: ["complex", "holomorphic", "boundary"],
        position: { x: 280, y: -120 },
        glowColor: "#06b6d4",
      },
      {
        id: "fractal-dimension",
        worldId: "fractal",
        category: "concept",
        title: "Hausdorff Dimension",
        equation: "d_H = lim_{r→0} \\frac{log N(r)}{log(1/r)}",
        description:
          "Fractal dimension measures how completely a fractal fills space. The Mandelbrot boundary has dimension 2.",
        tags: ["dimension", "self-similarity", "measure"],
        position: { x: -260, y: -100 },
        glowColor: "#a78bfa",
      },
      {
        id: "fractal-logistic",
        worldId: "fractal",
        category: "equation",
        title: "Logistic Map",
        equation: "x_{n+1} = rx_n(1 - x_n)",
        description:
          "A simple population model that produces period-doubling bifurcations and chaos as r increases past ~3.57.",
        tags: ["chaos", "bifurcation", "dynamical"],
        position: { x: 280, y: 140 },
        glowColor: "#f59e0b",
      },
      {
        id: "fractal-self-similarity",
        worldId: "fractal",
        category: "concept",
        title: "Self-Similarity",
        equation: "S = \\bigcup_{i=1}^{N} f_i(S)",
        description:
          "An iterated function system (IFS) contracts and copies a set at multiple scales, producing self-similar fractals.",
        tags: ["IFS", "contraction", "Cantor"],
        position: { x: -260, y: 140 },
        glowColor: "#8b5cf6",
      },
      {
        id: "fractal-lyapunov",
        worldId: "fractal",
        category: "theory",
        title: "Lyapunov Exponent",
        equation: "λ = lim_{n→∞} \\frac{1}{n} \\sum_{i=0}^{n-1} log|f'(x_i)|",
        description:
          "Measures the sensitivity to initial conditions. λ > 0 implies chaos; λ < 0 implies convergence.",
        tags: ["chaos", "stability", "sensitivity"],
        position: { x: 0, y: 240 },
        glowColor: "#ec4899",
      },
    ],
    edges: [
      { id: "f-e1", source: "fractal-mandelbrot", target: "fractal-julia", label: "generates", animated: true },
      { id: "f-e2", source: "fractal-mandelbrot", target: "fractal-dimension", label: "has dim 2" },
      { id: "f-e3", source: "fractal-logistic", target: "fractal-lyapunov", label: "quantified by" },
      { id: "f-e4", source: "fractal-mandelbrot", target: "fractal-logistic", label: "analog via" },
      { id: "f-e5", source: "fractal-self-similarity", target: "fractal-dimension", label: "defines" },
      { id: "f-e6", source: "fractal-julia", target: "fractal-self-similarity", label: "exhibits" },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 2. BUTTERFLY WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "butterfly",
    name: "Butterfly",
    tagline: "Chaos, sensitivity, strange attractors",
    description:
      "Lorenz's equations spawned chaos theory and the butterfly effect. Tiny differences in initial conditions create wildly different futures.",
    icon: "🦋",
    primaryColor: "#f59e0b",
    secondaryColor: "#d97706",
    glowColor: "rgba(245, 158, 11, 0.35)",
    nodes: [
      {
        id: "butterfly-lorenz",
        worldId: "butterfly",
        category: "equation",
        title: "Lorenz System",
        equation: "ẋ = σ(y−x),\\; ẏ = x(ρ−z)−y,\\; ż = xy−βz",
        description:
          "Three coupled ODEs Edward Lorenz derived from atmospheric convection. σ=10, ρ=28, β=8/3 produces the iconic butterfly attractor.",
        tags: ["ODE", "chaos", "weather", "attractor"],
        position: { x: 0, y: 0 },
        glowColor: "#f59e0b",
      },
      {
        id: "butterfly-effect",
        worldId: "butterfly",
        category: "concept",
        title: "Butterfly Effect",
        equation: "|δZ(t)| ≈ e^{λt}|δZ_0|",
        description:
          "Sensitive dependence on initial conditions: exponential divergence of nearby trajectories, governed by a positive Lyapunov exponent.",
        tags: ["sensitivity", "prediction", "meteorology"],
        position: { x: -280, y: -100 },
        glowColor: "#f97316",
      },
      {
        id: "butterfly-attractor",
        worldId: "butterfly",
        category: "concept",
        title: "Strange Attractor",
        equation: "dim_H(A) \\approx 2.06",
        description:
          "The Lorenz attractor is a fractal with Hausdorff dimension ~2.06. Trajectories never cross yet never repeat.",
        tags: ["topology", "fractal", "dynamical"],
        position: { x: 280, y: -100 },
        glowColor: "#ec4899",
      },
      {
        id: "butterfly-rossler",
        worldId: "butterfly",
        category: "equation",
        title: "Rössler Attractor",
        equation: "ẋ = -y-z,\\; ẏ = x+ay,\\; ż = b+z(x-c)",
        description:
          "Simpler than Lorenz: a single sheet that folds to create chaos. Prototype for studying chaos in minimal systems.",
        tags: ["attractor", "minimal", "folding"],
        position: { x: -280, y: 140 },
        glowColor: "#a78bfa",
      },
      {
        id: "butterfly-poincare",
        worldId: "butterfly",
        category: "theory",
        title: "Poincaré Section",
        equation: "\\Sigma = \\{x \\in \\mathbb{R}^n : h(x) = 0\\}",
        description:
          "A slice through phase space that converts continuous flows into discrete maps, revealing the geometric structure of chaos.",
        tags: ["phase space", "topology", "map"],
        position: { x: 280, y: 140 },
        glowColor: "#06b6d4",
      },
      {
        id: "butterfly-bifurcation",
        worldId: "butterfly",
        category: "concept",
        title: "Bifurcation",
        equation: "\\frac{d\\mu}{dt} = f(x, \\mu)",
        description:
          "When a parameter passes through a critical value, the qualitative behavior of a system changes fundamentally.",
        tags: ["parameter", "stability", "transition"],
        position: { x: 0, y: 240 },
        glowColor: "#34d399",
      },
    ],
    edges: [
      { id: "b-e1", source: "butterfly-lorenz", target: "butterfly-effect", label: "causes", animated: true },
      { id: "b-e2", source: "butterfly-lorenz", target: "butterfly-attractor", label: "generates" },
      { id: "b-e3", source: "butterfly-lorenz", target: "butterfly-bifurcation", label: "undergoes" },
      { id: "b-e4", source: "butterfly-attractor", target: "butterfly-poincare", label: "analyzed by" },
      { id: "b-e5", source: "butterfly-rossler", target: "butterfly-attractor", label: "also has" },
      { id: "b-e6", source: "butterfly-effect", target: "butterfly-rossler", label: "shown in" },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 3. BAYES WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "bayes",
    name: "Bayes",
    tagline: "Belief updated by evidence",
    description:
      "Bayes' theorem is the engine of rational belief revision. From medical tests to machine learning, it governs how evidence changes our certainty.",
    icon: "🎯",
    primaryColor: "#8b5cf6",
    secondaryColor: "#7c3aed",
    glowColor: "rgba(139, 92, 246, 0.35)",
    nodes: [
      {
        id: "bayes-theorem",
        worldId: "bayes",
        category: "equation",
        title: "Bayes' Theorem",
        equation: "P(H|E) = \\frac{P(E|H)\\,P(H)}{P(E)}",
        description:
          "The posterior probability of hypothesis H given evidence E. Prior × likelihood / normalizer. The foundation of rational inference.",
        tags: ["probability", "inference", "prior", "posterior"],
        position: { x: 0, y: 0 },
        glowColor: "#8b5cf6",
      },
      {
        id: "bayes-prior",
        worldId: "bayes",
        category: "concept",
        title: "Prior & Posterior",
        equation: "P(H) \\xrightarrow{\\text{evidence}} P(H|E)",
        description:
          "The prior encodes belief before evidence; the posterior encodes belief after. Bayesian updating is sequential application of the theorem.",
        tags: ["epistemic", "rational", "update"],
        position: { x: -280, y: -100 },
        glowColor: "#a78bfa",
      },
      {
        id: "bayes-likelihood",
        worldId: "bayes",
        category: "concept",
        title: "Likelihood Ratio",
        equation: "LR = \\frac{P(E|H)}{P(E|\\neg H)}",
        description:
          "How much more likely is the evidence under H versus not-H? LR > 1 confirms, LR < 1 disconfirms the hypothesis.",
        tags: ["evidence", "confirmation", "ratio"],
        position: { x: 280, y: -100 },
        glowColor: "#06b6d4",
      },
      {
        id: "bayes-naive",
        worldId: "bayes",
        category: "application",
        title: "Naïve Bayes Classifier",
        equation: "\\hat{y} = \\arg\\max_k P(y_k) \\prod_i P(x_i|y_k)",
        description:
          "Assumes feature independence to make classification tractable. Despite the naïve assumption, performs remarkably well for spam filtering and text classification.",
        tags: ["ML", "classification", "NLP"],
        position: { x: -280, y: 140 },
        glowColor: "#34d399",
      },
      {
        id: "bayes-network",
        worldId: "bayes",
        category: "application",
        title: "Bayesian Network",
        equation: "P(X_1,\\ldots,X_n) = \\prod_{i=1}^{n} P(X_i|\\text{pa}(X_i))",
        description:
          "A DAG encoding conditional independence. Used in medical diagnosis, causal reasoning, and AI decision systems.",
        tags: ["DAG", "causality", "inference"],
        position: { x: 280, y: 140 },
        glowColor: "#f59e0b",
      },
      {
        id: "bayes-mcmc",
        worldId: "bayes",
        category: "theory",
        title: "MCMC Sampling",
        equation: "\\pi(x) \\propto P(E|x)\\,P(x)",
        description:
          "When posteriors are intractable analytically, Markov Chain Monte Carlo samples from them. Powers modern Bayesian computation.",
        tags: ["sampling", "computational", "estimation"],
        position: { x: 0, y: 240 },
        glowColor: "#ec4899",
      },
    ],
    edges: [
      { id: "by-e1", source: "bayes-theorem", target: "bayes-prior", label: "defines", animated: true },
      { id: "by-e2", source: "bayes-theorem", target: "bayes-likelihood", label: "uses" },
      { id: "by-e3", source: "bayes-prior", target: "bayes-mcmc", label: "computed by" },
      { id: "by-e4", source: "bayes-theorem", target: "bayes-naive", label: "applied in" },
      { id: "by-e5", source: "bayes-theorem", target: "bayes-network", label: "scales to" },
      { id: "by-e6", source: "bayes-likelihood", target: "bayes-network", label: "factored in" },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 4. GRAVITY WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "gravity",
    name: "Gravity",
    tagline: "Curvature, mass, and spacetime",
    description:
      "From Newton's apple to Einstein's curved spacetime, gravity weaves the fabric of the cosmos. Mass tells space how to curve; space tells mass how to move.",
    icon: "🪐",
    primaryColor: "#f97316",
    secondaryColor: "#ea580c",
    glowColor: "rgba(249, 115, 22, 0.35)",
    nodes: [
      {
        id: "gravity-newton",
        worldId: "gravity",
        category: "equation",
        title: "Newton's Law of Gravitation",
        equation: "F = G\\frac{m_1 m_2}{r^2}",
        description:
          "Every mass attracts every other mass with a force proportional to their product and inversely proportional to distance squared.",
        tags: ["force", "classical", "inverse-square"],
        position: { x: 0, y: 0 },
        glowColor: "#f97316",
      },
      {
        id: "gravity-einstein",
        worldId: "gravity",
        category: "equation",
        title: "Einstein Field Equations",
        equation: "G_{μν} + Λg_{μν} = \\frac{8πG}{c^4}T_{μν}",
        description:
          "Ten coupled tensor PDEs describing how mass-energy curves spacetime. The cosmological constant Λ drives accelerated expansion.",
        tags: ["GR", "tensor", "spacetime", "curvature"],
        position: { x: -280, y: -100 },
        glowColor: "#f59e0b",
      },
      {
        id: "gravity-geodesic",
        worldId: "gravity",
        category: "concept",
        title: "Geodesic Equation",
        equation: "\\frac{d^2x^μ}{dτ^2} + Γ^μ_{αβ}\\frac{dx^α}{dτ}\\frac{dx^β}{dτ} = 0",
        description:
          "Free-falling objects follow geodesics — the straightest possible paths in curved spacetime. Gravity is geometry.",
        tags: ["curved space", "free fall", "path"],
        position: { x: 280, y: -100 },
        glowColor: "#a78bfa",
      },
      {
        id: "gravity-schwarzschild",
        worldId: "gravity",
        category: "application",
        title: "Schwarzschild Radius",
        equation: "r_s = \\frac{2GM}{c^2}",
        description:
          "The radius at which escape velocity equals c. Cross it and you've found a black hole's event horizon — a point of no return.",
        tags: ["black hole", "event horizon", "singularity"],
        position: { x: -280, y: 140 },
        glowColor: "#ef4444",
      },
      {
        id: "gravity-gwave",
        worldId: "gravity",
        category: "application",
        title: "Gravitational Waves",
        equation: "h_{μν} = \\frac{4G}{c^4r}\\ddot{Q}_{μν}",
        description:
          "Ripples in spacetime curvature, first detected by LIGO in 2015 from a black hole merger 1.3 billion light-years away.",
        tags: ["LIGO", "waves", "detection", "Nobel"],
        position: { x: 280, y: 140 },
        glowColor: "#06b6d4",
      },
      {
        id: "gravity-keplers",
        worldId: "gravity",
        category: "application",
        title: "Kepler's Third Law",
        equation: "T^2 = \\frac{4π^2}{GM}a^3",
        description:
          "The orbital period squared equals a constant times the semi-major axis cubed — the harmony of the planets.",
        tags: ["orbit", "planets", "period"],
        position: { x: 0, y: 240 },
        glowColor: "#34d399",
      },
    ],
    edges: [
      { id: "g-e1", source: "gravity-newton", target: "gravity-einstein", label: "approximated by", animated: true },
      { id: "g-e2", source: "gravity-einstein", target: "gravity-geodesic", label: "predicts" },
      { id: "g-e3", source: "gravity-einstein", target: "gravity-schwarzschild", label: "yields" },
      { id: "g-e4", source: "gravity-einstein", target: "gravity-gwave", label: "predicts" },
      { id: "g-e5", source: "gravity-newton", target: "gravity-keplers", label: "derives" },
      { id: "g-e6", source: "gravity-schwarzschild", target: "gravity-gwave", label: "mergers cause" },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 5. WAVES WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "waves",
    name: "Waves",
    tagline: "The oscillation underlying everything",
    description:
      "Sound, light, quantum matter — the universe thinks in waves. The wave equation is one of the most versatile tools in all of physics.",
    icon: "〰️",
    primaryColor: "#34d399",
    secondaryColor: "#059669",
    glowColor: "rgba(52, 211, 153, 0.35)",
    nodes: [
      {
        id: "waves-equation",
        worldId: "waves",
        category: "equation",
        title: "Wave Equation",
        equation: "\\frac{∂^2u}{∂t^2} = c^2 \\nabla^2 u",
        description:
          "The master equation for classical wave propagation. c is the wave speed. Governs sound, light (classically), water, and seismic waves.",
        tags: ["PDE", "propagation", "d'Alembert"],
        position: { x: 0, y: 0 },
        glowColor: "#34d399",
      },
      {
        id: "waves-fourier",
        worldId: "waves",
        category: "theory",
        title: "Fourier Transform",
        equation: "\\hat{f}(ξ) = \\int_{-∞}^{∞} f(x)\\,e^{-2πixξ}\\,dx",
        description:
          "Decomposes any waveform into pure sinusoids. The bridge between time domain and frequency domain — essential for signal processing.",
        tags: ["frequency", "spectrum", "signal"],
        position: { x: -280, y: -100 },
        glowColor: "#06b6d4",
      },
      {
        id: "waves-schrodinger",
        worldId: "waves",
        category: "equation",
        title: "Schrödinger Equation",
        equation: "iℏ\\frac{∂ψ}{∂t} = -\\frac{ℏ^2}{2m}∇^2ψ + Vψ",
        description:
          "The quantum wave equation. ψ(x,t) is a probability amplitude; |ψ|² gives the probability density for particle position.",
        tags: ["quantum", "wavefunction", "probability"],
        position: { x: 280, y: -100 },
        glowColor: "#a78bfa",
      },
      {
        id: "waves-snell",
        worldId: "waves",
        category: "application",
        title: "Snell's Law",
        equation: "n_1 \\sin θ_1 = n_2 \\sin θ_2",
        description:
          "How waves refract at the boundary of two media. From optics to acoustics to seismology, refraction is universal to wave physics.",
        tags: ["optics", "refraction", "index"],
        position: { x: -280, y: 140 },
        glowColor: "#f59e0b",
      },
      {
        id: "waves-superposition",
        worldId: "waves",
        category: "concept",
        title: "Superposition & Interference",
        equation: "u = u_1 + u_2",
        description:
          "Waves add algebraically. Constructive interference (peaks align) and destructive interference (peaks cancel) create complex patterns.",
        tags: ["interference", "addition", "coherence"],
        position: { x: 280, y: 140 },
        glowColor: "#ec4899",
      },
      {
        id: "waves-doppler",
        worldId: "waves",
        category: "application",
        title: "Doppler Effect",
        equation: "f_{obs} = f_s \\frac{v \\pm v_{obs}}{v \\mp v_s}",
        description:
          "The observed frequency of a wave changes when source and observer are in relative motion. Explains the pitch shift of a passing siren.",
        tags: ["frequency shift", "motion", "astronomy"],
        position: { x: 0, y: 240 },
        glowColor: "#f97316",
      },
    ],
    edges: [
      { id: "w-e1", source: "waves-equation", target: "waves-fourier", label: "solved by", animated: true },
      { id: "w-e2", source: "waves-equation", target: "waves-schrodinger", label: "quantum analog" },
      { id: "w-e3", source: "waves-fourier", target: "waves-superposition", label: "decomposes into" },
      { id: "w-e4", source: "waves-equation", target: "waves-snell", label: "predicts" },
      { id: "w-e5", source: "waves-superposition", target: "waves-schrodinger", label: "applies to" },
      { id: "w-e6", source: "waves-equation", target: "waves-doppler", label: "produces" },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 6. PROBABILITY WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "probability",
    name: "Probability",
    tagline: "The mathematics of uncertainty",
    description:
      "Probability theory quantifies chance, risk, and expectation. From the Central Limit Theorem to the law of large numbers, order emerges from randomness.",
    icon: "🎲",
    primaryColor: "#ec4899",
    secondaryColor: "#db2777",
    glowColor: "rgba(236, 72, 153, 0.35)",
    nodes: [
      {
        id: "prob-normal",
        worldId: "probability",
        category: "equation",
        title: "Normal Distribution",
        equation: "f(x) = \\frac{1}{σ\\sqrt{2π}}e^{-\\frac{(x-μ)^2}{2σ^2}}",
        description:
          "The bell curve. Emerges whenever many independent random variables are summed. Mean μ, standard deviation σ fully characterize it.",
        tags: ["Gaussian", "distribution", "statistics"],
        position: { x: 0, y: 0 },
        glowColor: "#ec4899",
      },
      {
        id: "prob-clt",
        worldId: "probability",
        category: "theory",
        title: "Central Limit Theorem",
        equation: "\\bar{X}_n \\xrightarrow{d} \\mathcal{N}(μ, σ^2/n)",
        description:
          "The sample mean of n i.i.d. variables converges in distribution to normal, regardless of the original distribution. The cornerstone of statistics.",
        tags: ["convergence", "statistics", "sampling"],
        position: { x: -280, y: -100 },
        glowColor: "#a78bfa",
      },
      {
        id: "prob-entropy",
        worldId: "probability",
        category: "concept",
        title: "Shannon Entropy",
        equation: "H = -\\sum_{i} p_i \\log_2 p_i",
        description:
          "The expected information content of a probability distribution. Measures uncertainty, compressibility, and the capacity of communication channels.",
        tags: ["information", "uncertainty", "bits"],
        position: { x: 280, y: -100 },
        glowColor: "#06b6d4",
      },
      {
        id: "prob-markov",
        worldId: "probability",
        category: "theory",
        title: "Markov Chain",
        equation: "P(X_{n+1}=j|X_n=i) = p_{ij}",
        description:
          "A stochastic process where the future depends only on the present, not the past. Underpins Google's PageRank, MCMC, and language models.",
        tags: ["stochastic", "memoryless", "transition"],
        position: { x: -280, y: 140 },
        glowColor: "#f59e0b",
      },
      {
        id: "prob-lln",
        worldId: "probability",
        category: "theory",
        title: "Law of Large Numbers",
        equation: "\\bar{X}_n \\xrightarrow{a.s.} μ \\text{ as } n→∞",
        description:
          "The sample mean converges almost surely to the population mean as sample size grows. Guarantees that randomness averages out.",
        tags: ["convergence", "average", "frequentist"],
        position: { x: 280, y: 140 },
        glowColor: "#34d399",
      },
      {
        id: "prob-poisson",
        worldId: "probability",
        category: "equation",
        title: "Poisson Distribution",
        equation: "P(k; λ) = \\frac{λ^k e^{-λ}}{k!}",
        description:
          "Models rare events: radioactive decay, typos, website hits per minute. λ is both mean and variance.",
        tags: ["events", "counting", "rare"],
        position: { x: 0, y: 240 },
        glowColor: "#f97316",
      },
    ],
    edges: [
      { id: "p-e1", source: "prob-clt", target: "prob-normal", label: "produces", animated: true },
      { id: "p-e2", source: "prob-normal", target: "prob-entropy", label: "max entropy" },
      { id: "p-e3", source: "prob-markov", target: "prob-clt", label: "applies to" },
      { id: "p-e4", source: "prob-lln", target: "prob-clt", label: "strengthened by" },
      { id: "p-e5", source: "prob-normal", target: "prob-lln", label: "proven by" },
      { id: "p-e6", source: "prob-poisson", target: "prob-normal", label: "approx. for large λ" },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 7. GEOMETRY WORLD
  // ──────────────────────────────────────────────────────────
  {
    id: "geometry",
    name: "Geometry",
    tagline: "Shape, space, and transformation",
    description:
      "From Euclid's axioms to Riemann's curved spaces, geometry is the language of form. It underpins physics, computer graphics, and our intuition of space.",
    icon: "📐",
    primaryColor: "#a78bfa",
    secondaryColor: "#7c3aed",
    glowColor: "rgba(167, 139, 250, 0.35)",
    nodes: [
      {
        id: "geo-euler",
        worldId: "geometry",
        category: "equation",
        title: "Euler's Formula",
        equation: "e^{iπ} + 1 = 0",
        description:
          "Called the most beautiful equation in mathematics. Unites e, i, π, 1, and 0 — the five most fundamental constants — in one identity.",
        tags: ["complex", "identity", "beautiful"],
        position: { x: 0, y: 0 },
        glowColor: "#a78bfa",
      },
      {
        id: "geo-pythagorean",
        worldId: "geometry",
        category: "equation",
        title: "Pythagorean Theorem",
        equation: "a^2 + b^2 = c^2",
        description:
          "The oldest known theorem in continuous mathematics. Generalizes to inner products, metric spaces, and the spacetime interval.",
        tags: ["distance", "right triangle", "Euclidean"],
        position: { x: -280, y: -100 },
        glowColor: "#f59e0b",
      },
      {
        id: "geo-gaussian-curvature",
        worldId: "geometry",
        category: "concept",
        title: "Gaussian Curvature",
        equation: "K = \\frac{R_{1212}}{g} = \\kappa_1 \\kappa_2",
        description:
          "The intrinsic curvature of a surface: product of the principal curvatures. Flat plane: K=0, sphere: K>0, saddle: K<0.",
        tags: ["curvature", "surface", "Riemannian"],
        position: { x: 280, y: -100 },
        glowColor: "#06b6d4",
      },
      {
        id: "geo-euler-polyhedra",
        worldId: "geometry",
        category: "theory",
        title: "Euler Characteristic",
        equation: "χ = V - E + F = 2",
        description:
          "For any convex polyhedron: vertices minus edges plus faces equals 2. A topological invariant; for a torus χ=0.",
        tags: ["topology", "polyhedra", "invariant"],
        position: { x: -280, y: 140 },
        glowColor: "#ec4899",
      },
      {
        id: "geo-area-sphere",
        worldId: "geometry",
        category: "equation",
        title: "Sphere Surface Area",
        equation: "A = 4\\pi r^2",
        description:
          "The surface area of a sphere equals exactly 4 times the area of its great circle — a beautiful fact that Archimedes cherished.",
        tags: ["sphere", "surface", "Archimedes"],
        position: { x: 280, y: 140 },
        glowColor: "#34d399",
      },
      {
        id: "geo-mobius",
        worldId: "geometry",
        category: "concept",
        title: "Möbius Transformation",
        equation: "f(z) = \\frac{az+b}{cz+d},\\; ad-bc \\neq 0",
        description:
          "Conformal maps of the Riemann sphere. Compose rotations, translations, scaling, and inversion into one elegant formula.",
        tags: ["complex", "conformal", "Riemann sphere"],
        position: { x: 0, y: 240 },
        glowColor: "#f97316",
      },
    ],
    edges: [
      { id: "ge-e1", source: "geo-euler", target: "geo-mobius", label: "underpins", animated: true },
      { id: "ge-e2", source: "geo-pythagorean", target: "geo-gaussian-curvature", label: "generalized by" },
      { id: "ge-e3", source: "geo-gaussian-curvature", target: "geo-area-sphere", label: "applied to" },
      { id: "ge-e4", source: "geo-euler-polyhedra", target: "geo-gaussian-curvature", label: "related by Gauss-Bonnet" },
      { id: "ge-e5", source: "geo-euler", target: "geo-pythagorean", label: "extends" },
      { id: "ge-e6", source: "geo-mobius", target: "geo-gaussian-curvature", label: "preserves" },
    ],
  },
];

// Helper to get world by id
export function getWorld(id: string): EquationWorld | undefined {
  return EQUATION_WORLDS.find((w) => w.id === id);
}

// Helper to get all worlds as a map
export function getWorldsMap(): Map<string, EquationWorld> {
  return new Map(EQUATION_WORLDS.map((w) => [w.id, w]));
}
