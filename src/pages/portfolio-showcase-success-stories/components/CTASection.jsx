import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const benefits = [
    {
      icon: "Target",
      title: "Tailored Solutions",
      description: "Custom AI automation designed for your specific industry and business needs"
    },
    {
      icon: "TrendingUp",
      title: "Proven Results",
      description: "Average 40% cost reduction and 250% productivity increase across all projects"
    },
    {
      icon: "Shield",
      title: "Risk-Free Approach",
      description: "Comprehensive assessment and pilot program before full implementation"
    },
    {
      icon: "Users",
      title: "Expert Support",
      description: "Dedicated team of AI specialists providing ongoing support and optimization"
    }
  ];

  const stats = [
    { number: "150+", label: "Successful Projects" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "45%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="Rocket" size={20} color="white" />
            <span className="text-white/90 text-sm font-medium">Ready to Transform?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start Your AI Automation
            <span className="block text-accent">Success Story Today</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join 150+ companies that have already transformed their operations with our proven AI automation solutions. Get your free consultation and ROI assessment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat?.number}</div>
              <div className="text-white/70 text-sm font-medium">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-xl mb-4">
                <Icon name={benefit?.icon} size={28} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit?.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 cta-morph flex-1 sm:flex-none"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 flex-1 sm:flex-none"
              iconName="Calculator"
              iconPosition="left"
            >
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>30-minute consultation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>No commitment required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Free ROI assessment</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                <Icon name="Phone" size={20} color="white" />
              </div>
              <h4 className="text-white font-semibold">Call Us</h4>
              <p className="text-white/70 text-sm">+91 98765 43210</p>
              <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                <Icon name="Mail" size={20} color="white" />
              </div>
              <h4 className="text-white font-semibold">Email Us</h4>
              <p className="text-white/70 text-sm">hello@aiautomationhub.com</p>
              <p className="text-white/70 text-sm">projects@aiautomationhub.com</p>
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                <Icon name="MessageSquare" size={20} color="white" />
              </div>
              <h4 className="text-white font-semibold">Live Chat</h4>
              <p className="text-white/70 text-sm">Available 24/7</p>
              <p className="text-white/70 text-sm">Instant responses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;