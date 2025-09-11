import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const TeamDirectory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedExpertise, setSelectedExpertise] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'leadership', label: 'Leadership Team' },
    { value: 'ai-development', label: 'AI Development' },
    { value: 'consulting', label: 'Business Consulting' },
    { value: 'support', label: 'Customer Support' },
    { value: 'sales', label: 'Sales & Partnerships' }
  ];

  const expertiseAreas = [
    { value: 'all', label: 'All Expertise' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'nlp', label: 'Natural Language Processing' },
    { value: 'automation', label: 'Process Automation' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'chatbots', label: 'Chatbot Development' },
    { value: 'strategy', label: 'AI Strategy' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Akash Kumar',
      title: 'CEO & Founder',
      department: 'CEO & Founder',
      expertise: ['AI Automation', 'LLMs & LangChain', 'n8n Workflows', 'MERN Stack Development'],
      location: 'Jharkhand, India',
      experience: '2+ years',
      email: 'akashkumar.webdev@gmail.com',
      phone: '+91 8252472186',
      linkedin: 'https://www.linkedin.com/in/codewithpanda28',
      avatar: './../public/assets/images/akash.jpg',
      bio: 'CEO & Founder of AI Automation Hub. Self-taught AI & automation expert specializing in LLMs, LangChain, n8n workflows, and MERN stack development. Builds plug-and-play AI tools that simplify business processes and drive results.',
      specialties: ['AI Automation', 'LLMs & LangChain', 'n8n Workflow Development', 'MERN Stack Development', 'AI Project Deployment'],
      languages: ['English', 'Hindi'],
      availability: 'Available for AI automation consultations',
      certifications: ['GroqCloud API Certified', 'OpenAI API Experience']
    },
    // {
    //   id: 2,
    //   name: 'Priya Sharma',
    //   title: 'Head of AI Development',
    //   department: 'ai-development',
    //   expertise: ['nlp', 'chatbots'],
    //   location: 'Bangalore',
    //   experience: '8+ years',
    //   email: 'priya.sharma@aiautomationhub.com',
    //   phone: '+91 98765 43211',
    //   linkedin: 'https://linkedin.com/in/priyasharma',
    //   avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    //   bio: 'Expert in NLP and conversational AI, specializing in building intelligent chatbots and voice assistants.',
    //   specialties: ['Natural Language Processing', 'Chatbot Development', 'Voice AI', 'Deep Learning'],
    //   languages: ['English', 'Hindi', 'Tamil'],
    //   availability: 'Available for technical consultations',
    //   certifications: ['TensorFlow Developer', 'NLTK Certified', 'Dialogflow Expert']
    // },
    // {
    //   id: 3,
    //   name: 'Amit Patel',
    //   title: 'Senior Business Consultant',
    //   department: 'consulting',
    //   expertise: ['strategy', 'automation'],
    //   location: 'Mumbai',
    //   experience: '10+ years',
    //   email: 'amit.patel@aiautomationhub.com',
    //   phone: '+91 98765 43212',
    //   linkedin: 'https://linkedin.com/in/amitpatel',
    //   avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    //   bio: 'Business transformation expert helping enterprises adopt AI solutions for improved efficiency and growth.',
    //   specialties: ['Business Strategy', 'Process Optimization', 'Change Management', 'ROI Analysis'],
    //   languages: ['English', 'Hindi', 'Gujarati'],
    //   availability: 'Available for business consultations',
    //   certifications: ['PMP Certified', 'Six Sigma Black Belt', 'AI Business Strategy']
    // },
    // {
    //   id: 4,
    //   name: 'Sneha Reddy',
    //   title: 'Data Analytics Lead',
    //   department: 'ai-development',
    //   expertise: ['data-analytics', 'machine-learning'],
    //   location: 'Bangalore',
    //   experience: '7+ years',
    //   email: 'sneha.reddy@aiautomationhub.com',
    //   phone: '+91 98765 43213',
    //   linkedin: 'https://linkedin.com/in/snehareddy',
    //   avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    //   bio: 'Data science expert specializing in predictive analytics and business intelligence solutions.',
    //   specialties: ['Data Analytics', 'Predictive Modeling', 'Business Intelligence', 'Statistical Analysis'],
    //   languages: ['English', 'Telugu', 'Hindi'],
    //   availability: 'Available for data strategy sessions',
    //   certifications: ['Google Analytics', 'Tableau Expert', 'Python Data Science']
    // },
    // {
    //   id: 5,
    //   name: 'Vikram Singh',
    //   title: 'Customer Success Manager',
    //   department: 'support',
    //   expertise: ['strategy', 'automation'],
    //   location: 'Delhi',
    //   experience: '6+ years',
    //   email: 'vikram.singh@aiautomationhub.com',
    //   phone: '+91 98765 43214',
    //   linkedin: 'https://linkedin.com/in/vikramsingh',
    //   avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    //   bio: 'Dedicated to ensuring client success through strategic support and implementation guidance.',
    //   specialties: ['Customer Success', 'Implementation Support', 'Training', 'Relationship Management'],
    //   languages: ['English', 'Hindi', 'Punjabi'],
    //   availability: 'Available for support consultations',
    //   certifications: ['Customer Success Manager', 'ITIL Foundation', 'Agile Certified']
    // },
    // {
    //   id: 6,
    //   name: 'Kavya Nair',
    //   title: 'Sales Director',
    //   department: 'sales',
    //   expertise: ['strategy'],
    //   location: 'Mumbai',
    //   experience: '9+ years',
    //   email: 'kavya.nair@aiautomationhub.com',
    //   phone: '+91 98765 43215',
    //   linkedin: 'https://linkedin.com/in/kavyanair',
    //   avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
    //   bio: 'Sales leader with deep understanding of AI solutions and enterprise client requirements.',
    //   specialties: ['Enterprise Sales', 'Partnership Development', 'Market Strategy', 'Client Relations'],
    //   languages: ['English', 'Hindi', 'Malayalam'],
    //   availability: 'Available for sales consultations',
    //   certifications: ['Salesforce Certified', 'Enterprise Sales', 'Partnership Management']
    // }
  ];

  const filteredMembers = teamMembers?.filter(member => {
    const departmentMatch = selectedDepartment === 'all' || member?.department === selectedDepartment;
    const expertiseMatch = selectedExpertise === 'all' || member?.expertise?.includes(selectedExpertise);
    return departmentMatch && expertiseMatch;
  });

  const handleContactMember = (member) => {
    console.log('Contacting member:', member?.name);
    // Handle contact action
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} className="text-success" />
            </div>
            <span className="text-success font-medium">Expert Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Connect with Our Specialists
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get direct access to our team of AI automation experts. Each specialist brings unique expertise and industry experience to help solve your specific challenges.
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Select
            label="Filter by Department"
            options={departments}
            value={selectedDepartment}
            onChange={setSelectedDepartment}
            className="mb-0"
          />
          
          <Select
            label="Filter by Expertise"
            options={expertiseAreas}
            value={selectedExpertise}
            onChange={setSelectedExpertise}
            className="mb-0"
          />
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-text-secondary">
            Showing {filteredMembers?.length} of {teamMembers?.length} team members
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers?.map((member) => (
            <div key={member?.id} className="bg-muted rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              {/* Member Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-1">{member?.name}</h3>
                <p className="text-accent font-medium mb-2">{member?.title}</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{member?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{member?.experience}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {member?.bio}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3 text-sm">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {member?.specialties?.slice(0, 3)?.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {member?.specialties?.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-text-secondary rounded-full text-xs">
                      +{member?.specialties?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-2 text-sm">Languages</h4>
                <p className="text-text-secondary text-sm">{member?.languages?.join(', ')}</p>
              </div>

              {/* Availability */}
              <div className="mb-6 p-3 bg-success/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-success text-sm font-medium">{member?.availability}</span>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-accent hover:bg-accent/90"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => handleContactMember(member)}
                >
                  Schedule Meeting
                </Button>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    iconName="Mail"
                  
                  >
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-success text-success hover:bg-success hover:text-white"
                    iconName="Phone"
                  >
                    Call
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    iconName="Linkedin"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-primary mb-2 text-sm">Key Certifications</h4>
                <div className="space-y-1">
                  {member?.certifications?.slice(0, 2)?.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Award" size={12} className="text-warning" />
                      <span className="text-xs text-text-secondary">{cert}</span>
                    </div>
                  ))}
                  {member?.certifications?.length > 2 && (
                    <div className="text-xs text-text-secondary">
                      +{member?.certifications?.length - 2} more certifications
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMembers?.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Search" size={24} className="text-text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">No team members found</h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your filters to see more team members.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedDepartment('all');
                setSelectedExpertise('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Can't find the right specialist?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our team coordination specialists will connect you with the perfect expert for your specific requirements.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            iconName="Users"
            iconPosition="left"
          >
            Request Team Matching
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamDirectory;