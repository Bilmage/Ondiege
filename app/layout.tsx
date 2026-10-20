import type {Metadata} from "next";
import {Inter, JetBrains_Mono, Playfair_Display} from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onyango Ondiege OGW — Artist · Choreographer · Performer",
  description:
    "The professional portfolio of Onyango Ondiege OGW, a Kenyan contemporary dancer, choreographer, performer, and founder of Dance Into Space. 33+ years of artistic practice in Nairobi, Kenya and internationally.",
  keywords: [
    "Onyango Ondiege",
    "OGW",
    "contemporary dance",
    "Kenya",
    "choreographer",
    "Dance Into Space",
    "performer",
    "Nairobi",
  ],
  openGraph: {
    title: "Onyango Ondiege OGW — Artist · Choreographer · Performer",
    description:
      "Contemporary dancer, choreographer, and performer. Founder of Dance Into Space. 33+ years of artistic practice.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
