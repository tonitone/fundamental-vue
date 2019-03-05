import Vue from 'vue';
import './class-component-hooks';
import './main.scss';
Vue.config.productionTip = false;
import FundamentalVue from './../';
import Router from 'vue-router';
import { DocsRouter } from './DocsRouter';
import { registerComponents } from './components';
import App from './App.vue';
import {i18n, loadLanguageAsync} from './i18n-setup';

// Register Layouts globally so that they are available by name
import DefaultLayout from '@/docs/layouts/DefaultLayout.vue';
import FullscreenLayout from '@/docs/layouts/FullscreenLayout.vue';

Vue.component('DefaultLayout', DefaultLayout);
Vue.component('FullscreenLayout', FullscreenLayout);

// Install Plugins
Vue.use(FundamentalVue);
Vue.use(Router);

registerComponents(Vue);

async function asnycLoad() {
  const vm = new Vue({
    components: { App },
    router: DocsRouter,
    render: h => h(App),
    i18n,
  });
  const locale = navigator.language;
  await loadLanguageAsync(locale);
  vm.$mount('#app');
}

asnycLoad();
