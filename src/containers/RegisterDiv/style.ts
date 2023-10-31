import styled from 'styled-components'

export type PositionDivType = {
  position: boolean
}

export const SRegisterDiv = styled.div<PositionDivType>`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;

  top: 0;
  background: rgb(121, 21, 238);
  background: linear-gradient(
    135deg,
    rgba(121, 21, 238, 1) 0%,
    rgba(70, 49, 94, 1) 100%
  );
  border-radius: ${(props) =>
    props.position == false ? '40% 0 0 20%' : ' 0 40% 20% 0 '};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  transition: all ease 1s;
  transform: ${(props) => props.position && 'translateX(-100%)'};
  @media (max-width: 768px) {
    position: relative;
    border-radius: ${(props) =>
      props.position == false ? '40% 20% 0 0 ' : ' 0 0 20% 40% '};
    transform: ${(props) => props.position && 'translatey(-200%)'};
    width: 100%;
    height: 50vh;
  }
`
