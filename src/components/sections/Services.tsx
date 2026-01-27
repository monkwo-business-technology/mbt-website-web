import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons/ServiceIcons';

/* ─── Inline SVG Infographics (monochrome, currentColor) ─── */

const SvgSoftwareDevelopment: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Browser window */}
    <rect x="30" y="30" width="220" height="170" rx="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    <line x1="30" y1="58" x2="250" y2="58" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <circle cx="50" cy="44" r="5" fill="currentColor" fillOpacity="0.25" />
    <circle cx="66" cy="44" r="5" fill="currentColor" fillOpacity="0.25" />
    <circle cx="82" cy="44" r="5" fill="currentColor" fillOpacity="0.25" />
    {/* Code lines inside browser */}
    <rect x="50" y="74" width="90" height="6" rx="3" fill="currentColor" fillOpacity="0.18" />
    <rect x="60" y="90" width="130" height="6" rx="3" fill="currentColor" fillOpacity="0.12" />
    <rect x="60" y="106" width="100" height="6" rx="3" fill="currentColor" fillOpacity="0.18" />
    <rect x="70" y="122" width="80" height="6" rx="3" fill="currentColor" fillOpacity="0.10" />
    <rect x="60" y="138" width="110" height="6" rx="3" fill="currentColor" fillOpacity="0.15" />
    <rect x="50" y="154" width="60" height="6" rx="3" fill="currentColor" fillOpacity="0.18" />
    <rect x="50" y="170" width="70" height="6" rx="3" fill="currentColor" fillOpacity="0.10" />
    {/* Mobile phone */}
    <rect x="280" y="50" width="90" height="160" rx="14" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    <rect x="310" y="56" width="30" height="6" rx="3" fill="currentColor" fillOpacity="0.15" />
    <line x1="280" y1="72" x2="370" y2="72" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="296" y="86" width="58" height="6" rx="3" fill="currentColor" fillOpacity="0.12" />
    <rect x="296" y="100" width="46" height="6" rx="3" fill="currentColor" fillOpacity="0.18" />
    <rect x="296" y="114" width="52" height="6" rx="3" fill="currentColor" fillOpacity="0.10" />
    <rect x="296" y="134" width="58" height="30" rx="4" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <circle cx="325" cy="196" r="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
    {/* Connection line */}
    <path d="M250 130 Q265 130 280 110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.3" />
    {/* Floating brackets */}
    <text x="140" y="260" fontSize="48" fontFamily="monospace" fill="currentColor" fillOpacity="0.08">{'{ }'}</text>
  </svg>
);

const SvgAutomationWorkflow: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Large gear */}
    <circle cx="100" cy="130" r="50" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    <circle cx="100" cy="130" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    {/* Gear teeth */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 44 * Math.cos(rad);
      const y1 = 130 + 44 * Math.sin(rad);
      const x2 = 100 + 56 * Math.cos(rad);
      const y2 = 130 + 56 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.2" />;
    })}
    {/* Small gear */}
    <circle cx="170" cy="80" r="28" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    <circle cx="170" cy="80" r="12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 170 + 24 * Math.cos(rad);
      const y1 = 80 + 24 * Math.sin(rad);
      const x2 = 170 + 34 * Math.cos(rad);
      const y2 = 80 + 34 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.2" />;
    })}
    {/* Conveyor belt */}
    <rect x="200" y="140" width="170" height="24" rx="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <circle cx="214" cy="152" r="8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
    <circle cx="358" cy="152" r="8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
    {/* Flowing arrows */}
    <path d="M230 148 L260 148" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <polygon points="260,144 270,148 260,152" fill="currentColor" fillOpacity="0.3" />
    <path d="M285 148 L315 148" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <polygon points="315,144 325,148 315,152" fill="currentColor" fillOpacity="0.3" />
    {/* Items on belt */}
    <rect x="240" y="120" width="18" height="18" rx="3" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="290" y="120" width="18" height="18" rx="3" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="340" y="120" width="18" height="18" rx="3" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    {/* Loop-back arrow */}
    <path d="M150 200 Q200 240 300 200 Q360 180 370 170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.2" />
    <polygon points="370,166 376,174 366,174" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

const SvgResearchInnovation: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Lightbulb outer shape */}
    <path d="M200 40 C150 40 115 80 115 120 C115 155 140 175 150 200 L250 200 C260 175 285 155 285 120 C285 80 250 40 200 40Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    {/* Bulb base */}
    <rect x="160" y="200" width="80" height="12" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
    <rect x="165" y="214" width="70" height="10" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
    <rect x="170" y="226" width="60" height="8" rx="4" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
    {/* Circuit traces inside bulb */}
    <line x1="200" y1="80" x2="200" y2="130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
    <line x1="200" y1="130" x2="170" y2="160" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
    <line x1="200" y1="130" x2="230" y2="160" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
    <line x1="180" y1="100" x2="220" y2="100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
    <line x1="170" y1="120" x2="200" y2="120" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <line x1="200" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    {/* Circuit nodes */}
    <circle cx="200" cy="80" r="4" fill="currentColor" fillOpacity="0.2" />
    <circle cx="200" cy="130" r="4" fill="currentColor" fillOpacity="0.2" />
    <circle cx="170" cy="160" r="4" fill="currentColor" fillOpacity="0.2" />
    <circle cx="230" cy="160" r="4" fill="currentColor" fillOpacity="0.2" />
    <circle cx="180" cy="100" r="3" fill="currentColor" fillOpacity="0.15" />
    <circle cx="220" cy="100" r="3" fill="currentColor" fillOpacity="0.15" />
    {/* Radiating lines outward */}
    <line x1="200" y1="20" x2="200" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" />
    <line x1="240" y1="30" x2="255" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.15" />
    <line x1="160" y1="30" x2="145" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.15" />
    <line x1="110" y1="70" x2="94" y2="62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.12" />
    <line x1="290" y1="70" x2="306" y2="62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.12" />
    {/* Sparkles */}
    <circle cx="310" cy="50" r="3" fill="currentColor" fillOpacity="0.12" />
    <circle cx="90" cy="48" r="2" fill="currentColor" fillOpacity="0.10" />
    <circle cx="320" cy="100" r="2.5" fill="currentColor" fillOpacity="0.10" />
  </svg>
);

const SvgUxDesign: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Artboard 1 (back) */}
    <rect x="60" y="40" width="200" height="150" rx="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.02" />
    {/* Artboard 2 (front) */}
    <rect x="100" y="70" width="220" height="160" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    {/* Grid lines inside artboard 2 */}
    <line x1="100" y1="110" x2="320" y2="110" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
    <line x1="100" y1="150" x2="320" y2="150" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
    <line x1="100" y1="190" x2="320" y2="190" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
    <line x1="160" y1="70" x2="160" y2="230" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
    <line x1="220" y1="70" x2="220" y2="230" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
    <line x1="280" y1="70" x2="280" y2="230" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.12" />
    {/* Layout placeholders */}
    <rect x="115" y="82" width="90" height="18" rx="3" fill="currentColor" fillOpacity="0.10" />
    <rect x="115" y="118" width="50" height="24" rx="3" fill="currentColor" fillOpacity="0.07" />
    <rect x="175" y="118" width="50" height="24" rx="3" fill="currentColor" fillOpacity="0.07" />
    <rect x="235" y="118" width="70" height="24" rx="3" fill="currentColor" fillOpacity="0.07" />
    <rect x="115" y="158" width="190" height="8" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="115" y="174" width="140" height="8" rx="2" fill="currentColor" fillOpacity="0.06" />
    <rect x="115" y="200" width="80" height="20" rx="10" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    {/* Cursor pointer */}
    <path d="M340 140 L340 176 L350 168 L360 186 L366 183 L356 165 L368 164 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
    {/* Selection rectangle (dashed) */}
    <rect x="108" y="152" width="202" height="40" rx="2" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.25" fill="none" />
  </svg>
);

const SvgTrainingCapacity: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Book */}
    <rect x="50" y="140" width="160" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    <line x1="130" y1="140" x2="130" y2="260" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
    {/* Book pages */}
    <rect x="66" y="156" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.12" />
    <rect x="66" y="168" width="42" height="5" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="66" y="180" width="48" height="5" rx="2" fill="currentColor" fillOpacity="0.10" />
    <rect x="142" y="156" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.12" />
    <rect x="142" y="168" width="42" height="5" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="142" y="180" width="48" height="5" rx="2" fill="currentColor" fillOpacity="0.10" />
    {/* Graduation cap */}
    <polygon points="130,60 50,100 130,140 210,100" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2" />
    <line x1="130" y1="140" x2="130" y2="110" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <rect x="175" y="100" width="4" height="44" fill="currentColor" fillOpacity="0.2" />
    <circle cx="177" cy="148" r="6" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    {/* Rising bar chart */}
    <rect x="260" y="220" width="24" height="40" rx="2" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="296" y="185" width="24" height="75" rx="2" fill="currentColor" fillOpacity="0.13" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="332" y="145" width="24" height="115" rx="2" fill="currentColor" fillOpacity="0.17" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
    {/* Trend line */}
    <path d="M272 216 L308 180 L344 140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.3" />
    <circle cx="272" cy="216" r="3" fill="currentColor" fillOpacity="0.25" />
    <circle cx="308" cy="180" r="3" fill="currentColor" fillOpacity="0.25" />
    <circle cx="344" cy="140" r="3" fill="currentColor" fillOpacity="0.25" />
    {/* Arrow up */}
    <polygon points="344,126 338,138 350,138" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

const SvgIoTEdge: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Central hub */}
    <circle cx="200" cy="160" r="36" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <circle cx="200" cy="160" r="16" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <circle cx="200" cy="160" r="5" fill="currentColor" fillOpacity="0.2" />
    {/* Radiating lines and device nodes */}
    {[
      { angle: 0, label: 'sensor' },
      { angle: 45, label: 'cam' },
      { angle: 90, label: 'temp' },
      { angle: 135, label: 'motor' },
      { angle: 180, label: 'light' },
      { angle: 225, label: 'valve' },
      { angle: 270, label: 'gauge' },
      { angle: 315, label: 'mic' },
    ].map(({ angle }, i) => {
      const rad = (angle * Math.PI) / 180;
      const lx = 200 + 70 * Math.cos(rad);
      const ly = 160 + 70 * Math.sin(rad);
      const dx = 200 + 110 * Math.cos(rad);
      const dy = 160 + 110 * Math.sin(rad);
      return (
        <g key={i}>
          <line x1={lx} y1={ly} x2={dx} y2={dy} stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3" />
          <rect x={dx - 14} y={dy - 14} width="28" height="28" rx="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
          <circle cx={dx} cy={dy} r="4" fill="currentColor" fillOpacity="0.18" />
        </g>
      );
    })}
    {/* Outer ring (subtle) */}
    <circle cx="200" cy="160" r="130" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.08" strokeDasharray="8 6" />
  </svg>
);

const SvgDigitalTransformation: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Road / path going upward */}
    <path d="M60 290 Q100 240 140 210 Q180 180 200 160 Q230 130 260 110 Q300 85 340 40" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.25" />
    {/* Dashed centre line */}
    <path d="M60 290 Q100 240 140 210 Q180 180 200 160 Q230 130 260 110 Q300 85 340 40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="8 6" strokeOpacity="0.12" />
    {/* Milestone 1 */}
    <circle cx="100" cy="248" r="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <text x="100" y="252" fontSize="12" textAnchor="middle" fill="currentColor" fillOpacity="0.3" fontWeight="bold">1</text>
    <rect x="118" y="238" width="60" height="18" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <rect x="124" y="244" width="48" height="6" rx="2" fill="currentColor" fillOpacity="0.10" />
    {/* Milestone 2 */}
    <circle cx="172" cy="192" r="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <text x="172" y="196" fontSize="12" textAnchor="middle" fill="currentColor" fillOpacity="0.3" fontWeight="bold">2</text>
    <rect x="190" y="182" width="60" height="18" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <rect x="196" y="188" width="48" height="6" rx="2" fill="currentColor" fillOpacity="0.10" />
    {/* Milestone 3 */}
    <circle cx="240" cy="126" r="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    <text x="240" y="130" fontSize="12" textAnchor="middle" fill="currentColor" fillOpacity="0.3" fontWeight="bold">3</text>
    <rect x="258" y="116" width="60" height="18" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <rect x="264" y="122" width="48" height="6" rx="2" fill="currentColor" fillOpacity="0.10" />
    {/* Flag at top */}
    <line x1="340" y1="40" x2="340" y2="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
    <polygon points="340,12 370,20 340,28" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
    {/* Star / achievement */}
    <circle cx="340" cy="40" r="8" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
  </svg>
);

const SvgEcommerceErp: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shopping cart */}
    <path d="M50 60 L80 60 L110 160 L190 160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
    <circle cx="120" cy="180" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <circle cx="175" cy="180" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Cart basket */}
    <path d="M85 80 L95 140 L185 140 L195 80 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <rect x="105" y="92" width="24" height="24" rx="3" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <rect x="140" y="92" width="24" height="24" rx="3" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    {/* Connection line cart → ERP */}
    <path d="M195 110 L240 110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.25" />
    <polygon points="240,106 250,110 240,114" fill="currentColor" fillOpacity="0.3" />
    {/* ERP Stacked blocks */}
    <rect x="255" y="50" width="120" height="40" rx="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <rect x="268" y="62" width="40" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
    <circle cx="355" cy="70" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.06" />

    <rect x="255" y="100" width="120" height="40" rx="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <rect x="268" y="112" width="55" height="6" rx="2" fill="currentColor" fillOpacity="0.12" />
    <circle cx="355" cy="120" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.06" />

    <rect x="255" y="150" width="120" height="40" rx="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <rect x="268" y="162" width="35" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
    <circle cx="355" cy="170" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.06" />

    <rect x="255" y="200" width="120" height="40" rx="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    <rect x="268" y="212" width="48" height="6" rx="2" fill="currentColor" fillOpacity="0.12" />
    <circle cx="355" cy="220" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.06" />
    {/* Vertical connections between blocks */}
    <line x1="315" y1="90" x2="315" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <line x1="315" y1="140" x2="315" y2="150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <line x1="315" y1="190" x2="315" y2="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
  </svg>
);

const SvgLegacyModernization: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 320" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Old server box */}
    <rect x="30" y="90" width="110" height="140" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    {/* Server face details */}
    <rect x="46" y="106" width="78" height="14" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <circle cx="56" cy="113" r="3" fill="currentColor" fillOpacity="0.2" />
    <rect x="66" y="110" width="50" height="6" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="46" y="128" width="78" height="14" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <circle cx="56" cy="135" r="3" fill="currentColor" fillOpacity="0.2" />
    <rect x="66" y="132" width="50" height="6" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="46" y="150" width="78" height="14" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <circle cx="56" cy="157" r="3" fill="currentColor" fillOpacity="0.2" />
    {/* Ventilation grille */}
    {[180, 188, 196, 204, 212].map((y) => (
      <line key={y} x1="50" y1={y} x2="126" y2={y} stroke="currentColor" strokeWidth="1" strokeOpacity="0.10" />
    ))}
    {/* Transformation arrow */}
    <path d="M155 160 Q200 130 200 160 Q200 190 245 160" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" fill="none" />
    <polygon points="245,155 258,160 245,165" fill="currentColor" fillOpacity="0.3" />
    {/* Sparkle on arrow */}
    <circle cx="200" cy="140" r="3" fill="currentColor" fillOpacity="0.15" />
    <circle cx="215" cy="148" r="2" fill="currentColor" fillOpacity="0.12" />
    {/* Cloud shape */}
    <ellipse cx="320" cy="120" rx="50" ry="32" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="290" cy="130" rx="30" ry="24" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
    <ellipse cx="350" cy="128" rx="26" ry="22" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
    {/* Cloud nodes (microservices) */}
    <rect x="296" y="104" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="322" y="104" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <rect x="310" y="126" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    {/* Lines between nodes */}
    <line x1="314" y1="113" x2="322" y2="113" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <line x1="305" y1="122" x2="315" y2="126" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    <line x1="331" y1="122" x2="323" y2="126" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
    {/* Downward connections from cloud */}
    <line x1="300" y1="155" x2="300" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.15" />
    <line x1="320" y1="155" x2="320" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.15" />
    <line x1="340" y1="155" x2="340" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.15" />
    <rect x="286" y="180" width="28" height="20" rx="3" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <rect x="306" y="180" width="28" height="20" rx="3" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
    <rect x="326" y="180" width="28" height="20" rx="3" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
  </svg>
);

/* ─── Services Data ─── */

const services = [
  {
    title: 'Custom Software Development',
    slug: 'software-development',
    writeup:
      'We architect and build bespoke software — from responsive web platforms and native mobile apps to large-scale enterprise systems. Every solution is designed for performance, security, and long-term maintainability using modern frameworks and agile delivery.',
    features: ['Full-stack web applications', 'Native & cross-platform mobile', 'Enterprise-grade systems', 'API & microservices architecture'],
    Svg: SvgSoftwareDevelopment,
  },
  {
    title: 'Automation & Workflow Optimization',
    slug: 'automation-workflow',
    writeup:
      'Eliminate bottlenecks and free your teams from repetitive manual work. We design RPA bots, orchestration engines, and intelligent scheduling systems that cut operational costs and accelerate throughput across departments.',
    features: ['Robotic Process Automation', 'Business process redesign', 'Intelligent scheduling', 'Real-time workflow monitoring'],
    Svg: SvgAutomationWorkflow,
  },
  {
    title: 'Research & Innovation',
    slug: 'research-innovation',
    writeup:
      'Stay ahead of the curve with our dedicated R&D practice. We prototype emerging technologies — from blockchain and quantum computing explorations to novel algorithm design — turning academic insights into competitive advantages.',
    features: ['Technology prototyping', 'Blockchain & distributed ledger', 'Academic partnerships', 'Proof-of-concept development'],
    Svg: SvgResearchInnovation,
  },
  {
    title: 'UX & Interface Design',
    slug: 'ux-design',
    writeup:
      'Great software starts with great design. Our UX team conducts rigorous user research, builds interactive prototypes, and delivers pixel-perfect interfaces that are accessible, intuitive, and aligned with your brand identity.',
    features: ['User research & testing', 'Wireframing & prototyping', 'Design systems & UI kits', 'WCAG accessibility audits'],
    Svg: SvgUxDesign,
  },
  {
    title: 'Training & Capacity Building',
    slug: 'training-capacity-building',
    writeup:
      'Technology is only as powerful as the people using it. We deliver tailored onboarding programs, hands-on workshops, and certification paths that upskill your workforce and accelerate adoption of new platforms.',
    features: ['Custom training programmes', 'Hands-on workshops', 'Certification pathways', 'Ongoing mentorship'],
    Svg: SvgTrainingCapacity,
  },
  {
    title: 'IoT & Edge Computing',
    slug: 'iot-edge-computing',
    writeup:
      'Connect the physical and digital worlds with robust IoT architectures. We design sensor networks, edge processing pipelines, and real-time dashboards that give you visibility and control over distributed assets.',
    features: ['Sensor network design', 'Edge data processing', 'Real-time monitoring dashboards', 'Device management platforms'],
    Svg: SvgIoTEdge,
  },
  {
    title: 'Digital Transformation Consulting',
    slug: 'digital-transformation',
    writeup:
      'Chart a clear path from legacy processes to a modern digital operating model. Our consultants assess maturity, define roadmaps, and guide executive teams through technology selection, change management, and measurable ROI delivery.',
    features: ['Maturity assessment', 'Technology roadmapping', 'Change management', 'ROI measurement frameworks'],
    Svg: SvgDigitalTransformation,
  },
  {
    title: 'E-commerce & ERP Solutions',
    slug: 'ecommerce-erp',
    writeup:
      'Unify your sales channels and back-office operations on a single integrated platform. We build custom storefronts, configure ERP modules, and connect CRM, inventory, and fulfilment systems for seamless end-to-end commerce.',
    features: ['Custom storefront development', 'ERP configuration & integration', 'CRM & marketing automation', 'Inventory & fulfilment systems'],
    Svg: SvgEcommerceErp,
  },
  {
    title: 'Legacy System Modernization',
    slug: 'legacy-modernization',
    writeup:
      'Breathe new life into ageing systems without disrupting operations. We re-platform monolithic applications to cloud-native microservices, migrate databases, and refactor codebases — preserving business logic while unlocking modern capabilities.',
    features: ['Cloud migration', 'Monolith-to-microservices', 'Database re-platforming', 'Codebase refactoring'],
    Svg: SvgLegacyModernization,
  },
];

/* ─── Services Component ─── */

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = services[activeTab];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent mb-4 block">Application Services</span>
          <h2 className="section-title mb-4">
            End-to-end technology solutions
          </h2>
          <p className="section-subtitle">
            From concept to deployment, we deliver comprehensive software solutions tailored to your business needs.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="border-b border-border/50 mb-10">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={service.slug}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 flex-shrink-0 ${
                  index === activeTab
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in duration-300"
        >
          {/* Left — Text */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {active.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {active.writeup}
            </p>
            <ul className="space-y-2 mb-8">
              {active.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={`/services/${active.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Learn more
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — SVG Infographic */}
          <div className="flex items-center justify-center text-muted-foreground/60">
            <active.Svg className="w-full max-w-md h-auto" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            View all services
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
