import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { showToast } from "@/common";
import md5 from 'md5-js'
function Md5Encode() {
  const [input, setInput] = useState("");
  const [res16,setRes16] = useState("");
  const [res32,setRes32] = useState("");
  function changeInput(e) {
    let val = e.target.value;
    setInput(val);
  }
  useEffect(()=>{
      if(input){
        let output=md5(input)
        setRes32(output)
        setRes16(output.substr(8,16))
      }else{
        setRes32('')
        setRes16('')
      }
      
  },[input])
  return (
    <div className={style["md5-encode"]}>
      <div>
        <input className={style["input"]} type="text" onChange={changeInput}></input>
      </div>
      <div className={style["out-put"]}>
        <div><div className={style["span"]}>MD5结果16位（小写）：</div>{res16.toLowerCase()}</div>
        <div><div className={style["span"]}>MD5结果16位（大写）：</div>{res16.toUpperCase()}</div>
        <div><div className={style["span"]}>MD5结果32位（小写）：</div>{res32.toLowerCase()}</div>
        <div><div className={style["span"]}>MD5结果32位（大写）：</div>{res32.toUpperCase()}</div>
      </div>
    </div>
  );
}
export default Md5Encode;
