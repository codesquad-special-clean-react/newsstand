import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import AllPress from "./AllPress.jsx";
import MyNews from "./MyNews.jsx";
import { useEffect, useState } from "react";
import APIs from "../apis/APIs.js";

export default function NewsStand() {
  const [press, setPress] = useState([]);
  useEffect(() => {
    APIs.getPress().then((press) => setPress(press));
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/all">
          <AllPress press={press} />
        </Route>
        <Route path="/my">
          <MyNews press={press} />
        </Route>
        <Route path="/">전체언론사 or MY 뉴스 중 선택해주세요.</Route>
      </Switch>
    </Router>
  );
}
