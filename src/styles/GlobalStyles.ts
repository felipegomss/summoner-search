
import { createGlobalStyle } from 'styled-components'
import banner from '../assets/banner.jpg'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  body{
    -webkit-font-font-smoothing: antialiased;
    background-image: linear-gradient(to right top, #6e49bf, #6c5eca, #6c70d4, #7082db, #7793e1, #849ee4, #91aae7, #9eb5ea, #afbfec, #bfcaee, #ced5f0, #dce0f2);
  }
  border-style, input, button{
    font: 14px 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }

`