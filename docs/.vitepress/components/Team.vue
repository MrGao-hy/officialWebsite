<script setup lang="ts">
import {computed, reactive} from 'vue'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

interface IProps {
  title1: string
  title2: string
}

const props = withDefaults(defineProps<IProps>(), {
  title1: "",
  title2: ""
})
interface ListType {
  name: string
  desc: string
  links?: {
    icon: string
    link: string
  }[]
}

const fullMemberList = computed(() => {
  return (list: ListType[]) => {
    // map 循环处理每一项
    return list.map(item => ({
      name: item.name,
      desc: item.desc,
      // 自动生成头像
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${item.name}&backgroundColor=667eea`,
      // 自动添加链接
      links: [
        { icon: 'github', link: 'https://github.com/MrGao-hy' },
        { icon: 'gitee', link: 'https://gitee.com/MrGao-hy' }
      ]
    }))
  }
})

const coreMembers = reactive([
  {
    name: '鲁婷',
    desc: '2025级 研究生',
  },
  {
    name: '马丹薇',
    desc: '2025级 研究生',
  },
  {
    name: '魏晓',
    desc: '2025级 研究生',
  },
  {
    name: '巨豪',
    desc: '2024级 研究生',
  },
  {
    name: '张帆',
    desc: '2024级 研究生',
  },
  {
    name: '杜博雅',
    desc: '2023级 研究生',
  },
  {
    name: '梁嘉怡',
    desc: '2023级 研究生',
  },
  {
    name: '马爽爽',
    desc: '2023级 研究生',
  },
  {
    name: '胡博深',
    desc: '2022级 研究生',
  }
])
const partners = reactive([
  {
    name: '滕艳晓',
    desc: '2022级 研究生',
  },
  {
    name: '赵萌萌',
    desc: '2022级 研究生',
  },
  {
    name: '田子炀',
    desc: '2021级 本科生 保研至北京外国语大学',
  },
  {
    name: '游安琪',
    desc: '2021级 本科生 保研至福州大学',
  },
  {
    name: '王芊予',
    desc: '2021级 本科生',
  },
  {
    name: '叶健',
    desc: '2021级 本科生',
  },
  {
    name: '石漫',
    desc: '2021级 本科生',
  },
  {
    name: '何艳菲',
    desc: '2021级 研究生',
  },
  {
    name: '李怡然',
    desc: '2021级 研究生',
  },
  {
    name: '田文波',
    desc: '2021级 研究生',
  },
  {
    name: '王源雯',
    desc: '2021级 研究生',
  },
  {
    name: '冯超慧',
    desc: '2020级 研究生',
  },
  {
    name: '鞠佳辰',
    desc: '2020级 研究生',
  },
  {
    name: '靳月娇',
    desc: '2020级 研究生',
  },
  {
    name: '王天翊',
    desc: '2020级 研究生',
  },
  {
    name: '张月',
    desc: '2020级 研究生',
  },
  {
    name: '杨青香',
    desc: '2020级 本科生 保研至华中师范大学',
  },
  {
    name: '韩丽',
    desc: '2020级 本科生 保研至华中师范大学',
  },
  {
    name: '沈易知',
    desc: '2020级 本科生 保研至华中师范大学',
  },
  {
    name: '郭素颖',
    desc: '2020级 本科生 保研至天津师范大学',
  },
  {
    name: '曹艺暄',
    desc: '2020级 本科生 保研至云南大学',
  },
  {
    name: '李音',
    desc: '2020级 本科生 就业',
  }
])
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>{{title1}}</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="fullMemberList(coreMembers)" />
    <VPTeamPageTitle>
      <template #title>{{title2}}</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="fullMemberList(partners)" />
  </VPTeamPage>
</template>

<style>
.vp-doc p, .vp-doc img, .vp-doc summary {
  margin: 0 !important;
}
</style>