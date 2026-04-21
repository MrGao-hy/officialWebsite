<template>
  <div class="achievement-container">
    <div class="achievement-header">
      <h1 class="achievement-title">{{title}}</h1>
    </div>

    <div class="achievement-tabs">
      <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab-btn', { active: activeTab === tab.key }]"
          :style="{ '--tab-color': tab.color }"
          @click="activeTab = tab.key"
      >
        {{ tab.name }}
      </button>
    </div>

    <div class="achievement-list">
      <div
          v-for="(item, index) in filteredAchievements"
          :key="index"
          class="achievement-item"
      >
        <div class="achievement-index">{{ index + 1 }}</div>
        <div class="achievement-type">
          <span class="type-tag" :style="{ backgroundColor: getTagColor(item.type) + '20', color: getTagColor(item.type) }">
            {{ item.typeText }}
          </span>
        </div>
        <div class="achievement-info">
          <span class="authors">{{ item.authors }}</span>
          <span v-if="item.authors" class="dot"> </span>
          <span class="content">{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed} from 'vue';


const props = defineProps({
  title: "",
  tabs: [],
  achievements: [],
})
const activeTab = defineModel('activeTab', {default: 'all'});

const getTagColor = (type) => {
  const tab = props.tabs.find(t => t.key === type);
  return tab ? tab.color : '#1890ff';
};

const filteredAchievements = computed(() => {
  if (activeTab.value === 'all') {
    return props.achievements;
  }
  return props.achievements?.filter(item => item.type === activeTab.value);
});
</script>

<style scoped lang="scss">
.achievement-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.achievement-header {
  background-color: var(--vp-c-brand-1);
  padding: 15px 0;
  margin-bottom: 20px;
  .achievement-title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin: 0;
  }
}

.achievement-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .tab-btn {
    padding: 6px 16px;
    margin: 0 5px;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 16px;
    background-color: var(--vp-c-bg);
    color: var(--vp-c-brand-1);
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
    &:hover {
      border-color: var(--tab-color);
      color: var(--tab-color);
    }
    &.active {
      background-color: var(--tab-color);
      border-color: var(--tab-color);
      color: #fff;
    }
  }
}

.achievement-list {
  padding-top: 10px;
}

.achievement-item {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid var(--vp-c-border);
  align-items: flex-start;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--vp-c-brand-soft);
  }
  &:last-child {
    border-bottom: none;
  }
}

.achievement-index {
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin-right: 15px;
  padding-top: 2px;
}

.achievement-type {
  margin-right: 15px;
  .type-tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
}

.achievement-info {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
  .authors {
    font-weight: 500;
  }
  .dot {
    margin: 0 2px;
  }
  .content {
    line-height: 1.5;
  }
  .index {
    color: #1890ff;
  }
}

@media (max-width: 768px) {
  .achievement-container {
    padding: 0 15px;
  }
  .achievement-header {
    padding: 12px 0;
    .achievement-title {
      font-size: 18px;
    }
  }
  .achievement-tabs {
    flex-wrap: wrap;
    .tab-btn {
      font-size: 13px;
      padding: 4px 12px;
      margin: 5px;
    }
  }
  .achievement-item {
    flex-wrap: wrap;
    .achievement-index {
      width: 25px;
      margin-right: 10px;
    }
    .achievement-type {
      margin-right: 10px;
    }
    .achievement-info {
      font-size: 13px;
      margin-top: 5px;
      flex: 100%;
    }
  }
}
</style>