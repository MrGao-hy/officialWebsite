<script setup lang="ts">
import { reactive } from 'vue'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = reactive([
  {
    name: '鲁婷',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=鲁婷&backgroundColor=FF7043',
    desc: '2025级 研究生',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    name: '马丹薇',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=马丹薇&backgroundColor=FF7043',
    desc: '2025级 研究生',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    name: '魏晓',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=魏晓&backgroundColor=FF7043',
    desc: '2025级 研究生',
  },
  {
    name: '巨豪',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=巨豪&backgroundColor=FF7043',
    desc: '2024级 研究生',
  },
  {
    name: '张帆',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=张帆&backgroundColor=FF7043',
    desc: '2024级 研究生',
  },
  {
    name: '杜博雅',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=杜博雅&backgroundColor=FF7043',
    desc: '2023级 研究生',
  },
  {
    name: '梁嘉怡',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=梁嘉怡&backgroundColor=FF7043',
    desc: '2023级 研究生',
  },
  {
    name: '马爽爽',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=马爽爽&backgroundColor=FF7043',
    desc: '2023级 研究生',
  },
  {
    name: '胡博深',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=胡博深&backgroundColor=FF7043',
    desc: '2022级 研究生',
  }
])
const partners = reactive([
  {
    name: '滕艳晓',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=滕艳晓&backgroundColor=FF7043',
    desc: '2022级 研究生',
  },
  {
    name: '赵萌萌',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=赵萌萌&backgroundColor=FF7043',
    desc: '2022级 研究生',
  },
  {
    name: '田子炀',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=田子炀&backgroundColor=FF7043',
    desc: '2021级 本科生 保研至北京外国语大学',
  },
  {
    name: '游安琪',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=游安琪&backgroundColor=FF7043',
    desc: '2021级 本科生 保研至福州大学',
  },
  {
    name: '王芊予',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=王芊予&backgroundColor=FF7043',
    desc: '2021级 本科生',
  },
  {
    name: '叶健',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=叶健&backgroundColor=FF7043',
    desc: '2021级 本科生',
  },
  {
    name: '石漫',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=石漫&backgroundColor=FF7043',
    desc: '2021级 本科生',
  },
  {
    name: '何艳菲',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=何艳菲&backgroundColor=FF7043',
    desc: '2021级 研究生',
  },
  {
    name: '李怡然',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=李怡然&backgroundColor=FF7043',
    desc: '2021级 研究生',
  },
  {
    name: '田文波',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=田文波&backgroundColor=FF7043',
    desc: '2021级 研究生',
  },
  {
    name: '王源雯',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=王源雯&backgroundColor=FF7043',
    desc: '2021级 研究生',
  },
  {
    name: '冯超慧',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=冯超慧&backgroundColor=FF7043',
    desc: '2020级 研究生',
  },
  {
    name: '鞠佳辰',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=鞠佳辰&backgroundColor=FF7043',
    desc: '2020级 研究生',
  },
  {
    name: '靳月娇',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=靳月娇&backgroundColor=FF7043',
    desc: '2020级 研究生',
  },
  {
    name: '王天翊',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=王天翊&backgroundColor=FF7043',
    desc: '2020级 研究生',
  },
  {
    name: '张月',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=张月&backgroundColor=FF7043',
    desc: '2020级 研究生',
  },
  {
    name: '杨青香',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=杨青香&backgroundColor=FF7043',
    desc: '2020级 本科生 保研至华中师范大学',
  },
  {
    name: '韩丽',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=韩丽&backgroundColor=FF7043',
    desc: '2020级 本科生 保研至华中师范大学',
  },
  {
    name: '沈易知',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=沈易知&backgroundColor=FF7043',
    desc: '2020级 本科生 保研至华中师范大学',
  },
  {
    name: '郭素颖',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=郭素颖&backgroundColor=FF7043',
    desc: '2020级 本科生 保研至天津师范大学',
  },
  {
    name: '曹艺暄',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=曹艺暄&backgroundColor=FF7043',
    desc: '2020级 本科生 保研至云南大学',
  },
  {
    name: '李音',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=李音&backgroundColor=FF7043',
    desc: '2020级 本科生 就业',
  }
])
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>在读学生</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="coreMembers" />
    <VPTeamPageTitle>
      <template #title>已毕业学生</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="partners" />
  </VPTeamPage>
</template>

<style>
.vp-doc p, .vp-doc img, .vp-doc summary {
  margin: 0 !important;
}
</style>