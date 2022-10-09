
import { defineUserConfig } from 'vuepress'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Tripper Docs',
  description: 'Take Photo Think Seriously',
  head: [['link', { rel: 'icon', href: 'images/logo.png' }]],
  theme: defaultTheme({
    logo: 'images/logo.png',
    repo: 'aiokr/Tripper-Docs',
  }),
  plugins: [
    externalLinkIconPlugin({
      // 配置项
    })
  ],
})