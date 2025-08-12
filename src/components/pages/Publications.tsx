import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink, Shield } from "lucide-react";
import { Page, Section } from "@/components/Layout";
import { resume } from "@/resumeData";

export default function Publications() {
  return (
    <Page>
      <Section icon={FileText} title="Publications & Media">
        <div className="grid md:grid-cols-2 gap-4">
          {resume.publications.map((p, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <div className="font-medium flex items-center gap-2">
                  {p.title}
                  <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm hover:underline">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{p.year}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section icon={Shield} title="Key Themes from Sources" subtitle="Pulled from the ASIS profile and Swiftlane interview.">
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Security convergence: uniting cyber and physical methodologies to improve threat modeling and response.</li>
          <li>Shift from gatekeeping to trusted advisory: education-first approach for stakeholders and end users.</li>
          <li>Frictionless access & credential management to balance usability and risk reduction.</li>
          <li>Cross-functional leadership with Legal, HR, Safety, BCP, and Facilities—especially during return-to-work planning.</li>
        </ul>
      </Section>
    </Page>
  );
}

