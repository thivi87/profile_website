
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      name: 'Certified Protection Professional (CPP)',
      issuer: 'ASIS International',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/d63f71b44_cpp.png',
      link: 'https://www.credly.com/badges/d6e7e513-507e-4fb4-ac17-5960d8300980/linked_in_profile'
    },
    {
      name: 'Physical Security Professional (PSP)',
      issuer: 'ASIS International', 
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/ade4afc7d_psp.png',
      link: 'https://www.credly.com/badges/61e332cd-e32b-4147-a8c6-0027837245e1/linked_in'
    },
    {
      name: 'Professional Certified Investigator (PCI)',
      issuer: 'ASIS International',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/ed34c6465_pci.png',
      link: 'https://www.credly.com/badges/ed4b3029-cd9b-4328-80b1-66d7230dc69b/linked_in_profile'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/7c19526f6_securityplus.png',
      link: 'https://www.credly.com/badges/ba619732-33f8-45df-a0ed-84d5d3c04607/linked_in_profile'
    },
    {
      name: 'OSHA 30-Hour Construction',
      issuer: 'ClickSafety',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/f867f74f5_osha30.png',
      link: 'https://business.clicksafety.com/impe/ucp/certificate/certificate.asp?courseid=MOOD39&userid=sthivierge'
    },
    {
      name: 'FAA Part 107 Remote Pilot',
      issuer: 'Federal Aviation Administration',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/94ee40ea6_faa.png',
      link: 'https://amsrvs.registry.faa.gov/airmeninquiry/Main.aspx'
    },
    {
      name: 'Amateur Radio Operator (KG6TNB)',
      issuer: 'Federal Communications Commission',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/d2925db3a_fcc.png',
      link: 'https://wireless2.fcc.gov/UlsApp/UlsSearch/license.jsp?licKey=3207238'
    }
  ];

  const handleCertClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications demonstrating expertise across 
            cybersecurity, physical security, and specialized domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleCertClick(cert.link)}
            >
              <div className="relative bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100">
                {cert.link && (
                    <div className="absolute top-3 right-3 p-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        <ExternalLink className="w-4 h-4 text-slate-700" />
                    </div>
                )}
                <div className="h-24 w-full flex items-center justify-center mb-4">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.name} logo`} 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-md font-bold text-slate-900 leading-tight flex-grow">
                  {cert.name}
                </h3>
                
                <p className="text-blue-600 font-semibold text-sm mt-1">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
