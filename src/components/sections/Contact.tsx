import React from 'react';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-sm font-medium text-accent mb-4 block">Get Started</span>
          <h2 className="section-title mb-4">
            Let's build something great together
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Ready to transform your business with intelligent technology solutions? 
            Our team is here to help you navigate your digital journey.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-left">
              <h3 className="font-semibold text-foreground mb-2">Schedule a Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free consultation to discuss your project requirements and explore solutions.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
              >
                Book a call
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-left">
              <h3 className="font-semibold text-foreground mb-2">Send us a Message</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Have a question or want to learn more? Drop us a message and we'll respond promptly.
              </p>
              <a
                href="mailto:info@monkwo.com"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
              >
                info@monkwo.com
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Ready to accelerate your digital transformation?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Join the enterprises that trust Monkwo for their mission-critical technology initiatives.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-all duration-200"
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
