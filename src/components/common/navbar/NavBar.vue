<template>
<!-- 头顶的名称封装 -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
  .nav-bar{
    line-height: 44px;
    height: 44px;
    display: flex;
    box-shadow: 0 1px 1px rgba(100, 100,100,0.1)
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
    /* 大盒子为flex布局，当左右有定义宽度时
    flex为1,则占据全部 */
    text-align: center;
  }
</style>