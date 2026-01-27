export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionProcess {
  step: number;
  title: string;
  description: string;
}

export interface SolutionData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: SolutionFeature[];
  process: SolutionProcess[];
  benefits: string[];
  technologies?: string[];
}

export const solutionsData: SolutionData[] = [
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    tagline: "Turn enterprise data into actionable intelligence",
    description:
      "We help organizations harness the full value of their data through modern analytics platforms, advanced visualization, and scalable data infrastructure that drives confident decision-making at every level.",
    heroDescription:
      "From raw data to real-time insights, our data and analytics solutions empower your teams to make faster, smarter decisions backed by reliable intelligence.",
    features: [
      {
        title: "Business Intelligence & Reporting",
        description:
          "Build interactive dashboards and automated reports that surface key metrics across departments, giving stakeholders clear visibility into performance and trends.",
      },
      {
        title: "Data Warehouse & Lake Architecture",
        description:
          "Design and implement scalable data storage solutions that consolidate disparate sources into a unified, governed repository optimized for analytics workloads.",
      },
      {
        title: "Advanced Analytics & Predictive Modeling",
        description:
          "Apply statistical analysis and machine learning techniques to historical data, uncovering hidden patterns and forecasting future outcomes with measurable accuracy.",
      },
      {
        title: "Data Governance & Quality Management",
        description:
          "Establish policies, lineage tracking, and quality controls that ensure your data remains accurate, consistent, and compliant across the entire organization.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Audit & Strategy",
        description:
          "We assess your existing data landscape, identify gaps and opportunities, and define a roadmap aligned with your business objectives.",
      },
      {
        step: 2,
        title: "Architecture & Integration",
        description:
          "Our engineers design the target architecture and build reliable pipelines that ingest, transform, and consolidate data from all relevant sources.",
      },
      {
        step: 3,
        title: "Analytics Development & Validation",
        description:
          "We develop dashboards, models, and reports, then validate outputs with domain experts to ensure insights are accurate and meaningful.",
      },
      {
        step: 4,
        title: "Deployment & Enablement",
        description:
          "Solutions are rolled out with thorough documentation and hands-on training so your teams can operate and evolve the platform independently.",
      },
    ],
    benefits: [
      "Reduce decision-making time with real-time, self-service analytics",
      "Eliminate data silos by unifying sources into a single platform",
      "Improve forecast accuracy through predictive modeling",
      "Strengthen regulatory compliance with built-in data governance",
      "Lower infrastructure costs via optimized cloud-native architectures",
      "Accelerate time to insight from weeks to hours",
    ],
    technologies: [
      "Microsoft Power BI",
      "Tableau",
      "Snowflake",
      "Azure Synapse Analytics",
      "Apache Spark",
      "dbt",
      "Azure Data Factory",
      "Python",
      "SQL Server",
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    shortTitle: "AI",
    tagline: "Practical, responsible AI adoption",
    description:
      "We guide enterprises through the adoption of artificial intelligence with a pragmatic, outcomes-driven approach that balances innovation with ethical responsibility and measurable business value.",
    heroDescription:
      "Move beyond AI experimentation. Our solutions deliver production-grade intelligent systems that automate processes, augment human expertise, and unlock new capabilities across your organization.",
    features: [
      {
        title: "Machine Learning Operations",
        description:
          "Build end-to-end ML pipelines with automated training, versioning, monitoring, and deployment so models move reliably from prototype to production.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Extract meaning from unstructured text at scale, powering intelligent search, document processing, sentiment analysis, and conversational interfaces.",
      },
      {
        title: "Computer Vision & Image Analysis",
        description:
          "Leverage image recognition and video analytics for quality inspection, asset monitoring, document digitization, and other visual intelligence use cases.",
      },
      {
        title: "Responsible AI & Governance",
        description:
          "Implement fairness audits, explainability frameworks, and governance controls that ensure your AI systems operate transparently and within ethical boundaries.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Opportunity Assessment",
        description:
          "We evaluate your workflows and data assets to identify high-impact AI use cases with clear ROI potential and feasibility.",
      },
      {
        step: 2,
        title: "Proof of Concept",
        description:
          "A focused prototype is developed and tested against real data to validate technical viability and establish baseline performance metrics.",
      },
      {
        step: 3,
        title: "Production Engineering",
        description:
          "The validated model is hardened with monitoring, scalability, and security measures, then integrated into your existing systems and workflows.",
      },
      {
        step: 4,
        title: "Continuous Improvement",
        description:
          "Post-launch, we monitor model performance, retrain on fresh data, and iterate to maintain accuracy and adapt to changing conditions.",
      },
    ],
    benefits: [
      "Automate repetitive tasks and free teams for higher-value work",
      "Improve accuracy and consistency in data-intensive processes",
      "Gain competitive advantage through intelligent product features",
      "Reduce operational costs with predictive maintenance and optimization",
      "Ensure compliance with emerging AI regulations and ethical standards",
      "Scale expertise across the organization without proportional headcount growth",
    ],
    technologies: [
      "Azure OpenAI Service",
      "TensorFlow",
      "PyTorch",
      "Hugging Face Transformers",
      "Azure Machine Learning",
      "MLflow",
      "LangChain",
      "OpenCV",
      "Python",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortTitle: "Digital Transformation",
    tagline: "Strategic technology adoption guidance",
    description:
      "We partner with leadership teams to define and execute digital transformation strategies that modernize operations, elevate customer experiences, and build lasting organizational agility.",
    heroDescription:
      "Digital transformation is more than technology. We align people, processes, and platforms to create a connected enterprise that adapts quickly and delivers value continuously.",
    features: [
      {
        title: "Technology Strategy & Roadmapping",
        description:
          "Develop a prioritized, multi-year transformation roadmap that sequences initiatives based on business impact, dependencies, and organizational readiness.",
      },
      {
        title: "Cloud Migration & Modernization",
        description:
          "Migrate legacy workloads to cloud-native architectures, reducing technical debt while improving scalability, resilience, and cost efficiency.",
      },
      {
        title: "Process Automation & Optimization",
        description:
          "Identify and automate manual workflows using low-code platforms and robotic process automation, freeing teams to focus on strategic priorities.",
      },
      {
        title: "Change Management & Adoption",
        description:
          "Drive organization-wide adoption through structured change management programs that address culture, communication, and capability building.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Maturity Assessment",
        description:
          "We evaluate your current digital maturity across technology, processes, and culture, benchmarking against industry standards to identify gaps.",
      },
      {
        step: 2,
        title: "Strategy & Roadmap Development",
        description:
          "Together with your leadership, we craft a transformation strategy with clearly defined outcomes, milestones, and investment requirements.",
      },
      {
        step: 3,
        title: "Pilot & Iterate",
        description:
          "Priority initiatives are launched as focused pilots, allowing rapid learning and course correction before broader enterprise rollout.",
      },
      {
        step: 4,
        title: "Scale & Sustain",
        description:
          "Successful pilots are scaled across the organization with governance frameworks that sustain momentum and measure long-term impact.",
      },
    ],
    benefits: [
      "Align technology investments directly with strategic business goals",
      "Reduce operational costs through process automation and cloud efficiencies",
      "Improve customer satisfaction with seamless digital experiences",
      "Increase organizational agility to respond to market changes",
      "Minimize transformation risk through phased, evidence-based execution",
      "Build internal capability for continuous innovation beyond the engagement",
    ],
    technologies: [
      "Microsoft Azure",
      "Microsoft 365",
      "Power Platform",
      "SharePoint",
      "Dynamics 365",
      "Azure DevOps",
      "Terraform",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    slug: "ecommerce-erp",
    title: "E-commerce & ERP",
    shortTitle: "E-commerce & ERP",
    tagline: "Integrated business operations platforms",
    description:
      "We design and implement end-to-end commerce and enterprise resource planning solutions that unify sales, inventory, finance, and fulfillment into a single, efficient operational backbone.",
    heroDescription:
      "Connect your front-end customer experience with back-office operations. Our integrated e-commerce and ERP solutions eliminate friction, reduce errors, and give you full visibility across every transaction.",
    features: [
      {
        title: "Omnichannel Commerce Platforms",
        description:
          "Launch and manage online storefronts, marketplaces, and in-store systems from a unified platform that delivers consistent experiences across every channel.",
      },
      {
        title: "ERP Implementation & Integration",
        description:
          "Deploy and configure enterprise resource planning systems that centralize finance, procurement, inventory, and HR into one authoritative source of truth.",
      },
      {
        title: "Order Management & Fulfillment",
        description:
          "Streamline the entire order lifecycle from capture to delivery with intelligent routing, real-time inventory visibility, and automated fulfillment workflows.",
      },
      {
        title: "Payment & Revenue Operations",
        description:
          "Integrate secure payment gateways, automate invoicing and reconciliation, and gain real-time visibility into revenue streams across all channels.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Business Process Analysis",
        description:
          "We map your current sales, inventory, and finance workflows to understand pain points and define requirements for the integrated solution.",
      },
      {
        step: 2,
        title: "Platform Selection & Design",
        description:
          "Based on your requirements and growth trajectory, we recommend the optimal platform stack and design the solution architecture and data flows.",
      },
      {
        step: 3,
        title: "Implementation & Data Migration",
        description:
          "Our team configures the platforms, builds integrations, and migrates historical data with rigorous validation to ensure accuracy and continuity.",
      },
      {
        step: 4,
        title: "Launch & Optimization",
        description:
          "After go-live support and stabilization, we continuously monitor performance and optimize workflows based on real operational data.",
      },
    ],
    benefits: [
      "Eliminate manual data entry and reduce errors across systems",
      "Gain real-time visibility into inventory, orders, and financials",
      "Improve customer experience with faster fulfillment and accurate information",
      "Scale operations without proportional increases in overhead",
      "Reduce total cost of ownership by consolidating disparate tools",
      "Enable data-driven merchandising and demand planning decisions",
    ],
    technologies: [
      "Shopify Plus",
      "Microsoft Dynamics 365 Business Central",
      "SAP Business One",
      "Magento / Adobe Commerce",
      "Stripe",
      "Azure Logic Apps",
      "Power Automate",
      "WooCommerce",
      "Node.js",
    ],
  },
];

export const getSolutionBySlug = (slug: string): SolutionData | undefined =>
  solutionsData.find((s) => s.slug === slug);
