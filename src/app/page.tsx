'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Metrics from "@/components/Metrics";
import { projects } from "@/data/projectsData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Viet <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Tran</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              Software Engineer specializing in <span className="text-primary-400 font-semibold">Enterprise Systems</span>, <span className="text-secondary-400 font-semibold">API Architecture</span>, and <span className="text-accent-400 font-semibold">AI Solutions</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <Link
                href="#projects"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-glow-blue flex items-center font-medium group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about/cv"
                className="px-8 py-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-primary-500/50 flex items-center font-medium"
              >
                Download CV
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex justify-center md:justify-start space-x-6 text-gray-400"
            >
              <a href="https://github.com/vieteri" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="GitHub Profile">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/viet-tran-a9a492a8/" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="LinkedIn Profile">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:it@viet.fi" className="hover:text-accent-400 transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="Email Contact">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/viet.png"
                alt="Viet Tran - Integration Developer"
                fill
                style={{ objectFit: 'cover' }}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                className="rounded-full border-4 border-gray-800/50 shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <Metrics />

      {/* About & Skills Section */}
      <section id="about" className="py-24 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50 shadow-xl">
              <div className="space-y-6 max-w-4xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Software Engineer with a <span className="text-primary-400 font-semibold">Master&apos;s degree in Electrical Engineering</span> from Aalto University,
                  focused on enterprise systems integration and API architecture. Expertise in bridging legacy systems with modern cloud infrastructure.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently part of the integration architecture team at <span className="text-primary-400 font-semibold">S-Pankki</span>, designing enterprise-level solutions
                  and managing the complete API development lifecycle. Architecting integration patterns for financial systems and leading projects from conception through testing to production deployment.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond traditional integration work, building <span className="text-secondary-400 font-semibold">AI-powered applications</span> leveraging
                  LLMs and RAG architectures. Also providing selective consulting services for integration and automation projects.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mr-4"></span>
              Technical Skills
            </h3>
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mr-4"></span>
                Project Management & Leadership
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1 text-xl">✓</span>
                  <span className="leading-relaxed">Event management for large-scale events (5000+ attendees)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1 text-xl">✓</span>
                  <span className="leading-relaxed">Volunteer workforce management and team leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1 text-xl">✓</span>
                  <span className="leading-relaxed">Academic course assistance and grading</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <span className="bg-blue-600/20 p-2 rounded-lg mr-3 text-blue-400">
                      <ArrowRight className="w-6 h-6" />
                    </span>
                    Experience
                  </h2>
                </div>
                <Experience />
              </div>

              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <span className="bg-purple-600/20 p-2 rounded-lg mr-3 text-purple-400">
                      <ArrowRight className="w-6 h-6" />
                    </span>
                    Education
                  </h2>
                </div>
                <Education />
              </div>
           </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work in web development, AI integration, and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt || project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-800">
                      <span className="text-gray-600">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-medium text-primary-400 hover:text-primary-300 flex items-center group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/vieteri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}