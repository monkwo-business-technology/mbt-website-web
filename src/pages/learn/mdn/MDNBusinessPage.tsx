import { Link } from 'react-router-dom';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';

const features = [
  {
    icon: 'groups',
    title: 'Team Management',
    description: 'Manage teams, assign courses, and track progress across departments with centralized admin controls.',
  },
  {
    icon: 'conversion_path',
    title: 'Custom Learning Paths',
    description: 'Create tailored curricula for your organization aligned with business goals and skill gaps.',
  },
  {
    icon: 'monitoring',
    title: 'Analytics Dashboard',
    description: 'Real-time insights on team performance, engagement metrics, and learning outcomes.',
  },
  {
    icon: 'group_add',
    title: 'Bulk Enrollment',
    description: 'Enroll hundreds of employees at once with CSV imports and automated onboarding workflows.',
  },
  {
    icon: 'verified',
    title: 'Certification Tracking',
    description: 'Track certifications, compliance deadlines, and credential renewals across your workforce.',
  },
  {
    icon: 'integration_instructions',
    title: 'SSO & Integration',
    description: 'SAML SSO, LMS integration, REST API access, and webhooks for seamless enterprise workflows.',
  },
];

const steps = [
  {
    step: '1',
    icon: 'domain_add',
    title: 'Set Up Your Org',
    description: 'Create your organization workspace, invite admins, and configure SSO in minutes.',
    color: '#4285f4',
    gradient: 'from-[#4285f4] to-[#669df6]',
  },
  {
    step: '2',
    icon: 'assignment',
    title: 'Assign Learning',
    description: 'Build custom learning paths, assign courses to teams, and set completion deadlines.',
    color: '#f9ab00',
    gradient: 'from-[#f9ab00] to-[#fdd663]',
  },
  {
    step: '3',
    icon: 'insights',
    title: 'Track Progress',
    description: 'Monitor team performance with real-time analytics, reports, and certification tracking.',
    color: '#34a853',
    gradient: 'from-[#34a853] to-[#57bb8a]',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/user/month',
    description: 'For small teams getting started with structured learning.',
    features: [
      'Up to 25 users',
      'Full course library access',
      'Basic analytics dashboard',
      'Email support',
      'Team management',
      'Completion certificates',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$89',
    period: '/user/month',
    description: 'For growing organizations that need advanced tools and insights.',
    features: [
      'Up to 500 users',
      'Custom learning paths',
      'Advanced analytics & reports',
      'Priority support',
      'Bulk enrollment',
      'SSO integration',
      'API access',
      'Certification tracking',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with bespoke training needs and compliance requirements.',
    features: [
      'Unlimited users',
      'Custom content & branding',
      'Dedicated account manager',
      'LMS integration',
      'Advanced security & compliance',
      'Custom API & webhooks',
      'On-premise deployment option',
      'SLA guarantees',
      '24/7 phone support',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

const trustedCompanies = ['TechCorp', 'DataFlow', 'NeuralSync', 'CloudBase', 'QuantumLabs', 'CyberShield'];

export default function MDNBusinessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8] to-[#174ea6]" />
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10" />
          <div className="absolute -left-10 -bottom-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute right-1/4 bottom-10 w-40 h-40 rounded-3xl rotate-12 bg-white/5" />
          <div className="absolute left-1/3 top-10 w-24 h-24 rounded-full bg-white/5" />
          <div className="relative max-w-[1600px] mx-auto px-6 py-24 md:py-32 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[24px]">business_center</span>
              </div>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">MDN for Business</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              Upskill Your Entire Organization
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Enterprise learning solutions that scale with your business. Empower every team with world-class courses, structured paths, and measurable outcomes.
            </p>
            <p className="text-blue-200/70 text-sm max-w-xl mx-auto mb-10">
              Trusted by leading companies to train, certify, and retain top talent across technology, data science, and engineering.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/learn/mdn/business#contact"
                className="px-8 py-3 bg-white text-[#1a73e8] rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Request a Demo
              </Link>
              <a
                href="#pricing"
                className="px-8 py-3 border border-white/40 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                View Plans
              </a>
            </div>
            {/* Stats row */}
            <div className="mt-14 flex items-center justify-center gap-8 md:gap-14 text-sm">
              {[
                { value: '500+', label: 'Enterprise Clients' },
                { value: '2M+', label: 'Employees Trained' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '40%', label: 'Faster Onboarding' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-blue-200/70 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 border-b border-border/50 bg-secondary/30">
          <div className="max-w-[1600px] mx-auto px-6">
            <p className="text-center text-xs text-muted-foreground uppercase tracking-wider font-medium mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">domain</span>
                  <span
                    className="text-lg font-medium tracking-wide"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Platform Features</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Everything your L&D team needs
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
                A comprehensive enterprise learning platform built for scale, security, and measurable impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-border/50 bg-card p-6 hover:shadow-lg hover:border-[#1a73e8]/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1a73e8]/10 flex items-center justify-center mb-4 group-hover:bg-[#1a73e8]/15 transition-colors">
                    <span className="material-symbols-outlined text-[#1a73e8] text-[24px]">{feature.icon}</span>
                  </div>
                  <h3
                    className="text-base font-medium text-foreground mb-2"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 border-t border-b border-border/50 bg-secondary/30">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">How it works</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Get started in three simple steps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#4285f4] via-[#f9ab00] to-[#34a853]" />

              {steps.map((item) => (
                <div key={item.step} className="text-center relative z-10">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} mx-auto flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <span className="material-symbols-outlined text-white text-[48px]">{item.icon}</span>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full bg-card border-2 flex items-center justify-center mx-auto -mt-10 mb-4 relative z-10"
                    style={{ borderColor: item.color }}
                  >
                    <span className="text-sm font-bold" style={{ color: item.color }}>
                      {item.step}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-medium text-foreground mb-2"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Pricing</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Plans that scale with your team
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
                Start with a free trial. No credit card required. Upgrade as your team grows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl overflow-hidden transition-all relative ${
                    plan.highlighted
                      ? 'bg-[#1a73e8] text-white shadow-xl scale-[1.02]'
                      : 'border border-border/50 bg-card hover:shadow-lg'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <span className="bg-white text-[#1a73e8] text-xs font-semibold px-4 py-1 rounded-b-lg">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3
                      className={`text-lg font-medium mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span
                        className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}
                        style={{ fontFamily: "'Google Sans', sans-serif" }}
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-muted-foreground'}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                    <Link
                      to="/learn/mdn/business#contact"
                      className={`block w-full text-center px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                        plan.highlighted
                          ? 'bg-white text-[#1a73e8] hover:shadow-lg'
                          : 'bg-[#1a73e8] text-white hover:bg-[#185abc]'
                      }`}
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {plan.cta}
                    </Link>
                    <div className={`mt-6 pt-6 border-t ${plan.highlighted ? 'border-white/20' : 'border-border/50'}`}>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <span
                              className={`material-symbols-outlined text-[18px] mt-0.5 flex-shrink-0 ${
                                plan.highlighted ? 'text-white' : 'text-[#34a853]'
                              }`}
                            >
                              check_circle
                            </span>
                            <span
                              className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-muted-foreground'}`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#1a73e8] relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10" />
          <div className="absolute -left-12 -bottom-12 w-56 h-56 rounded-full bg-white/5" />
          <div className="absolute right-1/3 bottom-8 w-32 h-32 rounded-3xl rotate-12 bg-white/5" />
          <div className="relative max-w-[1600px] mx-auto px-6 text-center">
            <span className="material-symbols-outlined text-white/20 text-[64px] mb-4">rocket_launch</span>
            <h2
              className="text-2xl md:text-3xl font-normal text-white mb-3"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              Ready to transform your workforce?
            </h2>
            <p className="text-blue-100 text-sm mb-8 max-w-lg mx-auto">
              Join 500+ companies using MDN for Business to upskill their teams. Get a personalized demo and see how we can help your organization grow.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/learn/mdn/business#contact"
                className="px-8 py-3 bg-white text-[#1a73e8] rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Contact Sales
              </Link>
              <Link
                to="/learn/mdn/courses"
                className="px-8 py-3 border border-white/40 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
