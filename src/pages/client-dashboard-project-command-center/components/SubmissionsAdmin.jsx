import React, { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SubmissionsAdmin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const load = async () => {
    setLoading(true);
    try {
      const [sRes, cRes, pRes] = await Promise.all([
        fetch('/api/submissions'),
        fetch('/api/contacts'),
        fetch('/api/purchases')
      ]);
      const [sData, cData, pData] = await Promise.all([
        sRes.json(),
        cRes.json(),
        pRes.json()
      ]);
      const contactsAsSubs = (cData || []).map(c => ({
        id: c._id || c.id,
        type: 'contact',
        name: c.name,
        email: c.email,
        phone: c.phone,
        payload: c,
        createdAt: c.createdAt
      }));
      const purchasesAsSubs = (pData || []).map(p => ({
        id: p._id || p.id,
        type: 'purchase',
        name: p.userName,
        email: p.userEmail,
        phone: undefined,
        payload: p,
        createdAt: p.createdAt
      }));
      const merged = [...(sData || []), ...contactsAsSubs, ...purchasesAsSubs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setSubmissions(merged);
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const items = submissions.filter(s => filter === 'all' ? true : s.type === filter);

  if (loading) return <div className="text-text-secondary">Loading submissions...</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {['all', 'contact', 'purchase', 'consultations', 'quotes', 'proposals'].map(f => (
          <Button key={f} size="sm" variant={filter === f ? 'default' : 'outline'} onClick={() => setFilter(f)}>
            {f[0].toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>
      {items.length === 0 && <div className="text-text-secondary">No submissions.</div>}
      {items.map((s) => (
        <div key={s.id} className="bg-white border border-gray-100 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent capitalize">
                  {s.type}
                </span>
                <span className="text-sm text-text-secondary">
                  {new Date(s.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="font-semibold text-primary mb-1">
                {s.name || 'Anonymous User'}
              </div>
              <div className="text-sm text-text-secondary">
                {s.email || 'No email provided'}
                {s.phone && ` • ${s.phone}`}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                iconName="Mail"
                onClick={() => {
                  if (s.email) {
                    const subject = s.type === 'contact' ? `Re: ${s.payload.subject || 'Your Inquiry'}` : `Re: ${s.type} Submission`;
                    const mailtoUrl = `mailto:${s.email}?subject=${encodeURIComponent(subject)}`;
                    window.open(mailtoUrl, '_self');
                  } else {
                    alert('No email address available for this submission');
                  }
                }}
              >
                Reply
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                iconName="Eye"
                onClick={() => {
                  // Create a modal or detailed view
                  const details = {
                    type: s.type,
                    name: s.name || 'Anonymous User',
                    email: s.email || 'No email provided',
                    phone: s.phone || 'No phone provided',
                    timestamp: new Date(s.createdAt).toLocaleString(),
                    payload: s.payload
                  };
                  
                  // Show detailed view in a modal-like format
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4';
                  modal.innerHTML = `
                    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                      <div class="p-6 border-b border-gray-200">
                        <div class="flex items-center justify-between">
                          <h3 class="text-lg font-semibold text-primary">Submission Details</h3>
                          <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="p-6 space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                          <div>
                            <span class="font-medium text-primary">Type:</span>
                            <span class="ml-2 text-gray-700 capitalize">${details.type}</span>
                          </div>
                          <div>
                            <span class="font-medium text-primary">Date:</span>
                            <span class="ml-2 text-gray-700">${details.timestamp}</span>
                          </div>
                          <div>
                            <span class="font-medium text-primary">Name:</span>
                            <span class="ml-2 text-gray-700">${details.name}</span>
                          </div>
                          <div>
                            <span class="font-medium text-primary">Email:</span>
                            <span class="ml-2 text-gray-700">${details.email}</span>
                          </div>
                          <div>
                            <span class="font-medium text-primary">Phone:</span>
                            <span class="ml-2 text-gray-700">${details.phone}</span>
                          </div>
                        </div>
                        <div class="border-t pt-4">
                          <span class="font-medium text-primary">Full Details:</span>
                          <pre class="mt-2 p-4 bg-gray-50 rounded-lg text-sm overflow-x-auto">${JSON.stringify(details.payload, null, 2)}</pre>
                        </div>
                      </div>
                      <div class="p-6 border-t border-gray-200 flex justify-end space-x-3">
                        <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 text-gray-600 hover:text-gray-800">Close</button>
                        ${details.email ? `<a href="mailto:${details.email}?subject=Re: ${details.type} Submission" class="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90">Reply via Email</a>` : ''}
                      </div>
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
              >
                View
              </Button>
            </div>
          </div>
          
          {/* Clean formatted content based on type */}
          <div className="bg-gray-50 rounded-lg p-4">
            {s.type === 'contact' && (
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Subject:</span>
                  <span className="ml-2 text-gray-700">{s.payload.subject || 'No subject'}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Service Type:</span>
                  <span className="ml-2 text-gray-700">{s.payload.service_type || 'Not specified'}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Priority:</span>
                  <span className="ml-2 text-gray-700 capitalize">{s.payload.priority || 'Medium'}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Company:</span>
                  <span className="ml-2 text-gray-700">{s.payload.company || 'Not provided'}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Message:</span>
                  <p className="mt-1 text-gray-700 text-sm leading-relaxed">{s.payload.message}</p>
                </div>
              </div>
            )}
            
            {s.type === 'purchase' && (
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Project:</span>
                  <span className="ml-2 text-gray-700">{s.payload.project_title}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Project ID:</span>
                  <span className="ml-2 text-gray-700">{s.payload.project_id}</span>
                </div>
                <div>
                  <span className="font-medium text-primary">Status:</span>
                  <span className="ml-2 text-gray-700 capitalize">{s.payload.status || 'New'}</span>
                </div>
                {s.payload.message && (
                  <div>
                    <span className="font-medium text-primary">Message:</span>
                    <p className="mt-1 text-gray-700 text-sm leading-relaxed">{s.payload.message}</p>
                  </div>
                )}
              </div>
            )}
            
            {s.type === 'consultations' && (
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Type:</span>
                  <span className="ml-2 text-gray-700">{s.payload.type || 'Consultation'}</span>
                </div>
                {s.payload.preferredDate && (
                  <div>
                    <span className="font-medium text-primary">Preferred Date:</span>
                    <span className="ml-2 text-gray-700">{s.payload.preferredDate}</span>
                  </div>
                )}
                {s.payload.message && (
                  <div>
                    <span className="font-medium text-primary">Message:</span>
                    <p className="mt-1 text-gray-700 text-sm leading-relaxed">{s.payload.message}</p>
                  </div>
                )}
              </div>
            )}
            
            {s.type === 'quotes' && (
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Type:</span>
                  <span className="ml-2 text-gray-700">{s.payload.type || 'Quote Request'}</span>
                </div>
                {s.payload.totals && (
                  <div>
                    <span className="font-medium text-primary">Budget:</span>
                    <span className="ml-2 text-gray-700">
                      {s.payload.currency === 'inr' ? '₹' : '$'}{s.payload.totals.setup?.toLocaleString() || 'N/A'} setup + {s.payload.currency === 'inr' ? '₹' : '$'}{s.payload.totals.monthly?.toLocaleString() || 'N/A'}/month
                    </span>
                  </div>
                )}
                {s.payload.modules && s.payload.modules.length > 0 && (
                  <div>
                    <span className="font-medium text-primary">Modules:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {s.payload.modules.map((module, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {s.type === 'proposals' && (
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-primary">Type:</span>
                  <span className="ml-2 text-gray-700">{s.payload.type || 'Proposal Request'}</span>
                </div>
                {s.payload.message && (
                  <div>
                    <span className="font-medium text-primary">Message:</span>
                    <p className="mt-1 text-gray-700 text-sm leading-relaxed">{s.payload.message}</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Fallback for unknown types */}
            {!['contact', 'purchase', 'consultations', 'quotes', 'proposals'].includes(s.type) && (
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-primary">Type:</span>
                  <span className="ml-2 text-gray-700 capitalize">{s.type}</span>
                </div>
                {s.payload && Object.keys(s.payload).length > 0 && (
                  <div>
                    <span className="font-medium text-primary">Details:</span>
                    <div className="mt-1 text-gray-700 text-sm">
                      {Object.entries(s.payload).map(([key, value]) => (
                        <div key={key} className="flex">
                          <span className="font-medium w-24">{key}:</span>
                          <span className="ml-2">{typeof value === 'object' ? JSON.stringify(value) : String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmissionsAdmin;


