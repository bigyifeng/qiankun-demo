# 此项目是用来从 0-1 探索 qiankun 微前端框架的可行性

## 主应用技术点

### RegistrableApp 函数参数

```js
registerMicroApps([
  {
    name: "vue2 app 1", //子应用名称
    entry: "//localhost:10001", //子应用端口号
    container: "#v2-app-1", //子应用挂载的元素
    activeRule: "/v2-app-1", //子应用路径匹配规则，匹配其中一个则渲染对应子应用
    props: {
      params1: "zs",
      params2: 123,
      params3: {
        name: "zs",
        age: 15,
      },
    },
  },
  {
    name: "vue2 app 2",
    entry: "//localhost:10002",
    container: "#v2-app-2",
    activeRule: "/v2-app-2",
  },
]);
```

1. name 值唯一
2. 当浏览器 url 发生变化时，会自动检查每一个微应用注册的 activeRule 规则，符合规则的应用将会被自动激活

### start 启动项目

### setDefaultMountApp

初始化完成后进入默认的子应用

### runAfterFirstMounted

第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。

## 注意： qiankun 官网暂不支持 vite 打包的项目

解决方案： 使用 vite-plugin-qiankun 包，暂未使用过，不过看有部分人是使用的这个