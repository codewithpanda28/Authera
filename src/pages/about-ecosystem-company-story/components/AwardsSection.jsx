import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const awards = [
    {
      id: 1,
      title: "AI Excellence Award 2024",
      organization: "Global AI Innovation Council",
      year: "2024",
      category: "Best AI Automation Platform",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
      description: "Recognized for outstanding innovation in AI automation solutions and measurable client impact across multiple industries.",
      impact: "Serving 500+ global enterprises with 98% satisfaction rate"
    },
    {
      id: 2,
      title: "Tech Startup of the Year",
      organization: "Indian Tech Awards",
      year: "2023",
      category: "Emerging Technology",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      description: "Honored for rapid growth, innovation leadership, and contribution to India's AI ecosystem development.",
      impact: "300% year-over-year growth and international expansion"
    },
    {
      id: 3,
      title: "Digital Transformation Leader",
      organization: "Enterprise Tech Summit",
      year: "2023",
      category: "Business Impact",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      description: "Awarded for helping enterprises achieve significant digital transformation through AI automation solutions.",
      impact: "Transformed operations for 250+ businesses globally"
    },
    {
      id: 4,
      title: "Innovation Excellence Award",
      organization: "AI & Automation Conference",
      year: "2022",
      category: "Technical Innovation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      description: "Recognized for breakthrough innovations in machine learning algorithms and automation frameworks.",
      impact: "12 patents filed and 40+ research publications"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "ISO 27001:2013",
      type: "Information Security Management",
      issuer: "International Organization for Standardization",
      validUntil: "2026",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Certified for maintaining the highest standards of information security management systems.",
      scope: "All AI automation services and client data handling"
    },
    {
      id: 2,
      title: "SOC 2 Type II",
      type: "Security & Availability",
      issuer: "American Institute of CPAs",
      validUntil: "2025",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      description: "Audited and certified for security, availability, and confidentiality controls.",
      scope: "Cloud-based AI automation platform and services"
    },
    {
      id: 3,
      title: "AWS Advanced Partner",
      type: "Cloud Technology",
      issuer: "Amazon Web Services",
      validUntil: "2025",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Advanced tier partnership with AWS for cloud-based AI and ML solutions.",
      scope: "AI/ML services, cloud infrastructure, and enterprise solutions"
    },
    {
      id: 4,
      title: "Microsoft Gold Partner",
      type: "AI & Machine Learning",
      issuer: "Microsoft Corporation",
      validUntil: "2025",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Gold competency in AI and Machine Learning solutions on Microsoft Azure platform.",
      scope: "Azure AI services, cognitive services, and enterprise integration"
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      title: "The Future of AI Automation in Enterprise",
      publication: "TechCrunch",
      date: "March 2024",
      type: "Feature Article",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
      excerpt: "How AI Automation Hub is revolutionizing enterprise operations through intelligent automation solutions...",
      link: "#"
    },
    {
      id: 2,
      title: "Indian AI Startups Making Global Impact",
      publication: "Forbes India",
      date: "January 2024",
      type: "Cover Story",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      excerpt: "Featured as one of the top 10 Indian AI startups creating significant impact in international markets...",
      link: "#"
    },
    {
      id: 3,
      title: "Democratizing AI: A Conversation with CEO",
      publication: "Harvard Business Review",
      date: "November 2023",
      type: "Interview",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      excerpt: "An in-depth interview discussing the vision of making AI accessible to businesses of all sizes...",
      link: "#"
    },
    {
      id: 4,
      title: "AI Automation Trends 2024",
      publication: "MIT Technology Review",
      date: "October 2023",
      type: "Expert Opinion",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      excerpt: "Our CTO shares insights on emerging trends in AI automation and their business implications...",
      link: "#"
    }
  ];

  const tabs = [
    { key: 'awards', label: 'Awards & Recognition', icon: 'Award', count: awards?.length },
    { key: 'certifications', label: 'Certifications', icon: 'Shield', count: certifications?.length },
    { key: 'media', label: 'Media Coverage', icon: 'Newspaper', count: mediaFeatures?.length }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'awards':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {awards?.map((award) => (
              <div key={award?.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={award?.image}
                    alt={award?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {award?.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{award?.title}</h3>
                      <p className="text-accent font-medium mb-1">{award?.organization}</p>
                      <p className="text-sm text-text-secondary">{award?.category}</p>
                    </div>
                    <Icon name="Award" size={24} className="text-accent flex-shrink-0" />
                  </div>
                  <p className="text-text-secondary mb-4">{award?.description}</p>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="TrendingUp" size={16} className="text-success" />
                      <span className="text-sm font-medium text-text-primary">Impact</span>
                    </div>
                    <p className="text-sm text-text-secondary">{award?.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cert?.image}
                    alt={cert?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
                    Valid until {cert?.validUntil}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{cert?.title}</h3>
                      <p className="text-accent font-medium mb-1">{cert?.type}</p>
                      <p className="text-sm text-text-secondary">{cert?.issuer}</p>
                    </div>
                    <Icon name="Shield" size={24} className="text-success flex-shrink-0" />
                  </div>
                  <p className="text-text-secondary mb-4">{cert?.description}</p>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="Target" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-text-primary">Scope</span>
                    </div>
                    <p className="text-sm text-text-secondary">{cert?.scope}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'media':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {mediaFeatures?.map((media) => (
              <div key={media?.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={media?.image}
                    alt={media?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {media?.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{media?.title}</h3>
                      <p className="text-accent font-medium mb-1">{media?.publication}</p>
                      <p className="text-sm text-text-secondary">{media?.date}</p>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-accent flex-shrink-0" />
                  </div>
                  <p className="text-text-secondary mb-4">{media?.excerpt}</p>
                  <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
                    <span className="font-medium">Read Full Article</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Trophy" size={24} className="text-accent" />
            <span className="text-accent font-semibold">Recognition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders, 
            certification bodies, and media publications worldwide
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.key}
              onClick={() => setActiveTab(tab?.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab?.key
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-muted text-text-primary hover:bg-accent/10'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeTab === tab?.key
                  ? 'bg-white/20 text-white' :'bg-accent/10 text-accent'
              }`}>
                {tab?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-16">
          {renderContent()}
        </div>

        {/* Trust Indicators */}
        <div className="bg-muted rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl text-text-secondary">
              Our partnerships and certifications ensure the highest standards of service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-text-secondary">Security Compliance</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-text-secondary">Industry Awards</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-text-secondary">Enterprise Clients</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Globe" size={32} className="text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-text-secondary">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;