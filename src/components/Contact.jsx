
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss security challenges, collaboration opportunities, 
            or potential career moves? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-colors duration-300 border border-slate-700">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Reach out directly for professional inquiries and opportunities.
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'mailto:sthivierge@gmail.com'}
                >
                  Send Email
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-colors duration-300 border border-slate-700">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">LinkedIn</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Connect with me on LinkedIn to stay updated on professional developments.
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/sthivierge', '_blank')}
                >
                  View Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Resume Download</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Download a comprehensive overview of my experience and qualifications.
              </p>
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8"
                onClick={() => window.open('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/cd0690c75_ShaunKThiviergeResume.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume (PDF)
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
