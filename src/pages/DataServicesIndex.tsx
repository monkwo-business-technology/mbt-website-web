import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Database } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { dataServicesData } from '@/data/dataServicesData';

const DataServicesIndex: React.FC = () => {
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
              <span className="text-foreground font-medium">Data & Analytics Services</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Data & Analytics</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Data-Driven Intelligence at Scale
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your enterprise data into actionable insights. From data warehousing to BI dashboards, 
                we deliver comprehensive analytics solutions that power informed decision-making.
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Data Services</h2>
              <p className="text-muted-foreground max-w-2xl">
                Comprehensive data and analytics capabilities to help you harness the full potential of your data assets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataServicesData.map((service) => (
                <Link
                  key={service.slug}
                  to={`/data-services/${service.slug}`}
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

        {/* Key Capabilities */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end data capabilities that drive business value
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Data Management', items: ['ETL pipeline design', 'Real-time integration', 'API-based integration', 'Data synchronization', 'Metadata management'] },
                { title: 'Analytics & Insights', items: ['BI dashboard development', 'Interactive reporting', 'Custom visualization', 'Real-time analytics', 'Executive reports'] },
                { title: 'Data Engineering', items: ['Data lakes & warehouses', 'Spark implementation', 'Batch processing', 'Stream processing', 'Query optimization'] },
                { title: 'Security & Strategy', items: ['Access control (RBAC)', 'Identity management', 'Strategic roadmaps', 'Data monetization', 'Compliance'] },
              ].map((category) => (
                <div key={category.title} className="bg-card rounded-xl p-6 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to unlock the power of your data?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Partner with Monkwo to build a data-driven organization that makes smarter, faster decisions.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Start Your Data Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataServicesIndex;
