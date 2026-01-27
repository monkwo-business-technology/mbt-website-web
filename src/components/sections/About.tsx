import React from 'react';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '6', label: 'Business Pillars' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-accent mb-4 block">About Monkwo</span>
            <h2 className="section-title mb-6">
              Your trusted technology partner
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Monkwo is a leading technology solutions provider specializing in data analytics, AI services, and enterprise software development. We partner with organizations across banking, telecommunications, healthcare, and retail to drive digital transformation.
              </p>
              <p className="leading-relaxed">
                Our portfolio is structured into six primary business pillars, each focused on delivering exceptional value through innovative solutions, expert consulting, and ongoing support.
              </p>
              <p className="leading-relaxed">
                From data warehousing to AI-powered applications, we help enterprises modernize their technology stack, optimize operations, and unlock new growth opportunities.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200"
              >
                Partner with us
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
