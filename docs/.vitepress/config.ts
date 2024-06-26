import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  titleTemplate: "Docs",
  description: "Markdown to Beautiful Docs in Minutes",
  lang: "id",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    outline: "deep",
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Pendahuluan",
        collapsed: false,
        items: [
          { text: "Pendahuluan 1", link: "/introduction/index1" },
          { text: "Pendahuluan 2", link: "/introduction/index2" },
        ],
      },
      {
        text: "Dashboard",
        collapsed: false,
        items: [
          { text: "Dashboard 1", link: "/dashboard/index1" },
          { text: "Dashboard 2", link: "/dashboard/index2" },
        ],
      },
    ],

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
    },
    en: {
      label: "English",
      lang: "en",
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.svg" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
  ],
});
