import { create } from "zustand";

// Zustand store for managing UI state related to post features
export const useUiStore = create((set) => ({
  postComposerOpen: false,
  openPostComposer: () => set({ postComposerOpen: true }),
  closePostComposer: () => set({ postComposerOpen: false }),
}));