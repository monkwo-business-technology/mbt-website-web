import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { getAIServiceBySlug, aiServicesData } from '@/data/aiServicesData';

const AIServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getAIServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/ai-services" replace />;
  }

  const currentIndex = aiServicesData.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? aiServicesData[currentIndex - 1] : null;
  const nextService = currentIndex < aiServicesData.length - 1 ? aiServicesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <div className="bg-secondary/30 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link to="/ai-services" className="text-muted-foreground hover:text-foreground transition-colors">AI Services</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{service.shortTitle}</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent mb-4 block">Artificial Intelligence Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{service.tagline}</p>
              <p className="text-base text-muted-foreground/80">{service.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/ai-services" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> All AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl">{service.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="relative bg-card border border-border/50 rounded-xl p-6">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">{step.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {service.technologies && (
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {prevService ? (
                <Link to={`/ai-services/${prevService.slug}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <span className="text-xs block mb-1">Previous</span>
                    <span className="font-medium text-foreground">{prevService.shortTitle}</span>
                  </div>
                </Link>
              ) : <div />}
              {nextService ? (
                <Link to={`/ai-services/${nextService.slug}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="text-right">
                    <span className="text-xs block mb-1">Next</span>
                    <span className="font-medium text-foreground">{nextService.shortTitle}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to leverage AI?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our {service.shortTitle.toLowerCase()} solutions can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ai-services" className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors">
                Explore All AI Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServiceDetailPage;
