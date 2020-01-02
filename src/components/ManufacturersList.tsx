import React, { useEffect, useState } from "react";

export interface IManufactures {
  descriptions: Array<{ name: string; imgUrl: string }>;
}

export const ManufacturersList: React.FC<IManufactures> = ({ descriptions }) => {
  return (
    <>
      <h1>Manufacturer list</h1>

      <ul className="collapsible">
        {descriptions.map((description) => (
          <li key={description.name}>
            <div className="collapsible-header">
              <img src={description.imgUrl} width={150} height={50} />
              <span> {description.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
