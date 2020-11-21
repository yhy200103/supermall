<template>
    <!-- 接收过来的TabBar里面的tab-bar里面的插槽为tab-bar-item -->
    <tab-bar>
      <!-- 接收来的TabBaritem里面的具名插槽为图片和名字 -->
     <tab-bar-item path='/home'>
       <!-- 为什么是具名插槽,因为tab-bar-item中有两个插槽,所以用具名插槽 -->
       <img slot="item-icon" src="~assets/img/tabbar/shouye.svg">
       <img slot="item-icon-active" src="~assets/img/tabbar/shouye1.svg">
       <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path='/category'>
       <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg">
       <img slot="item-icon-active" src="~assets/img/tabbar/fenlei1.svg">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path='/cart'>
       <img slot="item-icon" src="~assets/img/tabbar/gouwuche.svg">
       <img slot="item-icon-active" src="~assets/img/tabbar/gouwuche_1.svg">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path='/profile' >
       <img slot="item-icon" src="~assets/img/tabbar/wode.svg">
       <img slot="item-icon-active" src="~assets/img/tabbar/wode1.svg">
       <div slot="item-text">我的</div>
     </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
 components:{
   TabBar,
   TabBarItem
 }
}
</script>

<style>

</style>