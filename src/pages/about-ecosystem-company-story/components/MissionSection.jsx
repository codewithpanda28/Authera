import React from 'react';
import Icon from '../../../components/AppIcon';


const MissionSection = () => {
  const impactMetrics = [
    {
      icon: "TrendingUp",
      value: "300%",
      label: "Average ROI Increase",
      description: "Clients see 3x return on AI automation investments within first year"
    },
    {
      icon: "Clock",
      value: "75%",
      label: "Time Savings",
      description: "Reduction in manual processes through intelligent automation"
    },
    {
      icon: "Users",
      value: "10M+",
      label: "Lives Impacted",
      description: "Employees empowered through AI-enhanced productivity tools"
    },
    {
      icon: "Globe",
      value: "25+",
      label: "Industries Served",
      description: "From healthcare to finance, transforming diverse sectors"
    },
    {
      icon: "Zap",
      value: "99.9%",
      label: "System Uptime",
      description: "Reliable AI solutions with enterprise-grade availability"
    },
    {
      icon: "Shield",
      value: "100%",
      label: "Security Compliance",
      description: "Full adherence to international data protection standards"
    }
  ];

  const coreValues = [
    {
      icon: "Target",
      title: "Innovation First",
      description: `We believe in pushing the boundaries of what's possible with AI technology.\n\nOur commitment to continuous innovation ensures our clients always have access to cutting-edge solutions that drive competitive advantage.`,
      principles: ["Continuous R&D investment", "Emerging technology adoption", "Creative problem solving"]
    },
    {
      icon: "Users",
      title: "Client Success",
      description: `Your success is our success. We measure our achievements by the transformational impact we create for our clients.\n\nEvery solution is designed with measurable outcomes and long-term value creation in mind.`,
      principles: ["Results-driven approach", "Long-term partnerships", "Measurable outcomes"]
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: `We build lasting relationships through honest communication and ethical practices.\n\nOur transparent approach ensures clients understand every aspect of their AI transformation journey.`,
      principles: ["Ethical AI practices", "Open communication", "Data privacy protection"]
    },
    {
      icon: "Globe",
      title: "Global Impact",
      description: `We're committed to democratizing AI automation across borders and industries.\n\nOur solutions are designed to create positive impact for businesses worldwide while respecting local cultures and regulations.`,
      principles: ["Cultural sensitivity", "Regulatory compliance", "Sustainable practices"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Icon name="Compass" size={24} className="text-accent" />
            <span className="text-accent font-semibold">Our Mission</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Democratizing AI
            <span className="block text-accent">for Global Impact</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            We exist to make artificial intelligence accessible, practical, and transformative 
            for businesses of all sizes. Our mission is to bridge the gap between complex AI 
            capabilities and real-world business value, creating sustainable competitive advantages 
            for our clients while fostering innovation across industries.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics?.map((metric, index) => (
              <div key={index} className="text-center p-8 bg-muted rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={32} className="text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{metric?.value}</div>
                <div className="text-lg font-semibold text-text-primary mb-3">{metric?.label}</div>
                <p className="text-text-secondary text-sm">{metric?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The principles that guide every decision, every solution, and every relationship we build
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreValues?.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={value?.icon} size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-primary mb-4">{value?.title}</h4>
                    <div className="prose text-text-secondary mb-6">
                      {value?.description?.split('\n\n')?.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-3">{paragraph}</p>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {value?.principles?.map((principle, pIndex) => (
                        <div key={pIndex} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-sm text-text-primary font-medium">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Icon name="Eye" size={24} color="white" />
              <span className="text-accent font-semibold">Our Vision</span>
            </div>
            <h3 className="text-4xl font-bold mb-8">
              A World Where AI Empowers Every Business
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We envision a future where artificial intelligence is not a luxury for tech giants, 
              but a fundamental tool that empowers businesses of all sizes to innovate, compete, 
              and thrive in the digital economy. Our vision extends beyond technology to creating 
              a more efficient, productive, and equitable business landscape worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Lightbulb" size={32} color="white" className="mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-white/80">Continuous advancement in AI capabilities</p>
              </div>
              <div>
                <Icon name="Heart" size={32} color="white" className="mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Accessibility</h4>
                <p className="text-sm text-white/80">Making AI available to all businesses</p>
              </div>
              <div>
                <Icon name="Rocket" size={32} color="white" className="mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Transformation</h4>
                <p className="text-sm text-white/80">Driving meaningful business change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;