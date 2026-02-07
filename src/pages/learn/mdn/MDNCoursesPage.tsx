import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Clock, Users, Star, BookOpen, ChevronDown, ChevronRight, SlidersHorizontal } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';
import { mdnSubjects, mdnCourses } from '@/data/mdnData';

/** Illustration header for course cards */
function CourseCardImage({ course, subject }: { course: typeof mdnCourses[0]; subject?: typeof mdnSubjects[0] }) {
  const from = subject?.gradientFrom || '#1a73e8';
  const to = subject?.gradientTo || '#4f93f0';
  return (
    <div
      className="relative h-36 overflow-hidden rounded-t-3xl"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-15" style={{ background: 'white' }} />
      <div className="absolute -left-4 -bottom-6 w-20 h-20 rounded-full opacity-10" style={{ background: 'white' }} />
      <div className="absolute right-8 bottom-3 w-14 h-14 rounded-2xl rotate-12 opacity-10" style={{ background: 'white' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-white/90 text-[56px]">{course.cardIcon}</span>
      </div>
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${
          course.level === 'Beginner' ? 'bg-green-500/80 text-white' :
          course.level === 'Intermediate' ? 'bg-amber-500/80 text-white' :
          'bg-red-500/80 text-white'
        }`}>
          {course.level}
        </span>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-0.5">
        <Star className="w-3 h-3 text-amber-400" />
        <span className="text-xs font-medium text-white">{course.rating}</span>
      </div>
    </div>
  );
}

export default function MDNCoursesPage() {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || null;
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(initialSubject);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'newest'>('popular');
  const [expandedSubject, setExpandedSubject] = useState<string | null>(initialSubject);

  // Sync state when URL search params change (e.g. mega menu subject links)
  useEffect(() => {
    const paramSubject = searchParams.get('subject') || null;
    const paramQuery = searchParams.get('q') || '';
    setSelectedSubject(paramSubject);
    setSearchQuery(paramQuery);
    setExpandedSubject(paramSubject);
  }, [searchParams]);

  const filteredCourses = useMemo(() => {
    let results = [...mdnCourses];

    if (selectedSubject) {
      results = results.filter((c) => c.subject === selectedSubject);
    }
    if (selectedLevel) {
      results = results.filter((c) => c.level === selectedLevel);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
      case 'popular':
        results.sort((a, b) => b.enrolled - a.enrolled);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        results.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
    }

    return results;
  }, [selectedSubject, selectedLevel, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedSubject(null);
    setSelectedLevel(null);
    setExpandedSubject(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className="border-b border-border/50 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-[1600px] mx-auto px-6 py-16 text-center">
            <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Course Catalog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Explore All Courses</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {mdnCourses.length} courses across {mdnSubjects.length} subjects. Find your next learning adventure.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses by title, topic, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#1a73e8]/50 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Mobile subject pills */}
        <div className="lg:hidden overflow-x-auto border-b border-border/50">
          <div className="flex gap-2 px-4 py-3 min-w-max">
            <button
              onClick={clearFilters}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                !selectedSubject ? 'bg-[#1a73e8] text-white' : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              All Courses
            </button>
            {mdnSubjects.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSelectedSubject(selectedSubject === s.slug ? null : s.slug)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedSubject === s.slug ? 'bg-[#1a73e8] text-white' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-[1600px] mx-auto px-6 py-10 flex gap-10">
          {/* Sidebar - desktop only */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Subjects</h3>

              <button
                onClick={clearFilters}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium mb-1 transition-colors ${
                  !selectedSubject ? 'text-[#1a73e8] font-semibold bg-[#1a73e8]/5' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <BookOpen className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                All Courses
              </button>

              <div className="space-y-0.5">
                {mdnSubjects.map((subject) => (
                  <div key={subject.slug}>
                    <button
                      onClick={() => {
                        if (selectedSubject === subject.slug) {
                          setSelectedSubject(null);
                          setExpandedSubject(null);
                        } else {
                          setSelectedSubject(subject.slug);
                          setExpandedSubject(subject.slug);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedSubject === subject.slug
                          ? 'text-[#1a73e8] font-semibold bg-[#1a73e8]/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full`} style={{ background: subject.colorHex }} />
                        {subject.name}
                      </span>
                      {expandedSubject === subject.slug ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Level Filter */}
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-8 mb-4">Level</h3>
              <div className="space-y-1">
                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedLevel === level
                        ? 'text-[#1a73e8] font-semibold bg-[#1a73e8]/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                {selectedSubject && (
                  <> in <strong className="text-foreground">{mdnSubjects.find((s) => s.slug === selectedSubject)?.name}</strong></>
                )}
              </p>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-sm bg-transparent text-muted-foreground border-none outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                <p className="text-muted-foreground text-sm">Try adjusting your search or filters.</p>
                <button onClick={clearFilters} className="mt-4 text-[#1a73e8] text-sm font-medium hover:underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const subject = mdnSubjects.find((s) => s.slug === course.subject);
                  return (
                    <Link
                      key={course.id}
                      to={`/learn/mdn/courses/${course.slug}`}
                      className="group rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-transparent transition-all overflow-hidden"
                    >
                      <CourseCardImage course={course} subject={subject} />
                      <div className="p-5">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: subject?.colorHex || '#1a73e8' }} />
                          <span className="text-xs font-medium text-muted-foreground">{subject?.name}</span>
                        </div>
                        <h3 className="text-[15px] font-medium text-foreground group-hover:text-[#1a73e8] transition-colors line-clamp-2 mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.description}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                          <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {course.lessons} lessons</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {(course.enrolled / 1000).toFixed(1)}k</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {course.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
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
