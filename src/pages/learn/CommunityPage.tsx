import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Github, Mail, Calendar, Star } from 'lucide-react';
import { toast } from 'sonner';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';

const contributors = [
  { name: 'Alex Chen', role: 'Core Contributor' },
  { name: 'Fatima Al-Rashid', role: 'Documentation Lead' },
  { name: 'Marcus Johnson', role: 'Plugin Developer' },
];

const CommunityPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success('Thanks for subscribing! Check your inbox for a confirmation email.');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent mb-4 block">Community</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Connect with Fellow Developers
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join the Monkwo community to share knowledge, collaborate on projects, and stay up to date with the latest in technology.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
            {/* Discussion Forums + Open Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Discussion Forums */}
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Discussion Forums</h3>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Coming Soon</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ask questions, share solutions, and engage in technical discussions with the Monkwo developer community. Our forums will feature categories for each product area, best practices, and community showcases.
                </p>
              </div>

              {/* Open Source */}
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground mb-5">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Contribute to our open source projects on GitHub. We maintain SDKs, developer tools, and sample applications that the community can use, extend, and improve.
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Visit our GitHub &rarr;
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground mb-5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Newsletter</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get weekly insights on technology trends, platform updates, community highlights, and upcoming events delivered straight to your inbox.
                  </p>
                </div>
                <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 md:w-64 px-4 py-3 rounded-full border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Events & Meetups */}
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-foreground">Events & Meetups</h3>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Coming Soon</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join local tech meetups, hackathons, and community events organized by Monkwo and our partners. Network with fellow developers, learn from industry experts, and build connections in your city.
              </p>
            </div>

            {/* Contributor Spotlight */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground">Contributor Spotlight</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contributors.map((contributor) => (
                  <div
                    key={contributor.name}
                    className="rounded-2xl border border-border/50 bg-card p-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-muted-foreground text-xl font-semibold">
                      {contributor.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{contributor.name}</h3>
                    <p className="text-sm text-muted-foreground">{contributor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default CommunityPage;
