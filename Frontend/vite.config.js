import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
   //   "/books": {
         // target: "https://bookstore-backend-fb6d.onrender.com/books",
     //     target:"http://localhost:3000",
       //   changeOrigin: true,
         // rewrite: (path) => path.replace(/^\/books/, "/books"), // Rewrite rule
        //}
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // Add .jsx here
  },
  plugins: [react()],
});
