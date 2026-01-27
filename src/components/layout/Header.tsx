import React, { useState } from 'react';
import { MenuIcon, CloseIcon, CodeIcon, AutomationIcon, ConsultingIcon, DesignIcon, TrainingIcon, IoTIcon, EcommerceIcon, LegacyIcon, DataIcon, AIIcon, InfrastructureIcon, TalentIcon } from '../icons/ServiceIcons';
import { ChevronDown, BookOpen, GraduationCap, FileText, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const solutions = [
    { icon: DataIcon, title: 'Data & Analytics', description: 'Turn enterprise data into actionable intelligence', href: '/solutions/data-analytics' },
    { icon: AIIcon, title: 'Artificial Intelligence', description: 'Practical, responsible AI adoption', href: '/solutions/artificial-intelligence' },
    { icon: ConsultingIcon, title: 'Digital Transformation', description: 'Strategic technology adoption guidance', href: '/solutions/digital-transformation' },
    { icon: EcommerceIcon, title: 'E-commerce & ERP', description: 'Integrated business operations platforms', href: '/solutions/ecommerce-erp' },
  ];

  const serviceCategories = [
    {
      title: 'Application Services',
      icon: CodeIcon,
      href: '/services',
      items: [
        { title: 'Custom Software Development', description: 'Web, mobile & enterprise apps', href: '/services/software-development' },
        { title: 'Automation & Workflow', description: 'RPA and process optimization', href: '/services/automation-workflow' },
        { title: 'UX & Interface Design', description: 'Human-centered digital experiences', href: '/services/ux-design' },
      ],
    },
    {
      title: 'Data & Analytics Services',
      icon: DataIcon,
      href: '/data-services',
      items: [
        { title: 'Data Warehousing & Lakehouse', description: 'Enterprise analytics foundation', href: '/data-services/data-warehousing' },
        { title: 'Enterprise Analytics & BI', description: 'Actionable business intelligence', href: '/data-services/business-intelligence' },
        { title: 'Data Governance & Quality', description: 'Trust and compliance for data', href: '/data-services/data-governance' },
      ],
    },
    {
      title: 'Artificial Intelligence (AI)',
      icon: AIIcon,
      href: '/ai-services',
      items: [
        { title: 'Machine Learning Solutions', description: 'Predictive models & automation', href: '/ai-services/machine-learning' },
        { title: 'NLP & Computer Vision', description: 'Language and image processing', href: '/ai-services/nlp-computer-vision' },
        { title: 'AI Strategy & Consulting', description: 'Responsible AI adoption', href: '/ai-services/ai-strategy' },
      ],
    },
    {
      title: 'Infrastructure Services',
      icon: InfrastructureIcon,
      href: '/infrastructure-services',
      items: [
        { title: 'Cloud Architecture', description: 'Scalable cloud solutions', href: '/infrastructure-services/cloud-architecture' },
        { title: 'DevOps & CI/CD', description: 'Automation & deployment pipelines', href: '/infrastructure-services/devops-cicd' },
        { title: 'Cybersecurity', description: 'Security assessment & protection', href: '/infrastructure-services/cybersecurity' },
      ],
    },
    {
      title: 'Training & Capacity Development',
      icon: TrainingIcon,
      href: '/training-services',
      items: [
        { title: 'Technical Training Programs', description: 'Upskill your teams', href: '/training-services/technical-training' },
        { title: 'Workshops & Seminars', description: 'Emerging tech topics', href: '/training-services/workshops-seminars' },
        { title: 'Onboarding Programs', description: 'New technology adoption', href: '/training-services/onboarding-programs' },
      ],
    },
    {
      title: 'Talent Outsourcing',
      icon: TalentIcon,
      href: '/talent-services',
      items: [
        { title: 'Staff Augmentation', description: 'Scale your team on demand', href: '/talent-services/staff-augmentation' },
        { title: 'Dedicated Teams', description: 'Fully managed remote teams', href: '/talent-services/dedicated-teams' },
        { title: 'IT Recruitment', description: 'Find top tech talent', href: '/talent-services/recruitment-services' },
      ],
    },
  ];

  const products = [
    { title: 'CRIBRO', description: 'Data quality & master data management', slug: 'cribro' },
    { title: 'BLUECANARY', description: 'E-learning platform', slug: 'bluecanary' },
    { title: 'BLUEPRIME', description: 'Sales process optimization', slug: 'blueprime' },
    { title: 'CASH COMPLETE', description: 'Cash inventory management', slug: 'cash-complete' },
  ];

  const learn = [
    { icon: BookOpen, title: 'Documentation', description: 'Technical guides and API docs', href: '#' },
    { icon: GraduationCap, title: 'Tutorials', description: 'Step-by-step learning paths', href: '#' },
    { icon: FileText, title: 'Case Studies', description: 'Real-world success stories', href: '#about' },
    { icon: Video, title: 'Webinars', description: 'Live and recorded sessions', href: '#' },
    { icon: Users, title: 'Community', description: 'Connect with other users', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">Monkwo</span>
          </a>

          {/* Desktop Navigation with Mega Menus */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Solutions Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent hover:bg-secondary/50 data-[state=open]:bg-secondary/50">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 bg-card border border-border rounded-xl shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        {solutions.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            className="group flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link to="/solutions" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                          View all solutions →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent hover:bg-secondary/50 data-[state=open]:bg-secondary/50">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[820px] p-6 bg-card border border-border rounded-xl shadow-xl">
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
                                <category.icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">{category.title}</span>
                            </div>
                            <div className="space-y-1">
                              {category.items.map((item) => (
                                <Link
                                  key={item.title}
                                  to={item.href}
                                  className="block p-2 rounded-md hover:bg-secondary/50 transition-colors"
                                >
                                  <div className="text-sm text-foreground font-medium">{item.title}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </Link>
                              ))}
                            </div>
                            <Link
                              to={category.href}
                              className="inline-block mt-2 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                            >
                              ..view more
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Need custom solutions?</span>
                        <a href="#contact" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                          Contact Sales →
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Products Link */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent hover:bg-secondary/50 data-[state=open]:bg-secondary/50">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6 bg-card border border-border rounded-xl shadow-xl">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Proprietary Solutions</p>
                      <div className="space-y-2">
                        {products.map((product) => (
                          <Link
                            key={product.title}
                            to={`/products/${product.slug}`}
                            className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="font-medium text-foreground text-sm">{product.title}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{product.description}</div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link to="/products" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                          See all 10 products →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Learn Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent hover:bg-secondary/50 data-[state=open]:bg-secondary/50">
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[450px] p-6 bg-card border border-border rounded-xl shadow-xl">
                      <div className="space-y-1">
                        {learn.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Sales
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              <a href="#" className="py-3 px-2 text-foreground font-medium rounded-lg hover:bg-secondary/50" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              
              <details className="group">
                <summary className="py-3 px-2 text-muted-foreground font-medium rounded-lg hover:bg-secondary/50 cursor-pointer list-none flex items-center justify-between">
                  Solutions
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-2 space-y-1">
                  {solutions.map((item) => (
                    <Link key={item.title} to={item.href} className="block py-2 px-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>

              <details className="group">
                <summary className="py-3 px-2 text-muted-foreground font-medium rounded-lg hover:bg-secondary/50 cursor-pointer list-none flex items-center justify-between">
                  Services
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-2 space-y-3">
                  {serviceCategories.map((category) => (
                    <div key={category.title}>
                      <div className="text-xs font-semibold text-foreground uppercase tracking-wider px-2 mb-1">{category.title}</div>
                      {category.items.map((item) => (
                        <Link key={item.title} to={item.href} className="block py-1.5 px-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                      <Link to={category.href} className="block py-1 px-2 text-xs font-medium text-accent" onClick={() => setIsMenuOpen(false)}>
                        ..view more
                      </Link>
                    </div>
                  ))}
                </div>
              </details>

              <Link to="/products" className="py-3 px-2 text-muted-foreground font-medium rounded-lg hover:bg-secondary/50" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>

              <details className="group">
                <summary className="py-3 px-2 text-muted-foreground font-medium rounded-lg hover:bg-secondary/50 cursor-pointer list-none flex items-center justify-between">
                  Learn
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-2 space-y-1">
                  {learn.map((item) => (
                    <a key={item.title} href={item.href} className="block py-2 px-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </a>
                  ))}
                </div>
              </details>

              <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/login" className="py-2.5 px-4 text-center text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <a href="#contact" className="py-2.5 px-4 text-center text-sm font-medium bg-accent text-accent-foreground rounded-full hover:bg-accent/90" onClick={() => setIsMenuOpen(false)}>
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
