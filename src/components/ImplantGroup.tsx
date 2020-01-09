import React from "react";
import { IGroupView } from "./IGroupView";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";

let implantPreviewImgUrl: string =
  "https://ProducitonStorage.azureedge.net/filestorage/5.7/Previews/Implants/DENTSPLY Implants/337E084B-C8B6-40E3-BE99-CC01B960449A.png";

export const ImplantGroup: React.FC<IGroupView> = ({ name, implants }) => {
  return (
    <>
      <h1>{name}</h1>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Image src={implantPreviewImgUrl} rounded />
          </Col>
        </Row>
      </Container>
    </>
  );
};
