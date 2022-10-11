import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vue2 app 1', //子应用名称
    entry: '//localhost:10001',//子应用端口号
    container: '#v2-app-1',//子应用挂载的元素
    activeRule: '/v2-app-1',//子应用路径
  },
  {
    name: 'vue2 app 2',
    entry: '//localhost:10002',
    container: '#v2-app-2',
    activeRule: '/v2-app-2',
  },
]);
// 启动 qiankun
start();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
