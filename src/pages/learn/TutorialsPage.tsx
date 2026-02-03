import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronRight, Clock, User, BookOpen } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';
import { tutorialCategories } from '@/data/tutorialsData';
import { useTutorials } from '@/context/TutorialContext';

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
  Intermediate: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  Advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
};

export default function TutorialsPage() {
  const { publishedTutorials } = useTutorials();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredTutorials = useMemo(() => {
    let results = publishedTutorials;

    if (selectedCategory) {
      results = results.filter((t) => t.category === selectedCategory);
    }
    if (selectedSubcategory) {
      results = results.filter((t) => t.subcategory === selectedSubcategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.excerpt.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return results;
  }, [publishedTutorials, selectedCategory, selectedSubcategory, searchQuery]);

  const handleCategoryClick = (slug: string) => {
    if (selectedCategory === slug) {
      setSelectedCategory(null);
      setExpandedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(slug);
      setExpandedCategory(slug);
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategoryClick = (slug: string) => {
    setSelectedSubcategory(selectedSubcategory === slug ? null : slug);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setExpandedCategory(null);
    setSearchQuery('');
  };

  const getCategoryName = (slug: string) =>
    tutorialCategories.find((c) => c.slug === slug)?.name ?? slug;

  const getSubcategoryName = (catSlug: string, subSlug: string) => {
    const cat = tutorialCategories.find((c) => c.slug === catSlug);
    return cat?.subcategories.find((s) => s.slug === subSlug)?.name ?? subSlug;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border/50 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-[1600px] mx-auto px-6 py-16 text-center">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              Tutorials
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Learn Technology Step by Step
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our comprehensive library of tutorials across every technology stack.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tutorials by title, topic, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Mobile category pills */}
        <div className="lg:hidden overflow-x-auto border-b border-border/50">
          <div className="flex gap-2 px-4 py-3 min-w-max">
            <button
              onClick={clearFilters}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                !selectedCategory
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              All Tutorials
            </button>
            {tutorialCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-accent text-white'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-[1600px] mx-auto px-6 py-10 flex gap-10">
          {/* Sidebar - desktop only */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Categories
              </h3>

              <button
                onClick={clearFilters}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium mb-1 transition-colors ${
                  !selectedCategory
                    ? 'text-accent font-semibold bg-accent/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <BookOpen className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                All Tutorials
              </button>

              <div className="space-y-0.5">
                {tutorialCategories.map((cat) => (
                  <div key={cat.slug}>
                    <button
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.slug
                          ? 'text-accent font-semibold bg-accent/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      <span>{cat.name}</span>
                      {expandedCategory === cat.slug ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>

                    {expandedCategory === cat.slug && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub.slug}
                            onClick={() => handleSubcategoryClick(sub.slug)}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              selectedSubcategory === sub.slug
                                ? 'text-accent font-semibold bg-accent/5'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                            }`}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Content grid */}
          <section className="flex-1 min-w-0">
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredTutorials.length} tutorial
              {filteredTutorials.length !== 1 ? 's' : ''}
            </p>

            {filteredTutorials.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No tutorials found</h3>
                <p className="text-muted-foreground text-sm">
                  Try adjusting your search or filter to find what you are looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-accent text-sm font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTutorials.map((tutorial) => (
                  <article
                    key={tutorial.id}
                    className="rounded-2xl border border-border/50 p-6 bg-card hover:border-accent/30 transition-colors"
                  >
                    {/* Category badges */}
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {getCategoryName(tutorial.category)}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {getSubcategoryName(tutorial.category, tutorial.subcategory)}
                      </span>
                    </div>

                    {/* Title */}
                    <Link
                      to={`/learn/tutorials/${tutorial.slug}`}
                      className="text-lg font-semibold text-foreground hover:text-accent transition-colors line-clamp-2"
                    >
                      {tutorial.title}
                    </Link>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {tutorial.excerpt}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-muted-foreground">
                      <span
                        className={`px-2 py-0.5 rounded-full border text-xs font-medium ${
                          difficultyColors[tutorial.difficulty]
                        }`}
                      >
                        {tutorial.difficulty}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {tutorial.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {tutorial.author}
                      </span>
                      <span>{tutorial.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
