import React from 'react';
import { RecoilRoot } from 'recoil';
import NewsStand from './components/NewsStand/NewsStand';

const App = () => {
  return (
    <RecoilRoot>
      <NewsStand />
    </RecoilRoot>
  );
};

export default App;
