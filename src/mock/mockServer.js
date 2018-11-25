/*
* 使用mockjs提供mock数据接口
* */
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/address',{code:0,data:data.address});
Mock.mock('/categorys',{code:0,data:data.categorys});
Mock.mock('/shops',{code:0,data:data.shops});
Mock.mock(/\/sendcode/,function(options){
  var jsonobj = {}
  var phone = getQuery('phone',options.url.substr(options.url.indexOf('?')+1))
  if(/^158\d{8}$/.test(phone)){
    data.user.phone = phone
    jsonobj = {
      code:0,
      data:123456
    }
  }else{
    jsonobj = {
      code:1,
      msg:'请求错误'
    }
  }
  return jsonobj
});
Mock.mock(/\/login_sms/,function(options){
  var jsonobj = JSON.parse(options.body)
  if(jsonobj.code == 123456){
    setCookie('_id',data.user._id,1)
    jsonobj = {
      code:0,
      data:data.user
    }
  }else{
    jsonobj = {
      code:1,
      msg:'请求错误'
    }
  }
  return jsonobj
});
Mock.mock(/\/login_pwd/,function(options){
  var jsonobj = JSON.parse(options.body)
  if(jsonobj.name == 'sunwei' && jsonobj.pwd == 123456){
    setCookie('_id',data.user._id,1)
    jsonobj = {
      code:0,
      data:data.user
    }
  }else{
    jsonobj = {
      code:1,
      msg:'请求错误'
    }
  }
  return jsonobj
});
Mock.mock('/userinfo',{code:0,data:data.user});
Mock.mock('/logout',function(options){
  setCookie('_id',data.user._id,-1)
  var jsonobj = {
    code:0
  }
  return jsonobj
});

//根据url查询字符串里的键名获取其值
//options.url.substr(options.url.indexOf('?')+1)
function getQuery(name,urlstr){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = urlstr.match(reg);
  if (r!=null) return unescape(r[2]); return null;
}
//设置cookie
function setCookie(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
