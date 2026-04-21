import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from '../components/Home.vue';
import Team from '../components/Team.vue';
import Systems from '../components/Systems.vue';
import Achievement from '../components/Achievement.vue';
import Bsz from '../components/Bsz.vue';
import Layout from "./CustomLayout.vue";
import './styles/custom-block.css'
import './styles/custom-common.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router }) {
        // 注册自定义全局组件
        app.component('Bsz', Bsz)
        app.component('Home', Home)
        app.component('Team', Team)
        app.component('Systems', Systems)
        app.component('Achievement', Achievement)
        app.use(Antd);

        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
    }
} satisfies Theme