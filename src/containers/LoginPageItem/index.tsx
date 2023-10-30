import { useState } from 'react'
import Formulario from '../Formulario'
import Register from '../RegisterDiv'
import { SContainerItemLoginPage } from './style'

const LoginPageItem = () => {
  const [posicaoFinal, setPosicaoFinal] = useState(false)
  const handleClickChange = () => {
    setPosicaoFinal(!posicaoFinal)
  }
  return (
    <SContainerItemLoginPage>
      <Formulario altera={handleClickChange} initial={posicaoFinal} />
      <Register altera={handleClickChange} initial={posicaoFinal} />
    </SContainerItemLoginPage>
  )
}

export default LoginPageItem
