import React from 'react';
import { Router, routes } from '../../util/Router';
import Header from './Header/Header';
import Content from './Content/Content';

const NewsStand = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router routeList={routes}>
        <Header />
        <Content />
      </Router>
    </React.Suspense>
  );
};

export default NewsStand;
