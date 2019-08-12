import React from "react";
import Home from "pages/home";
import Play from "pages/play";
import NotFound from "pages/404";
import { Switch, Route } from "react-router-dom";

export const Routes = ({ handleModalOpenClick }) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path="/play"
      exact
      render={() => <Play handleModalOpenClick={handleModalOpenClick} />}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
