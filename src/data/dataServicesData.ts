export interface DataServiceFeature {
  title: string;
  description: string;
}

export interface DataServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface DataServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: DataServiceFeature[];
  process: DataServiceProcess[];
  benefits: string[];
  technologies?: string[];
  useCases?: string[];
}

export const dataServicesData: DataServiceData[] = [
  {
    slug: 'data-warehousing',
    title: 'Data Warehousing & Lakehouse',
    shortTitle: 'Data Warehousing',
    tagline: 'Build the foundation for enterprise analytics',
    description: 'Design and implement modern data warehouses and lakehouse architectures that unify your data for powerful analytics and reporting.',
    heroDescription: 'Transform your data infrastructure with modern warehousing solutions. We design and implement scalable data warehouses and lakehouses that serve as the single source of truth for your enterprise analytics.',
    features: [
      { title: 'Enterprise Data Warehouse Design', description: 'Architect scalable, performant data warehouses optimized for your analytics workloads and business requirements.' },
      { title: 'Lakehouse Implementation', description: 'Combine the best of data lakes and warehouses with modern lakehouse architectures using Delta Lake, Iceberg, or Hudi.' },
      { title: 'Cloud Data Platforms', description: 'Leverage Snowflake, Databricks, BigQuery, or Redshift for cloud-native data warehousing with elastic scalability.' },
      { title: 'Data Modeling & Schema Design', description: 'Create dimensional models, star schemas, and data vault architectures optimized for query performance and flexibility.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current data landscape, sources, and analytics requirements.' },
      { step: 2, title: 'Architecture Design', description: 'Design scalable warehouse/lakehouse architecture aligned with business goals.' },
      { step: 3, title: 'Implementation', description: 'Build and configure the data platform with proper security and governance.' },
      { step: 4, title: 'Migration & Optimization', description: 'Migrate data, optimize performance, and enable analytics workloads.' },
    ],
    benefits: [
      'Single source of truth for enterprise data',
      'Sub-second query performance at scale',
      'Reduced data silos and redundancy',
      'Cost-effective cloud-native solutions',
      'Support for both structured and unstructured data',
      'Real-time and batch analytics capabilities',
    ],
    technologies: ['Snowflake', 'Databricks', 'BigQuery', 'Redshift', 'Delta Lake', 'Apache Iceberg', 'dbt'],
  },
  {
    slug: 'business-intelligence',
    title: 'Enterprise Analytics & BI',
    shortTitle: 'Analytics & BI',
    tagline: 'Turn data into actionable business insights',
    description: 'Comprehensive BI solutions including dashboard development, interactive reporting, and self-service analytics that empower data-driven decision making.',
    heroDescription: 'Unlock the power of your data with enterprise-grade business intelligence. We build intuitive dashboards, interactive reports, and self-service analytics platforms that put insights at your fingertips.',
    features: [
      { title: 'BI Dashboard Development', description: 'Custom dashboards in Power BI, Tableau, Looker, or Qlik that visualize KPIs and metrics for executives and analysts.' },
      { title: 'Interactive Reporting', description: 'Dynamic, drill-down reports that allow users to explore data and uncover insights without technical expertise.' },
      { title: 'Self-Service Analytics', description: 'Enable business users to create their own reports and analyses with governed data and intuitive tools.' },
      { title: 'Real-Time Analytics', description: 'Live dashboards and alerts that provide up-to-the-minute visibility into business operations.' },
    ],
    process: [
      { step: 1, title: 'Requirements Discovery', description: 'Understand key metrics, KPIs, and reporting needs across the organization.' },
      { step: 2, title: 'Data Preparation', description: 'Prepare semantic layers, data models, and calculated metrics for reporting.' },
      { step: 3, title: 'Dashboard Design', description: 'Design and build intuitive, interactive dashboards and reports.' },
      { step: 4, title: 'Training & Adoption', description: 'Train users and drive adoption of self-service analytics capabilities.' },
    ],
    benefits: [
      'Faster, data-driven decision making',
      'Reduced reliance on IT for reports',
      'Consistent metrics across the organization',
      'Mobile-friendly executive dashboards',
      'Automated report distribution',
      'Improved data literacy across teams',
    ],
    technologies: ['Power BI', 'Tableau', 'Looker', 'Qlik', 'Metabase', 'Apache Superset', 'Sigma'],
  },
  {
    slug: 'customer-360',
    title: 'Customer 360 & Golden Record',
    shortTitle: 'Customer 360',
    tagline: 'Achieve a unified view of every customer',
    description: 'Build comprehensive customer profiles by unifying data from multiple sources into a single, trusted golden record.',
    heroDescription: 'Know your customers like never before. We help you consolidate customer data from every touchpoint into a unified Customer 360 view that drives personalization, retention, and growth.',
    features: [
      { title: 'Master Data Management', description: 'Implement MDM solutions to create and maintain golden records with consistent, accurate customer data.' },
      { title: 'Identity Resolution', description: 'Match and merge customer records across systems using advanced matching algorithms and ML techniques.' },
      { title: 'Customer Data Platform (CDP)', description: 'Build or implement CDP solutions that unify customer data for marketing and analytics.' },
      { title: 'Real-Time Profile Updates', description: 'Keep customer profiles current with streaming data integration from all touchpoints.' },
    ],
    process: [
      { step: 1, title: 'Data Discovery', description: 'Identify all customer data sources and understand data quality issues.' },
      { step: 2, title: 'Matching Strategy', description: 'Design identity resolution rules and matching algorithms.' },
      { step: 3, title: 'Platform Implementation', description: 'Build the Customer 360 platform with MDM and integration layers.' },
      { step: 4, title: 'Activation', description: 'Enable downstream systems and use cases with unified customer data.' },
    ],
    benefits: [
      'Complete view of customer journey',
      'Improved personalization capabilities',
      'Better customer retention insights',
      'Reduced duplicate records',
      'Enhanced compliance with data regulations',
      'Increased marketing effectiveness',
    ],
    technologies: ['Informatica MDM', 'Salesforce CDP', 'Segment', 'Amperity', 'Azure Purview', 'Reltio'],
  },
  {
    slug: 'data-governance',
    title: 'Data Governance & Quality',
    shortTitle: 'Data Governance',
    tagline: 'Ensure trust, compliance, and quality in your data',
    description: 'Establish robust data governance frameworks, data quality programs, and compliance controls that ensure your data is trustworthy and secure.',
    heroDescription: 'Build trust in your data assets. We implement comprehensive data governance programs that ensure data quality, security, compliance, and proper stewardship across your organization.',
    features: [
      { title: 'Data Governance Framework', description: 'Establish policies, standards, roles, and processes for managing data as a strategic asset.' },
      { title: 'Data Quality Management', description: 'Implement data quality rules, monitoring, and remediation processes to ensure accuracy and completeness.' },
      { title: 'Data Catalog & Lineage', description: 'Deploy data catalogs with automated metadata discovery, lineage tracking, and business glossaries.' },
      { title: 'Regulatory Compliance', description: 'Ensure compliance with GDPR, CCPA, HIPAA, and industry-specific data regulations.' },
    ],
    process: [
      { step: 1, title: 'Maturity Assessment', description: 'Assess current data governance maturity and identify gaps.' },
      { step: 2, title: 'Framework Design', description: 'Design governance framework, policies, and organizational structure.' },
      { step: 3, title: 'Tool Implementation', description: 'Deploy data catalog, quality tools, and governance platforms.' },
      { step: 4, title: 'Operationalization', description: 'Train stewards, establish metrics, and embed governance in processes.' },
    ],
    benefits: [
      'Increased trust in data-driven decisions',
      'Reduced regulatory risk and fines',
      'Improved data quality metrics',
      'Better data discovery and understanding',
      'Clear data ownership and accountability',
      'Faster time to insights',
    ],
    technologies: ['Collibra', 'Alation', 'Atlan', 'Monte Carlo', 'Great Expectations', 'Apache Atlas'],
  },
  {
    slug: 'data-integration',
    title: 'Data Integration & ETL',
    shortTitle: 'Data Integration',
    tagline: 'Connect and unify data from any source',
    description: 'Build robust data pipelines that integrate data from diverse sources, ensuring timely and accurate data flow across your enterprise.',
    heroDescription: 'Break down data silos with seamless integration. We design and build ETL/ELT pipelines that connect your systems, transform data, and deliver it where it\'s needed—on time, every time.',
    features: [
      { title: 'ETL/ELT Pipeline Development', description: 'Design and build data pipelines using modern tools like dbt, Fivetran, Airbyte, or custom solutions.' },
      { title: 'Real-Time Data Integration', description: 'Stream data between systems using Kafka, Debezium, or cloud-native streaming services.' },
      { title: 'API Integration', description: 'Connect SaaS applications, databases, and systems through RESTful APIs and webhooks.' },
      { title: 'Data Synchronization', description: 'Keep data consistent across systems with bi-directional sync and conflict resolution.' },
    ],
    process: [
      { step: 1, title: 'Source Analysis', description: 'Map data sources, formats, volumes, and integration requirements.' },
      { step: 2, title: 'Pipeline Design', description: 'Design scalable, maintainable data pipeline architecture.' },
      { step: 3, title: 'Development', description: 'Build, test, and deploy data integration pipelines.' },
      { step: 4, title: 'Monitoring', description: 'Implement monitoring, alerting, and data quality checks.' },
    ],
    benefits: [
      'Unified data across the enterprise',
      'Reduced manual data handling',
      'Faster data availability',
      'Improved data accuracy',
      'Scalable to any volume',
      'Lower integration costs',
    ],
    technologies: ['dbt', 'Fivetran', 'Airbyte', 'Apache Kafka', 'Apache Airflow', 'Talend', 'Informatica'],
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering & Platforms',
    shortTitle: 'Data Engineering',
    tagline: 'Build scalable data infrastructure',
    description: 'Design and implement modern data platforms with data lakes, processing frameworks, and infrastructure that scales with your needs.',
    heroDescription: 'Engineer the data infrastructure of tomorrow. We build robust, scalable data platforms that handle petabytes of data with reliability, performance, and cost efficiency.',
    features: [
      { title: 'Data Lake Architecture', description: 'Design and implement data lakes on AWS S3, Azure Data Lake, or Google Cloud Storage with proper organization and governance.' },
      { title: 'Big Data Processing', description: 'Implement Apache Spark, Hadoop, or cloud-native processing for batch and stream workloads at any scale.' },
      { title: 'DataOps & MLOps', description: 'Establish CI/CD pipelines, testing frameworks, and automation for data and ML workflows.' },
      { title: 'Query Performance Optimization', description: 'Tune query engines, optimize data formats, and implement caching for fast analytics.' },
    ],
    process: [
      { step: 1, title: 'Requirements Gathering', description: 'Understand data volumes, velocity, variety, and use case requirements.' },
      { step: 2, title: 'Platform Architecture', description: 'Design cloud-native data platform with proper layers and services.' },
      { step: 3, title: 'Implementation', description: 'Build infrastructure, processing jobs, and orchestration workflows.' },
      { step: 4, title: 'Operations', description: 'Establish monitoring, cost optimization, and operational procedures.' },
    ],
    benefits: [
      'Handle any data volume or velocity',
      'Cost-optimized cloud infrastructure',
      'Reliable, fault-tolerant processing',
      'Fast time to production for new use cases',
      'Reduced operational overhead',
      'Future-proof architecture',
    ],
    technologies: ['Apache Spark', 'Apache Kafka', 'Databricks', 'AWS EMR', 'Azure Synapse', 'Airflow', 'Kubernetes'],
  },
  {
    slug: 'data-security',
    title: 'Data Security & Access Control',
    shortTitle: 'Data Security',
    tagline: 'Protect your most valuable asset',
    description: 'Implement comprehensive data security controls including access management, encryption, and monitoring to protect sensitive data.',
    heroDescription: 'Secure your data at every layer. We implement enterprise-grade security controls that protect sensitive data while enabling authorized access for analytics and operations.',
    features: [
      { title: 'Role-Based Access Control (RBAC)', description: 'Design and implement fine-grained access controls based on roles, attributes, and data classification.' },
      { title: 'Data Encryption', description: 'Implement encryption at rest and in transit for all sensitive data assets.' },
      { title: 'Identity Management', description: 'Integrate with enterprise identity providers for SSO, MFA, and centralized access management.' },
      { title: 'Audit & Monitoring', description: 'Track data access, detect anomalies, and maintain comprehensive audit trails.' },
    ],
    process: [
      { step: 1, title: 'Security Assessment', description: 'Evaluate current security posture and identify risks.' },
      { step: 2, title: 'Policy Design', description: 'Design access policies, classification schemes, and controls.' },
      { step: 3, title: 'Implementation', description: 'Deploy security controls, encryption, and monitoring systems.' },
      { step: 4, title: 'Continuous Monitoring', description: 'Establish ongoing monitoring, alerting, and incident response.' },
    ],
    benefits: [
      'Protect sensitive customer data',
      'Meet regulatory compliance requirements',
      'Prevent unauthorized access',
      'Detect and respond to threats',
      'Maintain customer trust',
      'Reduce breach risk and liability',
    ],
    technologies: ['Azure AD', 'Okta', 'AWS IAM', 'HashiCorp Vault', 'Privacera', 'Immuta'],
  },
  {
    slug: 'data-monetization',
    title: 'Data Monetization & Strategy',
    shortTitle: 'Data Monetization',
    tagline: 'Turn your data into revenue',
    description: 'Develop strategies and platforms to monetize your data assets through data products, marketplaces, and data-as-a-service offerings.',
    heroDescription: 'Unlock the revenue potential of your data. We help you identify monetization opportunities, build data products, and create new revenue streams from your data assets.',
    features: [
      { title: 'Data Product Development', description: 'Create packaged data products that deliver value to internal teams or external customers.' },
      { title: 'Data Marketplace Solutions', description: 'Build internal or external data marketplaces for data sharing and monetization.' },
      { title: 'Data-as-a-Service (DaaS)', description: 'Design subscription-based data services with APIs and self-service access.' },
      { title: 'Strategic Consulting', description: 'Develop data monetization strategies, business models, and go-to-market plans.' },
    ],
    process: [
      { step: 1, title: 'Opportunity Assessment', description: 'Identify high-value data assets and monetization opportunities.' },
      { step: 2, title: 'Business Model Design', description: 'Design pricing, delivery, and partnership models.' },
      { step: 3, title: 'Product Development', description: 'Build data products, APIs, and delivery platforms.' },
      { step: 4, title: 'Go-to-Market', description: 'Launch data products and establish sales and support processes.' },
    ],
    benefits: [
      'New revenue streams from existing data',
      'Increased data asset utilization',
      'Competitive differentiation',
      'Enhanced partner ecosystem',
      'Better ROI on data investments',
      'Data-driven business models',
    ],
    technologies: ['Snowflake Data Marketplace', 'AWS Data Exchange', 'Databricks Marketplace', 'API Gateways'],
  },
];

export const getDataServiceBySlug = (slug: string): DataServiceData | undefined => {
  return dataServicesData.find(service => service.slug === slug);
};
