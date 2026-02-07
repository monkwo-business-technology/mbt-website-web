import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { mdnSubjects, mdnCourses } from '@/data/mdnData';

const mdnNavItems = [
  { label: 'Courses', href: '/learn/mdn/courses', hasMegaMenu: true },
  { label: 'Explore', href: '/learn/mdn/roadmaps' },
  { label: 'MDN for Business', href: '/learn/mdn/business' },
  { label: 'Teach on MDN', href: '/learn/mdn/teach' },
  { label: 'MDN for Government', href: '/learn/mdn/government' },
  { label: 'Partners', href: '/learn/mdn/partners' },
];

/** Group courses by subject slug */
function getCoursesBySubject() {
  const grouped: Record<string, typeof mdnCourses> = {};
  for (const course of mdnCourses) {
    if (!grouped[course.subject]) grouped[course.subject] = [];
    grouped[course.subject].push(course);
  }
  return grouped;
}

export default function MDNSubNav() {
  const location = useLocation();
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  const coursesBySubject = getCoursesBySubject();

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setIsMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsMegaOpen(false);
  }, [location.pathname, location.search]);

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <div
      className="sticky z-40 border-b border-border/50 bg-card/95 backdrop-blur-sm transition-[top] duration-300"
      style={{ top: 'var(--header-offset, 64px)' }}
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center gap-1 h-12 overflow-x-auto">
          {/* MDN Brand */}
          <Link
            to="/learn/mdn"
            className="flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap mr-4"
          >
            <span className="material-symbols-outlined text-[#1a73e8] text-[20px]">school</span>
            <span style={{ fontFamily: "'Google Sans', sans-serif" }}>MDN</span>
          </Link>

          <div className="h-5 w-px bg-border/50 mr-2" />

          {/* Nav items */}
          {mdnNavItems.map((item) =>
            item.hasMegaMenu ? (
              <div key={item.label} className="relative" ref={megaRef}>
                <button
                  onClick={() => setIsMegaOpen(!isMegaOpen)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive('/learn/mdn/courses')
                      ? 'text-[#1a73e8] bg-[#1a73e8]/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isMegaOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(item.href)
                    ? 'text-[#1a73e8] bg-[#1a73e8]/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Courses Mega Menu — full width below the nav bar */}
      {isMegaOpen && (
        <div className="absolute left-0 right-0 top-full bg-card border-b border-border/50 shadow-lg z-50">
          <div className="max-w-[1600px] mx-auto px-6 py-6">
            {/* Top row: quick links */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Link
                  to="/learn/mdn/courses"
                  onClick={() => setIsMegaOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a73e8] text-white text-sm font-medium hover:bg-[#185abc] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">school</span>
                  All Courses
                </Link>
                <Link
                  to="/learn/mdn/roadmaps"
                  onClick={() => setIsMegaOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">route</span>
                  All Roadmaps
                </Link>
              </div>
              <span className="text-xs text-muted-foreground">
                {mdnCourses.length} courses across {mdnSubjects.length} subjects
              </span>
            </div>

            <div className="h-px bg-border/50 mb-5" />

            {/* Subject + Course grid — 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
              {mdnSubjects.map((subject) => {
                const courses = coursesBySubject[subject.slug] || [];
                if (courses.length === 0) return null;

                return (
                  <div key={subject.slug}>
                    {/* Subject header */}
                    <Link
                      to={`/learn/mdn/courses?subject=${subject.slug}`}
                      onClick={() => setIsMegaOpen(false)}
                      className="flex items-center gap-2 mb-2.5 group"
                    >
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${subject.colorHex}15` }}
                      >
                        <span
                          className="material-symbols-outlined text-[16px]"
                          style={{ color: subject.colorHex }}
                        >
                          {subject.icon}
                        </span>
                      </span>
                      <span
                        className="text-sm font-semibold text-foreground group-hover:text-[#1a73e8] transition-colors"
                        style={{ fontFamily: "'Google Sans', sans-serif" }}
                      >
                        {subject.name}
                      </span>
                    </Link>

                    {/* Course list */}
                    <div className="space-y-0.5 pl-9">
                      {courses.map((course) => (
                        <Link
                          key={course.id}
                          to={`/learn/mdn/courses/${course.slug}`}
                          onClick={() => setIsMegaOpen(false)}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-[#1a73e8] transition-colors truncate"
                        >
                          {course.title}
                        </Link>
                      ))}
                      <Link
                        to={`/learn/mdn/courses?subject=${subject.slug}`}
                        onClick={() => setIsMegaOpen(false)}
                        className="flex items-center gap-1 pt-1 text-xs font-medium text-[#1a73e8] hover:text-[#174ea6] transition-colors"
                      >
                        View all {subject.courseCount}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
