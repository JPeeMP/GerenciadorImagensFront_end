import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle` 
 * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;

  }

  h1 {
    color: rgb(114, 105, 120);
    padding: 20px;
  }


  body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      background:rgb(151, 230, 142);
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
  }

  html, body, #root{
    height: 100%;
  }
`;
