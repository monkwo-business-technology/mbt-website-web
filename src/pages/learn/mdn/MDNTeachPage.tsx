import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import StickyDemoBanner from '../../../components/layout/StickyDemoBanner';
import MDNSubNav from '../../../components/layout/MDNSubNav';

export default function MDNTeachPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <MDNSubNav />

        {/* Hero */}
        <section className="border-b border-border/50 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-[1600px] mx-auto px-6 py-24 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1a73e8] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[28px]">cast_for_education</span>
              </div>
            </div>
            <h1
              className="text-3xl md:text-5xl font-normal tracking-tight text-foreground mb-4"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              Share Your Expertise With the World
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Become an MDN instructor and help millions learn technology, science, and mathematics.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/learn/mdn/teach/apply"
                className="px-8 py-3 bg-[#1a73e8] text-white rounded-full text-sm font-medium hover:bg-[#185abc] hover:shadow-lg transition-all"
              >
                Apply to Teach
              </Link>
              <a
                href="#why-teach"
                className="px-8 py-3 border border-border/50 text-foreground rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Why Teach on MDN */}
        <section id="why-teach" className="py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#34a853] font-semibold text-sm tracking-wider uppercase">Why Teach on MDN</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Everything you need to build a teaching career
              </h2>
            </div>

            {/* Row 1: Earn While You Teach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#34a853] to-[#0d904f]">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute right-8 bottom-8 w-20 h-20 rounded-2xl rotate-12 bg-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/90 text-[80px]">payments</span>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <span className="w-3 h-3 rounded-full bg-[#ea4335]" />
                      <span className="w-3 h-3 rounded-full bg-[#f9ab00]" />
                      <span className="w-3 h-3 rounded-full bg-white/60" />
                      <span className="w-3 h-3 rounded-full bg-[#4285f4]" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#34a853]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#34a853] text-[20px]">payments</span>
                  </div>
                  <h3
                    className="text-xl font-medium text-foreground"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    Earn While You Teach
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Turn your knowledge into a sustainable income stream. Our competitive compensation model ensures you are rewarded for every student you help succeed.
                </p>
                <div className="space-y-3">
                  {[
                    'Revenue sharing on all course enrollments',
                    'Monthly payouts with transparent reporting',
                    'Performance bonuses for top-rated courses',
                    'Passive income from evergreen content',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Reach Millions of Learners */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4285f4]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4285f4] text-[20px]">groups</span>
                  </div>
                  <h3
                    className="text-xl font-medium text-foreground"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    Reach Millions of Learners
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  MDN connects you to a global audience of motivated learners. No need to build an audience from scratch -- we bring the students to you.
                </p>
                <div className="space-y-3">
                  {[
                    'Global audience across 190+ countries',
                    'Built-in marketing and discovery engine',
                    'Course promotion on homepage and search',
                    'Student reviews that build your reputation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#4285f4] to-[#1a73e8]">
                <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute left-8 bottom-8 w-20 h-20 rounded-2xl -rotate-12 bg-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/90 text-[80px]">groups</span>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      {['1', '2', '3', '4', '5'].map((n) => (
                        <div
                          key={n}
                          className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-white text-[14px]">person</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Professional Tools & Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#f9ab00] to-[#e8710a]">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute right-8 top-8 w-20 h-20 rounded-2xl rotate-12 bg-white/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/90 text-[80px]">movie_edit</span>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <span className="material-symbols-outlined text-white/40 text-[28px]">videocam</span>
                      <span className="material-symbols-outlined text-white/60 text-[36px]">dashboard</span>
                      <span className="material-symbols-outlined text-white/40 text-[28px]">headset_mic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f9ab00]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#f9ab00] text-[20px]">movie_edit</span>
                  </div>
                  <h3
                    className="text-xl font-medium text-foreground"
                    style={{ fontFamily: "'Google Sans', sans-serif" }}
                  >
                    Professional Tools & Support
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Focus on teaching while we handle the rest. Our platform provides everything you need to create, publish, and manage world-class courses.
                </p>
                <div className="space-y-3">
                  {[
                    'Course builder studio with drag-and-drop editor',
                    'Video hosting included at no extra cost',
                    'Analytics dashboard with student insights',
                    'Dedicated support team for instructors',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#1a73e8] font-semibold text-sm tracking-wider uppercase">Get Started</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                Four steps to becoming an instructor
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#4285f4] via-[#f9ab00] to-[#ea4335]" />

              {[
                {
                  step: '1',
                  icon: 'edit_note',
                  title: 'Apply',
                  description: 'Fill out our instructor application with your background, expertise, and a course topic proposal.',
                  color: '#4285f4',
                  gradient: 'from-[#4285f4] to-[#669df6]',
                },
                {
                  step: '2',
                  icon: 'check_circle',
                  title: 'Get Approved',
                  description: 'Our review team evaluates your application and provides feedback within 5 business days.',
                  color: '#34a853',
                  gradient: 'from-[#34a853] to-[#57bb8a]',
                },
                {
                  step: '3',
                  icon: 'video_camera_front',
                  title: 'Create Content',
                  description: 'Use our course builder studio to record lectures, create exercises, and design assessments.',
                  color: '#f9ab00',
                  gradient: 'from-[#f9ab00] to-[#fdd663]',
                },
                {
                  step: '4',
                  icon: 'trending_up',
                  title: 'Start Earning',
                  description: 'Publish your course and start earning as students around the world enroll and learn.',
                  color: '#ea4335',
                  gradient: 'from-[#ea4335] to-[#f28b82]',
                },
              ].map((item) => (
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
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Requirements */}
        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#f9ab00] font-semibold text-sm tracking-wider uppercase">Requirements</span>
              <h2
                className="text-2xl md:text-3xl font-normal text-foreground mt-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                What we look for in instructors
              </h2>
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: 'school',
                    title: 'Subject Expertise',
                    description: 'Deep knowledge in your field with demonstrable credentials or professional experience.',
                    color: '#4285f4',
                  },
                  {
                    icon: 'history_edu',
                    title: 'Teaching Experience Preferred',
                    description: 'Prior experience teaching, tutoring, mentoring, or creating educational content is a plus.',
                    color: '#34a853',
                  },
                  {
                    icon: 'record_voice_over',
                    title: 'Clear Communication Skills',
                    description: 'Ability to explain complex concepts in simple, engaging, and accessible language.',
                    color: '#ea4335',
                  },
                  {
                    icon: 'favorite',
                    title: 'Passion for Education',
                    description: 'A genuine desire to help others learn and grow in their knowledge and skills.',
                    color: '#f9ab00',
                  },
                  {
                    icon: 'workspace_premium',
                    title: 'Commitment to Quality',
                    description: 'Willingness to maintain high standards and continuously improve your course content.',
                    color: '#a142f4',
                  },
                  {
                    icon: 'edit_document',
                    title: 'Original Content',
                    description: 'All courses must be original work. No plagiarized, recycled, or AI-generated content.',
                    color: '#00acc1',
                  },
                ].map((req) => (
                  <div key={req.title} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${req.color}15` }}
                    >
                      <span
                        className="material-symbols-outlined text-[22px]"
                        style={{ color: req.color }}
                      >
                        {req.icon}
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-sm font-medium text-foreground mb-1"
                        style={{ fontFamily: "'Google Sans', sans-serif" }}
                      >
                        {req.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#34a853]">
          <div className="max-w-[1600px] mx-auto px-6 text-center">
            <h2
              className="text-2xl font-normal text-white mb-3"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              Ready to inspire the next generation?
            </h2>
            <p className="text-green-100 text-sm mb-8 max-w-lg mx-auto">
              Join a growing community of educators who are shaping the future of learning on MDN.
            </p>
            <Link
              to="/learn/mdn/teach/apply"
              className="inline-block px-8 py-3 bg-white text-[#34a853] rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
            >
              Start Your Application
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
}
