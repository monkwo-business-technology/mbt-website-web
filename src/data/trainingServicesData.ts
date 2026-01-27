export interface TrainingServiceFeature {
  title: string;
  description: string;
}

export interface TrainingServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface TrainingServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: TrainingServiceFeature[];
  process: TrainingServiceProcess[];
  benefits: string[];
  technologies?: string[];
  useCases?: string[];
}

export const trainingServicesData: TrainingServiceData[] = [
  {
    slug: 'technical-training',
    title: 'Technical Training Programs',
    shortTitle: 'Technical Training',
    tagline: 'Upskill your teams with expert-led training',
    description: 'Comprehensive technical training programs covering software development, cloud computing, data engineering, and emerging technologies.',
    heroDescription: 'Empower your teams with hands-on technical skills. Our training programs are designed by industry practitioners and tailored to your organization\'s technology stack and skill gaps.',
    features: [
      { title: 'Custom Curriculum Design', description: 'Training programs tailored to your team\'s skill levels and technology stack.' },
      { title: 'Hands-On Labs', description: 'Practical exercises and real-world projects that reinforce learning outcomes.' },
      { title: 'Certification Preparation', description: 'Prepare teams for industry certifications in cloud, security, and data platforms.' },
      { title: 'Progress Tracking', description: 'Monitor learning outcomes with assessments, quizzes, and skill evaluations.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current skill levels and identify gaps.' },
      { step: 2, title: 'Curriculum Design', description: 'Design customized training modules and learning paths.' },
      { step: 3, title: 'Delivery', description: 'Deliver training through workshops, online sessions, or blended formats.' },
      { step: 4, title: 'Evaluation', description: 'Assess outcomes and provide ongoing learning recommendations.' },
    ],
    benefits: [
      'Reduced skill gaps in technical teams',
      'Improved employee retention',
      'Faster adoption of new technologies',
      'Industry-recognized certifications',
      'Hands-on practical experience',
      'Customized to your tech stack',
    ],
  },
  {
    slug: 'workshops-seminars',
    title: 'Workshops & Seminars',
    shortTitle: 'Workshops & Seminars',
    tagline: 'Focused sessions on emerging technologies',
    description: 'Interactive workshops and seminars covering AI, cloud computing, DevOps, data analytics, and other cutting-edge topics.',
    heroDescription: 'Stay ahead of the technology curve with focused, expert-led workshops. Our seminars bring practical insights on emerging technologies directly to your teams.',
    features: [
      { title: 'Emerging Tech Topics', description: 'Workshops on AI, blockchain, IoT, cloud-native development, and more.' },
      { title: 'Interactive Format', description: 'Hands-on sessions with live demos, coding exercises, and group discussions.' },
      { title: 'Industry Expert Speakers', description: 'Learn from practitioners with real-world experience in cutting-edge technologies.' },
      { title: 'Custom Workshop Design', description: 'Tailored workshops focused on your organization\'s specific challenges and goals.' },
    ],
    process: [
      { step: 1, title: 'Topic Selection', description: 'Identify relevant topics based on team needs and industry trends.' },
      { step: 2, title: 'Content Preparation', description: 'Develop workshop materials, demos, and hands-on exercises.' },
      { step: 3, title: 'Delivery', description: 'Conduct interactive sessions with expert facilitators.' },
      { step: 4, title: 'Follow-Up', description: 'Provide resources, recordings, and continued learning paths.' },
    ],
    benefits: [
      'Exposure to latest technologies',
      'Practical, hands-on learning',
      'Networking with industry experts',
      'Immediate applicable knowledge',
      'Team alignment on new technologies',
      'Inspiration for innovation',
    ],
  },
  {
    slug: 'onboarding-programs',
    title: 'Technology Onboarding Programs',
    shortTitle: 'Onboarding Programs',
    tagline: 'Smooth adoption of new technologies',
    description: 'Structured onboarding programs that ensure teams can effectively adopt and utilize new tools, platforms, and methodologies.',
    heroDescription: 'Ensure successful technology adoption with structured onboarding programs. We guide your teams through the transition to new tools, platforms, and processes with comprehensive training and support.',
    features: [
      { title: 'Platform Onboarding', description: 'Structured programs for adopting new software platforms, tools, and development environments.' },
      { title: 'Change Management', description: 'Support organizational change with communication plans and stakeholder engagement.' },
      { title: 'Documentation & Guides', description: 'Create comprehensive documentation, quick-start guides, and reference materials.' },
      { title: 'Ongoing Support', description: 'Provide post-onboarding support with office hours, Q&A sessions, and help desk access.' },
    ],
    process: [
      { step: 1, title: 'Planning', description: 'Define onboarding scope, timeline, and success criteria.' },
      { step: 2, title: 'Material Development', description: 'Create training materials, guides, and sandbox environments.' },
      { step: 3, title: 'Rollout', description: 'Execute phased onboarding with hands-on sessions and mentoring.' },
      { step: 4, title: 'Support', description: 'Provide ongoing support and address adoption challenges.' },
    ],
    benefits: [
      'Faster technology adoption',
      'Reduced productivity loss during transitions',
      'Comprehensive reference materials',
      'Structured learning paths',
      'Measurable adoption metrics',
      'Ongoing post-training support',
    ],
  },
  {
    slug: 'capacity-building',
    title: 'Organizational Capacity Building',
    shortTitle: 'Capacity Building',
    tagline: 'Build lasting technical capabilities',
    description: 'Long-term programs to build and sustain technical capabilities within your organization, including mentoring and knowledge transfer.',
    heroDescription: 'Build enduring technical capabilities within your organization. Our capacity building programs combine mentoring, knowledge transfer, and institutional learning to create self-sustaining technical excellence.',
    features: [
      { title: 'Mentoring Programs', description: 'Pair your teams with experienced mentors for guided skill development and knowledge transfer.' },
      { title: 'Center of Excellence Setup', description: 'Establish internal centers of excellence for key technology domains.' },
      { title: 'Knowledge Management', description: 'Build knowledge bases, best practices repositories, and internal documentation systems.' },
      { title: 'Leadership Development', description: 'Develop technical leadership capabilities for architects, leads, and engineering managers.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate organizational capabilities and define growth objectives.' },
      { step: 2, title: 'Program Design', description: 'Design capacity building programs aligned with strategic goals.' },
      { step: 3, title: 'Execution', description: 'Implement programs with regular milestones and check-ins.' },
      { step: 4, title: 'Sustainability', description: 'Ensure long-term sustainability through documentation and process embedding.' },
    ],
    benefits: [
      'Self-sustaining technical teams',
      'Reduced dependency on external consultants',
      'Strong technical leadership pipeline',
      'Institutional knowledge preservation',
      'Continuous improvement culture',
      'Aligned skills with business strategy',
    ],
  },
];

export const getTrainingServiceBySlug = (slug: string): TrainingServiceData | undefined => {
  return trainingServicesData.find((service) => service.slug === slug);
};
