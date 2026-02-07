import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, ChevronRight, Map, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';
import { mdnSubjects, mdnRoadmaps, mdnCourses } from '@/data/mdnData';

export default function MDNRoadmapDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const roadmap = mdnRoadmaps.find((r) => r.slug === slug);

  if (!roadmap) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-16">
          <div className="max-w-[1600px] mx-auto px-6 py-20 text-center">
            <Map className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Roadmap not found</h1>
            <p className="text-muted-foreground mb-4">The roadmap you are looking for does not exist.</p>
            <Link to="/learn/mdn/roadmaps" className="text-[#1a73e8] text-sm font-medium hover:underline">
              Browse all roadmaps
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const subject = mdnSubjects.find((s) => s.slug === roadmap.subject);

  const levelColor =
    roadmap.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
    roadmap.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' :
    'bg-red-500/10 text-red-600 border-red-500/20';

  const totalCourses = roadmap.steps.reduce((sum, s) => sum + s.courses.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className="border-b border-border/50">
          <div className={`h-1.5 ${subject?.color || 'bg-[#1a73e8]'}`} />
          <div className="bg-gradient-to-b from-secondary/50 to-background">
            <div className="max-w-[1600px] mx-auto px-6 py-12">
              <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${subject?.color || 'bg-[#1a73e8]'} text-white`}>
                  {subject?.name}
                </span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${levelColor}`}>
                  {roadmap.difficulty}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{roadmap.title}</h1>
              <p className="text-muted-foreground text-lg max-w-3xl mb-6">{roadmap.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {roadmap.estimatedTime}</span>
                <span className="flex items-center gap-1.5"><Map className="w-4 h-4" /> {roadmap.steps.length} steps</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> {totalCourses} courses</span>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Steps */}
        <div className="max-w-[1600px] mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-8" style={{ fontFamily: "'Google Sans', sans-serif" }}>Roadmap Steps</h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/50" />

              <div className="space-y-8">
                {roadmap.steps.map((step, i) => {
                  const stepCourses = step.courses
                    .map((slug) => mdnCourses.find((c) => c.slug === slug))
                    .filter(Boolean);

                  return (
                    <div key={i} className="relative pl-16">
                      {/* Step number */}
                      <div className={`absolute left-0 w-12 h-12 rounded-full ${subject?.color || 'bg-[#1a73e8]'} flex items-center justify-center text-white font-semibold text-lg z-10`}>
                        {i + 1}
                      </div>

                      <div className="rounded-2xl border border-border/50 bg-card p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                          <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">{step.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                        {/* Courses in this step */}
                        {stepCourses.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Courses</span>
                            {stepCourses.map((course) => {
                              if (!course) return null;
                              const courseSubject = mdnSubjects.find((s) => s.slug === course.subject);
                              return (
                                <Link
                                  key={course.id}
                                  to={`/learn/mdn/courses/${course.slug}`}
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors group"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 ${courseSubject?.color || 'bg-[#1a73e8]'} rounded-lg flex items-center justify-center`}>
                                      <BookOpen className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-foreground group-hover:text-[#1a73e8] transition-colors">{course.title}</div>
                                      <div className="text-xs text-muted-foreground">{course.level} &middot; {course.duration} &middot; {course.lessons} lessons</div>
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#1a73e8] transition-colors" />
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Completion */}
              <div className="relative pl-16 mt-8">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center z-10">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                  <h3 className="text-lg font-medium text-foreground mb-1">Roadmap Complete!</h3>
                  <p className="text-sm text-muted-foreground">
                    After completing all steps, you will have the skills and knowledge outlined in this roadmap.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Roadmaps */}
            <div className="mt-16">
              <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>Other Roadmaps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mdnRoadmaps.filter((r) => r.id !== roadmap.id).slice(0, 4).map((related) => {
                  const relSubject = mdnSubjects.find((s) => s.slug === related.subject);
                  return (
                    <Link
                      key={related.id}
                      to={`/learn/mdn/roadmaps/${related.slug}`}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card hover:border-[#1a73e8]/30 transition-all group"
                    >
                      <div className={`w-10 h-10 ${relSubject?.color || 'bg-[#1a73e8]'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <span className="material-symbols-outlined text-white text-[20px]">route</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground group-hover:text-[#1a73e8] transition-colors truncate">{related.title}</div>
                        <div className="text-xs text-muted-foreground">{relSubject?.name} &middot; {related.estimatedTime}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
