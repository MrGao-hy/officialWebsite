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
            <a-button type="primary" danger @click="onOpenUrl(ite.url)">登录系统</a-button>
            <a-button type="primary" @click="onOpenDocs(ite.docs)">操作说明</a-button>
            <a-button >视频演示</a-button>
          </template>
          <a-card-meta :title="ite.title" :description="ite.description">
          </a-card-meta>
        </a-card>
      </a-flex>
    </template>
  </div>
</template>
<script lang="ts" setup>
import {reactive} from "vue";

const systems = reactive([
  {
    title: "“知天下”知识发现系统",
    list: [

      {
        image: "images/img.png",
        title: "术语服务系统",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8502/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "images/img_1.png",
        title: "AI4S因果知识发现系统",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8610/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "images/img_2.png",
        title: "简报服务系统",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8503/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      }
    ]
  },
  {
    title: "“正道”人才画像系统",
    list: [

      {
        image: "images/img_3.png",
        title: "科研人员开源学术简历聚合系统",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8501/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "images/img_4.png",
        title: "科研诚信风险预警平台",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8505/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
    ]
  },
  {
    title: "“古道”罕见病术语知识发现系统",
    list: [
      {
        image: "images/img_5.png",
        title: "古籍罕见病知识服务系统",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8506/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "images/img_6.png",
        title: "罕见病知识问答",
        description: "点击下方各按钮了解更多",
        url: "http://10.20.32.102:8611/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "images/img_7.png",
        title: "胡博深的“温病知识问答”",
        description: "点击下方各按钮了解更多",
        url: "http://192.168.12.102:8615",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      }
    ]
  },
  {
    title: "“就道”阅读智能评价与分析系统",
    list: [
      {
        image: "images/img_8.png",
        title: "韩雅霖的“图书适配性评价“",
        description: "点击下方各按钮了解更多",
        url: "http://192.168.12.102:8613",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "images/img_9.png",
        title: "郭欣桐的“中小学阅读能力评价”",
        description: "点击下方各按钮了解更多",
        url: "http://192.168.12.102:8614",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
    ]
  }
]);

const onOpenUrl = (url: string) => {
  window.location.href = url;
}

const onOpenDocs = (url: string) => {
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

