"use client";

import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  Panel,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

import EquationNode from "@/components/flow/EquationNode";
import WorldSelector from "@/components/flow/WorldSelector";
import { EQUATION_WORLDS } from "@/lib/worlds";
import type { EquationNodeData, WorldId } from "@/types/equation";

// Register custom node types
const NODE_TYPES = { equationNode: EquationNode };

// ── Build initial nodes and edges from all worlds ──────────────────────────────
function buildFlowElements(worldFilter: WorldId | "all") {
  const worlds =
    worldFilter === "all"
      ? EQUATION_WORLDS
      : EQUATION_WORLDS.filter((w) => w.id === worldFilter);

  // Grid layout for multi-world view
  const COLS = 3;
  const WORLD_WIDTH  = 900;
  const WORLD_HEIGHT = 600;

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  worlds.forEach((world, worldIdx) => {
    const col = worldIdx % COLS;
    const row = Math.floor(worldIdx / COLS);
    const offsetX = col * WORLD_WIDTH;
    const offsetY = row * WORLD_HEIGHT;

    world.nodes.forEach((n) => {
      nodes.push({
        id: n.id,
        type: "equationNode",
        position: {
          x: n.position.x + offsetX + 340,
          y: n.position.y + offsetY + 200,
        },
        data: {
          world:        n.worldId,
          category:     n.category,
          title:        n.title,
          equation:     n.equation,
          description:  n.description,
          tags:         n.tags,
          glowColor:    n.glowColor,
          primaryColor: world.primaryColor,
        } as EquationNodeData,
        draggable: true,
      });
    });

    world.edges.forEach((e) => {
      edges.push({
        id: e.id,
        source: e.source,
        target: e.target,
        label: e.label,
        animated: e.animated ?? false,
        type: "smoothstep",
        style: {
          stroke: world.primaryColor,
          strokeWidth: 1.5,
          opacity: 0.6,
        },
        labelStyle: {
          fill: "#94a3b8",
          fontSize: 10,
          fontFamily: "JetBrains Mono, monospace",
        },
        labelBgStyle: {
          fill: "rgba(13, 15, 26, 0.85)",
          stroke: `${world.primaryColor}30`,
          strokeWidth: 1,
        },
        labelBgPadding: [4, 4],
        labelBgBorderRadius: 4,
      });
    });
  });

  return { nodes, edges };
}

// ── Node info panel ─────────────────────────────────────────────────────────────
function NodeInfoPanel({ data, onClose }: { data: EquationNodeData; onClose: () => void }) {
  const color = data.glowColor ?? data.primaryColor ?? "#8b5cf6";
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute right-4 top-4 w-72 rounded-2xl overflow-hidden z-50"
      style={{
        background: "rgba(13, 15, 26, 0.97)",
        border: `1px solid ${color}40`,
        boxShadow: `0 0 40px ${color}25`,
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Header bar */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ background: `${color}12`, borderBottom: `1px solid ${color}25` }}
      >
        <span className="font-display font-semibold text-sm" style={{ color }}>
          {data.title}
        </span>
        <button
          onClick={onClose}
          className="text-asteroid hover:text-stardust transition-colors text-lg leading-none w-5 h-5 flex items-center justify-center"
        >
          ×
        </button>
      </div>

      {/* Equation */}
      <div className="px-4 py-3">
        <div
          className="rounded-lg px-3 py-2 font-mono text-sm text-center mb-3"
          style={{ background: `${color}10`, border: `1px solid ${color}20`, color }}
        >
          {data.equation}
        </div>

        <p className="text-comet text-xs leading-relaxed mb-3">{data.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full font-mono"
              style={{
                background: `${color}15`,
                border: `1px solid ${color}30`,
                color: `${color}cc`,
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────────
export default function UniverseGraph() {
  const [activeWorld, setActiveWorld] = useState<WorldId | "all">("all");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedNodeData, setSelectedNodeData] = useState<EquationNodeData | null>(null);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => buildFlowElements(activeWorld),
    [activeWorld]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Rebuild when world filter changes
  const handleWorldChange = useCallback(
    (world: WorldId | "all") => {
      setActiveWorld(world);
      setSelectedNodeData(null);
      const { nodes: n, edges: e } = buildFlowElements(world);
      setNodes(n);
      setEdges(e);
    },
    [setNodes, setEdges]
  );

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) => addEdge({ ...params, type: "smoothstep", animated: true }, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeData(node.data as unknown as EquationNodeData);
  }, []);

  const activeWorldData = EQUATION_WORLDS.find((w) => w.id === activeWorld);

  return (
    <div className="relative w-full h-full flex">
      {/* ── Sidebar ── */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside
            key="sidebar"
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-0 top-0 bottom-0 z-30 w-52 overflow-y-auto"
            style={{
              background: "rgba(3, 7, 18, 0.97)",
              borderRight: "1px solid rgba(109, 40, 217, 0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="px-3 pt-3 pb-1">
              <p className="text-asteroid text-[10px] uppercase tracking-widest font-mono px-1">
                Worlds
              </p>
            </div>
            <WorldSelector
              worlds={EQUATION_WORLDS}
              activeWorld={activeWorld}
              onSelect={handleWorldChange}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Sidebar toggle ── */}
      <button
        onClick={() => setSidebarOpen((v) => !v)}
        className="absolute z-40 top-1/2 -translate-y-1/2 w-5 h-12 flex items-center justify-center rounded-r-lg transition-all duration-200"
        style={{
          left: sidebarOpen ? 208 : 0,
          background: "rgba(109, 40, 217, 0.2)",
          border: "1px solid rgba(109, 40, 217, 0.3)",
          borderLeft: "none",
          color: "#a78bfa",
          transition: "left 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {sidebarOpen ? "‹" : "›"}
      </button>

      {/* ── React Flow ── */}
      <div
        className="flex-1 flow-container"
        style={{ marginLeft: sidebarOpen ? 208 : 0, transition: "margin-left 0.35s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={NODE_TYPES}
          fitView
          fitViewOptions={{ padding: 0.15, duration: 600 }}
          minZoom={0.15}
          maxZoom={2.5}
          defaultEdgeOptions={{ type: "smoothstep" }}
          proOptions={{ hideAttribution: true }}
        >
          {/* Dot grid background */}
          <Background
            variant={BackgroundVariant.Dots}
            gap={28}
            size={1}
            color="rgba(148, 163, 184, 0.1)"
          />

          {/* Controls */}
          <Controls showInteractive={false} />

          {/* Mini map */}
          <MiniMap
            nodeColor={(node) =>
              (node.data as unknown as EquationNodeData)?.glowColor ?? "#8b5cf6"
            }
            maskColor="rgba(3, 7, 18, 0.8)"
            style={{ width: 140, height: 100 }}
          />

          {/* Active world label */}
          <Panel position="top-center">
            <motion.div
              key={activeWorld}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full font-display text-sm font-medium"
              style={{
                background: "rgba(13, 15, 26, 0.9)",
                border: `1px solid ${activeWorldData?.primaryColor ?? "#6d28d9"}40`,
                color: activeWorldData?.primaryColor ?? "#a78bfa",
                boxShadow: `0 0 20px ${activeWorldData?.primaryColor ?? "#6d28d9"}20`,
              }}
            >
              {activeWorld === "all"
                ? `🌌 All Worlds — ${nodes.length} nodes`
                : `${activeWorldData?.icon} ${activeWorldData?.name} — ${nodes.length} nodes`}
            </motion.div>
          </Panel>
        </ReactFlow>

        {/* Node detail panel */}
        <AnimatePresence>
          {selectedNodeData && (
            <NodeInfoPanel
              data={selectedNodeData}
              onClose={() => setSelectedNodeData(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
