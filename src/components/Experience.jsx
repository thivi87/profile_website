
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, Award, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const companyLogos = {
  Oportun: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/5524926f0_oportun.png',
  'Pacific Gas & Electric': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/769ef3c6b_pge.png',
  'Bank of the West': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/361edb26e_bankofthewest.png',
  'Allied Universal': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/8438be7ce_allieduniversal.png'
};

const experiences = [
    {
      company: 'Oportun',
      title: 'Vulnerability Detection Manager | Cyber Security Manager',
      period: 'Dec 2023 - Present',
      achievements: [
        'Led team to remediate ~2k findings for PCI DSS 3.2.1 Level 1 audit compliance.',
        'Maintained 104%+ remediation rates across infrastructure and code vulnerabilities.',
        'Restructured the Vulnerability Management program by revising 6 policies and procedures.',
        'Managed SAST, DAST, BugBounty, and other scanning platforms and vendor relationships.'
      ],
      tech: ['PCI DSS', 'Vulnerability Management', 'SAST/DAST', 'Policy Development']
    },
    {
      company: 'Oportun',
      title: 'Sr. Cyber Security Engineer | Security Services Reliability Engineer',
      period: 'Aug 2022 - Dec 2023',
      achievements: [
        'Developed department-wide RFP and POC process for vendor evaluation.',
        'Built integrations for 14 IoC and threat feeds for automated vulnerability triage.',
        'Managed onboarding of cloud SIEM platform for CSOC incident response.',
        'Managed deployment of SOAR, including 25+ integrations and 6 runbook developments.'
      ],
      tech: ['SOAR', 'SIEM', 'Threat Intelligence', 'Vendor Onboarding']
    },
    {
      company: 'Oportun',
      title: 'Global Security Systems Manager | Security Technology Manager',
      period: 'Apr 2019 - Aug 2022',
      achievements: [
        'Oversaw system maintenance for 350+ locations internationally.',
        'Conducted cyber security tool stack assessments to analyze remediation capacity.',
        'Supervised global access control federation integration for 10 locations and 3k employees.'
      ],
      tech: ['Global Security', 'System Maintenance', 'Access Control', 'Incident Response']
    },
    {
      company: 'Pacific Gas & Electric',
      title: 'Senior Physical Security Specialist',
      period: 'Oct 2017 - Mar 2019',
      achievements: [
        'Enforced vendor compliance to PG&E safety standards and enhanced operational effectiveness.',
        'Maintained NERC-CIP adherence via risk assessments and penetration testing.',
        'Directly administered PG&E emergency basecamp operations in 2017 and 2018 wildfires.',
        'Initiated onboarding and training program for 670+ contracted security officers.'
      ],
      tech: ['NERC-CIP', 'Vendor Compliance', 'Emergency Operations', 'Physical Security']
    },
    {
      company: 'Bank of the West',
      title: 'Assistant Vice President, Physical Security Advisor',
      period: 'Previous Experience',
      achievements: [
        'Advised on physical security protocols and risk mitigation for financial assets.',
        'Contributed to the development of corporate security policies and procedures.'
      ],
      tech: ['Financial Security', 'Risk Advisory', 'Policy']
    },
    {
      company: 'Allied Universal',
      title: 'Account Manager, Supervisor & Operator',
      period: 'Previous Experience',
      achievements: [
        'Progressed through multiple roles including Flex Officer and GSOC Operator.',
        'Managed security services for key client accounts.'
      ],
      tech: ['Client Management', 'GSOC Operations', 'Site Supervision']
    }
  ];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0); // Open the first item by default

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
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A proven track record of security leadership across diverse industries, 
            from financial services to critical infrastructure.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex-1 mb-4 sm:mb-0">
                      <div className="flex items-center gap-4 mb-3">
                        <motion.div
                          animate={{ 
                            scale: isOpen ? 0.7 : 1,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="flex-shrink-0"
                        >
                          <img 
                            src={companyLogos[exp.company]} 
                            alt={`${exp.company} logo`} 
                            className={`object-contain transition-all duration-300 ${
                              isOpen ? 'h-10' : 'h-14'
                            }`}
                          />
                        </motion.div>
                        <motion.span 
                          animate={{ 
                            fontSize: isOpen ? '1.125rem' : '1.25rem',
                          }}
                          transition={{ duration: 0.3 }}
                          className="font-bold text-slate-800"
                        >
                          {exp.company}
                        </motion.span>
                      </div>
                      <motion.h3 
                        animate={{ 
                          fontSize: isOpen ? '1.25rem' : '1.5rem',
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-bold text-slate-900 mb-2"
                      >
                        {exp.title}
                      </motion.h3>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <AnimatePresence>
                        {!isOpen && (
                          <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="hidden sm:flex flex-wrap gap-2 justify-end max-w-xs"
                          >
                            {exp.tech.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                                {tech}
                              </Badge>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                      >
                        <ChevronDown className="w-5 h-5 text-slate-600" />
                      </motion.div>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-200">
                        <div className="space-y-3 my-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div 
                              key={achIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <Award className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                              <p className="text-slate-700 leading-relaxed">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex flex-wrap gap-2 mt-4"
                        >
                          {exp.tech.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                            >
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
