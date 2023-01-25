import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CardsRow = () => {
  return (
    <Row>
      <Col xs={12} md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>Some text here</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>Some text here</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>Some text here</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardsRow;
