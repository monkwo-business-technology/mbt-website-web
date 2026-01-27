import React from 'react';
import { Quote, ArrowRight, Building2, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  metrics: {
    value: string;
    label: string;
  }[];
  icon: React.ElementType;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-transformation',
    client: 'Leading African Bank',
    industry: 'Financial Services',
    title: 'Digital Transformation for Core Banking',
    challenge: 'Legacy core banking system causing slow transaction processing and customer dissatisfaction.',
    solution: 'Implemented modern microservices architecture with real-time data processing and mobile-first customer experience.',
    results: [
      'Transaction processing time reduced by 85%',
      'Customer satisfaction scores increased by 40%',
      'Mobile banking adoption grew by 200%',
    ],
    testimonial: {
      quote: 'Monkwo transformed our entire banking infrastructure. Their expertise in legacy modernization was exactly what we needed to compete in the digital age.',
      author: 'James Okonkwo',
      role: 'CTO, Leading African Bank',
    },
    metrics: [
      { value: '85%', label: 'Faster Processing' },
      { value: '40%', label: 'Higher Satisfaction' },
      { value: '200%', label: 'Mobile Growth' },
    ],
    icon: Building2,
  },
  {
    id: 'telecom-analytics',
    client: 'Major Telecom Provider',
    industry: 'Telecommunications',
    title: 'Enterprise Data Analytics Platform',
    challenge: 'Siloed data across multiple systems preventing unified customer insights and churn prediction.',
    solution: 'Built comprehensive data lakehouse with AI-powered analytics for customer 360 view and predictive churn modeling.',
    results: [
      'Unified data from 12+ disparate systems',
      'Churn prediction accuracy of 92%',
      'Revenue retention improved by $15M annually',
    ],
    testimonial: {
      quote: 'The data platform Monkwo built gives us unprecedented visibility into our customer base. We can now predict and prevent churn before it happens.',
      author: 'Dr. Amina Yusuf',
      role: 'Chief Data Officer, Major Telecom',
    },
    metrics: [
      { value: '12+', label: 'Systems Unified' },
      { value: '92%', label: 'Prediction Accuracy' },
      { value: '$15M', label: 'Revenue Saved' },
    ],
    icon: TrendingUp,
  },
  {
    id: 'healthcare-automation',
    client: 'National Healthcare Network',
    industry: 'Healthcare',
    title: 'Clinical Workflow Automation',
    challenge: 'Manual patient intake and documentation processes causing delays and administrative burden on clinical staff.',
    solution: 'Deployed RPA bots and intelligent document processing to automate patient registration, insurance verification, and record management.',
    results: [
      'Administrative time reduced by 60%',
      'Patient wait times decreased by 45%',
      'Documentation errors reduced by 90%',
    ],
    testimonial: {
      quote: 'Our clinical staff can now focus on patient care instead of paperwork. Monkwo\'s automation solution has been transformative for our operations.',
      author: 'Dr. Chioma Eze',
      role: 'Medical Director, National Healthcare',
    },
    metrics: [
      { value: '60%', label: 'Less Admin Time' },
      { value: '45%', label: 'Shorter Waits' },
      { value: '90%', label: 'Fewer Errors' },
    ],
    icon: Users,
  },
  {
    id: 'retail-ecommerce',
    client: 'Pan-African Retail Chain',
    industry: 'Retail',
    title: 'Omnichannel E-commerce Platform',
    challenge: 'Disconnected online and offline shopping experiences with inventory visibility issues across 50+ stores.',
    solution: 'Custom e-commerce platform with real-time inventory sync, unified customer profiles, and seamless omnichannel fulfillment.',
    results: [
      'Online sales increased by 300%',
      'Inventory accuracy improved to 99.5%',
      'Customer lifetime value grew by 65%',
    ],
    testimonial: {
      quote: 'Monkwo delivered an e-commerce solution that truly unifies our customer experience. The inventory visibility alone has been game-changing.',
      author: 'Kofi Mensah',
      role: 'VP Digital Commerce, Pan-African Retail',
    },
    metrics: [
      { value: '300%', label: 'Sales Growth' },
      { value: '99.5%', label: 'Inventory Accuracy' },
      { value: '65%', label: 'Higher CLV' },
    ],
    icon: Zap,
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent mb-4 block">Case Studies</span>
          <h2 className="section-title mb-4">
            Real results for real businesses
          </h2>
          <p className="section-subtitle">
            See how we've helped enterprises across industries transform their operations and achieve measurable outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">
                      {study.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground flex-shrink-0">
                    <study.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Challenge:</span> {study.challenge}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 divide-x divide-border/50 bg-secondary/30">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="p-4 text-center">
                    <div className="text-xl font-bold text-accent">{metric.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="p-6">
                <div className="flex gap-3 mb-4">
                  <Quote className="w-5 h-5 text-accent/40 flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{study.testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-muted-foreground">
                    {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{study.testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Ready to be our next success story?
          </p>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
