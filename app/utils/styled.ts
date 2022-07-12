import { createGlobalStyle } from 'styled-components';

type Opacity = TemplateStringsArray | string;

export const purple = (opacity?: Opacity) => `#764abc${opacity || ''}`;
export const pink = (opacity?: Opacity) => `#e03db2${opacity || ''}`;
export const cyan = (opacity?: Opacity) => `#24d3d3${opacity || ''}`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #764abc;
    --pink: #e03db2;
    --cyan: #24d3d3;
  }

  * {
    outline: none;
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

  input {
    background-color: transparent;
    border: none;
  }
`;
