import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import StickyDemoBanner from '../layout/StickyDemoBanner';
import { getProductBySlug, productsData } from '@/data/productsData';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const currentIndex = productsData.findIndex(p => p.slug === slug);
  const prevProduct = currentIndex > 0 ? productsData[currentIndex - 1] : null;
  const nextProduct = currentIndex < productsData.length - 1 ? productsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">
                    {product.shortTitle.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-accent block">
                  Proprietary Products
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {product.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground">
                Comprehensive capabilities designed to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground">
                A proven methodology that delivers results, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.process.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="p-6 rounded-2xl bg-card border border-border/50 h-full">
                    <div className="text-4xl font-bold text-accent/20 mb-4">
                      {String(step.step).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < product.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-border">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-4">
                  Why Choose Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  Partner with a team that understands your challenges and delivers measurable results.
                </p>
                <div className="space-y-4">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how {product.shortTitle.toLowerCase()} can transform your business.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors w-full"
                >
                  Schedule a Consultation
                </a>

                {product.technologies && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Technologies we use</p>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Between Products */}
        <section className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {prevProduct ? (
                <Link
                  to={`/products/${prevProduct.slug}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1">Previous</p>
                    <p className="font-medium text-foreground">{prevProduct.shortTitle}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProduct && (
                <Link
                  to={`/products/${nextProduct.slug}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1">Next</p>
                    <p className="font-medium text-foreground">{nextProduct.shortTitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 md:py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's build something great together
            </h2>
            <p className="text-background/70 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with {product.shortTitle.toLowerCase()}?
              Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@monkwo.com"
                className="inline-flex items-center px-8 py-3 rounded-full border border-background/30 text-background font-medium hover:bg-background/10 transition-colors"
              >
                info@monkwo.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default ProductDetailPage;
