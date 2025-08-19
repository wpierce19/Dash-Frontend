import { create } from "zustand";
export const useUiStore = create((set) => ({
  postComposerOpen: false,
  openPostComposer: () => set({ postComposerOpen: true }),
  closePostComposer: () => set({ postComposerOpen: false }),
}));