import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;
    background-color: #24262b;
    color: #fff;
  }
  
  a, button {
    color: inherit;
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
`;
