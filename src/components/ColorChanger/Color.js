import React, { useState } from 'react'
import { ColorApi } from './ColorApi'
import "./Color.css"
console.log(ColorApi)
export default function Color() {
    const[color,setcolor]=useState(ColorApi)
    const[bg,setbg]=useState()
    const colorchange=(color)=>{
        console.log(color)
        setbg(color)
        document.body.style.backgroundColor=color
    }
  return (
    <div style={{textAlign:"center",padding:"10px"}}>

    {
        color.map((ele,index)=>(
            <span key={index}>
            <button style={{backgroundColor:ele.color,margin:"10px",padding:"10px",color:"black",fontWeight:"600"}} onClick={()=>colorchange(ele.name)}>{ele.name}</button>
            </span>
        ))
    } 
    </div>
  )
}
