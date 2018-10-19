/**
 * Created by sunwei on 2018/10/18.
 */
import axios from 'axios'
import promise from 'promise'

export default function ajax(url,data={},type='GET'){
  return new promise(function(resolve,reject){
    let promise
    if(type==='GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if(dataStr !== ''){
      dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
      promise = axios.get(url)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(function(response){
      resolve(response.data)
    }).catch(function(error){
      reject(error)
    })
  })
}
