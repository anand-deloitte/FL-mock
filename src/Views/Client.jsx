import React from "react";
import AppServer  from "../AppServer";
import { BrowserRouter } from "react-router-dom";
import {Switch, Route} from 'react-router-dom';

const Client = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <AppServer/>
                </Route>
                <Route path="/new">
                    <AppServer/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default Client;