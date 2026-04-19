<template>
  <Layout>
    <!-- 文档下面的评论 -->
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";

const {Layout} = DefaultTheme
import { onMounted } from "vue";

onMounted(() => {
});
</script>