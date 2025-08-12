import React from "react";
import { Img } from "./Img";
import { logosByOrg } from "@/resumeData";

export const OrgPill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2">
    <Img src={logosByOrg?.[name]} alt={`${name} logo`} className="h-5 w-5 rounded-sm object-contain" />
    <span className="text-sm font-medium">{name}</span>
  </span>
);
