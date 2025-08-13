import React, { PropsWithChildren } from "react";

export const Accordion: React.FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <details className="accordion" open>
    <summary>{title}</summary>
    <div>{children}</div>
  </details>
);
