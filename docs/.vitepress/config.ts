import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  ignoreDeadLinks: true,
  rewrites: {
    'zh/index.md': 'index.md',
    'zh/:path*': ':path*'
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      title: "首页",
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '个人简介', link: '/home' },
          { text: '团队成员', link: '/team' },
          { text: '项目成果', link: '/project' },
          { text: '参与活动', link: '/activity' },
          { text: '学术成果', link: '/achievement' },
          { text: '系统', link: '/system' },
        ],
        lastUpdated: {
          text: "最后更新",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "medium",
          },
        },
        outline: {
          level: [2, 3],
          label: '当前页大纲'
        },
        footer: {
          message: '© 2025 宋培彦. 保留所有权利。',
          copyright: 'Copyright © 2019-present Evan You'
        }
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "home",
      link: '/en/',
    },
  },
  themeConfig: {
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
});
