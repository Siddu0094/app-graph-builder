 import { Inspector } from "../inspector/Inspector";

export const RightPanel = () => {
  return (
    <aside className="w-80 border-l border-zinc-800 bg-zinc-950 hidden lg:block">
      <Inspector />
    </aside>
  );
};
