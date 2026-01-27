export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  benefits: string[];
  technologies?: string[];
  useCases?: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'software-development',
    title: 'Custom Software Development',
    shortTitle: 'Software Development',
    tagline: 'Build software that drives your business forward',
    description: 'We design and develop custom software solutions tailored to your unique business requirements, from web and mobile applications to enterprise-grade systems.',
    heroDescription: 'Transform your ideas into powerful, scalable software solutions. Our expert team delivers end-to-end custom development services that align perfectly with your business objectives.',
    features: [
      { title: 'Web Application Development', description: 'Modern, responsive web applications built with React, Angular, and cutting-edge frameworks for optimal performance and user experience.' },
      { title: 'Mobile Application Development', description: 'Native and cross-platform mobile apps for iOS and Android that deliver seamless experiences across all devices.' },
      { title: 'Enterprise Software Solutions', description: 'Robust, scalable enterprise applications designed to streamline operations and support business growth.' },
      { title: 'Embedded Systems Development', description: 'Specialized software for embedded systems, IoT devices, and hardware integrations.' },
    ],
    process: [
      { step: 1, title: 'Discovery & Planning', description: 'We analyze your requirements, define project scope, and create a comprehensive roadmap.' },
      { step: 2, title: 'Design & Architecture', description: 'Our architects design scalable, secure, and maintainable system architectures.' },
      { step: 3, title: 'Development & Testing', description: 'Agile development with continuous integration and comprehensive testing.' },
      { step: 4, title: 'Deployment & Support', description: 'Smooth deployment with ongoing maintenance and support services.' },
    ],
    benefits: [
      'Tailored solutions that fit your exact business needs',
      'Scalable architecture for future growth',
      'Modern tech stack ensuring longevity',
      'Dedicated team with domain expertise',
      'Transparent development process',
      'Post-launch support and maintenance',
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    slug: 'automation-workflow',
    title: 'Automation and Workflow Optimization',
    shortTitle: 'Automation & Workflow',
    tagline: 'Streamline operations with intelligent automation',
    description: 'Leverage robotic process automation and workflow optimization to reduce manual tasks, minimize errors, and boost operational efficiency.',
    heroDescription: 'Unlock unprecedented efficiency with our automation solutions. We help businesses eliminate repetitive tasks, optimize workflows, and focus on what truly matters—growth and innovation.',
    features: [
      { title: 'Robotic Process Automation (RPA)', description: 'Deploy software robots to automate repetitive, rule-based tasks across your organization.' },
      { title: 'Business Process Reengineering and Automation', description: 'Analyze and redesign workflows to eliminate inefficiencies and improve business outcomes.' },
      { title: 'Intelligent Scheduling Systems', description: 'AI-powered scheduling tools that optimize resource allocation and task management.' },
      { title: 'Workflow Orchestration and Monitoring Tools', description: 'Centralized platforms to monitor, manage, and optimize complex business processes in real-time.' },
    ],
    process: [
      { step: 1, title: 'Process Assessment', description: 'Comprehensive analysis of current workflows to identify automation opportunities.' },
      { step: 2, title: 'Solution Design', description: 'Design automation strategies tailored to your specific processes and goals.' },
      { step: 3, title: 'Implementation', description: 'Deploy and configure automation tools with minimal disruption.' },
      { step: 4, title: 'Optimization', description: 'Continuous monitoring and refinement for maximum efficiency.' },
    ],
    benefits: [
      'Reduce operational costs by up to 60%',
      'Eliminate human error in repetitive tasks',
      'Free up staff for higher-value work',
      '24/7 automated operations',
      'Improved compliance and audit trails',
      'Faster process completion times',
    ],
    technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Power Automate', 'Zapier', 'Apache Airflow'],
  },
  {
    slug: 'research-innovation',
    title: 'Research and Innovation',
    shortTitle: 'Research & Innovation',
    tagline: 'Pioneer the future with emerging technologies',
    description: 'Stay ahead of the curve with our research and innovation services, exploring cutting-edge technologies and creating proof-of-concepts for tomorrow\'s solutions.',
    heroDescription: 'Innovation is at the heart of competitive advantage. Our R&D team explores emerging technologies, conducts feasibility studies, and builds prototypes that push the boundaries of what\'s possible.',
    features: [
      { title: 'Experimental Technology Prototyping', description: 'Rapid prototyping of innovative concepts to validate ideas before full-scale development.' },
      { title: 'Blockchain-Based Application Research', description: 'Explore decentralized solutions, smart contracts, and Web3 technologies for your business.' },
      { title: 'Academic and Industry Collaboration', description: 'Partner with universities and research institutions for cutting-edge insights and innovations.' },
      { title: 'Technology Feasibility Studies', description: 'Comprehensive analysis of emerging tech viability for your business context.' },
    ],
    process: [
      { step: 1, title: 'Ideation', description: 'Brainstorm and evaluate innovative concepts aligned with business goals.' },
      { step: 2, title: 'Research', description: 'Deep dive into technologies, market trends, and competitive landscape.' },
      { step: 3, title: 'Prototyping', description: 'Build working prototypes to test concepts and gather feedback.' },
      { step: 4, title: 'Validation', description: 'Test, iterate, and prepare for production-ready development.' },
    ],
    benefits: [
      'Stay ahead of industry disruption',
      'Validate ideas before major investments',
      'Access to cutting-edge expertise',
      'Reduced risk in innovation initiatives',
      'Intellectual property development',
      'Competitive differentiation',
    ],
    technologies: ['Blockchain', 'AI/ML', 'Quantum Computing', 'AR/VR', 'Edge AI', 'Web3'],
  },
  {
    slug: 'ux-design',
    title: 'User Experience (UX) and Interface Design',
    shortTitle: 'UX & Interface Design',
    tagline: 'Create experiences users love',
    description: 'Human-centered design that creates intuitive, accessible, and delightful digital experiences that drive user engagement and business results.',
    heroDescription: 'Great design is invisible—it just works. Our UX team combines research, strategy, and creativity to craft digital experiences that users find intuitive, engaging, and delightful.',
    features: [
      { title: 'User Research and Persona Development', description: 'Deep understanding of your users through interviews, surveys, and behavioral analysis to create accurate user personas.' },
      { title: 'UI/UX Design for Applications and Websites', description: 'Beautiful, functional interfaces designed for optimal user experience and business outcomes.' },
      { title: 'Interactive Prototypes and Wireframes', description: 'Clickable prototypes that bring designs to life before development begins, enabling early validation.' },
      { title: 'Accessibility Compliance and Design', description: 'Ensure your digital products are accessible to all users, meeting WCAG standards and inclusive design principles.' },
    ],
    process: [
      { step: 1, title: 'Research', description: 'Understand users, competitors, and market through comprehensive research.' },
      { step: 2, title: 'Strategy', description: 'Define information architecture, user flows, and design principles.' },
      { step: 3, title: 'Design', description: 'Create wireframes, visual designs, and interactive prototypes.' },
      { step: 4, title: 'Testing', description: 'Validate designs through usability testing and iterate based on feedback.' },
    ],
    benefits: [
      'Increased user engagement and retention',
      'Higher conversion rates',
      'Reduced development costs through early validation',
      'Consistent brand experience',
      'Improved customer satisfaction',
      'Accessible to all users',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
  },
  {
    slug: 'training-capacity-building',
    title: 'Training and Capacity Building',
    shortTitle: 'Training & Capacity',
    tagline: 'Empower your teams with technology skills',
    description: 'Comprehensive training programs that equip your teams with the skills and knowledge needed to leverage new technologies effectively.',
    heroDescription: 'Technology is only as powerful as the people using it. We provide tailored training programs that empower your teams to maximize the value of your technology investments.',
    features: [
      { title: 'Onboarding Programs for New Technologies', description: 'Structured programs to help teams quickly adopt and master new technologies and tools.' },
      { title: 'Training Programs for Technical Teams', description: 'Advanced training for developers, engineers, and technical staff on latest tools and methodologies.' },
      { title: 'Seminars and Workshops on Emerging Tech', description: 'Interactive sessions covering AI, cloud, DevOps, and other trending technologies.' },
      { title: 'Ongoing Support and Maintenance Services', description: 'Continuous learning support with documentation, help desks, and refresher courses.' },
    ],
    process: [
      { step: 1, title: 'Needs Assessment', description: 'Evaluate current skill levels and identify training requirements.' },
      { step: 2, title: 'Curriculum Design', description: 'Develop customized training materials aligned with your technology stack.' },
      { step: 3, title: 'Delivery', description: 'Engaging training sessions—virtual, in-person, or hybrid formats.' },
      { step: 4, title: 'Follow-up', description: 'Ongoing support, assessments, and continuous learning resources.' },
    ],
    benefits: [
      'Faster technology adoption',
      'Increased team productivity',
      'Reduced dependency on external support',
      'Improved employee satisfaction',
      'Better ROI on technology investments',
      'Knowledge retention within organization',
    ],
    technologies: ['LMS Platforms', 'Virtual Labs', 'Interactive Workshops', 'Certification Programs'],
  },
  {
    slug: 'iot-edge-computing',
    title: 'IoT and Edge Computing',
    shortTitle: 'IoT & Edge Computing',
    tagline: 'Connect and compute at the edge',
    description: 'Design and implement IoT solutions and edge computing architectures for real-time data processing and intelligent connected systems.',
    heroDescription: 'The future is connected. We help businesses harness the power of IoT and edge computing to create smarter operations, real-time insights, and innovative customer experiences.',
    features: [
      { title: 'IoT Device Integration and Development', description: 'Connect sensors, devices, and equipment into unified IoT ecosystems with custom firmware and connectivity.' },
      { title: 'Edge Computing Solutions for Low-Latency Applications', description: 'Process data at the edge for ultra-low latency applications requiring real-time responses.' },
      { title: 'Smart Home or Industrial IoT Solutions', description: 'Consumer-grade smart home solutions and enterprise-grade Industrial IoT (IIoT) for manufacturing and logistics.' },
      { title: 'IoT Security and Management', description: 'Secure device management, OTA updates, and monitoring for your IoT fleet.' },
    ],
    process: [
      { step: 1, title: 'Architecture Design', description: 'Design scalable IoT architecture tailored to your use case.' },
      { step: 2, title: 'Hardware Selection', description: 'Identify optimal sensors, gateways, and edge devices.' },
      { step: 3, title: 'Development', description: 'Build firmware, connectivity layers, and data pipelines.' },
      { step: 4, title: 'Deployment', description: 'Roll out solutions with monitoring and management capabilities.' },
    ],
    benefits: [
      'Real-time operational insights',
      'Reduced latency for critical applications',
      'Predictive maintenance capabilities',
      'Enhanced operational efficiency',
      'New revenue streams from connected products',
      'Data-driven decision making',
    ],
    technologies: ['AWS IoT', 'Azure IoT Hub', 'MQTT', 'LoRaWAN', 'Raspberry Pi', 'Arduino', 'Edge AI'],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    shortTitle: 'Digital Transformation',
    tagline: 'Navigate your digital journey with confidence',
    description: 'Strategic consulting to help organizations embrace digital technologies, modernize processes, and create sustainable competitive advantages.',
    heroDescription: 'Digital transformation is not just about technology—it\'s about reimagining your business for the digital age. We provide strategic guidance to navigate this journey successfully.',
    features: [
      { title: 'Strategies for Adopting Emerging Technologies', description: 'Create comprehensive roadmaps for adopting AI, cloud, IoT, and other emerging technologies.' },
      { title: 'Business Process Digitalization', description: 'Transform paper-based and manual processes into efficient digital workflows.' },
      { title: 'Legacy System Modernization', description: 'Strategic assessment and planning for modernizing outdated systems while preserving business logic.' },
      { title: 'Industry-Specific Digital Solutions', description: 'Tailored digital strategies for healthcare, fintech, retail, manufacturing, and more.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Comprehensive analysis of current digital maturity and capabilities.' },
      { step: 2, title: 'Strategy', description: 'Develop transformation roadmap aligned with business objectives.' },
      { step: 3, title: 'Execution Planning', description: 'Create detailed implementation plans with clear milestones.' },
      { step: 4, title: 'Change Management', description: 'Guide organizational change to ensure successful adoption.' },
    ],
    benefits: [
      'Clear vision and roadmap for digital future',
      'Reduced risk in technology investments',
      'Improved operational efficiency',
      'Enhanced customer experiences',
      'Competitive advantage in digital markets',
      'Future-proofed business operations',
    ],
    useCases: ['Healthcare', 'Financial Services', 'Retail', 'Manufacturing', 'Government'],
  },
  {
    slug: 'ecommerce-erp',
    title: 'E-commerce and ERP Solutions',
    shortTitle: 'E-commerce & ERP',
    tagline: 'Power your business operations',
    description: 'Custom e-commerce platforms and enterprise resource planning systems that unify your business operations and drive growth.',
    heroDescription: 'Seamless commerce and integrated operations are the backbone of modern business. We build custom e-commerce platforms and ERP solutions that scale with your ambitions.',
    features: [
      { title: 'Development of Custom E-commerce Platforms', description: 'Tailored online stores with unique features, integrations, and scalability for your specific business model.' },
      { title: 'ERP System Integration and Customization', description: 'Connect and customize ERP systems to match your business processes and workflows.' },
      { title: 'Inventory Management Systems', description: 'Real-time inventory tracking, forecasting, and optimization tools across all channels.' },
      { title: 'CRM and Sales Automation', description: 'Customer relationship management and automated sales workflows to boost revenue.' },
    ],
    process: [
      { step: 1, title: 'Business Analysis', description: 'Understand your commerce and operational requirements.' },
      { step: 2, title: 'Platform Selection', description: 'Choose the right technology stack for your needs.' },
      { step: 3, title: 'Development', description: 'Build and customize solutions with seamless integrations.' },
      { step: 4, title: 'Launch & Growth', description: 'Go live with ongoing optimization for growth.' },
    ],
    benefits: [
      'Unified business operations',
      'Real-time visibility across all channels',
      'Improved inventory accuracy',
      'Enhanced customer experience',
      'Automated order processing',
      'Scalable for business growth',
    ],
    technologies: ['Shopify', 'Magento', 'WooCommerce', 'SAP', 'Oracle', 'Salesforce'],
  },
  {
    slug: 'legacy-modernization',
    title: 'Legacy System Modernization',
    shortTitle: 'Legacy Modernization',
    tagline: 'Transform legacy into innovation',
    description: 'Migrate, update, and transform outdated systems into modern, efficient platforms without disrupting business operations.',
    heroDescription: 'Don\'t let legacy systems hold you back. We specialize in modernizing outdated technology while preserving your valuable business logic and data.',
    features: [
      { title: 'Migrating from Legacy Systems to Modern Technologies', description: 'Seamless migration from legacy platforms to modern cloud-native architectures with minimal disruption.' },
      { title: 'Rewriting or Updating Legacy Codebases', description: 'Refactor and rewrite legacy code using modern languages, frameworks, and best practices.' },
      { title: 'Enhancing the Performance of Older Systems', description: 'Optimize system performance, scalability, and reliability without complete replacement.' },
      { title: 'Ensuring Compatibility with Modern Infrastructure', description: 'Ensure legacy systems work with modern infrastructure, APIs, and integrations.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Comprehensive audit of existing systems and dependencies.' },
      { step: 2, title: 'Strategy', description: 'Choose modernization approach: replatform, refactor, or rebuild.' },
      { step: 3, title: 'Migration', description: 'Execute migration with minimal business disruption.' },
      { step: 4, title: 'Validation', description: 'Thorough testing and validation of modernized systems.' },
    ],
    benefits: [
      'Reduced maintenance costs',
      'Improved system performance',
      'Enhanced security posture',
      'Better integration capabilities',
      'Access to modern features',
      'Extended system lifespan',
    ],
    technologies: ['Cloud Migration', 'Microservices', 'API Modernization', 'Containerization', 'Kubernetes'],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};
