import React from "react";
import { IManufactures, ManufacturersList } from "./../components/ManufacturersList";
import { ImplantGroupList } from "../components/ImplantGroupList";
import { IManufacturerView } from "../components/IManufacturerView";
import { IGroupView } from "../components/IGroupView";
import { Container, Row, Col } from "react-bootstrap";

const manufacturers: IManufactures = {
  descriptions: [
    {
      name: "dentsply",
      imgUrl: "https://producitonstorage.azureedge.net/filestorage/5.7/Logos/DENTSPLY%20Implants%20Logo.png",
    },
    {
      name: "odin",
      imgUrl:
        "https://producitonstorage.azureedge.net/filestorage/5.7/Previews/Implants/DENTSPLY%20Implants/E5A507CE-D5E3-4E33-A067-97E528539DFE.png",
    },
    {
      name: "3gs",
      imgUrl:
        "https://producitonstorage.azureedge.net/filestorage/5.7/Previews/Implants/DENTSPLY%20Implants/E5A507CE-D5E3-4E33-A067-97E528539DFE.png",
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
  groups: [groupsTest],
};

export const ManufacturerPage: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ManufacturersList descriptions={manufacturers.descriptions} />
          </Col>
          <Col>
            <ImplantGroupList {...testData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
