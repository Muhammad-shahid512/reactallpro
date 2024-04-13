import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import "./Firstnotes.css"
export default function Firstnotes({name,phone,handlename,handlephone,handlesubmit}) {

    const onchangename=(e)=>{
        handlename(e.target.value)
    }
     const onchangephone=(e)=>{
         handlephone(e.target.value)
    }



    return (
    <div>
    <Container>
    <Row >
    <Col style={{margin:"auto",textAlign:"center"}} lg={6}>
    <div className="box mb-3">
    <form action="" onSubmit={handlesubmit}>
    <input type="text" value={name} style={{width:"100%"}} onChange={onchangename}  name="" id="" placeholder='Name' /> <br />
    <input type="text" value={phone} style={{width:"100%"}} onChange={onchangephone}  name="" id="" placeholder='Phone' className='' /> <br />
    <button type='submit'>submit</button>
    </form>
    </div>
    </Col>
    </Row>
    </Container>

    
    </div>
  )
}
