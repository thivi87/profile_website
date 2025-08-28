import React from "react";

const withBase = (p?: string) => {
  if (!p) return undefined;
  if (/^https?:\/\//i.test(p)) return p;
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/+$/, "") + "/" + p.replace(/^\/+/, "");
};

export const Img = ({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) => {
  const resolved = withBase(src);
  return resolved
    ? <img src={resolved} alt={alt} className={className} loading="lazy" />
    : <div className={`bg-muted ${className}`} aria-label={alt} />;
};
