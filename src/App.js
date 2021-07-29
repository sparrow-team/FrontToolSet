import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import {getAll } from './common.js'
function App() {
  const [list,setList]=useState([])
  const [ShowComp,setShowComp]=useState()
  useEffect(()=>{
    let allList = getAll();
    setList(allList);
    setShowComp(allList[0].comp)
  },[])
  return (
    <div className="App">
      <div className="content">
        {
          list && list.map((item,index)=>{
            return (
              <div key={item.name} className="item">{item.name}</div>
            )
          })
        }
      </div>
      {
        ShowComp && 
        <div className="content-selected">
            <React.Suspense fallback={<div></div>}>
              <ShowComp></ShowComp>
            </React.Suspense>
        </div>
      }
    </div>
  );
}

export default App;
