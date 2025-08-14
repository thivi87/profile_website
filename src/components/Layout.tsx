import React from "react";

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  <div className="container">{children}</div>;

export const Section: React.FC<{ title: string; children: React.ReactNode; subtitle?: string }> =
  ({ title, subtitle, children }) => (
    <section className="section">
      <div className="header"><h2>{title}</h2></div>
      {subtitle && <p className="small">{subtitle}</p>}
      {children}
    </section>
  );

export const DomainBadge = ({ d }: { d: string }) => <span className="badge">{d}</span>;
