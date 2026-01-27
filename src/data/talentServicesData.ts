export interface TalentServiceFeature {
  title: string;
  description: string;
}

export interface TalentServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface TalentServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: TalentServiceFeature[];
  process: TalentServiceProcess[];
  benefits: string[];
  technologies?: string[];
  useCases?: string[];
}

export const talentServicesData: TalentServiceData[] = [
  {
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    shortTitle: 'Staff Augmentation',
    tagline: 'Scale your team with top-tier talent on demand',
    description: 'Quickly extend your in-house team with skilled professionals who integrate seamlessly into your workflows and culture.',
    heroDescription: 'Bridge skill gaps and accelerate project delivery by embedding experienced professionals directly into your team. Our staff augmentation model provides flexible, on-demand talent that works as an extension of your organization.',
    features: [
      { title: 'Skill-Matched Placement', description: 'We carefully match candidates to your technical requirements, team culture, and project needs.' },
      { title: 'Flexible Engagement Models', description: 'Short-term, long-term, or project-based engagements that adapt to your business cycles.' },
      { title: 'Rapid Onboarding', description: 'Pre-vetted professionals who can integrate into your workflows within days, not weeks.' },
      { title: 'Seamless Team Integration', description: 'Augmented staff work within your tools, processes, and communication channels.' },
    ],
    process: [
      { step: 1, title: 'Requirements', description: 'Define skills, experience level, and engagement duration needed.' },
      { step: 2, title: 'Talent Matching', description: 'Source and shortlist pre-vetted candidates aligned to your needs.' },
      { step: 3, title: 'Onboarding', description: 'Integrate selected talent into your team and workflows.' },
      { step: 4, title: 'Management', description: 'Ongoing performance management and support throughout the engagement.' },
    ],
    benefits: [
      'Rapid access to specialized talent',
      'Reduced hiring timelines and costs',
      'Flexible team scaling',
      'No long-term commitment required',
      'Access to global talent pool',
      'Maintained project velocity',
    ],
  },
  {
    slug: 'dedicated-teams',
    title: 'Dedicated Development Teams',
    shortTitle: 'Dedicated Teams',
    tagline: 'Your own offshore team, fully managed',
    description: 'Build a dedicated team of engineers, designers, and project managers who work exclusively on your projects with full transparency.',
    heroDescription: 'Get a fully managed team that operates as your own remote department. We handle recruitment, HR, infrastructure, and management while you retain full control over priorities, processes, and deliverables.',
    features: [
      { title: 'Custom Team Composition', description: 'Assemble the exact mix of developers, QA engineers, designers, and managers you need.' },
      { title: 'Full Transparency', description: 'Direct communication with your team, daily standups, and real-time progress visibility.' },
      { title: 'Managed Operations', description: 'We handle HR, payroll, office space, equipment, and employee benefits.' },
      { title: 'Knowledge Retention', description: 'Dedicated teams build deep domain expertise and institutional knowledge over time.' },
    ],
    process: [
      { step: 1, title: 'Team Design', description: 'Define team structure, roles, and required competencies.' },
      { step: 2, title: 'Recruitment', description: 'Source, interview, and onboard team members to your standards.' },
      { step: 3, title: 'Setup', description: 'Establish workflows, tools, and communication channels.' },
      { step: 4, title: 'Delivery', description: 'Team operates with your processes, with ongoing optimization.' },
    ],
    benefits: [
      'Cost-effective scaling',
      'Full control over team and priorities',
      'Deep domain knowledge retention',
      'Predictable monthly costs',
      'Reduced management overhead',
      'Long-term strategic partnership',
    ],
  },
  {
    slug: 'recruitment-services',
    title: 'IT Recruitment Services',
    shortTitle: 'IT Recruitment',
    tagline: 'Find and hire the best tech talent',
    description: 'End-to-end recruitment services to help you identify, evaluate, and hire top technology professionals for permanent positions.',
    heroDescription: 'Attract and secure the best technology talent in a competitive market. Our recruitment specialists leverage deep industry networks and rigorous evaluation processes to find candidates who excel technically and culturally.',
    features: [
      { title: 'Technical Screening', description: 'Rigorous technical assessments and coding challenges to validate candidate skills.' },
      { title: 'Cultural Fit Assessment', description: 'Behavioral interviews and personality assessments to ensure team alignment.' },
      { title: 'Executive Search', description: 'Specialized search for CTOs, VPs of Engineering, and senior technical leaders.' },
      { title: 'Market Intelligence', description: 'Salary benchmarking, market trends, and competitive analysis to optimize your offers.' },
    ],
    process: [
      { step: 1, title: 'Brief', description: 'Understand role requirements, team dynamics, and company culture.' },
      { step: 2, title: 'Search', description: 'Source candidates through networks, databases, and targeted outreach.' },
      { step: 3, title: 'Evaluate', description: 'Technical and cultural assessments with detailed candidate reports.' },
      { step: 4, title: 'Hire', description: 'Support offer negotiation, onboarding, and post-hire follow-up.' },
    ],
    benefits: [
      'Access to passive candidates',
      'Reduced time-to-hire',
      'Higher quality placements',
      'Lower turnover rates',
      'Market salary insights',
      'Guaranteed placement period',
    ],
  },
  {
    slug: 'managed-services',
    title: 'Managed IT Services',
    shortTitle: 'Managed Services',
    tagline: 'Outsource your IT operations with confidence',
    description: 'Comprehensive managed services covering application support, infrastructure management, and ongoing maintenance.',
    heroDescription: 'Focus on your core business while we manage your IT operations. Our managed services provide proactive monitoring, maintenance, and support to keep your systems running at peak performance.',
    features: [
      { title: 'Application Support', description: '24/7 monitoring and support for your business-critical applications.' },
      { title: 'Infrastructure Management', description: 'Proactive management of servers, networks, and cloud environments.' },
      { title: 'Help Desk Services', description: 'Multi-tier technical support for your end users and internal teams.' },
      { title: 'SLA-Backed Performance', description: 'Guaranteed response times and uptime with transparent SLA reporting.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Audit current IT operations and identify improvement areas.' },
      { step: 2, title: 'Transition', description: 'Structured knowledge transfer and service transition plan.' },
      { step: 3, title: 'Operations', description: 'Full-service management with proactive monitoring and support.' },
      { step: 4, title: 'Optimization', description: 'Continuous improvement through regular reviews and optimization.' },
    ],
    benefits: [
      'Predictable IT costs',
      'Reduced operational burden',
      'Proactive issue prevention',
      'Access to broad expertise',
      'Improved system uptime',
      'Scalable service levels',
    ],
  },
];

export const getTalentServiceBySlug = (slug: string): TalentServiceData | undefined => {
  return talentServicesData.find((service) => service.slug === slug);
};
