import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Map, Clock, Users, Star, TrendingUp, Award, MessageSquare, Zap, Target, CheckCircle2 } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';
import { mdnSubjects, mdnCourses, mdnRoadmaps, roadmapCardIcons } from '@/data/mdnData';

/** Reusable illustration header for course cards */
function CourseCardImage({ course, subject }: { course: typeof mdnCourses[0]; subject?: typeof mdnSubjects[0] }) {
  const from = subject?.gradientFrom || '#1a73e8';
  const to = subject?.gradientTo || '#4f93f0';
  return (
    <div
      className="relative h-40 overflow-hidden rounded-t-3xl"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      {/* Decorative shapes */}
      <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-15" style={{ background: 'white' }} />
      <div className="absolute -left-4 -bottom-8 w-24 h-24 rounded-full opacity-10" style={{ background: 'white' }} />
      <div className="absolute right-10 bottom-4 w-16 h-16 rounded-2xl rotate-12 opacity-10" style={{ background: 'white' }} />
      {/* Main icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-white/90 text-[64px]">{course.cardIcon}</span>
      </div>
      {/* Level pill overlay */}
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${
          course.level === 'Beginner' ? 'bg-green-500/80 text-white' :
          course.level === 'Intermediate' ? 'bg-amber-500/80 text-white' :
          'bg-red-500/80 text-white'
        }`}>
          {course.level}
        </span>
      </div>
    </div>
  );
}

/** Reusable illustration header for roadmap cards */
function RoadmapCardImage({ roadmap, subject }: { roadmap: typeof mdnRoadmaps[0]; subject?: typeof mdnSubjects[0] }) {
  const from = subject?.gradientFrom || '#1a73e8';
  const to = subject?.gradientTo || '#4f93f0';
  const icon = roadmapCardIcons[roadmap.slug] || 'route';
  return (
    <div
      className="relative h-36 overflow-hidden rounded-t-3xl"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-15" style={{ background: 'white' }} />
      <div className="absolute -left-6 -bottom-10 w-28 h-28 rounded-full opacity-10" style={{ background: 'white' }} />
      <div className="absolute inset-0 flex items-center justify-center gap-3">
        <span className="material-symbols-outlined text-white/90 text-[56px]">{icon}</span>
      </div>
      {/* Step count overlay */}
      <div className="absolute top-3 right-3">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
          {roadmap.steps.length} steps
        </span>
      </div>
    </div>
  );
}

export default function MDNHomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCourses = mdnCourses.filter((c) => c.featured);
  const featuredRoadmaps = mdnRoadmaps.filter((r) => r.featured);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/learn/mdn/courses?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const totalCourses = mdnCourses.length;
  const totalEnrolled = mdnCourses.reduce((sum, c) => sum + c.enrolled, 0);
  const totalSubjects = mdnSubjects.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className="border-b border-border/50 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-[1600px] mx-auto px-6 py-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1a73e8] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[28px]">school</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                Monqwo Development Network
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
              Your open learning platform for technology, science, and beyond.
            </p>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Free courses, structured roadmaps, and hands-on learning across web development, AI, mathematics, physics, neuroscience, and more.
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="mt-10 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses, topics, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#f1f3f4] dark:bg-[#3c4043] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/30 transition-all text-sm"
              />
            </form>

            {/* Stats */}
            <div className="mt-10 flex items-center justify-center gap-8 md:gap-12 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span><strong className="text-foreground">{totalCourses}</strong> Courses</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Map className="w-4 h-4" />
                <span><strong className="text-foreground">{mdnRoadmaps.length}</strong> Roadmaps</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span><strong className="text-foreground">{(totalEnrolled / 1000).toFixed(0)}k+</strong> Learners</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span><strong className="text-foreground">{totalSubjects}</strong> Subjects</span>
              </div>
            </div>
          </div>
        </section>

        {/* How MDN Works – 3 Step Process */}
        <section className="py-20 border-b border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">How it works</span>
              <h2 className="text-2xl md:text-3xl font-normal text-foreground mt-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                Start learning in three simple steps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#4285f4] via-[#f9ab00] to-[#34a853]" />

              {[
                { step: '1', icon: 'explore', title: 'Explore Topics', description: 'Browse 12 subjects spanning technology, science, and mathematics. Find courses that match your goals and interests.', color: '#4285f4', gradient: 'from-[#4285f4] to-[#669df6]' },
                { step: '2', icon: 'play_lesson', title: 'Learn at Your Pace', description: 'Follow structured lessons with hands-on exercises. Track your progress through interactive modules and quizzes.', color: '#f9ab00', gradient: 'from-[#f9ab00] to-[#fdd663]' },
                { step: '3', icon: 'workspace_premium', title: 'Achieve Mastery', description: 'Complete roadmaps, earn certificates, and build real projects that showcase your expertise to the world.', color: '#34a853', gradient: 'from-[#34a853] to-[#57bb8a]' },
              ].map((item) => (
                <div key={item.step} className="text-center relative z-10">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} mx-auto flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="material-symbols-outlined text-white text-[48px]">{item.icon}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-card border-2 flex items-center justify-center mx-auto -mt-10 mb-4 relative z-10" style={{ borderColor: item.color }}>
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.step}</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Categories */}
        <section className="py-16">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-normal text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>Browse by Subject</h2>
                <p className="text-sm text-muted-foreground mt-1">Explore courses across disciplines</p>
              </div>
              <Link to="/learn/mdn/courses" className="text-sm font-medium text-[#1a73e8] hover:text-[#174ea6] transition-colors flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {mdnSubjects.map((subject) => (
                <Link
                  key={subject.slug}
                  to={`/learn/mdn/courses?subject=${subject.slug}`}
                  className="group rounded-3xl border border-border/50 bg-card hover:border-[#1a73e8]/30 hover:shadow-lg transition-all overflow-hidden"
                >
                  <div
                    className="h-20 flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${subject.gradientFrom} 0%, ${subject.gradientTo} 100%)` }}
                  >
                    <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-15" style={{ background: 'white' }} />
                    <span className="material-symbols-outlined text-white text-[36px] group-hover:scale-110 transition-transform">{subject.icon}</span>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-sm font-medium text-foreground">{subject.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{subject.courseCount} courses</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's Trending – Visual Topic Showcase */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[#ea4335] font-semibold text-sm tracking-wider uppercase">Trending Now</span>
                <h2 className="text-2xl md:text-3xl font-normal text-foreground mt-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                  What learners are exploring
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'AI & Large Language Models', icon: 'smart_toy', stats: '14.7k learners', gradient: 'from-[#f9ab00] to-[#ff6d00]', link: '/learn/mdn/courses?subject=machine-learning' },
                { title: 'Full-Stack Web Development', icon: 'stacks', stats: '28.3k learners', gradient: 'from-[#4285f4] to-[#1a73e8]', link: '/learn/mdn/courses?subject=web-development' },
                { title: 'Brain Science & Cognition', icon: 'neurology', stats: '9.4k learners', gradient: 'from-[#e8710a] to-[#d93025]', link: '/learn/mdn/courses?subject=neuroscience' },
                { title: 'Quantum Mechanics', icon: 'blur_on', stats: '11.5k learners', gradient: 'from-[#00acc1] to-[#0097a7]', link: '/learn/mdn/courses?subject=physics' },
              ].map((topic) => (
                <Link
                  key={topic.title}
                  to={topic.link}
                  className="group relative rounded-3xl overflow-hidden h-56 flex flex-col justify-end p-6 transition-transform hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient}`} />
                  {/* Decorative shapes */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -left-4 top-1/2 w-20 h-20 rounded-full bg-white/5" />
                  <div className="absolute right-6 top-6 w-16 h-16 rounded-2xl rotate-12 bg-white/5" />
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <span className="material-symbols-outlined text-white/80 text-[40px]">{topic.icon}</span>
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-white font-medium text-base mb-1" style={{ fontFamily: "'Google Sans', sans-serif" }}>{topic.title}</h3>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-white/70" />
                      <span className="text-white/70 text-xs">{topic.stats}</span>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Large feature card */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Link
                to="/learn/mdn/courses?subject=data-science"
                className="group relative rounded-3xl overflow-hidden h-64 flex flex-col justify-end p-8 transition-transform hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ea4335] to-[#c5221f]" />
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10" />
                <div className="absolute right-16 bottom-8 w-24 h-24 rounded-3xl rotate-12 bg-white/5" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
                  <span className="material-symbols-outlined text-white text-[180px]">query_stats</span>
                </div>
                <div className="relative z-10">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-medium">Popular Path</span>
                  <h3 className="text-xl text-white font-medium mt-1 mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>Data Science & Analytics</h3>
                  <p className="text-white/70 text-sm max-w-md">From Python and statistics to machine learning — the most in-demand skill set in tech.</p>
                  <div className="flex items-center gap-4 mt-3 text-white/60 text-xs">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 18 courses</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 25.6k learners</span>
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> 4.8 avg rating</span>
                  </div>
                </div>
              </Link>

              <Link
                to="/learn/mdn/courses?subject=mathematics"
                className="group relative rounded-3xl overflow-hidden h-64 flex flex-col justify-end p-8 transition-transform hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#a142f4] to-[#7b1fa2]" />
                <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-white/10" />
                <div className="absolute left-16 top-8 w-24 h-24 rounded-3xl -rotate-12 bg-white/5" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
                  <span className="material-symbols-outlined text-white text-[180px]">calculate</span>
                </div>
                <div className="relative z-10">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-medium">Foundation</span>
                  <h3 className="text-xl text-white font-medium mt-1 mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>Mathematics for Everything</h3>
                  <p className="text-white/70 text-sm max-w-md">Linear algebra, calculus, probability — the language that powers AI, physics, and engineering.</p>
                  <div className="flex items-center gap-4 mt-3 text-white/60 text-xs">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 22 courses</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 22.1k learners</span>
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> 4.7 avg rating</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-normal text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>Featured Courses</h2>
                <p className="text-sm text-muted-foreground mt-1">Popular courses across all subjects</p>
              </div>
              <Link to="/learn/mdn/courses" className="text-sm font-medium text-[#1a73e8] hover:text-[#174ea6] transition-colors flex items-center gap-1">
                See all courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => {
                const subject = mdnSubjects.find((s) => s.slug === course.subject);
                return (
                  <Link
                    key={course.id}
                    to={`/learn/mdn/courses/${course.slug}`}
                    className="group rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-transparent transition-all overflow-hidden"
                  >
                    <CourseCardImage course={course} subject={subject} />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: subject?.colorHex || '#1a73e8' }}
                          />
                          <span className="text-xs font-medium text-muted-foreground">{subject?.name}</span>
                        </div>
                      </div>
                      <h3 className="text-[15px] font-medium text-foreground group-hover:text-[#1a73e8] transition-colors line-clamp-2 mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" /> {course.lessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500" /> {course.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" /> {(course.enrolled / 1000).toFixed(1)}k
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Roadmaps */}
        <section className="py-16">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-normal text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>Learning Roadmaps</h2>
                <p className="text-sm text-muted-foreground mt-1">Structured paths to master new skills</p>
              </div>
              <Link to="/learn/mdn/roadmaps" className="text-sm font-medium text-[#1a73e8] hover:text-[#174ea6] transition-colors flex items-center gap-1">
                See all roadmaps <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRoadmaps.map((roadmap) => {
                const subject = mdnSubjects.find((s) => s.slug === roadmap.subject);
                return (
                  <Link
                    key={roadmap.id}
                    to={`/learn/mdn/roadmaps/${roadmap.slug}`}
                    className="group rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-transparent transition-all overflow-hidden"
                  >
                    <RoadmapCardImage roadmap={roadmap} subject={subject} />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: subject?.colorHex || '#1a73e8' }}
                        />
                        <span className="text-xs text-muted-foreground">{subject?.name}</span>
                        <span className="text-xs text-muted-foreground">&middot;</span>
                        <span className="text-xs text-muted-foreground">{roadmap.estimatedTime}</span>
                      </div>
                      <h3 className="text-[15px] font-medium text-foreground group-hover:text-[#1a73e8] transition-colors mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                        {roadmap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{roadmap.description}</p>
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
          </div>
        </section>

        {/* Learn From Experts – Feature Showcase */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#34a853] font-semibold text-sm tracking-wider uppercase">Expert Instructors</span>
              <h2 className="text-2xl md:text-3xl font-normal text-foreground mt-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                Learn from industry leaders
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
                Our instructors are researchers, engineers, and educators from top institutions worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {[
                { name: 'Dr. Andrew Chang', role: 'ML & AI', icon: 'psychology', courses: 3, gradient: 'from-[#f9ab00] to-[#fdd663]' },
                { name: 'Sarah Chen', role: 'Web Dev', icon: 'language', courses: 2, gradient: 'from-[#4285f4] to-[#669df6]' },
                { name: 'Dr. Aisha Patel', role: 'Neuroscience', icon: 'neurology', courses: 1, gradient: 'from-[#e8710a] to-[#f4a742]' },
                { name: 'Prof. R. Feynman Jr.', role: 'Physics', icon: 'science', courses: 1, gradient: 'from-[#00acc1] to-[#4dd0e1]' },
                { name: 'Dr. Priya Sharma', role: 'Mathematics', icon: 'calculate', courses: 1, gradient: 'from-[#a142f4] to-[#b97af7]' },
                { name: 'Dr. Lisa Wang', role: 'Deep Learning', icon: 'hub', courses: 1, gradient: 'from-[#ea4335] to-[#f28b82]' },
              ].map((instructor) => (
                <div key={instructor.name} className="text-center group">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${instructor.gradient} mx-auto flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-md`}>
                    <span className="material-symbols-outlined text-white text-[36px]">{instructor.icon}</span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>{instructor.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{instructor.role}</p>
                  <p className="text-xs text-[#1a73e8] mt-1">{instructor.courses} course{instructor.courses > 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MDN – Feature Highlights with Illustrations */}
        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#f9ab00] font-semibold text-sm tracking-wider uppercase">Why MDN</span>
              <h2 className="text-2xl md:text-3xl font-normal text-foreground mt-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                Everything you need to succeed
              </h2>
            </div>

            {/* Feature row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#4285f4] to-[#1a73e8]">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute right-8 bottom-8 w-20 h-20 rounded-2xl rotate-12 bg-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/90 text-[80px]">interactive_space</span>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <span className="w-3 h-3 rounded-full bg-[#ea4335]" />
                      <span className="w-3 h-3 rounded-full bg-[#f9ab00]" />
                      <span className="w-3 h-3 rounded-full bg-[#34a853]" />
                      <span className="w-3 h-3 rounded-full bg-white/60" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4285f4]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#4285f4]" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>Interactive Learning</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every course features hands-on exercises, live code editors, and interactive visualizations. Learn by doing, not just watching.
                </p>
                <div className="space-y-3">
                  {['In-browser code playground', 'Step-by-step guided exercises', 'Real-time feedback and hints', 'Project-based assessments'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#34a853]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#34a853]" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>Structured Roadmaps</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Don't know where to start? Follow expert-designed roadmaps that guide you from beginner to job-ready, step by step.
                </p>
                <div className="space-y-3">
                  {['Clear progression from basics to advanced', 'Prerequisites mapped automatically', 'Estimated timelines for each stage', 'Career-aligned skill tracking'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#34a853] to-[#0d904f]">
                <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute left-8 bottom-8 w-20 h-20 rounded-2xl -rotate-12 bg-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/90 text-[80px]">conversion_path</span>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      {['1', '2', '3', '4'].map((n) => (
                        <React.Fragment key={n}>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{n}</span>
                          </div>
                          {n !== '4' && <div className="w-4 h-0.5 bg-white/30" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#f9ab00] to-[#e8710a]">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute right-8 top-8 w-20 h-20 rounded-2xl rotate-12 bg-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/90 text-[80px]">emoji_events</span>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <span className="material-symbols-outlined text-white/40 text-[28px]">verified</span>
                      <span className="material-symbols-outlined text-white/60 text-[36px]">workspace_premium</span>
                      <span className="material-symbols-outlined text-white/40 text-[28px]">military_tech</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f9ab00]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#f9ab00]" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>Certificates & Recognition</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Earn certificates as you complete courses and roadmaps. Showcase your achievements on your portfolio and professional profiles.
                </p>
                <div className="space-y-3">
                  {['Verified completion certificates', 'Shareable digital badges', 'Skill-level endorsements', 'Portfolio project showcases'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Testimonials */}
        <section className="py-20 border-b border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Community</span>
              <h2 className="text-2xl md:text-3xl font-normal text-foreground mt-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                Loved by learners worldwide
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: 'MDN\'s roadmap system helped me transition from marketing to frontend development in 8 months. The structured approach made all the difference.',
                  name: 'Priya Mehta',
                  role: 'Frontend Developer at Flipkart',
                  color: '#4285f4',
                  icon: 'language',
                },
                {
                  quote: 'The neuroscience courses are incredibly well-designed. As a PhD student, I found the computational neuroscience course as rigorous as any university offering.',
                  name: 'Dr. James Wright',
                  role: 'PhD Researcher, MIT',
                  color: '#e8710a',
                  icon: 'neurology',
                },
                {
                  quote: 'I completed the ML Engineer roadmap and landed my dream job. The hands-on projects and progressive difficulty were exactly what I needed.',
                  name: 'Sofia Rodriguez',
                  role: 'ML Engineer at DeepMind',
                  color: '#34a853',
                  icon: 'psychology',
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-border/50 bg-card p-6 relative overflow-hidden"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: testimonial.color }} />
                  <MessageSquare className="w-8 h-8 text-muted-foreground/20 mb-4" />
                  <p className="text-sm text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${testimonial.color}20` }}>
                      <span className="material-symbols-outlined text-[18px]" style={{ color: testimonial.color }}>{testimonial.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#4285f4]/5 via-[#f9ab00]/5 to-[#34a853]/5 border border-border/50 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: `${(totalEnrolled / 1000).toFixed(0)}k+`, label: 'Active Learners', icon: 'group' },
                  { value: `${totalCourses}+`, label: 'Expert-Led Courses', icon: 'school' },
                  { value: `${mdnRoadmaps.length}`, label: 'Career Roadmaps', icon: 'route' },
                  { value: '4.8', label: 'Average Rating', icon: 'star' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="material-symbols-outlined text-[#1a73e8] text-[28px] mb-2">{stat.icon}</span>
                    <div className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Google Sans', sans-serif" }}>{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1a73e8]">
          <div className="max-w-[1600px] mx-auto px-6 text-center">
            <h2 className="text-2xl font-normal text-white mb-3" style={{ fontFamily: "'Google Sans', sans-serif" }}>
              Start learning today
            </h2>
            <p className="text-blue-100 text-sm mb-8 max-w-lg mx-auto">
              All courses are free and open. Pick a subject, follow a roadmap, or jump into any course that interests you.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/learn/mdn/courses"
                className="px-6 py-2.5 bg-white text-[#1a73e8] rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Browse Courses
              </Link>
              <Link
                to="/learn/mdn/roadmaps"
                className="px-6 py-2.5 border border-white/40 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                View Roadmaps
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
