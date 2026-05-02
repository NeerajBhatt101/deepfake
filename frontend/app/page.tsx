"use client";


import Header from "@/components/common/Header";
import CardSection from "@/components/home/cardSection";
import HeroSection from "@/components/home/heroSection";
import UploadMediaSection from "@/components/home/mediaSection";

export default function Home() {
  return (
    <main className="flex  w-full flex-col  items-center  bg-[#000814] text-white">
      <Header />
   

      {/* Hero Section */}
     <HeroSection />
     <CardSection />
     <UploadMediaSection/>


     

    
    </main>
  );
}
