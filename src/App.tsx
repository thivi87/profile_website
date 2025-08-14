
import React, { useMemo, useState } from "react";
import { Page, Section, DomainBadge } from "./components/Layout";
import { Button, Card, CardContent, Badge, Separator } from "./components/UI";
import { Accordion } from "./components/Accordion";
import { Img } from "./components/Img";
import { OrgPill } from "./components/OrgPill";
import { resume } from "./resumeData";

export default function App() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    experience: true, skills: true, certs: true, leadership: true, publications: true, contact: true
  });
  const toggle = (k: keyof typeof open) => setOpen(s => ({ ...s, [k]: !s[k] }));
  const expandAll = () => setOpen({ experience: true, skills: true, certs: true, leadership: true, publications: true, contact: true });
  const collapseAll = () => setOpen({ experience: false, skills: false, certs: false, leadership: false, publications: false, contact: false });

  const coreDomains = ["Cybersecurity","Physical Security","Risk Assessment","Emergency Management","Automation & SOAR","Vulnerability Management","Incident Response","Vendor/TPRM"];

  const allDomains = useMemo(
    () => Array.from(new Set(resume.roles.flatMap(r => r.domains))).sort(),
    []
  );

  return (
    <Page>
      <div className="grid app-main-grid">
        {/* Left rail: persistent photo, bio, highlights, contact */}
        <aside className="sticky">
          <Card>
            <CardContent>
              <div className="avatar-container">
                <Img src={resume.photo} alt={`${resume.name} profile photo`} className="avatar" />
              </div>
              <h1 className="h1">{resume.name}</h1>
              <p className="muted tagline">{resume.tagline}</p>

              <Separator />

              <p className="summary">{resume.summary}</p>

              <div className="row margin-top-12">
                {resume.expertise.map(e => <span key={e} className="badge">{e}</span>)}
              </div>

              <Separator />

              <div className="row small">
                <span>📍 {resume.location}</span>
                <a href={`mailto:${resume.email}`}>✉️ {resume.email}</a>
                <a href={`tel:${resume.phone}`}>📞 {resume.phone}</a>
                <a href={resume.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                <a href="/Shaun K. Thivierge Resume.pdf" download className="btn secondary">Download Résumé</a>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Right: sections */}
        <div className="grid">
          <div className="row justify-end">
            <Button className="secondary" onClick={expandAll}>Expand all</Button>
            <Button className="ghost" onClick={collapseAll}>Collapse all</Button>
          </div>

          {/* Experience */}
          <Card>
            <CardContent>
              <Section title="Experience">
                <div className="row small">
                  <span className="badge">Filter by domain:</span>
                  {allDomains.map((d) => <DomainBadge key={d} d={d} />)}
                </div>

                <div className="grid">
                  {resume.roles.map((r, i) => (
                    <Accordion key={i} title={`${r.title} • ${r.period}`}>
                      <div className="row small margin-bottom-8">
                        <OrgPill name={r.company} /> <span>• {r.location}</span>
                      </div>
                      <div className="row domain-row">
                        {r.domains.map(d => <DomainBadge key={d} d={d} />)}
                      </div>
                      <ul className="list">
                        {r.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                      </ul>
                    </Accordion>
                  ))}
                </div>

                {resume.additionalExperience?.length ? (
                  <>
                    <Separator />
                    <details className="accordion">
                      <summary>Additional Experience</summary>
                      <div>
                        <ul className="list">
                          {resume.additionalExperience.map((x: any, i: number) => (
                            <li key={i}><OrgPill name={x.company} /> — <span className="small">{x.title}</span></li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </>
                ) : null}
              </Section>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent>
              <Section title="Skills Matrix" subtitle="Click a chip to copy">
                <div className="grid skills-matrix-grid">
                  {[
                    { name: "Cybersecurity", items: ["Vulnerability Management","PCI DSS","SIEM","SOAR","SAST/DAST","Threat Feeds/IOC","Incident Response","Bug Bounty","Pen Testing mgmt","Security Convergence Strategy","Threat Assessment Methodologies","Identity & Credential Mgmt","Zero-Friction Access","Privacy-by-Design (PHI/PII)","Remote/Hybrid Risk Controls"] },
                    { name: "Physical Security", items: ["Access Control Federation","Global PSIM/GSOC","NERC-CIP Alignment","Lifecycle Mgmt","Investigations","Touchless/Low-Contact Access","Return-to-Work Facility Risk","IoT Surface Reduction"] },
                    { name: "Risk & EM", items: ["Risk Assessments","Policy/Standards","Emergency Basecamp Ops","Training & Exercises","Cross-Functional Risk Workshops","Converged Playbooks (Cyber+Physical)","Health-Data Governance"] },
                    { name: "Leadership & Ops", items: ["Vendor/TPRM","RFP/POC","Program Mgmt","Automation","Change Enablement","Cross-functional Collaboration","Executive Advisory Partnering","Education & Mentorship","Stakeholder Alignment (Legal/HR/BCP)"] }
                  ].map((cat, i) => (
                    <div key={i} className="card">
                      <div className="content">
                        <div className="title">{cat.name}</div>
                        <div className="row">
                          {cat.items.map(it => (
                            <span key={it} className="badge badge-clickable" onClick={() => navigator.clipboard.writeText(it)}>{it}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </CardContent>
          </Card>

          {/* Certifications & Education */}
          <Card>
            <CardContent>
              <Section title="Licenses & Certifications" subtitle="Click any badge to view the verified credential">
                <div className="grid grid-cols-auto-fit-320">
                  {resume.certifications.map((c, i) => (
                    <div key={i} className="card">
                      <div className="content cert-content-flex">
                        <div className="cert-flex-row">
                          {c.logo && <img src={c.logo} alt={`${c.issuer || c.name} logo`} className="cert-logo" />}
                          <div className="cert-min-width">
                            <div className="title cert-title">{c.name}</div>
                            <div className="small">{[c.issuer, c.since].filter(Boolean).join(" • ")}</div>
                          </div>
                        </div>
                        <div>
                          {c.badge ? (
                            <a href={c.url || "#"} target="_blank" rel="noreferrer" title="Verify credential">
                              <img src={c.badge} alt={`${c.name} badge`} className="cert-badge-img" />
                            </a>
                          ) : c.url ? (
                            <a className="btn secondary" href={c.url} target="_blank" rel="noreferrer">Verify</a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Education">
                <div className="grid education-grid">
                  {resume.education.map((e, i) => (
                    <div key={i} className="card">
                      <div className="content education-flex-row">
                        <img src={`/assets/logos/${e.school === "Arizona State University" ? "asu" : e.school === "UC Berkeley" ? "ucberkeley" : "uci"}.png`} alt={`${e.school} logo`} className="education-logo" />
                        <div>
                          <div className="title education-credential">{e.credential}</div>
                          <div className="small">{e.school}{e.location ? ` • ${e.location}` : ""}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card>
            <CardContent>
              <Section title="Leadership & Volunteer">
                <div className="grid grid-cols-auto-fit-320">
                  {[
                    { org: "ASIS International — Utah Chapter", role: "Chapter Chair", period: "2023 – 2024" },
                    { org: "UC Irvine Customer Experience Advisory Board", role: "Board Member", period: "2022 – 2023" },
                    { org: "ASIS — San Francisco Chapter", role: "VC; Mentorship; Certification Presenter (CPP/PSP); YP Chair", period: "2018 – 2021" }
                  ].map((v, i) => (
                    <div key={i} className="card">
                      <div className="content">
                        <div className="title org-title">{v.org}</div>
                        <div className="small">{v.role}</div>
                        <div className="small margin-top-6">{v.period}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="affiliations-container">
                  <p className="small">Professional Affiliations:</p>
                  <div className="row affiliations-row">
                    {resume.affiliations.map(a => <span key={a} className="badge">{a}</span>)}
                  </div>
                </div>
              </Section>
            </CardContent>
          </Card>

          {/* Publications */}
          <Card>
            <CardContent>
              <Section title="Publications & Media">
                <div className="grid publications-grid">
                  {resume.publications.map((p, i) => (
                    <div key={i} className="card">
                      <div className="content">
                        <div className="title publication-title">
                          <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                        </div>
                        <div className="small">{p.year}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="publications-extra">
                  <ul className="list small">
                    <li>Security convergence: uniting cyber and physical methodologies to improve threat modeling and response.</li>
                    <li>Trusted advisory mindset; education-first approach for stakeholders and end users.</li>
                    <li>Frictionless access & credential management to balance usability and risk.</li>
                    <li>Cross-functional leadership with Legal, HR, Safety, BCP, Facilities (return-to-work planning).</li>
                  </ul>
                </div>
              </Section>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent>
              <Section title="Contact">
                <div className="row">
                  <a className="btn" href={`mailto:${resume.email}`}>Email</a>
                  <a className="btn secondary" href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="btn ghost" href="/Shaun K. Thivierge Resume.pdf" download>Download Resume (PDF)</a>
                </div>
                <p className="small contact-location">Located in {resume.location}. Open to remote/hybrid leadership roles.</p>
              </Section>
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  );
}
