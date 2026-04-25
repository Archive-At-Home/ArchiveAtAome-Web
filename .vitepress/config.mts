import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Archive-At-Aome",
  description: "Archive At Aome's documentation site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/home' }
    ],

    sidebar: [
      {
        text: 'A@H',
        items: [
          { text: '快速开始',
            collapsed:false,
            items:[
              {text: '节点部署', link: 'docs/node'}
            ]
          },
          { text: 'API',
            items:[
              {text: 'Server-api',link: 'docs/server-api'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/ArchiveAtHome'},
      { icon: 'github', link: 'https://github.com/Archive-At-Home/ArchiveAtAome-Web' }
    ]
  }
})
