// src/Analytics.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "./ga";

const GA_ID = import.meta.env.VITE_GA_ID as string;

export function Analytics() {
  const location = useLocation();

  // Initialize once
  useEffect(() => {
    initGA(GA_ID);
  }, []);

  // Track on every route change
  useEffect(() => {
    const path = location.pathname + location.search + location.hash;
    trackPageView(GA_ID, path);
  }, [location]);

  return null;
}
