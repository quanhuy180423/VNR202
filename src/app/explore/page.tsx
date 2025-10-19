import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-amber-900">
      <Header />
      <main>
        <ExploreSection />
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;
