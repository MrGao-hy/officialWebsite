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
  title3: string;
  teachInfo: AnyObject
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
        <h2>👨‍🏫 {{title1}}</h2>
      </div>
      <div class="teacher-card">
        <div class="teacher-info">
          <div class="info-item">
            <h3>{{teachInfo?.name}}</h3>
            <p class="title">{{teachInfo?.title}}</p>
          </div>
          <div class="info-block">
            <h4>📚 {{teachInfo.educationTitle}}</h4>
            <ul>
              <li v-for="item in teachInfo?.education">{{item}}</li>
            </ul>
          </div>
          <div class="info-block">
            <h4>💼 {{teachInfo.experienceTitle}}</h4>
            <ul>
              <li v-for="item in teachInfo?.experience">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="members-section">
      <div class="members-wrapper">
        <div class="members-column">
          <div class="section-header">
            <h2>👥 {{title2}}</h2>
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
            <h2>🌟 {{title3}}</h2>
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
  color: var(--vp-c-text-1);
}

.member-count {
  background: #667eea;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #fff;
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
  background: var(--vp-c-divider);
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
  font-weight: 600;
}

.member-desc {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}

.partners .member-card {
  border-left-color: var(--vp-c-border);
}

.partners .member-card:hover {
  background: #f0f0f0;
}

@media (max-width: 768px) {
  .team-container {
    padding: 12px;
  }
  
  .members-wrapper {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
  
  .teacher-card {
    padding: 14px;
  }
  
  .teacher-info h3 {
    font-size: 1.2rem;
  }
  
  .info-block {
    padding: 10px 12px;
  }
  
  .info-block h4 {
    font-size: 0.85rem;
  }
  
  .info-block li {
    font-size: 0.75rem;
  }
  
  .section-header h2 {
    font-size: 1.1rem;
  }
  
  .member-card {
    padding: 8px;
  }
  
  .member-name {
    font-size: 0.85rem;
  }
  
  .member-desc {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .teacher-info h3 {
    font-size: 1.1rem;
  }
  
  .section-header h2 {
    font-size: 1rem;
  }
  
  .member-name {
    font-size: 0.8rem;
  }
  
  .member-desc {
    font-size: 0.7rem;
  }
}
</style>