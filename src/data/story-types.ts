export type Panel = {
  size: "full" | "wide" | "half" | "tall";
  scene: string;
  narration?: string;
  sfx?: string;
  lines?: { who: string; text: string; type?: "speech" | "thought" | "shout" }[];
  image?: string;
};

export type Page = {
  no: number;
  title: string;
  panels: Panel[];
};
