import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  ignoreDeadLinks: true,
  base: '/officialWebsite/',
  rewrites: {
    'zh/index.md': 'index.md',
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
          { text: '首页', link: '/zh/home' },
          { text: '团队成员', link: '/zh/team' },
          { text: '研究项目', link: '/zh/project' },
          { text: '获奖情况', link: '/zh/awards' },
          { text: '研究成果', link: '/zh/achievement' },
          { text: '系统', link: '/zh/system' },
        ],
        lastUpdated: {
          text: "最后更新",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "full",
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
          copyright: 'songpy@tjnu.edu.cn'
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
          text: "Last updated",
          formatOptions: {
            dateStyle: "short",
            timeStyle: "medium",
          },
        },
        outline: {
          level: [2, 3],
          label: 'Current Page'
        },
        editLink: {
          pattern: 'https://github.com/MrGao-hy/officialWebsite/edit/main/docs/:path', // 改成自己的仓库
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: '© 2026 Peiyan Song. All rights reserved。',
          copyright: 'songpy@tjnu.edu.cn'
        }
      },
    },
  },
});
