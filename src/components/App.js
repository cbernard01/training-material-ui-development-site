// PACKAGE IMPORTS //
import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// MATERIAL UI IMPORTS //
import ThemeProvider from "@material-ui/styles/ThemeProvider";
// PROJECT COMPONENTS //
import Header from "./ui/Header";
import theme from "./ui/theme";


function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path={"/services"} component={()=> <div>Services</div>}/>
            <Route exact path={"/customsoftware"} component={()=> <div>Custom Software</div>}/>
            <Route exact path={"/mobileapps"} component={()=> <div>Mobile Apps</div>}/>
            <Route exact path={"/websites"} component={()=> <div>Websites</div>}/>
            <Route exact path={"/revolution"} component={()=> <div>Revolution</div>}/>
            <Route exact path={"/about"} component={()=> <div>About Us</div>}/>
            <Route exact path={"/contact"} component={()=> <div>Contact Us</div>}/>
            <Route exact path={"/estimate"} component={()=> <div>Estimate</div>}/>
            <Route exact path={"/"} component={()=> <div>Home</div>}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
