import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { Page, Section } from "@/components/Layout";

export default function Skills() {
  const categories = [
    { name: "Cybersecurity", items: ["Vulnerability Management","PCI DSS","SIEM","SOAR","SAST/DAST","Threat Feeds/IOC","Incident Response","Bug Bounty","Pen Testing mgmt","Security Convergence Strategy","Threat Assessment Methodologies","Identity & Credential Management","Zero-Friction Access Principles","Privacy-by-Design (PHI/PII)","Remote/Hybrid Risk Controls"] },
    { name: "Physical Security", items: ["Access Control Federation","Global PSIM/GSOC","NERC-CIP Alignment","Lifecycle Management","Investigations","Touchless/Low-Contact Access","Return-to-Work Facility Risk","IoT Surface Reduction"] },
    { name: "Risk & EM", items: ["Risk Assessments","Policy/Standards","Emergency Basecamp Ops","Training & Exercises","Cross-Functional Risk Workshops","Converged Playbooks (Cyber+Physical)","Health-Data Governance"] },
    { name: "Leadership & Ops", items: ["Vendor/TPRM","RFP/POC","Project/Program Mgmt","Automation","Change Enablement","Cross-functional Collaboration","Executive Advisory Partnering","Education & Mentorship","Stakeholder Alignment (Legal/HR/BCP)"] },
  ];

  return (
    <Page>
      <Section icon={Shield} title="Skills Matrix" subtitle="Hover to highlight. Click to copy as text for proposals or job submissions.">
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <div className="font-medium mb-3">{cat.name}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge key={item} onClick={() => navigator.clipboard.writeText(item)} className="cursor-pointer rounded-full" title="Click to copy">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </Page>
  );
}
