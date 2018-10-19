<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    mounted(){
      //this.$store.dispatch('getAddress')
      this.getAddress()
    },
    methods:{
        ...mapActions(['getAddress'])
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
