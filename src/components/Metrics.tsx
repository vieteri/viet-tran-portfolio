'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code, Award, Users } from 'lucide-react';

interface MetricProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const MetricCard = ({ icon: Icon, value, suffix = '', label, delay = 0 }: MetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        setCount(Math.floor(progress * value));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animateCount);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-400" />
        </div>
        <div className="text-5xl font-bold text-white mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-400 font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

const Metrics = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impact & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            icon={Briefcase}
            value={5}
            suffix="+"
            label="Years Experience"
            delay={0}
          />
          <MetricCard
            icon={Code}
            value={20}
            suffix="+"
            label="Projects Delivered"
            delay={150}
          />
          <MetricCard
            icon={Award}
            value={15}
            suffix="+"
            label="Technologies"
            delay={300}
          />
          <MetricCard
            icon={Users}
            value={10}
            suffix="+"
            label="Client Integrations"
            delay={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
