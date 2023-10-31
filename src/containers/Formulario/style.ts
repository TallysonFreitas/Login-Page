import styled from 'styled-components'
import { PositionDivType } from '../RegisterDiv/style'

export const ContainerFormulario = styled.div<PositionDivType>`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${(props) => props.position === true && '-50%'};
  left: ${(props) => props.position === false && '-50%'};
  transform: ${(props) =>
    props.position === true ? 'translateX(-100%)' : 'translateX(100%)'};
  top: 0;
  transition: transform ease 1s;
  @media (max-width: 900px) {
    scale: 0.8;
    transform: ${(props) =>
      props.position === true ? 'translateX(-120%)' : 'translateX(120%)'};
  }
  @media (max-width: 768px) {
    scale: 0.8;
    position: relative;
    width: 100vw;
    transform: ${(props) =>
      props.position === true ? 'translateY(50%)' : 'translateY(70vh)'};
    right: 0%;
    left: 0%;
    bottom: ${(props) => props.position === true && '-100%'};
    top: ${(props) => props.position === false && '-60vh'};
  }
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
