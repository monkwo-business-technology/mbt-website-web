import React from 'react';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const products = [
  {
    name: 'CRIBRO',
    tagline: 'Data Quality & Master Data',
    description: 'A tool designed for ensuring data quality and managing master data efficiently across your enterprise.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'CASH COMPLETE',
    tagline: 'Cash Inventory Management',
    description: 'A comprehensive solution for managing cash inventory across various systems and branches.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'IDEA WAVE',
    tagline: 'Innovation Management',
    description: 'A platform for managing and streamlining the idea generation and innovation process.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    name: 'BLUECANARY',
    tagline: 'E-Learning Platform',
    description: 'An e-learning platform that supports interactive and adaptive learning experiences.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'BLUEPRIME',
    tagline: 'Sales Enhancement',
    description: 'A tool for improving sales processes and enhancing customer engagement strategies.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    name: 'SIMPLEX',
    tagline: 'Voucher Management',
    description: 'A system for managing voucher issuance, redemption, and tracking with full visibility.',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const additionalProducts = [
  { name: 'Ticketing Application', description: 'Support management tool for customer and internal tickets' },
  { name: 'E-Commerce Tool', description: 'Customizable application for building online stores' },
  { name: 'Scheduling Application', description: 'Calendar-based tool for efficient resource management' },
  { name: 'Payroll System', description: 'Payroll management for automating salary calculations' },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent mb-4 block">Proprietary Products</span>
          <h2 className="section-title mb-4">
            Enterprise-ready solutions
          </h2>
          <p className="section-subtitle">
            Battle-tested products built from years of enterprise experience, ready to deploy and customize for your needs.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5`}>
                <span className="text-white font-bold text-lg">
                  {product.name.charAt(0)}
                </span>
              </div>
              
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <span className="text-xs font-medium text-accent">
                  {product.tagline}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="mt-5 pt-4 border-t border-border/50">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products */}
        <div className="bg-secondary/50 rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Additional Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProducts.map((product) => (
              <div key={product.name} className="group">
                <h4 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
