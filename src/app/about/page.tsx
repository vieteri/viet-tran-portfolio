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
        <Image
          src="/viet.png"
          alt="Viet Tran"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-white">Viet Tran</h1>
        <p className="text-xl text-gray-300 text-center">Software developer</p> {/* Ensure text is centered */}
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

      {/* Other sections here */}
    </div>
  );
}
