<template>
  <section>
    <form @submit.prevent="login">
      <div class="back" @click="$router.back()">返回</div>
      <h1 class="title">硅谷外卖</h1>
      <ul class="qiehuan">
        <li :class="{action:loginWay}" @click="loginWay=true">短信登录</li>
        <li :class="{action:!loginWay}" @click="loginWay=false">密码登录</li>
      </ul>
      <div v-if="loginWay">
        <div class="inp">
          <input type="number" maxlength="11" placeholder="手机号" v-model="phone">
          <button :disabled="!(rightPhone && !computeTime)" :class="{butstyle:(rightPhone && !computeTime)}" @click.prevent="getCode">{{computeTime ? `已发送${computeTime}` : '获取验证码'}}</button>
        </div>
        <div class="inp">
          <input type="number" maxlength="8" placeholder="验证码" v-model="code">
        </div>
      </div>
      <div v-else>
        <div class="inp">
          <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
        </div>
        <div class="inp">
          <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
          <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-else>
          <div class="pwshowbtn" :class="{pwon:showPwd}" @click="showPwd=!showPwd">
            <div :class="{right:showPwd}"></div>
          </div>
        </div>
      </div>
      <div class="login">
        <mt-button type="primary" size="large">登 录</mt-button>
      </div>
    </form>
  </section>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui'
  import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'

  export default {
    data(){
      return {
        loginWay:true,
        computeTime:0,
        showPwd:false,
        phone:'',
        code:'',
        name:'',
        pwd:'',
        alertText:'',
        alertShow:false
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      async getCode(){
        if(!this.computeTime){
          this.computeTime = 30
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0){
              clearInterval(this.intervalId)
            }
          },1000)

          //发送ajax请求
          const result = await reqSendCode(this.phone)
          console.log(result)
          if(result.code === 1){
            //显示提示
            MessageBox('提示',result.msg)
            //停止倒计时
            if(this.computeTime){
              this.computeTime = 0
              clearInterval(this.intervalId)
              this.intervalId = null
            }
          }
        }
      },
      async login(){
        let result
        if(this.loginWay){
          const {rightPhone,phone,code} = this
          if(!this.rightPhone){
            MessageBox('提示', '手机号不正确')
            return
          }else if(!/^\d{6}$/.test(code)){
            MessageBox('提示', '验证码6位数字')
            return
          }
          result = await reqSmsLogin(phone,code)
        }else{
          const {name,pwd} = this
          if(!this.name){
            MessageBox('提示', '用户名必须指定')
            return
          }else if(!this.pwd){
            MessageBox('提示', '密码必须指定')
            return
          }
          result = await reqPwdLogin(name,pwd)
        }
        //停止计时
        if(this.computeTime){
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = null
        }
        //结果处理
        if(result.code === 0){
          const user = result.data
          //将user保存到vuex的state
          this.$store.dispatch('recordUser',user)
          //去个人中心
          this.$router.replace('/profile')
        }else{
          const msg = result.msg
          MessageBox('提示',msg)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .back
    width: 90%
    margin:20px auto 0
  .title
    width: 100%
    color:blueviolet
    text-align :center
    font-size:32px
    margin:50px 0
  .qiehuan
    width: 70%
    margin:30px auto
    overflow:hidden
    li
      width: 50%
      text-align :center
      float:left
    .action
      color:blueviolet
  .inp
    position:relative
    margin:20px auto
    width: 80%
    input
      line-height:32px
      width: 100%
    button
      right:10px
      top:7px
      position:absolute
      color:#909090
    .butstyle
      color:blueviolet
    .pwshowbtn
      position:absolute
      right:10px
      top:12px
      width:30px
      height:15px
      background-color:#ececec
      border-radius:15px
      div
        width:15px
        height:15px
        background-color:#fff
        border-radius:15px
        box-shadow: 1px 1px 1px #888888;
      .right
        transition transform .3s
        transform translateX(15px)
    .pwon
      background-color:blueviolet
  .login
    margin:50px auto 0
    width: 80%
</style>
