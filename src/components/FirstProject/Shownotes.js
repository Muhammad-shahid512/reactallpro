import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Shownotes({ sub, deleteid, searchItem }) {
  console.log(searchItem, "Shahid");
  const deletecard = (id) => deleteid(id);

  return (
    <div>
      <Container>
        <Row>
          {sub
            .filter((el) => {
              if (el !== "") {
                return true;
              } else {
                return el.name.toLowerCase().includes(searchItem.toLowerCase());
              }
            })
            .map((ele, index) => {
              return (
                <Col lg={2} key={index}>
                  <Card>
                    <p style={{ textAlign: "end", fontSize: "15px" }} onClick={() => deletecard(index)}>cancel</p>
                    <p>NAME:{ele.name}</p>
                    <h6>phone:{ele.phone}</h6>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
