import {lazy} from "react";
const UrlEncode = lazy(()=> import(/**UrlEncode */ './Component/UrlEncode'))
const Base64Code = lazy(()=> import(/**Base64Code */ './Component/Base64Code'))
let list =[{
    id:1,
    name:'URL编码/解码',
    comp:UrlEncode,
  },{
    id:2,
    name:'BASE64加密/解密',
    comp:Base64Code
  },{
    id:3,
    name:'UNIX时间戳转换',
    comp:UrlEncode
  },{
    id:4,
    name:'md5加密/解密',
    comp:UrlEncode
  },{
    id:5,
    name:'二维码生成',
    comp:UrlEncode
  },{
    id:6,
    name:'二维码识别',
    comp:UrlEncode
  },{
    id:7,
    name:'色值转换',
    comp:UrlEncode
  },{
    id:8,
    name:'虚拟银行卡号生成',
    comp:UrlEncode
  },{
    id:9,
    name:'虚拟身份证号生成',
    comp:UrlEncode
  }];
export const getDefault=()=>{
  let _lastUsed= localStorage.getItem('_lastUsed');
  if(_lastUsed!=''){
    return _lastUsed;
  }
  return -1;
}
export const getUsed = () =>{

}
export const getAll = () => {
    return list;
}
export const getAutoSelectCom = () => {
  let autoSelected = localStorage.getItem('_autoSelected');
  if(autoSelected=='true'){
    return true;
  }
  return false;
}
export const setAutoSelectCom = () => {
  let autoSelected = localStorage.getItem('_autoSelected');
  if(autoSelected=='true'){
    autoSelected=true
  }else{
    autoSelected=false;
  }
  localStorage.setItem('_autoSelected',!autoSelected)
}
export const logUseCom = (comp) => {
  let key='_useLog';
  let useLog = localStorage.getItem(key);
  if(useLog){
    try {
      useLog=JSON.parse(useLog)
    } catch (error) {
      useLog={}
    }
  }else{
    useLog={}
  }
  let useTimes=useLog[comp.id+key];
  if(useTimes){
    useTimes=useTimes+1
  }else{
    useTimes=1
  }
  useLog[comp.id+key]=useTimes;
  localStorage.setItem(key,JSON.stringify(useLog))
  localStorage.setItem('_lastUsed',comp.id)
}