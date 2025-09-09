import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceSelector from './components/ServiceSelector';
import ProjectShowcase from './components/ProjectShowcase';
import KnowledgeHub from './components/KnowledgeHub';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Hub - Intelligent Solutions That Deliver Measurable ROI</title>
        <meta name="description" content="Transform your business with AI automation solutions. Join 500+ companies saving 40+ hours weekly while boosting revenue by 300%. Calculate your ROI in 2 minutes." />
        <meta name="keywords" content="AI automation, business process automation, digital transformation, ROI calculator, artificial intelligence, workflow automation, India" />
        <meta property="og:title" content="AI Automation Hub - Intelligent Solutions That Deliver Measurable ROI" />
        <meta property="og:description" content="Transform your business with AI automation solutions. Join 500+ companies saving 40+ hours weekly while boosting revenue by 300%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiautomationhub.com/homepage-ai-automation-hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Hub - Intelligent Solutions" />
        <meta name="twitter:description" content="Transform your business with AI automation solutions that deliver measurable ROI from day one." />
        <link rel="canonical" href="https://aiautomationhub.com/homepage-ai-automation-hub" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <HeroSection />
          <ServiceSelector />
          <ProjectShowcase />
          <KnowledgeHub />
          <TrustIndicators />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;