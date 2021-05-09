import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Mynews from "../../pages/Mynews";
import NotFound from "../../pages/NotFound"

const Main = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mynews">
          <Mynews />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default Main;