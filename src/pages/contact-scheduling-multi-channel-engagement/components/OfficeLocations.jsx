import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState('bangalore');

  const locations = [
    {
      id: 'bangalore',
      name: 'Bangalore (Headquarters)',
      type: 'Main Development Center',
      address: '123 Tech Park, Electronic City Phase 1, Bangalore, Karnataka 560100',
      phone: '+91 80 4567 8900',
      email: 'bangalore@aiautomationhub.com',
      hours: {
        weekdays: '9:00 AM - 7:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed'
      },
      coordinates: { lat: 12.8456, lng: 77.6603 },
      features: ['24/7 Security', 'Client Meeting Rooms', 'Virtual Tour Available', 'Parking Available'],
      team: '50+ Developers',
      specialties: ['AI Development', 'Data Analytics', 'Custom Solutions'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      id: 'mumbai',
      name: 'Mumbai Office',
      type: 'Client Relations Hub',
      address: '456 Business Center, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      phone: '+91 22 6789 0123',
      email: 'mumbai@aiautomationhub.com',
      hours: {
        weekdays: '9:30 AM - 6:30 PM',
        saturday: '10:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      coordinates: { lat: 19.0596, lng: 72.8295 },
      features: ['Client Consultation Rooms', 'Demo Center', 'Metro Connectivity'],
      team: '15+ Consultants',
      specialties: ['Business Consulting', 'Client Relations', 'Sales Support'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      id: 'delhi',
      name: 'Delhi NCR Office',
      type: 'Regional Operations',
      address: '789 Corporate Tower, Sector 62, Noida, Uttar Pradesh 201309',
      phone: '+91 120 456 7890',
      email: 'delhi@aiautomationhub.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: 'By Appointment',
        sunday: 'Closed'
      },
      coordinates: { lat: 28.6139, lng: 77.2090 },
      features: ['Government Relations', 'Enterprise Clients', 'Training Center'],
      team: '20+ Specialists',
      specialties: ['Enterprise Solutions', 'Government Projects', 'Training'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    }
  ];

  const currentLocation = locations?.find(loc => loc?.id === selectedLocation);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} className="text-secondary" />
            </div>
            <span className="text-secondary font-medium">Our Locations</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Visit Our Offices
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We have strategically located offices across India to serve our clients better. Schedule a visit or take a virtual tour of our facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {locations?.map((location) => (
                <div
                  key={location?.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLocation === location?.id
                      ? 'bg-white border-2 border-accent shadow-lg'
                      : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedLocation(location?.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedLocation === location?.id ? 'bg-accent/10' : 'bg-gray-100'
                    }`}>
                      <Icon 
                        name="Building" 
                        size={20} 
                        className={selectedLocation === location?.id ? 'text-accent' : 'text-text-secondary'} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">{location?.name}</h3>
                      <p className="text-sm text-text-secondary mb-2">{location?.type}</p>
                      <div className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Users" size={14} />
                        <span>{location?.team}</span>
                      </div>
                    </div>
                    {selectedLocation === location?.id && (
                      <Icon name="Check" size={20} className="text-accent" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Location Image */}
              <div className="relative h-64 bg-gray-200">
                <img
                  src={currentLocation?.image}
                  alt={currentLocation?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-white/90 text-primary hover:bg-white"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Virtual Tour
                  </Button>
                </div>
              </div>

              {/* Location Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{currentLocation?.name}</h3>
                    <p className="text-accent font-medium">{currentLocation?.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary mb-1">Team Size</div>
                    <div className="font-semibold text-primary">{currentLocation?.team}</div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>Address</span>
                    </h4>
                    <p className="text-text-secondary">{currentLocation?.address}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>Business Hours</span>
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Mon - Fri:</span>
                        <span className="text-primary">{currentLocation?.hours?.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Saturday:</span>
                        <span className="text-primary">{currentLocation?.hours?.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Sunday:</span>
                        <span className="text-primary">{currentLocation?.hours?.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <Icon name="Phone" size={20} className="text-accent" />
                    <div>
                      <div className="text-sm text-text-secondary">Phone</div>
                      <div className="font-medium text-primary">{currentLocation?.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <Icon name="Mail" size={20} className="text-accent" />
                    <div>
                      <div className="text-sm text-text-secondary">Email</div>
                      <div className="font-medium text-primary">{currentLocation?.email}</div>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentLocation?.specialties?.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Facilities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentLocation?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Location Map</h4>
                  <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={currentLocation?.name}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${currentLocation?.coordinates?.lat},${currentLocation?.coordinates?.lng}&z=14&output=embed`}
                    ></iframe>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    className="bg-accent hover:bg-accent/90"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Schedule Visit
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    iconName="Navigation"
                    iconPosition="left"
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Call Office
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;