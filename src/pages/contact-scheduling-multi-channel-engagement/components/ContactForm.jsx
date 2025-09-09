import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { saveSubmission } from '../../../utils/store';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    serviceType: '',
    priority: 'medium',
    message: '',
    preferredContact: 'email',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceTypes = [
    { value: 'ai-automation', label: 'AI Process Automation' },
    { value: 'chatbot', label: 'Chatbot Development' },
    { value: 'data-analytics', label: 'Data Analytics & BI' },
    { value: 'workflow', label: 'Workflow Optimization' },
    { value: 'custom-ai', label: 'Custom AI Solutions' },
    { value: 'consultation', label: 'Strategy Consultation' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Project discussion' },
    { value: 'high', label: 'High - Urgent requirement' },
    { value: 'critical', label: 'Critical - Emergency support' }
  ];

  const contactPreferences = [
    { value: 'email', label: 'Email', icon: 'Mail' },
    { value: 'phone', label: 'Phone Call', icon: 'Phone' },
    { value: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle' },
    { value: 'video', label: 'Video Call', icon: 'Video' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save form data to localStorage
      const payload = {
        type: 'contact_form',
        data: formData,
        timestamp: new Date().toISOString()
      };
      saveSubmission('contact_forms', payload);
      
      // Send email
      const subject = encodeURIComponent(`Contact Form: ${formData?.subject || 'AI Automation Inquiry'}`);
      const body = encodeURIComponent(`New Contact Form Submission:\n\nName: ${formData?.name}\nEmail: ${formData?.email}\nCompany: ${formData?.company}\nPhone: ${formData?.phone}\nService Type: ${formData?.serviceType}\nPriority: ${formData?.priority}\nPreferred Contact: ${formData?.preferredContact}\nNewsletter: ${formData?.newsletter ? 'Yes' : 'No'}\n\nMessage:\n${formData?.message}\n\nPhone: +91 8252472186`);
      window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        serviceType: '',
        priority: 'medium',
        message: '',
        preferredContact: 'email',
        newsletter: false
      });
      
      // Navigate to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/client-dashboard-project-command-center');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'text-success',
      medium: 'text-warning',
      high: 'text-destructive',
      critical: 'text-destructive'
    };
    return colors?.[priority] || colors?.medium;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Send" size={20} className="text-primary" />
            </div>
            <span className="text-primary font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Send us a Message
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 4 hours during business hours. For urgent matters, please use our WhatsApp or phone support.
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
            <Icon name="CheckCircle" size={20} className="text-success" />
            <div>
              <div className="font-semibold text-success">Message sent successfully!</div>
              <div className="text-sm text-success/80">We'll get back to you within 4 hours.</div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center space-x-3">
            <Icon name="AlertCircle" size={20} className="text-destructive" />
            <div>
              <div className="font-semibold text-destructive">Failed to send message</div>
              <div className="text-sm text-destructive/80">Please try again or contact us directly.</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center space-x-2">
              <Icon name="User" size={20} />
              <span>Personal Information</span>
            </h3>
            
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
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white border border-gray-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center space-x-2">
              <Icon name="Briefcase" size={20} />
              <span>Project Details</span>
            </h3>
            
            <div className="space-y-6">
              <Input
                label="Subject"
                type="text"
                placeholder="Brief subject of your inquiry"
                value={formData?.subject}
                onChange={(e) => handleInputChange('subject', e?.target?.value)}
                required
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Service Type"
                  placeholder="Select the service you're interested in"
                  options={serviceTypes}
                  value={formData?.serviceType}
                  onChange={(value) => handleInputChange('serviceType', value)}
                  required
                />

                <Select
                  label="Priority Level"
                  placeholder="Select priority level"
                  options={priorityOptions}
                  value={formData?.priority}
                  onChange={(value) => handleInputChange('priority', value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  rows="6"
                  placeholder="Please provide detailed information about your project requirements, timeline, budget, and any specific challenges you're facing..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  required
                  minLength="50"
                ></textarea>
                <div className="text-sm text-text-secondary mt-1">
                  Minimum 50 characters ({formData?.message?.length}/50)
                </div>
              </div>
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center space-x-2">
              <Icon name="Settings" size={20} />
              <span>Communication Preferences</span>
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-4">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {contactPreferences?.map((method) => (
                    <div
                      key={method?.value}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData?.preferredContact === method?.value
                          ? 'border-accent bg-accent/10' :'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('preferredContact', method?.value)}
                    >
                      <div className="text-center">
                        <Icon 
                          name={method?.icon} 
                          size={24} 
                          className={formData?.preferredContact === method?.value ? 'text-accent' : 'text-text-secondary'} 
                        />
                        <div className={`text-sm font-medium mt-2 ${
                          formData?.preferredContact === method?.value ? 'text-accent' : 'text-primary'
                        }`}>
                          {method?.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData?.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
                  className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                />
                <label htmlFor="newsletter" className="text-sm text-text-secondary">
                  Subscribe to our newsletter for AI automation insights and industry updates
                </label>
              </div>
            </div>
          </div>

          {/* Priority Indicator */}
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={20} className="text-text-secondary" />
                <div>
                  <div className="font-medium text-primary">Expected Response Time</div>
                  <div className={`text-sm ${getPriorityColor(formData?.priority)}`}>
                    {formData?.priority === 'low' && 'Within 24 hours'}
                    {formData?.priority === 'medium' && 'Within 4 hours'}
                    {formData?.priority === 'high' && 'Within 1 hour'}
                    {formData?.priority === 'critical' && 'Within 15 minutes'}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-primary">Priority Level</div>
                <div className={`text-sm font-semibold ${getPriorityColor(formData?.priority)} capitalize`}>
                  {formData?.priority}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="default"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cta-morph px-12"
              iconName="Send"
              iconPosition="right"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </Button>
            
            <p className="text-sm text-text-secondary mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;