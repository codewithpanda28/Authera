import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceDetailsModal = ({ service, onClose, onBook, onCalculate }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden m-4">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h3 className="text-xl font-bold text-primary">{service?.title}</h3>
            <p className="text-text-secondary text-sm">Timeline: {service?.timeline} • Savings: {service?.savings} • Starting: {service?.priceRange}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <Icon name="X" size={18} />
          </Button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto">
          <Image src={service?.image} alt={service?.title} className="w-full h-64 object-cover" />

          <div className="p-6 space-y-8">
            <div>
              <h4 className="font-semibold text-primary mb-2">Overview</h4>
              <p className="text-text-secondary">{service?.description}</p>
            </div>

            {service?.howItWorks && (
              <div>
                <h4 className="font-semibold text-primary mb-3">How it works</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {service?.howItWorks?.map((s) => (
                    <div key={s?.step} className="p-4 rounded-xl border bg-muted/30">
                      <div className="flex items-center mb-2">
                        <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center mr-2 text-xs font-bold">{s?.step}</div>
                        <div className="font-medium text-primary">{s?.title}</div>
                      </div>
                      <div className="text-sm text-text-secondary">{s?.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service?.features && (
              <div>
                <h4 className="font-semibold text-primary mb-3">What's included</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {service?.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start text-sm text-text-secondary">
                      <Icon name="Check" size={14} className="text-success mr-2 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(service?.documents?.length || 0) > 0 && (
              <div>
                <h4 className="font-semibold text-primary mb-3">Documents</h4>
                <div className="flex flex-wrap gap-3">
                  {service?.documents?.map((d, idx) => (
                    <a key={idx} href={d?.url} download target="_blank" rel="noreferrer" className="no-underline">
                      <Button variant="outline" size="sm" iconName={d?.type?.toLowerCase() === 'ppt' ? 'Presentation' : 'FileText'}>
                        {d?.label}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {service?.contact && (
              <div className="p-4 rounded-xl border bg-muted/20">
                <h4 className="font-semibold text-primary mb-2">Contact</h4>
                <div className="text-sm text-text-secondary">{service?.contact?.name}</div>
                <div className="text-sm text-text-secondary">{service?.contact?.email}</div>
                <div className="text-sm text-text-secondary">{service?.contact?.phone}</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end p-4 border-t">
          <Button variant="outline" onClick={onCalculate} iconName="Calculator">Calculate ROI</Button>
          <Button variant="default" onClick={onBook} iconName="Calendar">Book Consultation</Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsModal;



