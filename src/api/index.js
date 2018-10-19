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
