import styled from 'styled-components'

export type TextType = {
  tipo: 'primario' | 'secundario'
}

export const SText = styled.p<TextType>`
  color: ${(props) => (props.tipo == 'primario' ? '#000' : '#fff')};
  text-align: center;
  max-width: 90%;
`
