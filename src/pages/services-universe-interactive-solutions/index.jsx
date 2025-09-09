
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import AssessmentTool from './components/AssessmentTool';
import ServiceCategories from './components/ServiceCategories';
import SolutionConfigurator from './components/SolutionConfigurator';
import IndustryShowcase from './components/IndustryShowcase';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import PricingCalculator from './components/PricingCalculator';

const ServicesUniversePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialActiveCategory = params.get('category') || undefined;

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Interactive Solutions | AI Automation Hub</title>
        <meta name="description" content="Experience our AI automation solutions through interactive demos. Custom configurator, ROI calculator, and industry-specific implementations with transparent pricing." />
        <meta name="keywords" content="AI automation services, interactive demos, solution configurator, ROI calculator, business automation, process optimization" />
        <meta property="og:title" content="AI Automation Services - Interactive Solutions" />
        <meta property="og:description" content="Try before you buy with our interactive AI automation demos and custom solution configurator." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services-universe-interactive-solutions" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          <ServiceHero />
          <AssessmentTool />
          <ServiceCategories initialActiveCategory={initialActiveCategory} />
          <SolutionConfigurator />
          <IndustryShowcase />
          <TechnicalArchitecture />
          <PricingCalculator />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">AI Automation Hub</div>
                    <div className="text-sm text-gray-400">Intelligent Solutions</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Transforming businesses with intelligent automation solutions. 
                  Experience the future of work today.
                </p>
                <div className="text-sm text-gray-400">
                  © {new Date()?.getFullYear()} AI Automation Hub. All rights reserved.
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Process Automation</li>
                  <li>AI Chatbots</li>
                  <li>Smart Analytics</li>
                  <li>System Integration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Documentation</li>
                  <li>Technical Support</li>
                  <li>Training</li>
                  <li>Community</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesUniversePage;