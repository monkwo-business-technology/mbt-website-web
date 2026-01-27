import React from 'react';
import { Link } from 'react-router-dom';
import {
  CodeIcon,
  AutomationIcon,
  ResearchIcon,
  DesignIcon,
  TrainingIcon,
  IoTIcon,
  ConsultingIcon,
  EcommerceIcon,
  LegacyIcon,
  ArrowRightIcon,
} from '../icons/ServiceIcons';

const services = [
  {
    icon: CodeIcon,
    title: 'Custom Software Development',
    slug: 'software-development',
    description: 'Web, mobile, and enterprise applications built with modern technologies and best practices.',
    features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions', 'Embedded Systems'],
  },
  {
    icon: AutomationIcon,
    title: 'Automation & Workflow Optimization',
    slug: 'automation-workflow',
    description: 'Streamline operations with intelligent automation and process optimization.',
    features: ['RPA Solutions', 'Process Reengineering', 'Scheduling Systems', 'Workflow Tools'],
  },
  {
    icon: ResearchIcon,
    title: 'Research & Innovation',
    slug: 'research-innovation',
    description: 'Pioneering new technologies through prototyping and academic collaboration.',
    features: ['Tech Prototyping', 'Blockchain Research', 'Industry Collaboration'],
  },
  {
    icon: DesignIcon,
    title: 'UX & Interface Design',
    slug: 'ux-design',
    description: 'Human-centered design that creates intuitive, accessible digital experiences.',
    features: ['User Research', 'UI/UX Design', 'Prototyping', 'Accessibility'],
  },
  {
    icon: TrainingIcon,
    title: 'Training & Capacity Building',
    slug: 'training-capacity-building',
    description: 'Empower your teams with comprehensive technology training programs.',
    features: ['Tech Onboarding', 'Team Training', 'Workshops', 'Ongoing Support'],
  },
  {
    icon: IoTIcon,
    title: 'IoT & Edge Computing',
    slug: 'iot-edge-computing',
    description: 'Connected device solutions for smart homes and industrial applications.',
    features: ['IoT Integration', 'Edge Solutions', 'Smart Systems'],
  },
  {
    icon: ConsultingIcon,
    title: 'Digital Transformation Consulting',
    slug: 'digital-transformation',
    description: 'Strategic guidance for adopting emerging technologies and modernizing processes.',
    features: ['Technology Strategy', 'Process Digitalization', 'Industry Solutions'],
  },
  {
    icon: EcommerceIcon,
    title: 'E-commerce & ERP Solutions',
    slug: 'ecommerce-erp',
    description: 'Custom platforms and integrated systems for seamless business operations.',
    features: ['E-commerce Platforms', 'ERP Integration', 'CRM Automation'],
  },
  {
    icon: LegacyIcon,
    title: 'Legacy System Modernization',
    slug: 'legacy-modernization',
    description: 'Migrate and enhance older systems for modern infrastructure compatibility.',
    features: ['System Migration', 'Code Updates', 'Performance Enhancement'],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent mb-4 block">Application Services</span>
          <h2 className="section-title mb-4">
            End-to-end technology solutions
          </h2>
          <p className="section-subtitle">
            From concept to deployment, we deliver comprehensive software solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/services/${service.slug}`}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="icon-container mb-5">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            View all services
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
