import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Download, MapPin, Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Certifications from "@/pages/Certifications";
import Leadership from "@/pages/Leadership";
import Publications from "@/pages/Publications";
import Contact from "@/pages/Contact";
import { resume } from "@/resumeData";

const Nav = () => {
  const nav = [
    { to: "/", label: "Overview" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/certifications", label: "Certs & Education" },
    { to: "/leadership", label: "Leadership" },
    { to: "/publications", label: "Publications" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="text-lg font-semibold">ST</div>
        <nav className="flex-1 flex flex-wrap gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm hover:bg-muted transition ${isActive ? "bg-primary text-primary-foreground" : "text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href="/Shaun K. Thivierge Resume.pdf" download>
            <Download className="h-4 w-4 mr-2" /> Résumé
          </a>
        </Button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="border-t mt-12">
    <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center gap-2 justify-between">
      <div>© {new Date().getFullYear()} {resume.name}</div>
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {resume.location}</span>
        <a className="inline-flex items-center gap-1 hover:underline" href={resume.linkedin} target="_blank" rel="noreferrer"><LinkIcon className="h-4 w-4" /> LinkedIn</a>
        <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${resume.email}`}><Mail className="h-4 w-4" /> Email</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
