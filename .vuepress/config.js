
import { defineUserConfig } from 'vuepress'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { defaultTheme } from '@vuepress/theme-default'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Tripper Docs',
  description: 'Take Photo Think Seriously',
  head: [['link', { rel: 'icon', href: 'images/logo.png' }]],
  theme: defaultTheme({
    logo: 'images/logo_black.png',
    repo: 'aiokr/Tripper-Docs',
    lastUpdated: true,
    sidebar: {
      '/': [
        {
          text: '频道',
          link: '/blog/',
          collapsible: true,
          children: ['/blog/index.md', '/blog/index.md'],
        },
        {
          text: '文档',
          link: '/docs/',
        },
      ],
      '/docs/': [
        {
          text: '文档',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
    sidebarDepth: 3,
  }),
  plugins: [mediumZoomPlugin({
    // 配置项
  }),
  externalLinkIconPlugin({
    // 配置项
  })
  ],
})