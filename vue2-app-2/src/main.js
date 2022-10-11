
import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router";

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render (props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap () {
  console.log("v2app2被项目引入");
}
export async function mount (props) {
  console.log("v2app2被挂载", props);
  render(props);
}
export async function unmount () {
  console.log("v2app取消挂载");

  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}