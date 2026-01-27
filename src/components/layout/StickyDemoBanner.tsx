import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ArrowRightIcon } from '../icons/ServiceIcons';

const StickyDemoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling past ~80% of viewport height (hero section)
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-fade-in">
      <div className="bg-foreground/95 backdrop-blur-md border-t border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Message */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="hidden sm:flex w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <p className="text-sm text-background font-medium truncate">
                <span className="hidden md:inline">Ready to transform your business? </span>
                Schedule a personalized demo today.
              </p>
            </div>

            {/* CTA and Close */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Request Demo
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-full text-background/60 hover:text-background hover:bg-background/10 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyDemoBanner;
