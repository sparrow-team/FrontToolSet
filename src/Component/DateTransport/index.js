import React, { useState } from "react";
import style from "./index.module.scss";
import { format } from "date-fns";
import {showToast} from '@/common'
function DateTransport(props) {
  let now = new Date().getTime();
  const [nowTime, setNowTime] = useState(now);
  const [time1, setTime1] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [time2, setTime2] = useState('');
  function transportToDate() {}
  function time1Change(e) {
    let val = e.target.value;
    setTime1(val);
  }
  function Date2Change(e) {
    let value = e.target.value;
    setDate2(value);
  }
  function DateToTime(){
    try {
      if(parseInt(date2).toString()!='NaN'){
        setTime2(new Date(date2).getTime())
      }else{
        throw '输入非法'
      }
      
    } catch (error) {
      showToast('输入时间戳有误')
    }
    
  }
  function TimeToDate(){
    try {
      setDate1(format(parseInt(time1),"yyyy-MM-dd HH:mm:SS"))
    } catch (error) {
      showToast('输入时间有误')
    }
    
  }
  return (
    <div className={style["date-transport"]}>
      <div>
        当前时间戳：{nowTime}<span className={style["unit"]}>毫秒</span>,{parseInt(nowTime / 1000)}
        <span className={style["unit"]}>秒</span>
      </div>
      <div className={style["block"]}>
        <div className={style["left-name"]}>
          <div>时间戳：</div>
          <div>时间：</div>
        </div>
        <div className={style["left-input"]}>
          <input
            className={style["com-input"]}
            type="text"
            onChange={time1Change}
            value={time1}
          />
          <input
            className={style["com-input"]}
            type="text"
            value={date2}
            onChange={Date2Change}
          ></input>
        </div>
        <div className={style['middle-action']}>
          <div className={style["action"]} onClick={TimeToDate}>转换</div>
          <div className={style["action"]} onClick={DateToTime}>转换</div>
        </div>
        <div className={style["right-name"]}>
          <div className={style["right"]}>时间：</div>
          <div className={style["right"]}>时间戳:</div>
        </div>
        <div className={style["right-input"]}>
          <input
            className={style["com-input"]}
            type="text"
            value={date1}
            onChange={() => {}}
          ></input>
          <input
            className={style["com-input"]}
            type="text"
            value={time2}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
export default DateTransport;
