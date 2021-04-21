import logo from './logo.svg';
import './App.scss';
import React from "react";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
// import * as ROUTES from "../src/components/Routes";
// import Work from "./components/Work";
import Home from "./components/Home";


function App() {
  return (
    // <BrowserRouter>
    //     <Switch>
    //     <Route exact path={ROUTES.Home} component={Home}/>
    //     <Route exact path={ROUTES.Work} component={Work}/>
    //     </Switch>
    // </BrowserRouter>
      <Home/>
  );
}

export default App;
