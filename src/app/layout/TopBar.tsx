import { Button } from "@/components/ui/button";
import { Maximize2, Bell } from "lucide-react";

export const TopBar = () => {
  return (
    <header className="h-12 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4">
      <div className="text-sm font-semibold text-white">
        App Graph Builder
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <Maximize2 size={16} />
        </Button>
      </div>
    </header>
  );
};
