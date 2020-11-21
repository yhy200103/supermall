<template>
<!-- 轮播图下面的圆圈 -->
   <div class="recommend">
     <div v-for="item in recommends" class="recommends-item">
       <a :href="item.link">
         <img :src="item.image">
         <div class="recommends-title">{{item.title}}</div>
       </a>
     </div>
   </div>

</template>

<script>
export default {
   props:{
     recommends:{
       type:Array,
       default(){
         return []
       }
     }
   }
}
</script>

<style>
   .recommend{
     display: flex;
     width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
   }
   .recommends-item{
       flex: 1;
   }
   .recommends-item img{
     width: 80%;
   }
  
</style>