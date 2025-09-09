import React, { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const emptyForm = { title: '', slug: '', content: '', excerpt: '', coverImage: '', published: false };

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadBlogs(); }, []);

  const saveBlog = async () => {
    const method = editing ? 'PATCH' : 'POST';
    const url = editing ? `/api/blogs/${editing.id}` : '/api/blogs';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setEditing(null);
    setForm(emptyForm);
    loadBlogs();
  };

  const editBlog = (b) => {
    setEditing(b);
    setForm({ title: b.title, slug: b.slug, content: b.content, excerpt: b.excerpt || '', coverImage: b.coverImage || '', published: b.published });
  };

  const deleteBlog = async (id) => {
    await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
    loadBlogs();
  };

  if (loading) return <div className="text-text-secondary">Loading blogs...</div>;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-100 rounded-lg p-4">
        <div className="font-semibold text-primary mb-3">{editing ? 'Edit Blog' : 'Add Blog'}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="px-3 py-2 border rounded" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <input className="px-3 py-2 border rounded" placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <input className="px-3 py-2 border rounded" placeholder="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
          <input className="px-3 py-2 border rounded" placeholder="Cover Image URL" value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} />
          <div className="md:col-span-2">
            <textarea className="w-full px-3 py-2 border rounded" rows={6} placeholder="Content..." value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            Published
          </label>
        </div>
        <div className="mt-3">
          <Button size="sm" onClick={saveBlog}><Icon name="Save" size={14} className="mr-2" /> Save</Button>
          {editing && (
            <Button size="sm" variant="outline" className="ml-2" onClick={() => { setEditing(null); setForm(emptyForm); }}>Cancel</Button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {blogs.length === 0 && <div className="text-text-secondary">No blogs yet.</div>}
        {blogs.map((b) => (
          <div key={b.id} className="bg-white border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-primary">{b.title} {b.published ? <span className="text-xs text-success ml-2">Published</span> : <span className="text-xs text-text-secondary ml-2">Draft</span>}</div>
                <div className="text-xs text-text-secondary">/{b.slug} • {new Date(b.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => editBlog(b)}><Icon name="Edit" size={14} className="mr-2" /> Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => deleteBlog(b.id)}><Icon name="Trash" size={14} className="mr-2" /> Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsAdmin;


