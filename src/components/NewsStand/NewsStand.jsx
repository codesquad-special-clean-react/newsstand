import React from 'react';
import { Router, routes } from '@router';
import Header from './Header/Header';
import Content from './Content/Content';
import { FallBack } from '@utils/constant';

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
