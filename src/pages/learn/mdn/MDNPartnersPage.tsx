import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate your tools and platforms with MDN\'s learning ecosystem',
    icon: 'devices_other',
    gradientFrom: '#4285f4',
    gradientTo: '#669df6',
  },
  {
    title: 'Content Partners',
    description: 'Co-create courses and content with MDN\'s expert team',
    icon: 'auto_stories',
    gradientFrom: '#34a853',
    gradientTo: '#57bb8a',
  },
  {
    title: 'Channel Partners',
    description: 'Resell MDN courses and solutions to your customers',
    icon: 'storefront',
    gradientFrom: '#f9ab00',
    gradientTo: '#fdd663',
  },
  {
    title: 'Academic Partners',
    description: 'Bring MDN content to your university or institution',
    icon: 'account_balance',
    gradientFrom: '#a142f4',
    gradientTo: '#b97af7',
  },
];

const partnerBenefits = [
  'Revenue sharing & co-marketing',
  'Access to MDN\'s learner base',
  'Dedicated partner manager',
  'Priority feature requests',
  'Joint go-to-market opportunities',
  'Partner badge & certification',
];

const partnerStats = [
  { value: '200+', label: 'partners worldwide', icon: 'handshake' },
  { value: '50M+', label: 'learner reach', icon: 'public' },
  { value: '95%', label: 'partner satisfaction', icon: 'thumb_up' },
  { value: '3x', label: 'revenue growth', icon: 'trending_up' },
];

const featuredPartners = [
  { name: 'AWS', icon: 'cloud', color: '#f9ab00' },
  { name: 'Microsoft', icon: 'grid_view', color: '#4285f4' },
  { name: 'Meta', icon: 'diversity_3', color: '#1a73e8' },
  { name: 'NVIDIA', icon: 'developer_board', color: '#34a853' },
  { name: 'Stanford University', icon: 'school', color: '#d93025' },
  { name: 'MIT OpenCourseWare', icon: 'science', color: '#a142f4' },
];

export default function MDNPartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className="border-b border-border/50 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-[1600px] mx-auto px-6 py-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1a73e8] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[28px]">handshake</span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-normal tracking-tight"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Build the Future of Learning Together
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
              Join MDN's partner ecosystem and help shape how the world learns technology and science.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                to="/learn/mdn/partners/apply"
                className="px-6 py-2.5 bg-[#1a73e8] text-white rounded-full text-sm font-medium hover:bg-[#185abc] hover:shadow-lg transition-all"
              >
                Become a Partner
              </Link>
              <Link
                to="/learn/mdn/partners/portal"
                className="px-6 py-2.5 border border-border/50 text-foreground rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                Partner Portal
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Partnership Programs</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Find the right partnership for you
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerTypes.map((partner) => (
                <div
                  key={partner.title}
                  className="group rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-transparent transition-all overflow-hidden"
                >
                  {/* Gradient illustration header */}
                  <div
                    className="relative h-36 overflow-hidden rounded-t-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${partner.gradientFrom} 0%, ${partner.gradientTo} 100%)`,
                    }}
                  >
                    <div
                      className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-15"
                      style={{ background: 'white' }}
                    />
                    <div
                      className="absolute -left-4 -bottom-8 w-24 h-24 rounded-full opacity-10"
                      style={{ background: 'white' }}
                    />
                    <div
                      className="absolute right-10 bottom-4 w-16 h-16 rounded-2xl rotate-12 opacity-10"
                      style={{ background: 'white' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white/90 text-[56px]">
                        {partner.icon}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3
                      className="text-[15px] font-medium text-foreground mb-2"
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {partner.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {partner.description}
                    </p>
                    <Link
                      to="/learn/mdn/partners/apply"
                      className="text-sm font-medium text-[#1a73e8] hover:text-[#174ea6] transition-colors"
                    >
                      Learn more &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: text content */}
              <div>
                <span className="text-[#34a853] font-semibold text-sm tracking-wider uppercase">
                  Partner Benefits
                </span>
                <h2
                  className="text-2xl md:text-3xl font-normal text-foreground mt-2 mb-4"
                  style={{ fontFamily: "'Google Sans', sans-serif" }}
                >
                  Why partner with MDN?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  MDN partners gain access to a growing ecosystem of learners, tools, and co-marketing
                  opportunities. Whether you are a technology company, content creator, reseller, or
                  academic institution, our partnership programs are designed to accelerate mutual growth.
                </p>
                <div className="space-y-3.5">
                  {partnerBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: 2x2 stat cards */}
              <div className="grid grid-cols-2 gap-5">
                {partnerStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-border/50 bg-card p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <span className="material-symbols-outlined text-[#1a73e8] text-[36px] mb-3 block">
                      {stat.icon}
                    </span>
                    <div
                      className="text-2xl font-bold text-foreground"
                      style={{ fontFamily: "'Google Sans', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 border-b border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#f9ab00] font-semibold text-sm tracking-wider uppercase">
                Featured Partners
              </span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Trusted by industry leaders
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {featuredPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-2xl border border-border/50 bg-card p-6 text-center hover:shadow-lg hover:border-transparent transition-all group"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                    style={{ background: `${partner.color}15` }}
                  >
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ color: partner.color }}
                    >
                      {partner.icon}
                    </span>
                  </div>
                  <h4
                    className="text-sm font-medium text-foreground"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    {partner.name}
                  </h4>
                </div>
              ))}
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
              Ready to partner with MDN?
            </h2>
            <p className="text-blue-100 text-sm mb-8 max-w-lg mx-auto">
              Join a growing network of technology companies, content creators, and academic institutions
              building the future of learning together.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/learn/mdn/partners/apply"
                className="px-6 py-2.5 bg-white text-[#1a73e8] rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Apply Now
              </Link>
              <Link
                to="/learn/mdn/partners/contact"
                className="px-6 py-2.5 border border-white/40 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Contact Partnerships
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
