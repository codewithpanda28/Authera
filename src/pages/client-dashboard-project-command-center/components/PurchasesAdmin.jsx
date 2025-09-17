import React, { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PurchasesAdmin = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPurchases = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/purchases');
      const raw = await res.json();
      const data = (raw || []).map(x => ({
        id: x.id,
        userName: x.user_name || x.userName,
        userEmail: x.user_email || x.userEmail,
        projectId: x.project_id || x.projectId,
        projectTitle: x.project_title || x.projectTitle,
        message: x.message,
        status: x.status,
        createdAt: x.createdAt || x.created_at || x.created || new Date().toISOString()
      }));
      setPurchases(data);
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadPurchases(); }, []);

  const reply = async (p) => {
    const subject = `Regarding your purchase inquiry: ${p.projectTitle}`;
    const message = `Hi ${p.userName},\n\nThanks for your interest in ${p.projectTitle}.\n\nDetails you sent:\n${p.message || 'N/A'}\n\n— Team`;
    try {
      await fetch('/api/email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ to: p.userEmail, subject, message }) });
      alert('Reply sent');
    } catch (e) {
      alert('Failed to send reply');
    }
  };

  if (loading) return <div className="text-text-secondary">Loading purchases...</div>;

  return (
    <div className="space-y-3">
      {purchases.length === 0 && <div className="text-text-secondary">No purchases yet.</div>}
      {purchases.map((p) => (
        <div key={p.id} className="bg-white border border-gray-100 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-primary">{p.projectTitle}</div>
              <div className="text-xs text-text-secondary">{p.userName} &lt;{p.userEmail}&gt; • {new Date(p.createdAt).toLocaleString()}</div>
              <div className="mt-2 text-text-primary whitespace-pre-wrap">{p.message}</div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" onClick={() => reply(p)}>
                <Icon name="Mail" size={14} className="mr-2" /> Reply
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchasesAdmin;


