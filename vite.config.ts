import { ConfigEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 引入svg 的图标
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
//  引入mock 数据
// import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置使用@代替 src的tsconfig
      },
    },
    // scss 全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
