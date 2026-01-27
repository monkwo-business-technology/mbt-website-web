export interface TutorialCategory {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
}

export const tutorialCategories: TutorialCategory[] = [
  { name: 'Web Development', slug: 'web-development', subcategories: [
    { name: 'React', slug: 'react' }, { name: 'Angular', slug: 'angular' }, { name: 'Vue.js', slug: 'vuejs' },
    { name: 'Node.js', slug: 'nodejs' }, { name: 'Next.js', slug: 'nextjs' }, { name: 'Django', slug: 'django' },
    { name: 'TypeScript', slug: 'typescript' }, { name: 'HTML & CSS', slug: 'html-css' },
  ]},
  { name: 'Mobile Development', slug: 'mobile-development', subcategories: [
    { name: 'React Native', slug: 'react-native' }, { name: 'Flutter', slug: 'flutter' },
    { name: 'Swift/iOS', slug: 'swift-ios' }, { name: 'Kotlin/Android', slug: 'kotlin-android' },
    { name: 'Ionic', slug: 'ionic' },
  ]},
  { name: 'Data Engineering', slug: 'data-engineering', subcategories: [
    { name: 'Apache Spark', slug: 'apache-spark' }, { name: 'Apache Kafka', slug: 'apache-kafka' },
    { name: 'Airflow', slug: 'airflow' }, { name: 'ETL Pipelines', slug: 'etl-pipelines' },
    { name: 'Data Modeling', slug: 'data-modeling' },
  ]},
  { name: 'Machine Learning & AI', slug: 'machine-learning-ai', subcategories: [
    { name: 'Python ML', slug: 'python-ml' }, { name: 'TensorFlow', slug: 'tensorflow' },
    { name: 'PyTorch', slug: 'pytorch' }, { name: 'NLP', slug: 'nlp' },
    { name: 'Computer Vision', slug: 'computer-vision' }, { name: 'MLOps', slug: 'mlops' },
  ]},
  { name: 'Cloud & DevOps', slug: 'cloud-devops', subcategories: [
    { name: 'AWS', slug: 'aws' }, { name: 'Azure', slug: 'azure' }, { name: 'GCP', slug: 'gcp' },
    { name: 'Docker', slug: 'docker' }, { name: 'Kubernetes', slug: 'kubernetes' },
    { name: 'CI/CD', slug: 'ci-cd' }, { name: 'Terraform', slug: 'terraform' },
  ]},
  { name: 'Cybersecurity', slug: 'cybersecurity', subcategories: [
    { name: 'Network Security', slug: 'network-security' }, { name: 'Ethical Hacking', slug: 'ethical-hacking' },
    { name: 'Identity & Access', slug: 'identity-access' }, { name: 'Compliance', slug: 'compliance' },
  ]},
  { name: 'Blockchain', slug: 'blockchain', subcategories: [
    { name: 'Solidity', slug: 'solidity' }, { name: 'Smart Contracts', slug: 'smart-contracts' },
    { name: 'DeFi', slug: 'defi' }, { name: 'Web3', slug: 'web3' },
  ]},
  { name: 'IoT', slug: 'iot', subcategories: [
    { name: 'Arduino', slug: 'arduino' }, { name: 'Raspberry Pi', slug: 'raspberry-pi' },
    { name: 'MQTT', slug: 'mqtt' }, { name: 'Edge Computing', slug: 'edge-computing' },
  ]},
  { name: 'UI/UX Design', slug: 'ui-ux-design', subcategories: [
    { name: 'Figma', slug: 'figma' }, { name: 'Design Systems', slug: 'design-systems' },
    { name: 'User Research', slug: 'user-research' }, { name: 'Accessibility', slug: 'accessibility' },
    { name: 'Prototyping', slug: 'prototyping' },
  ]},
  { name: 'Database & SQL', slug: 'database-sql', subcategories: [
    { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'MongoDB', slug: 'mongodb' },
    { name: 'MySQL', slug: 'mysql' }, { name: 'Redis', slug: 'redis' },
    { name: 'SQL Fundamentals', slug: 'sql-fundamentals' },
  ]},
  { name: 'Programming Languages', slug: 'programming-languages', subcategories: [
    { name: 'Python', slug: 'python' }, { name: 'JavaScript', slug: 'javascript' },
    { name: 'Java', slug: 'java' }, { name: 'Go', slug: 'go' },
    { name: 'Rust', slug: 'rust' }, { name: 'C#', slug: 'csharp' },
  ]},
  { name: 'Software Architecture', slug: 'software-architecture', subcategories: [
    { name: 'Microservices', slug: 'microservices' }, { name: 'System Design', slug: 'system-design' },
    { name: 'Design Patterns', slug: 'design-patterns' }, { name: 'Event-Driven', slug: 'event-driven' },
    { name: 'API Design', slug: 'api-design' },
  ]},
];

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  status: 'published' | 'draft';
  tags: string[];
}

export const seedTutorials: Tutorial[] = [
  {
    id: 'tut-001',
    slug: 'getting-started-with-react-hooks',
    title: 'Getting Started with React Hooks',
    category: 'web-development',
    subcategory: 'react',
    difficulty: 'Beginner',
    author: 'Sarah Chen',
    date: '2025-11-15',
    readTime: '8 min read',
    excerpt: 'Learn the fundamentals of React Hooks including useState, useEffect, and custom hooks to build modern functional components.',
    content: `<h2>What Are React Hooks?</h2>
<p>React Hooks were introduced in React 16.8 and allow you to use state and other React features in functional components without writing a class. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.</p>

<h2>The useState Hook</h2>
<p>The <code>useState</code> hook lets you add state to functional components. It returns a pair: the current state value and a function that lets you update it.</p>
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

<h2>The useEffect Hook</h2>
<p>The <code>useEffect</code> hook lets you perform side effects in function components. It serves the same purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in React classes, unified into a single API.</p>
<pre><code>import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() =&gt; {
    fetch(\`/api/users/\${userId}\`)
      .then(res =&gt; res.json())
      .then(data =&gt; setUser(data));
  }, [userId]);

  if (!user) return &lt;p&gt;Loading...&lt;/p&gt;;
  return &lt;h1&gt;{user.name}&lt;/h1&gt;;
}</code></pre>

<h2>Building a Custom Hook</h2>
<p>Custom hooks let you extract component logic into reusable functions. A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks.</p>
<pre><code>function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() =&gt; {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) =&gt; {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}</code></pre>

<h2>Key Takeaways</h2>
<ul>
  <li>Hooks let you use state and lifecycle features in functional components.</li>
  <li>Always call hooks at the top level of your component, never inside loops or conditions.</li>
  <li>Custom hooks allow you to share stateful logic between components without changing their hierarchy.</li>
  <li>The dependency array in <code>useEffect</code> controls when the effect re-runs.</li>
</ul>`,
    status: 'published',
    tags: ['react', 'hooks', 'useState', 'useEffect', 'frontend'],
  },
  {
    id: 'tut-002',
    slug: 'building-rest-apis-with-nodejs-and-express',
    title: 'Building REST APIs with Node.js and Express',
    category: 'web-development',
    subcategory: 'nodejs',
    difficulty: 'Intermediate',
    author: 'Marcus Johnson',
    date: '2025-10-28',
    readTime: '12 min read',
    excerpt: 'A practical guide to building robust RESTful APIs using Node.js and Express, covering routing, middleware, error handling, and best practices.',
    content: `<h2>Setting Up Your Express Project</h2>
<p>Express is the most popular web framework for Node.js. It provides a thin layer of fundamental web application features, without obscuring the Node.js features you already know. Let's start by initializing a project and installing dependencies.</p>
<pre><code>mkdir my-api &amp;&amp; cd my-api
npm init -y
npm install express cors helmet morgan
npm install -D typescript @types/express @types/node ts-node nodemon</code></pre>

<h2>Creating the Server</h2>
<p>We will create a basic Express server with middleware for security headers, CORS, and request logging. Structuring your application with middleware from the start ensures a clean and maintainable codebase.</p>
<pre><code>import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (req, res) =&gt; {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () =&gt; {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>

<h2>Defining RESTful Routes</h2>
<p>A well-designed REST API uses HTTP methods to map to CRUD operations. Here is an example of a resource controller for managing articles.</p>
<pre><code>import { Router } from 'express';

const router = Router();
let articles = [];

router.get('/articles', (req, res) =&gt; {
  res.json(articles);
});

router.post('/articles', (req, res) =&gt; {
  const article = { id: Date.now().toString(), ...req.body };
  articles.push(article);
  res.status(201).json(article);
});

router.put('/articles/:id', (req, res) =&gt; {
  const index = articles.findIndex(a =&gt; a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  articles[index] = { ...articles[index], ...req.body };
  res.json(articles[index]);
});

router.delete('/articles/:id', (req, res) =&gt; {
  articles = articles.filter(a =&gt; a.id !== req.params.id);
  res.status(204).send();
});

export default router;</code></pre>

<h2>Error Handling Middleware</h2>
<p>Centralized error handling keeps your route handlers clean and ensures consistent error responses across your API.</p>
<pre><code>app.use((err, req, res, next) =&gt; {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: { message: err.message || 'Internal Server Error' },
  });
});</code></pre>

<h2>Best Practices</h2>
<ul>
  <li>Use plural nouns for resource endpoints (e.g., <code>/api/articles</code>).</li>
  <li>Return appropriate HTTP status codes (200, 201, 204, 400, 404, 500).</li>
  <li>Validate request bodies with a library like Zod or Joi.</li>
  <li>Use environment variables for configuration values.</li>
  <li>Implement rate limiting for production APIs.</li>
</ul>`,
    status: 'published',
    tags: ['nodejs', 'express', 'rest-api', 'backend', 'javascript'],
  },
  {
    id: 'tut-003',
    slug: 'introduction-to-apache-kafka',
    title: 'Introduction to Apache Kafka',
    category: 'data-engineering',
    subcategory: 'apache-kafka',
    difficulty: 'Beginner',
    author: 'Priya Patel',
    date: '2025-12-02',
    readTime: '10 min read',
    excerpt: 'Understand the core concepts of Apache Kafka, including topics, partitions, producers, and consumers, with hands-on examples.',
    content: `<h2>What Is Apache Kafka?</h2>
<p>Apache Kafka is a distributed event streaming platform capable of handling trillions of events per day. Originally developed at LinkedIn, Kafka is used for building real-time data pipelines and streaming applications. It combines messaging, storage, and stream processing to allow both historical and real-time data analysis.</p>

<h2>Core Concepts</h2>
<p>Kafka organizes data into topics, which are split into partitions for parallel processing. Producers write data to topics, and consumers read from them. This decoupled architecture allows independent scaling of producers and consumers.</p>
<ul>
  <li><strong>Topic:</strong> A named feed or category of records. Think of it as a database table or a folder in a filesystem.</li>
  <li><strong>Partition:</strong> Topics are divided into partitions, enabling parallel consumption and fault tolerance.</li>
  <li><strong>Producer:</strong> An application that publishes records to one or more Kafka topics.</li>
  <li><strong>Consumer:</strong> An application that reads records from topics, tracking its position via offsets.</li>
  <li><strong>Broker:</strong> A Kafka server that stores data and serves client requests.</li>
</ul>

<h2>Running Kafka Locally</h2>
<p>The quickest way to get started is using Docker Compose. This sets up a single-node Kafka cluster along with Zookeeper for coordination.</p>
<pre><code># docker-compose.yml
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1</code></pre>

<h2>Producing and Consuming Messages</h2>
<p>Once the cluster is running, you can use the Kafka CLI tools to create a topic and send messages.</p>
<pre><code># Create a topic
kafka-topics --create --topic events --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1

# Produce messages
kafka-console-producer --topic events --bootstrap-server localhost:9092
&gt; {"event":"page_view","user":"alice"}
&gt; {"event":"click","user":"bob"}

# Consume messages
kafka-console-consumer --topic events --from-beginning --bootstrap-server localhost:9092</code></pre>

<h2>When to Use Kafka</h2>
<ul>
  <li>Real-time event streaming and processing pipelines.</li>
  <li>Log aggregation across distributed services.</li>
  <li>Event sourcing for microservices architectures.</li>
  <li>Decoupling data producers from consumers in large systems.</li>
</ul>`,
    status: 'published',
    tags: ['kafka', 'data-engineering', 'streaming', 'distributed-systems'],
  },
  {
    id: 'tut-004',
    slug: 'training-neural-networks-with-pytorch',
    title: 'Training Neural Networks with PyTorch',
    category: 'machine-learning-ai',
    subcategory: 'pytorch',
    difficulty: 'Advanced',
    author: 'Dr. Wei Zhang',
    date: '2025-09-20',
    readTime: '15 min read',
    excerpt: 'Deep dive into training neural networks with PyTorch, covering custom datasets, model architecture, loss functions, and GPU acceleration.',
    content: `<h2>Why PyTorch?</h2>
<p>PyTorch has become the dominant framework in deep learning research and is increasingly adopted in production environments. Its dynamic computation graph, Pythonic API, and strong GPU support make it an excellent choice for building and training neural networks of any complexity.</p>

<h2>Defining a Model</h2>
<p>In PyTorch, neural networks are defined as classes that inherit from <code>nn.Module</code>. You define the layers in <code>__init__</code> and the forward pass in the <code>forward</code> method.</p>
<pre><code>import torch
import torch.nn as nn
import torch.optim as optim

class ImageClassifier(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
        )
        self.classifier = nn.Sequential(
            nn.Linear(64 * 8 * 8, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, num_classes),
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x</code></pre>

<h2>Training Loop</h2>
<p>The training loop is where the model learns from data. Each epoch iterates over the dataset, computes the loss, and updates the model weights through backpropagation. Monitoring training and validation loss helps detect overfitting early.</p>
<pre><code>device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = ImageClassifier(num_classes=10).to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

for epoch in range(50):
    model.train()
    running_loss = 0.0
    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

    avg_loss = running_loss / len(train_loader)
    print(f'Epoch [{epoch+1}/50], Loss: {avg_loss:.4f}')</code></pre>

<h2>Evaluation and Metrics</h2>
<p>After training, evaluate the model on a held-out test set to measure its generalization performance. Always use <code>torch.no_grad()</code> during evaluation to save memory and computation.</p>
<pre><code>model.eval()
correct = 0
total = 0
with torch.no_grad():
    for images, labels in test_loader:
        images, labels = images.to(device), labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

accuracy = 100 * correct / total
print(f'Test Accuracy: {accuracy:.2f}%')</code></pre>

<h2>Tips for Effective Training</h2>
<ul>
  <li>Use learning rate schedulers (e.g., <code>StepLR</code> or <code>CosineAnnealingLR</code>) for better convergence.</li>
  <li>Apply data augmentation to improve generalization on small datasets.</li>
  <li>Use mixed precision training with <code>torch.cuda.amp</code> for faster GPU training.</li>
  <li>Save checkpoints regularly with <code>torch.save(model.state_dict(), 'checkpoint.pth')</code>.</li>
</ul>`,
    status: 'published',
    tags: ['pytorch', 'deep-learning', 'neural-networks', 'python', 'gpu'],
  },
  {
    id: 'tut-005',
    slug: 'docker-containers-for-beginners',
    title: 'Docker Containers for Beginners',
    category: 'cloud-devops',
    subcategory: 'docker',
    difficulty: 'Beginner',
    author: 'James Rivera',
    date: '2025-11-05',
    readTime: '9 min read',
    excerpt: 'Learn Docker fundamentals including images, containers, Dockerfiles, and Docker Compose to containerize your applications.',
    content: `<h2>What Is Docker?</h2>
<p>Docker is a platform that enables you to package applications and their dependencies into lightweight, portable containers. Unlike virtual machines, containers share the host OS kernel, making them extremely fast to start and efficient with resources. Docker has become the standard for modern application deployment.</p>

<h2>Key Concepts</h2>
<ul>
  <li><strong>Image:</strong> A read-only template containing the application code, runtime, libraries, and configuration. Images are built from Dockerfiles.</li>
  <li><strong>Container:</strong> A running instance of an image. Containers are isolated but share the host kernel.</li>
  <li><strong>Dockerfile:</strong> A text file with instructions to build an image layer by layer.</li>
  <li><strong>Registry:</strong> A repository for storing and distributing images (e.g., Docker Hub).</li>
</ul>

<h2>Writing a Dockerfile</h2>
<p>A Dockerfile describes how to build your application image. Each instruction creates a new layer, and Docker caches layers for faster rebuilds. Here is an example for a Node.js application.</p>
<pre><code># Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose the port and define the start command
EXPOSE 3000
CMD ["node", "server.js"]</code></pre>

<h2>Building and Running</h2>
<p>With the Dockerfile in place, you can build the image and run a container in just two commands.</p>
<pre><code># Build the image
docker build -t my-app:1.0 .

# Run a container
docker run -d -p 3000:3000 --name my-app-container my-app:1.0

# View running containers
docker ps

# View logs
docker logs my-app-container

# Stop and remove
docker stop my-app-container
docker rm my-app-container</code></pre>

<h2>Docker Compose</h2>
<p>For multi-container applications, Docker Compose lets you define and run all services with a single YAML file. This is particularly useful for development environments where you need a database alongside your application.</p>
<pre><code># docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:</code></pre>`,
    status: 'published',
    tags: ['docker', 'containers', 'devops', 'deployment', 'docker-compose'],
  },
  {
    id: 'tut-006',
    slug: 'designing-scalable-microservices',
    title: 'Designing Scalable Microservices',
    category: 'software-architecture',
    subcategory: 'microservices',
    difficulty: 'Advanced',
    author: 'Elena Kowalski',
    date: '2025-10-10',
    readTime: '14 min read',
    excerpt: 'Master the principles of microservices architecture including service boundaries, communication patterns, data management, and resilience.',
    content: `<h2>Microservices Principles</h2>
<p>Microservices architecture decomposes an application into small, independently deployable services. Each service owns its domain logic and data, communicates through well-defined APIs, and can be developed, deployed, and scaled independently. This architectural style enables large teams to work autonomously on different parts of a system.</p>

<h2>Defining Service Boundaries</h2>
<p>The hardest part of microservices is deciding where to draw the boundaries. Domain-Driven Design (DDD) provides a framework for this by identifying bounded contexts. Each bounded context maps to a microservice that encapsulates a specific business capability.</p>
<ul>
  <li><strong>Single Responsibility:</strong> Each service should do one thing well and own its data.</li>
  <li><strong>Loose Coupling:</strong> Services should be independent; a change in one should not require changes in others.</li>
  <li><strong>High Cohesion:</strong> Related functionality should live in the same service.</li>
  <li><strong>Business Capability:</strong> Align services to business domains, not technical layers.</li>
</ul>

<h2>Communication Patterns</h2>
<p>Services communicate through synchronous (request-response) or asynchronous (event-driven) patterns. Choosing the right pattern depends on whether the caller needs an immediate response and how tightly coupled the services should be.</p>
<pre><code>// Synchronous: REST call between services
const orderService = async (orderId: string) =&gt; {
  const order = await fetch(\`http://order-service/orders/\${orderId}\`);
  const payment = await fetch(\`http://payment-service/payments?orderId=\${orderId}\`);
  return { order: await order.json(), payment: await payment.json() };
};

// Asynchronous: Event-driven with a message broker
import { Kafka } from 'kafkajs';
const kafka = new Kafka({ brokers: ['kafka:9092'] });
const producer = kafka.producer();

const publishOrderEvent = async (order: Order) =&gt; {
  await producer.send({
    topic: 'order-events',
    messages: [{ key: order.id, value: JSON.stringify({ type: 'ORDER_CREATED', data: order }) }],
  });
};</code></pre>

<h2>Data Management</h2>
<p>Each microservice should own its database, a pattern known as "database per service." This ensures loose coupling but introduces challenges around data consistency. The Saga pattern helps manage distributed transactions across services without two-phase commits.</p>
<pre><code>// Saga orchestrator example
class OrderSaga {
  async execute(orderData: OrderData) {
    try {
      const order = await orderService.create(orderData);
      const payment = await paymentService.charge(order.id, orderData.amount);
      const inventory = await inventoryService.reserve(order.items);
      await orderService.confirm(order.id);
    } catch (error) {
      // Compensating transactions
      await paymentService.refund(order.id);
      await inventoryService.release(order.items);
      await orderService.cancel(order.id);
    }
  }
}</code></pre>

<h2>Resilience Patterns</h2>
<ul>
  <li><strong>Circuit Breaker:</strong> Stop calling a failing service and return a fallback response until it recovers.</li>
  <li><strong>Retry with Backoff:</strong> Automatically retry failed requests with exponential delays.</li>
  <li><strong>Bulkhead:</strong> Isolate failures so one misbehaving service does not bring down the entire system.</li>
  <li><strong>Health Checks:</strong> Each service exposes a health endpoint for monitoring and orchestration.</li>
</ul>`,
    status: 'published',
    tags: ['microservices', 'architecture', 'distributed-systems', 'ddd', 'saga-pattern'],
  },
  {
    id: 'tut-007',
    slug: 'postgresql-performance-tuning',
    title: 'PostgreSQL Performance Tuning',
    category: 'database-sql',
    subcategory: 'postgresql',
    difficulty: 'Intermediate',
    author: 'Andrei Volkov',
    date: '2025-11-22',
    readTime: '11 min read',
    excerpt: 'Optimize your PostgreSQL database with indexing strategies, query analysis, configuration tuning, and monitoring best practices.',
    content: `<h2>Understanding Query Performance</h2>
<p>PostgreSQL provides powerful tools for analyzing and optimizing query performance. The <code>EXPLAIN ANALYZE</code> command shows you exactly how the database executes a query, including the time spent at each step and whether indexes are being used effectively.</p>
<pre><code>EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.created_at &gt; '2025-01-01'
GROUP BY u.name
ORDER BY order_count DESC
LIMIT 10;</code></pre>

<h2>Indexing Strategies</h2>
<p>Proper indexing is the single most impactful optimization you can make. Indexes speed up reads but add overhead to writes, so you need to index strategically based on your query patterns.</p>
<pre><code>-- B-tree index for equality and range queries
CREATE INDEX idx_orders_created_at ON orders (created_at);

-- Composite index for queries filtering on multiple columns
CREATE INDEX idx_orders_user_date ON orders (user_id, created_at DESC);

-- Partial index for a common filtered subset
CREATE INDEX idx_orders_active ON orders (status)
WHERE status = 'active';

-- GIN index for full-text search
CREATE INDEX idx_articles_search ON articles
USING GIN (to_tsvector('english', title || ' ' || body));</code></pre>

<h2>Configuration Tuning</h2>
<p>The default PostgreSQL configuration is conservative and designed to run on minimal hardware. For production workloads, you should tune several key parameters based on your available memory and workload characteristics.</p>
<pre><code># postgresql.conf key settings
shared_buffers = '4GB'              # 25% of total RAM
effective_cache_size = '12GB'       # 75% of total RAM
work_mem = '256MB'                  # Per-operation sort/hash memory
maintenance_work_mem = '1GB'        # For VACUUM, CREATE INDEX
random_page_cost = 1.1              # Lower for SSD storage
effective_io_concurrency = 200      # Higher for SSD storage
max_parallel_workers_per_gather = 4 # Parallel query workers</code></pre>

<h2>Monitoring and Maintenance</h2>
<p>Regular monitoring and maintenance keep your database performing well over time. Use built-in views and extensions to track slow queries and table bloat.</p>
<pre><code>-- Find slow queries
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 20;

-- Check table bloat and dead tuples
SELECT relname, n_dead_tup, n_live_tup,
       round(n_dead_tup::numeric / NULLIF(n_live_tup, 0) * 100, 2) AS dead_pct
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;</code></pre>

<h2>Quick Wins</h2>
<ul>
  <li>Enable <code>pg_stat_statements</code> to track query performance over time.</li>
  <li>Run <code>ANALYZE</code> after large data loads to update table statistics.</li>
  <li>Use connection pooling (PgBouncer) to reduce connection overhead.</li>
  <li>Partition large tables by date or region for faster scans.</li>
  <li>Avoid <code>SELECT *</code>; only fetch the columns you need.</li>
</ul>`,
    status: 'published',
    tags: ['postgresql', 'database', 'performance', 'sql', 'indexing'],
  },
  {
    id: 'tut-008',
    slug: 'figma-design-systems-from-scratch',
    title: 'Figma Design Systems from Scratch',
    category: 'ui-ux-design',
    subcategory: 'figma',
    difficulty: 'Beginner',
    author: 'Aisha Mahmoud',
    date: '2025-12-10',
    readTime: '10 min read',
    excerpt: 'Learn how to build a complete design system in Figma with reusable components, design tokens, and auto-layout for consistent UI design.',
    content: `<h2>Why Build a Design System?</h2>
<p>A design system is a collection of reusable components, guidelines, and design tokens that ensure consistency across your product. In Figma, a well-built design system accelerates design work, reduces inconsistencies, and creates a shared language between designers and developers. It is the foundation of scalable product design.</p>

<h2>Setting Up Design Tokens</h2>
<p>Design tokens are the atomic values of your system: colors, typography, spacing, and shadows. In Figma, define these as styles and variables so every component references them.</p>
<ul>
  <li><strong>Colors:</strong> Define a palette with primary, secondary, neutral, success, warning, and error colors, each with multiple shades (50-900).</li>
  <li><strong>Typography:</strong> Create text styles for headings (H1-H6), body text, captions, and labels with consistent font families and sizes.</li>
  <li><strong>Spacing:</strong> Use a 4px or 8px base grid and define spacing tokens (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px).</li>
  <li><strong>Elevation:</strong> Define shadow styles for different elevation levels to create depth hierarchy.</li>
</ul>

<h2>Building Components with Auto Layout</h2>
<p>Auto Layout is Figma's most powerful feature for creating responsive, flexible components. It lets elements resize and reflow automatically based on their content, just like CSS Flexbox. Every component in your system should use Auto Layout.</p>
<p>Start with atomic components and build up to complex ones:</p>
<ul>
  <li><strong>Atoms:</strong> Buttons, inputs, badges, icons, and avatars.</li>
  <li><strong>Molecules:</strong> Form fields (label + input + helper text), search bars, card headers.</li>
  <li><strong>Organisms:</strong> Navigation bars, data tables, modal dialogs, and forms.</li>
</ul>

<h2>Component Variants and Properties</h2>
<p>Figma's component properties let you create flexible components that can be configured without detaching. Use variant properties for visual states and boolean properties for toggling elements.</p>
<p>For example, a button component might have these properties:</p>
<ul>
  <li><strong>Variant:</strong> Primary, Secondary, Outline, Ghost</li>
  <li><strong>Size:</strong> Small, Medium, Large</li>
  <li><strong>State:</strong> Default, Hover, Active, Disabled</li>
  <li><strong>Icon:</strong> Boolean toggle for leading/trailing icons</li>
</ul>

<h2>Documenting Your System</h2>
<p>A design system is only useful if people know how to use it. Create dedicated documentation pages within your Figma file that explain when and how to use each component. Include usage guidelines, do's and don'ts, and annotated examples. Pair the Figma system with a code component library to ensure design-to-development consistency.</p>`,
    status: 'published',
    tags: ['figma', 'design-systems', 'ui-design', 'auto-layout', 'components'],
  },
];
