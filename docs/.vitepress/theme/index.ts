import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from '../components/Home.vue';
import Team from '../components/Team.vue';
import Systems from '../components/Systems.vue';
import Achievement from '../components/Achievement.vue';
import Layout from "./CustomLayout.vue";
import './styles/custom-block.css'
import './styles/custom-common.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component('Home', Home)
        app.component('Team', Team)
        app.component('Systems', Systems)
        app.component('Achievement', Achievement)
        app.use(Antd);
    }
} satisfies Theme