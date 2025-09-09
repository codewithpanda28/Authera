import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import TeamSection from './components/TeamSection';
import MissionSection from './components/MissionSection';
import CultureSection from './components/CultureSection';
import AwardsSection from './components/AwardsSection';
import GlobalReachSection from './components/GlobalReachSection';

const AboutEcosystemCompanyStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - AI Automation Hub | Company Story & Team</title>
        <meta 
          name="description" 
          content="Discover the story behind AI Automation Hub - from startup vision to global AI automation leader. Meet our expert team, explore our mission, and learn about our culture of innovation serving 500+ enterprises worldwide." 
        />
        <meta name="keywords" content="AI automation company, about us, team, mission, culture, awards, global reach, company story" />
        <meta property="og:title" content="About AI Automation Hub - Our Story, Team & Mission" />
        <meta property="og:description" content="From humble beginnings to serving 500+ global enterprises. Discover our journey, meet our expert team, and explore the culture driving AI automation innovation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-ecosystem-company-story" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          <TeamSection />
          <MissionSection />
          <CultureSection />
          <AwardsSection />
          <GlobalReachSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">AI</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">AI Automation Hub</div>
                    <div className="text-sm text-white/70">Intelligent Solutions</div>
                  </div>
                </div>
                <p className="text-white/80 mb-6 max-w-md">
                  Democratizing AI automation for businesses worldwide. 
                  Join 500+ enterprises transforming their operations with our intelligent solutions.
                </p>
                <div className="text-sm text-white/60">
                  © {new Date()?.getFullYear()} AI Automation Hub. All rights reserved.
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <div>About Us</div>
                  <div>Our Team</div>
                  <div>Careers</div>
                  <div>Press</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <div>Contact</div>
                  <div>Support</div>
                  <div>Community</div>
                  <div>Newsletter</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutEcosystemCompanyStory;