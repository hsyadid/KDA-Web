export type CardType = {
  url: string;
  title: string;
  id: number;
  width?: number;
  height?: number;
  priority?: boolean;
};

export const cards: CardType[] = [
  {
    url: "/modal1/2.jpeg",
    title: "Innopreneurship Centre IPB",
    id: 1,
    width: 800,
    height: 600,
    priority: true,
  },
  {
    url: "/modal2/2.jpeg",
    title: "KAI Serpong Construction",
    id: 2,
    width: 800,
    height: 600,
    priority: true,
  },
  {
    url: "/modal3/2.jpeg",
    title: "Mandiri Flat Tasikmalaya",
    id: 3,
    width: 800,
    height: 600,
    priority: true,
  },
  {
    url: "/modal5/1.png",
    title: "SMPN 7 Tambun",
    id: 4,
    width: 800,
    height: 600,
    priority: true,
  },
  {
    url: "/modal1/3.jpeg",
    title: "Innopreneurship Centre IPB",
    id: 5,
    width: 800,
    height: 600,
    priority: false,
  },
  {
    url: "/modal2/3.jpeg",
    title: "KAI Serpong Construction",
    id: 6,
    width: 800,
    height: 600,
    priority: false,
  },
];
