import {
  LayoutGrid,
  Database,
  Boxes,
  Settings,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { id: "apps", icon: LayoutGrid, active: true },
  { id: "db", icon: Database, active: false },
  { id: "services", icon: Boxes, active: false },
  { id: "settings", icon: Settings, active: false },
];

export const LeftRail = () => {
  return (
    <aside className="w-14 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-4 gap-3">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className={clsx(
              "w-9 h-9 rounded-md flex items-center justify-center",
              item.active
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            )}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </aside>
  );
};
