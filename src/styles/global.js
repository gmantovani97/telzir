import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  body {
    font-family: Montserrat;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    font-family: Montserrat;
    cursor: pointer;
  }
  select {
    font-family: Montserrat;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
