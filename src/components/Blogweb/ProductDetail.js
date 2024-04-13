import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BlogApi } from './BlogApi'
export default function ProductDetail() {
    let {id}=useParams()
    const[blofData,setblog]=useState()
    console.log(id)
    useEffect(()=>{
        const datacheck=BlogApi.find((blog)=>blog.name===id)
        if(datacheck){
            setblog(datacheck)
        }
        else{
            alert("No data")
        }

    },[id])
    console.log(blofData)
  return (
    <div>

    {
        blofData &&(
<>

<img src={blofData.img} alt="" />
<p>{blofData.price}</p>
<Link to={`/Booking/${blofData.name}`}>
<button>Add</button>
</Link>
</>
        )
    }
    </div>
  )
}
