import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Page, Section } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { resume } from "@/resumeData";

export default function Leadership() {
  const volunteer = [
    { org: "ASIS International — Utah Chapter", role: "Chapter Chair", period: "2023 – 2024" },
    { org: "UC Irvine Customer Experience Advisory Board", role: "Board Member", period: "2022 – 2023" },
    { org: "ASIS — San Francisco Chapter", role: "VC; Mentorship; Certification Presenter (CPP/PSP); YP Chair", period: "2018 – 2021" },
  ];

  return (
    <Page>
      <Section icon={Users} title="Leadership & Volunteer">
        <div className="grid md:grid-cols-2 gap-4">
          {volunteer.map((v, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <div className="font-medium">{v.org}</div>
                <div className="text-sm">{v.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{v.period}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted-foreground">Professional Affiliations:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {resume.affiliations.map((a) => <Badge key={a} variant="secondary" className="rounded-full">{a}</Badge>)}
          </div>
        </div>
      </Section>
    </Page>
  );
}

