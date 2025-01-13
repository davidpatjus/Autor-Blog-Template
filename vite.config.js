import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        blogs: "./blogs.html",
        contact: "./contact.html",
        about: "./about.html",
        postdetail: "./post-detail.html",
      },
    },
  },
});
