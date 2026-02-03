import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRightIcon } from '../icons/ServiceIcons';
import { StartProjectDialog } from '../forms/StartProjectDialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  SVG Infographics – large monochrome illustrations for each slide  */
/* ------------------------------------------------------------------ */

const DataAnalyticsSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 480 400" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard frame */}
    <rect x="40" y="30" width="400" height="280" rx="16" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <rect x="40" y="30" width="400" height="40" rx="16" stroke="currentColor" strokeWidth="2" opacity="0.15" fill="currentColor" fillOpacity="0.04" />
    <circle cx="68" cy="50" r="6" fill="currentColor" opacity="0.2" />
    <circle cx="88" cy="50" r="6" fill="currentColor" opacity="0.15" />
    <circle cx="108" cy="50" r="6" fill="currentColor" opacity="0.1" />
    {/* Bar chart */}
    <rect x="75" y="210" width="30" height="70" rx="4" fill="currentColor" opacity="0.15" />
    <rect x="115" y="170" width="30" height="110" rx="4" fill="currentColor" opacity="0.2" />
    <rect x="155" y="130" width="30" height="150" rx="4" fill="currentColor" opacity="0.25" />
    <rect x="195" y="155" width="30" height="125" rx="4" fill="currentColor" opacity="0.18" />
    <rect x="235" y="105" width="30" height="175" rx="4" fill="currentColor" opacity="0.3" />
    <rect x="275" y="140" width="30" height="140" rx="4" fill="currentColor" opacity="0.22" />
    {/* Trend line */}
    <polyline points="90,200 130,160 170,120 210,145 250,95 290,130" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" fill="none" />
    <circle cx="90" cy="200" r="4" fill="currentColor" opacity="0.5" />
    <circle cx="130" cy="160" r="4" fill="currentColor" opacity="0.5" />
    <circle cx="170" cy="120" r="4" fill="currentColor" opacity="0.5" />
    <circle cx="210" cy="145" r="4" fill="currentColor" opacity="0.5" />
    <circle cx="250" cy="95" r="4" fill="currentColor" opacity="0.5" />
    <circle cx="290" cy="130" r="4" fill="currentColor" opacity="0.5" />
    {/* Side panel - pie chart */}
    <rect x="330" y="90" width="90" height="90" rx="12" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <circle cx="375" cy="135" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="none" />
    <path d="M375 107 A28 28 0 0 1 403 135 L375 135 Z" fill="currentColor" opacity="0.25" />
    <path d="M375 135 A28 28 0 0 1 354 115 L375 135 Z" fill="currentColor" opacity="0.15" />
    {/* Side panel - metric */}
    <rect x="330" y="195" width="90" height="50" rx="12" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="345" y="210" width="40" height="6" rx="3" fill="currentColor" opacity="0.15" />
    <rect x="345" y="225" width="60" height="8" rx="4" fill="currentColor" opacity="0.25" />
    {/* Floating elements */}
    <rect x="60" y="330" width="120" height="45" rx="10" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <rect x="75" y="342" width="50" height="5" rx="2.5" fill="currentColor" opacity="0.12" />
    <rect x="75" y="355" width="80" height="7" rx="3.5" fill="currentColor" opacity="0.2" />
    <rect x="220" y="330" width="120" height="45" rx="10" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <circle cx="250" cy="352" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="270" y="345" width="50" height="5" rx="2.5" fill="currentColor" opacity="0.12" />
    <rect x="270" y="355" width="35" height="5" rx="2.5" fill="currentColor" opacity="0.18" />
  </svg>
);

const AIBrainSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 480 400" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Central brain / neural network */}
    <ellipse cx="240" cy="185" rx="110" ry="95" stroke="currentColor" strokeWidth="2" opacity="0.15" />
    <ellipse cx="240" cy="185" rx="80" ry="68" stroke="currentColor" strokeWidth="1.5" opacity="0.1" strokeDasharray="6 4" />
    {/* Neural nodes */}
    <circle cx="200" cy="150" r="12" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="currentColor" fillOpacity="0.05" />
    <circle cx="280" cy="150" r="12" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="currentColor" fillOpacity="0.05" />
    <circle cx="240" cy="120" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" fill="currentColor" fillOpacity="0.05" />
    <circle cx="240" cy="200" r="14" stroke="currentColor" strokeWidth="2" opacity="0.35" fill="currentColor" fillOpacity="0.08" />
    <circle cx="190" cy="210" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" fill="currentColor" fillOpacity="0.05" />
    <circle cx="290" cy="210" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" fill="currentColor" fillOpacity="0.05" />
    <circle cx="220" cy="170" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="currentColor" fillOpacity="0.04" />
    <circle cx="260" cy="175" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="currentColor" fillOpacity="0.04" />
    <circle cx="240" cy="250" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" fill="currentColor" fillOpacity="0.05" />
    {/* Connections */}
    <line x1="200" y1="150" x2="240" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <line x1="280" y1="150" x2="240" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <line x1="200" y1="150" x2="220" y2="170" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="280" y1="150" x2="260" y2="175" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="220" y1="170" x2="240" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="260" y1="175" x2="240" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="190" y1="210" x2="240" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="290" y1="210" x2="240" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="240" y1="200" x2="240" y2="250" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <line x1="190" y1="210" x2="200" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    <line x1="290" y1="210" x2="280" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    {/* Outer data inputs */}
    <rect x="60" y="100" width="60" height="35" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="70" y="110" width="30" height="4" rx="2" fill="currentColor" opacity="0.15" />
    <rect x="70" y="120" width="40" height="4" rx="2" fill="currentColor" opacity="0.1" />
    <line x1="120" y1="118" x2="190" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
    <rect x="360" y="100" width="60" height="35" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="370" y="110" width="30" height="4" rx="2" fill="currentColor" opacity="0.15" />
    <rect x="370" y="120" width="40" height="4" rx="2" fill="currentColor" opacity="0.1" />
    <line x1="360" y1="118" x2="292" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
    {/* Output nodes */}
    <rect x="80" y="280" width="80" height="40" rx="10" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="95" y="293" width="50" height="5" rx="2.5" fill="currentColor" opacity="0.12" />
    <rect x="95" y="303" width="35" height="5" rx="2.5" fill="currentColor" opacity="0.18" />
    <line x1="150" y1="293" x2="200" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
    <rect x="320" y="280" width="80" height="40" rx="10" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="335" y="293" width="50" height="5" rx="2.5" fill="currentColor" opacity="0.12" />
    <rect x="335" y="303" width="35" height="5" rx="2.5" fill="currentColor" opacity="0.18" />
    <line x1="330" y1="293" x2="280" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
    {/* Pulse rings */}
    <circle cx="240" cy="200" r="30" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    <circle cx="240" cy="200" r="50" stroke="currentColor" strokeWidth="0.75" opacity="0.05" />
    {/* Labels */}
    <rect x="175" y="350" width="130" height="35" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    <rect x="195" y="362" width="90" height="6" rx="3" fill="currentColor" opacity="0.15" />
  </svg>
);

const CloudInfraSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 480 400" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Cloud shape */}
    <path d="M160 160 C160 120, 200 90, 240 100 C260 70, 320 70, 340 100 C380 95, 400 120, 390 155 C410 165, 410 195, 385 205 L115 205 C90 195, 85 165, 110 155 C100 130, 120 115, 160 160 Z" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="currentColor" fillOpacity="0.03" />
    {/* Server racks below cloud */}
    <rect x="120" y="235" width="70" height="85" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="currentColor" fillOpacity="0.03" />
    <rect x="130" y="248" width="50" height="8" rx="2" fill="currentColor" opacity="0.12" />
    <circle cx="172" cy="252" r="3" fill="currentColor" opacity="0.25" />
    <rect x="130" y="262" width="50" height="8" rx="2" fill="currentColor" opacity="0.1" />
    <circle cx="172" cy="266" r="3" fill="currentColor" opacity="0.2" />
    <rect x="130" y="276" width="50" height="8" rx="2" fill="currentColor" opacity="0.08" />
    <circle cx="172" cy="280" r="3" fill="currentColor" opacity="0.15" />
    <rect x="130" y="296" width="50" height="8" rx="2" fill="currentColor" opacity="0.06" />
    <rect x="205" y="235" width="70" height="85" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="currentColor" fillOpacity="0.03" />
    <rect x="215" y="248" width="50" height="8" rx="2" fill="currentColor" opacity="0.12" />
    <circle cx="257" cy="252" r="3" fill="currentColor" opacity="0.25" />
    <rect x="215" y="262" width="50" height="8" rx="2" fill="currentColor" opacity="0.1" />
    <circle cx="257" cy="266" r="3" fill="currentColor" opacity="0.2" />
    <rect x="215" y="276" width="50" height="8" rx="2" fill="currentColor" opacity="0.08" />
    <circle cx="257" cy="280" r="3" fill="currentColor" opacity="0.15" />
    <rect x="215" y="296" width="50" height="8" rx="2" fill="currentColor" opacity="0.06" />
    <rect x="290" y="235" width="70" height="85" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="currentColor" fillOpacity="0.03" />
    <rect x="300" y="248" width="50" height="8" rx="2" fill="currentColor" opacity="0.12" />
    <circle cx="342" cy="252" r="3" fill="currentColor" opacity="0.25" />
    <rect x="300" y="262" width="50" height="8" rx="2" fill="currentColor" opacity="0.1" />
    <circle cx="342" cy="266" r="3" fill="currentColor" opacity="0.2" />
    <rect x="300" y="276" width="50" height="8" rx="2" fill="currentColor" opacity="0.08" />
    <circle cx="342" cy="280" r="3" fill="currentColor" opacity="0.15" />
    <rect x="300" y="296" width="50" height="8" rx="2" fill="currentColor" opacity="0.06" />
    {/* Connection lines from cloud to servers */}
    <line x1="155" y1="205" x2="155" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="4 3" />
    <line x1="240" y1="205" x2="240" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="4 3" />
    <line x1="325" y1="205" x2="325" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="4 3" />
    {/* Devices at bottom */}
    <rect x="90" y="345" width="45" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="100" y="353" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
    <rect x="100" y="360" width="15" height="3" rx="1.5" fill="currentColor" opacity="0.08" />
    <rect x="218" y="340" width="45" height="55" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="228" y="350" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
    <rect x="228" y="358" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.08" />
    <rect x="228" y="375" width="25" height="8" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <rect x="345" y="345" width="55" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
    <rect x="355" y="353" width="35" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
    <rect x="355" y="360" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.08" />
    {/* Lines from servers to devices */}
    <line x1="155" y1="320" x2="112" y2="345" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="3 3" />
    <line x1="240" y1="320" x2="240" y2="340" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="3 3" />
    <line x1="325" y1="320" x2="372" y2="345" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="3 3" />
    {/* Shield icon inside cloud */}
    <path d="M235 130 L235 155 C235 165, 240 170, 245 173 C250 170, 255 165, 255 155 L255 130 L245 125 L235 130 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="currentColor" fillOpacity="0.05" />
    <polyline points="240,150 244,155 254,142" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const EnterpriseSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 480 400" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Central hub */}
    <circle cx="240" cy="190" r="45" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="currentColor" fillOpacity="0.04" />
    <circle cx="240" cy="190" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.15" fill="currentColor" fillOpacity="0.06" />
    <rect x="230" y="182" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.25" fill="none" />
    <line x1="240" y1="178" x2="240" y2="182" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    {/* Orbiting satellite nodes */}
    {/* Top - Analytics */}
    <circle cx="240" cy="70" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.15" fill="currentColor" fillOpacity="0.03" />
    <rect x="225" y="60" width="30" height="20" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="230" y="65" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.15" />
    <rect x="230" y="72" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
    <line x1="240" y1="100" x2="240" y2="145" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    {/* Right - CRM */}
    <circle cx="370" cy="190" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.15" fill="currentColor" fillOpacity="0.03" />
    <circle cx="365" cy="183" r="6" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="378" cy="183" r="6" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <rect x="358" y="193" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.12" />
    <line x1="340" y1="190" x2="285" y2="190" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    {/* Bottom - Finance */}
    <circle cx="240" cy="310" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.15" fill="currentColor" fillOpacity="0.03" />
    <rect x="228" y="300" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="228" y1="307" x2="252" y2="307" stroke="currentColor" strokeWidth="1" opacity="0.12" />
    <rect x="233" y="311" width="14" height="3" rx="1.5" fill="currentColor" opacity="0.12" />
    <line x1="240" y1="280" x2="240" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    {/* Left - Operations */}
    <circle cx="110" cy="190" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.15" fill="currentColor" fillOpacity="0.03" />
    <path d="M103 185 L110 175 L117 185" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="none" strokeLinecap="round" />
    <rect x="100" y="190" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.12" />
    <rect x="103" y="197" width="14" height="3" rx="1.5" fill="currentColor" opacity="0.08" />
    <line x1="140" y1="190" x2="195" y2="190" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
    {/* Diagonal connections */}
    <circle cx="150" cy="100" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.12" fill="currentColor" fillOpacity="0.02" />
    <rect x="140" y="93" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="168" y1="115" x2="205" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="4 3" />
    <circle cx="330" cy="100" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.12" fill="currentColor" fillOpacity="0.02" />
    <rect x="320" y="93" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="312" y1="115" x2="275" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="4 3" />
    <circle cx="150" cy="280" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.12" fill="currentColor" fillOpacity="0.02" />
    <rect x="140" y="273" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="168" y1="265" x2="205" y2="225" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="4 3" />
    <circle cx="330" cy="280" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.12" fill="currentColor" fillOpacity="0.02" />
    <rect x="320" y="273" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="312" y1="265" x2="275" y2="225" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="4 3" />
    {/* Outer ring */}
    <circle cx="240" cy="190" r="160" stroke="currentColor" strokeWidth="1" opacity="0.05" strokeDasharray="8 6" />
    {/* Bottom label */}
    <rect x="170" y="365" width="140" height="30" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
    <rect x="195" y="376" width="90" height="6" rx="3" fill="currentColor" opacity="0.12" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Slide data                                                        */
/* ------------------------------------------------------------------ */

interface HeroSlide {
  badge: string;
  headline: string;
  highlight: string;
  subheadline: string;
  Illustration: React.FC<{ className?: string }>;
}

const slides: HeroSlide[] = [
  {
    badge: 'Technology Partner for Enterprise Growth',
    headline: 'Transform your business with',
    highlight: 'intelligent solutions',
    subheadline: 'From data analytics to AI-powered applications, we help enterprises modernize, innovate, and scale with confidence.',
    Illustration: DataAnalyticsSVG,
  },
  {
    badge: 'AI-Powered Innovation',
    headline: 'Accelerate decisions with',
    highlight: 'artificial intelligence',
    subheadline: 'Deploy practical, responsible AI across your organisation — from predictive analytics to intelligent automation and NLP.',
    Illustration: AIBrainSVG,
  },
  {
    badge: 'Secure & Scalable Infrastructure',
    headline: 'Build resilience with',
    highlight: 'cloud-native platforms',
    subheadline: 'Migrate, modernise, and manage infrastructure on any cloud with enterprise-grade security and DevOps best practices.',
    Illustration: CloudInfraSVG,
  },
  {
    badge: 'End-to-End Digital Transformation',
    headline: 'Unify operations with',
    highlight: 'enterprise solutions',
    subheadline: 'Connect every department with integrated ERP, CRM, and analytics — delivering a single source of truth across your business.',
    Illustration: EnterpriseSVG,
  },
];

const AUTOPLAY_MS = 6000;

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number, dir?: 'right' | 'left') => {
      if (isTransitioning || index === current) return;
      setDirection(dir ?? (index > current ? 'right' : 'left'));
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 400);
    },
    [current, isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'left');
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-[#202124] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#e8f0fe] dark:bg-[#1a73e8]/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#fce8e6] dark:bg-[#d93025]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---- Text column ---- */}
          <div
            key={`text-${current}`}
            className={`transition-all duration-500 ease-out ${
              isTransitioning
                ? `opacity-0 ${direction === 'right' ? '-translate-x-8' : 'translate-x-8'}`
                : 'opacity-100 translate-x-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f0fe] dark:bg-[#1a73e8]/12 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1a73e8] animate-pulse" />
              <span className="text-sm font-medium text-[#1967d2] dark:text-primary">{slide.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-[#202124] dark:text-white leading-[1.1] mb-6" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
              {slide.headline}{' '}
              <span className="gradient-text">{slide.highlight}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#5f6368] dark:text-[#9aa0a6] max-w-xl mb-10 leading-relaxed">
              {slide.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <StartProjectDialog>
                <button className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1a73e8] text-white font-medium hover:bg-[#185abc] active:bg-[#174ea6] shadow-sm hover:shadow-md transition-all duration-200" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
                  Start a Project
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </StartProjectDialog>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#e8f0fe] text-[#1967d2] dark:bg-[#1a73e8]/12 dark:text-primary font-medium hover:bg-[#d2e3fc] transition-all duration-200" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
              >
                Explore Services
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* ---- Illustration column ---- */}
          <div
            key={`img-${current}`}
            className={`hidden lg:flex items-center justify-center transition-all duration-500 ease-out ${
              isTransitioning
                ? `opacity-0 ${direction === 'right' ? 'translate-x-12' : '-translate-x-12'}`
                : 'opacity-100 translate-x-0'
            }`}
          >
            <slide.Illustration className="w-full max-w-md text-foreground" />
          </div>
        </div>

        {/* ---- Navigation controls ---- */}
        <div className="mt-16 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-[#1a73e8]' : 'w-2 bg-[#dadce0] dark:bg-[#5f6368] hover:bg-[#9aa0a6]'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="p-2 rounded-full border border-[#dadce0] dark:border-[#5f6368] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="p-2 rounded-full border border-[#dadce0] dark:border-[#5f6368] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-[#dadce0] dark:border-[#3c4043]">
          <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-6">Trusted by leading enterprises across industries</p>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap opacity-50">
            <span className="text-lg font-bold text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Banking</span>
            <span className="text-lg font-bold text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Telecom</span>
            <span className="text-lg font-bold text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Healthcare</span>
            <span className="text-lg font-bold text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Retail</span>
            <span className="text-lg font-bold text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>Fintech</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
