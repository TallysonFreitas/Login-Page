import styled from 'styled-components'

export type TituloType = {
  tipo: 'primario' | 'secundario'
}

export const STitulo = styled.h1<TituloType>`
  font-size: 40px;
  color: ${(props) => (props.tipo == 'primario' ? '#000' : '#fff')};
`
