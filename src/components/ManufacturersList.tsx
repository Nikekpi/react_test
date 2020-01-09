import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export interface IManufactures {
  descriptions: Array<{ name: string; imgUrl: string }>;
}

export const ManufacturersList: React.FC<IManufactures> = ({ descriptions }) => {
  return (
    <>
      <h1>Manufacturer list</h1>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              {descriptions.map((description) => (
                <ListGroup.Item>
                  {description.name}
                  <img className="imgLogo" src={description.imgUrl} width={150} height={50} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
