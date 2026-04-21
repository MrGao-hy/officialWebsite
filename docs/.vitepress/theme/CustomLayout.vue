<template>
  <a-config-provider :theme="darkTheme">
    <Layout>
      <!-- layout-bottom插槽 -->
      <template #layout-bottom>
        <bsz />
      </template>
    </Layout>
  </a-config-provider>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import { useData } from 'vitepress';
import { theme } from 'ant-design-vue';
import { computed } from 'vue';

const { isDark } = useData()
console.log(isDark.value)
const darkTheme = computed(() => ({
  algorithm: isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm,
}));
const {Layout} = DefaultTheme
import { onMounted } from "vue";

onMounted(() => {
});
</script>