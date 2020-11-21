<template>
   <div class="good-item">
     <img :src="goodsItem.show.img">
     <div class="goods-info">
       <p>{{goodsItem.title}}</p>
       <span class="price">{{goodsItem.price}}</span>
       <span class="collect">{{goodsItem.cfav}}</span>
     </div>
   </div>
</template>

<script>
export default {
   props:{
     goodsItem:{
       type:Object,
       default(){
         return {}
       }
     }
   }
}
</script>

<style>
  .good-item{
        width: 49%;
    padding-bottom: 40px;
    position: relative;
  }
  .good-item img{
    width: 100%;
    /* 图片圆角 */
    border-radius: 5px;
  }
  /* 字体样式 */
  .goods-info{
     font-size: 12px;
     /*  */
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    /* overflow: hidden;超出内容修剪掉*/
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
     overflow: hidden;
     /*text-overflow: ellipsis;	
     显示省略符号来代表被修剪的文本。*/
     text-overflow: ellipsis;
     /* 段落不换行 */
     white-space: nowrap;
     margin-bottom: 3px;

  }
  .goods-info .price{
   color: var(--color-high-text);
   margin-right: 20px;
  }
  .goods-info .collect{
   position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/shoucang.svg') 0 0/14px 14px;
  }
</style>