import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import BlockList from '@blockView/BlockList';
import ListView from '@listView/ListView';

function App() {
  const loadingComponent = <div>loading...</div>;

  return (
    <NewsStandWrapper>
      <Header />
      <React.Suspense fallback={loadingComponent}>
        {/* <BlockList /> */}
        <ListView />
      </React.Suspense>
    </NewsStandWrapper>
  );
}

const NewsStandWrapper = styled.main`
  margin: 1em;
`;

export default App;
