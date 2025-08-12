import React from "react";

export const Img = ({ src, alt, className }: { src?: string; alt: string; className?: string }) =>
  src ? <img src={src} alt={alt} className={className} loading="lazy" /> : (
    <div className={`bg-muted ${className}`} aria-label={alt} />
  );
