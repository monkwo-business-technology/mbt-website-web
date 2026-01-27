export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "digital-core-banking",
    title: "Digital Core Banking Transformation",
    industry: "Banking",
    client: "Meridian National Bank",
    summary:
      "Modernized a legacy core banking system serving 4 million customers, migrating from a monolithic mainframe to a cloud-native microservices architecture without downtime.",
    challenge:
      "Meridian National Bank operated on a 25-year-old mainframe-based core banking system that could not support real-time transactions, mobile banking, or open banking APIs. The system experienced frequent outages during peak hours, and the cost of maintaining COBOL-based modules was escalating as skilled developers retired. Regulatory compliance with PSD2 and open banking mandates required API-driven capabilities the legacy platform could not deliver.",
    solution:
      "Monkwo designed and executed a phased migration strategy using the strangler fig pattern. We built a cloud-native core banking platform on Kubernetes with event-driven microservices, replacing monolithic modules incrementally. A real-time data synchronization layer ensured zero downtime during migration. We implemented an API gateway for open banking compliance and introduced automated fraud screening at the transaction level.",
    results: [
      "99.99% system uptime achieved post-migration, up from 97.2%",
      "Transaction processing time reduced from 8 seconds to under 200 milliseconds",
      "40% reduction in annual IT infrastructure and maintenance costs",
      "Open banking API adoption enabled 35 new fintech partnerships within 6 months",
    ],
    technologies: [
      "Kubernetes",
      "Apache Kafka",
      "PostgreSQL",
      "Node.js",
      "React",
      "Terraform",
      "Redis",
      "gRPC",
    ],
  },
  {
    slug: "telco-customer-360",
    title: "Customer 360 Platform for Major Telco",
    industry: "Telecom",
    client: "Nexara Communications",
    summary:
      "Built a unified Customer 360 platform that consolidated data from 12 disparate systems, enabling personalized engagement and reducing churn by 22%.",
    challenge:
      "Nexara Communications had customer data fragmented across 12 separate systems including billing, CRM, network operations, retail POS, and call center platforms. Customer service agents had no unified view, leading to average handle times exceeding 14 minutes and a Net Promoter Score of just 18. Churn rates were climbing at 3.1% monthly, costing the company an estimated $180 million annually.",
    solution:
      "Monkwo implemented a real-time Customer 360 platform using a modern data lakehouse architecture. We built ETL pipelines to ingest and unify data from all 12 source systems, applied ML-based identity resolution to merge duplicate records, and created a real-time API layer for frontline applications. A predictive churn model was deployed to trigger proactive retention offers, and a personalization engine drove targeted upsell recommendations.",
    results: [
      "Monthly churn rate reduced from 3.1% to 2.4%, saving $112 million annually",
      "Average call handle time decreased from 14 minutes to 7.5 minutes",
      "Net Promoter Score increased from 18 to 47 within 12 months",
      "Upsell conversion rates improved by 28% through personalized recommendations",
    ],
    technologies: [
      "Apache Spark",
      "Databricks",
      "Snowflake",
      "Python",
      "TensorFlow",
      "React",
      "GraphQL",
      "Airflow",
    ],
  },
  {
    slug: "ai-diagnostic-workflow",
    title: "AI-Powered Diagnostic Workflow",
    industry: "Healthcare",
    client: "Pinnacle Health Systems",
    summary:
      "Developed an AI-assisted radiology workflow that reduced diagnostic turnaround time by 60% and improved early detection rates for pulmonary conditions.",
    challenge:
      "Pinnacle Health Systems, a network of 14 hospitals, faced a critical shortage of radiologists, with average diagnostic report turnaround times exceeding 48 hours. Missed or delayed diagnoses of pulmonary nodules contributed to late-stage cancer detections. The existing PACS system lacked intelligent prioritization, treating urgent and routine scans identically in the radiologist queue.",
    solution:
      "Monkwo developed an AI-powered diagnostic assistance platform integrated directly into the existing PACS and EHR systems. The solution used deep learning models trained on over 2 million anonymized chest X-rays and CT scans to detect and flag pulmonary abnormalities. An intelligent triage system automatically prioritized the radiologist worklist based on AI-assessed urgency. A second-read AI assistant highlighted regions of interest and provided confidence-scored preliminary findings.",
    results: [
      "Diagnostic report turnaround time reduced from 48 hours to under 19 hours",
      "Early-stage pulmonary nodule detection rate improved by 34%",
      "Radiologist productivity increased by 45% with AI-assisted workflows",
      "False negative rate for critical findings decreased by 52%",
    ],
    technologies: [
      "PyTorch",
      "ONNX Runtime",
      "FastAPI",
      "Docker",
      "DICOM",
      "HL7 FHIR",
      "PostgreSQL",
      "Azure ML",
    ],
  },
  {
    slug: "omnichannel-ecommerce",
    title: "Omnichannel E-commerce Platform",
    industry: "Retail",
    client: "UrbanThreads Retail Group",
    summary:
      "Launched a unified omnichannel commerce platform connecting 280 stores and digital channels, increasing online revenue by 165% and enabling same-day fulfillment.",
    challenge:
      "UrbanThreads Retail Group operated separate technology stacks for their 280 brick-and-mortar stores, e-commerce website, and mobile app. Inventory was siloed, resulting in frequent stock-outs online while stores had surplus. Customers could not buy online and pick up in-store, and loyalty points earned in one channel were invisible in others. The fragmented experience was driving customers to competitors with seamless omnichannel capabilities.",
    solution:
      "Monkwo designed and built a unified omnichannel commerce platform with a headless architecture. We implemented a centralized inventory management system with real-time stock synchronization across all 280 locations and online channels. A composable order management system enabled buy-online-pick-up-in-store, ship-from-store, and endless aisle capabilities. The unified loyalty engine and customer profile worked seamlessly across every touchpoint.",
    results: [
      "Online revenue increased by 165% within the first year of launch",
      "Buy-online-pick-up-in-store orders accounted for 38% of digital sales",
      "Inventory carrying costs reduced by 23% through unified stock management",
      "Customer lifetime value increased by 41% for omnichannel shoppers",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Elasticsearch",
      "Redis",
      "RabbitMQ",
      "Stripe",
      "Contentful",
      "Kubernetes",
    ],
  },
  {
    slug: "realtime-fraud-detection",
    title: "Real-time Fraud Detection System",
    industry: "Fintech",
    client: "SwiftPay Financial",
    summary:
      "Engineered a real-time fraud detection engine processing 12,000 transactions per second with sub-50ms latency, reducing fraud losses by 78%.",
    challenge:
      "SwiftPay Financial, a digital payments processor handling $9 billion in annual transaction volume, was experiencing escalating fraud losses exceeding $42 million per year. Their batch-based fraud detection system analyzed transactions with a 6-hour delay, allowing fraudulent activity to persist for hours before detection. The existing rules-based engine generated excessive false positives, blocking 4.7% of legitimate transactions and frustrating genuine customers.",
    solution:
      "Monkwo built a real-time fraud detection platform using stream processing and ensemble machine learning models. The system evaluates every transaction against 350+ features in under 50 milliseconds, combining gradient-boosted trees for known fraud patterns with graph neural networks for detecting organized fraud rings. An adaptive rules engine allows fraud analysts to deploy new rules without code changes, and a feedback loop continuously retrains models based on confirmed fraud cases.",
    results: [
      "Fraud losses reduced by 78%, saving $32.8 million annually",
      "False positive rate decreased from 4.7% to 0.9% of legitimate transactions",
      "Average fraud detection latency reduced from 6 hours to 45 milliseconds",
      "System scaled to handle 12,000 transactions per second at peak load",
    ],
    technologies: [
      "Apache Flink",
      "Apache Kafka",
      "Python",
      "XGBoost",
      "Neo4j",
      "Cassandra",
      "Kubernetes",
      "Prometheus",
    ],
  },
  {
    slug: "iot-predictive-maintenance",
    title: "IoT-Enabled Predictive Maintenance",
    industry: "Manufacturing",
    client: "Titan Advanced Manufacturing",
    summary:
      "Deployed an IoT sensor network and predictive maintenance platform across 6 factories, reducing unplanned downtime by 72% and extending equipment lifespan by 20%.",
    challenge:
      "Titan Advanced Manufacturing operated 6 factories with over 2,400 pieces of industrial equipment. Reactive maintenance practices led to an average of 14 hours of unplanned downtime per machine per month, costing $67 million annually in lost production. Maintenance schedules were calendar-based rather than condition-based, resulting in both over-maintenance of healthy equipment and catastrophic failures of degrading assets that showed no calendar-based warning signs.",
    solution:
      "Monkwo designed and deployed a comprehensive IoT-enabled predictive maintenance platform. We installed over 18,000 sensors across critical equipment measuring vibration, temperature, pressure, and acoustic signatures. A real-time data ingestion pipeline feeds sensor telemetry into a time-series database, where machine learning models trained on 3 years of historical failure data predict remaining useful life and detect anomalous patterns. A mobile-first maintenance dashboard provides technicians with prioritized work orders and AI-generated repair guidance.",
    results: [
      "Unplanned downtime reduced by 72%, saving $48.2 million in annual production losses",
      "Equipment lifespan extended by an average of 20% through optimized maintenance scheduling",
      "Spare parts inventory costs reduced by 31% through predictive demand planning",
      "Maintenance labor efficiency improved by 38% with AI-prioritized work orders",
    ],
    technologies: [
      "Azure IoT Hub",
      "Apache Kafka",
      "TimescaleDB",
      "Python",
      "scikit-learn",
      "React Native",
      "Docker",
      "Grafana",
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudiesData.find((c) => c.slug === slug);
