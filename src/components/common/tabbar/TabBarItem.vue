<template>
<!--这是是导航栏里面的分组
     分组里有两个插槽,分别是名字和图片
 -->
  <div class="tab-bar-item" @click="itemClick">
    <!-- 因为插槽里面的内容会被替换,所以用div包裹 -->
    <!--  isActive匹配的是活跃的,这里是!isActive,所以为不活跃的  -->
  <div v-if="!isAcitve"> <slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>                                    ``
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
   computed:{
      isAcitve(){
              //  当前活跃的路径  与 this.path(4个路径),如果相等的话为true,其他为false
         return this.$route.path.indexOf(this.path)!==-1
        //  indexOf如果等于-1就没找到,不等于-1就找到了
      },
      activeStyle(){
        // 当前是否活跃,是的话他的color为动态传入的颜色,否则为默认颜色red
        return this.isAcitve?{color:this.activeColor}:{}
      }
   },
   methods:{
     itemClick(){
       this.$router.replace(this.path)
     }
   }
   
}
</script>

<style>

.tab-bar-item{
  /* 一比一平分 */
  flex: 1;
  /* 左右居中 */
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
</style>