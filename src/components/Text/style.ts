import styled from 'styled-components'

export type TextType = {
  tipo: 'primario' | 'secundario'
}

export const SText = styled.p<TextType>``
