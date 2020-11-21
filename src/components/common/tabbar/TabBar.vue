<template>
<!-- /* 这个是整个导航栏的样式 */
   导航栏放入插槽,插槽的内容就是TabBarltem里面的插槽
 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

};
</script>

<style>

#tab-bar {
  display: flex;
  background-color: #f2f2f2;

  /* 把框放到最下面 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>