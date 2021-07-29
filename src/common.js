import React,{lazy} from "react";
const DoubleTextArea = lazy(()=> import(/**DoubleTextArea */ './Component/DoubleTextArea'))
let list =[{
    name:'URL编码/解码',
    comp:DoubleTextArea
  },{
    name:'UNIX时间戳转换',
    comp:DoubleTextArea
  },{
    name:'md5加密',
    comp:DoubleTextArea
  }];
export const getLatest=()=>{

}
export const getUsed = () =>{

}
export const getAll = () => {
    return list;
}