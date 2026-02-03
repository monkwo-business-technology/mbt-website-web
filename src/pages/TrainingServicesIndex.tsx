import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, GraduationCap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { trainingServicesData } from '@/data/trainingServicesData';

const TrainingServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border/50">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Training & Capacity Development</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20 md:py-28">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Training & Capacity Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Empower Your Teams with Technology Skills
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From technical training programs to organizational capacity building, we help your teams
                master new technologies and drive innovation from within.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore Programs
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
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl">
                Comprehensive training and capacity development programs designed to build lasting technical capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingServicesData.map((service) => (
                <Link
                  key={service.slug}
                  to={`/training-services/${service.slug}`}
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
        <section id="contact" className="py-20 md:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to upskill your teams?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Partner with Monkwo to build the technical capabilities your organization needs to thrive.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Start a Training Program
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingServicesIndex;
