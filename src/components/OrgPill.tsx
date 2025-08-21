import React from "react";
import { logosByOrg } from "../resumeData";
import "./OrgPill.css";

export const OrgPill = ({ name }: { name: string }) => (
  <span>
    <img
      src={(import.meta.env.BASE_URL || "/") + (logosByOrg?.[name] || "")}
      alt={`${name} logo`}
      className="orgpill-img"
    />
    <span className="orgpill-name">{name}</span>
    <span className="orgpill-name-bold">{name}</span>
  </span>
);
