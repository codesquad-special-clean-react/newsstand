import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
      background: #E5E9EF;
  }

  h1 {
    margin: 0;
  }

  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
