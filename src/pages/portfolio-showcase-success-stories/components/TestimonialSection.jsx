import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { saveSubmission } from '../../../utils/store';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      quote: `The AI automation solution transformed our manufacturing process completely. We achieved 45% cost reduction and 300% productivity increase within just 6 months. The team's expertise and support throughout the implementation was exceptional.`,
      author: "Rajesh Kumar",
      position: "Operations Director",
      company: "TechManufacturing India Pvt Ltd",
      location: "Mumbai, India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "Manufacturing",
      projectType: "Process Automation",
      results: ["45% Cost Reduction", "300% Productivity Increase", "Zero Errors"]
    },
    {
      id: 2,
      quote: `Working with AI Automation Hub was a game-changer for our e-commerce platform. The customer service automation reduced response time by 80% and increased customer satisfaction to 98%. Highly recommended!`,
      author: "Sarah Johnson",
      position: "CEO",
      company: "GlobalShop Solutions",
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "E-commerce",
      projectType: "Customer Service Automation",
      results: ["80% Faster Response", "98% Satisfaction", "24/7 Support"]
    },
    {
      id: 3,
      quote: `The financial data analytics automation has revolutionized our decision-making process. Real-time insights and automated reporting saved us 20 hours per week and improved accuracy by 95%.`,
      author: "Michael Chen",
      position: "CFO",
      company: "FinTech Innovations Ltd",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "Financial Services",
      projectType: "Data Analytics",
      results: ["20 Hours Saved/Week", "95% Accuracy", "Real-time Insights"]
    },
    {
      id: 4,
      quote: `The marketing automation platform exceeded our expectations. Lead generation increased by 250% and conversion rates improved by 40%. The ROI was evident within the first quarter.`,
      author: "Priya Sharma",
      position: "Marketing Director",
      company: "Digital Growth Agency",
      location: "Bangalore, India",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "Marketing",
      projectType: "Marketing Automation",
      results: ["250% More Leads", "40% Higher Conversion", "Positive ROI"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  const handleShareSuccessStory = () => {
    const payload = {
      type: 'success_story_request',
      action: 'share_success_story',
      timestamp: new Date().toISOString()
    };
    saveSubmission('portfolio_interactions', payload);
    
    const subject = encodeURIComponent('Share Your Success Story - AI Automation Hub');
    const body = encodeURIComponent(`Hi Team,\n\nI would like to share my success story with AI automation:\n\nCompany: \nIndustry: \nResults achieved: \n\nPlease contact me to discuss further.\n\nBest regards`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
    navigate('/contact-scheduling-multi-channel-engagement');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Icon name="MessageSquare" size={20} color="var(--color-accent)" />
            <span className="text-accent font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from business leaders who have transformed their operations with our AI automation solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-4">
                  <Image
                    src={current?.avatar}
                    alt={current?.author}
                    className="w-full h-full rounded-full object-cover border-4 border-accent/20"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-primary">{current?.author}</h4>
                  <p className="text-sm text-gray-600">{current?.position}</p>
                  <p className="text-sm font-medium text-secondary">{current?.company}</p>
                  <p className="text-xs text-gray-500">{current?.location}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start space-x-1 pt-2">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${i < current?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote and Details */}
              <div className="flex-1">
                <div className="mb-6">
                  <Icon name="Quote" size={32} color="var(--color-accent)" className="mb-4 opacity-50" />
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                    {current?.quote}
                  </blockquote>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={16} color="var(--color-secondary)" />
                    <span className="text-sm text-gray-600">
                      <span className="font-medium">Industry:</span> {current?.industry}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={16} color="var(--color-secondary)" />
                    <span className="text-sm text-gray-600">
                      <span className="font-medium">Project:</span> {current?.projectType}
                    </span>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {current?.results?.map((result, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full"
                    >
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                iconName="ChevronLeft"
                className="w-10 h-10 p-0"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                iconName="ChevronRight"
                className="w-10 h-10 p-0"
              />
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-sm text-gray-500">
              {currentTestimonial + 1} of {testimonials?.length}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cta-morph"
              iconName="MessageSquare"
              iconPosition="left"
              onClick={handleShareSuccessStory}
            >
              Share Your Success Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;