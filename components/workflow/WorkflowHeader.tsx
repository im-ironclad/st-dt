import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface WorkflowHeaderProps {
  onAddNode: () => void;
}

export function WorkflowHeader({ onAddNode }: WorkflowHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <h1 className="text-lg font-semibold">Workflow Builder</h1>
      <Button variant={`default`} onClick={onAddNode}>
        <Plus className="size-4" />
        Add Node
      </Button>
    </header>
  );
}
