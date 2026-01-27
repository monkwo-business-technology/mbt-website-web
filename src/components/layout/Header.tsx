import React, { useState } from 'react';
import { MenuIcon, CloseIcon, CodeIcon, AutomationIcon, ConsultingIcon, DesignIcon, TrainingIcon, IoTIcon, EcommerceIcon, LegacyIcon, DataIcon, AIIcon } from '../icons/ServiceIcons';
import { ChevronDown, BookOpen, GraduationCap, FileText, Video, Users } from 'lucide-react';
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
    { icon: DataIcon, title: 'Data & Analytics', description: 'Turn enterprise data into actionable intelligence', href: '#data' },
    { icon: AIIcon, title: 'Artificial Intelligence', description: 'Practical, responsible AI adoption', href: '#data' },
    { icon: ConsultingIcon, title: 'Digital Transformation', description: 'Strategic technology adoption guidance', href: '#services' },
    { icon: EcommerceIcon, title: 'E-commerce & ERP', description: 'Integrated business operations platforms', href: '#services' },
  ];

  const services = [
    { icon: CodeIcon, title: 'Custom Software Development', description: 'Web, mobile & enterprise apps', href: '#services' },
    { icon: AutomationIcon, title: 'Automation & Workflow', description: 'RPA and process optimization', href: '#services' },
    { icon: DesignIcon, title: 'UX & Interface Design', description: 'Human-centered digital experiences', href: '#services' },
    { icon: IoTIcon, title: 'IoT & Edge Computing', description: 'Connected device solutions', href: '#services' },
    { icon: LegacyIcon, title: 'Legacy Modernization', description: 'System migration & updates', href: '#services' },
    { icon: TrainingIcon, title: 'Training & Capacity Building', description: 'Technology training programs', href: '#services' },
  ];

  const products = [
    { title: 'CRIBRO', description: 'Data quality & master data management' },
    { title: 'BLUECANARY', description: 'E-learning platform' },
    { title: 'BLUEPRIME', description: 'Sales process optimization' },
    { title: 'CASH COMPLETE', description: 'Cash inventory management' },
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
                          <a
                            key={item.title}
                            href={item.href}
                            className="group flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <a href="#products" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                          View all products →
                        </a>
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
                    <div className="w-[700px] p-6 bg-card border border-border rounded-xl shadow-xl">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
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
                          <a
                            key={product.title}
                            href="#products"
                            className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="font-medium text-foreground text-sm">{product.title}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{product.description}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <a href="#products" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                          See all 10 products →
                        </a>
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
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </a>
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
                    <a key={item.title} href={item.href} className="block py-2 px-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </a>
                  ))}
                </div>
              </details>

              <details className="group">
                <summary className="py-3 px-2 text-muted-foreground font-medium rounded-lg hover:bg-secondary/50 cursor-pointer list-none flex items-center justify-between">
                  Services
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-2 space-y-1">
                  {services.map((item) => (
                    <a key={item.title} href={item.href} className="block py-2 px-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </a>
                  ))}
                </div>
              </details>

              <a href="#products" className="py-3 px-2 text-muted-foreground font-medium rounded-lg hover:bg-secondary/50" onClick={() => setIsMenuOpen(false)}>
                Products
              </a>

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
                <a href="#" className="py-2.5 px-4 text-center text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border">
                  Login
                </a>
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
