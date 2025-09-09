import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const [currentNotification, setCurrentNotification] = useState(0);

  const clientLogos = [
    { name: "Tata Consultancy Services", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png" },
    { name: "Reliance Industries", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Reliance_Industries_Logo.svg/200px-Reliance_Industries_Logo.svg.png" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Wipro_logo.svg/200px-Wipro_logo.svg.png" },
    { name: "Microsoft India", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
    { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flipkart_logo.svg/200px-Flipkart_logo.svg.png" },
    { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Paytm_logo.svg/200px-Paytm_logo.svg.png" }
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "Shield",
      color: "text-success"
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: "Lock",
      color: "text-secondary"
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection Certified",
      icon: "UserCheck",
      color: "text-accent"
    },
    {
      name: "AWS Partner",
      description: "Advanced Consulting Partner",
      icon: "Cloud",
      color: "text-warning"
    }
  ];

  const liveNotifications = [
    {
      message: "RetailMax India completed order automation project",
      time: "2 minutes ago",
      type: "success",
      icon: "CheckCircle"
    },
    {
      message: "FinanceFlow Solutions achieved 97% report accuracy",
      time: "8 minutes ago",
      type: "achievement",
      icon: "Trophy"
    },
    {
      message: "TechSupport Pro reduced response time by 92%",
      time: "15 minutes ago",
      type: "improvement",
      icon: "TrendingUp"
    },
    {
      message: "Manufacturing Corp saved ₹2.5Cr annually",
      time: "23 minutes ago",
      type: "savings",
      icon: "DollarSign"
    },
    {
      message: "E-commerce Plus automated 500+ daily orders",
      time: "31 minutes ago",
      type: "automation",
      icon: "Zap"
    }
  ];

  const keyMetrics = [
    {
      value: "500+",
      label: "Projects Completed",
      icon: "CheckCircle",
      color: "text-success"
    },
    {
      value: "98.5%",
      label: "Client Satisfaction",
      icon: "Heart",
      color: "text-red-500"
    },
    {
      value: "₹150Cr+",
      label: "Client Savings Generated",
      icon: "TrendingUp",
      color: "text-accent"
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: "Clock",
      color: "text-secondary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % liveNotifications?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success': return 'text-success bg-success/10 border-success/20';
      case 'achievement': return 'text-warning bg-warning/10 border-warning/20';
      case 'improvement': return 'text-accent bg-accent/10 border-accent/20';
      case 'savings': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'automation': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-primary bg-muted border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Live Notifications */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-muted/50 to-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <Icon 
              name={liveNotifications?.[currentNotification]?.icon} 
              size={16} 
              className={getNotificationColor(liveNotifications?.[currentNotification]?.type)?.split(' ')?.[0]} 
            />
            <span className="text-text-primary font-medium text-sm">
              {liveNotifications?.[currentNotification]?.message}
            </span>
            <span className="text-text-secondary text-xs">
              {liveNotifications?.[currentNotification]?.time}
            </span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics?.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-muted/30 rounded-2xl border border-gray-100">
              <Icon name={metric?.icon} size={32} className={`mx-auto mb-3 ${metric?.color}`} />
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{metric?.value}</div>
              <div className="text-text-secondary text-sm">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">Trusted by Industry Leaders</h3>
            <p className="text-text-secondary">From startups to Fortune 500 companies across India and globally</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {clientLogos?.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
              >
                <Image
                  src={client?.logo}
                  alt={client?.name}
                  className="max-w-full h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Security */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4`}>
                <Icon name={cert?.icon} size={24} className={cert?.color} />
              </div>
              <h4 className="font-bold text-primary mb-2">{cert?.name}</h4>
              <p className="text-text-secondary text-sm">{cert?.description}</p>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-r from-muted/50 to-white rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Awards & Recognition</h3>
            <p className="text-text-secondary">Recognized for excellence in AI automation and digital transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-warning to-warning/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} color="white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Best AI Innovation 2024</h4>
              <p className="text-text-secondary text-sm">India Digital Awards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} color="white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Top Automation Partner</h4>
              <p className="text-text-secondary text-sm">TechCrunch India 2024</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={32} color="white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Excellence in Customer Success</h4>
              <p className="text-text-secondary text-sm">Business Today Awards</p>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} className="text-accent" />
              <span className="text-text-primary font-medium">Mumbai, India</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} className="text-secondary" />
              <span className="text-text-primary font-medium">15+ Countries Served</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-success" />
              <span className="text-text-primary font-medium">50+ Team Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;