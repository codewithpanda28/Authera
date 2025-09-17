import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const SERVICES_BY_SLUG = {
  'ai-hr-automation-resume-parser-screening': {
    title: 'AI HR Automation (Resume Parser + Screening)',
    subtitle: 'Revolutionize hiring with AI-powered tools that cut down manual HR work and bring top talent faster.',
    metrics: {
      roi: '300-500%',
      timeline: '3-4 weeks',
      price: '₹75,000 – ₹2,00,000'
    },
    included: [
      'Bulk Resume Upload (single & bulk with credits/coin system)',
      'AI Candidate Scoring & Shortlisting',
      'Automated Interview Scheduling (Google Calendar Integration)',
      'Automated Candidate Communication – Email & WhatsApp updates'
    ],
    features: [
      'Resume parsing with entity extraction',
      'Similarity search against job description',
      'Admin review workflows and overrides',
      'Export to ATS/CRM via APIs',
    ]
  }
};

const TabButton = ({ id, activeTab, setActiveTab, icon, children }) => (
  <button
    onClick={() => setActiveTab(id)}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all ${
      activeTab === id ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-white border-gray-200 hover:bg-gray-50'
    }`}
  >
    <Icon name={icon} size={16} />
    <span>{children}</span>
  </button>
);

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = SERVICES_BY_SLUG[slug];

  const [activeTab, setActiveTab] = React.useState('overview');

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 px-6 max-w-5xl mx-auto">
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl">
            <div className="font-semibold mb-2">Service not found</div>
            <p className="mb-4">We couldn't find details for this service. Please go back and try again.</p>
            <Link to="/services-universe-interactive-solutions">
              <Button variant="default" size="md" iconName="ArrowLeft" iconPosition="left">Back to Services</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | AI Automation Hub</title>
        <meta name="description" content={service.subtitle} />
        <link rel="canonical" href={`/services/${slug}`} />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-20">
          <section className="bg-white border-b">
            <div className="max-w-6xl mx-auto px-6 py-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{service.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{service.subtitle}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl border bg-gray-50">
                  <div className="text-gray-500 text-sm">Expected ROI</div>
                  <div className="text-2xl font-bold text-green-600">{service.metrics.roi}</div>
                </div>
                <div className="p-4 rounded-xl border bg-gray-50">
                  <div className="text-gray-500 text-sm">Timeline</div>
                  <div className="text-2xl font-bold text-gray-900">{service.metrics.timeline}</div>
                </div>
                <div className="p-4 rounded-xl border bg-gray-50">
                  <div className="text-gray-500 text-sm">Starting Price</div>
                  <div className="text-2xl font-bold text-orange-600">{service.metrics.price}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <TabButton id="overview" activeTab={activeTab} setActiveTab={setActiveTab} icon="Info">Overview</TabButton>
                <TabButton id="features" activeTab={activeTab} setActiveTab={setActiveTab} icon="Sparkles">Features</TabButton>
                <TabButton id="case-study" activeTab={activeTab} setActiveTab={setActiveTab} icon="FileText">Case Study</TabButton>
                <TabButton id="technical" activeTab={activeTab} setActiveTab={setActiveTab} icon="Code2">Technical</TabButton>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-10">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">What's Included</h3>
                  <ul className="space-y-2">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <Icon name="CheckCircle2" size={18} className="text-green-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Actions</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact-scheduling-multi-channel-engagement">
                      <Button variant="default" size="lg" iconName="Calendar" iconPosition="left">Book Consultation</Button>
                    </Link>
                    <Link to="/services-universe-interactive-solutions">
                      <Button variant="outline" size="lg" iconName="Calculator" iconPosition="left">Calculate ROI</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="p-4 border rounded-xl bg-white flex items-start gap-3">
                      <Icon name="Sparkles" size={18} className="text-purple-600 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'case-study' && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Case Study</h3>
                <p className="text-gray-700">Coming soon: a concise case study with before/after metrics.</p>
                <Link to="/portfolio-showcase-success-stories">
                  <Button variant="ghost" size="md" iconName="ArrowRight" iconPosition="right">View Portfolio</Button>
                </Link>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Technical Overview</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Architecture: ingestion -> parsing -> scoring -> workflow -> integrations</li>
                  <li>Integrations: Google Calendar, SMTP/WhatsApp API, ATS/CRM via REST</li>
                  <li>Security: role-based access, audit logs, encrypted storage</li>
                </ul>
              </div>
            )}
          </section>

          <section className="border-t bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-gray-700">Ready to get started with {service.title}?</div>
              <div className="flex gap-3">
                <Link to="/contact-scheduling-multi-channel-engagement">
                  <Button variant="default" size="lg" iconName="MessageSquare" iconPosition="left">Talk to an Expert</Button>
                </Link>
                <Link to="/services-universe-interactive-solutions">
                  <Button variant="outline" size="lg" iconName="Zap" iconPosition="left">Explore Services</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ServiceDetailPage;



