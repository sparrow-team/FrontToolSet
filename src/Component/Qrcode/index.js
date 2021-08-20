import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import QRCode from "qrcode";
function QrcodeSelf() {
  const [input, setInput] = useState("");
  const [imgData, setImageData] = useState();
  function InputChange(e) {
    let val = e.target.value;
    setInput(val);
  }
  function DownLoad(){
    let aLink = document.createElement('a');
    let blob = convertBase64ToBlob(imgData); //new Blob([content]);
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = 'dream'+new Date().getTime()+".png";
    aLink.href = URL.createObjectURL(blob);
    aLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));//兼容火狐
  }
  /** 将base64转换为文件对象
 *  @param {String} base64 base64字符串
 * */
   function convertBase64ToBlob(base64){
    var base64Arr = base64.split(',');
    var imgtype = '';
    var base64String = '';
    if(base64Arr.length > 1){
        //如果是图片base64，去掉头信息
        base64String = base64Arr[1];
        imgtype = base64Arr[0].substring(base64Arr[0].indexOf(':')+1,base64Arr[0].indexOf(';'));
    }
    // 将base64解码
    var bytes = atob(base64String);
    //var bytes = base64;
    var bytesCode = new ArrayBuffer(bytes.length);
     // 转换为类型化数组
    var byteArray = new Uint8Array(bytesCode);
    
    // 将base64转换为ascii码
    for (var i = 0; i < bytes.length; i++) {
        byteArray[i] = bytes.charCodeAt(i);
    }
   
    // 生成Blob对象（文件对象）
    return new Blob( [bytesCode] , {type : imgtype});
};
  useEffect(() => {
    if (input) {
      QRCode.toDataURL(input)
        .then((url) => {
          setImageData(url);
        })
        .catch((err) => {
          setImageData(undefined);
        });
    } else {
      setImageData(undefined);
    }
  }, [input]);
  return (
    <div className={style["qrcode-block"]}>
      <div className={style["input-block"]}>
        <textarea className={style["input"]} onChange={InputChange} value={input} placeholder="此处输入需要生成二维码的内容，点击二维码进行下载"></textarea>
      </div>
      <div className={style["show-content"]}>
        {imgData ? (
          <img className={style["img-block"]} src={imgData} onClick={DownLoad}></img>
        ) : (
          <div className={style["img-block"]}></div>
        )}
      </div>
    </div>
  );
}
export default QrcodeSelf;
