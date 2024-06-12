import { create } from 'zustand';

type ScrollRefStateStore = {
  wrapperRef: React.RefObject<HTMLElement>;
  setWrapperRef: (ref: React.RefObject<HTMLElement>) => void;
};

export const ScrollRefState = create<ScrollRefStateStore>((set) => ({
  wrapperRef: { current: null },
  setWrapperRef: (ref: React.RefObject<HTMLElement>) => set({ wrapperRef: ref }),
}));
