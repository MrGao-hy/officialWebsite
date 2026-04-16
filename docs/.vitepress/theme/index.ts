import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Team from '../components/Team.vue';
import Layout from "./CustomLayout.vue";
import './styles/custom-block.css'
import './styles/custom-common.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component('Team', Team)
    }
} satisfies Theme