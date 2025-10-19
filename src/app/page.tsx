import ContextSection from "@/components/ContextSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ModernRelevanceSection from "@/components/ModernRelevanceSection";
import SignificanceSection from "@/components/SignificanceSection";
import TimelineSection from "@/components/TimelineSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-amber-900">
      <Header />
      <main>
        <HeroSection />
        <ContextSection />
        <TimelineSection />
        <SignificanceSection />
        <ModernRelevanceSection />
      </main>
      <Footer />
    </div>
  );
}
