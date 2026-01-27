import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Clock, Plus } from 'lucide-react';
import { useTutorials } from '@/context/TutorialContext';

const AdminDashboard: React.FC = () => {
  const { tutorials, publishedTutorials, draftTutorials } = useTutorials();

  const recentTutorials = [...tutorials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const stats = [
    {
      label: 'Total Tutorials',
      count: tutorials.length,
      icon: FileText,
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      label: 'Published',
      count: publishedTutorials.length,
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
    {
      label: 'Drafts',
      count: draftTutorials.length,
      icon: Clock,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
              <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.count}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link
            to="/admin/tutorials/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Tutorial
          </Link>
          <Link
            to="/admin/tutorials"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            View Tutorials
          </Link>
        </div>
      </div>

      {/* Recent Tutorials */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Tutorials</h2>
        {recentTutorials.length === 0 ? (
          <p className="text-muted-foreground text-sm">No tutorials yet.</p>
        ) : (
          <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="px-6 py-3 font-medium">Title</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTutorials.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link
                        to={`/admin/tutorials/edit/${t.id}`}
                        className="text-foreground hover:text-accent transition-colors font-medium"
                      >
                        {t.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          t.status === 'published'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-amber-500/10 text-amber-500'
                        }`}
                      >
                        {t.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
