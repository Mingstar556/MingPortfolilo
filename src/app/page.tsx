"use client";

import LenisScrollProvider from "@/components/common/LenisScrollProvider";
import Preloader from "@/components/common/Preloader";
import Navbar from "@/components/common/Navbar";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <LenisScrollProvider>
      <ScrollProgressBar />
      <Preloader />
      <Navbar />
      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </LenisScrollProvider>
  );
}
