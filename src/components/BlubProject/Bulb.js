import React, { useState } from 'react'
import off from "./img/pic_bulboff.gif"
import onn from "./img/pic_bulbon.gif"
import "./Blub.css"
export default function Bulb() {
  const[change,setchange]=useState(off)
  const[Enabled,setEnable]=useState(false)
  const[EnabledBtn,setEnablebtn]=useState("Off")
const changeimg=()=>{
  if(Enabled==false){
    setchange(onn)
    setEnable(true)
    setEnablebtn("On")
  }
  else{
    setchange(off)
    setEnable(false)
setEnablebtn("Off")
  }
}
  return (
    <div>
    <h4 className='mt-3'>Bulb project</h4>
    <p>Project No:2</p>

    <img src={change} onClick={changeimg} alt="" /> <br />
    <button class="button-18" role="button"  onClick={changeimg}>{EnabledBtn}</button>
    </div>
  )
}
