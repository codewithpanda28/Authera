import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const KnowledgeHub = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const latestInsights = [
    {
      id: 1,
      title: "The Future of AI in Indian Manufacturing: 2025 Trends",
      excerpt: "Discover how AI automation is revolutionizing manufacturing processes across India, with case studies from leading companies achieving 40% efficiency gains.",
      category: "Industry Trends",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      author: {
        name: "Dr. Arjun Patel",
        role: "AI Strategy Director",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg"
      },
      tags: ["Manufacturing", "AI Trends", "Industry 4.0"]
    },
    {
      id: 2,
      title: "ROI Calculator: Measuring AI Automation Success",
      excerpt: "Learn the key metrics and methodologies to accurately calculate and track ROI from your AI automation investments with real-world examples.",
      category: "Best Practices",
      readTime: "12 min read",
      publishDate: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      author: {
        name: "Priya Sharma",
        role: "Business Analyst",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      tags: ["ROI", "Analytics", "Business Strategy"]
    },
    {
      id: 3,
      title: "Small Business AI: Starting Your Automation Journey",
      excerpt: "A comprehensive guide for small and medium businesses to begin their AI automation journey without breaking the bank or overwhelming resources.",
      category: "Getting Started",
      readTime: "6 min read",
      publishDate: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      author: {
        name: "Rahul Kumar",
        role: "SMB Solutions Expert",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      tags: ["Small Business", "Getting Started", "Cost-Effective"]
    }
  ];

  const premiumResources = [
    {
      title: "AI Automation Implementation Playbook",
      description: "Step-by-step guide with templates, checklists, and best practices",
      type: "PDF Guide",
      price: "₹2,999",
      originalPrice: "₹4,999",
      downloads: "1,200+",
      rating: 4.9
    },
    {
      title: "ROI Calculation Templates & Tools",
      description: "Excel templates and calculators for measuring automation success",
      type: "Excel Templates",
      price: "₹1,499",
      originalPrice: "₹2,499",
      downloads: "800+",
      rating: 4.8
    },
    {
      title: "Industry-Specific Automation Strategies",
      description: "Tailored approaches for different industries and business sizes",
      type: "Video Course",
      price: "₹5,999",
      originalPrice: "₹8,999",
      downloads: "600+",
      rating: 4.9
    }
  ];

  const handleNewsletterSignup = (e) => {
    e?.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="BookOpen" size={16} className="text-secondary" />
            <span className="text-secondary font-medium text-sm">Knowledge Hub</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Stay Ahead with
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              AI Insights & Trends
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Access cutting-edge AI automation insights, industry reports, and practical guides 
            to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Latest Insights - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-primary">Latest Insights</h3>
              <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right" onClick={() => navigate('/articles')}>
                View All Articles
              </Button>
            </div>

            <div className="space-y-6">
              {latestInsights?.map((article, index) => (
                <article key={article?.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    {/* Article Image */}
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={article?.image}
                          alt={article?.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                            {article?.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                        <span>{article?.publishDate}</span>
                        <span>•</span>
                        <span>{article?.readTime}</span>
                      </div>

                      <h4 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer" onClick={() => navigate(`/articles/${article?.id}`)}>
                        {article?.title}
                      </h4>

                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {article?.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article?.tags?.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-muted text-text-secondary px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={article?.author?.avatar}
                            alt={article?.author?.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-primary text-sm">{article?.author?.name}</div>
                            <div className="text-text-secondary text-xs">{article?.author?.role}</div>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" iconName="ArrowRight" onClick={() => navigate(`/articles/${article?.id}`)}>
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
              <div className="text-center mb-6">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">AI Trend Reports</h3>
                <p className="text-white/90 text-sm">
                  Get exclusive industry insights and automation trends delivered weekly
                </p>
              </div>

              {!subscribed ? (
                <form onSubmit={handleNewsletterSignup} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                    required
                  />
                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                    iconName="Send"
                    iconPosition="right"
                  >
                    Subscribe Free
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <Icon name="CheckCircle" size={32} className="mx-auto mb-2 text-accent" />
                  <p className="font-semibold">Successfully Subscribed!</p>
                  <p className="text-sm text-white/80">Check your email for confirmation</p>
                </div>
              )}

              <div className="mt-4 text-center">
                <p className="text-xs text-white/70">
                  Join 5,000+ business leaders • No spam, unsubscribe anytime
                </p>
              </div>
            </div>

            {/* Premium Resources */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Crown" size={20} className="text-warning" />
                <h3 className="text-lg font-bold text-primary">Premium Resources</h3>
              </div>

              <div className="space-y-4">
                {premiumResources?.map((resource, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary text-sm leading-tight">{resource?.title}</h4>
                      <span className="bg-warning/10 text-warning px-2 py-1 rounded text-xs font-medium">
                        {resource?.type}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary text-xs mb-3 leading-relaxed">
                      {resource?.description}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">{resource?.price}</span>
                        <span className="text-text-secondary line-through text-sm">{resource?.originalPrice}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-warning fill-current" />
                        <span className="text-xs text-text-secondary">{resource?.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">{resource?.downloads} downloads</span>
                      <Button variant="outline" size="xs" iconName="Download" onClick={() => navigate('/services-universe-interactive-solutions')}>
                        Get Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="default"
                size="sm"
                className="w-full mt-6 bg-gradient-to-r from-warning to-warning/80"
                iconName="ShoppingCart"
                iconPosition="left"
                onClick={() => navigate('/services-universe-interactive-solutions')}
              >
                Browse All Resources
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="bg-muted/50 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-4">Knowledge Hub Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Articles Published</span>
                  <span className="font-semibold text-primary">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Monthly Readers</span>
                  <span className="font-semibold text-primary">25,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Premium Downloads</span>
                  <span className="font-semibold text-primary">3,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Newsletter Subscribers</span>
                  <span className="font-semibold text-primary">5,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;