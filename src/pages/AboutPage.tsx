import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPages: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Інформація</h1>
      <p>godsuioguiojsdiojhiojfiohjtio</p>
      <button className="btn" onClick={() => history.push("/")}>
        назад
      </button>
    </>
  );
};
