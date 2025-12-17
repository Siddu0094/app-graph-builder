import { create } from "zustand";

type InspectorTab = "config" | "runtime";

type AppUIState = {
  selectedNodeId: string | null;
  activeInspectorTab: InspectorTab;
  isMobilePanelOpen: boolean;

  selectNode: (nodeId: string | null) => void;
  setActiveTab: (tab: InspectorTab) => void;
  toggleMobilePanel: (open?: boolean) => void;
};

export const useAppUIStore = create<AppUIState>((set) => ({
  selectedNodeId: null,
  activeInspectorTab: "config",
  isMobilePanelOpen: false,

  selectNode: (nodeId) =>
    set({
      selectedNodeId: nodeId,
      isMobilePanelOpen: !!nodeId, // open panel when node selected
    }),

  setActiveTab: (tab) =>
    set({
      activeInspectorTab: tab,
    }),

  toggleMobilePanel: (open) =>
    set((state) => ({
      isMobilePanelOpen: open ?? !state.isMobilePanelOpen,
    })),
}));
