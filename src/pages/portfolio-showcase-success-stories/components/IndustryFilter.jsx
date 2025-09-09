import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const IndustryFilter = ({ onFilterChange, activeFilter }) => {
  const industries = [
    { id: 'all', name: 'All Industries', icon: 'Grid3X3', count: 150 },
    { id: 'manufacturing', name: 'Manufacturing', icon: 'Factory', count: 35 },
    { id: 'ecommerce', name: 'E-commerce', icon: 'ShoppingCart', count: 28 },
    { id: 'finance', name: 'Financial Services', icon: 'CreditCard', count: 22 },
    { id: 'healthcare', name: 'Healthcare', icon: 'Heart', count: 18 },
    { id: 'saas', name: 'SaaS Platforms', icon: 'Cloud', count: 25 },
    { id: 'logistics', name: 'Logistics', icon: 'Truck', count: 15 },
    { id: 'retail', name: 'Retail', icon: 'Store', count: 12 }
  ];

  const automationTypes = [
    { id: 'process', name: 'Process Automation', icon: 'Workflow' },
    { id: 'data', name: 'Data Analytics', icon: 'BarChart3' },
    { id: 'customer', name: 'Customer Service', icon: 'MessageSquare' },
    { id: 'marketing', name: 'Marketing Automation', icon: 'Target' },
    { id: 'operations', name: 'Operations', icon: 'Settings' }
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Industry Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Icon name="Filter" size={20} className="mr-2" />
            Filter by Industry
          </h3>
          <div className="flex flex-wrap gap-3">
            {industries?.map((industry) => (
              <button
                key={industry?.id}
                onClick={() => onFilterChange('industry', industry?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter?.industry === industry?.id
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={industry?.icon} size={16} />
                <span>{industry?.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {industry?.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Automation Type Filters */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <Icon name="Zap" size={20} className="mr-2" />
            Filter by Automation Type
          </h3>
          <div className="flex flex-wrap gap-3">
            {automationTypes?.map((type) => (
              <button
                key={type?.id}
                onClick={() => onFilterChange('type', type?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter?.type === type?.id
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={type?.icon} size={16} />
                <span>{type?.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFilter;