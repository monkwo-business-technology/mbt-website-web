import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag, ArrowRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';
import { useTutorials } from '@/context/TutorialContext';
import { tutorialCategories } from '@/data/tutorialsData';

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
  Intermediate: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  Advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
};

const contentStyles = [
  '[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4',
  '[&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4',
  '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-muted-foreground',
  '[&_li]:mb-2',
  '[&_pre]:bg-secondary [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto',
  '[&_code]:text-sm [&_code]:text-foreground [&_code]:font-mono',
  '[&_strong]:text-foreground [&_strong]:font-semibold',
].join(' ');

export default function TutorialDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { getTutorialBySlug, publishedTutorials } = useTutorials();

  const tutorial = slug ? getTutorialBySlug(slug) : undefined;

  const { prevTutorial, nextTutorial } = useMemo(() => {
    if (!tutorial) return { prevTutorial: undefined, nextTutorial: undefined };
    const idx = publishedTutorials.findIndex((t) => t.id === tutorial.id);
    return {
      prevTutorial: idx > 0 ? publishedTutorials[idx - 1] : undefined,
      nextTutorial: idx < publishedTutorials.length - 1 ? publishedTutorials[idx + 1] : undefined,
    };
  }, [tutorial, publishedTutorials]);

  const relatedTutorials = useMemo(() => {
    if (!tutorial) return [];
    return publishedTutorials
      .filter((t) => t.category === tutorial.category && t.id !== tutorial.id)
      .slice(0, 3);
  }, [tutorial, publishedTutorials]);

  if (!tutorial || tutorial.status === 'draft') {
    return <Navigate to="/learn/tutorials" replace />;
  }

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
          <div className="max-w-4xl mx-auto px-6 py-16">
            <Link
              to="/learn/tutorials"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tutorials
            </Link>

            <div className="flex gap-2 mb-4">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                {getCategoryName(tutorial.category)}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                {getSubcategoryName(tutorial.category, tutorial.subcategory)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{tutorial.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {tutorial.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {tutorial.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {tutorial.readTime}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${
                  difficultyColors[tutorial.difficulty]
                }`}
              >
                {tutorial.difficulty}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div
            className={`tutorial-content ${contentStyles}`}
            dangerouslySetInnerHTML={{ __html: tutorial.content }}
          />

          {/* Tags */}
          {tutorial.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tutorial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next navigation */}
          <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevTutorial ? (
              <Link
                to={`/learn/tutorials/${prevTutorial.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-accent/30 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <p className="text-sm font-medium truncate">{prevTutorial.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextTutorial && (
              <Link
                to={`/learn/tutorials/${nextTutorial.slug}`}
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-border/50 hover:border-accent/30 transition-colors group text-right"
              >
                <div className="min-w-0">
                  <span className="text-xs text-muted-foreground">Next</span>
                  <p className="text-sm font-medium truncate">{nextTutorial.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </Link>
            )}
          </div>
        </div>

        {/* Related tutorials */}
        {relatedTutorials.length > 0 && (
          <section className="border-t border-border/50 bg-secondary/30">
            <div className="max-w-5xl mx-auto px-6 py-16">
              <h2 className="text-2xl font-bold mb-8">Related Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTutorials.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/learn/tutorials/${rel.slug}`}
                    className="rounded-2xl border border-border/50 p-5 bg-card hover:border-accent/30 transition-colors block"
                  >
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full border text-xs font-medium mb-3 ${
                        difficultyColors[rel.difficulty]
                      }`}
                    >
                      {rel.difficulty}
                    </span>
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2">{rel.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {rel.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
