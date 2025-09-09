import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);

  // Mock user data
  useEffect(() => {
    const mockUser = {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@techcorp.in",
      company: "TechCorp Solutions Pvt Ltd",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      plan: "Enterprise",
      joinDate: "March 2024",
      timezone: "Asia/Kolkata"
    };
    setUser(mockUser);
  }, []);

  // Mock projects data
  const projects = [
    {
      id: 1,
      name: "Customer Service Automation",
      description: "AI-powered chatbot implementation for 24/7 customer support with multi-language capabilities",
      status: "In Progress",
      progress: 75,
      dueDate: "Dec 15, 2024",
      teamSize: 4,
      timeRemaining: "3 weeks"
    },
    {
      id: 2,
      name: "Invoice Processing System",
      description: "Automated invoice processing and approval workflow with OCR integration",
      status: "Completed",
      progress: 100,
      dueDate: "Nov 30, 2024",
      teamSize: 3,
      timeRemaining: "Completed"
    },
    {
      id: 3,
      name: "Inventory Management AI",
      description: "Predictive inventory management system with demand forecasting",
      status: "Planning",
      progress: 15,
      dueDate: "Jan 20, 2025",
      teamSize: 5,
      timeRemaining: "6 weeks"
    }
  ];

  // Mock metrics data
  const metrics = [
    {
      id: 1,
      label: "Active Projects",
      value: "3",
      change: "+1",
      trend: "up",
      description: "Projects currently in progress",
      icon: "FolderOpen",
      iconColor: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 2,
      label: "Cost Savings",
      value: "₹2.4L",
      change: "+15%",
      trend: "up",
      description: "Monthly automation savings",
      icon: "TrendingUp",
      iconColor: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 3,
      label: "Time Saved",
      value: "240h",
      change: "+8%",
      trend: "up",
      description: "Hours saved this month",
      icon: "Clock",
      iconColor: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 4,
      label: "System Uptime",
      value: "99.8%",
      change: "0%",
      trend: "stable",
      description: "Average system availability",
      icon: "Activity",
      iconColor: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  // Mock activity data
  const activities = [
    {
      id: 1,
      type: "milestone",
      title: "Customer Service Bot Deployed",
      description: "Successfully deployed chatbot to production environment",
      timestamp: new Date(Date.now() - 1800000),
      project: "Customer Service Automation",
      priority: "high"
    },
    {
      id: 2,
      type: "update",
      title: "Weekly Progress Report",
      description: "Invoice processing system testing completed with 98% accuracy",
      timestamp: new Date(Date.now() - 3600000),
      project: "Invoice Processing System"
    },
    {
      id: 3,
      type: "meeting",
      title: "Strategy Review Meeting",
      description: "Quarterly review scheduled for next week",
      timestamp: new Date(Date.now() - 7200000),
      priority: "medium"
    },
    {
      id: 4,
      type: "alert",
      title: "System Maintenance Scheduled",
      description: "Planned maintenance window on Sunday 2 AM - 4 AM IST",
      timestamp: new Date(Date.now() - 10800000),
      priority: "low"
    }
  ];

  // Mock support tickets
  const supportTickets = [
    {
      id: "TKT-001",
      title: "Chatbot Response Accuracy Issue",
      description: "The chatbot is providing incorrect responses for product pricing queries",
      status: "Open",
      priority: "High",
      category: "Technical",
      createdDate: "Dec 5, 2024",
      responseTime: "< 2 hours"
    },
    {
      id: "TKT-002",
      title: "Invoice Processing Delay",
      description: "Some invoices are taking longer than expected to process",
      status: "In Progress",
      priority: "Medium",
      category: "Performance",
      createdDate: "Dec 3, 2024",
      responseTime: "< 4 hours"
    },
    {
      id: "TKT-003",
      title: "User Access Request",
      description: "Need to add new team member to the dashboard",
      status: "Resolved",
      priority: "Low",
      category: "Access",
      createdDate: "Dec 1, 2024",
      responseTime: "< 1 hour"
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
    console.log('View project details:', project);
  };

  const handleCreateTicket = () => {
    console.log('Create new support ticket');
  };

  const handleViewTicket = (ticket) => {
    console.log('View ticket:', ticket);
  };

  const handleDownloadResource = (resource) => {
    console.log('Download resource:', resource);
  };

  const handleViewResource = (resource) => {
    console.log('View resource:', resource);
  };

  const handleViewInvoice = (invoice) => {
    console.log('View invoice:', invoice);
  };

  const handleMakePayment = (invoice) => {
    console.log('Make payment for invoice:', invoice);
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
              <Button variant="default" iconName="Plus" iconPosition="left">
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