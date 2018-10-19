<template>
  <section>
    <headerTop :title="address">
      <span class="left" slot="left">搜索</span>
      <span class="right" slot="right">登录/注册</span>
    </headerTop>
    <nav>
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <ul class="swiper-slide nav" v-for="(categorys,index) in categorysArr">
            <li v-for="(category,index) in categorys">{{category}}</li>
          </ul>
        </div>
      </div>
      <div class="loadstyle" v-else>加载中...</div>
    </nav>
    <div class="shoplist">
      <h1>附近商家</h1>
      <ShopList/>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    mounted(){
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    computed:{
      ...mapState(['address','categorys']),
      categorysArr(){
        const {categorys} = this
        const arr = []
        let minArr = []
        categorys.forEach(function(c){
          if(minArr.length===8){
            minArr = []
          }
          if(minArr.length===0){
            arr.push(minArr)
          }
          minArr.push(c)
        })
        return arr;
      }
    },
    watch:{
      categorys(valus){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop:true
          })
        })
      }
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loadstyle
    padding-top:44px
    color:blue
    line-height:120px
    text-align:center
    width: 100%
  .nav
    padding-top:44px
    width: 100%
    li
      float:left
      width:25%
      line-height:60px
      text-align:center
      color:blueviolet
  .shoplist
    width: 90%
    margin:0 auto
    h1
      color:#909090
</style>