import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Team from '../components/Team.vue'
import './styles/custom-block.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component('Team', Team)
    }
} satisfies Theme