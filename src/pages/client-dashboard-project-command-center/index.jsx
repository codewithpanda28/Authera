import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import MetricsCard from './components/MetricsCard';
import ActivityFeed from './components/ActivityFeed';
import SupportTickets from './components/SupportTickets';
import PerformanceChart from './components/PerformanceChart';
import ResourceLibrary from './components/ResourceLibrary';
import BillingOverview from './components/BillingOverview';
import { getSubmissions } from '../../utils/store';

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);
  const [liveData, setLiveData] = useState({
    projects: [],
    activities: [],
    supportTickets: [],
    resources: [],
    billing: null
  });
  const navigate = useNavigate();

  // Load live data from localStorage
  useEffect(() => {
    const loadLiveData = () => {
      const allSubmissions = getSubmissions();
      
      // Process different types of submissions
      const projects = allSubmissions.filter(sub => 
        sub.type === 'quote' || sub.type === 'consultation' || sub.type === 'industry_demo'
      ).map((sub, index) => ({
        id: index + 1,
        name: sub.data?.serviceType || sub.data?.industry || 'AI Automation Project',
        description: sub.data?.message || sub.data?.description || 'AI automation implementation',
        status: 'Planning',
        progress: Math.floor(Math.random() * 30) + 10,
        dueDate: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        teamSize: Math.floor(Math.random() * 5) + 2,
        timeRemaining: `${Math.floor(Math.random() * 8) + 2} weeks`,
        submissionData: sub
      }));

      const activities = allSubmissions.map((sub, index) => ({
        id: index + 1,
        type: 'update',
        title: `${sub.type.replace('_', ' ').toUpperCase()} Submitted`,
        description: `New ${sub.type} submission received`,
        timestamp: new Date(sub.timestamp),
        project: sub.data?.serviceType || 'General Inquiry',
        priority: 'medium'
      }));

      const supportTickets = allSubmissions.filter(sub => 
        sub.type === 'contact_form' || sub.type === 'success_story_request'
      ).map((sub, index) => ({
        id: `TKT-${String(index + 1).padStart(3, '0')}`,
        title: sub.data?.subject || 'Support Request',
        description: sub.data?.message || 'General inquiry',
        status: 'Open',
        priority: sub.data?.priority || 'Medium',
        category: 'General',
        createdDate: new Date(sub.timestamp).toLocaleDateString(),
        responseTime: '< 4 hours',
        submissionData: sub
      }));

      setLiveData({
        projects,
        activities: activities.slice(0, 10), // Show last 10 activities
        supportTickets,
        resources: [], // Will be populated with static resources
        billing: null
      });
    };

    loadLiveData();
    
    // Set up user data
    const mockUser = {
      name: "Dashboard User",
      email: "akashkumar.webdev@gmail.com",
      company: "AI Automation Hub",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      plan: "Enterprise",
      joinDate: "December 2024",
      timezone: "Asia/Kolkata"
    };
    setUser(mockUser);
  }, []);

  // Use live data for projects
  const projects = liveData.projects.length > 0 ? liveData.projects : [
    {
      id: 1,
      name: "No Active Projects",
      description: "Submit a quote or consultation request to see your projects here",
      status: "Planning",
      progress: 0,
      dueDate: "TBD",
      teamSize: 0,
      timeRemaining: "TBD"
    }
  ];

  // Live metrics data
  const metrics = [
    {
      id: 1,
      label: "Active Projects",
      value: liveData.projects.length.toString(),
      change: `+${liveData.projects.length}`,
      trend: "up",
      description: "Projects currently in progress",
      icon: "FolderOpen",
      iconColor: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 2,
      label: "Total Submissions",
      value: getSubmissions().length.toString(),
      change: `+${getSubmissions().length}`,
      trend: "up",
      description: "Total form submissions received",
      icon: "TrendingUp",
      iconColor: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 3,
      label: "Support Tickets",
      value: liveData.supportTickets.length.toString(),
      change: `+${liveData.supportTickets.length}`,
      trend: "up",
      description: "Open support requests",
      icon: "MessageSquare",
      iconColor: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 4,
      label: "Response Rate",
      value: "100%",
      change: "0%",
      trend: "stable",
      description: "All submissions responded to",
      icon: "Activity",
      iconColor: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  // Use live activity data
  const activities = liveData.activities.length > 0 ? liveData.activities : [
    {
      id: 1,
      type: "info",
      title: "Welcome to Your Dashboard",
      description: "Submit forms and requests to see live activity here",
      timestamp: new Date(),
      project: "General",
      priority: "low"
    }
  ];

  // Use live support tickets data
  const supportTickets = liveData.supportTickets.length > 0 ? liveData.supportTickets : [
    {
      id: "TKT-000",
      title: "No Support Tickets",
      description: "Submit contact forms to create support tickets here",
      status: "Open",
      priority: "Low",
      category: "General",
      createdDate: new Date().toLocaleDateString(),
      responseTime: "< 4 hours"
    }
  ];

  // Mock performance data
  const performanceData = [
    { name: 'Week 1', value: 85, target: 90 },
    { name: 'Week 2', value: 88, target: 90 },
    { name: 'Week 3', value: 92, target: 90 },
    { name: 'Week 4', value: 89, target: 90 },
    { name: 'Week 5', value: 94, target: 90 },
    { name: 'Week 6', value: 91, target: 90 },
    { name: 'Week 7', value: 96, target: 90 }
  ];

  const costSavingsData = [
    { name: 'Jan', value: 180000 },
    { name: 'Feb', value: 195000 },
    { name: 'Mar', value: 210000 },
    { name: 'Apr', value: 225000 },
    { name: 'May', value: 240000 },
    { name: 'Jun', value: 235000 },
    { name: 'Jul', value: 250000 }
  ];

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "AI Automation Best Practices Guide",
      description: "Comprehensive guide covering implementation strategies and optimization techniques",
      type: "PDF",
      category: "guides",
      size: 2048000,
      lastUpdated: "Dec 1, 2024",
      isNew: true,
      isPremium: false
    },
    {
      id: 2,
      title: "Chatbot Training Video Series",
      description: "Step-by-step video tutorials for training and customizing your AI chatbot",
      type: "Video",
      category: "training",
      size: 157286400,
      lastUpdated: "Nov 28, 2024",
      isNew: false,
      isPremium: true
    },
    {
      id: 3,
      title: "API Documentation",
      description: "Complete technical documentation for integration APIs and webhooks",
      type: "Document",
      category: "documentation",
      size: 1024000,
      lastUpdated: "Nov 25, 2024",
      isNew: false,
      isPremium: false
    },
    {
      id: 4,
      title: "ROI Calculation Template",
      description: "Excel template for calculating automation ROI and cost-benefit analysis",
      type: "Spreadsheet",
      category: "templates",
      size: 512000,
      lastUpdated: "Nov 20, 2024",
      isNew: false,
      isPremium: false
    }
  ];

  // Mock billing data
  const billingData = {
    totalInvested: 500000,
    totalSaved: 1200000,
    monthlySavings: 240000,
    timesSaved: 240,
    roiGrowth: 15,
    recentInvoices: [
      {
        id: 1,
        number: "INV-2024-001",
        description: "Monthly Automation Services",
        amount: 85000,
        currency: "INR",
        status: "Paid",
        date: "Dec 1, 2024"
      },
      {
        id: 2,
        number: "INV-2024-002",
        description: "Additional Bot Training",
        amount: 25000,
        currency: "INR",
        status: "Pending",
        date: "Dec 5, 2024"
      }
    ],
    paymentMethods: [
      {
        id: 1,
        type: "card",
        name: "Business Credit Card",
        details: "**** **** **** 4532",
        isDefault: true
      },
      {
        id: 2,
        type: "bank",
        name: "HDFC Bank Account",
        details: "****1234 - Current Account",
        isDefault: false
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
    { id: 'performance', label: 'Performance', icon: 'TrendingUp' },
    { id: 'resources', label: 'Resources', icon: 'BookOpen' },
    { id: 'billing', label: 'Billing', icon: 'CreditCard' },
    { id: 'support', label: 'Support', icon: 'MessageSquare' }
  ];

  const handleProjectDetails = (project) => {
    if (project.submissionData) {
      const subject = encodeURIComponent(`Project Details: ${project.name}`);
      const body = encodeURIComponent(`Project: ${project.name}\n\nDescription: ${project.description}\n\nStatus: ${project.status}\n\nProgress: ${project.progress}%\n\nDue Date: ${project.dueDate}\n\nTeam Size: ${project.teamSize}\n\nTime Remaining: ${project.timeRemaining}\n\nSubmission Data:\n${JSON.stringify(project.submissionData, null, 2)}\n\nPhone: +91 8252472186`);
      window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
    } else {
      alert('No project details available. Submit a quote or consultation request first.');
    }
  };

  const handleCreateTicket = () => {
    const subject = encodeURIComponent('New Support Ticket - AI Automation Hub');
    const body = encodeURIComponent(`Hi Team,\n\nI need support with:\n\nIssue Description:\n\nPriority: \n\nPlease contact me to discuss further.\n\nBest regards`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleViewTicket = (ticket) => {
    if (ticket.submissionData) {
      const subject = encodeURIComponent(`Support Ticket: ${ticket.title}`);
      const body = encodeURIComponent(`Ticket ID: ${ticket.id}\n\nTitle: ${ticket.title}\n\nDescription: ${ticket.description}\n\nStatus: ${ticket.status}\n\nPriority: ${ticket.priority}\n\nCategory: ${ticket.category}\n\nCreated: ${ticket.createdDate}\n\nResponse Time: ${ticket.responseTime}\n\nSubmission Data:\n${JSON.stringify(ticket.submissionData, null, 2)}\n\nPhone: +91 8252472186`);
      window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
    } else {
      alert('No ticket details available.');
    }
  };

  const handleDownloadResource = (resource) => {
    const content = `Resource: ${resource.title}\n\nDescription: ${resource.description}\n\nType: ${resource.type}\n\nCategory: ${resource.category}\n\nSize: ${resource.size} bytes\n\nLast Updated: ${resource.lastUpdated}\n\nContact: akashkumar.webdev@gmail.com\nPhone: +91 8252472186`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.title.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleViewResource = (resource) => {
    const subject = encodeURIComponent(`Resource Request: ${resource.title}`);
    const body = encodeURIComponent(`Hi Team,\n\nI would like to access the resource: ${resource.title}\n\nDescription: ${resource.description}\n\nPlease provide access or more information.\n\nBest regards`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleViewInvoice = (invoice) => {
    const subject = encodeURIComponent(`Invoice Inquiry: ${invoice.number}`);
    const body = encodeURIComponent(`Invoice Number: ${invoice.number}\n\nDescription: ${invoice.description}\n\nAmount: ${invoice.currency} ${invoice.amount}\n\nStatus: ${invoice.status}\n\nDate: ${invoice.date}\n\nPlease provide invoice details or payment information.\n\nPhone: +91 8252472186`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleMakePayment = (invoice) => {
    const subject = encodeURIComponent(`Payment Request: ${invoice.number}`);
    const body = encodeURIComponent(`Invoice Number: ${invoice.number}\n\nAmount: ${invoice.currency} ${invoice.amount}\n\nDescription: ${invoice.description}\n\nI would like to make payment for this invoice.\n\nPlease provide payment instructions.\n\nPhone: +91 8252472186`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleQuickCall = () => {
    window.location.href = 'tel:+918252472186';
  };

  const handleRequestNewProject = () => {
    navigate('/contact-scheduling-multi-channel-engagement');
  };

  const handleExportData = () => {
    const allData = {
      projects: liveData.projects,
      activities: liveData.activities,
      supportTickets: liveData.supportTickets,
      submissions: getSubmissions(),
      exportDate: new Date().toISOString()
    };
    
    const content = `AI Automation Hub - Dashboard Export\n\n${JSON.stringify(allData, null, 2)}\n\nContact: akashkumar.webdev@gmail.com\nPhone: +91 8252472186`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-export-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleAddPaymentMethod = () => {
    const subject = encodeURIComponent('Add Payment Method - AI Automation Hub');
    const body = encodeURIComponent(`Hi Team,\n\nI would like to add a new payment method to my account.\n\nPlease provide instructions for adding payment methods.\n\nBest regards`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleViewAll = (type) => {
    const subject = encodeURIComponent(`View All ${type} - AI Automation Hub`);
    const body = encodeURIComponent(`Hi Team,\n\nI would like to view all ${type.toLowerCase()} in my account.\n\nPlease provide access or more information.\n\nBest regards`);
    window.location.href = `mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics?.map((metric) => (
                <MetricsCard key={metric?.id} metric={metric} />
              ))}
            </div>
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <PerformanceChart 
                  data={performanceData} 
                  title="Automation Performance" 
                  type="line" 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects?.slice(0, 2)?.map((project) => (
                    <ProjectCard 
                      key={project?.id} 
                      project={project} 
                      onViewDetails={handleProjectDetails} 
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <ActivityFeed activities={activities} />
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
                <p className="text-text-secondary">Track your automation implementation progress</p>
              </div>
              <Button variant="default" iconName="Plus" iconPosition="left" onClick={handleRequestNewProject}>
                Request New Project
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects?.map((project) => (
                <ProjectCard 
                  key={project?.id} 
                  project={project} 
                  onViewDetails={handleProjectDetails} 
                />
              ))}
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Performance Analytics</h2>
              <p className="text-text-secondary">Monitor automation effectiveness and ROI</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {metrics?.map((metric) => (
                <MetricsCard key={metric?.id} metric={metric} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PerformanceChart 
                data={performanceData} 
                title="System Performance" 
                type="line" 
              />
              <PerformanceChart 
                data={costSavingsData} 
                title="Monthly Cost Savings" 
                type="bar" 
              />
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Resource Library</h2>
              <p className="text-text-secondary">Access training materials and documentation</p>
            </div>
            <ResourceLibrary 
              resources={resources}
              onDownload={handleDownloadResource}
              onView={handleViewResource}
            />
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Billing & ROI</h2>
              <p className="text-text-secondary">Track costs, payments, and return on investment</p>
            </div>
            <BillingOverview 
              billingData={billingData}
              onViewInvoice={handleViewInvoice}
              onMakePayment={handleMakePayment}
            />
          </div>
        );

      case 'support':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Support Center</h2>
              <p className="text-text-secondary">Get help and track your support requests</p>
            </div>
            <SupportTickets 
              tickets={supportTickets}
              onCreateTicket={handleCreateTicket}
              onViewTicket={handleViewTicket}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Client Dashboard - Project Command Center | AI Automation Hub</title>
        <meta name="description" content="Comprehensive project tracking dashboard with real-time updates, performance metrics, and system health monitoring for AI automation solutions." />
        <meta name="keywords" content="client dashboard, project tracking, automation metrics, performance monitoring, ROI tracking" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {user && (
                    <>
                      <img 
                        src={user?.avatar} 
                        alt={user?.name}
                        className="w-16 h-16 rounded-full border-4 border-white/20"
                      />
                      <div>
                        <h1 className="text-2xl font-bold">Welcome back, {user?.name?.split(' ')?.[0]}!</h1>
                        <p className="text-white/80">{user?.company} • {user?.plan} Plan</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-white/80">Last login</p>
                    <p className="font-medium">Today, 9:30 AM IST</p>
                  </div>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white border-b border-border sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center space-x-1 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                      activeTab === tab?.id
                        ? 'border-accent text-accent' :'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            {renderTabContent()}
          </div>
        </main>

        {/* Quick Actions FAB */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative group">
            <Button
              variant="default"
              size="lg"
              className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl"
            >
              <Icon name="Plus" size={24} />
            </Button>
            
            <div className="absolute bottom-16 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-full shadow-lg whitespace-nowrap"
                    onClick={handleCreateTicket}
                  >
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    New Ticket
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-full shadow-lg whitespace-nowrap"
                    onClick={handleQuickCall}
                  >
                    <Icon name="Phone" size={16} className="mr-2" />
                    Quick Call
                  </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;