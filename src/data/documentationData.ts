export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export interface DocCategory {
  name: string;
  slug: string;
  description: string;
  articles: DocArticle[];
}

export const documentationData: DocCategory[] = [
  {
    name: "Getting Started",
    slug: "getting-started",
    description:
      "Everything you need to begin building with the Monkwo platform.",
    articles: [
      {
        slug: "quick-start-guide",
        title: "Quick Start Guide",
        description:
          "Get up and running with Monkwo in under five minutes. This guide walks you through creating your account, generating API keys, and making your first API call.",
        category: "getting-started",
      },
      {
        slug: "installation",
        title: "Installation",
        description:
          "Step-by-step instructions for installing the Monkwo CLI and core dependencies on macOS, Windows, and Linux environments.",
        category: "getting-started",
      },
      {
        slug: "configuration",
        title: "Configuration",
        description:
          "Learn how to configure your Monkwo workspace, set environment variables, manage configuration profiles, and customize default behaviors.",
        category: "getting-started",
      },
      {
        slug: "first-project",
        title: "First Project",
        description:
          "A hands-on tutorial that guides you through creating your first Monkwo project, connecting a data source, and deploying a simple workflow.",
        category: "getting-started",
      },
      {
        slug: "environment-setup",
        title: "Environment Setup",
        description:
          "Best practices for setting up development, staging, and production environments with proper access controls and secrets management.",
        category: "getting-started",
      },
    ],
  },
  {
    name: "API Reference",
    slug: "api-reference",
    description:
      "Comprehensive reference documentation for every Monkwo API endpoint.",
    articles: [
      {
        slug: "authentication-api",
        title: "Authentication API",
        description:
          "Detailed reference for OAuth 2.0 flows, API key authentication, JWT token management, and session handling across all Monkwo services.",
        category: "api-reference",
      },
      {
        slug: "data-api",
        title: "Data API",
        description:
          "Full reference for CRUD operations, batch processing, query filters, pagination, and data transformation endpoints.",
        category: "api-reference",
      },
      {
        slug: "webhooks",
        title: "Webhooks",
        description:
          "Learn how to register, verify, and manage webhook endpoints for real-time event notifications from the Monkwo platform.",
        category: "api-reference",
      },
      {
        slug: "rate-limits",
        title: "Rate Limits",
        description:
          "Understand request quotas, rate limit headers, throttling behavior, and strategies for optimizing your API usage within plan limits.",
        category: "api-reference",
      },
      {
        slug: "error-codes",
        title: "Error Codes",
        description:
          "A complete catalog of API error codes, their meanings, common causes, and recommended resolution steps.",
        category: "api-reference",
      },
    ],
  },
  {
    name: "SDKs & Libraries",
    slug: "sdks-and-libraries",
    description:
      "Official client libraries for integrating Monkwo into your application stack.",
    articles: [
      {
        slug: "javascript-sdk",
        title: "JavaScript SDK",
        description:
          "Install and use the official Monkwo JavaScript SDK for Node.js and browser environments, with TypeScript support and tree-shaking compatibility.",
        category: "sdks-and-libraries",
      },
      {
        slug: "python-sdk",
        title: "Python SDK",
        description:
          "Get started with the Monkwo Python SDK featuring async support, Pydantic models, and seamless integration with pandas and NumPy.",
        category: "sdks-and-libraries",
      },
      {
        slug: "java-sdk",
        title: "Java SDK",
        description:
          "Integrate Monkwo into Java and Kotlin applications using the official SDK with support for Spring Boot auto-configuration and reactive streams.",
        category: "sdks-and-libraries",
      },
      {
        slug: "dotnet-sdk",
        title: ".NET SDK",
        description:
          "Use the Monkwo .NET SDK with full support for dependency injection, async/await patterns, and compatibility with .NET 6+ and .NET Framework 4.7.2+.",
        category: "sdks-and-libraries",
      },
    ],
  },
  {
    name: "Deployment",
    slug: "deployment",
    description:
      "Guides for deploying, monitoring, and scaling your Monkwo applications in production.",
    articles: [
      {
        slug: "docker-deployment",
        title: "Docker Deployment",
        description:
          "Containerize and deploy Monkwo services using Docker and Docker Compose, including multi-stage builds and optimized image configurations.",
        category: "deployment",
      },
      {
        slug: "cloud-deployment",
        title: "Cloud Deployment",
        description:
          "Deploy to AWS, Azure, or Google Cloud using Monkwo's infrastructure-as-code templates with Terraform and Pulumi.",
        category: "deployment",
      },
      {
        slug: "cicd-integration",
        title: "CI/CD Integration",
        description:
          "Set up continuous integration and delivery pipelines with GitHub Actions, GitLab CI, Jenkins, and Azure DevOps for Monkwo projects.",
        category: "deployment",
      },
      {
        slug: "monitoring-setup",
        title: "Monitoring Setup",
        description:
          "Configure observability with built-in metrics, distributed tracing, structured logging, and integrations with Datadog, Grafana, and New Relic.",
        category: "deployment",
      },
      {
        slug: "scaling-guide",
        title: "Scaling Guide",
        description:
          "Architect for scale with horizontal auto-scaling, database sharding strategies, caching layers, and load balancing best practices.",
        category: "deployment",
      },
    ],
  },
  {
    name: "FAQs",
    slug: "faqs",
    description:
      "Answers to the most frequently asked questions about the Monkwo platform.",
    articles: [
      {
        slug: "common-issues",
        title: "Common Issues",
        description:
          "Troubleshooting guides for the most commonly reported issues including connectivity problems, authentication errors, and data sync failures.",
        category: "faqs",
      },
      {
        slug: "billing-faq",
        title: "Billing FAQ",
        description:
          "Answers about pricing plans, usage-based billing, invoice management, payment methods, and how to upgrade or downgrade your subscription.",
        category: "faqs",
      },
      {
        slug: "security-faq",
        title: "Security FAQ",
        description:
          "Information about data encryption, compliance certifications (SOC 2, GDPR, HIPAA), penetration testing, and vulnerability disclosure policies.",
        category: "faqs",
      },
      {
        slug: "integration-faq",
        title: "Integration FAQ",
        description:
          "Common questions about integrating Monkwo with third-party services, SSO providers, data warehouses, and legacy systems.",
        category: "faqs",
      },
    ],
  },
];
