import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { saveSubmission } from '../../../utils/store';
import { useNavigate } from 'react-router-dom';

const ConsultationBooking = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectType: '',
    budget: '',
    preferredDate: '',
    preferredTime: '',
    meetingFormat: 'video'
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isVisible) setCurrentStep(1);
  }, [isVisible]);

  const serviceOptions = [
    { value: 'ai-automation', label: 'AI Process Automation' },
    { value: 'chatbot-development', label: 'Chatbot Development' },
    { value: 'data-analytics', label: 'Data Analytics & BI' },
    { value: 'workflow-optimization', label: 'Workflow Optimization' },
    { value: 'custom-ai-solutions', label: 'Custom AI Solutions' },
    { value: 'consultation', label: 'Strategy Consultation' }
  ];

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'large', label: 'Large Enterprise (200+ employees)' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' },
    { value: 'exploring', label: 'Just exploring options' }
  ];

  const budgetOptions = [
    { value: 'under-50k', label: 'Under ₹50,000' },
    { value: '50k-2l', label: '₹50,000 - ₹2,00,000' },
    { value: '2l-5l', label: '₹2,00,000 - ₹5,00,000' },
    { value: '5l-10l', label: '₹5,00,000 - ₹10,00,000' },
    { value: 'above-10l', label: 'Above ₹10,00,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const timezoneOptions = [
    { value: 'IST', label: 'India Standard Time (IST)' },
    { value: 'EST', label: 'Eastern Standard Time (EST)' },
    { value: 'PST', label: 'Pacific Standard Time (PST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', label: 'Central European Time (CET)' },
    { value: 'JST', label: 'Japan Standard Time (JST)' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    saveSubmission('consultations', formData);
    try {
      await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'consultations', name: formData.name, email: formData.email, phone: formData.phone, payload: formData })
      });
    } catch {}
    onClose?.();
    navigate('/client-dashboard-project-command-center');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Calendar" size={20} className="text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Book Free Consultation</h2>
              <p className="text-text-secondary">Step {currentStep} of 3</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-text-secondary hover:text-primary"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center space-x-4">
            {[1, 2, 3]?.map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-accent text-white' :'bg-gray-200 text-text-secondary'
                }`}>
                  {step < currentStep ? <Icon name="Check" size={16} /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-accent' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={currentStep >= 1 ? 'text-accent' : 'text-text-secondary'}>Basic Info</span>
            <span className={currentStep >= 2 ? 'text-accent' : 'text-text-secondary'}>Project Details</span>
            <span className={currentStep >= 3 ? 'text-accent' : 'text-text-secondary'}>Schedule</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-primary mb-2">Tell us about yourself</h3>
                <p className="text-text-secondary">We'll use this information to personalize your consultation</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />

                <Input
                  label="Company Name"
                  type="text"
                  placeholder="Your company name"
                  value={formData?.company}
                  onChange={(e) => handleInputChange('company', e?.target?.value)}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  required
                />
              </div>

              <Select
                label="Primary Service Interest"
                placeholder="Select the service you're most interested in"
                options={serviceOptions}
                value={formData?.serviceInterest}
                onChange={(value) => handleInputChange('serviceInterest', value)}
                required
              />
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-primary mb-2">Project Requirements</h3>
                <p className="text-text-secondary">Help us understand your project scope and timeline</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Company Size"
                  placeholder="Select your company size"
                  options={companySizeOptions}
                  value={formData?.companySize}
                  onChange={(value) => handleInputChange('companySize', value)}
                  required
                />

                <Select
                  label="Project Timeline"
                  placeholder="When do you want to start?"
                  options={timelineOptions}
                  value={formData?.projectTimeline}
                  onChange={(value) => handleInputChange('projectTimeline', value)}
                  required
                />
              </div>

              <Select
                label="Budget Range"
                placeholder="Select your budget range"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Additional Information
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  rows="4"
                  placeholder="Tell us more about your project requirements, challenges, or specific goals..."
                  value={formData?.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 3: Schedule */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-primary mb-2">Schedule Your Consultation</h3>
                <p className="text-text-secondary">Choose your preferred date, time, and meeting format</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData?.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
                  min={new Date()?.toISOString()?.split('T')?.[0]}
                  required
                />

                <Select
                  label="Preferred Time"
                  placeholder="Select time slot"
                  options={timeSlots?.map(time => ({ value: time, label: time }))}
                  value={formData?.preferredTime}
                  onChange={(value) => handleInputChange('preferredTime', value)}
                  required
                />
              </div>

              <Select
                label="Timezone"
                placeholder="Select your timezone"
                options={timezoneOptions}
                value={formData?.timezone}
                onChange={(value) => handleInputChange('timezone', value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-primary mb-4">Meeting Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData?.meetingType === 'video' ?'border-accent bg-accent/5' :'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('meetingType', 'video')}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name="Video" size={20} className="text-accent" />
                      <div>
                        <div className="font-medium text-primary">Video Call</div>
                        <div className="text-sm text-text-secondary">Google Meet/Zoom</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData?.meetingType === 'phone' ?'border-accent bg-accent/5' :'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('meetingType', 'phone')}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-accent" />
                      <div>
                        <div className="font-medium text-primary">Phone Call</div>
                        <div className="text-sm text-text-secondary">Voice only</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Preview */}
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-4">Consultation Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Duration:</span>
                    <span className="text-primary">30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Service Focus:</span>
                    <span className="text-primary">{serviceOptions?.find(s => s?.value === formData?.serviceInterest)?.label || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Meeting Type:</span>
                    <span className="text-primary capitalize">{formData?.meetingType} Call</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Cost:</span>
                    <span className="text-success font-semibold">Free</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Previous
            </Button>

            {currentStep < 3 ? (
              <Button
                type="button"
                variant="default"
                onClick={handleNextStep}
                className="bg-accent hover:bg-accent/90"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                variant="default"
                className="bg-success hover:bg-success/90"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationBooking;