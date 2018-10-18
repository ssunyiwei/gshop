<template>
  <section>
    <headerTop title="我的"/>
    <nav class="profilenav">
      <router-link to="/login">
        <div>
          <h1>登录/注册</h1>
          <h2>暂无绑定手机号</h2>
        </div>
      </router-link>
    </nav>
  </section>
</template>

<script type="text/ecmascript-6">
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  a
    text-decoration:none
  .profilenav
    width:100%;
    padding-top:44px
    background-color: #c753e2
    div
      width: 90%
      margin:0 auto
      line-height:32px
      color:#fff
      padding:10px 0
</style>
