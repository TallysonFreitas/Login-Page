import styled from 'styled-components'

export const SContainerItemLoginPage = styled.div`
  width: 100%;
  background-color: white;
  height: 70vh;
  max-height: 800px;
  border-radius: 40px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0px;
    box-shadow: none;
  }
`
