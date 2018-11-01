<template>
  <section>
    <mt-cell :title="shop" value="说明文字" v-for="(shop,index) in shops" v-if="shops.length"></mt-cell>
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

</style>