import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Navigation from './Navigation.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllPress from './AllPress.jsx';
import MyNews from './MyNews.jsx';
import { pressState } from '../store/press.js';
import APIs from '../apis/APIs.js';

export default function NewsStand() {
  const [_, setPress] = useRecoilState(pressState);
  useEffect(async () => {
    const press = await APIs.getPress();
    setPress(press);
  }, []);

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
