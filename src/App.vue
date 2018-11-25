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
      console.log(this.getCookie('_id'))
      Boolean(this.getCookie('_id')) && this.getUserInfo()
    },
    methods:{
      ...mapActions(['getAddress','getUserInfo']),
      //获取cookie
      getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++)
        {
          var c = ca[i].trim();
          if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
      }
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
