import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import StickyDemoBanner from '../../components/layout/StickyDemoBanner';
import { webinarsData } from '@/data/webinarsData';

const WebinarsPage: React.FC = () => {
  const upcoming = webinarsData.filter((w) => w.status === 'upcoming');
  const recorded = webinarsData.filter((w) => w.status === 'recorded');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent mb-4 block">Webinars</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Live & Recorded Sessions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our experts for live discussions on the latest in technology, or catch up on past sessions at your own pace.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Upcoming Webinars</h2>

            {upcoming.length === 0 ? (
              <div className="rounded-2xl border border-border/50 bg-card p-12 text-center">
                <p className="text-muted-foreground">No upcoming webinars scheduled. Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {upcoming.map((webinar) => (
                  <div
                    key={webinar.slug}
                    className="rounded-2xl border border-border/50 bg-card p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-medium text-accent">{webinar.date}</span>
                          <span className="text-sm text-muted-foreground">{webinar.time}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{webinar.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          <span className="font-medium text-foreground">{webinar.speaker}</span> &middot; {webinar.speakerRole}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">{webinar.description}</p>
                      </div>
                      <div className="shrink-0">
                        <button className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Recordings */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Past Recordings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recorded.map((webinar) => (
                <div
                  key={webinar.slug}
                  className="rounded-2xl border border-border/50 bg-card p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{webinar.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-foreground">{webinar.speaker}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">{webinar.topic}</p>
                  {webinar.duration && (
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
                      {webinar.duration}
                    </span>
                  )}
                  <div>
                    <Link
                      to={`/learn/webinars/${webinar.slug}`}
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      Watch Recording &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default WebinarsPage;
