import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Package } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StickyDemoBanner from '../components/layout/StickyDemoBanner';
import { productsData } from '@/data/productsData';

// Google-style product icons with Material Symbols
const productIcons: Record<string, { icon: string; color: string }> = {
  'cribro': { icon: 'database', color: 'bg-[#4285f4]' },
  'cash-complete': { icon: 'account_balance_wallet', color: 'bg-[#34a853]' },
  'idea-wave': { icon: 'lightbulb', color: 'bg-[#f9ab00]' },
  'bluecanary': { icon: 'school', color: 'bg-[#ea4335]' },
  'blueprime': { icon: 'trending_up', color: 'bg-[#a142f4]' },
  'simplex': { icon: 'confirmation_number', color: 'bg-[#00acc1]' },
  'ticketing': { icon: 'local_activity', color: 'bg-[#ff6d00]' },
  'ecommerce-tool': { icon: 'shopping_cart', color: 'bg-[#0d904f]' },
  'scheduling': { icon: 'calendar_month', color: 'bg-[#1a73e8]' },
  'payroll': { icon: 'payments', color: 'bg-[#d93025]' },
};

const ProductsIndex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return productsData;
    const q = searchQuery.toLowerCase();
    return productsData.filter(
      (product) =>
        product.shortTitle.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border/50 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-16 text-center">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              Proprietary Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Enterprise-Ready Solutions Built for Scale
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our suite of proprietary products addresses critical business challenges across
              data management, operations, innovation, and customer engagement.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products by name or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 md:py-24">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Package className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground text-sm">
                  Try adjusting your search to find what you are looking for.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-accent text-sm font-medium hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const iconData = productIcons[product.slug] || { icon: 'apps', color: 'bg-[#4285f4]' };
                  return (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl ${iconData.color} flex items-center justify-center mb-5`}>
                        <span className="material-symbols-outlined text-white text-2xl">
                          {iconData.icon}
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
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Not sure which product fits your needs?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our experts can help you identify the right solutions for your business challenges.
              Schedule a free consultation today.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-[#1a73e8] font-medium hover:bg-white/90 transition-colors"
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
