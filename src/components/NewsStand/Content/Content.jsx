import React from 'react';
import styled from 'styled-components';
import MyNews from './MyNews/MyNews';
import NewsCompany from './NewsCompany/NewsCompany';
import { Route, routes } from '@utils/Router';

const Content = () => {
  return (
    <Main>
      <Route path={routes.newscompany.path}>
        <NewsCompany />
      </Route>
      <Route path={routes.mynews.path}>
        <MyNews />
      </Route>
    </Main>
  );
};

export default Content;

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
`;
