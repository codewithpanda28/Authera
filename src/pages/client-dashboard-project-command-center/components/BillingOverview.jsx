import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BillingOverview = ({ billingData, onViewInvoice, onMakePayment }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  const periods = [
    { value: 'current', label: 'Current Month' },
    { value: 'last', label: 'Last Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'overdue':
        return 'bg-error/10 text-error border-error/20';
      case 'draft':
        return 'bg-muted text-text-secondary border-border';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const formatCurrency = (amount, currency = 'INR') => {
    if (currency === 'INR') {
      return `₹${amount?.toLocaleString('en-IN')}`;
    }
    return `$${amount?.toLocaleString('en-US')}`;
  };

  const calculateROI = (invested, saved) => {
    return ((saved - invested) / invested * 100)?.toFixed(1);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Billing & ROI Overview</h3>
        <div className="flex items-center space-x-2">
          {periods?.map((period) => (
            <button
              key={period?.value}
              onClick={() => setSelectedPeriod(period?.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedPeriod === period?.value
                  ? 'bg-accent/10 text-accent' :'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              {period?.label}
            </button>
          ))}
        </div>
      </div>
      {/* ROI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-success/5 border border-success/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="TrendingUp" size={20} className="text-success" />
            <span className="text-xs text-success font-medium">+{billingData?.roiGrowth}%</span>
          </div>
          <h4 className="text-2xl font-bold text-success mb-1">
            {calculateROI(billingData?.totalInvested, billingData?.totalSaved)}%
          </h4>
          <p className="text-sm text-success/80">Total ROI</p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="DollarSign" size={20} className="text-accent" />
            <span className="text-xs text-accent font-medium">This month</span>
          </div>
          <h4 className="text-2xl font-bold text-accent mb-1">
            {formatCurrency(billingData?.monthlySavings)}
          </h4>
          <p className="text-sm text-accent/80">Cost Savings</p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Clock" size={20} className="text-primary" />
            <span className="text-xs text-primary font-medium">Automated</span>
          </div>
          <h4 className="text-2xl font-bold text-primary mb-1">
            {billingData?.timesSaved}h
          </h4>
          <p className="text-sm text-primary/80">Time Saved</p>
        </div>
      </div>
      {/* Recent Invoices */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-md font-semibold text-text-primary">Recent Invoices</h4>
          <Button
            variant="outline"
            size="sm"
            iconName="FileText"
            iconPosition="left"
          >
            View All
          </Button>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {billingData?.recentInvoices?.map((invoice) => (
            <div
              key={invoice?.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-sm transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Icon name="Receipt" size={16} className="text-accent" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-text-primary">
                    Invoice #{invoice?.number}
                  </h5>
                  <p className="text-xs text-text-secondary">
                    {invoice?.description} • {invoice?.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-semibold text-text-primary">
                    {formatCurrency(invoice?.amount, invoice?.currency)}
                  </p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice?.status)}`}>
                    {invoice?.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewInvoice(invoice)}
                    iconName="Eye"
                  />
                  {invoice?.status?.toLowerCase() === 'pending' && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => onMakePayment(invoice)}
                      iconName="CreditCard"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Payment Methods */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-md font-semibold text-text-primary">Payment Methods</h4>
          <Button
            variant="outline"
            size="sm"
            iconName="Plus"
            iconPosition="left"
          >
            Add Method
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {billingData?.paymentMethods?.map((method) => (
            <div
              key={method?.id}
              className="flex items-center space-x-3 p-3 border border-border rounded-lg"
            >
              <div className="p-2 bg-muted rounded-lg">
                <Icon name={method?.type === 'card' ? 'CreditCard' : 'Building'} size={16} className="text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary">{method?.name}</p>
                <p className="text-xs text-text-secondary">{method?.details}</p>
              </div>
              {method?.isDefault && (
                <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                  Default
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingOverview;