import React from 'react';
import styled from 'styled-components';
import { Route, routes } from '@utils/Router';
import { FallBack } from '@utils/constant';
import NewsCompany from './NewsCompany/NewsCompany';

const Content = () => {
  const MyNewsLazy = React.lazy(() => import('./MyNews/MyNews'));
  return (
    <Main>
      <Route path={routes.newscompany.path}>
        <NewsCompany />
      </Route>
      <Route path={routes.mynews.path}>
        <React.Suspense fallback={FallBack}>
          <MyNewsLazy />
        </React.Suspense>
      </Route>
    </Main>
  );
};

export default Content;

const Main = styled.main`
  box-sizing: border-box;
  max-width: 1250px;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
`;
