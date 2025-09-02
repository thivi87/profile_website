import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const schoolLogos = {
  'Arizona State University': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/b49504865_asu.png',
  'University of California, Berkeley': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/986dbcd18_ucberkeley.png',
  'University of California, Irvine': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/27eca2483_uci.png'
};

const educationData = [
    {
        degree: 'Bachelor of Science, Political Science & Global Studies',
        school: 'Arizona State University',
        icon: GraduationCap,
    },
    {
        degree: 'Cybersecurity Bootcamp',
        school: 'University of California, Berkeley',
        icon: BookOpen,
    },
    {
        degree: 'Customer Experience Certificate',
        school: 'University of California, Irvine',
        icon: BookOpen,
    }
];

export default function Education() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Education & Development
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A foundation in global studies complemented by specialized training in cybersecurity and customer experience.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="h-20 w-full flex items-center justify-center mb-6">
                 <img src={schoolLogos[edu.school]} alt={`${edu.school} logo`} className="max-h-full max-w-full object-contain"/>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 flex-grow">
                {edu.degree}
              </h4>
              <p className="text-blue-600 font-medium mt-2">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}