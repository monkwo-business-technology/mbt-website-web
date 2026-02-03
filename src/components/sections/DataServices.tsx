import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons/ServiceIcons';

/* ------------------------------------------------------------------ */
/*  Inline SVG Illustrations (monochrome, currentColor)               */
/* ------------------------------------------------------------------ */

const WarehouseSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left cylinder */}
    <ellipse cx="80" cy="100" rx="40" ry="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <path d="M40 100v60" stroke="currentColor" strokeWidth="1.5" />
    <path d="M120 100v60" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="80" cy="160" rx="40" ry="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <ellipse cx="80" cy="130" rx="40" ry="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    {/* Center cylinder */}
    <ellipse cx="200" cy="80" rx="40" ry="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <path d="M160 80v60" stroke="currentColor" strokeWidth="1.5" />
    <path d="M240 80v60" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="200" cy="140" rx="40" ry="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <ellipse cx="200" cy="110" rx="40" ry="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    {/* Right cylinder */}
    <ellipse cx="320" cy="100" rx="40" ry="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <path d="M280 100v60" stroke="currentColor" strokeWidth="1.5" />
    <path d="M360 100v60" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="320" cy="160" rx="40" ry="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <ellipse cx="320" cy="130" rx="40" ry="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    {/* Arrows converging down */}
    <path d="M80 174l120 46" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowW)" />
    <path d="M200 154v66" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowW)" />
    <path d="M320 174l-120 46" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowW)" />
    {/* Unified rectangle */}
    <rect x="120" y="230" width="160" height="60" rx="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <line x1="140" y1="250" x2="260" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="140" y1="262" x2="240" y2="262" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="140" y1="274" x2="220" y2="274" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <defs>
      <marker id="arrowW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0 0L8 3L0 6" fill="currentColor" opacity="0.6" />
      </marker>
    </defs>
  </svg>
);

const AnalyticsSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard frame */}
    <rect x="40" y="30" width="320" height="260" rx="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <line x1="40" y1="65" x2="360" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="60" cy="48" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="76" cy="48" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="92" cy="48" r="4" fill="currentColor" opacity="0.2" />
    {/* Bar chart panel */}
    <rect x="60" y="85" width="140" height="100" rx="6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
    <rect x="78" y="135" width="16" height="40" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="102" y="115" width="16" height="60" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="126" y="125" width="16" height="50" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="150" y="105" width="16" height="70" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="174" y="120" width="16" height="55" rx="2" fill="currentColor" fillOpacity="0.15" />
    {/* Line graph panel */}
    <rect x="220" y="85" width="120" height="100" rx="6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
    <polyline points="236,160 256,140 276,150 296,120 316,110 326,125" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    <polyline points="236,165 256,155 276,160 296,145 316,140 326,148" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
    {/* Donut chart panel */}
    <rect x="60" y="200" width="140" height="75" rx="6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
    <circle cx="110" cy="237" r="24" stroke="currentColor" strokeWidth="6" opacity="0.1" />
    <circle cx="110" cy="237" r="24" stroke="currentColor" strokeWidth="6" strokeDasharray="40 111" strokeDashoffset="0" opacity="0.4" />
    <circle cx="110" cy="237" r="24" stroke="currentColor" strokeWidth="6" strokeDasharray="25 126" strokeDashoffset="-40" opacity="0.25" />
    <rect x="148" y="225" width="36" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="148" y="237" width="28" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="148" y="249" width="32" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    {/* KPI panel */}
    <rect x="220" y="200" width="120" height="75" rx="6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
    <text x="246" y="235" fontSize="28" fontWeight="bold" fill="currentColor" opacity="0.3" fontFamily="monospace">87%</text>
    <rect x="240" y="252" width="80" height="5" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="240" y="252" width="58" height="5" rx="2" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const Customer360SVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Central person silhouette */}
    <circle cx="200" cy="130" r="28" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <path d="M160 200c0-22 18-40 40-40s40 18 40 40" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    {/* Outer ring */}
    <circle cx="200" cy="160" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" opacity="0.2" />
    {/* Source nodes */}
    <rect x="50" y="56" width="56" height="36" rx="6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <text x="62" y="79" fontSize="10" fill="currentColor" opacity="0.5" fontFamily="sans-serif">CRM</text>
    <line x1="106" y1="74" x2="172" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    <rect x="294" y="56" width="56" height="36" rx="6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <text x="302" y="79" fontSize="10" fill="currentColor" opacity="0.5" fontFamily="sans-serif">Billing</text>
    <line x1="294" y1="74" x2="228" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    <rect x="44" y="200" width="56" height="36" rx="6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <text x="47" y="223" fontSize="9" fill="currentColor" opacity="0.5" fontFamily="sans-serif">Support</text>
    <line x1="100" y1="218" x2="164" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    <rect x="300" y="200" width="56" height="36" rx="6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <text x="310" y="223" fontSize="10" fill="currentColor" opacity="0.5" fontFamily="sans-serif">Web</text>
    <line x1="300" y1="218" x2="236" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    <rect x="120" y="270" width="56" height="36" rx="6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <text x="128" y="293" fontSize="9" fill="currentColor" opacity="0.5" fontFamily="sans-serif">Social</text>
    <line x1="148" y1="270" x2="185" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    <rect x="224" y="270" width="56" height="36" rx="6" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <text x="230" y="293" fontSize="9" fill="currentColor" opacity="0.5" fontFamily="sans-serif">Mobile</text>
    <line x1="252" y1="270" x2="215" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    {/* Merge arrows (small triangles at center) */}
    <circle cx="200" cy="160" r="4" fill="currentColor" opacity="0.3" />
  </svg>
);

const GovernanceSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Central shield */}
    <path d="M200 50l80 36v72c0 56-34 96-80 118-46-22-80-62-80-118V86z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    {/* Checkmark inside shield */}
    <polyline points="170,155 192,177 232,132" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    {/* Connected document nodes */}
    <rect x="30" y="60" width="44" height="52" rx="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
    <line x1="38" y1="76" x2="66" y2="76" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="38" y1="86" x2="60" y2="86" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="38" y1="96" x2="64" y2="96" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="74" y1="86" x2="120" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="4 3" />

    <rect x="326" y="60" width="44" height="52" rx="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
    <line x1="334" y1="76" x2="362" y2="76" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="334" y1="86" x2="356" y2="86" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="334" y1="96" x2="360" y2="96" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="326" y1="86" x2="280" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="4 3" />

    <rect x="30" y="220" width="44" height="52" rx="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
    <line x1="38" y1="236" x2="66" y2="236" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="38" y1="246" x2="60" y2="246" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="38" y1="256" x2="64" y2="256" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="74" y1="246" x2="130" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="4 3" />

    <rect x="326" y="220" width="44" height="52" rx="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
    <line x1="334" y1="236" x2="362" y2="236" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="334" y1="246" x2="356" y2="246" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="334" y1="256" x2="360" y2="256" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="326" y1="246" x2="270" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="4 3" />
  </svg>
);

const IntegrationSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Top pipe */}
    <rect x="40" y="60" width="200" height="24" rx="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <circle cx="80" cy="72" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="100" cy="72" r="4" fill="currentColor" opacity="0.15" />
    <circle cx="120" cy="72" r="4" fill="currentColor" opacity="0.25" />
    <circle cx="140" cy="72" r="4" fill="currentColor" opacity="0.15" />
    <path d="M160 72h60" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowI)" />
    {/* Second pipe */}
    <rect x="40" y="110" width="200" height="24" rx="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <circle cx="80" cy="122" r="4" fill="currentColor" opacity="0.15" />
    <circle cx="100" cy="122" r="4" fill="currentColor" opacity="0.25" />
    <circle cx="120" cy="122" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="140" cy="122" r="4" fill="currentColor" opacity="0.15" />
    <path d="M160 122h60" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowI)" />
    {/* Third pipe */}
    <rect x="40" y="160" width="200" height="24" rx="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <circle cx="80" cy="172" r="4" fill="currentColor" opacity="0.25" />
    <circle cx="100" cy="172" r="4" fill="currentColor" opacity="0.15" />
    <circle cx="120" cy="172" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="140" cy="172" r="4" fill="currentColor" opacity="0.15" />
    <path d="M160 172h60" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowI)" />
    {/* Fourth pipe */}
    <rect x="40" y="210" width="200" height="24" rx="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <circle cx="80" cy="222" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="100" cy="222" r="4" fill="currentColor" opacity="0.15" />
    <circle cx="120" cy="222" r="4" fill="currentColor" opacity="0.25" />
    <circle cx="140" cy="222" r="4" fill="currentColor" opacity="0.15" />
    <path d="M160 222h60" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowI)" />
    {/* Convergence lines */}
    <path d="M240 72 L280 148" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    <path d="M240 122 L280 148" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    <path d="M240 172 L280 168" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    <path d="M240 222 L280 188" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    {/* Output pipe */}
    <rect x="280" y="148" width="90" height="40" rx="20" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <circle cx="310" cy="168" r="5" fill="currentColor" opacity="0.3" />
    <circle cx="330" cy="168" r="5" fill="currentColor" opacity="0.25" />
    <circle cx="350" cy="168" r="5" fill="currentColor" opacity="0.2" />
    <defs>
      <marker id="arrowI" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0 0L6 2.5L0 5" fill="currentColor" opacity="0.4" />
      </marker>
    </defs>
  </svg>
);

const EngineeringSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Bottom layer - Infrastructure */}
    <rect x="60" y="230" width="280" height="55" rx="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <text x="140" y="263" fontSize="11" fill="currentColor" opacity="0.35" fontFamily="sans-serif">Infrastructure</text>
    <circle cx="90" cy="257" r="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="310" cy="257" r="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Middle layer - Processing */}
    <rect x="80" y="160" width="240" height="55" rx="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <text x="152" y="193" fontSize="11" fill="currentColor" opacity="0.35" fontFamily="sans-serif">Processing</text>
    <rect x="100" y="172" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.25" fill="currentColor" fillOpacity="0.04" />
    <rect x="272" y="172" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.25" fill="currentColor" fillOpacity="0.04" />
    {/* Top layer - Orchestration */}
    <rect x="100" y="90" width="200" height="55" rx="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <text x="142" y="123" fontSize="11" fill="currentColor" opacity="0.35" fontFamily="sans-serif">Orchestration</text>
    {/* Connecting lines between layers */}
    <line x1="150" y1="145" x2="150" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="3 2" />
    <line x1="250" y1="145" x2="250" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="3 2" />
    <line x1="140" y1="215" x2="140" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="3 2" />
    <line x1="260" y1="215" x2="260" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="3 2" />
    {/* Top decorative nodes */}
    <circle cx="200" cy="55" r="16" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    <path d="M193 55l5 5 9-10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" fill="none" />
    <line x1="200" y1="71" x2="200" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="3 2" />
  </svg>
);

const SecuritySVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Concentric rings */}
    <circle cx="200" cy="150" r="110" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <circle cx="200" cy="150" r="85" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
    <circle cx="200" cy="150" r="60" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
    {/* Padlock body */}
    <rect x="172" y="140" width="56" height="44" rx="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    {/* Padlock shackle */}
    <path d="M182 140v-16a18 18 0 0136 0v16" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
    {/* Keyhole */}
    <circle cx="200" cy="158" r="6" fill="currentColor" opacity="0.25" />
    <rect x="198" y="162" width="4" height="10" rx="1" fill="currentColor" opacity="0.2" />
    {/* Key icon bottom-right */}
    <circle cx="300" cy="240" r="14" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
    <circle cx="300" cy="240" r="5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="305" y1="240" x2="336" y2="240" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="330" y1="240" x2="330" y2="248" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    <line x1="322" y1="240" x2="322" y2="246" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    {/* Connection lines from rings */}
    <line x1="120" y1="80" x2="155" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
    <line x1="280" y1="80" x2="245" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
    <line x1="110" y1="230" x2="148" y2="195" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
  </svg>
);

const MonetizationSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Diamond / gem shape */}
    <polygon points="200,60 260,130 200,210 140,130" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <line x1="200" y1="60" x2="200" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="140" y1="130" x2="260" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="200" y1="60" x2="140" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <line x1="200" y1="60" x2="260" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <line x1="200" y1="210" x2="140" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <line x1="200" y1="210" x2="260" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    {/* Upward-trending arrow */}
    <polyline points="280,260 300,220 320,230 350,170" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="350,170 340,178 348,182" fill="currentColor" opacity="0.35" />
    {/* Currency symbol */}
    <text x="55" y="180" fontSize="48" fontWeight="bold" fill="currentColor" opacity="0.12" fontFamily="serif">$</text>
    {/* Small decorative dots */}
    <circle cx="200" cy="130" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="200" cy="60" r="3" fill="currentColor" opacity="0.25" />
    <circle cx="200" cy="210" r="3" fill="currentColor" opacity="0.25" />
    <circle cx="140" cy="130" r="3" fill="currentColor" opacity="0.2" />
    <circle cx="260" cy="130" r="3" fill="currentColor" opacity="0.2" />
    {/* Base line */}
    <line x1="270" y1="270" x2="360" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data services inline data                                         */
/* ------------------------------------------------------------------ */

const dataServices = [
  {
    title: 'Data Warehousing & Lakehouse',
    slug: 'data-warehousing',
    writeup:
      'Build the analytical backbone of your enterprise. We design and implement modern data warehouses and lakehouse architectures that unify structured and unstructured data, enabling fast queries at petabyte scale with full governance.',
    features: [
      'Cloud-native warehouse design',
      'Lakehouse architecture',
      'Schema modelling & optimization',
      'Historical data migration',
    ],
    Illustration: WarehouseSVG,
  },
  {
    title: 'Enterprise Analytics & BI',
    slug: 'business-intelligence',
    writeup:
      'Turn raw data into executive-ready insights. We build interactive dashboards, automated reports, and self-service analytics platforms that empower every level of your organisation to make data-driven decisions in real time.',
    features: [
      'Interactive dashboards',
      'Automated reporting',
      'Self-service analytics',
      'KPI tracking frameworks',
    ],
    Illustration: AnalyticsSVG,
  },
  {
    title: 'Customer 360 & Golden Record',
    slug: 'customer-360',
    writeup:
      'Achieve a single, authoritative view of every customer. We consolidate data from CRM, billing, support, and behavioural systems into a unified golden record — enabling personalised engagement and reducing churn.',
    features: [
      'Data deduplication & matching',
      'Identity resolution',
      'Behavioural analytics',
      'Omnichannel profile unification',
    ],
    Illustration: Customer360SVG,
  },
  {
    title: 'Data Governance & Quality',
    slug: 'data-governance',
    writeup:
      'Establish trust in your data assets. We implement governance frameworks, quality rules, lineage tracking, and stewardship programmes that ensure compliance, accuracy, and accountability across the data lifecycle.',
    features: [
      'Policy & standards definition',
      'Data quality rule engines',
      'Lineage & impact analysis',
      'Stewardship programmes',
    ],
    Illustration: GovernanceSVG,
  },
  {
    title: 'Data Integration & ETL',
    slug: 'data-integration',
    writeup:
      'Connect every data source into a coherent, reliable pipeline. We design batch and real-time ETL/ELT workflows, API integrations, and event-driven architectures that keep your systems synchronised and your insights fresh.',
    features: [
      'Batch & real-time pipelines',
      'API-based integration',
      'Event-driven architecture',
      'Change data capture',
    ],
    Illustration: IntegrationSVG,
  },
  {
    title: 'Data Engineering & Platforms',
    slug: 'data-engineering',
    writeup:
      'Build scalable foundations for your data ecosystem. Our engineers provision data platforms on Spark, Kafka, Airflow, and cloud-native services — optimising for throughput, cost, and operational resilience.',
    features: [
      'Platform provisioning',
      'Spark & Kafka clusters',
      'Pipeline orchestration',
      'Cost & performance tuning',
    ],
    Illustration: EngineeringSVG,
  },
  {
    title: 'Data Security & Access Control',
    slug: 'data-security',
    writeup:
      'Protect sensitive data without slowing your teams down. We implement role-based access control, encryption at rest and in transit, audit logging, and compliance automation aligned to GDPR, PCI-DSS, and local regulations.',
    features: [
      'Role-based access (RBAC)',
      'Encryption & tokenisation',
      'Audit trail & logging',
      'Regulatory compliance automation',
    ],
    Illustration: SecuritySVG,
  },
  {
    title: 'Data Monetization & Strategy',
    slug: 'data-monetization',
    writeup:
      'Unlock the commercial potential of your data assets. We help you identify monetisation opportunities, design data products, build marketplace platforms, and create pricing models that generate new revenue streams.',
    features: [
      'Data product design',
      'Marketplace development',
      'Pricing model creation',
      'Revenue analytics',
    ],
    Illustration: MonetizationSVG,
  },
];

/* ------------------------------------------------------------------ */
/*  DataServices Component                                            */
/* ------------------------------------------------------------------ */

const DataServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeftSticky, setCanScrollLeftSticky] = useState(false);
  const [canScrollRightSticky, setCanScrollRightSticky] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const stickyTabContainerRef = useRef<HTMLDivElement>(null);
  const active = dataServices[activeTab];

  const updateScrollButtons = (container: HTMLDivElement | null, setLeft: (v: boolean) => void, setRight: (v: boolean) => void) => {
    if (container) {
      setLeft(container.scrollLeft > 0);
      setRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  const scroll = (container: HTMLDivElement | null, direction: 'left' | 'right') => {
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && tabBarRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const tabBarHeight = tabBarRef.current.offsetHeight;

        // Show sticky when scrolled past the original tab bar position
        // Hide when scrolled past the section
        const shouldBeSticky = scrollY > (sectionTop + 200) && scrollY < (sectionBottom - tabBarHeight - 200);
        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = tabContainerRef.current;
    const stickyContainer = stickyTabContainerRef.current;

    const handleTabScroll = () => updateScrollButtons(container, setCanScrollLeft, setCanScrollRight);
    const handleStickyScroll = () => updateScrollButtons(stickyContainer, setCanScrollLeftSticky, setCanScrollRightSticky);

    // Initial check
    handleTabScroll();
    handleStickyScroll();

    container?.addEventListener('scroll', handleTabScroll);
    stickyContainer?.addEventListener('scroll', handleStickyScroll);

    return () => {
      container?.removeEventListener('scroll', handleTabScroll);
      stickyContainer?.removeEventListener('scroll', handleStickyScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="data" className="py-24 md:py-32 bg-[#f8f9fa] dark:bg-[#28292a]">
      {/* Floating Sticky Tab Bar */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          isSticky ? 'top-20 opacity-100 translate-y-0' : 'top-16 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-[#292a2d] rounded-full shadow-lg border border-[#dadce0] dark:border-[#3c4043] p-1.5 flex items-center gap-1 max-w-[90vw]">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(stickyTabContainerRef.current, 'left')}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollLeftSticky
                ? 'text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] cursor-pointer'
                : 'text-[#dadce0] dark:text-[#3c4043] cursor-default'
            }`}
            disabled={!canScrollLeftSticky}
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>

          {/* Scrollable Tabs */}
          <div
            ref={stickyTabContainerRef}
            className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {dataServices.map((service, index) => (
              <button
                key={service.slug}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 flex-shrink-0 ${
                  index === activeTab
                    ? 'bg-[#1a73e8] text-white shadow-sm'
                    : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043]'
                }`}
                style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(stickyTabContainerRef.current, 'right')}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollRightSticky
                ? 'text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] cursor-pointer'
                : 'text-[#dadce0] dark:text-[#3c4043] cursor-default'
            }`}
            disabled={!canScrollRightSticky}
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-[#1a73e8] dark:text-primary mb-4 block">Data Services</span>
          <h2 className="section-title mb-4">
            Data-driven intelligence at scale
          </h2>
          <p className="section-subtitle">
            Comprehensive data services from integration to analytics, empowering your organization with actionable insights.
          </p>
        </div>

        {/* Original Tab Bar */}
        <div ref={tabBarRef} className="border-b border-[#dadce0] dark:border-[#3c4043] mb-10">
          <div className="flex items-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={() => scroll(tabContainerRef.current, 'left')}
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] cursor-pointer'
                  : 'text-[#dadce0] dark:text-[#3c4043] cursor-default'
              }`}
              disabled={!canScrollLeft}
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>

            {/* Scrollable Tabs */}
            <div
              ref={tabContainerRef}
              className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide scroll-smooth flex-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {dataServices.map((service, index) => (
                <button
                  key={service.slug}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                    activeTab === index
                      ? 'bg-[#1a73e8] text-white'
                      : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white hover:bg-[#e8eaed] dark:hover:bg-[#3c4043]'
                  }`}
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll(tabContainerRef.current, 'right')}
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] cursor-pointer'
                  : 'text-[#dadce0] dark:text-[#3c4043] cursor-default'
              }`}
              disabled={!canScrollRight}
            >
              <span className="material-symbols-outlined text-[22px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Content Panel */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-300"
          style={{ animation: 'fadeIn 0.3s ease-in-out' }}
        >
          {/* Left – Text */}
          <div>
            <h3 className="text-2xl font-bold text-[#202124] dark:text-white mb-4" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
              {active.title}
            </h3>
            <p className="text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed mb-6">
              {active.writeup}
            </p>
            <ul className="space-y-3 mb-8">
              {active.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#202124] dark:text-[#e3e3e3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={`/data-services/${active.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] dark:text-primary hover:text-[#174ea6] transition-colors duration-200"
            >
              Learn more
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right – SVG Illustration */}
          <div className="flex items-center justify-center text-muted-foreground">
            <active.Illustration className="w-full max-w-md" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/data-services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] dark:text-primary hover:text-[#174ea6] transition-colors duration-200"
          >
            Explore all data services
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Fade-in keyframe */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default DataServices;
