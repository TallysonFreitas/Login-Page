import styled from 'styled-components'

export const SFormulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 8px;
  width: 80%;
  align-items: center;
`

export const SInput = styled.input`
  padding: 16px;
  border: none;
  background-color: #eee;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  &:active {
    border: none;
  }
`
