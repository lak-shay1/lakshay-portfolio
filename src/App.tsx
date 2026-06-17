import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import RecruiterSnapshot from '@/sections/RecruiterSnapshot';
import FeaturedProjects from '@/sections/FeaturedProjects';
import RoleFit from '@/sections/RoleFit';
import ExperienceTimeline from '@/sections/ExperienceTimeline';
import SkillsTechStack from '@/sections/SkillsTechStack';
import AIWorkflow from '@/sections/AIWorkflow';
import CaseStudyDeepDives from '@/sections/CaseStudyDeepDives';
import AboutMe from '@/sections/AboutMe';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-bg-dark text-text-primary font-inter">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <RecruiterSnapshot />
        <FeaturedProjects />
        <RoleFit />
        <ExperienceTimeline />
        <SkillsTechStack />
        <AIWorkflow />
        <CaseStudyDeepDives />
        <AboutMe />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
