import React, { useState } from 'react';
import { FaSearch, FaTimes, FaSlidersH } from 'react-icons/fa';

const ALL_CATEGORIES = ["Technology", "Health & Wellness", "Finance", "Education", "Lifestyle", "Entertainment", "Real Estate", "Travel", "Food", "Business"];
const ALL_TAGS = ["React", "TailwindCSS", "JavaScript", "NextJS", "CSS", "HTML", "NodeJS", "UI/UX", "Database", "Cloud", "Security", "AI", "Mobile", "Testing"];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('');
  const [orderBy, setOrderBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const hasActiveFilters = searchQuery || status || selectedCategory || selectedTags.length > 0 || orderBy !== 'newest';

  const handleTagChange = (e) => {
    const val = e.target.value;
    if (val && !selectedTags.includes(val)) {
      setSelectedTags([...selectedTags, val]);
    }
    e.target.value = '';
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setStatus('');
    setOrderBy('newest');
    setSelectedCategory('');
    setSelectedTags([]);
  };

  return (
    <div className="w-full py-4 bg-white rounded-xl space-y-3">
      <div className="flex flex-col lg:flex-row gap-2.5">
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <FaSearch size={13} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 shrink-0">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-amber-500"
          >
            <option value="">All Statuses</option>
            <option value="published">Published</option>
            <option value="pending">Pending</option>
            <option value="private">Private</option>
          </select>

          <select
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-amber-500"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="alphabetical">A-Z</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`px-2 py-1.5 border rounded-lg focus:outline-none focus:border-amber-500 ${selectedCategory ? 'bg-amber-50 border-amber-500 text-amber-700 font-medium' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            <option value="">Category</option>
            {ALL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <select
            onChange={handleTagChange}
            defaultValue=""
            className={`px-2 py-1.5 border rounded-lg focus:outline-none focus:border-amber-500 ${selectedTags.length > 0 ? 'bg-amber-50 border-amber-500 text-amber-700 font-medium' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
          >
            <option value="" disabled>Add Tag...</option>
            {ALL_TAGS.filter(t => !selectedTags.includes(t)).map(tag => <option key={tag} value={tag}>{tag}</option>)}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t text-[11px]">
          <div className="flex flex-wrap items-center gap-1.5 max-w-[80%]">
            <span className="flex items-center gap-1 text-slate-400 mr-1"><FaSlidersH size={10} /> Active:</span>
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('')} className="hover:text-amber-900"><FaTimes size={8} /></button>
              </span>
            )}
            {selectedTags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                #{tag}
                <button onClick={() => removeTag(tag)} className="hover:text-slate-900"><FaTimes size={8} /></button>
              </span>
            ))}
          </div>
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            Clear <FaTimes size={10} />
          </button>
        </div>
      )}
    </div>
  );
}