import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { saveSubmission } from '../../../utils/store';

const IndustryShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState('manufacturing');
  const navigate = useNavigate();

  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'Factory',
      color: 'from-blue-500 to-indigo-600',
      description: 'Streamline production processes and quality control with intelligent automation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      stats: {
        efficiency: '45%',
        cost_reduction: '30%',
        quality_improvement: '60%'
      },
      solutions: [
        'Production Line Automation',
        'Quality Control Systems',
        'Inventory Management',
        'Predictive Maintenance',
        'Supply Chain Optimization'
      ],
      caseStudy: {
        client: 'TechManufacturing Pvt Ltd',
        challenge: 'Manual quality inspection was causing 15% defect rate and production delays',
        solution: 'AI-powered visual inspection system with real-time defect detection',
        results: [
          'Reduced defect rate from 15% to 2%',
          'Increased production speed by 40%',
          'Saved ₹2.5 crores annually in rework costs'
        ]
      }
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: 'ShoppingCart',
      color: 'from-green-500 to-emerald-600',
      description: 'Enhance customer experience and optimize operations with smart retail automation',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      stats: {
        efficiency: '55%',
        cost_reduction: '40%',
        quality_improvement: '70%'
      },
      solutions: [
        'Customer Service Chatbots',
        'Inventory Optimization',
        'Price Management',
        'Personalized Recommendations',
        'Order Processing Automation'
      ],
      caseStudy: {
        client: 'FashionForward Online',
        challenge: 'High customer service costs and slow response times affecting sales',
        solution: 'AI chatbot with natural language processing for customer support',
        results: [
          'Reduced response time from 4 hours to 30 seconds',
          'Handled 80% of queries automatically',
          'Increased customer satisfaction by 45%'
        ]
      }
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'Heart',
      color: 'from-red-500 to-pink-600',
      description: 'Improve patient care and operational efficiency with healthcare automation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      stats: {
        efficiency: '50%',
        cost_reduction: '35%',
        quality_improvement: '65%'
      },
      solutions: [
        'Patient Management Systems',
        'Appointment Scheduling',
        'Medical Records Automation',
        'Billing & Insurance Processing',
        'Telemedicine Platforms'
      ],
      caseStudy: {
        client: 'City General Hospital',
        challenge: 'Manual appointment scheduling causing patient dissatisfaction and staff overload',
        solution: 'Automated appointment system with SMS/email reminders and rescheduling',
        results: [
          'Reduced no-shows by 60%',
          'Improved staff efficiency by 35%',
          'Enhanced patient satisfaction scores by 50%'
        ]
      }
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: 'DollarSign',
      color: 'from-purple-500 to-violet-600',
      description: 'Automate financial processes and enhance security with fintech solutions',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      stats: {
        efficiency: '60%',
        cost_reduction: '45%',
        quality_improvement: '80%'
      },
      solutions: [
        'Loan Processing Automation',
        'Fraud Detection Systems',
        'Compliance Monitoring',
        'Customer Onboarding',
        'Risk Assessment Tools'
      ],
      caseStudy: {
        client: 'Progressive Bank Ltd',
        challenge: 'Loan approval process taking 15 days with high manual verification costs',
        solution: 'AI-powered document verification and risk assessment system',
        results: [
          'Reduced approval time from 15 days to 2 hours',
          'Decreased processing costs by 70%',
          'Improved accuracy in risk assessment by 90%'
        ]
      }
    },
    {
      id: 'education',
      name: 'Education',
      icon: 'GraduationCap',
      color: 'from-orange-500 to-amber-600',
      description: 'Transform learning experiences with educational technology automation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      stats: {
        efficiency: '40%',
        cost_reduction: '25%',
        quality_improvement: '55%'
      },
      solutions: [
        'Student Management Systems',
        'Automated Grading',
        'Learning Analytics',
        'Virtual Classrooms',
        'Administrative Automation'
      ],
      caseStudy: {
        client: 'Modern University',
        challenge: 'Manual grading and feedback consuming 60% of faculty time',
        solution: 'AI-powered assignment evaluation and personalized feedback system',
        results: [
          'Reduced grading time by 75%',
          'Improved feedback quality and consistency',
          'Increased faculty focus on teaching by 40%'
        ]
      }
    }
  ];

  const activeIndustryData = industries?.find(ind => ind?.id === activeIndustry);

  const handleViewDemo = () => {
    const payload = {
      type: 'industry_demo',
      industry: activeIndustry,
      data: activeIndustryData
    };
    saveSubmission('demos', payload);
    const subject = encodeURIComponent(`Industry Demo Request - ${activeIndustryData?.name}`);
    const body = encodeURIComponent(`Demo request for ${activeIndustryData?.name}:\n\n${JSON.stringify(payload, null, 2)}\n\nPhone: +91 8252472186`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleDownloadCaseStudy = () => {
    const payload = {
      type: 'case_study',
      industry: activeIndustry,
      data: activeIndustryData
    };
    saveSubmission('case_studies', payload);
    const content = `Case Study: ${activeIndustryData?.name}\n\n${JSON.stringify(payload, null, 2)}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `case-study-${activeIndustry}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Building" size={16} />
            <span>Industry Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Tailored Automation for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI automation solutions are transforming businesses 
            across different industries with measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Industry Selector */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              {industries?.map((industry) => (
                <button
                  key={industry?.id}
                  onClick={() => setActiveIndustry(industry?.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    activeIndustry === industry?.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry?.color} flex items-center justify-center`}>
                      <Icon name={industry?.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        activeIndustry === industry?.id ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {industry?.name}
                      </h3>
                      <p className={`text-sm ${
                        activeIndustry === industry?.id ? 'text-blue-700' : 'text-gray-600'
                      }`}>
                        {industry?.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activeIndustryData?.image}
                  alt={`${activeIndustryData?.name} automation`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{activeIndustryData?.name}</h3>
                  <p className="text-gray-200">{activeIndustryData?.description}</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      +{activeIndustryData?.stats?.efficiency}
                    </div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      -{activeIndustryData?.stats?.cost_reduction}
                    </div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">
                      +{activeIndustryData?.stats?.quality_improvement}
                    </div>
                    <div className="text-sm text-gray-600">Quality Improvement</div>
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Solutions</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeIndustryData?.solutions?.map((solution, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="Award" size={20} className="text-orange-500" />
                    <h4 className="text-lg font-semibold text-gray-900">Success Story</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900">{activeIndustryData?.caseStudy?.client}</h5>
                      <p className="text-sm text-gray-600 mt-1">{activeIndustryData?.caseStudy?.challenge}</p>
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-blue-900 mb-2">Our Solution:</h6>
                      <p className="text-sm text-gray-700">{activeIndustryData?.caseStudy?.solution}</p>
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-green-900 mb-2">Results Achieved:</h6>
                      <ul className="space-y-1">
                        {activeIndustryData?.caseStudy?.results?.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                            <Icon name="TrendingUp" size={14} className="text-green-500 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
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
                    onClick={handleViewDemo}
                  >
                    View Industry Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="FileText"
                    iconPosition="left"
                    onClick={handleDownloadCaseStudy}
                  >
                    Download Case Study
                  </Button>
                  <Link to="/contact-scheduling-multi-channel-engagement">
                    <Button
                      variant="ghost"
                      size="lg"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;