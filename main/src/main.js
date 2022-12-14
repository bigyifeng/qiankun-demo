import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vue2 app 1', //子应用名称
    entry: '//localhost:10001',//子应用端口号
    container: '#v2-app-1',//子应用挂载的元素
    activeRule: '/v2-app-1',//子应用路径匹配规则，匹配其中一个则渲染对应子应用
    props: {
      params1: 'zs',
      params2: 123,
      params3: {
        name: 'zs',
        age: 15
      },
    },
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
setDefaultMountApp('/v2-app-2')//默认进入的微应用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
