import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EmergencySupport = () => {
  const [isEmergencyFormOpen, setIsEmergencyFormOpen] = useState(false);
  const [emergencyData, setEmergencyData] = useState({
    clientId: '',
    contactName: '',
    phone: '',
    email: '',
    issueType: '',
    severity: 'high',
    description: '',
    systemsAffected: ''
  });

  const issueTypes = [
    { value: 'system-down', label: 'System/Service Down' },
    { value: 'data-loss', label: 'Data Loss/Corruption' },
    { value: 'security-breach', label: 'Security Incident' },
    { value: 'performance', label: 'Critical Performance Issue' },
    { value: 'integration', label: 'Integration Failure' },
    { value: 'other', label: 'Other Critical Issue' }
  ];

  const severityLevels = [
    { value: 'critical', label: 'Critical - Business Stopped' },
    { value: 'high', label: 'High - Major Impact' },
    { value: 'medium', label: 'Medium - Moderate Impact' }
  ];

  const supportChannels = [
    {
      id: 'emergency-phone',
      title: 'Emergency Hotline',
      description: 'Immediate phone support for critical issues',
      icon: 'Phone',
      color: 'destructive',
      responseTime: '< 5 minutes',
      availability: '24/7',
      phone: '+91 98765 99999',
      features: ['Immediate escalation', 'Senior engineer response', 'Screen sharing support']
    },
    {
      id: 'priority-whatsapp',
      title: 'Priority WhatsApp',
      description: 'Urgent WhatsApp support with priority handling',
      icon: 'MessageCircle',
      color: 'success',
      responseTime: '< 10 minutes',
      availability: '24/7',
      phone: '+91 98765 88888',
      features: ['File sharing', 'Voice messages', 'Priority queue']
    },
    {
      id: 'emergency-email',
      title: 'Emergency Email',
      description: 'High-priority email with guaranteed response',
      icon: 'Mail',
      color: 'warning',
      responseTime: '< 15 minutes',
      availability: '24/7',
      email: 'emergency@aiautomationhub.com',
      features: ['Auto-escalation', 'Ticket tracking', 'Multi-team coordination']
    }
  ];

  const handleEmergencySubmit = (e) => {
    e?.preventDefault();
    console.log('Emergency request submitted:', emergencyData);
    alert('Emergency support request submitted! You will receive a call within 5 minutes.');
    setIsEmergencyFormOpen(false);
    setEmergencyData({
      clientId: '',
      contactName: '',
      phone: '',
      email: '',
      issueType: '',
      severity: 'high',
      description: '',
      systemsAffected: ''
    });
  };

  const handleInputChange = (field, value) => {
    setEmergencyData(prev => ({ ...prev, [field]: value }));
  };

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'text-destructive bg-destructive/10 border-destructive/20',
      high: 'text-warning bg-warning/10 border-warning/20',
      medium: 'text-secondary bg-secondary/10 border-secondary/20'
    };
    return colors?.[severity] || colors?.high;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 via-white to-warning/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={24} className="text-destructive" />
            </div>
            <span className="text-destructive font-medium">Emergency Support</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            24/7 Emergency Support
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Critical issues require immediate attention. Our emergency support team is available 24/7 to help existing clients resolve urgent problems with guaranteed response times.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-12">
          <div className="flex items-start space-x-4">
            <Icon name="AlertCircle" size={24} className="text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-destructive mb-2">Emergency Support Guidelines</h3>
              <ul className="text-sm text-destructive/80 space-y-1">
                <li>• Emergency support is available exclusively for existing clients</li>
                <li>• Use emergency channels only for critical business-impacting issues</li>
                <li>• Have your client ID and system details ready</li>
                <li>• For non-urgent matters, please use regular support channels</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels?.map((channel) => (
            <div key={channel?.id} className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  channel?.color === 'destructive' ? 'bg-destructive/10' :
                  channel?.color === 'success'? 'bg-success/10' : 'bg-warning/10'
                }`}>
                  <Icon 
                    name={channel?.icon} 
                    size={28} 
                    className={
                      channel?.color === 'destructive' ? 'text-destructive' :
                      channel?.color === 'success'? 'text-success' : 'text-warning'
                    }
                  />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{channel?.title}</h3>
                <p className="text-text-secondary">{channel?.description}</p>
              </div>

              {/* Response Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-lg">
                <div className="text-center">
                  <div className={`text-lg font-bold mb-1 ${
                    channel?.color === 'destructive' ? 'text-destructive' :
                    channel?.color === 'success'? 'text-success' : 'text-warning'
                  }`}>
                    {channel?.responseTime}
                  </div>
                  <div className="text-xs text-text-secondary">Response Time</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold mb-1 ${
                    channel?.color === 'destructive' ? 'text-destructive' :
                    channel?.color === 'success'? 'text-success' : 'text-warning'
                  }`}>
                    {channel?.availability}
                  </div>
                  <div className="text-xs text-text-secondary">Availability</div>
                </div>
              </div>

              {/* Contact Info */}
              {channel?.phone && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-text-secondary" />
                    <span className="font-medium text-primary">{channel?.phone}</span>
                  </div>
                </div>
              )}
              
              {channel?.email && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-text-secondary" />
                    <span className="font-medium text-primary">{channel?.email}</span>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3 text-sm">Features</h4>
                <div className="space-y-2">
                  {channel?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="default"
                fullWidth
                className={
                  channel?.color === 'destructive' ? 'bg-destructive hover:bg-destructive/90' :
                  channel?.color === 'success'? 'bg-success hover:bg-success/90' : 'bg-warning hover:bg-warning/90'
                }
                iconName={channel?.icon}
                iconPosition="left"
              >
                Contact Now
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Form Toggle */}
        <div className="text-center mb-12">
          <Button
            variant="destructive"
            size="lg"
            onClick={() => setIsEmergencyFormOpen(true)}
            className="bg-destructive hover:bg-destructive/90 cta-morph"
            iconName="AlertTriangle"
            iconPosition="left"
          >
            Submit Emergency Request
          </Button>
        </div>

        {/* SLA Information */}
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Emergency Support SLA</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-destructive" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Response Time</h4>
              <p className="text-text-secondary text-sm">Critical: &lt; 5 minutes\nHigh: &lt; 15 minutes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-warning" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Resolution Target</h4>
              <p className="text-text-secondary text-sm">Critical: 2 hours\nHigh: 4 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Escalation</h4>
              <p className="text-text-secondary text-sm">Automatic escalation\nto senior engineers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Coverage</h4>
              <p className="text-text-secondary text-sm">24/7 availability\nAll time zones</p>
            </div>
          </div>
        </div>

        {/* Emergency Form Modal */}
        {isEmergencyFormOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Icon name="AlertTriangle" size={20} className="text-destructive" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Emergency Support Request</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEmergencyFormOpen(false)}
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>

              <form onSubmit={handleEmergencySubmit} className="p-6 space-y-6">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Info" size={16} className="text-destructive" />
                    <span className="font-semibold text-destructive">Emergency Request</span>
                  </div>
                  <p className="text-sm text-destructive/80">
                    This form is for critical issues only. Our team will contact you within 5 minutes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Client ID"
                    type="text"
                    placeholder="Enter your client ID"
                    value={emergencyData?.clientId}
                    onChange={(e) => handleInputChange('clientId', e?.target?.value)}
                    required
                  />

                  <Input
                    label="Contact Name"
                    type="text"
                    placeholder="Your full name"
                    value={emergencyData?.contactName}
                    onChange={(e) => handleInputChange('contactName', e?.target?.value)}
                    required
                  />

                  <Input
                    label="Emergency Phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={emergencyData?.phone}
                    onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@company.com"
                    value={emergencyData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Issue Type"
                    placeholder="Select issue type"
                    options={issueTypes}
                    value={emergencyData?.issueType}
                    onChange={(value) => handleInputChange('issueType', value)}
                    required
                  />

                  <Select
                    label="Severity Level"
                    placeholder="Select severity"
                    options={severityLevels}
                    value={emergencyData?.severity}
                    onChange={(value) => handleInputChange('severity', value)}
                    required
                  />
                </div>

                <Input
                  label="Systems Affected"
                  type="text"
                  placeholder="List affected systems/services"
                  value={emergencyData?.systemsAffected}
                  onChange={(e) => handleInputChange('systemsAffected', e?.target?.value)}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Issue Description <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-destructive focus:border-transparent resize-none"
                    rows="4"
                    placeholder="Provide detailed description of the issue, error messages, and steps taken..."
                    value={emergencyData?.description}
                    onChange={(e) => handleInputChange('description', e?.target?.value)}
                    required
                  ></textarea>
                </div>

                <div className={`p-4 rounded-lg border-2 ${getSeverityColor(emergencyData?.severity)}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={16} />
                    <span className="font-semibold">Expected Response Time</span>
                  </div>
                  <p className="text-sm">
                    {emergencyData?.severity === 'critical' && 'Within 5 minutes - Immediate escalation'}
                    {emergencyData?.severity === 'high' && 'Within 10 minutes - Priority handling'}
                    {emergencyData?.severity === 'medium' && 'Within 15 minutes - Standard emergency process'}
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEmergencyFormOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="bg-destructive hover:bg-destructive/90"
                    iconName="AlertTriangle"
                    iconPosition="left"
                  >
                    Submit Emergency Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmergencySupport;