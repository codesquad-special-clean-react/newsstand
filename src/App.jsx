import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@components/Header';
import AllPress from '@components/AllPress';
import MyPress from '@components/MyPress';

function App() {
  const loadingComponent = <div>loading...</div>;

  return (
    <Router>
      <NewsStandWrapper>
        <Header />
        <React.Suspense fallback={loadingComponent}>
          <Switch>
            <Route path="/all" component={AllPress}></Route>
            <Route path="/my" component={MyPress}></Route>
            <Route path="/" component={AllPress}></Route>
          </Switch>
        </React.Suspense>
      </NewsStandWrapper>
    </Router>
  );
}

const NewsStandWrapper = styled.main`
  margin: 1em;
`;

export default App;
