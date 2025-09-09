import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ROICalculator from './ROICalculator';

const HeroSection = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  const liveMetrics = [
    { label: "Processes Automated", value: 2847, suffix: "+" },
    { label: "Hours Saved Monthly", value: 156420, suffix: "+" },
    { label: "Revenue Generated", value: 89.7, prefix: "₹", suffix: "Cr+" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full"></div>
      </div>
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-accent">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
          <g className="neural-connections">
            {[...Array(20)]?.map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 1920}
                y1={Math.random() * 1080}
                x2={Math.random() * 1920}
                y2={Math.random() * 1080}
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent/20 neural-animation"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Live Metrics Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                Live: {liveMetrics?.[currentMetric]?.prefix}{liveMetrics?.[currentMetric]?.value?.toLocaleString('en-IN')}{liveMetrics?.[currentMetric]?.suffix} {liveMetrics?.[currentMetric]?.label}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Next-Gen AI 
                <span className="block bg-gradient-to-r from-accent to-accent/100 bg-clip-text text-transparent">
                Agents for Seamless
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90">
                Business Automation
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Practical, high-impact AI solutions that streamline processes and let businesses focus on what truly matters.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 cta-morph"
                onClick={() => setShowCalculator(true)}
                iconName="Calculator"
                iconPosition="left"
              >
                Calculate Your ROI
              </Button>
              
              <Link to="/contact-scheduling-multi-channel-engagement">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 cta-morph"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Strategy Call
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <p className="text-white/60 text-sm font-medium">Trusted by leading enterprises</p>
              <div className="flex flex-wrap items-center gap-6 opacity-70">
                {['Tata', 'Reliance', 'Infosys', 'Microsoft', 'Amazon']?.map((company) => (
                  <div key={company} className="text-white/80 font-semibold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            {/* Success Metrics Dashboard */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">Live Success Metrics</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">Real-time</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {liveMetrics?.map((metric, index) => (
                  <div 
                    key={metric?.label}
                    className={`p-4 rounded-xl transition-all duration-500 ${
                      currentMetric === index 
                        ? 'bg-accent/20 border border-accent/30' :'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{metric?.label}</span>
                      <Icon name="TrendingUp" size={16} className="text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-white mt-1">
                      {metric?.prefix}{metric?.value?.toLocaleString('en-IN')}{metric?.suffix}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick ROI Preview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Zap" size={24} className="text-accent" />
                <h3 className="text-white font-semibold text-lg">ROI Preview</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Average Time Saved</span>
                  <span className="text-accent font-semibold">40+ hrs/week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Cost Reduction</span>
                  <span className="text-accent font-semibold">60-80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Revenue Increase</span>
                  <span className="text-accent font-semibold">200-300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Implementation Time</span>
                  <span className="text-accent font-semibold">2-4 weeks</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 border-accent/30 text-accent hover:bg-accent/10"
                onClick={() => setShowCalculator(true)}
              >
                Get Detailed Calculation
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* ROI Calculator Modal */}
      {showCalculator && (
        <ROICalculator onClose={() => setShowCalculator(false)} />
      )}
    </section>
  );
};

export default HeroSection;