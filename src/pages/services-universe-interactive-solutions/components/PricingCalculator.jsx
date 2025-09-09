import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';


const PricingCalculator = () => {
  const [formData, setFormData] = useState({
    currency: 'inr',
    industry: '',
    companySize: '',
    automationComplexity: '',
    integrations: '',
    supportLevel: '',
    timeline: ''
  });

  const [pricing, setPricing] = useState({
    setup: 0,
    monthly: 0,
    annual: 0,
    roi: 0,
    payback: 0,
    savings: 0
  });

  const [showBreakdown, setShowBreakdown] = useState(false);

  const currencyOptions = [
    { value: 'inr', label: '₹ Indian Rupee (INR)' },
    { value: 'usd', label: '$ US Dollar (USD)' }
  ];

  const industryOptions = [
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'education', label: 'Education' },
    { value: 'technology', label: 'Technology' },
    { value: 'other', label: 'Other' }
  ];

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'large', label: 'Large Enterprise (200+ employees)' }
  ];

  const complexityOptions = [
    { value: 'basic', label: 'Basic Automation (Simple workflows)' },
    { value: 'intermediate', label: 'Intermediate (Multi-step processes)' },
    { value: 'advanced', label: 'Advanced (AI/ML integration)' },
    { value: 'enterprise', label: 'Enterprise (Complex ecosystems)' }
  ];

  const integrationOptions = [
    { value: '1-3', label: '1-3 Systems' },
    { value: '4-7', label: '4-7 Systems' },
    { value: '8-15', label: '8-15 Systems' },
    { value: '15+', label: '15+ Systems' }
  ];

  const supportOptions = [
    { value: 'basic', label: 'Basic Support (Email, 48h response)' },
    { value: 'standard', label: 'Standard Support (Email/Chat, 24h response)' },
    { value: 'premium', label: 'Premium Support (Phone/Chat, 4h response)' },
    { value: 'enterprise', label: 'Enterprise Support (Dedicated manager, 1h response)' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' }
  ];

  const basePricing = {
    inr: {
      basic: { setup: 50000, monthly: 10000 },
      intermediate: { setup: 100000, monthly: 20000 },
      advanced: { setup: 200000, monthly: 40000 },
      enterprise: { setup: 500000, monthly: 100000 }
    },
    usd: {
      basic: { setup: 600, monthly: 120 },
      intermediate: { setup: 1200, monthly: 240 },
      advanced: { setup: 2400, monthly: 480 },
      enterprise: { setup: 6000, monthly: 1200 }
    }
  };

  const multipliers = {
    companySize: {
      startup: 0.8,
      small: 1.0,
      medium: 1.5,
      large: 2.5
    },
    integrations: {
      '1-3': 1.0,
      '4-7': 1.3,
      '8-15': 1.7,
      '15+': 2.2
    },
    support: {
      basic: 1.0,
      standard: 1.2,
      premium: 1.5,
      enterprise: 2.0
    },
    timeline: {
      immediate: 1.3,
      short: 1.1,
      medium: 1.0,
      long: 0.9
    },
    industry: {
      manufacturing: 1.2,
      retail: 1.0,
      healthcare: 1.4,
      finance: 1.6,
      education: 0.9,
      technology: 1.1,
      other: 1.0
    }
  };

  useEffect(() => {
    calculatePricing();
  }, [formData]);

  const calculatePricing = () => {
    if (!formData?.automationComplexity || !formData?.companySize) {
      setPricing({ setup: 0, monthly: 0, annual: 0, roi: 0, payback: 0, savings: 0 });
      return;
    }

    const base = basePricing?.[formData?.currency]?.[formData?.automationComplexity];
    
    let setupCost = base?.setup;
    let monthlyCost = base?.monthly;

    // Apply multipliers
    if (formData?.companySize) {
      const sizeMultiplier = multipliers?.companySize?.[formData?.companySize];
      setupCost *= sizeMultiplier;
      monthlyCost *= sizeMultiplier;
    }

    if (formData?.integrations) {
      const integrationMultiplier = multipliers?.integrations?.[formData?.integrations];
      setupCost *= integrationMultiplier;
      monthlyCost *= integrationMultiplier;
    }

    if (formData?.supportLevel) {
      const supportMultiplier = multipliers?.support?.[formData?.supportLevel];
      monthlyCost *= supportMultiplier;
    }

    if (formData?.timeline) {
      const timelineMultiplier = multipliers?.timeline?.[formData?.timeline];
      setupCost *= timelineMultiplier;
    }

    if (formData?.industry) {
      const industryMultiplier = multipliers?.industry?.[formData?.industry];
      setupCost *= industryMultiplier;
      monthlyCost *= industryMultiplier;
    }

    const annualCost = monthlyCost * 12;
    
    // Calculate ROI and savings (mock calculations)
    const estimatedSavings = monthlyCost * 3.5; // Assuming 3.5x monthly cost in savings
    const annualSavings = estimatedSavings * 12;
    const roi = setupCost > 0 ? Math.round(((annualSavings - annualCost - setupCost) / setupCost) * 100) : 0;
    const paybackMonths = setupCost > 0 ? Math.round(setupCost / (estimatedSavings - monthlyCost)) : 0;

    setPricing({
      setup: Math.round(setupCost),
      monthly: Math.round(monthlyCost),
      annual: Math.round(annualCost),
      roi: Math.max(roi, 0),
      payback: Math.max(paybackMonths, 1),
      savings: Math.round(estimatedSavings)
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    if (formData?.currency === 'inr') {
      return `₹${amount?.toLocaleString('en-IN')}`;
    } else {
      return `$${amount?.toLocaleString('en-US')}`;
    }
  };

  const isFormComplete = () => {
    return formData?.automationComplexity && formData?.companySize && formData?.industry;
  };

  return (
    <section id="pricing-calculator" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Calculator" size={16} />
            <span>Pricing Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Transparent Pricing with ROI Projections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant pricing estimates tailored to your business needs. 
            See exactly what you'll invest and what returns you can expect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Configuration Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Configure Your Solution</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Currency"
                  options={currencyOptions}
                  value={formData?.currency}
                  onChange={(value) => handleInputChange('currency', value)}
                />
                
                <Select
                  label="Industry"
                  placeholder="Select your industry"
                  options={industryOptions}
                  value={formData?.industry}
                  onChange={(value) => handleInputChange('industry', value)}
                  required
                />
                
                <Select
                  label="Company Size"
                  placeholder="Select company size"
                  options={companySizeOptions}
                  value={formData?.companySize}
                  onChange={(value) => handleInputChange('companySize', value)}
                  required
                />
                
                <Select
                  label="Automation Complexity"
                  placeholder="Select complexity level"
                  options={complexityOptions}
                  value={formData?.automationComplexity}
                  onChange={(value) => handleInputChange('automationComplexity', value)}
                  required
                />
                
                <Select
                  label="System Integrations"
                  placeholder="Number of systems to integrate"
                  options={integrationOptions}
                  value={formData?.integrations}
                  onChange={(value) => handleInputChange('integrations', value)}
                />
                
                <Select
                  label="Support Level"
                  placeholder="Select support level"
                  options={supportOptions}
                  value={formData?.supportLevel}
                  onChange={(value) => handleInputChange('supportLevel', value)}
                />
              </div>
              
              <div className="mt-6">
                <Select
                  label="Implementation Timeline"
                  placeholder="When do you want to start?"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                />
              </div>
            </div>
          </div>

          {/* Pricing Results */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 space-y-6">
              {/* Main Pricing Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Your Investment</h3>
                
                {isFormComplete() ? (
                  <div className="space-y-6">
                    {/* Pricing Summary */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700">Setup Cost:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {formatCurrency(pricing?.setup)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span className="text-gray-700">Monthly Cost:</span>
                        <span className="text-2xl font-bold text-green-600">
                          {formatCurrency(pricing?.monthly)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                        <span className="text-gray-700">Annual Cost:</span>
                        <span className="text-xl font-bold text-purple-600">
                          {formatCurrency(pricing?.annual)}
                        </span>
                      </div>
                    </div>

                    {/* ROI Metrics */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Expected Returns</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{pricing?.roi}%</div>
                          <div className="text-sm text-gray-600">Annual ROI</div>
                        </div>
                        <div className="text-center p-3 bg-teal-50 rounded-lg">
                          <div className="text-2xl font-bold text-teal-600">{pricing?.payback}</div>
                          <div className="text-sm text-gray-600">Payback (months)</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Monthly Savings:</span>
                          <span className="font-bold text-gray-900">
                            {formatCurrency(pricing?.savings)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 pt-6 border-t border-gray-200">
                      <Button
                        variant="default"
                        fullWidth
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                        iconName="FileText"
                        iconPosition="left"
                      >
                        Get Detailed Quote
                      </Button>
                      
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="Calendar"
                        iconPosition="left"
                      >
                        Schedule Consultation
                      </Button>
                      
                      <Button
                        variant="ghost"
                        fullWidth
                        onClick={() => setShowBreakdown(!showBreakdown)}
                        iconName={showBreakdown ? "ChevronUp" : "ChevronDown"}
                        iconPosition="right"
                      >
                        {showBreakdown ? 'Hide' : 'Show'} Cost Breakdown
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Calculator" size={48} className="text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Complete the form to see your personalized pricing
                    </p>
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              {showBreakdown && isFormComplete() && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Cost Breakdown</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Cost:</span>
                      <span>{formatCurrency(basePricing?.[formData?.currency]?.[formData?.automationComplexity]?.setup || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company Size Adjustment:</span>
                      <span>{((multipliers?.companySize?.[formData?.companySize] - 1) * 100)?.toFixed(0)}%</span>
                    </div>
                    {formData?.integrations && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Integration Complexity:</span>
                        <span>{((multipliers?.integrations?.[formData?.integrations] - 1) * 100)?.toFixed(0)}%</span>
                      </div>
                    )}
                    {formData?.industry && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Industry Factor:</span>
                        <span>{((multipliers?.industry?.[formData?.industry] - 1) * 100)?.toFixed(0)}%</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium mb-1">Pricing Estimate</p>
                    <p>
                      This is an estimated cost based on your inputs. 
                      Final pricing may vary based on specific requirements and customizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;