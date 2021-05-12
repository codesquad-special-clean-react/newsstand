// src/index.js
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './app/App';
import { theme } from './theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h2>뉴스기사를 긁어오는중,,,</h2>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
