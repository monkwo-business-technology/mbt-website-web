import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';
import { getCaseStudyBySlug } from '@/data/caseStudiesData';

const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/learn/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link
              to="/learn/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
              {caseStudy.industry}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-accent font-medium">{caseStudy.client}</p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
            {/* Challenge */}
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/50 bg-card p-6"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-foreground text-background p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to achieve similar results?
              </h2>
              <p className="text-background/70 mb-8 max-w-2xl mx-auto">
                Let our experts help you solve your toughest technology challenges. Schedule a free consultation today.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default CaseStudyDetailPage;
