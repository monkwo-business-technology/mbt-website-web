import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Map, Clock, BookOpen } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';
import { mdnSubjects, mdnRoadmaps, roadmapCardIcons } from '@/data/mdnData';

/** Illustration header for roadmap cards */
function RoadmapCardImage({ roadmap, subject }: { roadmap: typeof mdnRoadmaps[0]; subject?: typeof mdnSubjects[0] }) {
  const from = subject?.gradientFrom || '#1a73e8';
  const to = subject?.gradientTo || '#4f93f0';
  const icon = roadmapCardIcons[roadmap.slug] || 'route';
  return (
    <div
      className="relative h-40 overflow-hidden rounded-t-3xl"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-15" style={{ background: 'white' }} />
      <div className="absolute -left-6 -bottom-10 w-28 h-28 rounded-full opacity-10" style={{ background: 'white' }} />
      <div className="absolute right-12 bottom-6 w-16 h-16 rounded-2xl rotate-12 opacity-10" style={{ background: 'white' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-white/90 text-[64px]">{icon}</span>
      </div>
      {/* Difficulty pill */}
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${
          roadmap.difficulty === 'Beginner' ? 'bg-green-500/80 text-white' :
          roadmap.difficulty === 'Intermediate' ? 'bg-amber-500/80 text-white' :
          'bg-red-500/80 text-white'
        }`}>
          {roadmap.difficulty}
        </span>
      </div>
      {/* Step count pill */}
      <div className="absolute top-3 right-3">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
          {roadmap.steps.length} steps
        </span>
      </div>
    </div>
  );
}

export default function MDNRoadmapsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filteredRoadmaps = useMemo(() => {
    let results = [...mdnRoadmaps];

    if (selectedSubject) {
      results = results.filter((r) => r.subject === selectedSubject);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      );
    }

    return results;
  }, [selectedSubject, searchQuery]);

  const clearFilters = () => {
    setSelectedSubject(null);
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
            <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Learning Roadmaps</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Structured Learning Paths</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow curated roadmaps designed by experts to take you from beginner to proficient.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search roadmaps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#1a73e8]/50 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Subject pills */}
        <div className="overflow-x-auto border-b border-border/50">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex gap-2 px-6 py-3 min-w-max">
              <button
                onClick={clearFilters}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  !selectedSubject ? 'bg-[#1a73e8] text-white' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                All Roadmaps
              </button>
              {mdnSubjects.filter((s) => mdnRoadmaps.some((r) => r.subject === s.slug)).map((s) => (
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
        </div>

        {/* Roadmaps Grid */}
        <div className="max-w-[1600px] mx-auto px-6 py-10">
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredRoadmaps.length} roadmap{filteredRoadmaps.length !== 1 ? 's' : ''}
          </p>

          {filteredRoadmaps.length === 0 ? (
            <div className="text-center py-20">
              <Map className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No roadmaps found</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your search or filters.</p>
              <button onClick={clearFilters} className="mt-4 text-[#1a73e8] text-sm font-medium hover:underline">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoadmaps.map((roadmap) => {
                const subject = mdnSubjects.find((s) => s.slug === roadmap.subject);

                return (
                  <Link
                    key={roadmap.id}
                    to={`/learn/mdn/roadmaps/${roadmap.slug}`}
                    className="group rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-transparent transition-all overflow-hidden"
                  >
                    <RoadmapCardImage roadmap={roadmap} subject={subject} />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: subject?.colorHex || '#1a73e8' }} />
                        <span className="text-xs font-medium text-muted-foreground">{subject?.name}</span>
                        <span className="text-xs text-muted-foreground">&middot;</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {roadmap.estimatedTime}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-medium text-foreground group-hover:text-[#1a73e8] transition-colors mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                        {roadmap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{roadmap.description}</p>
                      {/* Steps preview */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {roadmap.steps.slice(0, 3).map((step, i) => (
                          <React.Fragment key={i}>
                            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                              {step.title}
                            </span>
                            {i < Math.min(roadmap.steps.length, 3) - 1 && (
                              <ArrowRight className="w-3 h-3 text-muted-foreground/40 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                        {roadmap.steps.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{roadmap.steps.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
