<template>
  <div>
    <!-- 测试svg 图标使用 -->
    <!-- svg图标外层容器节点，内部需要与use 标签结合使用 -->
    <svg style="width: 30px; height: 30px;">
        <!-- XLink：href 执行用那个一个图标 属性值务必#icon 图标名字
        颜色更改使用的是fill
        -->
      <use xlink:href="#icon-phone" fill="pink"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped></style>
