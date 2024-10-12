import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center p-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to Viet Tran&apos;s Portfolio</h1>
        
        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
          <Image 
            src="/shrekfedora.jpg" 
            alt="Viet Tran" 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          I&apos;m an Integration Developer at Frends Enterprise iPaaS with a background in Software Engineering. 
          This website showcases my skills, projects, and professional experience.
        </p>
      </div>
    </main>
  );
}