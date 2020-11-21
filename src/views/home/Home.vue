<template>
<!-- 首页 -->
  <div id="home">
     <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
     <tab-control :tabcontrol="tabcontrol" @tabClick="tabClick"></tab-control>
                         <!-- showGoods计算属性方法 -->
     <goods-list :goodList="showGoods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/Feature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data(){
    return{
      banners:[],
      recommends:[],
      tabcontrol:['流行','新款','精选'],
      goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',//默认当前类型为pop
    }
  },
  created(){
    //调用methods里面的方法
    this. getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    // 事件监听方法
    // 当Index为0，currentType就为Pop
     tabClick(index){
       switch(index){
         case 0:this.currentType='pop'
         break;
         case 1:this.currentType='new'
         break;
         case 2:this.currentType='sell'
         break;
       }
    },


    //网络请求方法
    getHomeMultidata(){
    //请求多个数据,调用home.js里面的getHomeMultidata方法
      getHomeMultidata().then(res=>{
         this.banners=res.data.banner.list
         this.recommends=res.data.recommend.list
    })
    },
    getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          //把数据一个一个放入data的数组中
           this.goods[type].list.push(...res.data.list)
           //拿到数据后，要把页码加1，下次调用时添加的就是下一页的数据
           this.goods[type].page+=1
    })
    },
   
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style>
#home{
  padding-top: 44px;
}
.home-nav{
     /*            --color-tint为base.css定义的颜色 */
     background-color: var(--color-tint);
     color: var(--color-background);
     position: fixed;
     left: 0;
     top: 0;
     right: 0;
     z-index: 9;
   }
</style>