<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabcontrol"
     class="tab-control-item" :class="{active:index===current}"
     @click="controlClick(index)">
     
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
   props:{
     tabcontrol:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data(){
     return{
       current:0
     }
   },
   methods:{
    controlClick(index){
      this.current=index;
      this.$emit('tabClick',index)
    }
   }
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    z-index: 9;
    }
  .tab-control-item{
    height: 40px;
    line-height: 40px;
    flex: 1;
    
     }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    font-size: 17px;
  }
   .tab-control-item span{
     transition: 0.2s;
    padding:5px
  }
</style>