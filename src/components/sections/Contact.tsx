import React from 'react';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[#202124]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-sm font-medium text-[#1a73e8] dark:text-primary mb-4 block">Get Started</span>
          <h2 className="section-title mb-4">
            Let's build something great together
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Ready to transform your business with intelligent technology solutions? 
            Our team is here to help you navigate your digital journey.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white dark:bg-[#292a2d] rounded-2xl p-6 border border-[#dadce0] dark:border-[#3c4043] text-left">
              <h3 className="font-bold text-[#202124] dark:text-white mb-2" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Schedule a Consultation</h3>
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-4">
                Book a free consultation to discuss your project requirements and explore solutions.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] dark:text-primary hover:text-[#174ea6] transition-colors duration-200"
              >
                Book a call
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            
            <div className="bg-white dark:bg-[#292a2d] rounded-2xl p-6 border border-[#dadce0] dark:border-[#3c4043] text-left">
              <h3 className="font-bold text-[#202124] dark:text-white mb-2" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Send us a Message</h3>
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-4">
                Have a question or want to learn more? Drop us a message and we'll respond promptly.
              </p>
              <a
                href="mailto:info@monkwo.com"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] dark:text-primary hover:text-[#174ea6] transition-colors duration-200"
              >
                info@monkwo.com
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1a73e8] rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
              Ready to accelerate your digital transformation?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Join the enterprises that trust Monkwo for their mission-critical technology initiatives.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1a73e8] font-medium hover:bg-[#f8f9fa] shadow-sm hover:shadow-md transition-all duration-200" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
