import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import PortfolioHero from './components/PortfolioHero';
import IndustryFilter from './components/IndustryFilter';
import CaseStudyCard from './components/CaseStudyCard';
import CaseStudyModal from './components/CaseStudyModal';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState({ industry: 'all', type: 'all' });
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const itemsPerPage = 9;

  // Mock case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Process Automation for TechManufacturing India",
      description: "Complete automation of production line processes resulting in 45% cost reduction and 300% productivity increase",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      industry: "Manufacturing",
      industryIcon: "Factory",
      client: "TechManufacturing India Pvt Ltd",
      location: "Mumbai, India",
      timeline: "3 months",
      rating: 5,
      isPremium: true,
      technologies: ["Python", "TensorFlow", "IoT Sensors", "Cloud Computing", "Machine Learning", "Data Analytics"],
      metrics: [
        { value: "45%", label: "Cost Reduction" },
        { value: "300%", label: "Productivity Increase" },
        { value: "99.9%", label: "Uptime Achieved" }
      ],
      challenge: `TechManufacturing India faced significant challenges with manual production processes, leading to high operational costs, frequent quality issues, and limited scalability. The company was struggling with inconsistent output quality, high labor costs, and inability to meet growing market demands efficiently.`,
      solution: `We implemented a comprehensive AI-powered automation system that integrated IoT sensors, machine learning algorithms, and real-time monitoring dashboards. The solution included predictive maintenance, quality control automation, and intelligent resource allocation systems.`,
      beforeMetrics: [
        "Manual quality checks taking 2 hours per batch",
        "15% defect rate in production",
        "Unplanned downtime of 20% monthly",
        "High labor costs and human errors"
      ],
      afterMetrics: [
        "Automated quality checks in 10 minutes",
        "Defect rate reduced to 0.5%",
        "99.9% uptime with predictive maintenance",
        "45% reduction in operational costs"
      ],
      achievements: [
        { value: "₹2.5Cr", label: "Annual Savings" },
        { value: "300%", label: "ROI in Year 1" },
        { value: "Zero", label: "Safety Incidents" }
      ],
      testimonial: {
        quote: "The AI automation solution transformed our manufacturing process completely. We achieved 45% cost reduction and 300% productivity increase within just 6 months.",
        author: "Rajesh Kumar",
        position: "Operations Director"
      }
    },
    {
      id: 2,
      title: "E-commerce Customer Service Automation for GlobalShop",
      description: "AI-powered customer service automation reducing response time by 80% and achieving 98% customer satisfaction",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      industry: "E-commerce",
      industryIcon: "ShoppingCart",
      client: "GlobalShop Solutions",
      location: "New York, USA",
      timeline: "2 months",
      rating: 5,
      isPremium: false,
      technologies: ["Natural Language Processing", "Chatbot Framework", "CRM Integration", "Analytics Dashboard"],
      metrics: [
        { value: "80%", label: "Faster Response" },
        { value: "98%", label: "Customer Satisfaction" },
        { value: "24/7", label: "Support Available" }
      ],
      challenge: `GlobalShop Solutions was overwhelmed with customer inquiries, leading to long response times, inconsistent service quality, and high support costs. The manual customer service approach couldn't scale with their rapid business growth.`,
      solution: `We developed an intelligent customer service automation platform using advanced NLP and machine learning. The solution included smart chatbots, automated ticket routing, sentiment analysis, and seamless human handoff capabilities.`,
      beforeMetrics: [
        "Average response time of 4 hours",
        "Customer satisfaction at 72%",
        "High support agent turnover",
        "Limited support hours (9-5)"
      ],
      afterMetrics: [
        "Instant responses for 90% of queries",
        "Customer satisfaction increased to 98%",
        "Reduced support team workload by 60%",
        "24/7 automated support coverage"
      ],
      achievements: [
        { value: "$500K", label: "Annual Cost Savings" },
        { value: "90%", label: "Query Resolution" },
        { value: "5x", label: "Support Efficiency" }
      ],
      testimonial: {
        quote: "Working with AI Automation Hub was a game-changer for our e-commerce platform. The customer service automation reduced response time by 80% and increased customer satisfaction to 98%.",
        author: "Sarah Johnson",
        position: "CEO"
      }
    },
    {
      id: 3,
      title: "Financial Data Analytics Automation for FinTech Innovations",
      description: "Real-time financial data processing and automated reporting system saving 20 hours per week",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      industry: "Financial Services",
      industryIcon: "CreditCard",
      client: "FinTech Innovations Ltd",
      location: "Singapore",
      timeline: "4 months",
      rating: 5,
      isPremium: true,
      technologies: ["Python", "Apache Spark", "Machine Learning", "Real-time Analytics", "Cloud Infrastructure"],
      metrics: [
        { value: "20hrs", label: "Weekly Time Saved" },
        { value: "95%", label: "Accuracy Improvement" },
        { value: "Real-time", label: "Data Processing" }
      ],
      challenge: `FinTech Innovations struggled with manual financial data processing, taking weeks to generate reports and analyze market trends. The lack of real-time insights was hindering their competitive advantage and decision-making capabilities.`,
      solution: `We built a comprehensive financial data analytics platform with real-time processing capabilities, automated report generation, and predictive analytics. The system integrated multiple data sources and provided interactive dashboards for stakeholders.`,
      beforeMetrics: [
        "Manual report generation taking 2 weeks",
        "Data accuracy issues at 85%",
        "Limited real-time market insights",
        "High dependency on manual analysis"
      ],
      afterMetrics: [
        "Automated reports generated in minutes",
        "Data accuracy improved to 99.5%",
        "Real-time market trend analysis",
        "Self-service analytics for all teams"
      ],
      achievements: [
        { value: "$1.2M", label: "Revenue Impact" },
        { value: "400%", label: "Processing Speed" },
        { value: "99.5%", label: "Data Accuracy" }
      ],
      testimonial: {
        quote: "The financial data analytics automation has revolutionized our decision-making process. Real-time insights and automated reporting saved us 20 hours per week and improved accuracy by 95%.",
        author: "Michael Chen",
        position: "CFO"
      }
    },
    // {
    //   id: 4,
    //   title: "Healthcare Patient Management System for MediCare Plus",
    //   description: "Automated patient scheduling and management system improving efficiency by 60% and reducing wait times",
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    //   industry: "Healthcare",
    //   industryIcon: "Heart",
    //   client: "MediCare Plus Hospital",
    //   location: "Delhi, India",
    //   timeline: "5 months",
    //   rating: 5,
    //   isPremium: false,
    //   technologies: ["Healthcare APIs", "Scheduling Algorithms", "Patient Portal", "Mobile App", "Cloud Security"],
    //   metrics: [
    //     { value: "60%", label: "Efficiency Improvement" },
    //     { value: "40%", label: "Reduced Wait Times" },
    //     { value: "95%", label: "Patient Satisfaction" }
    //   ],
    //   challenge: `MediCare Plus Hospital faced challenges with manual patient scheduling, long wait times, and inefficient resource allocation. The paper-based system was causing delays and patient dissatisfaction.`,
    //   solution: `We developed an intelligent patient management system with automated scheduling, resource optimization, and patient communication features. The solution included mobile apps for patients and staff dashboards for real-time monitoring.`,
    //   beforeMetrics: [
    //     "Average wait time of 45 minutes",
    //     "Manual scheduling conflicts",
    //     "Patient satisfaction at 70%",
    //     "High administrative workload"
    //   ],
    //   afterMetrics: [
    //     "Wait time reduced to 15 minutes",
    //     "Zero scheduling conflicts",
    //     "Patient satisfaction at 95%",
    //     "60% reduction in admin tasks"
    //   ],
    //   achievements: [
    //     { value: "₹80L", label: "Annual Savings" },
    //     { value: "500+", label: "Patients/Day" },
    //     { value: "Zero", label: "Scheduling Errors" }
    //   ],
    //   testimonial: {
    //     quote: "The patient management system has transformed our hospital operations. We\'ve reduced wait times by 40% and improved patient satisfaction to 95%.",
    //     author: "Dr. Anita Verma",
    //     position: "Hospital Administrator"
    //   }
    // },
    // {
    //   id: 5,
    //   title: "Supply Chain Optimization for LogiFlow International",
    //   description: "AI-powered supply chain automation reducing delivery times by 35% and cutting logistics costs by 25%",
    //   image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    //   industry: "Logistics",
    //   industryIcon: "Truck",
    //   client: "LogiFlow International",
    //   location: "Dubai, UAE",
    //   timeline: "6 months",
    //   rating: 5,
    //   isPremium: true,
    //   technologies: ["Route Optimization", "IoT Tracking", "Predictive Analytics", "Mobile Apps", "API Integration"],
    //   metrics: [
    //     { value: "35%", label: "Faster Delivery" },
    //     { value: "25%", label: "Cost Reduction" },
    //     { value: "99%", label: "On-time Delivery" }
    //   ],
    //   challenge: `LogiFlow International struggled with inefficient route planning, high fuel costs, and delayed deliveries. The manual logistics management was causing customer dissatisfaction and increased operational expenses.`,
    //   solution: `We implemented an AI-powered supply chain optimization platform with real-time tracking, intelligent route planning, and predictive maintenance. The system integrated with existing ERP and provided mobile apps for drivers and customers.`,
    //   beforeMetrics: [
    //     "Average delivery delay of 2 days",
    //     "High fuel consumption and costs",
    //     "Limited shipment visibility",
    //     "Customer complaints about delays"
    //   ],
    //   afterMetrics: [
    //     "99% on-time delivery rate",
    //     "25% reduction in fuel costs",
    //     "Real-time shipment tracking",
    //     "Customer satisfaction at 96%"
    //   ],
    //   achievements: [
    //     { value: "$2.1M", label: "Annual Savings" },
    //     { value: "50K+", label: "Shipments/Month" },
    //     { value: "96%", label: "Customer Satisfaction" }
    //   ],
    //   testimonial: {
    //     quote: "The supply chain optimization has revolutionized our logistics operations. We\'ve achieved 35% faster deliveries and 25% cost reduction.",
    //     author: "Ahmed Al-Rashid",
    //     position: "Operations Manager"
    //   }
    // },
    // {
    //   id: 6,
    //   title: "Marketing Automation Platform for Digital Growth Agency",
    //   description: "Comprehensive marketing automation increasing lead generation by 250% and improving conversion rates by 40%",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    //   industry: "Marketing",
    //   industryIcon: "Target",
    //   client: "Digital Growth Agency",
    //   location: "Bangalore, India",
    //   timeline: "3 months",
    //   rating: 5,
    //   isPremium: false,
    //   technologies: ["Marketing Automation", "CRM Integration", "Analytics", "Email Marketing", "Social Media APIs"],
    //   metrics: [
    //     { value: "250%", label: "More Leads" },
    //     { value: "40%", label: "Higher Conversion" },
    //     { value: "ROI+", label: "Positive ROI" }
    //   ],
    //   challenge: `Digital Growth Agency was struggling with manual marketing processes, low lead generation, and poor conversion tracking. The lack of automation was limiting their ability to scale and deliver results for clients.`,
    //   solution: `We built a comprehensive marketing automation platform with lead scoring, email campaigns, social media integration, and advanced analytics. The system provided automated workflows and detailed performance tracking.`,
    //   beforeMetrics: [
    //     "Manual lead qualification process",
    //     "Low email open rates at 15%",
    //     "Limited campaign tracking",
    //     "High client acquisition costs"
    //   ],
    //   afterMetrics: [
    //     "Automated lead scoring and nurturing",
    //     "Email open rates increased to 35%",
    //     "Complete campaign attribution",
    //     "40% reduction in acquisition costs"
    //   ],
    //   achievements: [
    //     { value: "₹1.5Cr", label: "Client Revenue Impact" },
    //     { value: "10K+", label: "Leads/Month" },
    //     { value: "300%", label: "Agency Growth" }
    //   ],
    //   testimonial: {
    //     quote: "The marketing automation platform exceeded our expectations. Lead generation increased by 250% and conversion rates improved by 40%. The ROI was evident within the first quarter.",
    //     author: "Priya Sharma",
    //     position: "Marketing Director"
    //   }
    // }
  ];

  // Filter case studies based on active filters
  const filteredCaseStudies = caseStudies?.filter(study => {
    const industryMatch = activeFilter?.industry === 'all' || 
      study?.industry?.toLowerCase()?.includes(activeFilter?.industry?.toLowerCase());
    const typeMatch = activeFilter?.type === 'all' || true; // Simplified for demo
    return industryMatch && typeMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCaseStudies?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCaseStudies = filteredCaseStudies?.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filterType, value) => {
    setActiveFilter(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1);
  };

  const handleViewDetails = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Portfolio Showcase - Success Stories | AI Automation Hub';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <PortfolioHero />
      {/* Filter Section */}
      <IndustryFilter 
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      {/* Results Header */}
      <section className="bg-gray-50 py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Success Stories
              </h2>
              <p className="text-gray-600">
                Showing {paginatedCaseStudies?.length} of {filteredCaseStudies?.length} case studies
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ?'bg-accent text-white' :'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon name="Grid3X3" size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ?'bg-accent text-white' :'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon name="List" size={18} />
                </button>
              </div>
              
              {/* Sort Dropdown */}
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Sort by: Latest</option>
                <option>Sort by: Industry</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Timeline</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {paginatedCaseStudies?.length > 0 ? (
            <>
              <div className={`grid gap-8 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
              }`}>
                {paginatedCaseStudies?.map((caseStudy) => (
                  <CaseStudyCard
                    key={caseStudy?.id}
                    caseStudy={caseStudy}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    iconName="ChevronLeft"
                    className="w-10 h-10 p-0"
                  />
                  
                  {[...Array(totalPages)]?.map((_, index) => (
                    <Button
                      key={index + 1}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(index + 1)}
                      className="w-10 h-10 p-0"
                    >
                      {index + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    iconName="ChevronRight"
                    className="w-10 h-10 p-0"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={64} color="#9CA3AF" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No case studies found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters to see more results
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveFilter({ industry: 'all', type: 'all' })}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* CTA Section */}
      <CTASection />
      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PortfolioShowcase;