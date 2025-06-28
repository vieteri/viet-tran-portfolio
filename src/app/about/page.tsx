'use client';

import Image from "next/image";
import Link from "next/link";

import { SectionProps, ListItemProps, ContactLinkProps } from "@/app/interfaces";
import { FileText } from 'lucide-react';
import Head from 'next/head';

const Section = ({ title, children }: SectionProps) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-white mb-6 relative">
      {title}
      <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-400 mt-2"></div>
    </h2>
    <div className="text-gray-300 bg-gray-800/30 rounded-xl p-8 border border-gray-700">{children}</div>
  </div>
);

const ListItem = ({ title, description }: ListItemProps) => (
  <li className="mb-4">
    <h3 className="font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </li>
);

const ContactLink: React.FC<ContactLinkProps> = ({ href, text, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    {children || text}
  </a>
);

export default function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto p-6">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Viet Tran",
            "jobTitle": "Integration Developer",
            "email": "it@viet.fi",

            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Helsinki",
              "addressCountry": "FI"
            },
            "url": "https://viettran.dev",
            "knowsAbout": [
              "API Management",
              "ERP Integration",
              "D365 Integrations",
              "SQL",
              "SAP",
              "Python",
              "TypeScript",
              "JavaScript",
              "C#",
              "C++"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Frends Oy",
              "startDate": "2024-01"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Aalto University",
              "areaServed": "Helsinki"
            }
          }) }}
        />
      </Head>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/viet.png"
                alt="Viet Tran"
                width={200}
                height={200}
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6">Integration Developer & Software Engineer</p>
            <Link
              href="/about/cv"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Professional CV
            </Link>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

      <Section title="Professional Background">
        <p className="mb-4">
          I am a passionate software developer with a Master&apos;s degree in Electrical Engineering from Aalto University. 
          My expertise lies in solving complex integration challenges, with a particular focus on API management and enterprise systems.
        </p>
        <p className="mb-4">
          I believe that happiness and positivity are contagious, and I strive to bring that energy to both my work environment 
          and my interactions with colleagues and clients. I enjoy working in collaborative environments where I can contribute my 
          skills while learning from others.
        </p>
        <p className="mb-4">
          Recently, I&apos;ve been expanding my knowledge in concept development and service design, combining technical expertise 
          with user-centered design approaches to create innovative solutions. This allows me to bridge the gap between technology and 
          human needs.
        </p>
      </Section>


      <Section title="Work History">
        <ul className="list-none">
          <ListItem 
            title="Integration Developer @ Frends Enterprise iPaaS (2024-present)"
            description="API management, ERP integration, D365 integrations, SQL, SAP, Working in multiorganizational projects"
          />
          <ListItem 
            title="Software Engineer @ Softsys Oy (2021-2024)"
            description="Developing WMSs for food-based and industrial warehouses, Database administration and bash/powershell scripting"
          />
          <ListItem 
            title="Aalto Junior Teaching Assistant @ Aalto University (2018-2019)"
            description="Teaching programming and embedded systems to students from primary to high school level"
          />
          <ListItem 
            title="Course Assistant @ Aalto University (2016-2017)"
            description="Assisting and grading for C-programming course"
          />
        </ul>
      </Section>

      <Section title="Education">
        <ul className="list-none">
          <ListItem 
            title="Master's degree in Automation and Electrical Engineering"
            description="Aalto University, School of Electrical Engineering. Major: Translational Engineering, Smart Buildings"
          />
          <ListItem 
            title="Bachelor's degree in Electrical Engineering"
            description="Aalto University, School of Electrical Engineering. Major: Automation, Minor: Computer Science"
          />
        </ul>
      </Section>

      <Section title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-blue-400 text-lg">Integration Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">▸</span>
                ERP, CRM, WMS integration
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">▸</span>
                SAP integration
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">▸</span>
                SOAP and API development
              </li>
            </ul>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-green-400 text-lg">Programming</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">▸</span>
                Python (Proficient)
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">▸</span>
                SQL (Advanced)
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">▸</span>
                C#, TypeScript, JavaScript
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">▸</span>
                C++ (Basic)
              </li>
            </ul>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-purple-400 text-lg">AI/ML & Modern Web</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-3">▸</span>
                Gemini AI API Integration
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-3">▸</span>
                RAG Implementation
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-3">▸</span>
                Next.js & React Development
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-3">▸</span>
                Web Speech API
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-gray-600">
          <p className="text-gray-300">
            <strong className="text-white">Additional expertise:</strong> Database Management (MS SQL, MariaDB), Industrial-grade automation solutions, Project management, Bug fixing
          </p>
        </div>
      </Section>

      <Section title="Personal Projects">
        <ListItem 
          title="Telegram Gemini 2.5 Flash Chatbot"
          description="Powerful Telegram chatbot powered by Google's Gemini 2.5 Flash with real-time internet search capabilities. Features automatic search detection, conversation memory, HTML formatting, and serverless webhook architecture. Built with Node.js and deployed on Vercel."
        />
        <ListItem 
          title="AI Fitness Coach Application (fit.viet.fi)"
          description="AI-powered fitness coaching web application with voice interaction capabilities. Built with Next.js 15, Gemini 2.0 Flash API, RAG implementation, and TTS functionality. Deployed on Vercel with Supabase integration."
        />
      </Section>

      <Section title="Project Management">
        <ul className="list-disc pl-5 text-gray-300">
          <li>Event management for large-scale events (5000+ attendees)</li>
          <li>Student association annual ball organization</li>
          <li>Volunteer workforce management</li>
          <li>Academic course assistance and grading</li>
        </ul>
      </Section>

      <Section title="Contact Me">
        <p className="mb-4">
        I&apos;m always eager to connect with fellow developers, explore new technologies, 
        and discuss the latest in technology trends. Feel free to reach out for collaborations, 
        insightful discussions, or simply to connect. You can find me on the following platforms:
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {" "}
            <ContactLink href="https://www.linkedin.com/in/viet-tran-a9a492a8/">
              Viet Tran
            </ContactLink>
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
            {" "}
            <ContactLink href="mailto:it@viet.fi">
              it@viet.fi
            </ContactLink>
          </li>
        </ul>
      </Section>
        </div>
      </section>
      </div>
    </div>
  );
}