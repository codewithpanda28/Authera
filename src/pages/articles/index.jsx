import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
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
      tags: ["Manufacturing", "AI Trends", "Industry 4.0"],
      content: "Full article content about AI in manufacturing..."
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
      tags: ["ROI", "Analytics", "Business Strategy"],
      content: "Full article content about ROI calculation..."
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
      tags: ["Small Business", "Getting Started", "Cost-Effective"],
      content: "Full article content about small business AI..."
    },
    {
      id: 4,
      title: "AI Chatbots: Beyond Customer Service",
      excerpt: "Explore advanced chatbot applications in sales, marketing, and internal operations for maximum business impact.",
      category: "Technology",
      readTime: "10 min read",
      publishDate: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      author: {
        name: "Sarah Johnson",
        role: "AI Product Manager",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg"
      },
      tags: ["Chatbots", "AI", "Customer Experience"],
      content: "Full article content about AI chatbots..."
    },
    {
      id: 5,
      title: "Data Security in AI Automation: A Complete Guide",
      excerpt: "Essential security practices and compliance requirements for implementing AI automation in regulated industries.",
      category: "Security",
      readTime: "15 min read",
      publishDate: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      author: {
        name: "Michael Chen",
        role: "Security Architect",
        avatar: "https://randomuser.me/api/portraits/men/40.jpg"
      },
      tags: ["Security", "Compliance", "Data Protection"],
      content: "Full article content about data security..."
    }
  ];

  const categories = ['all', 'Industry Trends', 'Best Practices', 'Getting Started', 'Technology', 'Security'];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleReadMore = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <>
      <Helmet>
        <title>AI Automation Articles & Insights | AI Automation Hub</title>
        <meta name="description" content="Explore our comprehensive collection of AI automation articles, industry insights, and best practices to accelerate your digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  AI Automation
                  <span className="block text-accent">Insights & Articles</span>
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Stay ahead with cutting-edge insights, industry trends, and practical guides 
                  to accelerate your AI automation journey.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-accent text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Articles' : category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                  <article key={article.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>{article.publishDate}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{article.author.name}</div>
                            <div className="text-gray-500 text-xs">{article.author.role}</div>
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          iconName="ArrowRight"
                          onClick={() => handleReadMore(article.id)}
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ArticlesPage;
