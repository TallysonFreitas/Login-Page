import { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family: 'Montserrat', sans-serif;
}
body{
  background: rgb(252,252,255);
  background: linear-gradient(90deg, rgba(252,252,255,1) 0%, rgba(218,218,255,1) 100%);
}
`
