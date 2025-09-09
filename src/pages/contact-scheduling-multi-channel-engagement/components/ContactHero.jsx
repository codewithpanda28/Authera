import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onBookConsultation, onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Icon name="MessageSquare" size={24} color="white" />
              </div>
              <span className="text-accent font-medium">Multi-Channel Engagement</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Transform Your Business
              <span className="block text-accent">Together</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Connect with our AI automation experts through your preferred channel. From instant WhatsApp responses to scheduled consultations, we're here to help you unlock your business potential.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">&lt;2min</div>
                <div className="text-sm text-white/70">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-white/70">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-white/70">Time Zones</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 cta-morph"
                iconName="Calendar"
                iconPosition="left"
                onClick={onBookConsultation}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onWhatsAppClick}
              >
                WhatsApp Now
              </Button>
            </div>
          </div>

          {/* Contact Cards Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Consultation Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Video" size={20} color="white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Video Consultation</h3>
                <p className="text-white/70 text-sm">Schedule a personalized session</p>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mt-8">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={20} color="#10B981" />
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp Chat</h3>
                <p className="text-white/70 text-sm">Instant responses available</p>
              </div>

              {/* Email Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={20} color="#3B82F6" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Support</h3>
                <p className="text-white/70 text-sm">Detailed project discussions</p>
              </div>

              {/* Phone Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mt-8">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" size={20} color="#8B5CF6" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone Call</h3>
                <p className="text-white/70 text-sm">Direct conversation</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;