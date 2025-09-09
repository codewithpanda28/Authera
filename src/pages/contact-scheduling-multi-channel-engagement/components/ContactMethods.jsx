import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { saveSubmission } from '../../../utils/store';

const ContactMethods = ({ onMethodSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  const contactMethods = [
    {
      id: 'consultation',
      title: 'Book Free Consultation',
      description: 'Schedule a 30-minute strategy session with our AI automation experts',
      icon: 'Calendar',
      color: 'accent',
      features: ['Real-time availability', 'Multiple time zones', 'Pre-meeting questionnaire', 'Calendar integration'],
      responseTime: 'Instant booking',
      bestFor: 'Detailed project discussions',
      action: 'Schedule Now'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Get instant responses on WhatsApp for quick queries and support',
      icon: 'MessageCircle',
      color: 'success',
      features: ['Instant messaging', 'File sharing', 'Voice messages', 'Business hours support'],
      responseTime: '< 2 minutes',
      bestFor: 'Quick questions & updates',
      action: 'Chat Now',
      phone: '+91 8252472186'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send detailed project requirements and get comprehensive responses',
      icon: 'Mail',
      color: 'secondary',
      features: ['Detailed responses', 'File attachments', 'Project documentation', 'Follow-up tracking'],
      responseTime: '< 4 hours',
      bestFor: 'Complex requirements',
      action: 'Send Email',
      email: 'akashkumar.webdev@gmail.com'
    },
    {
      id: 'phone',
      title: 'Direct Phone Call',
      description: 'Speak directly with our team for immediate assistance',
      icon: 'Phone',
      color: 'warning',
      features: ['Direct conversation', 'Immediate clarification', 'Screen sharing', 'Technical support'],
      responseTime: 'Immediate',
      bestFor: 'Urgent matters',
      action: 'Call Now',
      phone: '+91 8252472186'
    },
    {
      id: 'livechat',
      title: 'Live Chat',
      description: 'Chat with our support team during business hours',
      icon: 'MessageSquare',
      color: 'primary',
      features: ['Real-time chat', 'Screen sharing', 'File transfer', 'Chat history'],
      responseTime: '< 1 minute',
      bestFor: 'Technical queries',
      action: 'Start Chat'
    },
    {
      id: 'emergency',
      title: 'Emergency Support',
      description: 'Priority support for existing clients with critical issues',
      icon: 'AlertTriangle',
      color: 'destructive',
      features: ['Priority handling', '24/7 availability', 'Escalation process', 'SLA guaranteed'],
      responseTime: '< 15 minutes',
      bestFor: 'Critical issues',
      action: 'Emergency Contact',
      note: 'For existing clients only'
    }
  ];

  const handleMethodClick = (method) => {
    setSelectedMethod(method?.id);
    onMethodSelect(method);
    
    // Handle specific actions based on method
    const payload = {
      type: 'contact_method_selected',
      method: method?.id,
      timestamp: new Date().toISOString()
    };
    saveSubmission('contact_interactions', payload);
    
    switch (method?.id) {
      case 'consultation':
        navigate('/contact-scheduling-multi-channel-engagement');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/918252472186`, '_blank');
        break;
      case 'email':
        const subject = encodeURIComponent('AI Automation Inquiry');
        const body = encodeURIComponent(`Hi Team,\n\nI am interested in AI automation services.\n\nPlease contact me to discuss further.\n\nBest regards`);
        window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
        break;
      case 'phone':
        window.location.href = 'tel:+918252472186';
        break;
      case 'livechat':
        // Open LinkedIn for chat
        window.open('https://www.linkedin.com/in/codewithpanda28', '_blank');
        break;
      case 'emergency':
        const emergencySubject = encodeURIComponent('URGENT: Emergency Support Required');
        const emergencyBody = encodeURIComponent(`URGENT SUPPORT REQUEST\n\nClient: \nIssue: \nPriority: Critical\n\nPlease contact immediately.\n\nPhone: +91 8252472186`);
        window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${emergencySubject}&body=${emergencyBody}`;
        break;
      default:
        break;
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      accent: 'text-accent border-accent/20 bg-accent/5',
      success: 'text-success border-success/20 bg-success/5',
      secondary: 'text-secondary border-secondary/20 bg-secondary/5',
      warning: 'text-warning border-warning/20 bg-warning/5',
      primary: 'text-primary border-primary/20 bg-primary/5',
      destructive: 'text-destructive border-destructive/20 bg-destructive/5'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-accent" />
            </div>
            <span className="text-accent font-medium">Choose Your Preferred Channel</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Multiple Ways to Connect
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Select the communication method that works best for you. Our team is ready to assist through multiple channels with guaranteed response times.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                selectedMethod === method?.id 
                  ? getColorClasses(method?.color) 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
              onClick={() => handleMethodClick(method)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  method?.color === 'accent' ? 'bg-accent/10' :
                  method?.color === 'success' ? 'bg-success/10' :
                  method?.color === 'secondary' ? 'bg-secondary/10' :
                  method?.color === 'warning' ? 'bg-warning/10' :
                  method?.color === 'primary'? 'bg-primary/10' : 'bg-destructive/10'
                }`}>
                  <Icon 
                    name={method?.icon} 
                    size={24} 
                    className={
                      method?.color === 'accent' ? 'text-accent' :
                      method?.color === 'success' ? 'text-success' :
                      method?.color === 'secondary' ? 'text-secondary' :
                      method?.color === 'warning' ? 'text-warning' :
                      method?.color === 'primary'? 'text-primary' : 'text-destructive'
                    }
                  />
                </div>
                {method?.note && (
                  <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full">
                    {method?.note}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-3">
                {method?.title}
              </h3>
              
              <p className="text-text-secondary mb-6">
                {method?.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {method?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-lg">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Response Time</div>
                  <div className="font-semibold text-primary">{method?.responseTime}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Best For</div>
                  <div className="font-semibold text-primary">{method?.bestFor}</div>
                </div>
              </div>

              {/* Contact Info */}
              {(method?.phone || method?.email) && (
                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  {method?.phone && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Phone" size={16} className="text-text-secondary" />
                      <span className="text-sm font-medium">{method?.phone}</span>
                    </div>
                  )}
                  {method?.email && (
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} className="text-text-secondary" />
                      <span className="text-sm font-medium">{method?.email}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Action Button */}
              <Button
                variant={selectedMethod === method?.id ? "default" : "outline"}
                fullWidth
                className={selectedMethod === method?.id ? 
                  `bg-${method?.color} hover:bg-${method?.color}/90` : 
                  `border-${method?.color} text-${method?.color} hover:bg-${method?.color} hover:text-white`
                }
                iconName="ArrowRight"
                iconPosition="right"
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Business Hours & Availability</h3>
            <p className="text-text-secondary">We're available across multiple time zones to serve our global clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-primary mb-2">India (IST)</h4>
              <p className="text-text-secondary">Mon-Fri: 9:00 AM - 7:00 PM</p>
              <p className="text-text-secondary">Sat: 10:00 AM - 4:00 PM</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">International</h4>
              <p className="text-text-secondary">24/7 Emergency Support</p>
              <p className="text-text-secondary">Scheduled consultations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Support</h4>
              <p className="text-text-secondary">WhatsApp: 24/7</p>
              <p className="text-text-secondary">Email: &lt; 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;