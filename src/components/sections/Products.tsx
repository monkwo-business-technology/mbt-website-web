import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const products = [
  {
    name: 'Cribro',
    slug: 'cribro',
    tagline: 'Data Quality & Master Data',
    description: 'A tool designed for ensuring data quality and managing master data efficiently across your enterprise.',
    icon: 'database',
    iconBg: 'bg-[#e8f0fe] dark:bg-[#1a73e8]/15',
    iconColor: 'text-[#1a73e8] dark:text-[#8ab4f8]',
  },
  {
    name: 'Cash Complete',
    slug: 'cash-complete',
    tagline: 'Cash Inventory Management',
    description: 'A comprehensive solution for managing cash inventory across various systems and branches.',
    icon: 'account_balance_wallet',
    iconBg: 'bg-[#e6f4ea] dark:bg-[#34a853]/15',
    iconColor: 'text-[#34a853] dark:text-[#81c995]',
  },
  {
    name: 'Idea Wave',
    slug: 'idea-wave',
    tagline: 'Innovation Management',
    description: 'A platform for managing and streamlining the idea generation and innovation process.',
    icon: 'lightbulb',
    iconBg: 'bg-[#fef7e0] dark:bg-[#fbbc04]/15',
    iconColor: 'text-[#f9ab00] dark:text-[#fdd663]',
  },
  {
    name: 'Bluecanary',
    slug: 'bluecanary',
    tagline: 'E-Learning Platform',
    description: 'An e-learning platform that supports interactive and adaptive learning experiences.',
    icon: 'school',
    iconBg: 'bg-[#fce8e6] dark:bg-[#ea4335]/15',
    iconColor: 'text-[#ea4335] dark:text-[#f28b82]',
  },
  {
    name: 'Blueprime',
    slug: 'blueprime',
    tagline: 'Sales Enhancement',
    description: 'A tool for improving sales processes and enhancing customer engagement strategies.',
    icon: 'trending_up',
    iconBg: 'bg-[#f3e8fd] dark:bg-[#a142f4]/15',
    iconColor: 'text-[#a142f4] dark:text-[#d7aefb]',
  },
  {
    name: 'Simplex',
    slug: 'simplex',
    tagline: 'Voucher Management',
    description: 'A system for managing voucher issuance, redemption, and tracking with full visibility.',
    icon: 'confirmation_number',
    iconBg: 'bg-[#e0f7fa] dark:bg-[#00acc1]/15',
    iconColor: 'text-[#00acc1] dark:text-[#4dd0e1]',
  },
];

const additionalProducts = [
  { name: 'Ticketing Application', slug: 'ticketing', description: 'Support management tool for customer and internal tickets', icon: 'support_agent' },
  { name: 'E-Commerce Tool', slug: 'ecommerce-tool', description: 'Customizable application for building online stores', icon: 'shopping_cart' },
  { name: 'Scheduling Application', slug: 'scheduling', description: 'Calendar-based tool for efficient resource management', icon: 'calendar_month' },
  { name: 'Payroll System', slug: 'payroll', description: 'Payroll management for automating salary calculations', icon: 'payments' },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-white dark:bg-[#202124]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-[#1a73e8] dark:text-primary mb-4 block">Proprietary Products</span>
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
              className="group bg-white dark:bg-[#292a2d] rounded-2xl p-6 border border-[#dadce0] dark:border-[#3c4043] hover:border-[#1a73e8]/30 dark:hover:border-[#8ab4f8]/30 hover:shadow-lg transition-all duration-200"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center mb-5`}>
                <span className={`material-symbols-outlined text-[24px] ${product.iconColor}`}>
                  {product.icon}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="mb-3">
                <h3 className="text-lg font-medium text-[#202124] dark:text-white mb-1" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
                  {product.name}
                </h3>
                <span className="text-xs font-medium text-[#1a73e8] dark:text-[#8ab4f8]" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                  {product.tagline}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed mb-5" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                {product.description}
              </p>

              {/* CTA */}
              <div className="pt-4 border-t border-[#dadce0] dark:border-[#3c4043]">
                <Link
                  to={`/products/${product.slug}`}
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:text-[#174ea6] dark:hover:text-[#aecbfa] transition-colors duration-200"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products */}
        <div className="bg-[#f8f9fa] dark:bg-[#28292a] rounded-2xl p-8 border border-[#dadce0] dark:border-[#3c4043]">
          <h3 className="text-lg font-medium text-[#202124] dark:text-white mb-6" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
            Additional Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProducts.map((product) => (
              <Link key={product.name} to={`/products/${product.slug}`} className="group flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#3c4043] border border-[#dadce0] dark:border-[#5f6368] flex items-center justify-center flex-shrink-0 group-hover:border-[#1a73e8] dark:group-hover:border-[#8ab4f8] transition-colors">
                  <span className="material-symbols-outlined text-[20px] text-[#5f6368] dark:text-[#9aa0a6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                    {product.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-[#202124] dark:text-white mb-1 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors duration-200 text-sm" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
