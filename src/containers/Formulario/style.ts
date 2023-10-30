import styled from 'styled-components'

export const ContainerFormulario = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SLista = styled.ul`
  display: flex;
  gap: 40px;
  margin: 40px 0;
`

export const SLinkLista = styled.a`
  color: #222;
  text-decoration: none;
  padding: 16px;
  border: 1px solid #888;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  transition: scale ease 0.2s;
  &:hover {
    scale: 1.1;
  }
`

export const SSvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
`
