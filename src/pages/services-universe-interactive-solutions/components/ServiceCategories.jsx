import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCategories = ({ initialActiveCategory }) => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(initialActiveCategory || 'process-automation');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get('category');
    if (fromQuery) {
      setActiveCategory(fromQuery);
    }
  }, [location.search]);

  const categories = [
    {
      id: 'process-automation',
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate manual tasks with intelligent automation solutions.',
      icon: 'Zap',
      color: 'from-blue-500 to-cyan-400',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Data Migration',
        'Task Scheduling',
        'Email Automation',
        'Report Generation'
      ],
      useCases: [
        'Invoice Processing: Reduce processing time by 90%',
        'Employee Onboarding: Automate 15+ manual steps',
        'Inventory Management: Real-time stock updates'
      ],
      pricing: {
        setup: '₹75,000 - ₹2,50,000',
        monthly: '₹15,000 - ₹50,000',
        roi: '300-500%'
      }
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Deploy intelligent conversational AI to handle customer queries 24/7.',
      icon: 'MessageSquare',
      color: 'from-purple-500 to-pink-400',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Integration APIs',
        'Analytics Dashboard',
        'Human Handoff',
        'Voice Recognition'
      ],
      useCases: [
        'Customer Support: Handle 80% of queries automatically',
        'Lead Qualification: Convert 40% more prospects',
        'Order Tracking: Instant status updates'
      ],
      pricing: {
        setup: '₹50,000 - ₹1,50,000',
        monthly: '₹10,000 - ₹30,000',
        roi: '250-400%'
      }
    },
    {
      id: 'data-analytics',
      title: 'Smart Analytics & Insights',
      description: 'Transform raw data into actionable business intelligence with AI-powered analytics.',
      icon: 'BarChart3',
      color: 'from-green-500 to-emerald-400',
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization',
        'Trend Analysis',
        'Automated Alerts'
      ],
      useCases: [
        'Sales Forecasting: Predict revenue with 95% accuracy',
        'Customer Behavior: Identify buying patterns',
        'Operational Efficiency: Optimize resource allocation'
      ],
      pricing: {
        setup: '₹1,00,000 - ₹3,00,000',
        monthly: '₹20,000 - ₹60,000',
        roi: '400-600%'
      }
    },
    {
      id: 'integration',
      title: 'System Integration',
      description: 'Connect disparate systems and create seamless data flow across your organization.',
      icon: 'Network',
      color: 'from-orange-500 to-red-400',
      features: [
        'API Development',
        'Database Synchronization',
        'Cloud Migration',
        'Legacy System Integration',
        'Real-time Sync',
        'Security Protocols'
      ],
      useCases: [
        'ERP Integration: Unify business processes',
        'CRM Sync: 360-degree customer view',
        'E-commerce Integration: Automated order processing'
      ],
      pricing: {
        setup: '₹1,25,000 - ₹4,00,000',
        monthly: '₹25,000 - ₹75,000',
        roi: '200-350%'
      }
    }
  ];

  const activeService = categories?.find(cat => cat?.id === activeCategory);

  const goToConfigurator = () => {
    navigate('/services-universe-interactive-solutions');
    requestAnimationFrame(() => {
      const el = document?.querySelector('#solution-configurator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const goToPricing = () => {
    navigate('/services-universe-interactive-solutions');
    requestAnimationFrame(() => {
      const el = document?.querySelector('#pricing-calculator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const goToCaseStudies = () => {
    navigate('/portfolio-showcase-success-stories');
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Grid3x3" size={16} />
            <span>Service Categories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Comprehensive AI Automation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple task automation to complex AI implementations, 
            we offer end-to-end solutions tailored to your industry needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                  activeCategory === category?.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={category?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeCategory === category?.id ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      {category?.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeCategory === category?.id ? 'text-blue-700' : 'text-gray-600'
                    }`}>
                      {category?.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Category Details */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${activeService?.color} flex items-center justify-center`}>
                  <Icon name={activeService?.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeService?.title}</h3>
                  <p className="text-gray-600">{activeService?.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {activeService?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Real-World Impact</h4>
                  <div className="space-y-4">
                    {activeService?.useCases?.map((useCase, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-700 leading-relaxed">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment & Returns</h4>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{activeService?.pricing?.setup}</div>
                    <div className="text-sm text-gray-600">Setup Cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{activeService?.pricing?.monthly}</div>
                    <div className="text-sm text-gray-600">Monthly Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{activeService?.pricing?.roi}</div>
                    <div className="text-sm text-gray-600">Expected ROI</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  iconName="Play"
                  iconPosition="left"
                  onClick={goToConfigurator}
                >
                  Try Interactive Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  onClick={goToPricing}
                >
                  Calculate ROI
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                  onClick={goToCaseStudies}
                >
                  Download Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;