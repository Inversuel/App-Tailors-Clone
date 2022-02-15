import { createGlobalStyle } from "styled-components"
import "@fontsource/nunito-sans"
const GlobalStyled = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
text-decoration: none;
color: #141a52;
font-family: 'Nunito', sans-serif;
}
body{
  background-color:rgb(251,251,251);
}
`

export default GlobalStyled
