<template>
  <section>
    <div class="back" @click="$router.back()">返回</div>
    <h1 class="title">硅谷外卖</h1>
    <ul class="qiehuan">
      <li class="action">短信登录</li>
      <li>密码登录</li>
    </ul>
    <div class="on">
      <div class="inp">
        <input type="number" maxlength="11" placeholder="手机号">
        <button disabled="disabled">获取验证码</button>
      </div>
      <div class="inp">
        <input type="number" maxlength="8" placeholder="验证码">
      </div>
    </div>
    <div style="display: none;">
      <div class="inp">
        <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
      </div>
      <div class="inp">
        <input type="tel" maxlength="8" placeholder="密码">
      </div>
    </div>
    <div class="login">登 录</div>
  </section>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .back
    width: 90%
    margin:10px auto 0
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
    margin:10px auto
    width: 80%
    input
      line-height:32px
      width: 100%
    button
      right:10px
      top:7px
      position:absolute
  .login
    line-height:44px
    background-color:blueviolet
    margin:50px auto 0
    text-align :center
    border-radius:4px
    color:#fff
    width: 80%
</style>