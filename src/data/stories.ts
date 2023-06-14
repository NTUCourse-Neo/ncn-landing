export interface Story {
  startDate: number;
  content: string[];
  title: string;
  media?: string[];
}

const stories: Story[] = [
  {
    startDate: 1635724800000,
    content: ["hello mom"],
    title: "How Neo was born",
  },
  {
    startDate: 1643673600000,
    content: ["hello mom"],
    title: "After the first success...",
  },
  {
    startDate: 1646092800000,
    content: ["hello mom"],
    title: "NTU x Neo",
  },
  {
    startDate: 1656633600000,
    content: ["hello mom"],
    title: "The Last Dance",
  },
];

export default stories;
