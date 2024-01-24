import React from "react";
import routes from "../Shared/routes";
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
const  NoMatch = require("./NoMatch");

const AppPage = () => {
  return (
    <div>
      <Navbar />
        <Routes>
        {/* <Switch> */}
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <C {...props} {...rest} />}
          />
        ))}
        <Route render={(props)=> <NoMatch {...props}/>} />
        {/* </Switch> */}

        </Routes>
    </div>
  );
};

export default AppPage;
