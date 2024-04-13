import React, { useEffect, useState } from 'react'
import "./Carparking.css"
import { Container,Row,Col } from 'react-bootstrap'
import Showparking from './Showparking'
export default function CardParking() {

    const[Data,setdata]=useState([])
    let totalitems=Data.length;
    console.log(totalitems,"this is a length of the Data")
    const totalPrice=Data.reduce((total,item)=>{
        return total+item.price;
    },0)
    const pricecar=Data.filter(item=>item.categorie==="car").reduce((price,item)=>{
        return price+item.price;
    },0) 
     const pricebicke=Data.filter(item=>item.categorie==="bicke").reduce((price,item)=>{
        return price+item.price;
    },0) 
      const pricecycle=Data.filter(item=>item.categorie==="cycle").reduce((price,item)=>{
        return price+item.price;
    },0)


    console.log("This is a car",pricecar)
console.log(totalPrice)
    const[bicke,setbicke]=useState("")
    const[car,setcar]=useState("")
    const[cycle,setcyle]=useState("")
    const[Enablebicke,isEnablebicke]=useState(false)
    const[Enablebickebtn,isEnablebickebtn]=useState(true)
const addbicke=()=>{
    isEnablebicke(true)
    isEnablebickebtn(false)
    console.log("sn")
}
    const[Enablecar,isEnablecar]=useState(false)
    const[Enablecarbtn,isEnablecarbtn]=useState(true)
    const addcar=()=>{
        isEnablecar(true)
        isEnablecarbtn(false)
    }
    const[Enablecyclebtn,isEnablecyclebtn]=useState(true)

    const[Enablecyle,Enablecycledata]=useState(false)
    const handlecyclebtn=()=>{
        Enablecycledata(true)
        isEnablecyclebtn(false)
    }

    const handlebicke=(e)=>{
        e.preventDefault()
        let time=new Date().toLocaleTimeString();

        const bickeData={
            vehicle:bicke,
            categorie:"bicke",
            time:time,
            Actual_Tex:20,
            price:20,

        }
        setdata([...Data,bickeData])
        console.log(Data)
        setbicke("")
    } 
const[carcount,setcarcount]=useState(1)
  const handlecar=(e)=>{

  setcarcount(carcount+1)
        console.log(carcount)
        e.preventDefault()
        console.log("card")
        let time=new Date().toLocaleTimeString();
        console.log(time)
        const carData={
            vehicle:car,
            categorie:"car",
            count:carcount,
            time:time,
            Actual_Tex:50,
            price:50,

        }
        setdata([...Data,carData])
console.log(Data)
setcar("")
    } 
    const handlecycle=(e)=>{
        e.preventDefault();
        let time=new Date().toLocaleTimeString();

        const cycleData={
            vehicle:cycle,
            categorie:"cycle",
            time:time,
            Actual_Tex:10,

            price:10,

        }
        setdata([...Data,cycleData])
        console.log("Cycle data")
        console.log(Data)
        setcyle('')
    }
useEffect(()=>{
    console.log("oaj")
    
})


const DeleteITems=(id)=>{
    console.log("You Delete the Items vehicle",id)
    const filterDeleteVehicle=Data.filter((remove,index)=>{
        return index!==id
    })
    setdata(filterDeleteVehicle)
}
    return (
    <div>
    <Container>
    <Row>
    <Col lg={7}>

    <div className="parking">
    {
        Enablebicke &&(
            <form action="" className='m-3' onSubmit={handlebicke}>
            <input type="text" value={bicke} onChange={(e)=>setbicke(e.target.value)} name="" id="" placeholder='No Plate ' />
            <button>Add Bicke</button>
            </form>
        )
    }
    {
        Enablebickebtn &&(
            <button  class="button-61 mx-2" onClick={addbicke}>Add bicke</button>

        )

    }  

    {
        Enablecar &&(
            <form action="" className='m-3' onSubmit={handlecar}>
            <input type="text" value={car} onChange={(e)=>setcar(e.target.value)} name="" id="" placeholder='No plate' />
            <button>Add Car</button>
            </form>
        )
    }
    {
        Enablecarbtn &&(
            <button  class="mx-3 button-61" onClick={addcar}>Enable Car</button>

        )
    }


    {
        Enablecyle &&(
            <form action="" className='m-3' onSubmit={handlecycle}>
            <input type="text" value={cycle} onChange={(e)=>setcyle(e.target.value)} name="" id="" placeholder='No plate' />
            <button >Add Cycle</button>
            </form>
        )
    }

    {
        Enablecyclebtn &&(
            <button  class="button-61" onClick={handlecyclebtn}>cycle</button>


        )
    }
    </div>
    </Col>
    </Row>
    </Container>
   

<Showparking Data={Data} totalPrice={totalPrice} totalitems={totalitems} pricecar={pricecar} pricebicke={pricebicke} pricecycle={pricecycle} DeleteITems={DeleteITems}></Showparking>
    


    </div>
  )
}
