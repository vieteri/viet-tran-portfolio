// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import { SectionProps, ListItemProps } from "@/app/interfaces";  // Import the interfaces

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
    <div className="text-gray-300">{children}</div>
  </div>
);

const ListItem: React.FC<ListItemProps> = ({ title, description }) => (
  <li className="mb-4">
    <h3 className="font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </li>
);

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <Image src="/viet.png" alt="Viet Tran" width={200} height={200} className="rounded-full mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2 text-white">Viet Tran</h1>
        <p className="text-xl text-gray-300">Software developer </p>
      </div>

      <Section title="About Me">
        <p className="mb-4">
          I am a passionate software developer with a Master’s degree in Electrical Engineering from Aalto University. 
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
            title="Master&apos;s degree in Automation and Electrical Engineering"
            description="Aalto University, School of Electrical Engineering. Major: Translational Engineering, Smart Buildings"
          />
          <ListItem 
            title="Bachelor&apos;s degree in Electrical Engineering"
            description="Aalto University, School of Electrical Engineering. Major: Automation, Minor: Computer Science"
          />
        </ul>
      </Section>

      <Section title="IT Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2 text-white">Integration Development</h3>
            <ul className="list-disc pl-5 text-gray-300">
              <li>ERP, CRM, WMS integration</li>
              <li>SAP integration</li>
              <li>SOAP and API development</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-white">Programming</h3>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Python (Proficient)</li>
              <li>SQL (Advanced)</li>
              <li>C#, TypeScript, JavaScript (Intermediate)</li>
              <li>C++ (Basic)</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-300">Additional skills: Database Management (MS SQL, MariaDB), Industrial-grade automation solutions, Project management, Bug fixing</p>
      </Section>

      <Section title="Project Management">
        <ul className="list-disc pl-5 text-gray-300">
          <li>Event management for large-scale events (5000+ attendees)</li>
          <li>Student association annual ball organization</li>
          <li>Volunteer workforce management</li>
          <li>Academic course assistance and grading</li>
        </ul>
      </Section>
    </div>
  );
}
