'use client';

import { Download, FileText } from 'lucide-react';
import Script from 'next/script';
import Link from 'next/link';

export default function CVComponent() {
  const handleDownloadPDF = () => {
    window.print();
  };

  const handleDownloadCSV = () => {
    const csvData = [
      ['Name', 'Viet Tran'],
      ['Job Title', 'Integration Developer'],
      ['Email', 'viettran@outlook.com'],
      ['Phone', '+358 50 384 3333'],
      ['Location', 'Helsinki, Finland'],
      ['Website', 'https://viettran.dev'],
      ['Skills', 'API Management, ERP Integration, D365 Integrations, SQL, SAP, Python, TypeScript, JavaScript, C#, C++'],
      ['Current Employer', 'Frends Oy'],
      ['Education', 'Aalto University']
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'viet_tran_cv.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Viet Tran",
    "jobTitle": "Integration Developer",
    "email": "viettran@outlook.com",
    "telephone": "+358 50 384 3333",
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
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .cv-container, .cv-container * {
            visibility: visible;
          }
          .cv-container {
            position: absolute;
            left: 0;
            top: 0;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col items-center gap-6 mb-8 no-print">
          <h1 className="text-3xl font-bold text-white">Viet Tran CV</h1>
          <Link 
            href="/about"
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            ← Back to About
          </Link>
          <div className="flex gap-4 justify-center w-full">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button
              onClick={handleDownloadCSV}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download CSV
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 