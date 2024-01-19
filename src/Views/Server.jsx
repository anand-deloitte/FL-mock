import React from "react";
import {Switch, Route} from 'react-router-dom';
import AppServer  from "../AppServer";
import { StaticRouter } from "react-router";


const Server = (props) => {
    return (
        <StaticRouter location={props.location} context={{}} >
            <Switch>
                <Route path="/">
                    <AppServer/>
                </Route>
                <Route path="/new">
                    <AppServer/>
                </Route>
            </Switch>
        </StaticRouter>
    );
  };
  
  export default Server;