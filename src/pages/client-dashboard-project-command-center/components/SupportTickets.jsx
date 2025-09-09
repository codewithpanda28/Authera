import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupportTickets = ({ tickets, onCreateTicket, onViewTicket }) => {
  const [filter, setFilter] = useState('all');

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-error/10 text-error border-error/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'in progress':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'resolved':
        return 'bg-success/10 text-success border-success/20';
      case 'closed':
        return 'bg-muted text-text-secondary border-border';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const filteredTickets = tickets?.filter(ticket => {
    if (filter === 'all') return true;
    return ticket?.status?.toLowerCase() === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Tickets', count: tickets?.length },
    { value: 'open', label: 'Open', count: tickets?.filter(t => t?.status?.toLowerCase() === 'open')?.length },
    { value: 'in progress', label: 'In Progress', count: tickets?.filter(t => t?.status?.toLowerCase() === 'in progress')?.length },
    { value: 'resolved', label: 'Resolved', count: tickets?.filter(t => t?.status?.toLowerCase() === 'resolved')?.length }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Support Tickets</h3>
        <Button
          variant="default"
          size="sm"
          onClick={onCreateTicket}
          iconName="Plus"
          iconPosition="left"
        >
          New Ticket
        </Button>
      </div>
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
        {filterOptions?.map((option) => (
          <button
            key={option?.value}
            onClick={() => setFilter(option?.value)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              filter === option?.value
                ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-secondary hover:text-text-primary hover:bg-muted'
            }`}
          >
            <span>{option?.label}</span>
            <span className="bg-current/20 text-current px-2 py-0.5 rounded-full text-xs">
              {option?.count}
            </span>
          </button>
        ))}
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredTickets?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Ticket" size={48} className="text-text-secondary mx-auto mb-4" />
            <p className="text-text-secondary">No tickets found for the selected filter.</p>
          </div>
        ) : (
          filteredTickets?.map((ticket) => (
            <div
              key={ticket?.id}
              className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 cursor-pointer"
              onClick={() => onViewTicket(ticket)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    #{ticket?.id} - {ticket?.title}
                  </h4>
                  <p className="text-xs text-text-secondary line-clamp-2">{ticket?.description}</p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket?.priority)}`}>
                    {ticket?.priority}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket?.status)}`}>
                    {ticket?.status}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center space-x-4">
                  <span>Created: {ticket?.createdDate}</span>
                  <span>Category: {ticket?.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>Response: {ticket?.responseTime}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SupportTickets;