import React, { useMemo, useState } from "react";
import { Page, Section, DomainBadge } from "./components";
import { Button, Card, CardContent, Badge, Separator } from "./components";
import { Accordion } from "./components";
import { Img } from "./components";
import { OrgPill } from "./components";
import { resume } from "./resumeData";

export default function App() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    experience: true, skills: true, certs: true, leadership: true, publications: true, contact: true
  });
  const expandAll = () => setOpen({ experience: true, skills: true, certs: true, leadership: true, publications: true, contact: true });
  const collapseAll = () => setOpen({ experience: false, skills: false, certs: false, leadership: false, publications: false, contact: false });

  const allDomains = useMemo(
    () => Array.from(new Set(resume.roles.flatMap(r => r.domains))).sort(),
    []
  );

  return (
    <Page>
      <div className="grid" style={{ gridTemplateColumns: "minmax(260px, 1fr) 2fr" }}>
        {/* Left rail: persistent photo, bio, highlights, contact */}
        <aside className="sticky">
          <Card>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                <Img src={resume.photo} alt={`${resume.name} profile photo`} className="avatar" />
              </div>
              <h1 className="h1">{resume.name}</h1>
              <p className="muted" style={{ marginTop: 6 }}>{resume.tagline}</p>

              <Separator />

              <p className="summary">{resume.summary}</p>

              <div className="row" style={{ marginTop: 12 }}>
                {resume.expertise.map(e => <span key={e} className="badge">{e}</span>)}
              </div>

              <Separator />

              <div className="row small">
                <span>📍 {resume.location}</span>
                <a href={`mailto:${resume.email}`}>✉️ {resume.email}</a>
                <a href={resume.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                <a
                  href={(import.meta.env.BASE_URL || "/") + "Shaun K. Thivierge Resume.pdf"}
                  download
                  className="btn secondary"
                >
                  Download Résumé
                </a>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Right: sections */}
        <div className="grid">
          <div className="row" style={{ justifyContent: "flex-end" }}>
            <Button className="secondary" onClick={expandAll}>Expand all</Button>
            <Button className="ghost" onClick={collapseAll}>Collapse all</Button>
          </div>

          {/* ✅ SKILLS FIRST */}
          <Card>
            <CardContent>
              <Section title="Skills Matrix" subtitle="Click a chip to copy">
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
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
                            <span key={it} className="badge" onClick={() => navigator.clipboard.writeText(it)} style={{ cursor: "pointer" }}>{it}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </CardContent>
          </Card>

          {/* EXPERIENCE (after skills) */}
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
                      <div className="row small" style={{ marginBottom: 8 }}>
                        <OrgPill name={r.company} /> <span>• {r.location}</span>
                      </div>
                      <div className="row" style={{ gap: 8, marginBottom: 8 }}>
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

          {/* Licenses & Certifications — FULL WIDTH */}
          <Card>
            <CardContent>
              <Section title="Licenses & Certifications" subtitle="Click any badge to view the verified credential">
                <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
                  {resume.certifications.map((c, i) => (
                    <div key={i} className="card">
                      <div className="content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                        <div style={{ display: "flex", gap: 16, alignItems: "center", minWidth: 0 }}>
                          {c.logo && (
                            <Img
                              src={c.logo}
                              alt={`${c.issuer || c.name} logo`}
                              className=""
                            />
                          )}
                          <div style={{ minWidth: 0 }}>
                            <div className="title" style={{ fontSize: 18 }}>{c.name}</div>
                            <div className="small">{[c.issuer, c.since].filter(Boolean).join(" • ")}</div>
                          </div>
                        </div>
                        <div>
                          {c.badge ? (
                            <a href={c.url || "#"} target="_blank" rel="noreferrer" title="Verify credential">
                              <Img src={c.badge} alt={`${c.name} badge`} />
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
            </CardContent>
          </Card>

          {/* Education — FULL WIDTH */}
          <Card>
            <CardContent>
              <Section title="Education">
                <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
                  {resume.education.map((e, i) => (
                    <div key={i} className="card">
                      <div className="content" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <Img
                          src={
                            e.school === "Arizona State University" ? "assets/logos/asu.png"
                            : e.school === "UC Berkeley" ? "assets/logos/ucberkeley.png"
                            : "assets/logos/uci.png"
                          }
                          alt={`${e.school} logo`}
                        />
                        <div>
                          <div className="title" style={{ fontSize: 18 }}>{e.credential}</div>
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
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
                  {[
                    { org: "ASIS International — Utah Chapter", role: "Chapter Chair", period: "2023 – 2024" },
                    { org: "UC Irvine Customer Experience Advisory Board", role: "Board Member", period: "2022 – 2023" },
                    { org: "ASIS — San Francisco Chapter", role: "VC; Mentorship; Certification Presenter (CPP/PSP); YP Chair", period: "2018 – 2021" }
                  ].map((v, i) => (
                    <div key={i} className="card">
                      <div className="content">
                        <div className="title" style={{ fontSize: 16 }}>{v.org}</div>
                        <div className="small">{v.role}</div>
                        <div className="small" style={{ marginTop: 6 }}>{v.period}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
                  <p className="small">Professional Affiliations:</p>
                  <div className="row" style={{ marginTop: 8 }}>
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
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
                  {resume.publications.map((p, i) => (
                    <div key={i} className="card">
                      <div className="content">
                        <div className="title" style={{ fontSize: 16 }}>
                          <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                        </div>
                        <div className="small">{p.year}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
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
                  <a className="btn ghost" href={(import.meta.env.BASE_URL || "/") + "Shaun K. Thivierge Resume.pdf"} download>Download Résumé (PDF)</a>
                </div>
                <p className="small" style={{ marginTop: 8 }}>Located in {resume.location}. Open to remote/hybrid leadership roles.</p>
              </Section>
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  );
}
