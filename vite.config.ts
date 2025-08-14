import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // MUST match your repo name for GitHub Pages
  base: "/profile_website/",
});
