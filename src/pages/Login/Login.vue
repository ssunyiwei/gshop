<template>
  <section>
    <div class="back" @click="$router.back()">返回</div>
    <h1 class="title">硅谷外卖</h1>
    <ul class="qiehuan">
      <li :class="{action:loginWay}" @click="loginWay=true">短信登录</li>
      <li :class="{action:!loginWay}" @click="loginWay=false">密码登录</li>
    </ul>
    <div v-if="loginWay">
      <div class="inp">
        <input type="number" maxlength="11" placeholder="手机号" v-model="phone">
        <button :disabled="!(rightPhone && !computeTime)" :class="{butstyle:(rightPhone && !computeTime)}" @click="getCode">{{computeTime ? `已发送${computeTime}` : '获取验证码'}}</button>
      </div>
      <div class="inp">
        <input type="number" maxlength="8" placeholder="验证码">
      </div>
    </div>
    <div v-else>
      <div class="inp">
        <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
      </div>
      <div class="inp">
        <input type="text" maxlength="8" placeholder="密码" v-if="showPwd">
        <input type="password" maxlength="8" placeholder="密码" v-else>
        <div class="pwshowbtn" :class="{pwon:showPwd}" @click="showPwd=!showPwd">
          <div :class="{right:showPwd}"></div>
        </div>
      </div>
    </div>
    <div class="login">登 录</div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        loginWay:true,
        computeTime:0,
        phone:'',
        showPwd:false
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      getCode(){
        if(!this.computeTime){
          this.computeTime = 30
          const intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0){
              clearInterval(intervalId)
            }
          },1000)
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
    line-height:44px
    background-color:blueviolet
    margin:50px auto 0
    text-align :center
    border-radius:4px
    color:#fff
    width: 80%
</style>
