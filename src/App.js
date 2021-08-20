import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import {getAll, getDefault, getAutoSelectCom, setAutoSelectCom, logUseCom, showToast} from './common.js'
function App() {
  const [list,setList]=useState([])
  const [ShowComp,setShowComp]=useState()
  const [showName,setShowName]=useState('')
  const [autoSelected,setAutoSelected]=useState(getAutoSelectCom())
  let allList = getAll();
  useEffect(()=>{
    setList(allList);
    if(autoSelected){
      let index = getDefault()
      if(index>-1)
      setShowComp(allList[index])
    }
  },[])
  useEffect(()=>{
    if(ShowComp){
      logUseCom(ShowComp)
    }
  },[ShowComp])
  const close = ()=>{
    setShowComp(null);
  }
  const select = (index)=>{
    if(allList[index].status==1){
      setShowComp(allList[index])
    }else{
      showToast('开发中');
    }
    
  }
  const autoSelect = () =>{
    setAutoSelectCom()
    setAutoSelected(getAutoSelectCom())
  }
  return (
    <div className="App">
      <div className="default-block">
      是否自动打开上次工具
      <div className="default-open">
        <input type="checkbox" className="the-helper" checked={autoSelected} readOnly/>
        <label onClick={autoSelect}></label>
      </div>
      </div>
      <div className="content">
        {
          list && list.map((item,index)=>{
            return (
              <div key={item.name} className="item" onClick={()=>{select(index)}}>{item.name}</div>
            )
          })
        }
      </div>
      {
        ShowComp && 
        <div className="content-selected">
            <div className="close-icon" onClick={close}></div>
            <div className="show-name">{ShowComp.name}</div>
            <React.Suspense fallback={<div></div>}>
              <ShowComp.comp></ShowComp.comp>
            </React.Suspense>
        </div>
      }
    </div>
  );
}

export default App;
