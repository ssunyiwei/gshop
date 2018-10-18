<template>
  <section>
    <headerTop title="地址111111">
      <span class="left" slot="left">搜索</span>
      <span class="right" slot="right">登录/注册</span>
    </headerTop>
    <nav>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <ul class="swiper-slide nav">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
          <ul class="swiper-slide nav">
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="shoplist">
      <h1>附近商家</h1>
      <ShopList/>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    mounted(){
      new Swiper('.swiper-container',{
        loop:true
      })
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav
    padding-top:44px
    width: 100%
    li
      float:left
      width:25%
      line-height:60px
      text-align:center
  .shoplist
    width: 90%
    margin:0 auto
    h1
      color:#909090
</style>