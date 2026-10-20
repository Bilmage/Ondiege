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
    image: "/IMG_9060.jpg",
    imageAlt: "Onyango Ondiege performing Kenya Sometimes holding a three-legged wooden stool",
    curatorialQuote: "The body navigates invisible architectures of survival, hope, and civic transformation.",
    metaDetails: {
      creation: "Nairobi, Kenya",
      medium: "Solo Contemporary Dance & Satire",
      status: "Active Repertoire (2026)"
    }
  },
  {
    id: "nyanam",
    title: "NYANAM",
    period: "2023–2024",
    category: "Dance / Stage",
    description: "Daughter of the Lake. A contemporary reworking of a Kenyan myth that interrogates traditional power relations and advocates for women's agency through mixed-ability movement.",
    themes: ["Myth", "Gender", "Mixed-ability practice"],
    image: "/IMG_9051.jpg",
    imageAlt: "Onyango Ondiege on stage during Nyanam performance in dramatic low floor work with traditional stool"
  },
  {
    id: "sojourner",
    title: "SOJOURNER",
    period: "2013–Present",
    category: "Dance Film",
    description: "A contemporary dance film produced by Dance Into Space, directed and choreographed by Ondiege Matthew, shot on location exploring urban architecture and migration.",
    themes: ["Dance film", "Migration", "Place"],
    image: "/IMG_9071.jpg",
    imageAlt: "Expressive performance moment from Sojourner shot on location at The GoDown Arts Centre"
  },
  {
    id: "dance-into-space",
    title: "DANCE INTO SPACE",
    period: "1997–Present",
    category: "Artistic Platform",
    description: "The company and platform founded by Ondiege, pioneering contemporary and inclusive mixed-ability dance across theatres, schools, and unconventional spaces in East Africa.",
    themes: ["Company", "Training", "Inclusion"],
    image: "/dis.jpg",
    imageAlt: "Onyango Ondiege in dynamic choreographic flight with open coat representing Dance Into Space"
  }
];
