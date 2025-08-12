import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Search, Filter, Building2, ChevronDown } from "lucide-react";
import { Page, Section, DomainBadge } from "@/components/Layout";
import { resume } from "@/resumeData";
import { OrgPill } from "@/components/OrgPill";

export default function Experience() {
  const [q, setQ] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  const allDomains = useMemo(
    () => Array.from(new Set(resume.roles.flatMap(r => r.domains))).sort(),
    []
  );

  const filtered = useMemo(() => resume.roles.filter(r =>
    (filters.length === 0 || filters.every(f => r.domains.includes(f))) &&
    (q.trim() === "" || [r.company, r.title, ...r.highlights].join(" ").toLowerCase().includes(q.toLowerCase()))
  ), [q, filters]);

  return (
    <Page>
      <Section icon={Briefcase} title="Experience" subtitle="Search and filter by domain to explore cyber, physical, risk, and leadership work.">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="relative md:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search accomplishments, tools, PCI, SOAR, SIEM, etc." className="pl-9" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-full"><Filter className="h-3 w-3 mr-1" /> Domains</Badge>
              {allDomains.map(d => {
                const on = filters.includes(d);
                return (
                  <Button key={d} variant={on ? "default" : "secondary"} size="sm" className="rounded-full"
                    onClick={() => setFilters(prev => on ? prev.filter(x => x !== d) : [...prev, d])}>
                    {d}
                  </Button>
                );
              })}
              {filters.length > 0 && <Button variant="ghost" size="sm" onClick={() => setFilters([])}>Clear</Button>}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {filtered.map((r, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{r.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-1">
                      <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" /> <OrgPill name={r.company} /></span>
                      <span>{r.location}</span>
                      <span>• {r.period}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {r.domains.map(d => <DomainBadge key={d} d={d} />)}
                  </div>
                </div>

                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-base">Key achievements</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        {r.highlights.map((h, i) => <li key={i}>{h}</li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <details className="bg-muted/40 p-4 rounded-2xl">
            <summary className="font-medium cursor-pointer inline-flex items-center gap-2"><ChevronDown className="h-4 w-4" /> Additional Experience</summary>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3">
              {resume.additionalExperience.map((x, i) => (
                <li key={i} className="p-4 rounded-xl border bg-background">
                  <div className="font-medium"><OrgPill name={x.company} /></div>
                  <div className="text-sm text-muted-foreground">{x.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">{x.domains.map((d: string) => <DomainBadge key={d} d={d} />)}</div>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </Section>
    </Page>
  );
}
