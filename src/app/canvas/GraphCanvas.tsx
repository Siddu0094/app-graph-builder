import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
} from "@xyflow/react";
import type { Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type ServiceNodeData = {
  label: string;
};

type ServiceNode = Node<ServiceNodeData, "default">;

const nodes: ServiceNode[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "API Service" },
    type: "default",
     style: {
      color: "#111827", // dark text for light mode
    }
  },
  {
    id: "2",
    position: { x: 350, y: 200 },
    data: { label: "Postgres" },
    type: "default",
     style: {
      color: "#111827",
    },
  },
];

const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
];

export const GraphCanvas = () => {  
  return (
  <div className="h-full w-full bg-zinc-900">
      <ReactFlow nodes={nodes} edges={edges} fitView>
      <Background
        variant={BackgroundVariant.Dots}
        gap={24} //spacing between dots
        size={1.2} //dot size
        color="#3f3ff46" //subtle zinc-700
        
      />
      <Controls     />
    </ReactFlow>
  </div>
  );
};
