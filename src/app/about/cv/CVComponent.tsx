'use client';

import { Download, Mail, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { projects } from '@/data/projectsData';

const CVComponent = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      window.print();
      setIsGeneratingPDF(false);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: A4;
          }
          body {
            background: white;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .print-break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Controls */}
      <div className="max-w-4xl mx-auto mb-6 px-4 no-print flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Preview Mode</h1>
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Download size={18} />
          {isGeneratingPDF ? 'Preparing...' : 'Download PDF'}
        </button>
      </div>

      {/* A4 Page Container */}
      <div className="mx-auto bg-white shadow-xl print:shadow-none w-[210mm] min-h-[297mm] overflow-hidden flex flex-col print:w-full font-sans text-gray-800">

        {/* Header */}
        <header className="bg-slate-900 text-white p-8 pb-10 print:bg-slate-900 print:text-white">
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">Viet Tran</h1>
              <p className="text-xl text-blue-200 font-light tracking-wide mb-6">Integration Developer & Software Engineer</p>

              <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-slate-300">
                <a href="mailto:it@viet.fi" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-blue-400" /> it@viet.fi
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-blue-400" /> Helsinki, Finland
                </div>
                <a href="https://linkedin.com/in/viet-tran-a9a492a8" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin size={14} className="text-blue-400" /> linkedin.com/in/viet-tran
                </a>
                <a href="https://github.com/vieteri" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Github size={14} className="text-blue-400" /> github.com/vieteri
                </a>
              </div>
            </div>

            <div className="relative w-32 h-32 flex-shrink-0 border-4 border-white/10 rounded-full overflow-hidden">
              <Image
                src="/viet-2026.png"
                alt="Viet Tran"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </header>

        {/* content */}
        <div className="flex flex-1">
          {/* Left Column (Skills, Ed) */}
          <aside className="w-[30%] bg-slate-50 p-6 border-r border-slate-100 print:bg-slate-50 print:border-slate-200">
            {/* Skills */}
            <section className="mb-8 print-break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Core Skills</h3>
              <div className="space-y-4">
                {skillsData.filter(cat => ['Integration', 'Backend & Languages', 'Database'].includes(cat.title)).map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-xs font-semibold text-blue-700 mb-1.5">{cat.title}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.slice(0, 6).map(skill => (
                        <span key={skill} className="text-[10px] px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8 print-break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Education</h3>
              <div className="space-y-4">
                {educationData.map((edu, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold text-slate-800">{edu.degree}</h4>
                    <p className="text-xs text-blue-700 font-medium">{edu.school}</p>
                    <p className="text-xs text-slate-500 mb-1">{edu.year}</p>
                    <p className="text-xs text-slate-600 leading-snug">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8 print-break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Languages</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li className="flex justify-between"><span>English</span> <span className="text-slate-500">Professional</span></li>
                <li className="flex justify-between"><span>Finnish</span> <span className="text-slate-500">Native</span></li>
              </ul>
            </section>
          </aside>

          {/* Right Column (Exp, Projects) */}
          <main className="flex-1 p-8">
            <section className="mb-8 print-break-inside-avoid">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Professional Summary</h2>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                Integration Developer with extensive experience in enterprise system integration,
                warehouse management systems, and industrial automation. Proven track record of
                delivering complex ERP integrations, SCADA implementations, and data transformation
                solutions across diverse industries including energy, logistics, and construction.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-5">Work Experience</h3>
              <div className="space-y-6">
                {experienceData.map((exp, i) => (
                  <div key={i} className="print-break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-bold text-slate-800">{exp.title}</h4>
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-700 mb-2">{exp.company}</div>
                    <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-outside ml-4">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="pl-1 leading-relaxed">{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-5">Selected Projects</h3>
              <div className="grid grid-cols-2 gap-4">
                {projects.slice(0, 4).map((proj, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-800 mb-1 truncate">{proj.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CVComponent;