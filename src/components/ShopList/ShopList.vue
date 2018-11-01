<template>
  <section>
    <div class="list" v-for="(shop,index) in shops" v-if="shops.length">{{shop}}</div>
    <div v-else>加载中...</div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed:{
        ...mapState(['shops'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    width:100%
    height:50px
    line-height:50px
    border-bottom:1px solid #d5d7dc
</style>
