import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Showblog({blogData}) {
  return (
    <div>
    
    <Container>
    <Row>
    {
        blogData.map((ele,index)=>{
            return(

                <Col lg={3} key={index}>
                <Link to={`/Product/${ele.name}`}>
                <Card>
                 <img src={ele.img} alt="" />
                </Card>
                </Link>
              </Col>
                
            )
        })
    }
    
    </Row>
    </Container>
    </div>
  )
}
