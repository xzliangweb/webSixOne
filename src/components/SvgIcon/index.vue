<template>
  <div>
    <!-- 测试svg 图标使用 -->
    <!-- svg图标外层容器节点，内部需要与use 标签结合使用 -->
    <svg :style="{ width, height }">
      <!-- XLink：href 执行用那个一个图标 属性值务必#icon 图标名字
          颜色更改使用的是fill
          -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  // xlink:href 属性值前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 提供使用的图标名字
  name: String,
  // 接收父组件传递颜色
  color: {
    type: String,
    default: "",
  },
  // 接收父组件传递过来的图标宽度
  width: {
    type: String,
    default: "16px",
  },
  // 接收父组件传递过来的图标高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>
<style lang="scss" scoped></style>
