import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Versatiles",
  description:
    "VersaTiles is a free stack for generating and serving vector tiles.",
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: "/assets/logo_versatiles.svg",
    nav: [
      {
        text: "Guide",
        link: "/",
      },
      {
        text: "Reference",
        items: [
          {
            items: [
              { text: "⚙️ Generator", link: "/docs/generator" },
              { text: "🖥️ Server", link: "/docs/server" },
              { text: "🌐 Network", link: "/docs/network" },
              { text: "🖼️ Frontend", link: "/docs/frontend" },
            ],
          },
        ],
      },
      { text: "Examples", link: "/examples" },
      {
        text: "Resources",
        items: [
          {
            items: [
              { text: "Blog", link: "/blog" },
              { text: "Roadmap", link: "/roadmap" },
              { text: "Release Notes", link: "/releases" },
              { text: "Community", link: "/community" },
              { text: "Showcase", link: "/showcase" },
            ],
          },
          {
            text: "About Us",
            items: [
              { text: "Team", link: "/team" },
              { text: "Philosophy", link: "/philosophy" },
            ],
          },
          {
            text: "Related Projects",
            items: [
              { text: "Tilemaker", link: "https://tilemaker.org/" },
              { text: "Shortbread", link: "https://shortbread-tiles.org/" },
              { text: "MapLibre", link: "https://maplibre.org/" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/": {
        items: [
          {
            text: "Guide",
            collapsed: false,
            items: [
              { text: "Introduction", link: "/guide/introduction" },
              { text: "Getting Started", link: "/guide/" },
              { text: "Comparisons", link: "/guide/comparisons" },
              { text: "Philosophy", link: "/guide/philosophy" },
              { text: "FAQ", link: "/guide/faq" },
              { text: "Troubleshooting", link: "/guide/troubleshooting" },
            ],
          },
          {
            text: "Map Tiles",
            collapsed: false,
            items: [
              { text: "Generate your own Tiles", link: "/guide/tiles/generate-your-own-tiles" },
              { text: "Pre-made Tiles", link: "/guide/tiles/premade-tiles" },
              { text: "Versatiles Container", link: "/guide/tiles/versatiles-container" },
            ],
          },
          {
            text: "Design & Customization",
            collapsed: false,
            items: [
              { text: "Map Styles", link: "/guide/map-styles" },
              { text: "Customize your Maps", link: "/guide/customize-maps" },
              { text: "Pre-made Styles", link: "/guide/style-maps" },
            ],
          },
          {
            text: "Deployment",
            collapsed: false,
            items: [
              { text: "Overview", link: "/guide/deploy-maps" },
              { text: "Usage", link: "/guide/usage" },
              { text: "Configuration", link: "/guide/configuration" },
              { text: "Caching & Performance", link: "/guide/caching" }
            ],
          },
          {
            text: "Usage & Integrations",
            collapsed: false,
            items: [
              { text: "Web / JS", link: "/guide/web-js" },
              { text: "iOS / Android", link: "/guide/native" },
            ],
          },
          {
            text: "Advanced",
            collapsed: false,
            items: [
              { text: "QGIS", link: "/guide/qgis" },
            ],
          }
        ],
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
