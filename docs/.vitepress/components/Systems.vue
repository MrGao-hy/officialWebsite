<template>
  <div class="systems">
    <template v-for="(item, index) in systems" :key="index">
      <a-card :body-style="{backgroundColor: item.bgColor}">
        <h1>{{item.title}}</h1>
        <a-flex gap="middle" justify="space-evenly">
          <a-card v-for="(ite, i) in item.list" :key="i" hoverable style="width: 350px">
            <template #cover>
              <img
                  alt="example"
                  :src="ite.image"
              />
            </template>
            <template #actions>
              <template v-for="(action, inx) in actions">
                <a-button type="primary" :danger="inx === 0" @click="onOpenUrl(ite.url)">{{action.name}}</a-button>
              </template>
            </template>
            <a-card-meta :title="ite.title" :description="ite.description">
            </a-card-meta>
          </a-card>
        </a-flex>
      </a-card>
    </template>
  </div>
</template>
<script setup>
const props = defineProps({
  systems: [],
  actions: []
})

const onOpenUrl = (url) => {
  window.location.href = url;
}
</script>

<style scoped>
.systems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 100px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
  }
  .ant-card {
    margin-bottom: 40px;
    width: 100%;
    max-width: 1200px;
  }
}

@media (max-width: 768px) {
  .systems {
    padding: 20px 15px;
    h1 {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  :deep(.ant-flex) {
    flex-direction: column !important;
    align-items: center !important;
    gap: 16px !important;
  }

  :deep(.ant-card) {
    width: 100% !important;
    max-width: 100%;
    margin-bottom: 20px !important;
  }
  
  :deep(.ant-card-body) {
    padding: 16px !important;
  }
  
  :deep(.ant-card-meta-title) {
    font-size: 16px !important;
  }
  
  :deep(.ant-card-meta-description) {
    font-size: 14px !important;
  }
  
  :deep(.ant-btn) {
    font-size: 14px !important;
    padding: 6px 12px !important;
  }
}

@media (max-width: 480px) {
  .systems {
    padding: 15px 10px;
    h1 {
      font-size: 20px;
    }
  }
  
  :deep(.ant-card-meta-title) {
    font-size: 14px !important;
  }
  
  :deep(.ant-card-meta-description) {
    font-size: 13px !important;
  }
  
  :deep(.ant-btn) {
    font-size: 12px !important;
    padding: 4px 8px !important;
  }
}
</style>

