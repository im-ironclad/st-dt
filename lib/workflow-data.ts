import type { Node, Edge } from "@xyflow/react";

export type QuestionNodeData = {
  question: string;
};

export type QuestionNode = Node<QuestionNodeData, "question">;

export const PREDEFINED_QUESTIONS = [
  "What percentage does the plan cover for co-insurance on diagnostic lab services?",
  "What is the annual deductible amount for in-network providers?",
  "Does the plan require prior authorization for specialist referrals?",
  "What is the out-of-pocket maximum for individual coverage?",
  "Are preventive care visits covered at 100% with no copay?",
  "What is the copay amount for generic prescription medications?",
  "Does the plan cover out-of-network emergency room visits?",
  "What is the coinsurance rate for outpatient surgical procedures?",
];

export const NODE_VERTICAL_SPACING = 200;

export function createQuestionNode(
  index: number,
  yPosition: number,
): QuestionNode {
  return {
    id: crypto.randomUUID(),
    type: "question",
    position: { x: 0, y: yPosition },
    data: {
      question: PREDEFINED_QUESTIONS[index % PREDEFINED_QUESTIONS.length],
    },
  };
}

export function createEdge(sourceId: string, targetId: string): Edge {
  return {
    id: `${sourceId}-${targetId}`,
    source: sourceId,
    target: targetId,
  };
}

export const initialNodes: QuestionNode[] = [
  {
    id: "seed-0",
    type: "question",
    position: { x: 0, y: 0 },
    data: { question: PREDEFINED_QUESTIONS[0] },
  },
  {
    id: "seed-1",
    type: "question",
    position: { x: 0, y: NODE_VERTICAL_SPACING },
    data: { question: PREDEFINED_QUESTIONS[1] },
  },
];
export const initialEdges: Edge[] = [createEdge("seed-0", "seed-1")];
