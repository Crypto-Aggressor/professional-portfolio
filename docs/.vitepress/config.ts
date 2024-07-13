import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Amine El Qazoui's Portfolio",
  description: "Professional portfolio and CV of Amine El Qazoui",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CV', link: '/curriculum-vitae' },
    ],
    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Curriculum Vitae', link: '/curriculum-vitae' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amine-el-qazoui-43450926' },
      { icon: 'github', link: 'https://github.com/Crypto-Aggressor' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
})