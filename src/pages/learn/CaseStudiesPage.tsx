import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';
import { caseStudiesData } from '@/data/caseStudiesData';

const industries = ['All', 'Banking', 'Telecom', 'Healthcare', 'Retail', 'Fintech', 'Manufacturing'];

const CaseStudiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.industry === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent mb-4 block">Case Studies</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Real-World Success Stories
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See how leading organizations have partnered with Monkwo to solve complex challenges and achieve measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === industry
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cs) => (
                <div
                  key={cs.slug}
                  className="rounded-2xl border border-border/50 bg-card p-6 flex flex-col hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
                    {cs.industry}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{cs.title}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{cs.client}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{cs.summary}</p>

                  {/* Results preview */}
                  <div className="space-y-2 mb-4">
                    {cs.results.slice(0, 2).map((result, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5">&#10003;</span>
                        {result}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {cs.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground">
                        +{cs.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/learn/case-studies/${cs.slug}`}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    Read case study &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default CaseStudiesPage;
