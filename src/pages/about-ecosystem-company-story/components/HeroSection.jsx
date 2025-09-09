import React from 'react';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Building2" size={24} color="white" />
                </div>
                <span className="text-accent font-medium text-lg">Our Story</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building the
                <span className="block text-accent">AI Future</span>
                Together
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                From a vision to democratize AI automation to serving 500+ global enterprises, 
                our journey is defined by innovation, trust, and measurable transformation.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/70">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/70">Global Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 cta-morph">
                Meet Our Team
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Our Mission
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="glassmorphism rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">Company Timeline</h3>
                  <Icon name="TrendingUp" size={24} color="white" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="text-white/90">
                      <div className="font-medium">2019 - Founded</div>
                      <div className="text-sm text-white/70">Started with AI vision</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="text-white/90">
                      <div className="font-medium">2021 - Global Expansion</div>
                      <div className="text-sm text-white/70">Reached 100+ clients</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="text-white/90">
                      <div className="font-medium">2023 - AI Leadership</div>
                      <div className="text-sm text-white/70">Industry recognition</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent/50 rounded-full animate-pulse"></div>
                    <div className="text-white/90">
                      <div className="font-medium">2025 - Future Ready</div>
                      <div className="text-sm text-white/70">500+ enterprises served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse animation-delay-600"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <Icon name="ChevronDown" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;