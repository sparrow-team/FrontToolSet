import {lazy} from "react";
const UrlEncode = lazy(()=> import(/*webpackChunkName:"UrlEncode" */ './Component/UrlEncode'))
const Base64Code = lazy(()=> import(/*webpackChunkName: "Base64Code" */ './Component/Base64Code'))
const DateTransport = lazy(()=> import(/*webpackChunkName:"DateTransport" */ './Component/DateTransport'))
const Md5Encode = lazy(()=> import(/*webpackChunkName:"Md5Encode" */ './Component/Md5Encode'))
const QrCode = lazy(()=> import(/*webpackChunkName:"Qrcode" */ './Component/Qrcode'))
let list =[{
    id:1,
    name:'URL编码/解码',
    comp:UrlEncode,
    status:1,
  },{
    id:2,
    name:'BASE64加密/解密',
    comp:Base64Code,
    status:1,
  },{
    id:3,
    name:'UNIX时间戳转换',
    comp:DateTransport,
    status:1,
  },{
    id:4,
    name:'MD5加密',
    comp:Md5Encode,
    status:1,
  },{
    id:5,
    name:'二维码生成',
    comp:QrCode,
    status:1,
  },{
    id:6,
    name:'二维码识别',
    comp:UrlEncode,
    status:0,
  },{
    id:7,
    name:'色值转换',
    comp:UrlEncode,
    status:0,

  },{
    id:8,
    name:'虚拟银行卡号生成',
    comp:UrlEncode,
    status:0,
  },{
    id:9,
    name:'虚拟身份证号生成',
    comp:UrlEncode,
    status:0,
  },{
    id:10,
    name:'MD5解密',
    comp:UrlEncode,
    status:0,
  }];
export const getDefault=()=>{
  let _lastUsed= localStorage.getItem('_lastUsed');
  let index =list.map((item)=>item.id).indexOf(parseInt(_lastUsed))
  return index;
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
export const showToast = (text)=>{
  let ele= document.getElementById("froot-tool-set-toast");
  if(ele){

  }else{
    ele=document.createElement("div");
    ele.className="froot-tool-set-toast";
    ele.id="froot-tool-set-toast";
    document.body.appendChild(ele);
  }
  ele.innerText=text||'请检查您的输入';
  ele.style.display="block"
  setTimeout(()=>{
    ele.style.display="none";
  },1500)
}