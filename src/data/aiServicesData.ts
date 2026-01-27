export interface AIServiceFeature {
  title: string;
  description: string;
}

export interface AIServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface AIServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  features: AIServiceFeature[];
  process: AIServiceProcess[];
  benefits: string[];
  technologies?: string[];
  useCases?: string[];
}

export const aiServicesData: AIServiceData[] = [
  {
    slug: 'machine-learning',
    title: 'Machine Learning Solutions',
    shortTitle: 'Machine Learning',
    tagline: 'Predictive models that drive decisions',
    description: 'Build and deploy machine learning models that automate predictions, detect anomalies, and optimize business processes.',
    heroDescription: 'Leverage the power of machine learning to transform raw data into actionable predictions. We design, train, and deploy ML models tailored to your specific business challenges.',
    features: [
      { title: 'Predictive Analytics', description: 'Build models that forecast trends, customer behavior, and business outcomes with high accuracy.' },
      { title: 'Anomaly Detection', description: 'Identify unusual patterns in data streams for fraud detection, quality control, and system monitoring.' },
      { title: 'Recommendation Systems', description: 'Personalize user experiences with intelligent recommendation engines for products, content, and services.' },
      { title: 'AutoML & Model Management', description: 'Streamline the ML lifecycle with automated model selection, training, and deployment pipelines.' },
    ],
    process: [
      { step: 1, title: 'Data Assessment', description: 'Evaluate data readiness, quality, and suitability for ML applications.' },
      { step: 2, title: 'Model Development', description: 'Design and train models using appropriate algorithms and techniques.' },
      { step: 3, title: 'Validation & Testing', description: 'Rigorously test models for accuracy, bias, and real-world performance.' },
      { step: 4, title: 'Deployment & Monitoring', description: 'Deploy models to production with continuous monitoring and retraining.' },
    ],
    benefits: [
      'Automated decision-making at scale',
      'Improved prediction accuracy over time',
      'Reduced manual analysis effort',
      'Real-time insights from streaming data',
      'Scalable model serving infrastructure',
      'Explainable AI for stakeholder trust',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Kubeflow', 'SageMaker'],
  },
  {
    slug: 'nlp-computer-vision',
    title: 'NLP & Computer Vision',
    shortTitle: 'NLP & Vision',
    tagline: 'Understanding language and images at scale',
    description: 'Harness natural language processing and computer vision to extract meaning from text, documents, and visual data.',
    heroDescription: 'Transform unstructured text and visual data into structured insights. Our NLP and computer vision solutions enable automated document processing, sentiment analysis, object detection, and more.',
    features: [
      { title: 'Document Intelligence', description: 'Extract structured data from documents, invoices, contracts, and forms using OCR and NLP.' },
      { title: 'Sentiment & Text Analysis', description: 'Analyze customer feedback, social media, and communications for sentiment, topics, and intent.' },
      { title: 'Object Detection & Recognition', description: 'Identify and classify objects in images and video streams for quality control, security, and automation.' },
      { title: 'Conversational AI', description: 'Build intelligent chatbots and virtual assistants that understand natural language.' },
    ],
    process: [
      { step: 1, title: 'Use Case Definition', description: 'Identify the specific text or vision problem to solve and gather training data.' },
      { step: 2, title: 'Model Selection', description: 'Choose appropriate pre-trained models or design custom architectures.' },
      { step: 3, title: 'Fine-Tuning', description: 'Fine-tune models on domain-specific data for optimal performance.' },
      { step: 4, title: 'Integration', description: 'Integrate into existing workflows with APIs and real-time processing.' },
    ],
    benefits: [
      'Automated document processing',
      'Real-time text and image analysis',
      'Reduced manual data entry',
      'Enhanced customer interaction',
      'Scalable unstructured data processing',
      'Multi-language support capabilities',
    ],
    technologies: ['Hugging Face', 'OpenCV', 'spaCy', 'BERT', 'GPT', 'YOLO'],
  },
  {
    slug: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    shortTitle: 'AI Strategy',
    tagline: 'Responsible and practical AI adoption',
    description: 'Develop a comprehensive AI strategy aligned with business goals, ensuring ethical and responsible implementation.',
    heroDescription: 'Navigate the AI landscape with confidence. We help organizations develop practical AI strategies, identify high-impact use cases, and build the foundations for responsible AI adoption.',
    features: [
      { title: 'AI Readiness Assessment', description: 'Evaluate your organization\'s data, infrastructure, and talent readiness for AI adoption.' },
      { title: 'Use Case Identification', description: 'Identify and prioritize AI use cases with the highest business impact and feasibility.' },
      { title: 'Ethics & Governance Framework', description: 'Establish responsible AI practices including bias detection, fairness, and transparency.' },
      { title: 'AI Roadmap Development', description: 'Create a phased roadmap for AI implementation aligned with strategic business objectives.' },
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand business goals, current capabilities, and AI opportunities.' },
      { step: 2, title: 'Strategy Design', description: 'Develop a comprehensive AI strategy with prioritized use cases.' },
      { step: 3, title: 'Pilot Implementation', description: 'Execute proof-of-concept projects to validate AI opportunities.' },
      { step: 4, title: 'Scale & Govern', description: 'Scale successful pilots with proper governance and monitoring.' },
    ],
    benefits: [
      'Clear AI investment priorities',
      'Reduced risk of failed AI projects',
      'Ethical and compliant AI practices',
      'Faster time to AI value',
      'Aligned technology and business goals',
      'Built-in governance framework',
    ],
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI Solutions',
    shortTitle: 'Generative AI',
    tagline: 'Create content and solutions with AI',
    description: 'Leverage generative AI for content creation, code generation, design automation, and intelligent assistants.',
    heroDescription: 'Unlock the creative potential of generative AI. From intelligent content generation to automated design and code synthesis, we help you integrate generative AI capabilities into your products and workflows.',
    features: [
      { title: 'LLM Integration', description: 'Integrate large language models into your applications for intelligent text generation and analysis.' },
      { title: 'RAG Systems', description: 'Build retrieval-augmented generation systems that ground AI responses in your organization\'s data.' },
      { title: 'AI-Powered Automation', description: 'Automate content creation, summarization, and document generation workflows.' },
      { title: 'Custom Model Fine-Tuning', description: 'Fine-tune foundation models on your domain data for specialized performance.' },
    ],
    process: [
      { step: 1, title: 'Requirements', description: 'Define generative AI use cases and expected outputs.' },
      { step: 2, title: 'Architecture', description: 'Design the AI pipeline including model selection and data flow.' },
      { step: 3, title: 'Development', description: 'Build and fine-tune the generative AI solution.' },
      { step: 4, title: 'Evaluation', description: 'Test for quality, safety, and alignment with business needs.' },
    ],
    benefits: [
      'Accelerated content production',
      'Reduced manual creative effort',
      'Personalized outputs at scale',
      'Grounded responses from your data',
      'Cost-effective AI integration',
      'Continuous model improvement',
    ],
    technologies: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Weaviate', 'ChromaDB'],
  },
];

export const getAIServiceBySlug = (slug: string): AIServiceData | undefined => {
  return aiServicesData.find((service) => service.slug === slug);
};
