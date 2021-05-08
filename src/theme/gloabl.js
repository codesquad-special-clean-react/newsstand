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

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black
  }
`;

export default GlobalStyle;
