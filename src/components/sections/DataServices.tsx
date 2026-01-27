import React from 'react';
import { Link } from 'react-router-dom';
import { DataIcon, ChartIcon, CheckIcon, ArrowRightIcon } from '../icons/ServiceIcons';
import { dataServicesData } from '@/data/dataServicesData';

const pillars = [
  {
    icon: DataIcon,
    title: 'Data & Analytics Services',
    description: 'Turning enterprise data into actionable intelligence with comprehensive analytics solutions.',
    offerings: [
      'Data warehousing and lakehouse implementations',
      'Enterprise analytics and BI',
      'Customer 360 / Golden Record frameworks',
      'Data governance and master data management',
      'Data monetization frameworks',
    ],
    customers: 'Banks, telcos, utilities, regulators, large enterprises',
    link: '/data-services',
  },
  {
    icon: ChartIcon,
    title: 'Artificial Intelligence Services',
    description: 'Practical, responsible, and business-driven AI adoption for modern enterprises.',
    offerings: [
      'Machine learning model development',
      'AI-powered applications',
      'Fraud detection systems',
      'Intelligent automation (RPA)',
      'AI advisory, governance & ethics',
    ],
    customers: 'Financial services, healthcare, retail, manufacturing',
    link: '#data', // Will be updated when AI services pages are created
  },
];

const dataCategories = [
  {
    title: 'Data Management',
    items: ['ETL pipeline design', 'Real-time integration', 'API-based integration', 'Data synchronization', 'Metadata management', 'Data lineage'],
    link: '/data-services/data-integration',
  },
  {
    title: 'Analytics & Insights',
    items: ['BI dashboard development', 'Interactive reporting', 'Custom visualization', 'Real-time analytics', 'Executive reports'],
    link: '/data-services/business-intelligence',
  },
  {
    title: 'Data Engineering',
    items: ['Data lakes & warehouses', 'Hadoop/Spark implementation', 'Batch processing', 'Stream processing', 'Query optimization'],
    link: '/data-services/data-engineering',
  },
  {
    title: 'Security & Strategy',
    items: ['Access control (RBAC)', 'Identity management', 'Strategic roadmaps', 'Data monetization', 'Tool consulting'],
    link: '/data-services/data-security',
  },
];

const DataServices: React.FC = () => {
  return (
    <section id="data" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent mb-4 block">Data Services</span>
          <h2 className="section-title mb-4">
            Data-driven intelligence at scale
          </h2>
          <p className="section-subtitle">
            Comprehensive data services from integration to analytics, empowering your organization with actionable insights.
          </p>
        </div>

        {/* Business Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              to={pillar.link}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pillar.offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{offering}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Typical customers:</span> {pillar.customers}
                </p>
                <ArrowRightIcon className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </Link>
          ))}
        </div>

        {/* Data Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCategories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              <h4 className="font-semibold text-foreground mb-4 text-sm group-hover:text-accent transition-colors">
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/data-services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            Explore all data services
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataServices;
