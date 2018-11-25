/*
* 通过mutation间接更新state的多个方法对象
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout
} from '../api'

export default {
  async getAddress ({commit,state}) {
    const result = await reqAddress()
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops ({commit,state}) {
    const result = await reqShops()
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步获取user数据（已有数据用同步）
  recordUser ({commit},userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if(result.code===0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER_INFO)
    }
  },
}


