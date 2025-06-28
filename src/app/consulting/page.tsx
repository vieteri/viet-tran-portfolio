import React from "react";
import { 
  Brain, 
  Database, 
  Globe, 
  Code, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Mail,

  MessageCircle
} from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, features }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-gray-400">
          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
        {number}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default function Consulting() {
  const services: ServiceProps[] = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "AI Consulting",
      description: "Leverage cutting-edge AI technologies to transform your business processes and decision-making.",
      features: [
        "AI strategy development and implementation",
        "Gemini AI API integration and optimization",
        "RAG (Retrieval-Augmented Generation) systems",
        "Chatbot and conversational AI solutions",
        "Machine learning model deployment",
        "AI-powered automation workflows"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to unlock the full potential of your data.",
      features: [
        "Data pipeline design and implementation",
        "ETL/ELT process optimization",
        "Real-time data streaming solutions",
        "Data warehouse architecture",
        "Cloud data platform migration",
        "Data quality and governance frameworks"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Database Consulting",
      description: "Optimize your database performance and design scalable data storage solutions.",
      features: [
        "Database performance tuning and optimization",
        "SQL query optimization and indexing",
        "Database migration and modernization",
        "Multi-database integration strategies",
        "Backup and disaster recovery planning",
        "Database security and compliance"
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: "Data Integration",
      description: "Seamlessly connect disparate systems and create unified data ecosystems.",
      features: [
        "API design and development",
        "SOAP and REST service integration",
        "Enterprise application integration",
        "Third-party system connectivity",
        "Data synchronization solutions",
        "Integration testing and monitoring"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Frends Integration",
      description: "Expert implementation and optimization of Frends Enterprise iPaaS solutions.",
      features: [
        "Frends platform implementation and setup",
        "Custom process development",
        "ERP and CRM system integrations",
        "SAP integration solutions",
        "Workflow automation and optimization",
        "Frends platform training and support"
      ]
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "React Web Development",
      description: "Create modern, responsive web applications using React and cutting-edge technologies.",
      features: [
        "React and Next.js application development",
        "TypeScript implementation",
        "Responsive UI/UX design",
        "State management solutions",
        "API integration and optimization",
        "Performance optimization and SEO"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Analysis",
      description: "We start by understanding your business needs, current systems, and goals to create a tailored solution strategy."
    },
    {
      title: "Strategy & Planning",
      description: "Develop a comprehensive roadmap with clear milestones, timelines, and success metrics for your project."
    },
    {
      title: "Implementation",
      description: "Execute the solution with agile methodologies, ensuring continuous communication and quality delivery."
    },
    {
      title: "Testing & Optimization",
      description: "Thoroughly test all components and optimize performance to ensure reliability and efficiency."
    },
    {
      title: "Support & Maintenance",
      description: "Provide ongoing support, monitoring, and maintenance to ensure long-term success of your solution."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consulting</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge technology solutions. From AI integration to data engineering, 
              I help organizations leverage modern technologies to achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200"
              >
                Get In Touch
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology consulting services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Process</h2>
            <p className="text-xl text-gray-300">
              A proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index} 
                number={index + 1} 
                title={step.title} 
                description={step.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Me</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Experience</h3>
              <p className="text-gray-300">
                Years of experience in enterprise integrations, AI implementation, and modern web development
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                Stay ahead with the latest AI technologies, modern frameworks, and industry best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Results-Driven</h3>
              <p className="text-gray-300">
                Focus on delivering measurable results that drive business value and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how I can help transform your business with technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:it@viet.fi" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>

          </div>
          
          <div className="mt-8 p-6 bg-gray-700/30 rounded-lg border border-gray-600">
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Email:</strong> it@viet.fi
            </p>

          </div>
        </div>
      </section>
    </div>
  );
} 