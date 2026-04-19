<script setup lang="ts">
import {computed, reactive} from 'vue'

interface ListType {
  name: string
  desc: string
  links?: {
    icon: string
    link: string
  }[]
}

interface IProps {
  title1: string;
  title2: string;
}

const props = withDefaults(defineProps<IProps>(), {})

const coreMembers = reactive([
  { name: '鲁婷', desc: '2025级 研究生' },
  { name: '马丹薇', desc: '2025级 研究生' },
  { name: '魏晓', desc: '2025级 研究生' },
  { name: '巨豪', desc: '2024级 研究生' },
  { name: '张帆', desc: '2024级 研究生' },
  { name: '杜博雅', desc: '2023级 研究生' },
  { name: '梁嘉怡', desc: '2023级 研究生' },
  { name: '马爽爽', desc: '2023级 研究生' },
  { name: '胡博深', desc: '2022级 研究生' }
])

const partners = reactive([
  { name: '滕艳晓', desc: '2022级 研究生' },
  { name: '赵萌萌', desc: '2022级 研究生' },
  { name: '田子炀', desc: '2021级 本科生 保研至北京外国语大学' },
  { name: '游安琪', desc: '2021级 本科生 保研至福州大学' },
  { name: '王芊予', desc: '2021级 本科生' },
  { name: '叶健', desc: '2021级 本科生' },
  { name: '石漫', desc: '2021级 本科生' },
  { name: '何艳菲', desc: '2021级 研究生' },
  { name: '李怡然', desc: '2021级 研究生' },
  { name: '田文波', desc: '2021级 研究生' },
  { name: '王源雯', desc: '2021级 研究生' },
  { name: '冯超慧', desc: '2020级 研究生' },
  { name: '鞠佳辰', desc: '2020级 研究生' },
  { name: '靳月娇', desc: '2020级 研究生' },
  { name: '王天翊', desc: '2020级 研究生' },
  { name: '张月', desc: '2020级 研究生' },
  { name: '杨青香', desc: '2020级 本科生 保研至华中师范大学' },
  { name: '韩丽', desc: '2020级 本科生 保研至华中师范大学' },
  { name: '沈易知', desc: '2020级 本科生 保研至华中师范大学' },
  { name: '郭素颖', desc: '2020级 本科生 保研至天津师范大学' },
  { name: '曹艺暄', desc: '2020级 本科生 保研至云南大学' },
  { name: '李音', desc: '2020级 本科生 就业' }
])
</script>

<template>
  <div class="team-container">
    <section class="teacher-section">
      <div class="section-header">
        <h2>👨‍🏫 指导教师</h2>
      </div>
      <div class="teacher-card">
        <div class="teacher-info">
          <div class="info-item">
            <h3>宋培彦</h3>
            <p class="title">教授 · 硕士生导师</p>
          </div>
          <div class="info-block">
            <h4>📚 教育背景</h4>
            <ul>
              <li>2007.9-2010.7 北京师范大学中文信息处理研究所，自然语言处理，博士</li>
              <li>2003.9-2006.7 中国社会科学院研究生院，自然语言处理，硕士</li>
              <li>1999.9-2003.7 山东省曲阜师范大学，汉语言文学（辅修计算机），学士</li>
            </ul>
          </div>
          <div class="info-block">
            <h4>💼 工作经历</h4>
            <ul>
              <li><strong>2023.1-至今</strong> 天津师范大学管理学院，教授，硕士生导师</li>
              <li><strong>2022.1-2022.12</strong> 天津师范大学管理学院，副教授，硕士生导师</li>
              <li><strong>2019.10-2021.12</strong> 天津师范大学管理学院，副研究馆员，硕士生导师</li>
              <li><strong>2015.8-2019.10</strong> 中国科学技术信息研究所技术支持中心，副研究馆员、硕士生导师</li>
              <li><strong>2010.7-2015.8</strong> 中国科学技术信息研究所信息资源中心，助理研究员、副研究馆员</li>
              <li><strong>2006.7-2007.9</strong> 北京天宇智通信息技术有限公司，项目经理</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="members-section">
      <div class="members-wrapper">
        <div class="members-column">
          <div class="section-header">
            <h2>👥 {{title1}}</h2>
            <span class="member-count">{{ coreMembers.length }} 人</span>
          </div>
          <div class="members-grid">
            <div v-for="(member, index) in coreMembers" :key="index" class="member-card">
              <h4 class="member-name">{{ member.name }}</h4>
              <p class="member-desc">{{ member.desc }}</p>
            </div>
          </div>
        </div>

        <div class="members-column partners">
          <div class="section-header">
            <h2>🌟 {{title2}}</h2>
            <span class="member-count">{{ partners.length }} 人</span>
          </div>
          <div class="members-grid">
            <div v-for="(member, index) in partners" :key="index" class="member-card">
              <h4 class="member-name">{{ member.name }}</h4>
              <p class="member-desc">{{ member.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-container {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #667eea;
}

.section-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #1a1a2e;
}

.member-count {
  background: #667eea;
  color: white;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
}

.teacher-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
  margin-bottom: 24px;
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.25);
}

.teacher-info h3 {
  margin: 0 0 2px 0;
  font-size: 1.4rem;
}

.teacher-info .title {
  margin: 0 0 16px 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

.info-block {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 10px;
}

.info-block h4 {
  margin: 0 0 8px 0;
  font-size: 0.95rem;
}

.info-block ul {
  margin: 0;
  padding-left: 16px;
}

.info-block li {
  margin-bottom: 4px;
  line-height: 1.5;
  font-size: 0.85rem;
}

.members-section {
  margin-bottom: 20px;
}

.members-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.members-column {
  min-width: 0;
}

.members-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.member-card {
  padding: 8px 12px;
  border-left: 3px solid #667eea;
  background: #f8f9fa;
  border-radius: 0 6px 6px 0;
  transition: all 0.2s ease;
}

.member-card:hover {
  background: #e3e6f9;
  transform: translateX(4px);
}

.member-name {
  margin: 0 0 2px 0;
  font-size: 0.9rem;
  color: #1a1a2e;
  font-weight: 600;
}

.member-desc {
  margin: 0;
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
}

.partners .member-card {
  border-left-color: #848484;
}

.partners .member-card:hover {
  background: #f0f0f0;
}

@media (max-width: 768px) {
  .members-wrapper {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 10px;
  }
  
  .teacher-card {
    padding: 14px;
  }
  
  .teacher-info h3 {
    font-size: 1.2rem;
  }
  
  .member-avatar {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}
</style>