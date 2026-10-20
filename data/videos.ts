export interface Video {
  id: string;
  title: string;
  period: string;
  type: string;
  description: string;
  youtubeUrl: string;
  thumbnail?: string;
}

export const videosData: Video[] = [
  {
    id: "kenya-sometimes-video",
    title: "KENYA SOMETIMES",
    period: "2026",
    type: "Featured video",
    description: "A solo performance built around the body negotiating the invisible architectures of survival, hope, and transformation.",
    youtubeUrl: "https://www.youtube.com/watch?v=8B4aAY5gumg"
  }
];
