import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {GrainOverlay} from "@/components/ui/GrainOverlay";
import {HeroSection} from "@/components/home/HeroSection";
import {AboutSection} from "@/components/about/AboutSection";
import {SelectedWorks} from "@/components/works/SelectedWorks";
// import {VideoArchive} from "@/components/video/VideoArchive";
import {CareerTimeline} from "@/components/archive/CareerTimeline";
import {ContactSection} from "@/components/contact/ContactSection";
import {ScrollToTop} from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-cream)] text-[var(--color-charcoal)]">
      {/* Vintage Archival Film Grain Effect */}
      <GrainOverlay />

      {/* Main Persistent Navigation */}
      <Navbar />

      {/* Main Single-Page Sequential Sections */}
      <main className="flex-1 w-full" id="main-content">
        {/* Section 00: Hero */}
        <HeroSection />

        {/* Section 01: About Me */}
        <AboutSection />

        {/* Section 02: Selected Works */}
        <SelectedWorks />

        {/* Section 03: Moving Image / Video Archive */}
        {/* <VideoArchive /> */}

        {/* Section 04: Artistic Archive / Career Timeline */}
        <CareerTimeline />

        {/* Section 05: Contact Us */}
        <ContactSection />
      </main>

      {/* Retro Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
