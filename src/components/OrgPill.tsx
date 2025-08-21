// src/components/OrgPill.tsx
import React from "react";
import { logosByOrg } from "../resumeData";

export const OrgPill = ({ name }: { name: string }) => (
  <span className="orgpill" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <img
      src={(import.meta.env.BASE_URL || "/") + (logosByOrg?.[name] || "")}
      alt={`${name} logo`}
      style={{
        height: 24, width: 24, objectFit: "contain",
        borderRadius: 6, background: "#0e1320", border: "1px solid var(--border)"
      }}
    />
    <span style={{ fontSize: 14, fontWeight: 600 }}>{name}</span>
  </span>
);
