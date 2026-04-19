<template>
  <a-space direction="vertical" size="large" style="width: 100%">
    <a-card :bordered="false" class="profile-card">
      <div class="card-container">
        <div class="avatar-wrapper">
          <a-avatar :size="160" :src="profileImg" class="profile-avatar" />
        </div>

        <div class="info-content">
          <h1 class="name">{{info?.profile.name}}</h1>

          <div class="title-row">
            <span class="department">{{info?.profile.department}}</span>
            <a-divider type="vertical" />
            <span class="office">{{info?.profile.title}}</span>
          </div>

          <div class="university">{{info?.profile.university}}</div>

          <div class="contact-info">
            <div class="contact-item">
              <mail-outlined class="icon-blue" />
              <a :href="'mailto:songpy@tjnu.edu.cn'" class="link-text">{{info?.profile.email}}</a>
            </div>
            <div class="contact-item">
              <environment-outlined class="icon-blue" />
              <span class="address">{{info?.profile.address}}</span>
            </div>
          </div>
        </div>
      </div>
    </a-card>

    <a-card :headStyle="{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff'}" :title="title1">
      {{info?.dynamic}}
    </a-card>

    <a-card :headStyle="{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff'}" :title="title2" >
      <a-flex wrap="wrap" justify="space-around" gap="middle">
        <template v-for="(item, i) in info?.researchDirections" :key="i">
          <a-card hoverable style="width: 48%" :title="item.title">
            {{item.content}}
          </a-card>
        </template>
      </a-flex>
    </a-card>
  </a-space>
</template>

<script setup>
import { MailOutlined, EnvironmentOutlined } from '@ant-design/icons-vue';

// 这里替换为你实际的图片路径
const profileImg = '/officialWebsite/images/001.png';
const props = defineProps({
  info: {},
  title1: "",
  title2: ""
})
</script>

<style scoped>
.profile-card {
  width: 100%;
  max-width: 100%;
  background: transparent; /* 根据背景需要调整 */
}

.card-container {
  display: flex;
  align-items: center;
  gap: 40px;
}

/* 头像外圈阴影效果 */
.avatar-wrapper {
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  //background: #fff;
}

.profile-avatar {
  border: 1px solid var(--vp-c-border);
}

.info-content {
  flex-grow: 1;
}

.name {
  font-size: 42px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.title-row {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.university {
  font-size: 18px;
  color: var(--vp-c-text-3);
  margin-bottom: 24px;
}

.contact-info {
  display: flex;
  gap: 32px;
  margin-top: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: var(--vp-c-text-3);
}

.icon-blue {
  color: #1890ff;
  font-size: 20px;
}

.link-text {
  color: var(--vp-c-text-3);
  text-decoration: none;
}

.link-text:hover {
  color: #1890ff;
}

.address {
  white-space: nowrap;
}

/* 适配移动端 */
@media (max-width: 600px) {
  .card-container {
    flex-direction: column;
    text-align: center;
  }
  .contact-info {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
}

:deep(.ant-card-head-title) {
  white-space: wrap !important;
}
</style>