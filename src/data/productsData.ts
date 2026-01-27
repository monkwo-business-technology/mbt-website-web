export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductProcess {
  step: number;
  title: string;
  description: string;
}

export interface ProductData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  color: string;
  features: ProductFeature[];
  process: ProductProcess[];
  benefits: string[];
  technologies?: string[];
}

export const productsData: ProductData[] = [
  {
    slug: 'cribro',
    title: 'CRIBRO - Data Quality & Master Data Management',
    shortTitle: 'CRIBRO',
    tagline: 'Ensure data integrity across your enterprise',
    description: 'CRIBRO is a comprehensive data quality and master data management platform that ensures accuracy, consistency, and reliability of your enterprise data assets.',
    heroDescription: 'Data is the foundation of every business decision. CRIBRO empowers organizations to maintain pristine data quality and unified master data across all systems, enabling confident decision-making and regulatory compliance.',
    color: 'from-blue-500 to-blue-600',
    features: [
      { title: 'Automated Data Profiling & Cleansing', description: 'Continuously scan, profile, and cleanse data across all sources to identify duplicates, inconsistencies, and anomalies in real time.' },
      { title: 'Master Data Governance', description: 'Establish a single source of truth with centralized governance policies, data stewardship workflows, and role-based access controls.' },
      { title: 'Cross-System Data Matching', description: 'Advanced matching algorithms reconcile records across disparate systems, ensuring consistency throughout your enterprise landscape.' },
      { title: 'Compliance & Audit Reporting', description: 'Generate comprehensive audit trails and compliance reports to meet regulatory requirements such as GDPR, SOX, and industry-specific mandates.' },
    ],
    process: [
      { step: 1, title: 'Data Assessment', description: 'Analyze your existing data landscape to identify quality gaps, redundancies, and governance needs.' },
      { step: 2, title: 'Rule Configuration', description: 'Define data quality rules, matching criteria, and governance policies tailored to your business requirements.' },
      { step: 3, title: 'Integration & Deployment', description: 'Connect CRIBRO to your source systems and deploy automated profiling and cleansing pipelines.' },
      { step: 4, title: 'Monitoring & Optimization', description: 'Continuously monitor data quality metrics and refine rules to maintain optimal data integrity.' },
    ],
    benefits: [
      'Eliminate data silos with a unified master data hub',
      'Reduce data-related errors by up to 90%',
      'Accelerate regulatory compliance reporting',
      'Improve downstream analytics and BI accuracy',
      'Lower operational costs from manual data correction',
      'Enable confident, data-driven decision making',
    ],
    technologies: ['Apache Spark', 'Kafka', 'Elasticsearch', 'PostgreSQL', 'Python', 'REST APIs'],
  },
  {
    slug: 'cash-complete',
    title: 'CASH COMPLETE - Cash Inventory Management',
    shortTitle: 'CASH COMPLETE',
    tagline: 'Take full control of your cash operations',
    description: 'CASH COMPLETE provides end-to-end visibility and management of cash inventory across branches, vaults, ATMs, and transit, optimizing liquidity and reducing operational risk.',
    heroDescription: 'Cash remains a critical component of financial operations. CASH COMPLETE gives organizations real-time visibility into cash positions across every branch, vault, and channel, enabling smarter forecasting and reduced carrying costs.',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      { title: 'Real-Time Cash Position Tracking', description: 'Monitor cash balances across all branches, ATMs, vaults, and cash-in-transit with a centralized dashboard updated in real time.' },
      { title: 'Demand Forecasting & Optimization', description: 'AI-driven forecasting models predict cash demand by location and time period, minimizing idle cash and avoiding shortfalls.' },
      { title: 'Cash Ordering & Replenishment', description: 'Automate cash order workflows between branches, central vaults, and cash-in-transit providers with configurable approval chains.' },
      { title: 'Reconciliation & Variance Analysis', description: 'Automated reconciliation of physical cash counts against system balances with instant variance detection and alerting.' },
    ],
    process: [
      { step: 1, title: 'Infrastructure Mapping', description: 'Map your branch network, vaults, ATMs, and cash flow channels to build a comprehensive cash topology.' },
      { step: 2, title: 'System Integration', description: 'Integrate with core banking, ATM controllers, and ERP systems for seamless data exchange.' },
      { step: 3, title: 'Configuration & Training', description: 'Configure forecasting models, approval workflows, and alert thresholds; train operations teams.' },
      { step: 4, title: 'Go-Live & Continuous Improvement', description: 'Launch with real-time monitoring and iteratively refine forecasting accuracy and operational workflows.' },
    ],
    benefits: [
      'Reduce cash carrying costs by up to 30%',
      'Eliminate manual cash counting errors',
      'Optimize branch-level cash allocation',
      'Accelerate end-of-day reconciliation',
      'Improve audit readiness with automated trail',
      'Enhance operational efficiency across the branch network',
    ],
    technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Angular', 'REST APIs', 'Machine Learning'],
  },
  {
    slug: 'idea-wave',
    title: 'IDEA WAVE - Innovation Management',
    shortTitle: 'IDEA WAVE',
    tagline: 'Turn ideas into business impact',
    description: 'IDEA WAVE is an innovation management platform that captures, evaluates, and accelerates ideas from employees, partners, and customers through a structured innovation pipeline.',
    heroDescription: 'Innovation does not happen by accident. IDEA WAVE provides a structured yet flexible platform for capturing ideas from every corner of your organization, evaluating them objectively, and fast-tracking the most promising concepts to execution.',
    color: 'from-violet-500 to-violet-600',
    features: [
      { title: 'Idea Capture & Crowdsourcing', description: 'Enable employees, partners, and customers to submit ideas through intuitive forms, campaigns, and challenges with rich media support.' },
      { title: 'Evaluation & Scoring Framework', description: 'Configurable scoring criteria and review committees ensure objective, transparent evaluation of every submitted idea.' },
      { title: 'Innovation Pipeline Management', description: 'Track ideas through customizable stages from submission to implementation with built-in milestone tracking and resource allocation.' },
      { title: 'Analytics & ROI Tracking', description: 'Measure innovation program health with dashboards that track submission volume, conversion rates, and realized business value.' },
    ],
    process: [
      { step: 1, title: 'Program Design', description: 'Define innovation themes, evaluation criteria, and pipeline stages aligned with strategic objectives.' },
      { step: 2, title: 'Platform Setup', description: 'Configure the platform with your branding, user roles, scoring rubrics, and workflow automations.' },
      { step: 3, title: 'Launch & Engagement', description: 'Launch innovation campaigns and drive participation through gamification, rewards, and communication strategies.' },
      { step: 4, title: 'Review & Scale', description: 'Evaluate program performance, refine processes, and scale successful innovations across the organization.' },
    ],
    benefits: [
      'Tap into the collective intelligence of your organization',
      'Reduce time from idea to implementation',
      'Increase employee engagement and retention',
      'Build a sustainable culture of innovation',
      'Track ROI of innovation initiatives transparently',
      'Align innovation efforts with strategic business goals',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Redis', 'AWS'],
  },
  {
    slug: 'bluecanary',
    title: 'BLUECANARY - E-Learning Platform',
    shortTitle: 'BLUECANARY',
    tagline: 'Learn smarter with adaptive experiences',
    description: 'BLUECANARY is an adaptive e-learning platform that delivers personalized, interactive learning experiences tailored to individual learner needs and organizational training goals.',
    heroDescription: 'One-size-fits-all training is a thing of the past. BLUECANARY uses adaptive learning technology to deliver personalized educational experiences that maximize knowledge retention, engagement, and measurable skill development.',
    color: 'from-amber-500 to-orange-500',
    features: [
      { title: 'Adaptive Learning Paths', description: 'AI-driven algorithms adjust course content, difficulty, and pacing based on individual learner performance and preferences.' },
      { title: 'Interactive Content Authoring', description: 'Built-in authoring tools to create rich multimedia courses with quizzes, simulations, videos, and interactive exercises.' },
      { title: 'Progress Tracking & Certifications', description: 'Comprehensive dashboards for learners and administrators to track progress, competency attainment, and certification completions.' },
      { title: 'Social & Collaborative Learning', description: 'Discussion forums, peer reviews, group projects, and mentoring features that foster collaborative knowledge sharing.' },
    ],
    process: [
      { step: 1, title: 'Needs Analysis', description: 'Assess organizational training requirements, learner profiles, and competency frameworks.' },
      { step: 2, title: 'Content Development', description: 'Create or migrate course content using the authoring toolkit with instructional design best practices.' },
      { step: 3, title: 'Platform Deployment', description: 'Deploy the platform with SSO integration, branding customization, and learner onboarding.' },
      { step: 4, title: 'Engagement & Iteration', description: 'Monitor learning analytics, gather feedback, and continuously improve content and learning paths.' },
    ],
    benefits: [
      'Improve knowledge retention by up to 60% with adaptive learning',
      'Reduce training costs through digital delivery',
      'Scale training programs across global teams',
      'Track compliance training completion in real time',
      'Increase learner engagement with interactive content',
      'Generate actionable insights from learning analytics',
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS', 'SCORM/xAPI'],
  },
  {
    slug: 'blueprime',
    title: 'BLUEPRIME - Sales Enhancement',
    shortTitle: 'BLUEPRIME',
    tagline: 'Empower your sales teams to close more deals',
    description: 'BLUEPRIME is a sales enhancement platform that equips sales teams with intelligent tools for lead management, customer engagement, and pipeline optimization.',
    heroDescription: 'Winning in sales requires the right insights at the right time. BLUEPRIME arms your sales teams with AI-powered recommendations, streamlined workflows, and deep customer intelligence to accelerate deal velocity and revenue growth.',
    color: 'from-rose-500 to-rose-600',
    features: [
      { title: 'Intelligent Lead Scoring', description: 'Machine learning models score and prioritize leads based on behavioral signals, demographics, and historical conversion patterns.' },
      { title: 'Customer 360 View', description: 'Unified customer profiles aggregating interactions across email, calls, meetings, and digital touchpoints for complete context.' },
      { title: 'Pipeline Analytics & Forecasting', description: 'Real-time pipeline visibility with AI-driven forecasting to predict revenue outcomes and identify at-risk deals.' },
      { title: 'Guided Selling Playbooks', description: 'Configurable sales playbooks that guide reps through optimal next actions based on deal stage and customer profile.' },
    ],
    process: [
      { step: 1, title: 'Sales Process Mapping', description: 'Document your sales methodology, pipeline stages, and key performance indicators.' },
      { step: 2, title: 'Data Integration', description: 'Connect CRM, email, phone systems, and marketing platforms for a unified data foundation.' },
      { step: 3, title: 'Configuration & Enablement', description: 'Configure scoring models, playbooks, and dashboards; train sales teams on the platform.' },
      { step: 4, title: 'Performance Optimization', description: 'Analyze sales performance data and continuously refine models and workflows for better outcomes.' },
    ],
    benefits: [
      'Increase sales conversion rates by up to 35%',
      'Reduce sales cycle length with guided selling',
      'Improve forecast accuracy with AI-driven predictions',
      'Enhance customer engagement with personalized outreach',
      'Boost rep productivity with automated administrative tasks',
      'Gain complete visibility into pipeline health and risks',
    ],
    technologies: ['React', '.NET', 'SQL Server', 'Azure ML', 'Power BI', 'REST APIs'],
  },
  {
    slug: 'simplex',
    title: 'SIMPLEX - Voucher Management',
    shortTitle: 'SIMPLEX',
    tagline: 'Simplify voucher operations end to end',
    description: 'SIMPLEX is a comprehensive voucher management system for issuing, distributing, redeeming, and tracking vouchers across digital and physical channels.',
    heroDescription: 'Managing vouchers at scale requires precision and control. SIMPLEX streamlines the entire voucher lifecycle from creation and distribution to redemption and reconciliation, ensuring security, accuracy, and operational efficiency.',
    color: 'from-cyan-500 to-cyan-600',
    features: [
      { title: 'Voucher Generation & Distribution', description: 'Create and distribute physical and digital vouchers in bulk with configurable denominations, expiry rules, and distribution channels.' },
      { title: 'Multi-Channel Redemption', description: 'Support voucher redemption across POS terminals, web portals, mobile apps, and partner networks with real-time validation.' },
      { title: 'Fraud Detection & Security', description: 'Built-in fraud detection algorithms monitor redemption patterns and flag suspicious activity to prevent misuse and financial loss.' },
      { title: 'Reconciliation & Reporting', description: 'Automated reconciliation of issued versus redeemed vouchers with detailed financial reporting and liability tracking.' },
    ],
    process: [
      { step: 1, title: 'Requirements Analysis', description: 'Define voucher types, denominations, business rules, and integration requirements with existing systems.' },
      { step: 2, title: 'System Configuration', description: 'Configure voucher templates, distribution channels, redemption rules, and security parameters.' },
      { step: 3, title: 'Integration & Testing', description: 'Integrate with POS, banking, and partner systems; conduct end-to-end testing across all channels.' },
      { step: 4, title: 'Launch & Monitoring', description: 'Go live with real-time monitoring dashboards and continuous fraud detection oversight.' },
    ],
    benefits: [
      'Eliminate voucher fraud with real-time security monitoring',
      'Reduce reconciliation effort by up to 80%',
      'Support omnichannel redemption seamlessly',
      'Gain real-time visibility into voucher liability',
      'Accelerate voucher campaign launches',
      'Ensure regulatory compliance with full audit trails',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'RabbitMQ', 'Docker'],
  },
  {
    slug: 'ticketing',
    title: 'Ticketing Application',
    shortTitle: 'Ticketing',
    tagline: 'Resolve issues faster with structured ticket management',
    description: 'A robust ticketing system for managing customer support and internal IT tickets with automated routing, SLA tracking, and comprehensive reporting.',
    heroDescription: 'Efficient issue resolution starts with the right system. Our Ticketing Application provides a structured, automated approach to capturing, routing, and resolving support requests, ensuring nothing falls through the cracks and SLAs are consistently met.',
    color: 'from-indigo-500 to-indigo-600',
    features: [
      { title: 'Intelligent Ticket Routing', description: 'Automatically categorize and route tickets to the right team or agent based on content analysis, priority, and workload balancing.' },
      { title: 'SLA Management & Escalation', description: 'Define and enforce service level agreements with automated escalation workflows when response or resolution times are at risk.' },
      { title: 'Self-Service Knowledge Base', description: 'Integrated knowledge base with AI-powered search that helps customers resolve common issues without creating a ticket.' },
      { title: 'Performance Analytics', description: 'Comprehensive dashboards tracking resolution times, agent productivity, customer satisfaction scores, and trend analysis.' },
    ],
    process: [
      { step: 1, title: 'Workflow Design', description: 'Map your support processes, define ticket categories, priority levels, and SLA policies.' },
      { step: 2, title: 'Platform Configuration', description: 'Set up routing rules, escalation paths, email integrations, and customer portal branding.' },
      { step: 3, title: 'Team Onboarding', description: 'Train support agents on the platform and migrate existing ticket history and knowledge base content.' },
      { step: 4, title: 'Optimization', description: 'Analyze ticket patterns, refine routing rules, and expand the knowledge base based on recurring issues.' },
    ],
    benefits: [
      'Reduce average resolution time by up to 40%',
      'Ensure SLA compliance with automated tracking',
      'Decrease ticket volume through self-service options',
      'Improve customer satisfaction with faster responses',
      'Gain visibility into support team performance',
      'Identify recurring issues for proactive resolution',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'WebSockets'],
  },
  {
    slug: 'ecommerce-tool',
    title: 'E-Commerce Tool',
    shortTitle: 'E-Commerce Tool',
    tagline: 'Build and scale your online store with ease',
    description: 'A customizable online store builder that enables businesses to launch, manage, and scale their e-commerce operations with flexible product catalogs, payment integration, and order management.',
    heroDescription: 'Launching an online store should not require months of development. Our E-Commerce Tool provides a flexible, feature-rich platform to build customized storefronts, manage products, process payments, and fulfill orders with enterprise-grade reliability.',
    color: 'from-pink-500 to-pink-600',
    features: [
      { title: 'Drag-and-Drop Store Builder', description: 'Create professional storefronts with an intuitive visual builder offering customizable themes, layouts, and branding options.' },
      { title: 'Product & Catalog Management', description: 'Manage unlimited products with variants, categories, pricing rules, inventory tracking, and bulk import/export capabilities.' },
      { title: 'Integrated Payment Processing', description: 'Support multiple payment gateways, currencies, and methods including credit cards, digital wallets, and bank transfers.' },
      { title: 'Order & Fulfillment Management', description: 'End-to-end order lifecycle management with automated status updates, shipping integrations, and return processing.' },
    ],
    process: [
      { step: 1, title: 'Store Planning', description: 'Define your product catalog structure, pricing strategy, and customer experience requirements.' },
      { step: 2, title: 'Storefront Design', description: 'Design and build your storefront using the visual builder with custom branding and responsive layouts.' },
      { step: 3, title: 'Integration Setup', description: 'Configure payment gateways, shipping providers, tax rules, and third-party integrations.' },
      { step: 4, title: 'Launch & Growth', description: 'Go live with SEO optimization, marketing tools, and analytics to drive traffic and conversions.' },
    ],
    benefits: [
      'Launch your online store in days instead of months',
      'Scale seamlessly from startup to enterprise volume',
      'Reduce cart abandonment with optimized checkout flows',
      'Support global sales with multi-currency and localization',
      'Automate order fulfillment and inventory management',
      'Gain actionable insights from built-in sales analytics',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS CloudFront'],
  },
  {
    slug: 'scheduling',
    title: 'Scheduling Application',
    shortTitle: 'Scheduling',
    tagline: 'Optimize resources with intelligent scheduling',
    description: 'A calendar-based resource management application for scheduling appointments, shifts, facilities, and equipment with conflict detection and automated notifications.',
    heroDescription: 'Efficient resource management is the backbone of operational excellence. Our Scheduling Application provides intelligent, calendar-based tools to coordinate people, facilities, and equipment while minimizing conflicts and maximizing utilization.',
    color: 'from-teal-500 to-teal-600',
    features: [
      { title: 'Visual Calendar Management', description: 'Intuitive drag-and-drop calendar interface supporting day, week, month, and timeline views with color-coded resource allocation.' },
      { title: 'Conflict Detection & Resolution', description: 'Automatic detection of scheduling conflicts, double bookings, and resource over-allocation with smart resolution suggestions.' },
      { title: 'Automated Notifications & Reminders', description: 'Configurable email, SMS, and push notifications for booking confirmations, reminders, cancellations, and schedule changes.' },
      { title: 'Resource Utilization Analytics', description: 'Dashboards and reports showing resource utilization rates, peak demand periods, and optimization opportunities.' },
    ],
    process: [
      { step: 1, title: 'Resource Inventory', description: 'Catalog all schedulable resources including personnel, rooms, equipment, and their availability constraints.' },
      { step: 2, title: 'Rule Configuration', description: 'Define scheduling rules, booking policies, buffer times, and approval workflows.' },
      { step: 3, title: 'Deployment & Integration', description: 'Deploy the application with calendar sync, notification channels, and third-party system integrations.' },
      { step: 4, title: 'Usage Analysis & Refinement', description: 'Monitor scheduling patterns, gather user feedback, and optimize rules for better resource utilization.' },
    ],
    benefits: [
      'Eliminate double bookings and scheduling conflicts',
      'Increase resource utilization by up to 25%',
      'Reduce no-shows with automated reminders',
      'Save administrative time with self-service booking',
      'Gain visibility into resource demand patterns',
      'Improve team coordination across departments',
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'Celery', 'WebSockets', 'Google Calendar API'],
  },
  {
    slug: 'payroll',
    title: 'Payroll System',
    shortTitle: 'Payroll',
    tagline: 'Accurate payroll processing you can rely on',
    description: 'A comprehensive payroll management system for salary calculations, tax compliance, benefits administration, and employee self-service across multiple jurisdictions.',
    heroDescription: 'Payroll accuracy is non-negotiable. Our Payroll System automates complex salary calculations, tax withholdings, and benefits deductions while ensuring compliance with local labor laws and providing employees with transparent, self-service access to their pay information.',
    color: 'from-orange-500 to-red-500',
    features: [
      { title: 'Automated Salary Calculations', description: 'Process gross-to-net calculations including base pay, overtime, allowances, bonuses, and deductions with configurable pay structures.' },
      { title: 'Tax & Statutory Compliance', description: 'Automated tax withholding calculations, statutory contributions, and year-end tax document generation compliant with local regulations.' },
      { title: 'Employee Self-Service Portal', description: 'Employees can view payslips, download tax documents, update personal information, and submit leave requests through a secure portal.' },
      { title: 'Multi-Entity & Multi-Currency Support', description: 'Manage payroll across multiple legal entities, countries, and currencies with consolidated reporting and inter-company transfers.' },
    ],
    process: [
      { step: 1, title: 'Payroll Structure Design', description: 'Define pay components, salary grades, tax rules, and benefit schemes specific to your organization and jurisdictions.' },
      { step: 2, title: 'Data Migration & Setup', description: 'Migrate employee data, historical payroll records, and configure integrations with HR and time-tracking systems.' },
      { step: 3, title: 'Parallel Run & Validation', description: 'Run parallel payroll cycles alongside your existing system to validate accuracy before full cutover.' },
      { step: 4, title: 'Go-Live & Ongoing Support', description: 'Transition to production with ongoing regulatory updates, support, and year-end processing assistance.' },
    ],
    benefits: [
      'Eliminate payroll errors and manual calculations',
      'Ensure compliance with evolving tax regulations',
      'Reduce payroll processing time by up to 70%',
      'Empower employees with self-service access',
      'Support multi-country payroll from a single platform',
      'Maintain complete audit trails for all payroll transactions',
    ],
    technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Angular', 'Jasper Reports', 'REST APIs'],
  },
];

export const getProductBySlug = (slug: string): ProductData | undefined => {
  return productsData.find(p => p.slug === slug);
};
