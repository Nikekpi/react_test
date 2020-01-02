import React from "react";
import { IManufactures, ManufacturersList } from "./../components/ManufacturersList";

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

//       //<img>imgUrl = "https://producitonstorage.azureedge.net/filestorage/5.7/Logos/DENTSPLY%20Implants%20Logo.png"</img>

export const ManufacturerPage: React.FC = () => {
  return (
    <>
      <ManufacturersList descriptions={manufacturers.descriptions} />
    </>
  );
};
