import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IGroupView } from "../components/IGroupView";
import { IManufacturerView } from "../components/IManufacturerView";
import { ImplantGroupList } from "../components/ImplantGroupList";
import { IManufactures, ManufacturersList } from "./../components/ManufacturersList";

const manufacturers: IManufactures = {
  descriptions: [
    {
      name: "dentsply",
      imgUrl: "https://producitonstorage.azureedge.net/filestorage/5.7/Logos/DENTSPLY%20Implants%20Logo.png",
    },
    {
      name: "odin",
      imgUrl: "https://producitonstorage.azureedge.net/filestorage/5.7/Logos/DENTSPLY%20Implants%20Logo.png",
    },
    {
      name: "3gs",
      imgUrl: "https://producitonstorage.azureedge.net/filestorage/5.7/Logos/DENTSPLY%20Implants%20Logo.png",
    },
  ],
};

const groupsTest: IGroupView = {
  name: "3 external Hexagon",
  implants: [
    {
      name: "gfdg",
      imgPreviewUrl:
        "https://producitonstorage.azureedge.net/filestorage/5.7/Previews/Implants/DENTSPLY%20Implants/337E084B-C8B6-40E3-BE99-CC01B960449A.png",
      length: "45",
      totalLength: "5",
    },
    {
      name: "iofduh",
      imgPreviewUrl:
        "https://producitonstorage.azureedge.net/filestorage/5.7/Previews/Implants/DENTSPLY%20Implants/337E084B-C8B6-40E3-BE99-CC01B960449A.png",
      length: "45",
      totalLength: "5",
    },
  ],
};

const testData: IManufacturerView = {
  name: "dentsply",
  groups: [groupsTest, groupsTest],
};

export const ManufacturerPage: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="4">
            <ManufacturersList {...manufacturers} />
          </Col>
          <Col>
            <ImplantGroupList {...testData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
