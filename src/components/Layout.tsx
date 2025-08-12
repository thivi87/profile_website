import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-6xl px-4 py-8">
    {children}
  </motion.div>
);

export const Section = ({ icon: Icon, title, subtitle, children }:{
  icon: React.ElementType; title: string; subtitle?: string; children: React.ReactNode;
}) => (
  <section className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="h-6 w-6" />
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-muted-foreground mb-4">{subtitle}</p>}
    <div>{children}</div>
  </section>
);

export const DomainBadge = ({ d }: { d: string }) => (
  <Badge variant="secondary" className="rounded-full">{d}</Badge>
);
