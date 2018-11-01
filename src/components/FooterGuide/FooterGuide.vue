<template>
  <section>
    <ul class="footer">
      <li :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">外卖</li>
      <li :class="{on:'/search'===$route.path}" @click="goTo('/search')">搜索</li>
      <li :class="{on:'/order'===$route.path}" @click="goTo('/order')">订单</li>
      <li :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">我的</li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position:fixed
    left:0
    bottom:0
    width: 100%
    line-height:44px
    background-color:blueviolet
    border-top:1px solid #d5d7dc
    li
      float:left
      width:25%
      text-align:center
      color:#909090
    .on
      color:#fff
</style>
