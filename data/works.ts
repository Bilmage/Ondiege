export interface Work {
  id: string;
  title: string;
  period: string;
  category: string;
  description: string;
  themes: string[];
  featured?: boolean;
}

export const worksData: Work[] = [
  {
    id: "kenya-sometimes",
    title: "KENYA SOMETIMES",
    period: "2026",
    category: "Solo",
    description: "A contemporary dance soliloquy using irony, dark humour, satire, poetry, and emotional fracture to examine survival, hope, transformation, and the lived experience of contemporary Kenya.",
    themes: ["Dance", "Poetry", "Body", "Civic space"],
    featured: true
  },
  {
    id: "nyanam",
    title: "NYANAM",
    period: "2023–2024",
    category: "Dance / Stage",
    description: "Daughter of the Lake. A contemporary reworking of a Kenyan myth that interrogates traditional power relations and advocates for women's agency.",
    themes: ["Myth", "Gender", "Mixed-ability practice"]
  },
  {
    id: "sojourner",
    title: "SOJOURNER",
    period: "2013–Present",
    category: "Film",
    description: "A contemporary dance film produced by Dance Into Space, directed and choreographed by Ondiege Matthew, and shot on location at The GoDown Arts Centre.",
    themes: ["Dance film", "Migration", "Place"]
  },
  {
    id: "dance-into-space",
    title: "DANCE INTO SPACE",
    period: "1997–Present",
    category: "Artistic Platform",
    description: "The company and artistic platform founded by Ondiege, developing contemporary and mixed-ability dance across theatres, schools, and unconventional community spaces.",
    themes: ["Company", "Training", "Inclusion"]
  }
];
