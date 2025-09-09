import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationBooking from './components/ConsultationBooking';
import ContactForm from './components/ContactForm';
import OfficeLocations from './components/OfficeLocations';
import TeamDirectory from './components/TeamDirectory';
import EmergencySupport from './components/EmergencySupport';

const ContactSchedulingMultiChannelEngagement = () => {
  const [isBookingVisible, setIsBookingVisible] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleBookConsultation = () => {
    setIsBookingVisible(true);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210';
    const message = encodeURIComponent('Hi! I\'m interested in learning more about your AI automation services. Can we schedule a consultation?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMethodSelect = (method) => {
    setSelectedContactMethod(method);
    
    // Handle different contact methods
    switch (method?.id) {
      case 'consultation':
        setIsBookingVisible(true);
        break;
      case 'whatsapp':
        handleWhatsAppClick();
        break;
      case 'email':
        window.location.href = `mailto:${method?.email}?subject=AI Automation Inquiry`;
        break;
      case 'phone':
        window.location.href = `tel:${method?.phone}`;
        break;
      case 'livechat':
        // Implement live chat functionality
        console.log('Opening live chat...');
        break;
      case 'emergency':
        // Scroll to emergency support section
        document.getElementById('emergency-support')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const handleCloseBooking = () => {
    setIsBookingVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Scheduling - Multi-Channel Engagement | AI Automation Hub</title>
        <meta 
          name="description" 
          content="Connect with AI Automation Hub through multiple channels. Book consultations, get instant WhatsApp support, visit our offices, or contact our expert team directly. 24/7 emergency support available for existing clients." 
        />
        <meta name="keywords" content="contact AI automation, schedule consultation, WhatsApp support, office locations, emergency support, team directory" />
        <meta property="og:title" content="Contact & Scheduling - Multi-Channel Engagement | AI Automation Hub" />
        <meta property="og:description" content="Multiple ways to connect with our AI automation experts. Book consultations, get instant support, or visit our offices." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-scheduling-multi-channel-engagement" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ContactHero 
          onBookConsultation={handleBookConsultation}
          onWhatsAppClick={handleWhatsAppClick}
        />

        {/* Contact Methods */}
        <ContactMethods onMethodSelect={handleMethodSelect} />

        {/* Contact Form */}
        <ContactForm />

        {/* Office Locations */}
        <OfficeLocations />

        {/* Team Directory */}
        <TeamDirectory />

        {/* Emergency Support */}
        <div id="emergency-support">
          <EmergencySupport />
        </div>

        {/* Consultation Booking Modal */}
        <ConsultationBooking 
          isVisible={isBookingVisible}
          onClose={handleCloseBooking}
        />

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">AI</span>
                  </div>
                  <span className="text-xl font-bold">AI Automation Hub</span>
                </div>
                <p className="text-white/80 mb-6 max-w-md">
                  Transforming businesses through intelligent automation solutions. 
                  Connect with us through your preferred channel and let's build the future together.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60">📧</span>
                    <span className="text-white/80">hello@aiautomationhub.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60">📱</span>
                    <span className="text-white/80">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60">🏢</span>
                    <span className="text-white/80">Bangalore, Mumbai, Delhi NCR</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Contact</h4>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <button 
                      onClick={handleBookConsultation}
                      className="hover:text-accent transition-colors"
                    >
                      Book Consultation
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="hover:text-accent transition-colors"
                    >
                      WhatsApp Support
                    </button>
                  </li>
                  <li>
                    <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                      Emergency Hotline
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@aiautomationhub.com" className="hover:text-accent transition-colors">
                      Email Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div>
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <div className="text-accent font-medium">Emergency Support</div>
                    <div className="text-xs">24/7 for existing clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} AI Automation Hub. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Support Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactSchedulingMultiChannelEngagement;