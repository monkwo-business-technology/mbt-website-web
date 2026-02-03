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
    <footer className="bg-[#f8f9fa] dark:bg-[#202124] text-[#5f6368] dark:text-[#e3e3e3]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#1a73e8] flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-[#202124] dark:text-white" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Monkwo</span>
            </div>
            <p className="text-[#5f6368] dark:text-[#9aa0a6] text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions and data-driven insights.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-[#202124] dark:text-white mb-4 text-sm" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-[#202124] dark:text-white mb-4 text-sm" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-[#202124] dark:text-white mb-4 text-sm" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#dadce0] dark:border-[#3c4043] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6]">
            &copy; {new Date().getFullYear()} Monkwo Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
