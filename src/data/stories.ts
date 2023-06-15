export interface Story {
  startDate: number;
  content: {
    en: string[];
    zh: string[];
  };
  title: { en: string; zh: string };
  media?: string[];
  emoji: string;
}

const stories: Story[] = [
  {
    startDate: 1635724800000,
    content: { en: ["hello mom"], zh: [] },
    title: { en: "How Neo was born", zh: "" },
    emoji: "👶",
  },
  {
    startDate: 1643673600000,
    content: { en: ["hello mom"], zh: [""] },
    title: { en: "After the first success...", zh: "" },
    emoji: "🚀",
  },
  {
    startDate: 1646092800000,
    content: { en: ["hello mom"], zh: [] },
    title: { en: "NTU x Neo", zh: "" },
    emoji: "🤝",
  },
  {
    startDate: 1656633600000,
    content: { en: ["hello mom"], zh: [] },
    title: { en: "The Last Dance", zh: "" },
    emoji: "💥",
  },
];

export default stories;
