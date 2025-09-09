import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureSection = () => {
  const [activeCategory, setActiveCategory] = useState('workspace');

  const cultureCategories = [
    { key: 'workspace', label: 'Workspace', icon: 'Building' },
    { key: 'collaboration', label: 'Collaboration', icon: 'Users' },
    { key: 'innovation', label: 'Innovation', icon: 'Lightbulb' },
    { key: 'events', label: 'Events', icon: 'Calendar' }
  ];

  const cultureContent = {
    workspace: {
      title: "Modern Workspace Environment",
      description: "Our offices are designed to foster creativity, collaboration, and well-being. From open collaboration spaces to quiet focus areas, every element supports our team's productivity and happiness.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
          caption: "Open collaboration spaces designed for team interaction"
        },
        {
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
          caption: "Modern workstations with latest technology"
        },
        {
          src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
          caption: "Relaxation areas for work-life balance"
        }
      ],
      highlights: [
        "Ergonomic workstations with dual monitors",
        "Quiet zones for focused work",
        "Recreation areas with games and relaxation",
        "Fully equipped kitchen and dining spaces"
      ]
    },
    collaboration: {
      title: "Team Collaboration Culture",
      description: "We believe in the power of diverse perspectives and collaborative problem-solving. Our culture encourages open communication, knowledge sharing, and cross-functional teamwork.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
          caption: "Daily standup meetings and sprint planning"
        },
        {
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
          caption: "Cross-functional team workshops"
        },
        {
          src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
          caption: "Brainstorming sessions and ideation workshops"
        }
      ],
      highlights: [
        "Daily standup meetings across all teams",
        "Monthly cross-functional workshops",
        "Peer code reviews and knowledge sharing",
        "Open-door policy with leadership"
      ]
    },
    innovation: {
      title: "Innovation & Learning",
      description: "Continuous learning and innovation are at the heart of our culture. We invest in our team's growth through training, conferences, and dedicated innovation time.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
          caption: "Innovation labs and R&D facilities"
        },
        {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          caption: "Training sessions and skill development"
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
          caption: "Hackathons and innovation challenges"
        }
      ],
      highlights: [
        "20% time for personal projects and learning",
        "Monthly tech talks and knowledge sessions",
        "Annual innovation hackathons",
        "Conference attendance and certification support"
      ]
    },
    events: {
      title: "Team Events & Celebrations",
      description: "We celebrate our achievements, milestones, and cultural diversity through regular team events, festivals, and social gatherings that strengthen our bonds.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
          caption: "Annual company retreats and team building"
        },
        {
          src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
          caption: "Cultural celebrations and festivals"
        },
        {
          src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
          caption: "Achievement celebrations and awards"
        }
      ],
      highlights: [
        "Quarterly team building activities",
        "Cultural festival celebrations",
        "Achievement recognition ceremonies",
        "Annual company retreat and awards"
      ]
    }
  };

  const currentContent = cultureContent?.[activeCategory];

  const workLifeBalance = [
    {
      icon: "Clock",
      title: "Flexible Hours",
      description: "Work when you\'re most productive with flexible scheduling options"
    },
    {
      icon: "Home",
      title: "Remote Work",
      description: "Hybrid work model supporting both office and remote collaboration"
    },
    {
      icon: "Heart",
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs"
    },
    {
      icon: "GraduationCap",
      title: "Learning Budget",
      description: "Annual learning allowance for courses, books, and conferences"
    },
    {
      icon: "Plane",
      title: "Time Off",
      description: "Generous vacation policy and sabbatical opportunities"
    },
    {
      icon: "Gift",
      title: "Perks & Benefits",
      description: "Competitive compensation with performance bonuses and equity"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Coffee" size={24} className="text-accent" />
            <span className="text-accent font-semibold">Our Culture</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Behind the Scenes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the culture, values, and environment that make AI Automation Hub 
            a great place to work and grow
          </p>
        </div>

        {/* Culture Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cultureCategories?.map((category) => (
            <button
              key={category?.key}
              onClick={() => setActiveCategory(category?.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category?.key
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-text-primary hover:bg-accent/10'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Culture Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {currentContent?.title}
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              {currentContent?.description}
            </p>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {currentContent?.images?.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <Image
                    src={image?.src}
                    alt={image?.caption}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image?.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-4">
              {currentContent?.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-text-primary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work-Life Balance */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Work-Life Balance
            </h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We believe that great work comes from happy, healthy, and motivated people
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workLifeBalance?.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={28} className="text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{benefit?.title}</h4>
                <p className="text-text-secondary">{benefit?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a culture that values innovation, collaboration, and personal growth. 
            Help us shape the future of AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 cta-morph">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Learn About Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;