export interface TimelinePhoto {
  url: string;
  alt: string;
  caption?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
  photos?: TimelinePhoto[];
}

export const timelineData: TimelineEntry[] = [
  {
    year: "1993",
    title: "Professional Beginnings",
    description:
      "Began professional work in Kenyan theatre and film as an actor and choreographer after graduating from Nairobi Theatre Academy, pioneering grounded physical theatre forms."
  },
  {
    year: "1997",
    title: "Dance Into Space & Wakati",
    description:
      "Founded the company and presented Wakati (The Times) at the Kenya National Theatre. Performed on April 29, 1997, at the Kenya National Theatre. This solo performance officially launched Dance Into Space (DIS), one of Kenya's premier inclusive and mixed-ability performing arts companies. Meaning \"The Times\" in Swahili, Wakati explored themes of human expression, shifting eras, and personal narrative, paving the way for decades of mentorship and physical theater in East Africa. The piece later grew into a duet and cemented Ondiege's status as a foundational figure in Kenyan contemporary dance. Decades later, he continues to choreograph highly expressive, human-centered works.",
    photos: [
      {
        url: "/photos/clean/wakati-solo-1997.jpg",
        alt: "Ondiege in Wakati at Kenya National Theatre (Photo: Naijeria Toweett, 1997)",
        caption: "Wakati Solo (1997) · Kenya National Theatre"
      },
      {
        url: "/photos/clean/wakati-duet-1998-1.jpg",
        alt: "DIS Wakati Duet at the Goethe-Institute 1998",
        caption: "Wakati Duet (1998) · Goethe-Institute"
      },
      {
        url: "/photos/clean/wakati-duet-1998-2.jpg",
        alt: "DIS Wakati Duet floor work at the Goethe-Institute 1998",
        caption: "Wakati Duet · Movement Dialectic"
      }
    ]
  },
  {
    year: "2005",
    title: "Counter Circles",
    description:
      '"CounterCircles" is a landmark contemporary mixed-ability dance production choreographed in 2005 by German choreographer Gerda König (artistic director of the DIN A 13 tanzcompany) and Kenyan co-choreographer Onyango Ondiege. The piece challenges conventional boundaries of physical movement by integrating dancers with and without physical disabilities. It explores theme elements like isolation, physical restrictions, and breaking social barriers. The production utilized performers from Kenya and Germany, establishing a structural foundation for mixed-ability dance training that Ondiege continued to champion through Dance Into Space in Kenya.',
    link: {
      label: "Watch Counter Circles on Vimeo",
      url: "https://vimeo.com/118324011"
    }
  },
  {
    year: "2012",
    title: "Paths",
    description:
      "Paths is a notable multimedia contemporary dance and film project produced by the Kenyan contemporary dance theatre company, artistic direction and choreography by Ondiege. The production was created in collaboration with Vibeke Muasya, an award-winning Danish filmmaker and director who frequently works between Kenya, Denmark, and the United States. The project merges the distinct movement and inclusion-driven choreography of Dance Into Space with Vibeke Muasya's cinematic vision, blending the boundaries of live performance and film.",
    photos: [
      {
        url: "/photos/clean/paths-1.jpg",
        alt: "Paths multimedia contemporary dance and film project",
        caption: "Paths (2012) · Dance Into Space × Vibeke Muasya"
      },
      {
        url: "/photos/clean/paths-2.jpg",
        alt: "Paths choreographic movement still",
        caption: "Paths · Choreographic Film Still"
      },
      {
        url: "/photos/clean/paths-3.jpg",
        alt: "Paths physical dialogue gesture",
        caption: "Paths · Kinesthetic Dialogues"
      }
    ]
  },
  {
    year: "2013",
    title: "Sojourner",
    description:
      "Contemporary dance film produced through Dance Into Space, directed and choreographed by Ondiege, shot on location exploring urban architecture, industrial heritage, and the kinesthetic journey of migration.",
    photos: [
      {
        url: "/kenya-sometimes/IMG_9047.jpg",
        alt: "Onyango Ondiege in theatrical stance during Sojourner at The GoDown Arts Centre",
        caption: "Sojourner (2013) · Architecture & Migration"
      },
      {
        url: "/kenya-sometimes/dis.jpg",
        alt: "Dynamic choreographic leap representing Dance Into Space and Sojourner",
        caption: "Sojourner · Kinetic Presence"
      }
    ]
  },
  {
    year: "2023–2024",
    title: "Nyanam (Daughter of the Lake)",
    description:
      "Developed and presented Nyanam (Daughter of the Lake) alongside inclusive dance exchanges, performances, and workshops across East Africa and international platforms. Interrogating traditional myths and gendered power relations to advocate for women's agency and disability inclusion.",
    link: {
      label: "Watch Nyanam Playlist on YouTube",
      url: "https://youtube.com/playlist?list=PLgHHTCZotu-jwcPn3H7mtmrQbTRKRjnhC"
    },
    photos: [
      {
        url: "/nyanam/Nyanam.jpg",
        alt: "Nyanam contemporary mixed-ability dance exchange",
        caption: "Nyanam (2023–2024) · Movement Dialectic"
      },
      {
        url: "/nyanam/Nyanam2.jpg",
        alt: "Muscular physical endurance pulling blue tarp in Nyanam",
        caption: "Water & Lake Myth · Physical Agency"
      },
      {
        url: "/nyanam/Nyanam3.jpg",
        alt: "Joint inclusive choreographic gesture in Nyanam",
        caption: "Inclusive Exchange & Shared Ground"
      }
    ]
  },
  {
    year: "2025",
    title: "National Hero & State Recognition",
    description:
      "Conferred the Order of the Grand Warrior (OGW) and recognized as a National Hero during Kenya's Mashujaa Day honours for lifetime contributions to contemporary dance, performing arts, and inclusive community empowerment.",
    photos: [
      {
        url: "/photos/clean/national-hero-citation.jpg",
        alt: "National Hero Official Citation Certificate for Onyango Ondiege OGW",
        caption: "National Hero Citation · Mashujaa Day 2025"
      },
      {
        url: "/photos/clean/national-hero-trophy.jpg",
        alt: "National Hero Award Trophy",
        caption: "National Honours Trophy & State Decoration"
      }
    ]
  },
  {
    year: "2026",
    title: "Kenya Sometimes",
    description:
      "Active repertoire contemporary dance soliloquy using irony, dark humour, satire, poetry, and emotional fracture to examine survival, hope, transformation, and the lived realities of contemporary Kenya.",
    link: {
      label: "Watch Kenya Sometimes on YouTube",
      url: "https://youtu.be/0ZQiXdhmLjM"
    },
    photos: [
      {
        url: "/kenya-sometimes/IMG_9060.jpg",
        alt: "Onyango Ondiege performing Kenya Sometimes holding a three-legged wooden stool",
        caption: "Kenya Sometimes (2026) · Domestic Symbol & Solitude"
      },
      {
        url: "/kenya-sometimes/IMG_9051.jpg",
        alt: "Low floor work negotiation with traditional stool in Kenya Sometimes",
        caption: "Grounded Negotiation of Civic Space"
      },
      {
        url: "/kenya-sometimes/aWCa18V8.jpg",
        alt: "Laughter and vulnerability in Kenya Sometimes",
        caption: "Dark Humour & Emotional Fracture"
      }
    ]
  }
];
