import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Lasting Legacy Docs",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  description: "Documentation for projects under Lasting Legacy, including Legacy4J and Re-Console",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: `Documentation`,
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mods', link: '/mods' },
      { text: 'Modpacks', link: '/modpacks' },
      { text: 'Data Packs', link: '/datapacks' },
      { text: 'Resource Packs', link: '/resource-packs' }
    ],

    sidebar: [
      {
        text: 'Mods',
        items: [
          {
            text: 'Legacy4J',
            items: [
              { text: 'Biome Overrides', link: '/mods/legacy4j/biome-overrides' },
              { text: 'Configuration', link: '/mods/legacy4j/configuration' },
              { text: 'Common Colors', link: '/mods/legacy4j/common-colors' },
              { text: 'Controls', link: '/mods/legacy4j/controls' },
              { text: 'Gameplay Features', link: '/mods/legacy4j/gameplay-features' },
              { text: 'Intro Sequence', link: '/mods/legacy4j/intro' },
              { text: 'Listing-Based Manager', link: '/mods/legacy4j/listing-based-manager' },
              { text: 'Predicate-Based Manager', link: '/mods/legacy4j/predicate-based-manager' },
              { text: 'Resource Pack Management', link: '/mods/legacy4j/resource-pack-management' },
              { text: 'World Templates', link: '/mods/legacy4j/world-templates' }
            ]
          },
          {
            text: 'Legacy Skins',
            items: [
              { text: 'Making a Skin Pack', link: '/mods/legacy-skins/making-a-skin-pack' }
            ]
          },
          {
            text: 'Minimega',
            items: [
              { text: 'Fistfight', link: '/mods/minimega/fistfight' },
              { text: 'Glide', link: '/mods/minimega/glide' },
              { text: 'Tumble', link: '/mods/minimega/tumble' },
              { text: 'Battle', link: '/mods/minimega/battle' },
              { text: 'Online Features', link: '/mods/minimega/online-features' }
            ]
          },
          {
            text: 'Legacy World Sizes',
            items: [
              { text: 'Syntax', link: '/mods/legacy-world-sizes/syntax' }
            ]
          },
          {
            text: 'GlobalAdvancements',
            items: [
              { text: 'Syntax', link: '/mods/globaladvancements/syntax' }
            ]
          }
        ]
      },
      {
        text: 'Modpacks',
        items: [
          {
            text: 'Installation',
            link: '/modpacks/installation'
          },
          {
            text: 'Our Flagships <br> (Re-Console+/Simply Legacy)',
            items: [
              { text: 'Overview', link: '/modpacks/flagships/overview' },
              { text: 'Resource Albums', link: '/modpacks/flagships/resource-albums' },
              { text: 'Re-Console LTS', link: '/modpacks/flagships/rc-long-term-support' }
            ]
          },
          {
            text: 'Rekindled Legacy',
            items: [
              { text: 'Overview', link: '/modpacks/rekindled-legacy/overview' }
            ]
          },
          {
            text: '2000s Edition',
            items: [
              { text: 'Overview', link: '/modpacks/2000s-edition/overview' }
            ]
          }
        ]
      },
      {
        text: `Data Packs`
      },
      {
        text: `Resource Packs`
      },
      {
        text: 'About Us',
        link: '/about'
      }
    ],

    socialLinks: [
      { icon: 'forgejo', link: 'https://git.nostalgica.net/Lasting-Legacy' }
    ]
  }
})
