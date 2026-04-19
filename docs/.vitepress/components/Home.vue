<template>
  <a-space direction="vertical" size="large" style="width: 100%">
    <a-card :bordered="false" class="profile-card">
      <div class="card-container">
        <div class="avatar-wrapper">
          <a-avatar :size="160" :src="profileImg" class="profile-avatar" />
        </div>

        <div class="info-content">
          <h1 class="name">宋培彦</h1>

          <div class="title-row">
            <span class="department">管理学院数据科学系</span>
            <a-divider type="vertical" />
            <span class="office">教授，硕士生导师</span>
          </div>

          <div class="university">天津师范大学</div>

          <div class="contact-info">
            <div class="contact-item">
              <mail-outlined class="icon-blue" />
              <a :href="'mailto:songpy@tjnu.edu.cn'" class="link-text">songpy@tjnu.edu.cn</a>
            </div>
            <div class="contact-item">
              <environment-outlined class="icon-blue" />
              <span class="address">天津市西青区宾水西道393号</span>
            </div>
          </div>
        </div>
      </div>
    </a-card>

    <a-card :headStyle="{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff'}" title="动态">
      融合图书情报学、语言学、认知科学和计算科学等多学科视角，探究知识组织和知识发现基础理论，重点研究知识表示、语义计算和可信知识图谱自动构建方法，以术语为突破口、以自然语言处理技术为支撑，并逐步融入大模型技术，实现多维度、场景化、智能化、精准化、可解释的科技知识组织与情报服务。
    </a-card>

    <a-card :headStyle="{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff'}" title="研究方向" >
      <a-flex wrap="wrap" justify="space-around" gap="middle">
        <a-card hoverable style="width: 48%" title="科技人才画像：高层次科技人才画像研究与专家推荐服务系统研制">
          <text>从知识组织和开源情报角度，利用自然语言处理、深度学习等方法发现领域专家和团队，对其研究专长、影响力、活跃度、权威性、成长性、流动性、国际合作关系、负责任评审与回避关系、科研诚信与伦理风险等进行精准识别、评价和推荐，为政府主管部门、科技园区、科技企业开展更高层次的“引才、育才、用才、留才”提供决策支持。</text>
        </a-card>
        <a-card hoverable style="width: 48%" title="国际组织科技知识聚合：国际组织术语库集成方法研究与“知天下”知识服务平台研制">
          <text>从知识组织与知识发现角度，对联合国教科文组织UNESCO、粮农组织FAO等国际组织发布的科技术语资源进行语义化、规范化翻译、组织与映射，形成多语言的术语知识库，进而采用自然语言处理技术对国际组织发布的政策文件、报告、档案、统计数据等进行跨语言翻译、语义挖掘和动态研判，为相关部门提供决策支持和政策建议，助力提高我国在国际组织中的话语权和影响力，并为用户提供多语言科技知识服务，实现科技知识“洋为中用”。</text>
        </a-card>
        <a-card hoverable style="width: 48%" title="古籍科技知识发现：大规模古籍知识库集成与“古道”知识图谱服务平台研制">
          <text>从知识组织和开源情报角度，利用自然语言处理、深度学习等方法发现领域专家和团队，对其研究专长、影响力、活跃度、权威性、成长性、流动性、国际合作关系、负责任评审与回避关系、科研诚信与伦理风险等进行精准识别、评价和推荐，为政府主管部门、科技园区、科技企业开展更高层次的“引才、育才、用才、留才”提供决策支持。</text>
        </a-card>

        <a-card hoverable style="width: 48%" title="AI+中小学阅读：学生阅读能力画像与读物适度性评估">
          <text>从图书馆学、语言学、教育学、心理学与数据科学等交叉角度，探究数智驱动的中小学生阶梯阅读能力画像方法，以AI提高人-书适配性，从而完善阅读理论与评估体系、提升中小学生深度阅读能力，更好服务于书香校园和书香社会建设。</text>
        </a-card>
      </a-flex>
    </a-card>
  </a-space>
</template>

<script setup>
import { MailOutlined, EnvironmentOutlined } from '@ant-design/icons-vue';

// 这里替换为你实际的图片路径
const profileImg = '/officialWebsite/images/001.png';
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
  padding: 4px;
  background: #fff;
}

.profile-avatar {
  border: 1px solid #f0f0f0;
}

.info-content {
  flex-grow: 1;
}

.name {
  font-size: 42px;
  font-weight: 800;
  color: #262626;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.title-row {
  font-size: 18px;
  color: #595959;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.university {
  font-size: 18px;
  color: #595959;
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
  color: #8c8c8c;
}

.icon-blue {
  color: #1890ff;
  font-size: 20px;
}

.link-text {
  color: #8c8c8c;
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