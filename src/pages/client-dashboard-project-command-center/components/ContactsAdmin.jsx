import React, { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactsAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyingId, setReplyingId] = useState(null);
  const [reply, setReply] = useState({ subject: '', message: '' });

  const loadContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contacts');
      const data = await res.json();
      setContacts(data);
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadContacts(); }, []);

  const toggleRead = async (id, status) => {
    const next = status === 'read' ? 'unread' : 'read';
    await fetch(`/api/contacts/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: next }) });
    loadContacts();
  };

  const sendReply = async (id) => {
    if (!reply.message) return;
    await fetch(`/api/contacts/${id}/reply`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(reply) });
    setReplyingId(null);
    setReply({ subject: '', message: '' });
    loadContacts();
  };

  if (loading) return <div className="text-text-secondary">Loading contacts...</div>;

  return (
    <div className="space-y-4">
      {contacts.length === 0 && (
        <div className="text-text-secondary">No contact submissions yet.</div>
      )}
      {contacts.map((c) => (
        <div key={c.id} className="border border-gray-100 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-primary">{c.name} <span className="text-text-secondary font-normal">&lt;{c.email}&gt;</span></div>
              <div className="text-xs text-text-secondary">{new Date(c.createdAt).toLocaleString()} • Status: <span className="capitalize">{c.status}</span></div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={() => toggleRead(c.id, c.status)}>
                <Icon name={c.status === 'read' ? 'EyeOff' : 'Eye'} size={14} className="mr-2" />
                {c.status === 'read' ? 'Mark Unread' : 'Mark Read'}
              </Button>
              <Button size="sm" onClick={() => setReplyingId(replyingId === c.id ? null : c.id)}>
                <Icon name="Mail" size={14} className="mr-2" /> Reply
              </Button>
            </div>
          </div>
          <div className="mt-3 text-text-primary whitespace-pre-wrap">{c.message}</div>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-text-secondary">
            {c.phone && <div>Phone: {c.phone}</div>}
            {c.company && <div>Company: {c.company}</div>}
            {c.subject && <div>Subject: {c.subject}</div>}
            {c.serviceType && <div>Service: {c.serviceType}</div>}
            {c.priority && <div>Priority: {c.priority}</div>}
            {c.preferredContact && <div>Pref: {c.preferredContact}</div>}
            <div>Newsletter: {c.newsletter ? 'Yes' : 'No'}</div>
          </div>
          {replyingId === c.id && (
            <div className="mt-4 border-t pt-4">
              <input
                className="w-full mb-2 px-3 py-2 border rounded"
                placeholder="Subject"
                value={reply.subject}
                onChange={(e) => setReply((r) => ({ ...r, subject: e.target.value }))}
              />
              <textarea
                className="w-full mb-2 px-3 py-2 border rounded"
                rows={4}
                placeholder="Message"
                value={reply.message}
                onChange={(e) => setReply((r) => ({ ...r, message: e.target.value }))}
              />
              <Button size="sm" onClick={() => sendReply(c.id)}>
                <Icon name="Send" size={14} className="mr-2" /> Send Reply
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactsAdmin;


