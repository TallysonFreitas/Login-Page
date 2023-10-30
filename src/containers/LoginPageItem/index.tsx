import { useState } from 'react'
import Formulario from '../Formulario'
import Register from '../RegisterDiv'
import { SContainerItemLoginPage } from './style'

const LoginPageItem = () => {
  const [registerPage, setRegisterPage] = useState(false)
  const handleClickChange = () => {
    setRegisterPage(!registerPage)
  }
  return (
    <SContainerItemLoginPage>
      <Formulario altera={handleClickChange} initial={registerPage} />
      <Register altera={handleClickChange} initial={registerPage} />
    </SContainerItemLoginPage>
  )
}

export default LoginPageItem
