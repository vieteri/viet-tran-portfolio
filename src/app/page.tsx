import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User, Briefcase, Mail, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/shrekfedora.jpg"
                alt="Viet Tran"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw" 
                priority={true} 
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              I&apos;m <span className="text-white font-semibold">Viet Tran</span>, an Integration Developer at Frends Enterprise iPaaS
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Specializing in AI integration, data engineering, and modern web development. 
              Explore my journey through technology and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                <User className="w-5 h-5 mr-2" />
                About Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200"
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-xl text-gray-300">Transforming businesses through technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Integration Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert in enterprise system integration, ERP solutions, and API development with Frends Enterprise iPaaS
              </p>
            </div>
            
            <div className="text-center bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Modern Web Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Building responsive web applications with React, Next.js, and cutting-edge technologies
              </p>
            </div>
            
            <div className="text-center bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI & Consulting</h3>
              <p className="text-gray-300 leading-relaxed">
                Implementing AI solutions, chatbots, and providing expert technology consulting services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need integration solutions, web development, or AI consulting, I&apos;m here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/consulting" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}