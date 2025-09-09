import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendEmail } from './email.js';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE,
  { auth: { persistSession: false } }
);

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'development' });
});

// Visits
app.post('/api/visits/increment', async (req, res) => {
  try {
    const { data: existing } = await supabase.from('visits').select('*').limit(1).maybeSingle();
    if (!existing) {
      const { data, error } = await supabase.from('visits').insert({ count: 1 }).select().single();
      if (error) throw error;
      return res.json({ count: data.count });
    }
    const { data, error } = await supabase
      .from('visits')
      .update({ count: (existing.count || 0) + 1 })
      .eq('id', existing.id)
      .select()
      .single();
    if (error) throw error;
    res.json({ count: data.count });
  } catch {
    res.status(500).json({ error: 'Failed to increment visits' });
  }
});

app.get('/api/visits', async (req, res) => {
  try {
    const { data } = await supabase.from('visits').select('count').limit(1).maybeSingle();
    res.json({ count: data?.count || 0 });
  } catch {
    res.status(500).json({ error: 'Failed to fetch visits' });
  }
});

// Contacts
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, message, phone, subject, serviceType, priority, preferredContact, newsletter, company } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    const contactData = {
      name,
      email,
      message,
      phone: phone || null,
      subject: subject || null,
      service_type: serviceType || null,
      priority: priority || 'medium',
      preferred_contact: preferredContact || 'email',
      newsletter: newsletter || false,
      company: company || null,
      status: 'unread'
    };
    
    const { data, error } = await supabase.from('contacts').insert(contactData).select().single();
    if (error) {
      console.error('Supabase error:', error);
      return res.status(400).json({ error: 'Failed to save contact data', details: error.message });
    }
    res.json(data);
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/contacts', async (req, res) => {
  const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: 'Failed to fetch contacts' });
  res.json(data);
});

app.patch('/api/contacts/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { data, error } = await supabase.from('contacts').update(req.body).eq('id', id).select().single();
  if (error) return res.status(404).json({ error: 'Contact not found' });
  res.json(data);
});

app.post('/api/contacts/:id/reply', async (req, res) => {
  const id = Number(req.params.id);
  const { subject, message } = req.body || {};
  const { data: contact, error: selErr } = await supabase.from('contacts').select('*').eq('id', id).single();
  if (selErr || !contact) return res.status(404).json({ error: 'Contact not found' });
  try {
    await sendEmail({ to: contact.email, subject: subject || 'Re: Your Inquiry', text: message, html: `<p>${message}</p>` });
    await supabase.from('contacts').update({ status: 'replied' }).eq('id', id);
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Purchases
app.post('/api/purchases', async (req, res) => {
  try {
    const { user_name, user_email, project_id, project_title, message } = req.body;
    
    if (!user_name || !user_email || !project_id || !project_title) {
      return res.status(400).json({ error: 'User name, email, project ID, and title are required' });
    }
    
    const purchaseData = {
      user_name,
      user_email,
      project_id,
      project_title,
      message: message || null,
      status: 'new'
    };
    
    const { data, error } = await supabase.from('purchases').insert(purchaseData).select().single();
    if (error) {
      console.error('Supabase error:', error);
      return res.status(400).json({ error: 'Failed to save purchase data', details: error.message });
    }
    res.json(data);
  } catch (error) {
    console.error('Purchase submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/purchases', async (req, res) => {
  const { data, error } = await supabase.from('purchases').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: 'Failed to fetch purchases' });
  res.json(data);
});

// Generic email send
app.post('/api/email', async (req, res) => {
  const { to, subject, message } = req.body || {};
  if (!to || !subject || !message) return res.status(400).json({ error: 'to, subject, message required' });
  try {
    const info = await sendEmail({ to, subject, text: message, html: `<p>${message}</p>` });
    res.json({ ok: true, id: info?.messageId });
  } catch {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Submissions
app.post('/api/submissions', async (req, res) => {
  try {
    const { type, name, email, phone, payload } = req.body || {};
    
    if (!type || !payload) {
      return res.status(400).json({ error: 'Type and payload are required' });
    }
    
    const submissionData = {
      type,
      name: name || null,
      email: email || null,
      phone: phone || null,
      payload,
      status: 'new'
    };
    
    const { data, error } = await supabase.from('submissions').insert(submissionData).select().single();
    if (error) {
      console.error('Supabase error:', error);
      return res.status(400).json({ error: 'Failed to save submission data', details: error.message });
    }
    res.json(data);
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/submissions', async (req, res) => {
  const { data, error } = await supabase.from('submissions').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: 'Failed to fetch submissions' });
  res.json(data);
});

app.patch('/api/submissions/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { data, error } = await supabase.from('submissions').update(req.body).eq('id', id).select().single();
  if (error) return res.status(404).json({ error: 'Submission not found' });
  res.json(data);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});