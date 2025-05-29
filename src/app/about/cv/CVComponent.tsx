'use client';

import { Download } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const CVComponent = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);
    
    // Ensure all content is loaded and rendered
    setTimeout(() => {
      // Add print-specific class to body
      document.body.classList.add('printing');
      
      // Focus on the CV container to ensure it's rendered
      const cvContainer = document.querySelector('.cv-container');
      if (cvContainer) {
        cvContainer.scrollIntoView();
      }
      
      // Trigger print dialog
      window.print();
      
      // Clean up after print dialog closes
      setTimeout(() => {
        document.body.classList.remove('printing');
        setIsGeneratingPDF(false);
      }, 1000);
    }, 200);
  };

  
  return (
    <>
      {/* Enhanced Print Styles for PDF */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }
          
          /* Hide only the download buttons and header */
          .no-print {
            display: none !important;
          }
          
          /* Show the main CV container */
          .cv-container {
            display: grid !important;
            grid-template-columns: 300px 1fr !important;
            box-shadow: none !important;
            margin: 0 !important;
            max-width: none !important;
            width: 100% !important;
            min-height: 100vh !important;
            page-break-inside: avoid;
            background: white !important;
          }
          
          /* Ensure sidebar is visible and styled */
          .sidebar {
            display: block !important;
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%) !important;
            color: white !important;
            padding: 2rem !important;
          }
          
          .sidebar * {
            color: white !important;
          }
          
          /* Ensure main content is visible */
          .main-content {
            display: block !important;
            padding: 2.5rem !important;
          }
          
          .gradient-bg {
            background: linear-gradient(to right, #f9fafb, #f3f4f6) !important;
          }
          
          .blue-gradient {
            background: linear-gradient(to right, #2563eb, #60a5fa) !important;
          }
          
          .profile-image {
            border: 4px solid rgba(255, 255, 255, 0.2) !important;
          }
          
          /* Ensure all text is visible */
          h1, h2, h3, h4, h5, h6, p, span, div, li {
            color: inherit !important;
          }
          
          .text-gray-700 {
            color: #374151 !important;
          }
          
          .text-blue-800 {
            color: #1e40af !important;
          }
          
          .text-blue-700 {
            color: #1d4ed8 !important;
          }
          
          .text-gray-600 {
            color: #4b5563 !important;
          }
          
          /* Ensure all content is visible when printing */
          body.printing {
            visibility: hidden;
          }
          
          body.printing .cv-container {
            visibility: visible;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
          
          @page {
            size: A4;
            margin: 0.5in;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-8">
        {/* Heading and Download Buttons */}
        <div className="max-w-4xl mx-auto mb-6 px-4 no-print flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Viet Tran CV</h1>
          <div className="flex gap-4 justify-center w-full">
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg disabled:bg-blue-400"
            >
              <Download size={20} />
              {isGeneratingPDF ? 'Generating PDF...' : 'Download as PDF'}
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="cv-container max-w-[210mm] mx-auto bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-[300px_1fr] min-h-[297mm]">
          {/* Sidebar */}
          <div className="sidebar bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8">
            <div className="text-center mb-10">
              <Image
                src="/viet.png"
                alt="Viet Tran - Integration Developer"
                width={200}
                height={200}
                className="profile-image w-32 h-32 rounded-full border-4 border-white/20 mx-auto mb-4 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <h1 className="text-3xl font-light mb-2 tracking-wider">Viet Tran</h1>
              <p className="text-lg opacity-90 font-light">Integration Developer</p>
            </div>

            {/* Contact Info */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <span className="mr-4">📍</span>
                <span>Helsinki, Uusimaa 00260</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-4">📱</span>
                <span>0451339339</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-4">✉️</span>
                <span>viet_tran@windowslive.com</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide border-b-2 border-white/30 pb-2">
                Technical Skills
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  "Microsoft Dynamics 365 Integration",
                  "ERP Systems (SAP, IFS, Business Central)",
                  "API Development (REST, SOAP)",
                  "Database Administration (SQL Server, PostgreSQL)",
                  "Warehouse Management Systems (WMS)",
                  "SCADA & Industrial Automation",
                  "Data Integration & ETL Processes",
                  "Cloud Integration Solutions",
                  "React Native and Node.js",
                  "Docker Containerization",
                  "Version Control with Git",
                  "PowerShell Scripting",
                  "JSON/XML Processing"
                ].map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-300 mr-3">▸</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide border-b-2 border-white/30 pb-2">
                Languages
              </h3>
              <div className="space-y-2">
                <div>🇺🇸 English</div>
                <div>🇫🇮 Finnish</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide border-b-2 border-white/30 pb-2">
                Certifications
              </h3>
              <div className="space-y-2 text-sm">
                <div>L1 Frends Fundamentals</div>
                <div>L2 Integration Development</div>
                <div>API Development</div>
                <div>Operations</div>
                <div>Architecture</div>
                <div className="italic opacity-80 mt-3">All certifications from Frends</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content p-10">
            {/* Summary */}
            <div className="gradient-bg bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg mb-10 border-l-4 border-blue-600">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Integration Developer with extensive experience in enterprise system integration, 
                warehouse management systems, and industrial automation. Proven track record of 
                delivering complex ERP integrations, SCADA implementations, and data transformation 
                solutions across diverse industries including energy, logistics, and construction.
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-800 mb-8 relative">
                Work Experience
                <div className="blue-gradient absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              </h2>

              {/* Frends Oy */}
              <div className="mb-8 relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">Integration Developer</h3>
                    <p className="text-gray-600 font-medium">Frends Oy</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    April 2024 - Current
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Developed 20+ enterprise integrations for Microsoft Dynamics 365 Finance & Operations across finance, logistics, procurement, and reporting modules for major Finnish energy sector CRM project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Developed ERP integration to Microsoft Dynamics 365 Business Central for construction supply industry, ensuring automated data flows across hybrid cloud environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Implemented complex SAP integrations handling master data synchronization, transactional processes, and asynchronous communication patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Implemented scalable integration solutions using REST APIs, JSON, XML, SFTP, and XSLT transformations with focus on performance and reliability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Established API lifecycle management practices including documentation, versioning, monitoring, and governance using Frends platform</span>
                  </li>
                </ul>
              </div>

              {/* Softsys Oy */}
              <div className="mb-8 relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">Software Engineer</h3>
                    <p className="text-gray-600 font-medium">Softsys Oy</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    January 2021 - April 2024
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Architected and implemented comprehensive Warehouse Management System (WMS) for food-based logistics center, integrating database optimization with real-time inventory tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Developed industrial SCADA system for automated warehouse control, orchestrating cranes and conveyor systems based on barcode scanner inputs and relational database queries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Engineered automated material handling workflows integrating OPC DA protocols with cloud-based ERP systems for seamless data synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Optimized database performance through advanced T-SQL programming, PowerShell automation scripts, and scheduled maintenance services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Served as database administrator managing high-volume transactional systems with focus on reliability, performance tuning, and data integrity</span>
                  </li>
                </ul>
              </div>

              {/* Aalto University */}
              <div className="mb-8 relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">Course Assistant / Assistant Teacher</h3>
                    <p className="text-gray-600 font-medium">Aalto University</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    January 2016 - January 2019
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Provided technical guidance and mentoring for C-programming course students, facilitating problem-solving and debugging skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 font-bold">●</span>
                    <span>Instructed middle and high school students in Aalto Junior program covering Scratch programming, Robbo robotics, Arduino development, and Android app creation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-8 relative">
                Education
                <div className="blue-gradient absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              </h2>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">Master of Science | Industrial Automation</h3>
                    <p className="text-gray-600 font-medium">Aalto University, Helsinki</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    January 2024
                  </span>
                </div>
                <p className="text-gray-700">
                  Specialized in industrial automation systems, control engineering, and integration technologies. 
                  Academic focus on bridging software development with industrial control systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVComponent;