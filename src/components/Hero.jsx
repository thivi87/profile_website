import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const certifications = ['CPP', 'PSP', 'PCI', 'CompTIA Security+', 'FAA Part 107'];
  const profileImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/4a22a0f08_profile.jpg';

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-700/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center lg:text-left"
          >
            {/* Professional badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm">Security Professional</span>
            </motion.div>

            {/* Name and title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Shaun K. Thivierge
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-slate-300 mb-8 leading-relaxed"
            >
              Cyber & Physical Security Leader
            </motion.h2>

            {/* Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start"
            >
              {certifications.map((cert) => (
                <Badge 
                  key={cert}
                  variant="outline" 
                  className="px-4 py-2 bg-slate-800/50 border-slate-600 text-slate-200 text-sm font-medium hover:bg-slate-700/50 transition-colors"
                >
                  <Award className="w-3 h-3 mr-2 text-amber-400" />
                  {cert}
                </Badge>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg font-medium"
                onClick={() => window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/cd0690c75_ShaunKThiviergeResume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"></div>
                <img 
                    src={profileImageUrl} 
                    alt="Shaun Thivierge Headshot"
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-700"
                />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}