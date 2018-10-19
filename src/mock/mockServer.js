/*
* 使用mockjs提供mock数据接口
* */
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/address',{code:0,data:data.address});
Mock.mock('/categorys',{code:0,data:data.categorys});
Mock.mock('/shops',{code:0,data:data.shops});



