import { Link } from 'react-router-dom';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';

export default function MDNGovernmentPage() {
  const programs = [
    {
      title: 'Digital Literacy Program',
      description: 'Upskill government workers in essential digital tools and modern workplace technologies to improve operational efficiency across departments.',
      accent: '#4285f4',
      icon: 'devices',
    },
    {
      title: 'Cybersecurity Compliance Training',
      description: 'Meet federal security standards and compliance requirements with hands-on training aligned to NIST, FISMA, and agency-specific frameworks.',
      accent: '#d93025',
      icon: 'shield',
    },
    {
      title: 'Data & AI Readiness',
      description: 'Prepare agencies for AI-driven governance with foundational and advanced curricula in data analytics, machine learning, and responsible AI.',
      accent: '#f9ab00',
      icon: 'psychology',
    },
    {
      title: 'Cloud Migration Training',
      description: 'Transition to cloud infrastructure confidently with training on AWS GovCloud, Azure Government, and multi-cloud strategies for public sector.',
      accent: '#34a853',
      icon: 'cloud_sync',
    },
    {
      title: 'STEM Workforce Pipeline',
      description: 'Build next-gen STEM talent for public service through internship-ready programs, apprenticeships, and university partnership pathways.',
      accent: '#a142f4',
      icon: 'science',
    },
    {
      title: 'Leadership & Management',
      description: 'Technology leadership for senior officials — equip agency leaders with the knowledge to drive digital transformation and innovation.',
      accent: '#e8710a',
      icon: 'supervisor_account',
    },
  ];

  const features = [
    {
      title: 'FedRAMP-Aligned Security',
      description: 'Our platform meets FedRAMP security standards, ensuring your agency data is protected with enterprise-grade encryption and compliance controls.',
      icon: 'admin_panel_settings',
    },
    {
      title: 'Accessibility Compliant (WCAG 2.1 AA)',
      description: 'Every course and interface element meets WCAG 2.1 AA guidelines, ensuring equal access for all government employees regardless of ability.',
      icon: 'accessibility_new',
    },
    {
      title: 'Custom Reporting for Agency Heads',
      description: 'Generate detailed progress reports, completion dashboards, and skills gap analyses tailored for agency leadership and oversight committees.',
      icon: 'summarize',
    },
    {
      title: 'Volume Licensing & Procurement-Friendly',
      description: 'Simplified procurement through GSA Schedule, volume licensing agreements, and flexible billing designed for government budget cycles.',
      icon: 'receipt_long',
    },
  ];

  const stats = [
    { value: '50+', label: 'Government Agencies' },
    { value: '25,000+', label: 'Employees Trained' },
    { value: '98%', label: 'Completion Rate' },
    { value: '40%', label: 'Skills Improvement' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a73e8] to-[#0d47a1]">
          {/* Decorative circles */}
          <div className="absolute top-16 left-[10%] w-72 h-72 rounded-full bg-white opacity-[0.07]" />
          <div className="absolute -bottom-20 right-[5%] w-96 h-96 rounded-full bg-white opacity-[0.05]" />
          <div className="absolute top-1/2 left-[55%] w-48 h-48 rounded-full bg-white opacity-[0.04]" />
          <div className="absolute -top-10 right-[30%] w-32 h-32 rounded-full bg-white opacity-[0.06]" />
          <div className="absolute bottom-10 left-[35%] w-24 h-24 rounded-full bg-white opacity-[0.08]" />

          <div className="relative max-w-[1600px] mx-auto px-6 py-24 md:py-32 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[32px]">account_balance</span>
              </div>
            </div>
            <h1
              className="text-3xl md:text-5xl font-normal text-white tracking-tight max-w-3xl mx-auto"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              Digital Workforce Development for Government
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Empower government employees with the skills they need to serve the public in a digital-first world.
              From cybersecurity to AI readiness, MDN delivers training that meets federal standards.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-[#1a73e8] rounded-full text-sm font-medium hover:shadow-lg hover:shadow-white/20 transition-all"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Contact Us
              </Link>
              <a
                href="#programs"
                className="px-8 py-3 border border-white/40 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                View Programs
              </a>
            </div>
          </div>
        </section>

        {/* Key Programs */}
        <section id="programs" className="py-20 border-b border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Key Programs</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Training built for the public sector
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
                Comprehensive programs designed to meet the unique challenges and compliance requirements of government agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="rounded-3xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:border-transparent transition-all group"
                >
                  {/* Colored accent bar */}
                  <div className="h-1.5 rounded-t-3xl" style={{ background: program.accent }} />
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${program.accent}15` }}
                    >
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ color: program.accent }}
                      >
                        {program.icon}
                      </span>
                    </div>
                    <h3
                      className="text-base font-medium text-foreground mb-2"
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: program.accent }}>
                      <span>Learn more</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Government Chooses MDN */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#34a853] font-semibold text-sm tracking-wider uppercase">Why MDN</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Why government chooses MDN
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
                Purpose-built for the public sector with the security, accessibility, and procurement features agencies require.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-3xl border border-border/50 bg-card p-6 hover:shadow-lg hover:border-transparent transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#1a73e8]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px] text-[#1a73e8]">
                        {feature.icon}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-base font-medium text-foreground mb-1.5"
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 border-b border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-[#f9ab00] font-semibold text-sm tracking-wider uppercase">Our Impact</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Trusted across the public sector
              </h2>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-[#1a73e8]/5 via-[#f9ab00]/5 to-[#34a853]/5 border border-border/50 p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-3xl md:text-4xl font-bold text-[#1a73e8]"
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1a73e8]">
          <div className="max-w-[1600px] mx-auto px-6 text-center">
            <h2
              className="text-2xl font-normal text-white mb-3"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              Partner with MDN for your agency's digital transformation
            </h2>
            <p className="text-blue-100 text-sm mb-8 max-w-lg mx-auto">
              Join the growing network of government agencies investing in their workforce through MDN's proven training programs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1a73e8] rounded-full text-sm font-medium hover:shadow-lg hover:shadow-white/20 transition-all"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Schedule a Briefing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
