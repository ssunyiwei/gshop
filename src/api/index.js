/*
* 包含n个接口函数
* */
import ajax from './ajax'

//获取地址
export const reqAddress = () => ajax('/address')
//分类列表
export const reqFoodCategorys = () => ajax('/categorys')
//商铺列表
export const reqShops = () => ajax('/shops')
//根据经纬度搜索商铺列表
export const reqSearchShop = (geohash,keyword) => ajax('/search_shops',{geohash,keyword})
//用户名密码登录
export const reqPwdLogin = (name,pwd) => ajax('/login_pwd',{name,pwd},'POST')
//发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode',{phone})
//手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax('/login_sms',{phone,code},'POST')
//获取用户信息
export const reqUserInfo = () => ajax('/userinfo')
//获取用户信息
export const reqLogout = () => ajax('/logout')
