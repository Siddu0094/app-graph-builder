import { TopBar } from "./TopBar";
import { LeftRail } from "./LeftRail";
import { RightPanel } from "./RightPanel";

export const AppLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <LeftRail />
        <main className="flex-1 relative bg-zinc-900">
          {children}
        </main>
        <RightPanel />
      </div>
    </div>
  );
};
