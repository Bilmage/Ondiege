export interface Video {
  id: string;
  title: string;
  period: string;
  type: string;
  description: string;
  youtubeUrl: string;
  thumbnail?: string;
  isPlaylist?: boolean;
}

export const videosData: Video[] = [
  {
    id: "kenya-sometimes-video",
    title: "KENYA SOMETIMES",
    period: "2026",
    type: "Current Production",
    description: "A solo performance built around the body negotiating the invisible architectures of survival, hope, and transformation in contemporary Kenya.",
    youtubeUrl: "https://youtu.be/mjUBPCT3bfI?si=DnZXEa8TyyPv_alJ",
    thumbnail: "/kenya-sometimes/aWCa18V8.jpg",
    isPlaylist: false
  },
  {
    id: "nyanam-video",
    title: "NYANAM (Daughter of the Lake)",
    period: "2023–2024",
    type: "Production Archive Playlist",
    description: "Comprehensive multi-part video documentation of Nyanam, an inclusive contemporary dance inquiry into gender, myth, and shared physical agency.",
    youtubeUrl: "https://youtube.com/playlist?list=PLgHHTCZotu-jwcPn3H7mtmrQbTRKRjnhC&si=viB0ZGax5LzmGquK",
    thumbnail: "/nyanam/Nyanam2.jpg",
    isPlaylist: true
  }
];
