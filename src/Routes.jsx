import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import AboutEcosystemCompanyStory from './pages/about-ecosystem-company-story';
import PortfolioShowcase from './pages/portfolio-showcase-success-stories';
import ClientDashboard from './pages/client-dashboard-project-command-center';
import ContactSchedulingMultiChannelEngagement from './pages/contact-scheduling-multi-channel-engagement';
import Homepage from './pages/homepage-ai-automation-hub';
import ServicesUniversePage from './pages/services-universe-interactive-solutions';
import ArticlesPage from './pages/articles';
import ArticleDetail from './pages/articles/[id]';
import ServiceDetailPage from './pages/services/[slug]';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about-ecosystem-company-story" element={<AboutEcosystemCompanyStory />} />
        <Route path="/portfolio-showcase-success-stories" element={<PortfolioShowcase />} />
        <Route path="/client-dashboard-project-command-center" element={<ClientDashboard />} />
        <Route path="/contact-scheduling-multi-channel-engagement" element={<ContactSchedulingMultiChannelEngagement />} />
        <Route path="/homepage-ai-automation-hub" element={<Homepage />} />
        <Route path="/services-universe-interactive-solutions" element={<ServicesUniversePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
