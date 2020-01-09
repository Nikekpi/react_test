import React from "react";
import { IManufacturerView } from "./IManufacturerView";
import { ImplantGroup } from "./ImplantGroup";
import { Container, Row, Col } from "react-bootstrap";

const elementInRow = 4;

export const ImplantGroupList: React.FC<IManufacturerView> = ({ groups }) => {
  const rows = groups.length / elementInRow;

  return (
    <>
      <Container>
        <Row>
          {groups.map((group) => {
            return (
              <Col>
                <ImplantGroup {...group} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
