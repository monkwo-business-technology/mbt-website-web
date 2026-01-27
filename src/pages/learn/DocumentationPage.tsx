import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';
import { documentationData } from '@/data/documentationData';

const DocumentationPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(documentationData[0]?.slug || '');

  const currentCategory = documentationData.find((c) => c.slug === activeCategory) || documentationData[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent mb-4 block">Documentation</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Technical Guides & References
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive documentation to help you build, integrate, and scale with the Monkwo platform.
              </p>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Sidebar */}
              <aside className="lg:w-64 shrink-0">
                <nav className="lg:sticky lg:top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
                  {documentationData.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setActiveCategory(category.slug)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.slug
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-secondary text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Content */}
              <div className="flex-1">
                {currentCategory && (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-2">{currentCategory.name}</h2>
                    <p className="text-muted-foreground mb-8">{currentCategory.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentCategory.articles.map((article) => (
                        <div
                          key={article.slug}
                          className="rounded-2xl border border-border/50 p-6 bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-foreground mb-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default DocumentationPage;
