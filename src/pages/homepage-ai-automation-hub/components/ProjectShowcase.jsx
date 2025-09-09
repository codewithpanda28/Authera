import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: "E-commerce Order Processing Automation",
      client: "RetailMax India",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      beforeMetrics: {
        processingTime: "45 minutes",
        errorRate: "12%",
        dailyOrders: "500",
        manualStaff: "8 people"
      },
      afterMetrics: {
        processingTime: "3 minutes",
        errorRate: "0.5%",
        dailyOrders: "2000+",
        manualStaff: "2 people"
      },
      results: {
        timeSaved: "93%",
        costReduction: "75%",
        accuracyImprovement: "96%",
        roi: "340%"
      },
      testimonial: {
        quote: "The automation solution transformed our entire order processing workflow. We\'re now handling 4x more orders with fewer errors and reduced costs.",
        author: "Priya Sharma",
        position: "Operations Director",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      tags: ["Order Processing", "Inventory Management", "Customer Notifications"]
    },
    {
      id: 2,
      title: "Financial Report Generation System",
      client: "FinanceFlow Solutions",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      beforeMetrics: {
        reportTime: "8 hours",
        accuracy: "85%",
        monthlyReports: "50",
        analystHours: "400 hrs/month"
      },
      afterMetrics: {
        reportTime: "15 minutes",
        accuracy: "99.2%",
        monthlyReports: "200+",
        analystHours: "50 hrs/month"
      },
      results: {
        timeSaved: "97%",
        costReduction: "87%",
        accuracyImprovement: "17%",
        roi: "420%"
      },
      testimonial: {
        quote: "Our financial reporting is now faster, more accurate, and allows our team to focus on strategic analysis rather than manual data compilation.",
        author: "Rajesh Kumar",
        position: "CFO",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      tags: ["Financial Reports", "Data Analysis", "Compliance Automation"]
    },
    {
      id: 3,
      title: "Customer Support Chatbot Integration",
      client: "TechSupport Pro",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&h=600&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      beforeMetrics: {
        responseTime: "24 hours",
        resolution: "60%",
        dailyTickets: "200",
        supportStaff: "12 agents"
      },
      afterMetrics: {
        responseTime: "2 minutes",
        resolution: "85%",
        dailyTickets: "500+",
        supportStaff: "6 agents"
      },
      results: {
        timeSaved: "92%",
        costReduction: "50%",
        satisfactionIncrease: "40%",
        roi: "280%"
      },
      testimonial: {
        quote: "The AI chatbot handles routine queries perfectly, allowing our human agents to focus on complex issues. Customer satisfaction has improved significantly.",
        author: "Anita Desai",
        position: "Customer Success Manager",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      tags: ["AI Chatbot", "Natural Language Processing", "Multi-channel Support"]
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects?.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, projects?.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  const currentProjectData = projects?.[currentProject];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Trophy" size={16} className="text-success" />
            <span className="text-success font-medium text-sm">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            See how our AI automation solutions have transformed businesses across industries, 
            delivering measurable ROI and operational excellence.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="bg-gradient-to-br from-muted/30 to-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Details */}
            <div className="space-y-8">
              {/* Project Header */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentProjectData?.industry}
                  </div>
                  <div className="text-text-secondary text-sm">Case Study #{currentProject + 1}</div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                  {currentProjectData?.title}
                </h3>
                
                <p className="text-lg text-text-secondary mb-4">
                  Client: <span className="font-semibold text-primary">{currentProjectData?.client}</span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentProjectData?.tags?.map((tag, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Before/After Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-2" />
                    Before Automation
                  </h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(currentProjectData?.beforeMetrics)?.map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-red-600 capitalize">{key?.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-red-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-success/10 rounded-xl p-4 border border-success/20">
                  <h4 className="font-semibold text-success mb-3 flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    After Automation
                  </h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(currentProjectData?.afterMetrics)?.map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-success/80 capitalize">{key?.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-success">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(currentProjectData?.results)?.map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
                    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                    <div className="text-xs text-text-secondary capitalize">
                      {key?.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start space-x-4">
                  <Image
                    src={currentProjectData?.testimonial?.avatar}
                    alt={currentProjectData?.testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <blockquote className="text-text-secondary italic mb-3">
                      "{currentProjectData?.testimonial?.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-primary">{currentProjectData?.testimonial?.author}</div>
                      <div className="text-sm text-text-secondary">{currentProjectData?.testimonial?.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className="space-y-6">
              {/* Main Project Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={currentProjectData?.image}
                  alt={currentProjectData?.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">Live Project</div>
                  <div className="font-semibold">{currentProjectData?.client}</div>
                </div>
              </div>

              {/* Video Testimonial Preview */}
              <div className="relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={currentProjectData?.videoThumbnail}
                  alt="Video testimonial"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white/90 text-primary hover:bg-white rounded-full"
                    iconName="Play"
                  >
                    Watch Success Story
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  Client Testimonial
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              
              <div className="flex space-x-2">
                {projects?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject ? 'bg-accent' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-text-secondary"
                iconName={isPlaying ? "Pause" : "Play"}
                iconPosition="left"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              
              <Link to="/portfolio-showcase-success-stories">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;