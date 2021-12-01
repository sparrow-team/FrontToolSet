import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
const IdCard = () => {
    const [cardNum,setCardNum]=useState('')
  const getIdCard = () => {
    var coefficientArray = [
      "7",
      "9",
      "10",
      "5",
      "8",
      "4",
      "2",
      "1",
      "6",
      "3",
      "7",
      "9",
      "10",
      "5",
      "8",
      "4",
      "2",
    ]; // 加权因子
    var lastNumberArray = [
      "1",
      "0",
      "X",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ]; // 校验码
    var address = "411122"; // 住址
    var birthday = "19810101"; // 生日
    var s =
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (var i in array) {
      total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    var id_no_String = address + birthday + s + lastNumber;
    return id_no_String
  };
  const clickGet = () => {
    setCardNum(getIdCard())
  }
  return (
    <div>
      <div className={style["button"]} onClick={clickGet}>生成身份证号</div>
      <div>{cardNum}</div>
    </div>
  );
};
export default IdCard
