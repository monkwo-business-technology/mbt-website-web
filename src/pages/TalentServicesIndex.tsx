import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { talentServicesData } from '@/data/talentServicesData';

const TalentServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Talent Outsourcing</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Talent Outsourcing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Access Top Tech Talent, On Demand
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From staff augmentation to dedicated development teams, we connect you with skilled
                professionals who drive your projects forward and scale your capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Talent Services</h2>
              <p className="text-muted-foreground max-w-2xl">
                Flexible talent solutions designed to meet your project needs, timelines, and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talentServicesData.map((service) => (
                <Link
                  key={service.slug}
                  to={`/talent-services/${service.slug}`}
                  className="group bg-card border border-border/50 rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to scale your team?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Partner with Monkwo to access world-class technology talent that drives your business forward.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Start Hiring
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TalentServicesIndex;
