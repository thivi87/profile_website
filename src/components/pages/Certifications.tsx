import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Award, CheckCircle, ExternalLink, GraduationCap } from "lucide-react";
import { Page, Section } from "@/components/Layout";
import { resume } from "@/resumeData";
import { Img } from "@/components/Img";
import { logosByOrg } from "@/resumeData";

export default function Certifications() {
  return (
    <Page>
      <Section icon={Award} title="Licenses & Certifications" subtitle="Click any badge to view the verified credential.">
        <TooltipProvider>
          <div className="grid md:grid-cols-2 gap-4">
            {resume.certifications.map((c, i) => {
              const hasVerify = !!c.url;
              return (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 min-w-0">
                        <Img src={c.logo} alt={`${c.issuer || c.name} logo`} className="h-10 w-10 rounded object-contain border" />
                        <div className="min-w-0">
                          <div className="text-lg font-medium flex items-center gap-2">
                            {c.name}
                            {hasVerify && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <CheckCircle className="h-4 w-4" aria-label="Verified link" />
                                </TooltipTrigger>
                                <TooltipContent><p>Opens verified credential</p></TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {(c.issuer || "").trim()}{c.since ? ` • ${c.since}` : ""}
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        {c.badge ? (
                          <a href={c.url || "#"} target="_blank" rel="noreferrer">
                            <Img src={c.badge} alt={`${c.name} badge`} className="h-12 w-auto object-contain hover:scale-105 transition" />
                          </a>
                        ) : hasVerify ? (
                          <Button asChild size="sm" variant="secondary" className="rounded-full">
                            <a href={c.url} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" /> Verify
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Tip: Place issuer logos in <code>/assets/logos/</code> and badges in <code>/assets/badges/</code>.</p>
        </TooltipProvider>
      </Section>

      <Section icon={GraduationCap} title="Education">
        <div className="grid md:grid-cols-3 gap-4">
          {resume.education.map((e, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Img src={logosByOrg[e.school]} alt={`${e.school} logo`} className="h-8 w-8 object-contain rounded" />
                  <div>
                    <div className="font-medium">{e.credential}</div>
                    <div className="text-sm text-muted-foreground">{e.school}{e.location ? ` • ${e.location}` : ""}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </Page>
  );
}

