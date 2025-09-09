import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const AssessmentTool = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    currentProcesses: '',
    painPoints: [],
    budget: '',
    timeline: '',
    email: ''
  });

  const totalSteps = 4;

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

  const budgetOptions = [
    { value: 'under-50k', label: 'Under ₹50,000 ($600)' },
    { value: '50k-2l', label: '₹50,000 - ₹2,00,000 ($600 - $2,400)' },
    { value: '2l-5l', label: '₹2,00,000 - ₹5,00,000 ($2,400 - $6,000)' },
    { value: 'above-5l', label: 'Above ₹5,00,000 ($6,000+)' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' }
  ];

  const painPointOptions = [
    { id: 'manual-tasks', label: 'Too many manual, repetitive tasks' },
    { id: 'data-entry', label: 'Time-consuming data entry' },
    { id: 'customer-response', label: 'Slow customer response times' },
    { id: 'reporting', label: 'Manual reporting and analytics' },
    { id: 'inventory', label: 'Inventory management issues' },
    { id: 'scheduling', label: 'Complex scheduling processes' },
    { id: 'communication', label: 'Internal communication gaps' },
    { id: 'compliance', label: 'Compliance and documentation' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePainPointToggle = (painPointId) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev?.painPoints?.includes(painPointId)
        ? prev?.painPoints?.filter(id => id !== painPointId)
        : [...prev?.painPoints, painPointId]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateReport = () => {
    // Mock report generation
    alert('Assessment complete! Your customized automation report will be sent to your email within 5 minutes.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Company Information</h3>
              <p className="text-gray-600">Tell us about your business to get personalized recommendations</p>
            </div>
            <div className="space-y-4">
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
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Current Challenges</h3>
              <p className="text-gray-600">Select all pain points that apply to your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPointOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => handlePainPointToggle(option?.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    formData?.painPoints?.includes(option?.id)
                      ? 'border-blue-500 bg-blue-50 text-blue-900' :'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={formData?.painPoints?.includes(option?.id) ? "CheckCircle" : "Circle"} 
                      size={20} 
                      className={formData?.painPoints?.includes(option?.id) ? "text-blue-500" : "text-gray-400"} 
                    />
                    <span className="font-medium">{option?.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Project Details</h3>
              <p className="text-gray-600">Help us understand your budget and timeline</p>
            </div>
            <div className="space-y-4">
              <Select
                label="Budget Range"
                placeholder="Select your budget range"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                required
              />
              
              <Select
                label="Implementation Timeline"
                placeholder="When do you want to start?"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                required
              />
              
              <Input
                label="Current Processes"
                type="text"
                placeholder="Briefly describe your current manual processes"
                value={formData?.currentProcesses}
                onChange={(e) => handleInputChange('currentProcesses', e?.target?.value)}
                description="This helps us understand what to automate"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Get Your Report</h3>
              <p className="text-gray-600">Receive a customized automation roadmap and ROI projections</p>
            </div>
            <div className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email to receive the report"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
                description="We'll send your personalized automation report here"
              />
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Your Report Will Include:</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-600" />
                    <span>Customized automation recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-600" />
                    <span>ROI projections and cost breakdown</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-600" />
                    <span>Implementation timeline and milestones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-blue-600" />
                    <span>Technology stack recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Target" size={16} />
            <span>AI Assessment Tool</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Discover Your Automation Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our 5-minute assessment to get a personalized automation roadmap 
            with ROI projections tailored to your business.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 lg:p-8">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-6 lg:px-8 py-4 border-t border-gray-200">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  variant="default"
                  onClick={nextStep}
                  iconName="ChevronRight"
                  iconPosition="right"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={generateReport}
                  iconName="FileText"
                  iconPosition="left"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  Generate Report
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentTool;