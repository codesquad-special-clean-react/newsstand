import Navigation from "./Navigation.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPress from "./AllPress.jsx";
import MyNews from "./MyNews.jsx";
import React from "react";

export function NewsStandWrap() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/all">
          <AllPress />
        </Route>
        <Route path="/my">
          <MyNews />
        </Route>
        <Route path="/">전체언론사 or MY 뉴스 중 선택해주세요.</Route>
      </Switch>
    </Router>
  );
}
