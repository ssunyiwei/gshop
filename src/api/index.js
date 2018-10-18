/*
* 包含n个接口函数
* */
import ajax from './ajax'

//获取地址
export const reqAddress = (geohash) => ajax('/position/${geohash}')
