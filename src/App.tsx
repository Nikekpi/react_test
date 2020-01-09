import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ManufacturerPage } from "./pages/ManufacturerPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <div className="container"></div>
    //   <Switch>
    //     <Route component={TodosPage} path="/" exact />
    //     <Route component={ManufacturerPage} path="/manufacturers" />
    //   </Switch>
    // </BrowserRouter>

    <>
      <ManufacturerPage />
    </>
  );
};

export default App;
