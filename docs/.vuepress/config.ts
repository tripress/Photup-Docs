import { defineUserConfig } from "vuepress";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import { defaultTheme } from "@vuepress/theme-default";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { blogPlugin } from "vuepress-plugin-blog2";

export default defineUserConfig(
  {
    //语言
    lang: "zh-CN",
    //站点标题
    title:
      "Tripper Docs",
    //站点描述
    description:
      "Take Photo Think Seriously",
    //入口
    base: "/",
    //头部信息
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "images/logo.png",
        },
      ],
    ],
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: '瞬间文档',
        description: 'Docs for Tripper Press',
      },
      '/en/': {
        lang: 'en-US',
        title: 'Tripper Docs',
        description: 'Docs for Tripper Press',
      },
    },
    //主题配置
    theme:
      defaultTheme(
        {
          repo: "aiokr/Tripper-Docs",
          docsRepo: 'https://github.com/aiokr/tripper-docs/',
          docsBranch: 'master',
          docsDir: '/docs/',
          editLink: true,
          editLinkPattern: ':repo/edit/:branch/:path',
          lastUpdated: true,
          locales: {
            '/': {
              selectLanguageName: '简体中文',
            },
            '/en/': {
              selectLanguageName: 'English',
            },
          },
          //侧边栏配置
          sidebar:
          {
            '/notes/': [
              {
                text: '文档',
                children: [
                  '/notes/解决空格键预览打不开的方法.md',
                  '/notes/文字生成语音并获得-MP3-文件的方法.md'
                ],
              },
            ],
            '/type/': [
              {
                text: 'Type 中文文档',
                link: '/type/',
                children: [
                  '/type/01_介绍.md',
                  '/type/02_快速开始.md',
                ],
              },
            ],
          },
          sidebarDepth: 3,
        }
      ),
    plugins:
      [
        mediumZoomPlugin(
          {
            // 配置项
          }
        ),
        externalLinkIconPlugin(
          {
            // 配置项
          }
        ),
        blogPlugin(
          {
            // 配置项
          }
        ),
      ],
  }
);
