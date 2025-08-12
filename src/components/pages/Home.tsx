import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Link as LinkIcon, Download, Shield, Star } from "lucide-react";
import { Page, Section } from "@/components/Layout";
import { resume } from "@/resumeData";

export default function Home() {
  return (
    <Page>
      <div className="grid md:grid-cols-[1.2fr_.8fr] gap-6 items-start">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{resume.name}</h1>
                <p className="mt-1 text-lg text-muted-foreground">{resume.tagline}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {resume.location}</span>
                  <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${resume.email}`}><Mail className="h-4 w-4" /> {resume.email}</a>
                  <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${resume.phone}`}><Phone className="h-4 w-4" /> {resume.phone}</a>
                  <a className="inline-flex items-center gap-1 hover:underline" href={resume.linkedin} target="_blank" rel="noreferrer"><LinkIcon className="h-4 w-4" /> LinkedIn</a>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button asChild>
                  <a href="/Shaun K. Thivierge Resume.pdf" download><Download className="h-4 w-4 mr-2" /> Download Résumé</a>
                </Button>
                <p className="text-xs text-muted-foreground">PDF includes full details & dates</p>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-base leading-relaxed">{resume.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {resume.expertise.map((e) => (
                <Badge key={e} className="rounded-full px-3 py-1" variant="outline">{e}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <Section icon={Shield} title="Core Domains">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {["Cybersecurity","Physical Security","Risk Assessment","Emergency Management","Automation & SOAR","Vulnerability Management","Incident Response","Vendor/TPRM"].map(d => (
                  <div key={d} className="flex items-center gap-2"><Star className="h-4 w-4" /> {d}</div>
                ))}
              </div>
            </Section>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
}
