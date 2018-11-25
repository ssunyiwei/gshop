<template>
    <section>
      <ShopHeader></ShopHeader>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/shop/goods">点餐</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/ratings">评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/info">商家</router-link>
        </div>
      </div>
      <router-view></router-view>
    </section>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {
    components:{
      ShopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  a{
    text-decoration:none;
  }
  .tab
    overflow:hidden
    .tab-item
      float:left
      width:33.333333%
      line-height:42px
      text-align:center
      a
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        display block
        text-decoration:none
        color:#909090
        position relative
        &.router-link-active
          color blueviolet
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background blueviolet
</style>
