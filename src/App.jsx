import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import BlockList from '@blockView/BlockList';

function App() {
  const loadingComponent = <div>loading...</div>;

  return (
    <NewsStandWrapper>
      <Header />
      <React.Suspense fallback={loadingComponent}>
        <BlockList />
      </React.Suspense>
    </NewsStandWrapper>
  );
}

const NewsStandWrapper = styled.main`
  margin: 1em;
`;

export default App;
