// src/ga.ts
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function initGA(id: string) {
  if (!id) return;
  if (window.gtag) return; // already initialized

  // Load the GA4 script
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  // Bootstrap gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments as unknown as any); };
  window.gtag("js", new Date());
  window.gtag("config", id, {
    anonymize_ip: true
  });
}

export function trackPageView(id: string, path: string) {
  if (!id || !window.gtag) return;
  window.gtag("config", id, {
    page_path: path
  });
}
