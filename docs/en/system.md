---
layout: page
---

<Systems :actions="actions" :systems="systems" />

<script setup>
import {reactive} from "vue";

const actions = reactive([
  {
    name: "Login System",
  },
  {
    name: "User Guide",
  }
]);
const systems = reactive([
  {
    title: "Zhitianxia Knowledge Discovery System",
    list: [
      {
        image: "/officialWebsite/images/img.png",
        title: "Terminology Service System",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8502/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "/officialWebsite/images/img_1.png",
        title: "AI4S Causal Knowledge Discovery System",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8610/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "/officialWebsite/images/img_2.png",
        title: "Briefing Service System",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8503/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      }
    ]
  },
  {
    title: "Zhengdao Talent Profiling System",
    list: [
      {
        image: "/officialWebsite/images/img_3.png",
        title: "Open Source Academic Resume Aggregation System for Researchers",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8501/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "/officialWebsite/images/img_4.png",
        title: "Research Integrity Risk Early Warning Platform",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8505/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
    ]
  },
  {
    title: "Gudao Rare Disease Terminology Knowledge Discovery System",
    list: [
      {
        image: "/officialWebsite/images/img_5.png",
        title: "Ancient Rare Disease Knowledge Service System",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8506/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "/officialWebsite/images/img_6.png",
        title: "Rare Disease Knowledge Q&A",
        description: "Click the buttons below to learn more",
        url: "http://10.20.32.102:8611/",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "/officialWebsite/images/img_7.png",
        title: "Wenbing Knowledge Q&A",
        description: "Click the buttons below to learn more",
        url: "http://192.168.12.102:8615",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      }
    ]
  },
  {
    title: "Jiudao Intelligent Reading Evaluation and Analysis System",
    list: [
      {
        image: "/officialWebsite/images/img_8.png",
        title: "Book Adaptability Evaluation",
        description: "Click the buttons below to learn more",
        url: "http://192.168.12.102:8613",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
      {
        image: "/officialWebsite/images/img_9.png",
        title: "K12 Reading Ability Evaluation",
        description: "Click the buttons below to learn more",
        url: "http://192.168.12.102:8614",
        docs: "https://www.kdocs.cn/l/cpgentULrToM",
        video: "",
      },
    ]
  }
]);
</script>