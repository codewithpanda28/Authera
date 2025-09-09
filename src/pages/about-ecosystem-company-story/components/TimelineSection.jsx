import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2025);

  const timelineData = [
    {
      year: 2019,
      title: "The Genesis",
      subtitle: "Founded with Vision",
      description: `Started as a small team of AI enthusiasts with a mission to democratize automation technology for businesses worldwide.\n\nOur founders recognized the gap between complex AI capabilities and practical business applications.`,
      metrics: { clients: 5, team: 3, revenue: "₹10L" },
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      achievements: [
        "First AI automation prototype",
        "Initial seed funding secured",
        "Core team formation"
      ]
    },
    {
      year: 2020,
      title: "Building Foundation",
      subtitle: "Product Development",
      description: `Focused on building robust AI automation frameworks and establishing our first enterprise partnerships.\n\nDeveloped proprietary algorithms for process optimization and client-specific customization.`,
      metrics: { clients: 25, team: 12, revenue: "₹75L" },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      achievements: [
        "First enterprise client onboarded",
        "AI framework v1.0 launched",
        "Team expansion to 12 members"
      ]
    },
    {
      year: 2021,
      title: "Global Expansion",
      subtitle: "International Reach",
      description: `Expanded operations to serve international markets while maintaining strong presence in India.\n\nEstablished partnerships with major cloud providers and AI platform vendors.`,
      metrics: { clients: 100, team: 35, revenue: "₹5Cr" },
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      achievements: [
        "100+ client milestone",
        "International market entry",
        "AWS & Azure partnerships"
      ]
    },
    {
      year: 2022,
      title: "Innovation Leadership",
      subtitle: "Industry Recognition",
      description: `Recognized as a leading AI automation provider with multiple industry awards and certifications.\n\nLaunched advanced machine learning solutions and predictive analytics platforms.`,
      metrics: { clients: 250, team: 60, revenue: "₹15Cr" },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      achievements: [
        "AI Excellence Award 2022",
        "ISO 27001 certification",
        "Advanced ML platform launch"
      ]
    },
    {
      year: 2023,
      title: "Market Leadership",
      subtitle: "Scaling Excellence",
      description: `Achieved market leadership position with comprehensive AI solutions portfolio.\n\nExpanded to serve Fortune 500 companies and established dedicated R&D division.`,
      metrics: { clients: 400, team: 85, revenue: "₹35Cr" },
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      achievements: [
        "Fortune 500 partnerships",
        "R&D center establishment",
        "Patent applications filed"
      ]
    },
    {
      year: 2024,
      title: "AI Revolution",
      subtitle: "Next-Gen Solutions",
      description: `Pioneered next-generation AI solutions with GPT integration and advanced automation workflows.\n\nLaunched AI-as-a-Service platform serving diverse industry verticals.`,
      metrics: { clients: 500, team: 120, revenue: "₹60Cr" },
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      achievements: [
        "GPT-4 integration platform",
        "AI-as-a-Service launch",
        "500+ client milestone"
      ]
    },
    {
      year: 2025,
      title: "Future Ready",
      subtitle: "Continuous Innovation",
      description: `Leading the AI automation revolution with cutting-edge solutions and global impact.\n\nFocused on sustainable growth and emerging technology integration.`,
      metrics: { clients: "600+", team: "150+", revenue: "₹100Cr+" },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      achievements: [
        "Global market leadership",
        "Sustainable AI initiatives",
        "Next-gen platform development"
      ]
    }
  ];

  const currentData = timelineData?.find(item => item?.year === activeYear);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Clock" size={24} className="text-accent" />
            <span className="text-accent font-semibold">Our Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Timeline of Innovation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From humble beginnings to industry leadership - explore the milestones 
            that shaped our AI automation journey
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              {timelineData?.map((item) => (
                <button
                  key={item?.year}
                  onClick={() => setActiveYear(item?.year)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeYear === item?.year
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-muted text-text-primary hover:bg-accent/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activeYear === item?.year ? 'bg-white' : 'bg-accent'
                    }`}></div>
                    <div>
                      <div className="font-semibold">{item?.year}</div>
                      <div className={`text-sm ${
                        activeYear === item?.year ? 'text-white/80' : 'text-text-secondary'
                      }`}>
                        {item?.title}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-9">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={currentData?.image}
                  alt={currentData?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-3xl font-bold">{currentData?.year}</div>
                  <div className="text-lg">{currentData?.subtitle}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {currentData?.title}
                </h3>
                
                <div className="prose prose-lg text-text-secondary mb-8">
                  {currentData?.description?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {currentData?.metrics?.clients}
                    </div>
                    <div className="text-sm text-text-secondary">Clients</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {currentData?.metrics?.team}
                    </div>
                    <div className="text-sm text-text-secondary">Team Size</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {currentData?.metrics?.revenue}
                    </div>
                    <div className="text-sm text-text-secondary">Revenue</div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {currentData?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span className="text-sm text-text-primary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;