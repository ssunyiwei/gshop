<template>
    <section>

    </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      alertText:String
    },
    methods:{
      closeTip(){
        this.$emit('closeTip')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
