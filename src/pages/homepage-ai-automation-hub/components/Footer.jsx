import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Process Automation", href: "/services-universe-interactive-solutions" },
        { name: "AI Data Analytics", href: "/services-universe-interactive-solutions" },
        { name: "Customer Service AI", href: "/services-universe-interactive-solutions" },
        { name: "Document Processing", href: "/services-universe-interactive-solutions" },
        { name: "Smart Inventory", href: "/services-universe-interactive-solutions" },
        { name: "Financial Automation", href: "/services-universe-interactive-solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-ecosystem-company-story" },
        { name: "Our Team", href: "/about-ecosystem-company-story" },
        { name: "Careers", href: "/about-ecosystem-company-story" },
        { name: "Success Stories", href: "/portfolio-showcase-success-stories" },
        { name: "Case Studies", href: "/portfolio-showcase-success-stories" },
        { name: "Client Portal", href: "/client-dashboard-project-command-center" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Knowledge Hub", href: "#knowledge-hub" },
        { name: "ROI Calculator", href: "#roi-calculator" },
        { name: "Industry Reports", href: "#resources" },
        { name: "Best Practices", href: "#resources" },
        { name: "Implementation Guides", href: "#resources" },
        { name: "API Documentation", href: "#resources" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Help Center", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Technical Support", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Training", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Community Forum", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Status Page", href: "/contact-scheduling-multi-channel-engagement" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/company/ai-automation-hub" },
    { name: "Twitter", icon: "Twitter", href: "https://twitter.com/aiautomationhub" },
    { name: "YouTube", icon: "Youtube", href: "https://youtube.com/@aiautomationhub" },
    { name: "Instagram", icon: "Instagram", href: "https://instagram.com/aiautomationhub" },
    { name: "Facebook", icon: "Facebook", href: "https://facebook.com/aiautomationhub" }
  ];

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Headquarters",
      details: ["Bandra Kurla Complex", "Mumbai, Maharashtra 400051", "India"]
    },
    {
      icon: "Phone",
      title: "Phone",
      details: ["+91 8252472186", "+91 9508949406"]
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["akashkumar.webdev@gmail.com", "autheraai225@gmail.com"]
    },
    {
      icon: "Clock",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 9:00 PM", "Sat: 10:00 AM - 10:00 PM", "24/7 Emergency Support"]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link to="/homepage-ai-automation-hub" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Zap" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">
                  AI Automation Hub
                </span>
                <span className="text-sm text-white/80 font-medium -mt-1">
                  Intelligent Solutions
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-white/80 leading-relaxed max-w-md">
              Transforming businesses worldwide with intelligent AI automation solutions. 
              We help companies achieve measurable ROI through cutting-edge technology and expert implementation.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo?.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name={contact?.icon} size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white text-sm mb-1">{contact?.title}</div>
                    {contact?.details?.map((detail, idx) => (
                      <div key={idx} className="text-white/70 text-sm">{detail}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/80 text-sm font-medium">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Icon name={social?.icon} size={18} className="text-white/80 group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links - Right Columns */}
          <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
            {footerSections?.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-white mb-4">{section?.title}</h3>
                <ul className="space-y-3">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link?.href}
                        className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-white/80">
                  Get the latest AI automation insights, industry trends, and exclusive resources delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <Button
                  variant="default"
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6"
                  iconName="Send"
                  iconPosition="right"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © {currentYear} AI Automation Hub. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="#privacy" className="text-white/70 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#terms" className="text-white/70 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="#cookies" className="text-white/70 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link to="#security" className="text-white/70 hover:text-accent transition-colors">
                Security
              </Link>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-1">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-white/80 text-xs font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-1">
                <Icon name="Lock" size={16} className="text-accent" />
                <span className="text-white/80 text-xs font-medium">SOC 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;