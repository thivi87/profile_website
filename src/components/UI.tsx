import React from "react";

export const Button = ({ children, className = "", ...p }: React.HTMLAttributes<HTMLButtonElement>) =>
  <button className={`btn ${className}`} {...(p as any)}>{children}</button>;

export const Card: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = "", children }) =>
  <div className={`card ${className}`}>{children}</div>;

export const CardContent: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = "", children }) =>
  <div className={`content ${className}`}>{children}</div>;

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) =>
  <span className={`badge ${className}`}>{children}</span>;

export const Separator = () => <div className="sep" />;
