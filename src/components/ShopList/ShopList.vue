<template>
  <section>
    <div v-for="(shop,index) in shops" v-if="shops.length">{{shop}}</div>
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