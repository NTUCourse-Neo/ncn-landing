export interface Story {
  startDate: number;
  content: string[];
  title: string;
  media?: string[];
  emoji: string;
}

const stories: Story[] = [
  {
    startDate: 1635724800000,
    content: ["hello mom"],
    title: "How Neo was born",
    emoji: "👶",
  },
  {
    startDate: 1643673600000,
    content: ["hello mom"],
    title: "After the first success...",
    emoji: "🎊",
  },
  {
    startDate: 1646092800000,
    content: ["hello mom"],
    title: "NTU x Neo",
    emoji: "🤝",
  },
  {
    startDate: 1656633600000,
    content: ["hello mom"],
    title: "The Last Dance",
    emoji: "🕺",
  },
];

export default stories;
