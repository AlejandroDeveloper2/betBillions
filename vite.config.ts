import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "types", replacement: "/src/types" },
      { find: "@services", replacement: "/src/services" },
      { find: "@context", replacement: "/src/context" },
      { find: "@config", replacement: "/src/config" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@styles", replacement: "/src/styles" },
    ],
  },
});
