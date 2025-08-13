import React from "react";
import { logosByOrg } from "../resumeData";

export const OrgPill = ({ name }: { name: string }) => (
  <span className="orgpill">
    <img src={logosByOrg?.[name]} alt={`${name} logo`} />
    <span>{name}</span>
  </span>
);
