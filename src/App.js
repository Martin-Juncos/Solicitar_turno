import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Paginas/Home/Home";
import Ingresar from "./Paginas/Ingreso/Ingresar";
import Registro from "./Paginas/Registro/Registro";
import User from "./Paginas/User/User";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Ingresar} />
        <Route path="/Register" exact component={Registro} />
        <Route path="/User" exact component={User} />
      </Switch>
    </Router>
  );
};

export default App;
