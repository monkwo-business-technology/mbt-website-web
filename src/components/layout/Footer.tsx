import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      { label: 'Custom Development', href: '/services/software-development' },
      { label: 'Data Analytics', href: '/data-services' },
      { label: 'AI Services', href: '/ai-services' },
      { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
    ],
    products: [
      { label: 'CRIBRO', href: '/products/cribro' },
      { label: 'CASH COMPLETE', href: '/products/cash-complete' },
      { label: 'BLUECANARY', href: '/products/bluecanary' },
      { label: 'BLUEPRIME', href: '/products/blueprime' },
    ],
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Blog', href: '#' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-semibold">Monkwo</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions and data-driven insights.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Monkwo Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
