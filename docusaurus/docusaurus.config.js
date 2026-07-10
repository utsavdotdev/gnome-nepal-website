// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GNOME Nepal",
  tagline: "Foster open-source community in Nepal",
  favicon: "img/favicon.svg",
  url: "https://nepal.gnome.org",
  baseUrl: "/docs/",
  organizationName: "GNOME Nepal",
  projectName: "GNOME Nepal website",
  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "ignore",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "GNOME Nepal Docs",
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/GNOME-Nepal/website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "GNOME Nepal Logo",
          src: "img/logo.png",
          href: "https://nepal.gnome.org",
        },
        links: [
          {
            title: "GNOME Nepal",
            items: [
              {
                label: "Home",
                href: "https://nepal.gnome.org/#home",
              },
              {
                label: "About Us",
                to: "/docs/",
              },
              {
                label: "FAQ",
                href: "https://nepal.gnome.org/#faq",
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Projects",
                to: "/docs/",
              },
              {
                label: "Blog",
                to: "/docs/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/tpsVFJN8WC",
              },
              {
                label: "Linkedin",
                href: "https://np.linkedin.com/company/gnomenepal",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/gnomenepal/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contributing Guideline",
                href: "https://github.com/GNOME-Nepal/website/blob/main/CONTRIBUTING.md",
              },
              {
                label: "Code of Conduct",
                href: "https://github.com/GNOME-Nepal/website/blob/main/CODE_OF_CONDUCT.md",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GNOME Nepal, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
