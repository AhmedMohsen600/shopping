import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
  }

 body {
    background-color: var(--primary-color);
    color: var(--white);
    font-family: 'Lato', sans-serif;
    font-family: 'Poppins', sans-serif;
}

 :root{
    --primary-color: #4269b1;
    --white:#fff;
 }

 li {
     list-style: none;
 }

`;
