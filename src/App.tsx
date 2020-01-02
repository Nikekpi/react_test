import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ManufacturerPage } from "./pages/ManufacturerPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container"></div>
      <Switch>
        <Route component={TodosPage} path="/" exact />
        <Route component={ManufacturerPage} path="/manufacturers" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
