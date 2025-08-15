import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/profile_website/", // <- EXACTLY your repo name with leading/trailing slashes
});
