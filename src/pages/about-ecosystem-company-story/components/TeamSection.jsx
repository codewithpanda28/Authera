import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterRole, setFilterRole] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      department: "leadership",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: `Visionary leader with 15+ years in AI and automation. Former Microsoft AI researcher with deep expertise in machine learning and enterprise solutions.\n\nLed digital transformation initiatives for Fortune 500 companies before founding AI Automation Hub.`,
      specializations: ["AI Strategy", "Machine Learning", "Enterprise Solutions"],
      certifications: ["AWS Solutions Architect", "Google Cloud AI", "Microsoft Azure AI"],
      achievements: [
        "Led 200+ AI transformation projects",
        "Published 25+ research papers",
        "Speaker at 50+ international conferences"
      ],
      contact: { email: "rajesh@aiautomationhub.com", linkedin: "rajesh-kumar-ai" }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "CTO",
      department: "technology",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: `Technical architect specializing in scalable AI systems and cloud infrastructure. Former Google engineer with expertise in distributed systems and ML operations.\n\nPioneered our proprietary AI automation framework serving 500+ global clients.`,
      specializations: ["System Architecture", "MLOps", "Cloud Infrastructure"],
      certifications: ["Kubernetes Certified", "TensorFlow Developer", "AWS DevOps"],
      achievements: [
        "Built systems serving 10M+ requests daily",
        "Reduced client deployment time by 80%",
        "Led team of 50+ engineers"
      ],
      contact: { email: "priya@aiautomationhub.com", linkedin: "priya-sharma-tech" }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head of AI Research",
      department: "technology",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: `AI researcher with PhD in Computer Science from Stanford. Specializes in natural language processing and computer vision applications for business automation.\n\nHolds 12 patents in AI automation and has published extensively in top-tier journals.`,
      specializations: ["NLP", "Computer Vision", "Deep Learning"],
      certifications: ["PhD Computer Science", "NVIDIA AI Specialist", "OpenAI Certified"],
      achievements: [
        "12 patents in AI automation",
        "40+ peer-reviewed publications",
        "Winner of AI Innovation Award 2023"
      ],
      contact: { email: "michael@aiautomationhub.com", linkedin: "michael-chen-ai" }
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "VP of Client Success",
      department: "business",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: `Client success expert with 12+ years in enterprise software and consulting. Former McKinsey consultant specializing in digital transformation and change management.\n\nMaintains 98% client satisfaction rate and has personally managed 300+ successful AI implementations.`,
      specializations: ["Client Relations", "Change Management", "Business Strategy"],
      certifications: ["PMP Certified", "Salesforce Admin", "Six Sigma Black Belt"],
      achievements: [
        "98% client satisfaction rate",
        "300+ successful implementations",
        "Reduced churn by 60%"
      ],
      contact: { email: "sarah@aiautomationhub.com", linkedin: "sarah-johnson-success" }
    },
    {
      id: 5,
      name: "Amit Patel",
      role: "Lead Data Scientist",
      department: "technology",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: `Data science leader with expertise in predictive analytics and business intelligence. Former Amazon data scientist with experience in large-scale ML systems.\n\nDeveloped algorithms that improved client ROI by average 300% across all implementations.`,
      specializations: ["Predictive Analytics", "Business Intelligence", "Statistical Modeling"],
      certifications: ["Google Analytics IQ", "Tableau Desktop Specialist", "R Programming"],
      achievements: [
        "300% average ROI improvement",
        "Built ML models for 100+ clients",
        "Reduced prediction errors by 45%"
      ],
      contact: { email: "amit@aiautomationhub.com", linkedin: "amit-patel-data" }
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Head of International Operations",
      department: "business",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: `International business expert with fluency in 5 languages and deep understanding of global markets. Former IBM global operations manager.\n\nLed expansion into 15+ countries and established partnerships with major technology vendors worldwide.`,
      specializations: ["Global Operations", "Partnership Development", "Market Expansion"],
      certifications: ["International Business MBA", "Project Management", "Cultural Intelligence"],
      achievements: [
        "Expanded to 15+ countries",
        "Established 50+ partnerships",
        "Grew international revenue by 400%"
      ],
      contact: { email: "lisa@aiautomationhub.com", linkedin: "lisa-wang-global" }
    }
  ];

  const departments = [
    { key: 'all', label: 'All Team', icon: 'Users' },
    { key: 'leadership', label: 'Leadership', icon: 'Crown' },
    { key: 'technology', label: 'Technology', icon: 'Code' },
    { key: 'business', label: 'Business', icon: 'Briefcase' }
  ];

  const filteredMembers = filterRole === 'all' 
    ? teamMembers 
    : teamMembers?.filter(member => member?.department === filterRole);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Users" size={24} className="text-accent" />
            <span className="text-accent font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Meet the Experts
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our diverse team of AI specialists, engineers, and business experts 
            brings together decades of experience in automation and digital transformation
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments?.map((dept) => (
            <button
              key={dept?.key}
              onClick={() => setFilterRole(dept?.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filterRole === dept?.key
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-text-primary hover:bg-accent/10'
              }`}
            >
              <Icon name={dept?.icon} size={18} />
              <span>{dept?.label}</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer cta-morph"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member?.name}</h3>
                  <p className="text-sm text-white/80">{member?.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {member?.specializations?.slice(0, 2)?.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                  {member?.specializations?.length > 2 && (
                    <span className="px-3 py-1 bg-muted text-text-secondary text-xs font-medium rounded-full">
                      +{member?.specializations?.length - 2} more
                    </span>
                  )}
                </div>
                
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {member?.bio?.split('\n\n')?.[0]}
                </p>
                
                <button className="text-accent font-medium text-sm hover:text-accent/80 transition-colors">
                  View Full Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">150+</div>
            <div className="text-text-secondary">Team Members</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Icon name="Award" size={32} className="text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">200+</div>
            <div className="text-text-secondary">Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Icon name="Globe" size={32} className="text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-text-secondary">Countries</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Icon name="Clock" size={32} className="text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-text-secondary">Years Combined Experience</div>
          </div>
        </div>
      </div>
      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
              
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  <Image
                    src={selectedMember?.image}
                    alt={selectedMember?.name}
                    className="w-full h-80 object-cover rounded-xl mb-6"
                  />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember?.specializations?.map((spec, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Certifications</h4>
                      <div className="space-y-2">
                        {selectedMember?.certifications?.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Award" size={16} className="text-accent" />
                            <span className="text-sm text-text-secondary">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {selectedMember?.name}
                  </h3>
                  <p className="text-xl text-accent mb-6">{selectedMember?.role}</p>
                  
                  <div className="prose text-text-secondary mb-8">
                    {selectedMember?.bio?.split('\n\n')?.map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-primary mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {selectedMember?.achievements?.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                      <Icon name="Mail" size={16} />
                      <span>Contact</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors">
                      <Icon name="Linkedin" size={16} />
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;