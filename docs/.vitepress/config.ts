import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  ignoreDeadLinks: true,
  base: '/officialWebsite/',
  rewrites: {
    'zh/index.md': 'index.md',
    'zh/:path*': ':path*'
  },
  lastUpdated: true,
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
        editLink: {
          pattern: 'https://github.com/MrGao-hy/officialWebsite/edit/main/docs/:path', // 改成自己的仓库
          text: '在GitHub编辑本页'
        },
        footer: {
          message: '© 2026 宋培彦. 保留所有权利。',
          copyright: 'Copyright © 2019-present Evan You'
        }
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: '/en/',
      title: "home",
      themeConfig: {
        nav: [
          { text: 'PERSONAGE', link: '/en/home' },
          { text: 'TEAM', link: '/en/team' },
          { text: 'PROJECTS', link: '/en/project' },
          { text: 'ACTIVITIES', link: '/en/activity' },
          { text: 'ACHIEVEMENTS', link: '/en/achievement' },
          { text: 'SYSTEMS', link: '/en/system' },
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
          label: 'Current Page'
        },
        footer: {
          message: '© 2026 Peiyan Song. All rights reserved。',
          copyright: 'Copyright © 2019-present Evan You'
        }
      },
    },
  },
});
