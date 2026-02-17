"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "@xyflow/react";
import type { DefaultEdgeOptions } from "@xyflow/react";
import { WorkflowHeader } from "./WorkflowHeader";
import { QuestionNode } from "./QuestionNode";
import {
  initialNodes,
  initialEdges,
  createQuestionNode,
  createEdge,
  NODE_VERTICAL_SPACING,
} from "@/lib/workflow-data";

const nodeTypes = { question: QuestionNode };

const defaultEdgeOptions: DefaultEdgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed, color: "#9333ea" },
  style: { stroke: "#9333ea", strokeWidth: 2 },
};

export function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleAddNode = useCallback(() => {
    const lastNode = nodes[nodes.length - 1];
    const newY = lastNode ? lastNode.position.y + NODE_VERTICAL_SPACING : 0;
    const newNode = createQuestionNode(nodes.length, newY);
    const newEdge = lastNode ? createEdge(lastNode.id, newNode.id) : undefined;

    setNodes((nds) => [...nds, newNode]);
    if (newEdge) {
      setEdges((eds) => [...eds, newEdge]);
    }
  }, [nodes, setNodes, setEdges]);

  return (
    <div className="flex h-screen flex-col">
      <WorkflowHeader onAddNode={handleAddNode} />
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1}
            color="#d1d5db"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
