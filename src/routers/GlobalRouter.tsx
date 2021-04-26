import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "../pages/DetailsPage";
import Home from "../pages/HomePage";
import Logout from "../pages/LogoutPage";

import NotFoundPage from "../pages/NotFoundPage";

const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </>
    </BrowserRouter>
  );
};
export default GlobalRouter;
