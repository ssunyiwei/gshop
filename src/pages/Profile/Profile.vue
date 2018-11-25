<template>
  <section>
    <headerTop title="我的"/>
    <nav class="profilenav">
      <router-link :to="userInfo._id ? '/userinfo' : '/login'">
        <div>
          <h1 v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</h1>
          <h2>{{userInfo.phone ? userInfo.phone : '暂无绑定手机号'}}</h2>
        </div>
      </router-link>
    </nav>
    <div class="mybutton" v-if="userInfo._id">
      <mt-button type="danger" size="large" @click="logout">退出登录</mt-button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import { MessageBox,Toast } from 'mint-ui'
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      logout(){
        MessageBox.confirm('确认退出吗?').then(action => {
          this.$store.dispatch('logout')
          Toast({
            message: '登出完成',
            position: 'bottom',
            duration: 1000
          });
        },action => {

        });
      }
    },
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
  .mybutton
    width:94%
    margin:100% auto 0
</style>
