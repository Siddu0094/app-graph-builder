import {
  ReactFlow,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import type { Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useAppUIStore } from "@/store/useAppUIStore";
import { useState, useCallback } from "react";

type ServiceNodeData = {
  label: string;
  load: number;
};

type ServiceNode = Node<ServiceNodeData, "default">;

const initialNodes: ServiceNode[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "API Service", load: 40 },
    type: "default",
    style: { color: "#111827" },
  },
  {
    id: "2",
    position: { x: 350, y: 200 },
    data: { label: "Postgres", load: 70 },
    type: "default",
    style: { color: "#111827" },
  },
];

const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
];

export const GraphCanvas = () => {
  const [nodes, setNodes] = useState<ServiceNode[]>(initialNodes);
  const selectNode = useAppUIStore((s) => s.selectNode);

  const updateNodeData = useCallback(
    (nodeId: string, data: Partial<ServiceNodeData>) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, ...data } }
            : node
        )
      );
    },
    []
  );

  return (
    <div className="h-full w-full bg-white dark:bg-zinc-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={(_, node) => selectNode(node.id)}
        onPaneClick={() => selectNode(null)}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.2}
          color="#3f3f46"
        />
      </ReactFlow>
    </div>
  );
};
