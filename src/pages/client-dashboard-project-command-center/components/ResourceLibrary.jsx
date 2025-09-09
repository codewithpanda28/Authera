import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibrary = ({ resources, onDownload, onView }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getResourceIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'pdf':
        return 'FileText';
      case 'video':
        return 'Play';
      case 'document':
        return 'File';
      case 'presentation':
        return 'Presentation';
      case 'spreadsheet':
        return 'Sheet';
      case 'guide':
        return 'BookOpen';
      default:
        return 'File';
    }
  };

  const getResourceColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'pdf':
        return 'text-error bg-error/10';
      case 'video':
        return 'text-secondary bg-secondary/10';
      case 'document':
        return 'text-accent bg-accent/10';
      case 'presentation':
        return 'text-warning bg-warning/10';
      case 'spreadsheet':
        return 'text-success bg-success/10';
      case 'guide':
        return 'text-primary bg-primary/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const categories = [
    { value: 'all', label: 'All Resources', count: resources?.length },
    { value: 'training', label: 'Training', count: resources?.filter(r => r?.category === 'training')?.length },
    { value: 'documentation', label: 'Documentation', count: resources?.filter(r => r?.category === 'documentation')?.length },
    { value: 'guides', label: 'Best Practices', count: resources?.filter(r => r?.category === 'guides')?.length },
    { value: 'templates', label: 'Templates', count: resources?.filter(r => r?.category === 'templates')?.length }
  ];

  const filteredResources = resources?.filter(resource => {
    const matchesFilter = filter === 'all' || resource?.category === filter;
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Resource Library</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Upload"
          iconPosition="left"
        >
          Request Resource
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {categories?.map((category) => (
            <button
              key={category?.value}
              onClick={() => setFilter(category?.value)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                filter === category?.value
                  ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              <span>{category?.label}</span>
              <span className="bg-current/20 text-current px-2 py-0.5 rounded-full text-xs">
                {category?.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {filteredResources?.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <Icon name="FolderOpen" size={48} className="text-text-secondary mx-auto mb-4" />
            <p className="text-text-secondary">No resources found matching your criteria.</p>
          </div>
        ) : (
          filteredResources?.map((resource) => (
            <div
              key={resource?.id}
              className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${getResourceColor(resource?.type)}`}>
                  <Icon name={getResourceIcon(resource?.type)} size={20} />
                </div>
                <div className="flex items-center space-x-1">
                  {resource?.isNew && (
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {resource?.isPremium && (
                    <Icon name="Crown" size={16} className="text-warning" />
                  )}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold text-text-primary line-clamp-2">
                  {resource?.title}
                </h4>
                <p className="text-xs text-text-secondary line-clamp-2">
                  {resource?.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>{formatFileSize(resource?.size)}</span>
                  <span>{resource?.lastUpdated}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onView(resource)}
                  iconName="Eye"
                  iconPosition="left"
                  className="flex-1"
                >
                  View
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => onDownload(resource)}
                  iconName="Download"
                  iconPosition="left"
                  className="flex-1"
                >
                  Download
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResourceLibrary;