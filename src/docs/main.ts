import Vue from 'vue';
import './class-component-hooks';
import './main.scss';
Vue.config.productionTip = false;
import FundamentalVue from './../';
import Router from 'vue-router';
import { DocsRouter } from './DocsRouter';
import { registerComponents } from './components';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import propertiesToJSON from '../util/property-parser';

// Register Layouts globally so that they are available by name
import DefaultLayout from '@/docs/layouts/DefaultLayout.vue';
import FullscreenLayout from '@/docs/layouts/FullscreenLayout.vue';

Vue.component('DefaultLayout', DefaultLayout);
Vue.component('FullscreenLayout', FullscreenLayout);

// Install Plugins
Vue.use(FundamentalVue);
Vue.use(Router);
Vue.use(VueI18n);

registerComponents(Vue);

function parseProp(): Promise<any> {
  return new Promise(resolve => {
    fetch('https://raw.githubusercontent.com/ryanpcmcquen/propertiesToJSON/master/sample.properties')
    .then(response => response.text())
    .then(text => {
      resolve(propertiesToJSON(text));
    });
  });
}
let propToJson = null;
async function parseIsDone() {
  propToJson = await parseProp();
  const i18n = new VueI18n({
    locale: navigator.language || 'en',
    messages: {
      'en': {
        message: Object.assign({},
          {
            hello: 'hello world',
            MRI_PA_TITLE: 'Patient Analytics',
            MRI_PA_FURTHER_SELECTIONS: '... and {0} other selections',
          },
          propToJson),
      },
      'zh-CN': {
        message: {
          hello: '你好',
          MRI_PA_TITLE: '病人分析',
          MRI_PA_FURTHER_SELECTIONS: '... 和 {0} 其他选择',
        },
      },
    },
  });

  const vm = new Vue({
    components: { App },
    router: DocsRouter,
    render: h => h(App),
    i18n,
  });
  vm.$mount('#app');
}

parseIsDone();
