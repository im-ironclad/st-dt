import { Handle, Position } from "@xyflow/react";
import type { NodeProps } from "@xyflow/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CircleHelp } from "lucide-react";
import type { QuestionNode as QuestionNodeType } from "@/lib/workflow-data";

const handleClassName =
  "!h-3 !w-3 !rounded-full !border-primary border-2! bg-transparent!";

export function QuestionNode({ data }: NodeProps<QuestionNodeType>) {
  return (
    <div className="w-80">
      <Handle
        type="target"
        position={Position.Top}
        className={handleClassName}
      />
      <Card>
        <CardHeader className="flex flex-row items-center gap-3 border-b">
          <CircleHelp className="size-4" />
          <span className="text-sm font-semibold">Question</span>
        </CardHeader>
        <CardContent className="px-3 pt-0! pb-6">
          <p className="text-sm text-base-primary">{data.question}</p>
        </CardContent>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        className={handleClassName}
      />
    </div>
  );
}
