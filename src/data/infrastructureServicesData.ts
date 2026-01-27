export interface InfraServiceFeature {
  title: string;
  description: string;
}

export interface InfraServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface InfraServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: InfraServiceFeature[];
  process: InfraServiceProcess[];
  benefits: string[];
  technologies?: string[];
  useCases?: string[];
}

export const infrastructureServicesData: InfraServiceData[] = [
  {
    slug: 'cloud-architecture',
    title: 'Cloud Architecture & Migration',
    shortTitle: 'Cloud Architecture',
    tagline: 'Scalable, resilient cloud infrastructure',
    description: 'Design and implement cloud-native architectures on AWS, Azure, or GCP with best practices for scalability, security, and cost optimization.',
    heroDescription: 'Transform your infrastructure with modern cloud architectures. We design, build, and migrate workloads to the cloud with a focus on reliability, performance, and cost efficiency.',
    features: [
      { title: 'Cloud Strategy & Assessment', description: 'Evaluate workloads and create a migration strategy tailored to your business needs.' },
      { title: 'Architecture Design', description: 'Design scalable, fault-tolerant cloud architectures using microservices and serverless patterns.' },
      { title: 'Cloud Migration', description: 'Execute seamless migrations from on-premises or legacy environments to modern cloud platforms.' },
      { title: 'Cost Optimization', description: 'Implement FinOps practices to monitor, allocate, and optimize cloud spending.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Analyze current infrastructure and define cloud readiness.' },
      { step: 2, title: 'Design', description: 'Architect the target cloud environment with security and compliance.' },
      { step: 3, title: 'Migration', description: 'Execute phased migration with minimal downtime.' },
      { step: 4, title: 'Optimization', description: 'Continuously optimize performance and costs.' },
    ],
    benefits: [
      'Elastic scalability on demand',
      'Reduced infrastructure costs',
      'Improved disaster recovery',
      'Global deployment capabilities',
      'Enhanced security posture',
      'Faster time to market',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
  },
  {
    slug: 'devops-cicd',
    title: 'DevOps & CI/CD',
    shortTitle: 'DevOps & CI/CD',
    tagline: 'Automate, deploy, and deliver faster',
    description: 'Implement DevOps practices and CI/CD pipelines that accelerate software delivery while maintaining quality and reliability.',
    heroDescription: 'Accelerate your software delivery with modern DevOps practices. We build automated pipelines, implement infrastructure as code, and establish the culture and tooling for continuous integration and delivery.',
    features: [
      { title: 'CI/CD Pipeline Design', description: 'Build automated build, test, and deployment pipelines for rapid, reliable releases.' },
      { title: 'Infrastructure as Code', description: 'Manage infrastructure through version-controlled code using Terraform, Pulumi, or CloudFormation.' },
      { title: 'Container Orchestration', description: 'Deploy and manage containerized applications with Kubernetes, ECS, or Docker Swarm.' },
      { title: 'Monitoring & Observability', description: 'Implement comprehensive monitoring, logging, and alerting for full system visibility.' },
    ],
    process: [
      { step: 1, title: 'Audit', description: 'Assess current development and deployment workflows.' },
      { step: 2, title: 'Design', description: 'Design CI/CD pipelines and IaC strategies.' },
      { step: 3, title: 'Implement', description: 'Build and configure automation tooling and pipelines.' },
      { step: 4, title: 'Optimize', description: 'Iterate on pipeline performance and team workflows.' },
    ],
    benefits: [
      'Faster release cycles',
      'Reduced deployment failures',
      'Consistent environments',
      'Automated testing and quality gates',
      'Improved team collaboration',
      'Reproducible infrastructure',
    ],
    technologies: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Helm', 'Ansible'],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Services',
    shortTitle: 'Cybersecurity',
    tagline: 'Protect your digital assets',
    description: 'Comprehensive security assessments, penetration testing, and security architecture to protect your organization from threats.',
    heroDescription: 'Safeguard your digital infrastructure with proactive security measures. We provide vulnerability assessments, security architecture design, and incident response planning to keep your systems protected.',
    features: [
      { title: 'Security Assessment', description: 'Identify vulnerabilities through comprehensive security audits and penetration testing.' },
      { title: 'Security Architecture', description: 'Design defense-in-depth architectures with zero-trust principles and proper access controls.' },
      { title: 'Compliance & Governance', description: 'Achieve and maintain compliance with standards like SOC 2, ISO 27001, GDPR, and HIPAA.' },
      { title: 'Incident Response', description: 'Develop incident response plans and provide rapid response to security events.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate security posture and identify vulnerabilities.' },
      { step: 2, title: 'Planning', description: 'Develop security strategy and remediation roadmap.' },
      { step: 3, title: 'Implementation', description: 'Deploy security controls and monitoring systems.' },
      { step: 4, title: 'Monitoring', description: 'Continuous monitoring and incident response readiness.' },
    ],
    benefits: [
      'Reduced security risk exposure',
      'Regulatory compliance assurance',
      'Proactive threat detection',
      'Protected customer data',
      'Business continuity assurance',
      'Security-aware development culture',
    ],
    technologies: ['SIEM', 'WAF', 'IDS/IPS', 'Vault', 'CrowdStrike', 'Splunk'],
  },
  {
    slug: 'network-infrastructure',
    title: 'Network & IT Infrastructure',
    shortTitle: 'Network Infrastructure',
    tagline: 'Reliable connectivity and performance',
    description: 'Design and manage robust network infrastructure including LAN/WAN, SD-WAN, and hybrid connectivity solutions.',
    heroDescription: 'Build a reliable foundation for your digital operations. We design, implement, and manage network infrastructure that delivers high availability, performance, and security for your business.',
    features: [
      { title: 'Network Design & Implementation', description: 'Design scalable network topologies optimized for performance and reliability.' },
      { title: 'SD-WAN & Hybrid Connectivity', description: 'Implement software-defined networking for flexible, cost-effective connectivity.' },
      { title: 'Network Security', description: 'Deploy firewalls, VPNs, and network segmentation for comprehensive protection.' },
      { title: 'Performance Monitoring', description: 'Monitor network health and performance with proactive alerting and optimization.' },
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Map current network topology and identify pain points.' },
      { step: 2, title: 'Design', description: 'Architect optimal network infrastructure for current and future needs.' },
      { step: 3, title: 'Deployment', description: 'Implement network changes with minimal disruption.' },
      { step: 4, title: 'Management', description: 'Ongoing monitoring, optimization, and support.' },
    ],
    benefits: [
      'High availability and uptime',
      'Optimized network performance',
      'Secure connectivity',
      'Scalable architecture',
      'Reduced operational costs',
      'Proactive issue resolution',
    ],
    technologies: ['Cisco', 'Palo Alto', 'Fortinet', 'VMware NSX', 'Meraki', 'Zscaler'],
  },
];

export const getInfraServiceBySlug = (slug: string): InfraServiceData | undefined => {
  return infrastructureServicesData.find((service) => service.slug === slug);
};
