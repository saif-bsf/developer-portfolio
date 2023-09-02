import { AboutSection } from './components/about-section';
import { ExpertiseSection } from './components/expertise-section';
import { HeroSection } from './components/hero-section';
import { JourneySection } from './components/journey-section';
import { PortfolioSection } from './components/portfolio-section';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <JourneySection />
      <PortfolioSection />
    </>
  );
};

export default Home;
