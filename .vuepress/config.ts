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
    //主题配置
    theme:
      defaultTheme(
        {
          repo: "aiokr/Tripper-Docs",
          lastUpdated:
            true,
          //侧边栏配置
          sidebar:
            {
              "/":
                [
                  {
                    text: "文档",
                    link: "/docs/",
                    children:
                      [
                        "/docs/文字生成语音并获得-MP3-文件的方法.md",
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
