import React, { useEffect, useState } from 'react'
import "./Carparking.css"
export default function Showparking({Data,pricecar,pricebicke,pricecycle,totalPrice,totalitems,DeleteITems}) {
    const[Enablebicke,isEnablebicke]=useState(false)
    const[Enablecar,isEnablecar]=useState(false)
    const[Enablecycle,isEnablecyle]=useState(false)
    useEffect(()=>{
        if(pricebicke==0){
            console.log("This is a shahid and this is a founder and ceo fo the tech")
        }
        else{
            isEnablebicke(true)
        }

        // second
        if(pricecar==0){

        }
        else{
            isEnablecar(true)
        }  
           if(pricecycle==0){

        }
        else{
            isEnablecyle(true)
        }

    
    })
    const deleteDatavehcile=(id)=>{
        DeleteITems(id)
    }
  return (
    <div>
    <table id="customers">
  <thead>
    <tr>
      <th>SR</th>
      <th>Name</th>
      <th>NO plate</th>
      <th>Tex</th>
      <th>Time</th>
      <th>Actual Tex</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {Data.map((ele, index) => (
      <tr key={index}>
        <td>{index+1}</td>
        <td>{ele.categorie}</td>
        <td>{ele.vehicle}</td>
        <td>{ele.price}</td>
        <td>{ele.time}</td>
        <td>{ele.Actual_Tex}</td>
        <td onClick={()=>deleteDatavehcile(index)}>Remove</td>
        {/* Add other <td> elements for the remaining columns */}
      </tr>
    ))}
  </tbody>
</table>
<div className="items">
<div className="subitems">
{
    Enablebicke &&(
        <p>Total Bicke Price:{pricebicke}</p>
    )
}

{
    Enablecar &&(
        <p>Total Car Price:{pricecar}</p>

    )
}

{
    Enablecycle &&(
        <p>total cycle Price:{pricecycle}</p>

    )
}
   
</div>
<div className="allinfo">
<p>Total Vehicle: {totalitems} </p>
<p>Total Price: {totalPrice} </p>

</div>
</div>
    
    </div>
  )
}
