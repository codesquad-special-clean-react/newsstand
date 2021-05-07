import React from 'react';
import { Router, routes } from '../../util/Router';
import Header from './Header/Header';
import Content from './Content/Content';
import { LOADING } from '../../util/constant';

const FallBack = <div>{LOADING}</div>;

const NewsStand = () => {
  return (
    <React.Suspense fallback={FallBack}>
      <Router routeList={routes}>
        <Header />
        <Content />
      </Router>
    </React.Suspense>
  );
};

export default NewsStand;
