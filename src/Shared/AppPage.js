import React from "react";
import routes from "../Shared/routes";
import { Switch , Route } from "react-router-dom";
import Navbar from "./Navbar";
const  NoMatch = require("./NoMatch");

const AppPage = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <C {...props} {...rest} />}
          />
        ))}
        <Route render={(props)=> <NoMatch {...props}/>} />
      </Switch>
    </div>
  );
};

export default AppPage;
