import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyModal = ({ caseStudy, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !caseStudy) return null;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'FileText' },
    { id: 'process', name: 'Process', icon: 'Workflow' },
    { id: 'results', name: 'Results', icon: 'TrendingUp' },
    { id: 'testimonial', name: 'Testimonial', icon: 'MessageSquare' }
  ];

  const processSteps = [
    {
      phase: "Assessment",
      duration: "2 weeks",
      description: "Comprehensive analysis of existing processes and identification of automation opportunities",
      deliverables: ["Process mapping", "ROI analysis", "Technical requirements"]
    },
    {
      phase: "Design",
      duration: "3 weeks", 
      description: "Solution architecture design and workflow optimization planning",
      deliverables: ["System architecture", "Integration plan", "User experience design"]
    },
    {
      phase: "Development",
      duration: "6 weeks",
      description: "Custom automation solution development and rigorous testing",
      deliverables: ["Automation scripts", "Integration modules", "Testing reports"]
    },
    {
      phase: "Deployment",
      duration: "2 weeks",
      description: "Production deployment with comprehensive training and support",
      deliverables: ["Live system", "User training", "Documentation"]
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring and performance optimization",
      deliverables: ["Performance reports", "Optimization updates", "Support"]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="relative">
            <div className="h-64 overflow-hidden">
              <Image
                src={caseStudy?.image}
                alt={caseStudy?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                  <Icon name={caseStudy?.industryIcon} size={16} />
                  <span>{caseStudy?.industry}</span>
                </span>
                <span className="inline-flex items-center space-x-1 bg-accent/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                  <Icon name="Clock" size={16} />
                  <span>{caseStudy?.timeline}</span>
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{caseStudy?.title}</h2>
              <p className="text-white/90 text-lg">{caseStudy?.client} • {caseStudy?.location}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                    activeTab === tab?.id
                      ? 'border-accent text-accent' :'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6 max-h-96 overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{caseStudy?.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{caseStudy?.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudy?.metrics?.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">
                        {metric?.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric?.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary mb-4">Implementation Timeline</h3>
                <div className="space-y-4">
                  {processSteps?.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-primary">{step?.phase}</h4>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {step?.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{step?.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step?.deliverables?.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary mb-4">Business Impact</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Before Automation</h4>
                    <ul className="space-y-2">
                      {caseStudy?.beforeMetrics?.map((metric, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-600">
                          <Icon name="X" size={16} color="#EF4444" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">After Automation</h4>
                    <ul className="space-y-2">
                      {caseStudy?.afterMetrics?.map((metric, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-600">
                          <Icon name="Check" size={16} color="#10B981" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy?.achievements?.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">
                          {achievement?.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {achievement?.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testimonial' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">
                        {caseStudy?.testimonial?.author?.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 italic mb-4">
                        "{caseStudy?.testimonial?.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-primary">
                          {caseStudy?.testimonial?.author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {caseStudy?.testimonial?.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {caseStudy?.client}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className={`${i < caseStudy?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {caseStudy?.rating}/5 Rating
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Full Testimonial
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
              >
                Download PDF
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="Share"
                iconPosition="left"
              >
                Share Case Study
              </Button>
            </div>
            
            <Button
              variant="default"
              size="sm"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Discuss Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;