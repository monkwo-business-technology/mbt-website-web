import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StickyDemoBanner from '../components/layout/StickyDemoBanner';
import { productsData } from '@/data/productsData';

const ProductsIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent mb-4 block">Proprietary Products</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Enterprise-ready solutions built for scale
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our suite of proprietary products addresses critical business challenges across
                data management, operations, innovation, and customer engagement, delivering
                measurable value from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5`}>
                    <span className="text-white font-bold text-lg">
                      {product.shortTitle.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {product.shortTitle}
                  </h3>

                  <p className="text-sm text-accent font-medium mb-3">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Not sure which product fits your needs?
            </h2>
            <p className="text-background/70 mb-8 max-w-2xl mx-auto">
              Our experts can help you identify the right solutions for your business challenges.
              Schedule a free consultation today.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default ProductsIndex;
