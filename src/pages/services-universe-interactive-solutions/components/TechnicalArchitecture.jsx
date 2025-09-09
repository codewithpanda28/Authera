import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { saveSubmission } from '../../../utils/store';

const TechnicalArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState('presentation');
  const navigate = useNavigate();

  const architectureLayers = [
    {
      id: 'presentation',
      name: 'Presentation Layer',
      description: 'User interfaces and client applications',
      icon: 'Monitor',
      color: 'from-blue-500 to-cyan-400',
      technologies: [
        { name: 'React.js', description: 'Modern web interfaces', icon: 'Globe' },
        { name: 'React Native', description: 'Mobile applications', icon: 'Smartphone' },
        { name: 'Progressive Web Apps', description: 'Cross-platform compatibility', icon: 'Layers' },
        { name: 'Responsive Design', description: 'Multi-device support', icon: 'Tablet' }
      ],
      features: [
        'Intuitive user experience',
        'Real-time data visualization',
        'Mobile-first design',
        'Accessibility compliance'
      ]
    },
    {
      id: 'api',
      name: 'API Gateway',
      description: 'Secure API management and routing',
      icon: 'Network',
      color: 'from-green-500 to-emerald-400',
      technologies: [
        { name: 'REST APIs', description: 'Standard web services', icon: 'Link' },
        { name: 'GraphQL', description: 'Flexible data queries', icon: 'Database' },
        { name: 'WebSocket', description: 'Real-time communication', icon: 'Zap' },
        { name: 'OAuth 2.0', description: 'Secure authentication', icon: 'Shield' }
      ],
      features: [
        'Rate limiting and throttling',
        'API versioning',
        'Request/response transformation',
        'Comprehensive logging'
      ]
    },
    {
      id: 'business',
      name: 'Business Logic',
      description: 'Core automation and AI processing',
      icon: 'Brain',
      color: 'from-purple-500 to-pink-400',
      technologies: [
        { name: 'Python/Django', description: 'AI/ML processing', icon: 'Code' },
        { name: 'Node.js', description: 'Real-time processing', icon: 'Server' },
        { name: 'TensorFlow', description: 'Machine learning models', icon: 'Cpu' },
        { name: 'Apache Kafka', description: 'Event streaming', icon: 'Activity' }
      ],
      features: [
        'Intelligent decision making',
        'Workflow orchestration',
        'Business rule engine',
        'Event-driven architecture'
      ]
    },
    {
      id: 'data',
      name: 'Data Layer',
      description: 'Data storage and management systems',
      icon: 'Database',
      color: 'from-orange-500 to-red-400',
      technologies: [
        { name: 'PostgreSQL', description: 'Relational database', icon: 'HardDrive' },
        { name: 'MongoDB', description: 'Document database', icon: 'FileText' },
        { name: 'Redis', description: 'In-memory caching', icon: 'Zap' },
        { name: 'Elasticsearch', description: 'Search and analytics', icon: 'Search' }
      ],
      features: [
        'ACID compliance',
        'Horizontal scaling',
        'Data encryption',
        'Automated backups'
      ]
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      description: 'Cloud hosting and deployment',
      icon: 'Cloud',
      color: 'from-indigo-500 to-purple-400',
      technologies: [
        { name: 'AWS/Azure', description: 'Cloud platforms', icon: 'CloudLightning' },
        { name: 'Docker', description: 'Containerization', icon: 'Package' },
        { name: 'Kubernetes', description: 'Container orchestration', icon: 'Settings' },
        { name: 'Terraform', description: 'Infrastructure as code', icon: 'Code2' }
      ],
      features: [
        'Auto-scaling capabilities',
        'Load balancing',
        'Disaster recovery',
        'Multi-region deployment'
      ]
    }
  ];

  const securityFeatures = [
    { name: 'End-to-End Encryption', icon: 'Lock', description: 'Data protection in transit and at rest' },
    { name: 'Multi-Factor Authentication', icon: 'Shield', description: 'Enhanced user security' },
    { name: 'Role-Based Access Control', icon: 'Users', description: 'Granular permission management' },
    { name: 'Audit Logging', icon: 'FileText', description: 'Comprehensive activity tracking' },
    { name: 'Compliance Standards', icon: 'CheckCircle', description: 'GDPR, SOC2, ISO 27001' },
    { name: 'Vulnerability Scanning', icon: 'Search', description: 'Automated security testing' }
  ];

  const integrationCapabilities = [
    { name: 'ERP Systems', icon: 'Building', examples: 'SAP, Oracle, Microsoft Dynamics' },
    { name: 'CRM Platforms', icon: 'Users', examples: 'Salesforce, HubSpot, Zoho' },
    { name: 'E-commerce', icon: 'ShoppingCart', examples: 'Shopify, WooCommerce, Magento' },
    { name: 'Communication', icon: 'MessageSquare', examples: 'Slack, Teams, WhatsApp Business' },
    { name: 'Payment Gateways', icon: 'CreditCard', examples: 'Razorpay, Stripe, PayPal' },
    { name: 'Analytics Tools', icon: 'BarChart3', examples: 'Google Analytics, Mixpanel, Tableau' }
  ];

  const activeLayerData = architectureLayers?.find(layer => layer?.id === activeLayer);

  const handleDownloadSpecs = () => {
    const payload = {
      type: 'technical_specs',
      layer: activeLayer,
      data: activeLayerData
    };
    saveSubmission('technical_requests', payload);
    const content = `Technical Specifications\n\n${JSON.stringify(payload, null, 2)}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'technical-specs.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleScheduleReview = () => {
    const payload = {
      type: 'architecture_review',
      layer: activeLayer,
      data: activeLayerData
    };
    saveSubmission('consultations', payload);
    const subject = encodeURIComponent('Schedule Architecture Review');
    const body = encodeURIComponent(`Architecture review request:\n\n${JSON.stringify(payload, null, 2)}\n\nPhone: +91 8252472186`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
    navigate('/contact-scheduling-multi-channel-engagement');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 text-sm font-medium">
            <Icon name="Layers" size={16} />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on modern, scalable architecture with industry-leading security standards 
            and seamless integration capabilities.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Layer Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {architectureLayers?.map((layer, index) => (
                <button
                  key={layer?.id}
                  onClick={() => setActiveLayer(layer?.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    activeLayer === layer?.id
                      ? 'border-indigo-500 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${layer?.color} flex items-center justify-center`}>
                      <Icon name={layer?.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className={`font-semibold ${
                          activeLayer === layer?.id ? 'text-indigo-900' : 'text-gray-900'
                        }`}>
                          {layer?.name}
                        </h3>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          Layer {index + 1}
                        </span>
                      </div>
                      <p className={`text-sm mt-1 ${
                        activeLayer === layer?.id ? 'text-indigo-700' : 'text-gray-600'
                      }`}>
                        {layer?.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Layer Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${activeLayerData?.color} flex items-center justify-center`}>
                    <Icon name={activeLayerData?.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeLayerData?.name}</h3>
                    <p className="text-gray-600">{activeLayerData?.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h4>
                    <div className="space-y-4">
                      {activeLayerData?.technologies?.map((tech, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Icon name={tech?.icon} size={20} className="text-gray-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-gray-900">{tech?.name}</h5>
                            <p className="text-sm text-gray-600">{tech?.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {activeLayerData?.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Security & Compliance</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {securityFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <Icon name={feature?.icon} size={18} className="text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">{feature?.name}</h4>
                    <p className="text-sm text-gray-600">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="Plug" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Integration Capabilities</h3>
            </div>
            
            <div className="space-y-4">
              {integrationCapabilities?.map((integration, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={integration?.icon} size={18} className="text-blue-600" />
                    <h4 className="font-medium text-gray-900">{integration?.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{integration?.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">System Architecture Overview</h3>
          
          <div className="relative">
            {/* Architecture Flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {architectureLayers?.map((layer, index) => (
                <div key={layer?.id} className="relative">
                  <div className={`p-6 rounded-xl bg-gradient-to-r ${layer?.color} text-white text-center`}>
                    <Icon name={layer?.icon} size={32} className="mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">{layer?.name}</h4>
                  </div>
                  
                  {index < architectureLayers?.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <Icon name="ChevronRight" size={20} className="text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              iconName="Download"
              iconPosition="left"
              onClick={handleDownloadSpecs}
            >
              Download Technical Specs
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={handleScheduleReview}
            >
              Schedule Architecture Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;