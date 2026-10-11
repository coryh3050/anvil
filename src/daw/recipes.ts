export type StyleRecipe = {
  id: string;
  name: string;
  producerStyle: string;
};

export const STYLE_RECIPES: StyleRecipe[] = [
  {
    id: "dry-clap",
    name: "Dry clap",
    producerStyle: "Mustard-style clap, dry, single hit",
  },
  {
    id: "room-kit",
    name: "Room kit",
    producerStyle: "Dusty kit, room clap, soft stab",
  },
  {
    id: "short-808",
    name: "Short 808",
    producerStyle: "Dry 808, short hat, dark stab, 140 bpm",
  },
];

export type StyleShape = {
  dry: boolean;
  single: boolean;
  room: boolean;
  dark: boolean;
  sparse: boolean;
  bpm: number;
};

export function readStyle(producerStyle: string): StyleShape {
  const text = producerStyle.toLowerCase();
  const bpmMatch = text.match(/(\d{2,3})\s*bpm/);
  const bpm = bpmMatch ? Math.min(180, Math.max(70, Number(bpmMatch[1]))) : text.includes("mustard") ? 100 : 96;
  return {
    dry: /dry|close|tight|single/.test(text),
    single: /single/.test(text),
    room: /room|wet|hall|dusty/.test(text),
    dark: /dark|night|dusty/.test(text),
    sparse: /sparse|minimal|mustard|single|dry/.test(text),
    bpm,
  };
}
