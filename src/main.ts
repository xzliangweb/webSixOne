import { createApp } from "vue";
import App from "@/App.vue";

// 引入element-plus 插件与样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 国际化引入
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'



const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount("#app");
