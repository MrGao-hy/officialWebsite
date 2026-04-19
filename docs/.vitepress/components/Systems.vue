<template>
  <div class="systems">
    <template v-for="(item, index) in systems" :key="index">
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
  padding: 30px 100px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 60px auto 40px;
  }
}
</style>

