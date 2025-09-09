import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioHero = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: "CheckCircle" },
    { number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { number: "45%", label: "Average ROI Increase", icon: "TrendingUp" },
    { number: "12", label: "Industries Served", icon: "Building" }
  ];
  const navigate = useNavigate();

  const goToVideos = () => {
    navigate('/portfolio-showcase-success-stories');
    requestAnimationFrame(() => {
      const el = document?.querySelector('#success-videos');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const downloadCaseStudies = () => {
    // Placeholder: navigate to portfolio where downloads live
    navigate('/portfolio-showcase-success-stories');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="Trophy" size={20} color="white" />
            <span className="text-white/90 text-sm font-medium">Success Stories</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Businesses
            <span className="block text-accent">Through AI Automation</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover how we've helped companies across industries achieve remarkable results with our AI automation solutions. From 40% cost reductions to 300% productivity increases, see the measurable impact of intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 cta-morph"
              iconName="Play"
              iconPosition="left"
              onClick={goToVideos}
            >
              Watch Success Stories
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              iconName="Download"
              iconPosition="left"
              onClick={downloadCaseStudies}
            >
              Download Case Studies
            </Button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats?.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                <Icon name={stat?.icon} size={24} color="white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat?.number}</div>
              <div className="text-white/70 text-sm font-medium">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;