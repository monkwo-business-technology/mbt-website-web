import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, BookOpen, CheckCircle, ChevronRight, Play } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';
import { mdnSubjects, mdnCourses } from '@/data/mdnData';

export default function MDNCourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const course = mdnCourses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-16">
          <div className="max-w-[1600px] mx-auto px-6 py-20 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Course not found</h1>
            <p className="text-muted-foreground mb-4">The course you are looking for does not exist.</p>
            <Link to="/learn/mdn/courses" className="text-[#1a73e8] text-sm font-medium hover:underline">
              Browse all courses
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const subject = mdnSubjects.find((s) => s.slug === course.subject);
  const relatedCourses = mdnCourses.filter((c) => c.subject === course.subject && c.id !== course.id).slice(0, 3);

  const levelColor =
    course.level === 'Beginner' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
    course.level === 'Intermediate' ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' :
    'bg-red-500/10 text-red-600 border-red-500/20';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className={`border-b border-border/50`}>
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
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-muted-foreground text-lg max-w-3xl mb-6">{course.overview}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> {course.lessons} lessons</span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500" /> {course.rating} rating</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {course.enrolled.toLocaleString()} enrolled</span>
                <span>By <strong className="text-foreground">{course.author}</strong></span>
                <span>Updated {course.lastUpdated}</span>
              </div>

              <button className="px-6 py-2.5 bg-[#1a73e8] text-white rounded-full text-sm font-medium hover:bg-[#185abc] transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" /> Start Course
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-[1600px] mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Course Modules */}
              <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>Course Content</h2>
              <div className="space-y-3 mb-12">
                {course.modules.map((module, i) => (
                  <div key={i} className="rounded-2xl border border-border/50 bg-card p-5 hover:border-[#1a73e8]/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-foreground">{module.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{module.lessons} lessons &middot; {module.duration}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>

              {/* What You'll Learn */}
              <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 p-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Google Sans', sans-serif" }}>Topics Covered</h2>
              <div className="flex flex-wrap gap-2 mb-12">
                {course.tags.map((tag) => (
                  <span key={tag} className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Course Info Card */}
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Course Details</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Duration</dt>
                      <dd className="font-medium text-foreground">{course.duration}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Lessons</dt>
                      <dd className="font-medium text-foreground">{course.lessons}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Level</dt>
                      <dd className="font-medium text-foreground">{course.level}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Author</dt>
                      <dd className="font-medium text-foreground">{course.author}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Rating</dt>
                      <dd className="font-medium text-foreground flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" /> {course.rating}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Enrolled</dt>
                      <dd className="font-medium text-foreground">{course.enrolled.toLocaleString()}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Updated</dt>
                      <dd className="font-medium text-foreground">{course.lastUpdated}</dd>
                    </div>
                  </dl>
                </div>

                {/* Prerequisites */}
                {course.prerequisites.length > 0 && (
                  <div className="rounded-2xl border border-border/50 bg-card p-6">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      {course.prerequisites.map((prereq, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Courses */}
                {relatedCourses.length > 0 && (
                  <div className="rounded-2xl border border-border/50 bg-card p-6">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Related Courses</h3>
                    <div className="space-y-3">
                      {relatedCourses.map((related) => (
                        <Link
                          key={related.id}
                          to={`/learn/mdn/courses/${related.slug}`}
                          className="block p-3 rounded-xl hover:bg-secondary transition-colors"
                        >
                          <div className="text-sm font-medium text-foreground line-clamp-1">{related.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{related.level} &middot; {related.duration}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
