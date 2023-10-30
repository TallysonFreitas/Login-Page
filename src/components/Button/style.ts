import styled from 'styled-components'

export type ButtonSingType = {
  tipo: 'primario' | 'secundario'
}

export const SSingButton = styled.button<ButtonSingType>`
  background-color: ${(props) =>
    props.tipo == 'primario' ? 'rgba(88, 39, 146, 1)' : 'transparent'};
  color: white;
  border-radius: 8px;
  width: 50%;
  max-width: 240px;
  padding: 16px;
  font-weight: bold;
  border: ${(props) => (props.tipo == 'primario' ? 'none' : '1px solid #fff')};
  cursor: pointer;
  font-size: 16px;
`
