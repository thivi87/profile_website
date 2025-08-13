import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/security-portfolio/" // ← CHANGE to your repo name
});
