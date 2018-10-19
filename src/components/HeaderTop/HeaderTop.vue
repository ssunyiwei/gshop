<template>
  <header class="header">
    <slot name="left"></slot>
    <div class="ellipsis">{{title}}</div>
    <slot name="right"></slot>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position: fixed
    left:0
    top:0
    width: 100%
    line-height:44px
    background-color:blueviolet
    z-index :9
    div
      width:40%
      margin:0 auto;
      text-align:center
      color:#fff
    span
      color:#fff
    .left
      position:absolute
      left:3%
      top:0
    .right
      position:absolute
      right:3%
      top:0

</style>