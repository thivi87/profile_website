import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Search, AlertTriangle, Zap, FileCheck, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Expertise() {
  const [isBioOpen, setIsBioOpen] = useState(false);

  const bio = "Over a career spanning more than a decade, Shaun has progressed from front-line security operations to senior leadership roles managing global cyber and physical security programs. Beginning as a Flex Officer in 2010, he advanced through GSOC operations, site supervision, and account management before stepping into corporate security advisory roles. His path includes leadership in emergency management during California wildfires, global security systems management, and the convergence of cyber–physical risk programs. Today, as Vulnerability Detection Manager at Oportun, Shaun drives remediation, compliance, and innovation across infrastructure, applications, and vendor ecosystems—while fostering cross-functional collaboration with Legal, HR, Safety, and Facilities.";

  const bioTags = [
    'Strategic Planning & Execution', 'Process Improvement & Automation', 'Physical & Cyber–Security Management',
    'Risk Assessment & Mitigation', 'Project Management & Control', 'Vendor Management',
    'Team Leadership & Support', 'Staff Training & Development', 'Emergency Management'
  ];
  
  const expertiseAreas = [
    {
      icon: Search,
      title: 'Vulnerability Management',
      description: 'Comprehensive security assessments and vulnerability identification across enterprise environments.'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Assessment',
      description: 'Advanced threat modeling and risk analysis for complex organizational security landscapes.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Strategic implementation of security controls and risk reduction frameworks.'
    },
    {
      icon: Zap,
      title: 'Security Automation',
      description: 'Development and deployment of automated security processes and incident response systems.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Expert guidance on PCI DSS, SOX, and other critical regulatory compliance frameworks.'
    }
  ];

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
            Areas of Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security leadership across cyber and physical domains, 
            with proven expertise in enterprise-scale implementations.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 bg-slate-50 rounded-2xl shadow-xl border border-slate-200"
        >
            <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Career Summary</h3>
                <p className="text-slate-600 leading-relaxed">
                    A decade-plus progression from front-line operations to senior leadership, managing global cyber and physical security programs.
                </p>
                <AnimatePresence initial={false}>
                    {isBioOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4">
                                <p className="text-slate-700 leading-relaxed mb-6">{bio}</p>
                                <div className="flex flex-wrap gap-2">
                                    {bioTags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="border-t border-slate-200 px-8 py-4">
                 <Button variant="ghost" onClick={() => setIsBioOpen(!isBioOpen)} className="text-blue-600 hover:text-blue-700 font-semibold">
                    <span>{isBioOpen ? 'Show Less' : 'Read Full Bio'}</span>
                    <motion.div animate={{ rotate: isBioOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-2">
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </Button>
            </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}