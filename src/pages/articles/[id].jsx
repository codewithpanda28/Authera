import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock article data - in real app, fetch from API
  const articles = {
    1: {
      id: 1,
      title: "The Future of AI in Indian Manufacturing: 2025 Trends",
      category: "Industry Trends",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      author: {
        name: "Dr. Arjun Patel",
        role: "AI Strategy Director",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg"
      },
      tags: ["Manufacturing", "AI Trends", "Industry 4.0"],
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence is transforming the manufacturing landscape in India at an unprecedented pace. As we approach 2025, the integration of AI technologies in manufacturing processes is not just a trend but a necessity for competitive advantage.</p>
        
        <h2>Current State of AI in Indian Manufacturing</h2>
        <p>Indian manufacturing companies are increasingly adopting AI solutions to optimize their operations. From predictive maintenance to quality control, AI is revolutionizing how products are made.</p>
        
        <h2>Key Trends for 2025</h2>
        <h3>1. Predictive Maintenance</h3>
        <p>AI-powered predictive maintenance systems are becoming standard, helping companies reduce downtime by up to 40% and maintenance costs by 25%.</p>
        
        <h3>2. Quality Control Automation</h3>
        <p>Computer vision and machine learning are enabling real-time quality inspection with 99.5% accuracy, significantly reducing defects and rework.</p>
        
        <h3>3. Supply Chain Optimization</h3>
        <p>AI algorithms are optimizing supply chain operations, reducing inventory costs by 30% and improving delivery times.</p>
        
        <h2>Case Studies</h2>
        <p>Leading Indian manufacturers like Tata Motors and Mahindra have reported 35-45% improvement in operational efficiency after implementing AI solutions.</p>
        
        <h2>Future Outlook</h2>
        <p>The next five years will see even more advanced AI applications, including autonomous manufacturing systems and fully integrated smart factories.</p>
      `
    },
    2: {
      id: 2,
      title: "ROI Calculator: Measuring AI Automation Success",
      category: "Best Practices",
      readTime: "12 min read",
      publishDate: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      author: {
        name: "Priya Sharma",
        role: "Business Analyst",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      tags: ["ROI", "Analytics", "Business Strategy"],
      content: `
        <h2>Understanding ROI in AI Automation</h2>
        <p>Calculating Return on Investment (ROI) for AI automation projects is crucial for justifying investments and measuring success. This comprehensive guide will help you accurately measure and track your automation ROI.</p>
        
        <h2>Key Metrics to Track</h2>
        <h3>1. Cost Savings</h3>
        <p>Measure direct cost reductions from automation, including labor costs, operational expenses, and error reduction.</p>
        
        <h3>2. Efficiency Gains</h3>
        <p>Track improvements in process speed, accuracy, and throughput to quantify productivity benefits.</p>
        
        <h3>3. Revenue Impact</h3>
        <p>Assess how automation affects revenue through improved customer satisfaction, faster delivery, and new capabilities.</p>
        
        <h2>ROI Calculation Formula</h2>
        <p>ROI = (Net Benefits - Investment Cost) / Investment Cost × 100</p>
        
        <h2>Best Practices</h2>
        <p>Establish baseline metrics before implementation, track both quantitative and qualitative benefits, and regularly review and adjust calculations.</p>
      `
    }
  };

  const article = articles[id] || articles[1];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <Button onClick={() => navigate('/articles')}>
              Back to Articles
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | AI Automation Hub</title>
        <meta name="description" content={article.content.substring(0, 160)} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Article Header */}
          <section className="bg-gradient-to-br from-gray-50 to-white py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {article.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-gray-600 mb-8">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>{article.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{article.author.name}</div>
                    <div className="text-gray-600">{article.author.role}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Article Image */}
          <section className="py-8">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Implementation Best Practices</h3>
                    <p className="text-gray-600 mb-4">Learn the essential steps for successful AI implementation in your organization.</p>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Future of Work with AI</h3>
                    <p className="text-gray-600 mb-4">Explore how AI is reshaping the workplace and creating new opportunities.</p>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl text-white/80 mb-8">
                  Get started with AI automation and see the results for yourself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => navigate('/contact-scheduling-multi-channel-engagement')}
                  >
                    Book Free Consultation
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-accent text-primary hover:bg-accent/90"
                    onClick={() => navigate('/services-universe-interactive-solutions')}
                  >
                    Explore Our Services
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ArticleDetail;
