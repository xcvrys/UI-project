import { create } from 'zustand';

type CursorStore = {
  cursorSize: {
    X: number;
    Y: number;
  };
  cursorColor: string;
  cursorText: string;
  mixBlendMode: string;
  image: string;
  roundings: string;
  zindex: number;
  opacity: number;
  setCursorSize: (X: number, Y: number) => void;
  setCursorColor: (color: string) => void;
  setCursorText: (text: string) => void;
  setMixBlendMode: (mode: string) => void;
  setCursorImage: (image: string) => void;
  setRoundings: (roundings: string) => void;
  setZindex: (zindex: number) => void;
  setOpacity: (opacity: number) => void;
  setResetCursor: () => void;
};

export const useCursorStore = create<CursorStore>((set) => ({
  cursorSize: { X: 20, Y: 20 },
  cursorColor: 'white',
  cursorText: '',
  mixBlendMode: 'mix-blend-difference',
  image: '',
  roundings: 'rounded-full',
  zindex: 50,
  opacity: 100,
  setCursorSize: (X: number, Y: number) => set({ cursorSize: { X, Y } }),
  setCursorColor: (color: string) => set({ cursorColor: color || 'white' }),
  setCursorText: (text: string) => set({ cursorText: text }),
  setMixBlendMode: (mode: string) => set({ mixBlendMode: mode }),
  setCursorImage: (image: string) => set({ image: image }),
  setRoundings: (roundings: string) => set({ roundings: roundings }),
  setZindex: (zindex: number) => set({ zindex: zindex }),
  setOpacity: (opacity: number) => set({ opacity: opacity }),
  setResetCursor: () => set({
    cursorSize: { X: 20, Y: 20 },
    cursorColor: 'white',
    cursorText: '',
    mixBlendMode: 'mix-blend-difference',
    image: '',
    roundings: 'rounded-full',
    zindex: 50
  }),
}));
