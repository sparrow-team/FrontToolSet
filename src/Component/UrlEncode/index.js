import React, { useState } from 'react'
import './index.scss';
function UrlEncode(props){
    const [value1,setValue1]=useState('')
    const [value2,setValue2]=useState('')
    const Action1=()=>{
        setValue2(encodeURIComponent(value1))
    }
    const Action2=()=>{
        setValue2(decodeURIComponent(value1))
    }
    const value1Change=(e)=>{
        // console.log(val)
        setValue1(e.target.value);
    }
    return (
        <div className="double-textarea">
            <textarea className="textarea-common textarea-first" rows="10" clos="30" value={value1} onChange={value1Change}>
                
            </textarea>
            <div className="double-textarea-action">
                <div onClick={Action1}>{'编码'}</div>
                <div onClick={Action2}>{'解码'}</div>
            </div>
            <textarea className="textarea-common textarea-second" rows="10" clos="30" value={value2}>

            </textarea>
        </div>
    )
}
export default UrlEncode