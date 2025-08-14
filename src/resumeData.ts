export type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  domains: string[];
  highlights: string[];
};

export type Certification = {
  name: string;
  since?: string;
  issuer?: string;
  url?: string;
  logo?: string;
  badge?: string;
};

export const resume = {
  photo: "assets/profile.jpg", // place in public/assets/profile.jpg
  name: "Shaun K. Thivierge, CPP, PSP, PCI",
  tagline: "Security Leader • Cyber & Physical Risk • Emergency Management",
  location: "Salt Lake City, UT",
  email: "sthivierge@gmail.com",
  // phone removed from UI
  phone: "+1 (626) 665-6459",
  linkedin: "https://www.linkedin.com/in/sthivierge/",
  summary:
    "Over a career spanning more than a decade, Shaun has progressed from front-line security operations to senior leadership roles managing global cyber and physical security programs. Beginning as a Flex Officer in 2010, he advanced through GSOC operations, site supervision, and account management before stepping into corporate security advisory roles. His path includes leadership in emergency management during California wildfires, global security systems management, and the convergence of cyber–physical risk programs. Today, as Vulnerability Detection Manager at Oportun, Shaun drives remediation, compliance, and innovation across infrastructure, applications, and vendor ecosystems—while fostering cross-functional collaboration with Legal, HR, Safety, and Facilities.",
  expertise: [
    "Strategic Planning & Execution",
    "Process Improvement & Automation",
    "Physical & Cyber–Security Management",
    "Risk Assessment & Mitigation",
    "Project Management & Control",
    "Vendor Management",
    "Team Leadership & Support",
    "Staff Training & Development",
    "Emergency Management"
  ],
  publications: [
    {
      title: "Security Management Magazine — Certification Profile",
      url: "https://www.asisonline.org/security-management-magazine/articles/2022/05/certification-profile-shaun-thivierge-cpp-pci-psp/",
      year: 2022
    },
    {
      title: "Swiftlane — Convergence of Physical and Digital Security (Interview)",
      url: "https://www.swiftlane.com/blog/convergence-of-physical-and-digital-security-interview-with-shaun-thivierge/",
      year: 2020
    }
  ],
  affiliations: [
    "ASIS International (Member)",
    "InfraGard (Member)",
    "UC Irvine Customer Experience Advisory Board (Past Member)",
    "ASIS Utah Chapter (Past Chair)",
    "ASIS San Francisco Chapter (Past VC & YP Chair)"
  ],
  education: [
    { school: "Arizona State University", credential: "B.S., Political Science & Global Studies", location: "Tempe, AZ" },
    { school: "UC Berkeley", credential: "Cybersecurity Bootcamp", location: "Berkeley, CA" },
    { school: "UC Irvine", credential: "Customer Experience Certificate", location: "Irvine, CA" }
  ],
  certifications: [
    { name: "ASIS Certified Protection Professional (CPP)", issuer: "ASIS International", since: "Nov 2018 – Present", url: "https://www.credly.com/badges/d6e7e513-507e-4fb4-ac17-5960d8300980/linked_in_profile", logo: "assets/logos/asis.png", badge: "assets/badges/cpp.png" },
    { name: "ASIS Physical Security Professional (PSP)", issuer: "ASIS International", since: "Mar 2017 – Present", url: "https://www.credly.com/badges/61e332cd-e32b-4147-a8c6-0027837245e1/linked_in", logo: "assets/logos/asis.png", badge: "assets/badges/psp.png" },
    { name: "ASIS Professional Certified Investigator (PCI)", issuer: "ASIS International", since: "Dec 2021 – Present", url: "https://www.credly.com/badges/ed4b3029-cd9b-4328-80b1-66d7230dc69b/linked_in_profile", logo: "assets/logos/asis.png", badge: "assets/badges/pci.png" },
    { name: "CompTIA Security+ (CE)", issuer: "CompTIA", since: "Nov 2022 – Present", url: "https://www.credly.com/badges/ba619732-33f8-45df-a0ed-84d5d3c04607/linked_in_profile", logo: "assets/logos/comptia.png", badge: "assets/badges/securityplus.png" },
    { name: "OSHA 30-Hour Construction", issuer: "ClickSafety", since: "Mar 2019 – Present", url: "https://business.clicksafety.com/impe/ucp/certificate/certificate.asp?courseid=MOOD39&userid=sthivierge", logo: "assets/logos/clicksafety.png", badge: "assets/badges/osha30.png" },
    { name: "FAA Part 107 Remote Pilot", issuer: "FAA", since: "Dec 2020 – Present", logo: "assets/logos/faa.png" },
    { name: "FCC Amateur Radio Technician (KG6TNB)", issuer: "FCC", since: "Nov 2013 – Present", logo: "assets/logos/fcc.png" }
  ] as Certification[],
  roles: [
    {
      company: "Oportun",
      location: "Salt Lake City, UT (Remote)",
      title: "Vulnerability Detection Manager | Cyber Security Manager",
      period: "Dec 2023 – Present",
      domains: ["Cybersecurity", "Leadership", "Risk"],
      highlights: [
        "Led remediation to ~2,000 findings in Q1; achieved PCI DSS 3.2.1 Level 1 audit compliance for 2023.",
        "Drove completion of requirements to date for PCI DSS 4.0.",
        "Maintained 104%+ remediation rates QoQ across infrastructure and code vulnerabilities in FY24.",
        "Revised six policies/standards/procedures to restructure the Vulnerability Management program; trained remediation owners.",
        "Managed SAST, DAST, bug bounty, penetration testing, code and infrastructure scanning platforms and vendors."
      ]
    },
    {
      company: "Oportun",
      location: "Salt Lake City, UT (Remote)",
      title: "Sr. Cyber Security Engineer | Security Services Reliability Engineer",
      period: "Aug 2022 – Dec 2023",
      domains: ["Cybersecurity", "Automation", "Leadership"],
      highlights: [
        "Built RFP/POC process aligned to legal and TPRM; evaluated 12 vendors and onboarded 3.",
        "Integrated 14 IOC/threat feeds for automated triage and CSOC response.",
        "Onboarded cloud SIEM for CSOC incident response.",
        "Deployed SOAR with 25+ integrations, 6 runbooks, automated ticketing, and O365/Slack productivity gains.",
        "Built converged monitoring patterns (cyber + physical signals) to inform incident response."
      ]
    },
    {
      company: "Oportun",
      location: "Salt Lake City, UT (Remote)",
      title: "Global Security Systems Manager | Security Technology Manager",
      period: "Apr 2019 – Aug 2022",
      domains: ["Physical Security", "Cybersecurity", "Risk", "Leadership"],
      highlights: [
        "Owned maintenance for 350+ global locations; incident response roadmaps for cyber intelligence maturation.",
        "Implemented SIEM for logging/monitoring and compliance; launched phishing program/metrics.",
        "Federated access control across 10 locations (~3K employees); established physical security baselines/lifecycle.",
        "Co-led return-to-work planning with Legal, HR, Safety, BCP, Facilities; balanced privacy and resilience."
      ]
    },
    {
      company: "Pacific Gas & Electric Company (PG&E)",
      location: "San Francisco, CA",
      title: "Senior Physical Security Specialist",
      period: "Oct 2017 – Mar 2019",
      domains: ["Physical Security", "Emergency Management", "Risk", "Leadership"],
      highlights: [
        "Coordinated risk assessments and pen tests to NERC-CIP standards; enforced vendor compliance.",
        "Administered emergency basecamp operations during 2017 & 2018 wildfires.",
        "Managed onboarding/training for 670+ officers; vendor contracts across 8 sites (~3.1K hours/week)."
      ]
    }
  ] as Role[],
  additionalExperience: [
    {
      company: "Bank of the West",
      title: "Assistant Vice President, Physical Security Advisor",
      domains: ["Physical Security", "Risk", "Leadership"],
    },
    {
      company: "AlliedBarton Security Services (now Allied Universal)",
      title: "Account Manager; Security/Safety Site Supervisor; GSOC Operator; Flex Officer",
      domains: ["Physical Security", "Operations", "Leadership"],
    }
  ]
};

export const logosByOrg: Record<string, string> = {
  "Oportun": "assets/logos/oportun.png",
  "Pacific Gas & Electric Company (PG&E)": "assets/logos/pge.png",
  "Bank of the West": "assets/logos/bankofthewest.png",
  "AlliedBarton Security Services (now Allied Universal)": "assets/logos/allieduniversal.png",
  "Arizona State University": "assets/logos/asu.png",
  "UC Berkeley": "assets/logos/ucberkeley.png",
  "UC Irvine": "assets/logos/uci.png"
};
