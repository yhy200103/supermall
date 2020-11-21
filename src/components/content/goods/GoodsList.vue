<template>
  <div class="goods">
    <good-list-item v-for="item in goodList" :goodsItem="item">
       
    </good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  components: {
    GoodListItem,
  },
  props: {
    goodList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  /* 平分空间，给每个盒子相同Margin */
  justify-content: space-around;
}
</style>