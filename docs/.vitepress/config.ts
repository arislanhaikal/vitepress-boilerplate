import { defineConfig } from "vitepress";
import sidebarId from "./sidebar/id";
import sidebarEn from "./sidebar/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  titleTemplate: "Docs",
  description: "Markdown to Beautiful Docs in Minutes",
  lang: "id",
  rewrites: {
    "id/:rest*": ":rest*",
  },
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  themeConfig: {
    logo: {
      light: "/logo.svg",
      dark: "/logo-dark.svg",
    },
    outline: "deep",
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Documentation",
      copyright: "Copyright © 2024-present Docs",
    },
  },
  locales: {
    root: {
      label: "Indonesia",
      lang: "id",
      themeConfig: {
        sidebar: {
          "/": sidebarId,
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      themeConfig: {
        sidebar: {
          "/en/": sidebarEn,
        },
      },
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.svg" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
  ],
});
