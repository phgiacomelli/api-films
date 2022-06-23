import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(./fonts/Roboto.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 2rem;
  }

  h1 {
    color: ${props => props.theme.colors.primary};        
  }
`
