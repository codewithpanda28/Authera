import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import { saveSubmission } from '../../../utils/store';
import { useNavigate } from 'react-router-dom';

const SolutionConfigurator = () => {
  const [selectedModules, setSelectedModules] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const [companySize, setCompanySize] = useState('');
  const [totalCost, setTotalCost] = useState({ setup: 0, monthly: 0, roi: 0 });
  const navigate = useNavigate();

  const currencyOptions = [
    { value: 'inr', label: '₹ Indian Rupee' },
    { value: 'usd', label: '$ US Dollar' }
  ];

  const companySizeOptions = [
    { value: 'small', label: 'Small (1-50 employees)' },
    { value: 'medium', label: 'Medium (51-200 employees)' },
    { value: 'large', label: 'Large (200+ employees)' }
  ];

  const modules = [
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      description: 'Automate repetitive business processes and approvals',
      icon: 'Zap',
      category: 'Core',
      pricing: {
        inr: { setup: 75000, monthly: 15000 },
        usd: { setup: 900, monthly: 180 }
      },
      features: ['Process Designer', 'Approval Workflows', 'Task Management', 'Notifications', 'SLA Policies', 'Audit Trails'],
      popular: true
    },
    {
      id: 'document-processing',
      name: 'Document Processing',
      description: 'AI-powered document extraction and processing',
      icon: 'FileText',
      category: 'Core',
      pricing: {
        inr: { setup: 50000, monthly: 12000 },
        usd: { setup: 600, monthly: 144 }
      },
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Validation Rules', 'Template Library', 'Human Review UI']
    },
    {
      id: 'chatbot',
      name: 'AI Chatbot',
      description: '24/7 intelligent customer support automation',
      icon: 'MessageSquare',
      category: 'Customer',
      pricing: {
        inr: { setup: 60000, monthly: 18000 },
        usd: { setup: 720, monthly: 216 }
      },
      features: ['NLP Engine', 'Multi-channel Support', 'Analytics Dashboard', 'Human Handoff', 'Knowledge Base', 'Fine-tuning Tools']
    },
    {
      id: 'analytics',
      name: 'Smart Analytics',
      description: 'Real-time business intelligence and reporting',
      icon: 'BarChart3',
      category: 'Intelligence',
      pricing: {
        inr: { setup: 100000, monthly: 25000 },
        usd: { setup: 1200, monthly: 300 }
      },
      features: ['Custom Dashboards', 'Predictive Analytics', 'Automated Reports', 'Data Visualization', 'Drill-down Insights', 'Anomaly Detection']
    },
    {
      id: 'integration',
      name: 'System Integration',
      description: 'Connect and synchronize your existing systems',
      icon: 'Network',
      category: 'Infrastructure',
      pricing: {
        inr: { setup: 125000, monthly: 20000 },
        usd: { setup: 1500, monthly: 240 }
      },
      features: ['API Development', 'Database Sync', 'Real-time Updates', 'Security Protocols', 'Webhook Orchestration', 'ETL Pipelines']
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Integration',
      description: 'Extend automation to mobile platforms',
      icon: 'Smartphone',
      category: 'Platform',
      pricing: {
        inr: { setup: 80000, monthly: 15000 },
        usd: { setup: 960, monthly: 180 }
      },
      features: ['Native Apps', 'Push Notifications', 'Offline Sync', 'User Management', 'Biometric Login', 'Deep Linking']
    },
    {
      id: 'security',
      name: 'Advanced Security',
      description: 'Enterprise-grade security and compliance',
      icon: 'Shield',
      category: 'Security',
      pricing: {
        inr: { setup: 90000, monthly: 22000 },
        usd: { setup: 1080, monthly: 264 }
      },
      features: ['Encryption', 'Access Control', 'Audit Logs', 'Compliance Reports', 'SSO/OAuth', 'Data Masking']
    },
    {
      id: 'training',
      name: 'Training & Support',
      description: 'Comprehensive training and ongoing support',
      icon: 'GraduationCap',
      category: 'Support',
      pricing: {
        inr: { setup: 40000, monthly: 10000 },
        usd: { setup: 480, monthly: 120 }
      },
      features: ['Video Tutorials', 'Live Training', '24/7 Support', 'Documentation', 'Dedicated CSM', 'Success Planning']
    }
  ];

  const categories = [...new Set(modules.map(m => m.category))];

  useEffect(() => {
    calculateTotalCost();
  }, [selectedModules, currency, companySize]);

  const calculateTotalCost = () => {
    const setup = selectedModules?.reduce((sum, moduleId) => {
      const module = modules?.find(m => m?.id === moduleId);
      return sum + (module?.pricing?.[currency]?.setup || 0);
    }, 0);

    const monthly = selectedModules?.reduce((sum, moduleId) => {
      const module = modules?.find(m => m?.id === moduleId);
      return sum + (module?.pricing?.[currency]?.monthly || 0);
    }, 0);

    // Calculate ROI based on company size and modules
    let roiMultiplier = 1;
    if (companySize === 'small') roiMultiplier = 2.5;
    else if (companySize === 'medium') roiMultiplier = 3.5;
    else if (companySize === 'large') roiMultiplier = 4.5;

    const annualSavings = monthly * 12 * roiMultiplier;
    const roi = setup > 0 ? Math.round(((annualSavings - setup) / setup) * 100) : 0;

    setTotalCost({ setup, monthly, roi });
  };

  const handleModuleToggle = (moduleId) => {
    setSelectedModules(prev => 
      prev?.includes(moduleId) 
        ? prev?.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const formatCurrency = (amount) => {
    if (currency === 'inr') {
      return `₹${amount?.toLocaleString('en-IN')}`;
    } else {
      return `$${amount?.toLocaleString('en-US')}`;
    }
  };

  const getModulesByCategory = (category) => {
    return modules?.filter(module => module.category === category);
  };

  const handleGetQuote = async () => {
    if (selectedModules?.length === 0) return;
    const payload = {
      type: 'quote',
      currency,
      companySize,
      modules: selectedModules,
      totals: totalCost
    };
    saveSubmission('quotes', payload);
    try {
      await fetch('/api/submissions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'quotes', payload }) });
    } catch {}
    navigate('/client-dashboard-project-command-center');
  };

  const handleScheduleConsultation = async () => {
    if (selectedModules?.length === 0) return;
    const payload = {
      type: 'consultation',
      currency,
      companySize,
      modules: selectedModules,
      totals: totalCost
    };
    saveSubmission('consultations', payload);
    try {
      await fetch('/api/submissions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'consultations', payload }) });
    } catch {}
    navigate('/contact-scheduling-multi-channel-engagement');
  };

  const handleDownloadProposal = async () => {
    if (selectedModules?.length === 0) return;
    const payload = {
      type: 'proposal',
      currency,
      companySize,
      modules: selectedModules,
      totals: totalCost
    };
    saveSubmission('proposals', payload);
    try {
      await fetch('/api/submissions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'proposals', payload }) });
    } catch {}
    // Generate a basic proposal blob to download
    const content = `AI Automation Proposal\n\n${JSON.stringify(payload, null, 2)}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'proposal.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="solution-configurator" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Settings" size={16} />
            <span>Solution Configurator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Build Your Custom Automation Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the modules you need and get real-time pricing with ROI calculations. 
            Mix and match to create the perfect solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-8 space-y-8">
            {/* Settings */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuration Settings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="Currency"
                  options={currencyOptions}
                  value={currency}
                  onChange={setCurrency}
                />
                <Select
                  label="Company Size"
                  placeholder="Select company size"
                  options={companySizeOptions}
                  value={companySize}
                  onChange={setCompanySize}
                />
              </div>
            </div>

            {/* Module Categories */}
            {categories?.map(category => (
              <div key={category} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{category} Modules</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {getModulesByCategory(category)?.map(module => (
                    <div
                      key={module.id}
                      className={`relative p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                        selectedModules?.includes(module.id)
                          ? 'border-blue-500 bg-blue-50' :'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleModuleToggle(module.id)}
                    >
                      {module.popular && (
                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          selectedModules?.includes(module.id)
                            ? 'bg-blue-500 text-white' :'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon name={module.icon} size={24} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{module.name}</h4>
                            <Checkbox
                              checked={selectedModules?.includes(module.id)}
                              onChange={() => handleModuleToggle(module.id)}
                              className="ml-auto"
                            />
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Setup:</span>
                              <span className="font-medium">{formatCurrency(module.pricing?.[currency]?.setup)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Monthly:</span>
                              <span className="font-medium">{formatCurrency(module.pricing?.[currency]?.monthly)}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="flex flex-wrap gap-1">
                              {module.features?.slice(0, 4)?.map((feature, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                              {module.features?.length > 2 && (
                                <span className="text-xs text-gray-500">
                                  +{module.features?.length - 2} more
                                </span>
                              )}
                            </div>
                            <div className="mt-3">
                              <a
                                href={`https://wa.me/918252472186?text=${encodeURIComponent('I want to discuss: ' + module.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Discuss this project on WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Pricing Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Selected Modules:</span>
                    <span className="font-medium">{selectedModules?.length}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Setup Cost:</span>
                    <span className="text-xl font-bold text-blue-600">
                      {formatCurrency(totalCost?.setup)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Cost:</span>
                    <span className="text-xl font-bold text-green-600">
                      {formatCurrency(totalCost?.monthly)}
                    </span>
                  </div>
                  
                  {companySize && totalCost?.roi > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Expected ROI:</span>
                      <span className="text-xl font-bold text-purple-600">
                        {totalCost?.roi}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    iconName="Calculator"
                    iconPosition="left"
                    disabled={selectedModules?.length === 0}
                    onClick={handleGetQuote}
                  >
                    Get Detailed Quote
                  </Button>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                    disabled={selectedModules?.length === 0}
                    onClick={handleScheduleConsultation}
                  >
                    Schedule Consultation
                  </Button>
                  
                  <Button
                    variant="ghost"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                    disabled={selectedModules?.length === 0}
                    onClick={handleDownloadProposal}
                  >
                    Download Proposal
                  </Button>
                </div>
              </div>

              {selectedModules?.length > 0 && (
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Your Selected Modules</h4>
                  <div className="space-y-2">
                    {selectedModules?.map(moduleId => {
                      const module = modules?.find(m => m?.id === moduleId);
                      return (
                        <div key={moduleId} className="flex items-center justify-between text-sm">
                          <span className="text-blue-800">{module?.name}</span>
                          <button
                            onClick={() => handleModuleToggle(moduleId)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Icon name="X" size={16} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionConfigurator;