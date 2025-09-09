import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy, onViewDetails }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Header Image/Video */}
      <div className="relative h-48 overflow-hidden">
        {!isVideoPlaying ? (
          <>
            <Image
              src={caseStudy?.image}
              alt={caseStudy?.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <button
              onClick={handleVideoPlay}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                <Icon name="Play" size={24} color="#0A0E27" />
              </div>
            </button>
          </>
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-white text-center">
              <Icon name="Play" size={48} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm opacity-75">Video Player Placeholder</p>
            </div>
          </div>
        )}
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
            <Icon name={caseStudy?.industryIcon} size={14} />
            <span>{caseStudy?.industry}</span>
          </span>
        </div>

        {/* Premium Badge */}
        {caseStudy?.isPremium && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center space-x-1 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
              <Icon name="Crown" size={14} />
              <span>Premium</span>
            </span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
              {caseStudy?.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {caseStudy?.description}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {caseStudy?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {metric?.value}
              </div>
              <div className="text-xs text-gray-500 leading-tight">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} color="#6B7280" />
            <span className="text-sm text-gray-600">Implementation</span>
          </div>
          <span className="text-sm font-medium text-primary">
            {caseStudy?.timeline}
          </span>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {caseStudy?.technologies?.slice(0, 3)?.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {caseStudy?.technologies?.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                +{caseStudy?.technologies?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {caseStudy?.client?.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-medium text-primary text-sm">
                {caseStudy?.client}
              </div>
              <div className="text-xs text-gray-500">
                {caseStudy?.location}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < caseStudy?.rating ? 'fill-current' : 'opacity-30'}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant="default"
            size="sm"
            fullWidth
            onClick={() => onViewDetails(caseStudy)}
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-shrink-0"
            iconName="Download"
          >
            PDF
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-shrink-0"
            iconName="Share"
          >
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;