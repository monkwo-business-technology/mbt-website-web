import React from 'react';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 hero-gradient overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Technology Partner for Enterprise Growth
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Transform your business with{' '}
            <span className="gradient-text">intelligent solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            From data analytics to AI-powered applications, we help enterprises modernize, innovate, and scale with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200"
            >
              Explore Services
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-200"
            >
              View Products
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up delay-400">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading enterprises across industries</p>
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60">
              <span className="text-lg font-semibold text-muted-foreground">Banking</span>
              <span className="text-lg font-semibold text-muted-foreground">Telecom</span>
              <span className="text-lg font-semibold text-muted-foreground">Healthcare</span>
              <span className="text-lg font-semibold text-muted-foreground">Retail</span>
              <span className="text-lg font-semibold text-muted-foreground">Fintech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
