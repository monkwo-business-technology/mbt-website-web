export interface Webinar {
  slug: string;
  title: string;
  speaker: string;
  speakerRole: string;
  date: string;
  time: string;
  topic: string;
  description: string;
  status: "upcoming" | "recorded";
  duration?: string;
}

export const webinarsData: Webinar[] = [
  {
    slug: "ai-in-enterprise-2026",
    title: "AI in Enterprise: From Proof of Concept to Production",
    speaker: "Dr. Amara Osei",
    speakerRole: "Chief AI Officer, Monkwo",
    date: "2026-03-12",
    time: "2:00 PM EST",
    topic: "AI in Enterprise",
    description:
      "Discover practical strategies for moving AI initiatives beyond the pilot stage. Dr. Osei shares lessons learned from deploying enterprise AI systems at scale, covering organizational readiness, model governance, and the technical infrastructure needed to operationalize machine learning across business units.",
    status: "upcoming",
  },
  {
    slug: "data-governance-best-practices",
    title: "Data Governance Best Practices for the Modern Enterprise",
    speaker: "James Whitfield",
    speakerRole: "VP of Data Engineering, Monkwo",
    date: "2026-04-09",
    time: "11:00 AM EST",
    topic: "Data Governance Best Practices",
    description:
      "Learn how to build a robust data governance framework that balances compliance requirements with agility. This session covers data cataloging, lineage tracking, quality management, access policies, and how to foster a data-driven culture without creating bureaucratic bottlenecks.",
    status: "upcoming",
  },
  {
    slug: "cloud-migration-strategies-2026",
    title: "Cloud Migration Strategies: Lessons from 50+ Enterprise Migrations",
    speaker: "Sofia Ramirez",
    speakerRole: "Director of Cloud Solutions, Monkwo",
    date: "2026-02-19",
    time: "1:00 PM EST",
    topic: "Cloud Migration Strategies",
    description:
      "Drawing from over 50 enterprise cloud migration engagements, Sofia walks through the decision frameworks, migration patterns, and risk mitigation strategies that separate successful migrations from costly failures. Includes real-world examples of lift-and-shift, re-platforming, and cloud-native refactoring approaches.",
    status: "upcoming",
  },
  {
    slug: "building-scalable-apis",
    title: "Building Scalable APIs: Architecture Patterns That Last",
    speaker: "David Nwosu",
    speakerRole: "Principal Engineer, Monkwo",
    date: "2025-11-14",
    time: "3:00 PM EST",
    topic: "Building Scalable APIs",
    description:
      "A deep dive into API design patterns that scale from thousands to millions of requests. Covers REST vs. GraphQL trade-offs, versioning strategies, rate limiting, caching architectures, and how to design APIs that remain backward compatible as your platform evolves.",
    status: "recorded",
    duration: "58 minutes",
  },
  {
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for Technology Leaders",
    speaker: "Rachel Tan",
    speakerRole: "Head of Security, Monkwo",
    date: "2025-10-02",
    time: "12:00 PM EST",
    topic: "Cybersecurity Essentials",
    description:
      "An executive-level overview of the evolving threat landscape and the security practices every technology leader must prioritize. Topics include zero-trust architecture, supply chain security, incident response planning, and building a security-first engineering culture.",
    status: "recorded",
    duration: "52 minutes",
  },
  {
    slug: "modern-frontend-architecture",
    title: "Modern Frontend Architecture: Micro-Frontends and Beyond",
    speaker: "Elena Voronova",
    speakerRole: "Frontend Architecture Lead, Monkwo",
    date: "2025-08-21",
    time: "2:00 PM EST",
    topic: "Modern Frontend Architecture",
    description:
      "Explore the architectural patterns driving modern frontend development at scale. Elena covers micro-frontend composition strategies, module federation, server components, island architecture, and how to choose the right pattern for your team size and product complexity.",
    status: "recorded",
    duration: "61 minutes",
  },
  {
    slug: "mlops-pipeline-design",
    title: "MLOps Pipeline Design: Automating the ML Lifecycle",
    speaker: "Dr. Kwame Asante",
    speakerRole: "ML Engineering Manager, Monkwo",
    date: "2025-09-18",
    time: "11:00 AM EST",
    topic: "MLOps Pipeline Design",
    description:
      "Learn how to design end-to-end MLOps pipelines that automate data ingestion, feature engineering, model training, evaluation, deployment, and monitoring. Dr. Asante demonstrates practical implementations using open-source tools and shares patterns for managing model drift and retraining triggers.",
    status: "recorded",
    duration: "64 minutes",
  },
  {
    slug: "digital-transformation-playbook",
    title: "The Digital Transformation Playbook: Strategy Meets Execution",
    speaker: "Priya Kapoor",
    speakerRole: "Managing Director, Monkwo Consulting",
    date: "2025-07-10",
    time: "1:00 PM EST",
    topic: "Digital Transformation Playbook",
    description:
      "A practical framework for planning and executing digital transformation initiatives that deliver measurable business value. Priya shares the playbook Monkwo uses with Fortune 500 clients, covering stakeholder alignment, technology selection, change management, and how to measure transformation success beyond IT metrics.",
    status: "recorded",
    duration: "55 minutes",
  },
];
