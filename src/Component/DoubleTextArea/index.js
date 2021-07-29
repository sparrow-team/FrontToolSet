import React from 'react'
import './index.scss';
function DoubleTextArea(){
    return (
        <div className="double-textarea">
            <textarea class="textarea-common textarea-first" rows="10" clos="30">
                
            </textarea>
            <div className="double-textarea-action">
                <div>编码</div>
                <div>解码</div>
            </div>
            <textarea className="textarea-common textarea-second" rows="10" clos="30">

            </textarea>
        </div>
    )
}
export default DoubleTextArea