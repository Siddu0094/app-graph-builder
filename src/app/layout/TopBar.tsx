import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/useThemeStore";
import { Maximize2, Bell, Sun, Moon } from "lucide-react";

export const TopBar = () => {
    const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="h-12 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4">
      <div className="text-sm font-semibold text-white">
        App Graph Builder
      </div>

      <div className="flex items-center gap-2">
        {/* theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-400"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </Button>
        <Button className="text-zinc-400  " variant="ghost" size="icon">
          <Bell size={16} />
        </Button>
        <Button className="text-zinc-400" variant="ghost" size="icon">
          <Maximize2 size={16} />
        </Button>
      </div>
    </header>
  );
};
