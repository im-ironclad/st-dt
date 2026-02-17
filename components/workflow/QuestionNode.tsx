import { Handle, Position } from "@xyflow/react";
import type { NodeProps } from "@xyflow/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CircleHelp } from "lucide-react";
import type { QuestionNode as QuestionNodeType } from "@/lib/workflow-data";

const handleClassName =
  "!h-3 !w-3 !rounded-full !border-2 !border-white !bg-purple-600";

export function QuestionNode({ data }: NodeProps<QuestionNodeType>) {
  return (
    <div className="w-80">
      <Handle
        type="target"
        position={Position.Top}
        className={handleClassName}
      />
      <Card className="gap-0 py-0">
        <CardHeader className="flex-row items-center gap-2 border-b px-4 py-3">
          <CircleHelp className="size-4 text-purple-600" />
          <span className="text-sm font-semibold">Question</span>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <p className="text-sm text-muted-foreground">{data.question}</p>
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
