import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Send, Trash2 } from 'lucide-react';
import { useTutorials } from '@/context/TutorialContext';
import { tutorialCategories } from '@/data/tutorialsData';
import { toast } from 'sonner';

const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

const AdminTutorialEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTutorialById, addTutorial, updateTutorial, deleteTutorial } = useTutorials();

  const isEditing = Boolean(id);
  const existing = id ? getTutorialById(id) : undefined;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [difficulty, setDifficulty] = useState('Beginner');
  const [tags, setTags] = useState('');
  const [author, setAuthor] = useState('');
  const [readTime, setReadTime] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');

  useEffect(() => {
    if (isEditing && !existing) {
      navigate('/admin/tutorials');
      return;
    }
    if (existing) {
      setTitle(existing.title);
      setContent(existing.content || '');
      setCategory(existing.category);
      setSubcategory(existing.subcategory || '');
      setDifficulty(existing.difficulty);
      setTags(existing.tags?.join(', ') || '');
      setAuthor(existing.author);
      setReadTime(existing.readTime);
      setStatus(existing.status as 'draft' | 'published');
    }
  }, [isEditing, existing, navigate]);

  const selectedCategory = tutorialCategories.find((c) => c.name === category);
  const subcategories = selectedCategory?.subcategories || [];

  const generateSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const handleSave = (saveStatus: 'draft' | 'published') => {
    if (!title.trim()) {
      toast.error('Please enter a title');
      return;
    }

    const slug = generateSlug(title);
    const parsedTags = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const tutorialData = {
      title,
      slug,
      content,
      category,
      subcategory,
      difficulty,
      tags: parsedTags,
      author: author || 'Admin',
      readTime: readTime || '5 min read',
      status: saveStatus,
      date: isEditing && existing ? existing.date : new Date().toISOString().split('T')[0],
    };

    if (isEditing && existing) {
      updateTutorial({ ...existing, ...tutorialData });
    } else {
      addTutorial(tutorialData as any);
    }

    toast.success(saveStatus === 'published' ? 'Tutorial published!' : 'Draft saved!');
    navigate('/admin/tutorials');
  };

  const handleDelete = () => {
    if (!id) return;
    if (window.confirm('Are you sure you want to delete this tutorial?')) {
      deleteTutorial(id);
      toast.success('Tutorial deleted');
      navigate('/admin/tutorials');
    }
  };

  const inputClass =
    'w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50';

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/admin/tutorials')}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tutorials
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSave('draft')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save as Draft
          </button>
          <button
            onClick={() => handleSave('published')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Publish
          </button>
          {isEditing && (
            <button
              onClick={handleDelete}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 text-sm font-medium hover:bg-red-500/20 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          )}
        </div>
      </div>

      {/* Editor area */}
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter tutorial title..."
          className="text-4xl font-semibold bg-transparent border-0 outline-none w-full placeholder:text-muted-foreground/50 text-foreground mb-6"
        />

        <hr className="border-border mb-6" />

        {/* Content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your tutorial content here... (HTML supported)"
          className="bg-transparent border-0 outline-none w-full text-foreground leading-relaxed resize-none min-h-[400px] mb-6"
        />

        <hr className="border-border mb-6" />

        {/* Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubcategory('');
              }}
              className={inputClass}
            >
              <option value="">Select category</option>
              {tutorialCategories.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Subcategory</label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className={inputClass}
            >
              <option value="">Select subcategory</option>
              {subcategories.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className={inputClass}
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="react, javascript, hooks"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Reading Time</label>
            <input
              type="text"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="5 min read"
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTutorialEditor;
