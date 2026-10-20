export interface WorkMediaItem {
  type: "image" | "video";
  url: string;
  alt: string;
  caption?: string;
  categoryTag?: string;
}

export interface Work {
  id: string;
  title: string;
  period: string;
  category: string;
  description: string;
  themes: string[];
  featured?: boolean;
  image: string;
  imageAlt: string;
  curatorialQuote?: string;
  youtubeUrl?: string;
  isPlaylist?: boolean;
  gallery?: WorkMediaItem[];
  metaDetails?: {
    creation: string;
    medium: string;
    status: string;
  };
}

export const worksData: Work[] = [
  {
    id: "kenya-sometimes",
    title: "KENYA SOMETIMES",
    period: "2026",
    category: "Solo Performance",
    description: "A contemporary dance soliloquy using irony, dark humour, satire, poetry, and emotional fracture to examine survival, hope, transformation, and the lived experience of contemporary Kenya.",
    themes: ["Dance", "Poetry", "Body", "Civic space"],
    featured: true,
    image: "/kenya-sometimes/IMG_9060.jpg",
    imageAlt: "Onyango Ondiege performing Kenya Sometimes holding a three-legged wooden stool",
    curatorialQuote: "The body navigates invisible architectures of survival, hope, and civic transformation.",
    youtubeUrl: "https://youtu.be/mjUBPCT3bfI?si=DnZXEa8TyyPv_alJ",
    isPlaylist: false,
    metaDetails: {
      creation: "Nairobi, Kenya",
      medium: "Solo Contemporary Dance & Satire",
      status: "Active Repertoire (2026)"
    },
    gallery: [
      {
        type: "image",
        url: "/kenya-sometimes/IMG_9060.jpg",
        alt: "Solo performance with stool",
        caption: "Physical gesture and domestic symbol",
        categoryTag: "Solo Performance"
      },
      {
        type: "image",
        url: "/kenya-sometimes/IMG_9051.jpg",
        alt: "Floor work with traditional stool",
        caption: "Low grounded choreographic negotiation",
        categoryTag: "Stage Repertoire"
      },
      {
        type: "image",
        url: "/kenya-sometimes/IMG_9071.jpg",
        alt: "Expressive theatrical posture",
        caption: "Satiric interrogation of civic space",
        categoryTag: "Theatre Inquiry"
      },
      {
        type: "image",
        url: "/kenya-sometimes/aWCa18V8.jpg",
        alt: "Seated laughter and vulnerability",
        caption: "Dark humour and resilience",
        categoryTag: "Archive"
      },
      {
        type: "image",
        url: "/kenya-sometimes/iFCVhaQN.jpg",
        alt: "Wide stage composition with spotlight",
        caption: "Spatial silence and solitude",
        categoryTag: "Live Stage"
      },
      {
        type: "image",
        url: "/kenya-sometimes/kCTGjiMD.jpg",
        alt: "Contemplative gesture on stool",
        caption: "Waiting, endurance, and memory",
        categoryTag: "Solo Inquiry"
      }
    ]
  },
  {
    id: "nyanam",
    title: "NYANAM",
    period: "2023–2024",
    category: "Dance / Stage",
    description: "Daughter of the Lake. A contemporary reworking of a Kenyan myth that interrogates traditional power relations and advocates for women's agency through inclusive, mixed-ability dance exchange.",
    themes: ["Myth", "Gender", "Mixed-ability practice"],
    image: "/nyanam/Nyanam.jpg",
    imageAlt: "Onyango Ondiege and performer in dynamic floor and standing exchange during Nyanam",
    curatorialQuote: "Interrogating traditional myth and power relations to advocate for women's agency and disability inclusion.",
    youtubeUrl: "https://youtube.com/playlist?list=PLgHHTCZotu-jwcPn3H7mtmrQbTRKRjnhC&si=viB0ZGax5LzmGquK",
    isPlaylist: true,
    metaDetails: {
      creation: "Nairobi & Lake Victoria Region, Kenya",
      medium: "Ensemble & Mixed-Ability Contemporary Dance",
      status: "Touring Archive (2023–2024)"
    },
    gallery: [
      {
        type: "image",
        url: "/nyanam/Nyanam.jpg",
        alt: "Daughter of the Lake - dynamic martial stance and low floor movement",
        caption: "Daughter of the Lake — Movement dialectic",
        categoryTag: "Mixed-Ability"
      },
      {
        type: "image",
        url: "/nyanam/Nyanam2.jpg",
        alt: "Backlit muscular movement pulling blue material across the stage",
        caption: "Water imagery and physical endurance",
        categoryTag: "Stage Performance"
      },
      {
        type: "image",
        url: "/nyanam/Nyanam3.jpg",
        alt: "Joint choreographic reach and expressive hand gesture on tarp",
        caption: "Ensemble connection and spatial agency",
        categoryTag: "Inclusive Exchange"
      }
    ]
  },
  {
    id: "sojourner",
    title: "SOJOURNER",
    period: "2013–Present",
    category: "Dance Film",
    description: "A contemporary dance film produced by Dance Into Space, directed and choreographed by Ondiege Matthew, shot on location exploring urban architecture and migration.",
    themes: ["Dance film", "Migration", "Place"],
    image: "/kenya-sometimes/IMG_9047.jpg",
    imageAlt: "Expressive performance moment from Sojourner shot on location at The GoDown Arts Centre",
    gallery: [
      {
        type: "image",
        url: "/kenya-sometimes/IMG_9047.jpg",
        alt: "Full length theatrical pose",
        caption: "Urban migration and presence",
        categoryTag: "Dance Film"
      }
    ]
  },
  {
    id: "dance-into-space",
    title: "DANCE INTO SPACE",
    period: "1997–Present",
    category: "Artistic Platform",
    description: "The company and platform founded by Ondiege, pioneering contemporary and inclusive mixed-ability dance across theatres, schools, and unconventional spaces in East Africa.",
    themes: ["Company", "Training", "Inclusion"],
    image: "/kenya-sometimes/dis.jpg",
    imageAlt: "Onyango Ondiege in dynamic choreographic flight with open coat representing Dance Into Space",
    gallery: [
      {
        type: "image",
        url: "/kenya-sometimes/dis.jpg",
        alt: "Choreographic leap representing Dance Into Space",
        caption: "Pioneering inclusive dance since 1997",
        categoryTag: "Company History"
      }
    ]
  }
];
