import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import ServiceDetailsModal from './ServiceDetailsModal';

const ServiceSelector = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'ai-hr-automation',
      title: 'AI HR Automation (Resume Parser + Screening)',
      description: 'Revolutionize hiring with AI-powered tools that cut down manual HR work and bring top talent faster.',
      icon: 'Zap',
      priceRange: '₹75K – ₹2L',
      timeline: '3-4 weeks',
      savings: '60-80%',
      features: [
        'Bulk Resume Upload (single & bulk support with credits/coin system)',
        'AI Candidate Scoring & Shortlisting',
        'Automated Interview Scheduling (Google Calendar Integration)',
        'Automated Candidate Communication – Email & WhatsApp notifications for updates.'
      ],
      gradient: 'from-accent to-accent/80',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      image: 'https://images.unsplash.com/photo-1600880292089-90e1a3d9b1b3?w=1200&h=800&fit=crop',
      howItWorks: [
        { step: '1', title: 'Ingest Resumes', detail: 'Upload PDFs or DOCX resumes individually or in bulk.' },
        { step: '2', title: 'AI Parsing', detail: 'Extract skills, experience, and entities using NLP.' },
        { step: '3', title: 'Scoring', detail: 'Rank candidates by role-fit with configurable weights.' },
        { step: '4', title: 'Schedule', detail: 'Auto-invite top candidates via Gmail/Outlook + Calendar.' }
      ],
      documents: [
        { type: 'docx', label: 'Product One-Pager', url: '/assets/docs/hr-automation-onepager.docx' },
        { type: 'ppt', label: 'Client Presentation', url: '/assets/docs/hr-automation-deck.pptx' }
      ],
      contact: { name: 'Akash Gupta', email: 'hello@authera.in', phone: '+91-90000-00000' }
    },
    // {
    //   id: 'data-analytics',
    //   title: 'AI Data Analytics',
    //   description: 'Transform raw data into actionable business insights',
    //   icon: 'BarChart3',
    //   priceRange: '₹3L - ₹12L',
    //   timeline: '3-6 weeks',
    //   savings: '40-60%',
    //   features: ['Data Pipeline', 'ML Models', 'Dashboard Creation', 'Predictive Analytics'],
    //   gradient: 'from-secondary to-secondary/80',
    //   bgColor: 'bg-secondary/10',
    //   borderColor: 'border-secondary/20'
    // },
    // {
    //   id: 'customer-service',
    //   title: 'Customer Service AI',
    //   description: 'Enhance customer experience with intelligent chatbots and support',
    //   icon: 'MessageSquare',
    //   priceRange: '₹1.5L - ₹6L',
    //   timeline: '2-3 weeks',
    //   savings: '50-70%',
    //   features: ['Chatbot Development', 'NLP Integration', 'Multi-channel Support', 'Analytics'],
    //   gradient: 'from-success to-success/80',
    //   bgColor: 'bg-success/10',
    //   borderColor: 'border-success/20'
    // },
    // {
    //   id: 'document-processing',
    //   title: 'Document Processing',
    //   description: 'Automate document extraction, processing, and management',
    //   icon: 'FileText',
    //   priceRange: '₹2.5L - ₹10L',
    //   timeline: '3-5 weeks',
    //   savings: '70-90%',
    //   features: ['OCR Technology', 'Data Extraction', 'Validation Rules', 'Integration APIs'],
    //   gradient: 'from-warning to-warning/80',
    //   bgColor: 'bg-warning/10',
    //   borderColor: 'border-warning/20'
    // },
    // {
    //   id: 'inventory-management',
    //   title: 'Smart Inventory',
    //   description: 'Optimize inventory with AI-powered demand forecasting',
    //   icon: 'Package',
    //   priceRange: '₹4L - ₹15L',
    //   timeline: '4-8 weeks',
    //   savings: '30-50%',
    //   features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Integration', 'Real-time Tracking'],
    //   gradient: 'from-purple-500 to-purple-400',
    //   bgColor: 'bg-purple-50',
    //   borderColor: 'border-purple-200'
    // },
    // {
    //   id: 'financial-automation',
    //   title: 'Financial Automation',
    //   description: 'Automate accounting, invoicing, and financial reporting',
    //   icon: 'DollarSign',
    //   priceRange: '₹3L - ₹12L',
    //   timeline: '3-6 weeks',
    //   savings: '60-80%',
    //   features: ['Invoice Processing', 'Expense Management', 'Financial Reports', 'Compliance Checks'],
    //   gradient: 'from-emerald-500 to-emerald-400',
    //   bgColor: 'bg-emerald-50',
    //   borderColor: 'border-emerald-200'
    // }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={16} className="text-accent" />
            <span className="text-accent font-medium text-sm">AI-Powered Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Automation Journey
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover the perfect AI automation solution for your business needs. 
            Each service is designed to deliver measurable ROI and transform your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              className={`group relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                hoveredService === service?.id ? service?.borderColor : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className={`p-6 rounded-t-2xl ${service?.bgColor} border-b border-gray-100`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service?.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon name={service?.icon} size={24} color="white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Starting from</div>
                    <div className="font-bold text-primary">{service?.priceRange}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{service?.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service?.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Icon name="Clock" size={16} className="text-accent mx-auto mb-1" />
                    <div className="text-xs text-text-secondary">Timeline</div>
                    <div className="font-semibold text-primary text-sm">{service?.timeline}</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Icon name="TrendingUp" size={16} className="text-success mx-auto mb-1" />
                    <div className="text-xs text-text-secondary">Cost Savings</div>
                    <div className="font-semibold text-primary text-sm">{service?.savings}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service?.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full group-hover:bg-gradient-to-r group-hover:${service?.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => setSelectedService(service)}
                >
                  Learn More
                </Button>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service?.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Not sure which solution fits your needs?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our AI automation experts will analyze your processes and recommend the perfect solution mix for maximum ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-scheduling-multi-channel-engagement">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Free Consultation
                </Button>
              </Link>
              
              <Link to="/services-universe-interactive-solutions">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8"
                  iconName="Zap"
                  iconPosition="left"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {selectedService && (
        <ServiceDetailsModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBook={() => {
            window.location.href = '/contact-scheduling-multi-channel-engagement';
          }}
          onCalculate={() => {
            const anchor = document.getElementById('roi-calculator-anchor');
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
            setSelectedService(null);
          }}
        />
      )}
    </section>
  );
};

export default ServiceSelector;