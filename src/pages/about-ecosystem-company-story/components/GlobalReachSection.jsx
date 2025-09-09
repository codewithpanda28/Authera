import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GlobalReachSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('asia');

  const regions = [
    {
      key: 'asia',
      name: 'Asia Pacific',
      icon: 'MapPin',
      countries: 8,
      clients: 300,
      color: 'bg-blue-500'
    },
    {
      key: 'americas',
      name: 'Americas',
      icon: 'Globe',
      countries: 5,
      clients: 150,
      color: 'bg-green-500'
    },
    {
      key: 'europe',
      name: 'Europe',
      icon: 'Building',
      countries: 7,
      clients: 80,
      color: 'bg-purple-500'
    },
    {
      key: 'africa',
      name: 'Africa & Middle East',
      icon: 'Sun',
      countries: 3,
      clients: 20,
      color: 'bg-orange-500'
    }
  ];

  const regionalData = {
    asia: {
      title: "Asia Pacific Leadership",
      description: "Our home region where we\'ve established strong market presence across diverse economies and cultures.",
      headquarters: "Mumbai, India",
      keyMarkets: ["India", "Singapore", "Japan", "Australia", "South Korea", "Thailand", "Malaysia", "Philippines"],
      caseStudies: [
        {
          country: "India",
          client: "TechCorp India",
          industry: "Financial Services",
          impact: "Reduced processing time by 80% through AI automation",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        },
        {
          country: "Singapore",
          client: "Maritime Solutions Pte",
          industry: "Logistics",
          impact: "Optimized supply chain operations saving $2M annually",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop"
        },
        {
          country: "Japan",
          client: "Manufacturing Excellence KK",
          industry: "Manufacturing",
          impact: "Improved quality control accuracy by 95%",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
        }
      ],
      culturalAdaptations: [
        "Multi-language support (Hindi, English, Japanese, Korean)",
        "Local compliance with data protection regulations",
        "Cultural sensitivity in UI/UX design",
        "Regional business hour support"
      ]
    },
    americas: {
      title: "Americas Expansion",
      description: "Growing presence in North and South American markets with focus on enterprise transformation.",
      headquarters: "San Francisco, USA (Regional Office)",
      keyMarkets: ["United States", "Canada", "Brazil", "Mexico", "Argentina"],
      caseStudies: [
        {
          country: "United States",
          client: "Fortune 500 Retailer",
          industry: "Retail",
          impact: "Automated inventory management increasing efficiency by 60%",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
        },
        {
          country: "Canada",
          client: "Healthcare Network",
          industry: "Healthcare",
          impact: "Streamlined patient data processing reducing errors by 90%",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          country: "Brazil",
          client: "AgriTech Solutions",
          industry: "Agriculture",
          impact: "Optimized crop monitoring increasing yield by 25%",
          image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
        }
      ],
      culturalAdaptations: [
        "GDPR and CCPA compliance frameworks",
        "English, Spanish, Portuguese language support",
        "North American business practices integration",
        "Local partnership with cloud providers"
      ]
    },
    europe: {
      title: "European Market Presence",
      description: "Serving European enterprises with focus on GDPR compliance and sustainable AI practices.",
      headquarters: "London, UK (Regional Office)",
      keyMarkets: ["United Kingdom", "Germany", "France", "Netherlands", "Sweden", "Switzerland", "Italy"],
      caseStudies: [
        {
          country: "Germany",
          client: "Automotive Innovation GmbH",
          industry: "Automotive",
          impact: "Enhanced production line efficiency by 40% with predictive maintenance",
          image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
        },
        {
          country: "United Kingdom",
          client: "Financial Services Ltd",
          industry: "Banking",
          impact: "Automated compliance reporting saving 1000+ hours monthly",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
        },
        {
          country: "France",
          client: "Luxury Retail SA",
          industry: "Fashion",
          impact: "Personalized customer experience increasing sales by 35%",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
        }
      ],
      culturalAdaptations: [
        "Strict GDPR compliance and data sovereignty",
        "Multi-language European support",
        "Sustainable AI practices and green computing",
        "Local data center partnerships"
      ]
    },
    africa: {
      title: "Emerging Markets Focus",
      description: "Supporting digital transformation in Africa and Middle East with scalable, cost-effective solutions.",
      headquarters: "Dubai, UAE (Regional Office)",
      keyMarkets: ["UAE", "South Africa", "Nigeria"],
      caseStudies: [
        {
          country: "UAE",
          client: "Smart City Initiative",
          industry: "Government",
          impact: "Optimized traffic management reducing congestion by 30%",
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
        },
        {
          country: "South Africa",
          client: "Mining Corporation",
          industry: "Mining",
          impact: "Predictive equipment maintenance reducing downtime by 50%",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
        },
        {
          country: "Nigeria",
          client: "Fintech Startup",
          industry: "Financial Technology",
          impact: "Automated fraud detection improving security by 85%",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
        }
      ],
      culturalAdaptations: [
        "Cost-effective solutions for emerging markets",
        "Arabic and local language support",
        "Mobile-first approach for connectivity challenges",
        "Flexible payment and deployment models"
      ]
    }
  };

  const currentRegion = regionalData?.[selectedRegion];

  const globalStats = [
    { icon: "Globe", value: "25+", label: "Countries Served" },
    { icon: "Users", value: "500+", label: "Global Clients" },
    { icon: "Clock", value: "24/7", label: "Support Coverage" },
    { icon: "Languages", value: "15+", label: "Languages Supported" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Globe" size={24} className="text-accent" />
            <span className="text-accent font-semibold">Global Reach</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Worldwide Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From our roots in India to serving enterprises across continents, 
            we bring AI automation solutions that respect local cultures while delivering global excellence
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {globalStats?.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-muted rounded-xl">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={32} className="text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Regional Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {regions?.map((region) => (
            <button
              key={region?.key}
              onClick={() => setSelectedRegion(region?.key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                selectedRegion === region?.key
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-muted text-text-primary hover:bg-accent/10'
              }`}
            >
              <Icon name={region?.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{region?.name}</div>
                <div className={`text-xs ${
                  selectedRegion === region?.key ? 'text-white/80' : 'text-text-secondary'
                }`}>
                  {region?.countries} countries • {region?.clients} clients
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Regional Content */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Regional Info */}
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {currentRegion?.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {currentRegion?.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="text-sm text-text-primary font-medium">
                      {currentRegion?.headquarters}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="Globe" size={16} className="text-accent" />
                      <span className="text-sm text-text-primary font-medium">Key Markets</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {currentRegion?.keyMarkets?.slice(0, 4)?.map((market, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {market}
                        </span>
                      ))}
                      {currentRegion?.keyMarkets?.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                          +{currentRegion?.keyMarkets?.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Cultural Adaptations</h4>
                  <div className="space-y-2">
                    {currentRegion?.culturalAdaptations?.map((adaptation, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{adaptation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <div className="lg:col-span-2">
                <h4 className="text-xl font-bold text-primary mb-6">Regional Success Stories</h4>
                <div className="space-y-6">
                  {currentRegion?.caseStudies?.map((study, index) => (
                    <div key={index} className="flex space-x-4 p-4 bg-muted rounded-lg">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={study?.image}
                          alt={study?.client}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-primary">{study?.client}</h5>
                            <p className="text-sm text-accent">{study?.country} • {study?.industry}</p>
                          </div>
                          <Icon name="ExternalLink" size={16} className="text-text-secondary" />
                        </div>
                        <p className="text-sm text-text-secondary">{study?.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Map Visualization */}
        <div className="bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Interactive Global Presence
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Our solutions are deployed across diverse markets, each with unique requirements 
            and cultural considerations that we carefully address.
          </p>
          
          {/* Simplified World Map Representation */}
          <div className="relative bg-white rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {regions?.map((region, index) => (
                <div
                  key={region?.key}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    selectedRegion === region?.key
                      ? 'border-accent bg-accent/5' :'border-gray-200 hover:border-accent/50'
                  }`}
                  onClick={() => setSelectedRegion(region?.key)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${region?.color}`}>
                    <Icon name={region?.icon} size={24} color="white" />
                  </div>
                  <div className="text-sm font-semibold text-primary">{region?.name}</div>
                  <div className="text-xs text-text-secondary mt-1">
                    {region?.countries} countries
                  </div>
                  <div className="text-xs text-accent font-medium">
                    {region?.clients} clients
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;