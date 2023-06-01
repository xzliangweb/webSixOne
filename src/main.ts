import { createApp } from "vue";
import App from "@/App.vue";

// 引入element-plus 插件与样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 国际化引入
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

//  获取env 的环境配置
// console.log(import.meta.env);

// svg的配置代码
import "virtual:svg-icons-register";

// 引入自定义插件对象注册整个项目全局组件
import gloalComponent from "@/components";

// console.log(gloalComponent);

// 引入模板的全局的样式
import "@/styles/index.scss";

// 引入路由
import router from "./router";

// 引入pinia 
import pinia from "./store";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

// 安装仓库
app.use(pinia)

//  安装自定义插件
app.use(gloalComponent);
//  注册路由
app.use(router);

app.mount("#app");
