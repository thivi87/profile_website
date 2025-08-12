import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Link as LinkIcon, Download } from "lucide-react";
import { Page, Section } from "@/components/Layout";
import { resume } from "@/resumeData";

export default function Contact() {
  return (
    <Page>
      <Section icon={Mail} title="Get in Touch" subtitle="For consulting, leadership, or full-time roles in cyber, physical, or converged security.">
        <Card className="shadow-sm max-w-xl">
          <CardContent className="p-6">
            <div className="space-y-3">
              <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${resume.email}`}><Mail className="h-4 w-4" /> {resume.email}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${resume.phone}`}><Phone className="h-4 w-4" /> {resume.phone}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={resume.linkedin} target="_blank" rel="noreferrer"><LinkIcon className="h-4 w-4" /> LinkedIn Profile</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="/Shaun K. Thivierge Resume.pdf" download><Download className="h-4 w-4" /> Download Résumé (PDF)</a>
              <p className="text-sm text-muted-foreground">Located in {resume.location}. Open to remote/hybrid leadership opportunities.</p>
            </div>
          </CardContent>
        </Card>
      </Section>
    </Page>
  );
}

