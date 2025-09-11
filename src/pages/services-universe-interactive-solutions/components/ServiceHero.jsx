import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  const [selectedDemo, setSelectedDemo] = useState('automation');
  const navigate = useNavigate();

  const demoOptions = [
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Automate repetitive tasks with n8n & AI agents to save hours of manual work.',
      icon: 'Zap',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'chatbot',
      title: 'AI Chatbots',
      description: 'Deploy smart AI assistants that handle customer queries, emails, and workflows.',
      icon: 'MessageSquare',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 'analytics',
      title: 'Smart Analytics',
      description: 'See data transform into insightsTurn raw business data into actionable insights using AI-powered analysis.',
      icon: 'BarChart3',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  const goToConfigurator = () => {
    navigate('/services-universe-interactive-solutions');
    requestAnimationFrame(() => {
      const el = document?.querySelector('#solution-configurator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const goToPricing = () => {
    navigate('/services-universe-interactive-solutions');
    requestAnimationFrame(() => {
      const el = document?.querySelector('#pricing-calculator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Icon name="Sparkles" size={16} className="text-cyan-400" />
                <span>Interactive AI Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Experience AI
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Before You Buy
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Don't just imagine the possibilities—interact with our AI solutions through live demos. 
                See exactly how automation will transform your business processes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                iconName="Play"
                iconPosition="left"
                onClick={goToConfigurator}
              >
                Start Interactive Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Calculator"
                iconPosition="left"
                onClick={goToPricing}
              >
                Calculate ROI
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Automations Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">85%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-400">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Demo Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Choose Your Demo</h3>
            
            <div className="space-y-4">
              {demoOptions?.map((demo) => (
                <button
                  key={demo?.id}
                  onClick={() => setSelectedDemo(demo?.id)}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedDemo === demo?.id
                      ? 'border-cyan-400 bg-white/10 backdrop-blur-sm' :'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demo?.color} flex items-center justify-center`}>
                      <Icon name={demo?.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{demo?.title}</h4>
                      <p className="text-gray-400 text-sm">{demo?.description}</p>
                    </div>
                    <Icon 
                      name={selectedDemo === demo?.id ? "CheckCircle" : "Circle"} 
                      size={20} 
                      className={selectedDemo === demo?.id ? "text-cyan-400" : "text-gray-500"} 
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Demo Preview</h4>
                <Icon name="ExternalLink" size={16} className="text-cyan-400" />
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Icon name="Play" size={48} className="text-cyan-400 mx-auto" />
                  <p className="text-sm text-gray-400">Interactive demo loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;