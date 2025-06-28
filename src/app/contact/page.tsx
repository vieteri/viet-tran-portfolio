import React from "react";
import { ContactLinkProps } from "@/app/interfaces";
import { Mail, Linkedin, MessageCircle, MapPin, Clock } from 'lucide-react';

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

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I&apos;m always eager to connect with fellow developers, explore new technologies, 
              and discuss the latest in technology trends. Feel free to reach out for collaborations, 
              insightful discussions, or simply to connect.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-300 mb-4">Send me an email for business inquiries or collaborations</p>
              <ContactLink href="mailto:it@viet.fi">
                <span className="text-blue-400 hover:text-blue-300 transition-colors">
                  it@viet.fi
                </span>
              </ContactLink>
            </div>



            {/* LinkedIn Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
              </div>
              <p className="text-gray-300 mb-4">Connect with me professionally on LinkedIn</p>
              <ContactLink href="https://www.linkedin.com/in/viet-tran-a9a492a8/">
                <span className="text-purple-400 hover:text-purple-300 transition-colors">
                  Viet Tran
                </span>
              </ContactLink>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Helsinki, Finland</p>
                <p className="text-sm text-gray-400">Available for remote work worldwide</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-600/20 rounded-lg">
                <Clock className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
                <p className="text-gray-300">Monday - Friday, 9:00 - 17:00 (EET)</p>
                <p className="text-sm text-gray-400">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
            <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start a Conversation?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you have a project in mind, need consulting services, or just want to say hello, 
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:it@viet.fi" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a 
                href="/consulting" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
