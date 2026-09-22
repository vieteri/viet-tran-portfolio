import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  ExternalLink,
  Mail,
  Network,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: <Network className="w-6 h-6 text-blue-300" />,
    title: "Integrations & APIs",
    description: "Connect business-critical systems without creating another fragile point-to-point mess.",
    items: [
      "REST, SOAP and event-driven integrations",
      "API design and implementation",
      "Frends and enterprise integration patterns",
      "ERP, CRM, banking and third-party connectivity",
    ],
  },
  {
    icon: <Code2 className="w-6 h-6 text-cyan-300" />,
    title: "Web & Product Development",
    description: "From a focused business website to a production web application, with architecture and implementation handled together.",
    items: [
      "Next.js, React and TypeScript",
      "Business websites and customer-facing services",
      "Backend and database integration",
      "Performance, maintainability and deployment",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-300" />,
    title: "Mobile Applications",
    description: "Design and build mobile products that can move from prototype to an actual App Store release.",
    items: [
      "Flutter and cross-platform mobile development",
      "Authentication, subscriptions and cloud backends",
      "App Store delivery",
      "Analytics, monitoring and iteration",
    ],
  },
  {
    icon: <Braces className="w-6 h-6 text-emerald-300" />,
    title: "AI-enabled Software",
    description: "Add AI where it creates real product value rather than as a separate demo or chatbot bolted onto the side.",
    items: [
      "LLM and AI API integration",
      "RAG and domain-aware assistants",
      "Structured AI workflows",
      "Cost, reliability and production boundaries",
    ],
  },
];

const references = [
  {
    title: "TM Beauty",
    eyebrow: "Client website",
    description: "Live website for a Helsinki beauty business, built around services, pricing, local discovery and a clear path to booking.",
    href: "https://tmbeauty.fi/",
    linkLabel: "Visit tmbeauty.fi",
  },
  {
    title: "KovaFit",
    eyebrow: "App Store product",
    description: "AI-assisted fitness app for iPhone with workout tracking, routines, progress analytics and coaching features.",
    href: "https://apps.apple.com/app/id6758958067",
    linkLabel: "View on App Store",
  },
  {
    title: "DartScope",
    eyebrow: "App Store product",
    description: "Darts venue finder and score tracker for iPhone and iPad, combining maps, community venue data and match tracking.",
    href: "https://apps.apple.com/app/id6760133199",
    linkLabel: "View on App Store",
  },
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-purple-600/15" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-300 font-semibold mb-5">
              Software consulting · Helsinki / remote
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-7">
              I help companies turn difficult software problems into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> working products.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-10">
              My strongest areas are enterprise integrations, APIs and hands-on product development.
              I can join an existing engineering team or take ownership of a focused delivery from architecture to production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:it@viet.fi"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss a project
              </a>
              <a
                href="#references"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg border border-gray-600 hover:border-gray-400 bg-gray-900/50 transition-colors font-semibold text-gray-200"
              >
                See shipped work
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-blue-300 font-semibold mb-3">What I can help with</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Hands-on engineering, not just advice.</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I focus on areas where architecture and implementation need to stay close together.
              The goal is a maintainable solution that is actually deployed and used.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-gray-800 bg-gray-800/35 p-7 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="references" className="py-24 px-6 bg-gray-800/25 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-blue-300 font-semibold mb-3">Selected references</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Work you can open and use.</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I prefer concrete references over long capability lists. These are live examples of client delivery and products shipped to Apple&apos;s App Store.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {references.map((reference) => (
              <article key={reference.title} className="rounded-2xl border border-gray-700/70 bg-gray-900 p-7 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4">{reference.eyebrow}</p>
                <h3 className="text-2xl font-bold mb-3">{reference.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{reference.description}</p>
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold"
                >
                  {reference.linkLabel}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-blue-300 font-semibold mb-3">Good fit</p>
            <h2 className="text-4xl font-bold mb-6">When bringing me in makes sense</h2>
            <div className="space-y-5 text-lg text-gray-300">
              <p>You have systems that need to communicate reliably, but the integration landscape is becoming difficult to maintain.</p>
              <p>You need a senior hands-on developer who can reason about architecture and still implement the solution.</p>
              <p>You want to get a web or mobile product from idea to a production release without building a large team first.</p>
              <p>You are adding AI to an existing product and need practical engineering around data, APIs, reliability and cost.</p>
            </div>
          </div>

          <aside className="rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-600/15 to-cyan-600/5 p-8">
            <Cloud className="w-9 h-9 text-blue-300 mb-5" />
            <h3 className="text-2xl font-bold mb-4">Small enough to move quickly.</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I take selective engagements where I can work directly with the people who own the problem.
              That keeps communication short and makes it easier to deliver useful software instead of process overhead.
            </p>
            <a href="mailto:it@viet.fi" className="inline-flex items-center font-semibold text-blue-300 hover:text-blue-200">
              it@viet.fi
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </aside>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-800/25 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Have a project in mind?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Send me the problem, current stack and what you need to achieve. I&apos;ll tell you where I can add value.
          </p>
          <a
            href="mailto:it@viet.fi"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact me
          </a>
          <div className="mt-7">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
