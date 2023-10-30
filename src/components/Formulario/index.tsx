import { SText } from '../Text/style'
import Titulo from '../Titulo'
import { ContainerFormulario, SLinkLista, SLista } from './style'

const Formulario = () => {
  return (
    <ContainerFormulario>
      <Titulo text="Sing In" />
      <SLista>
        <li>
          <SLinkLista href="#">G</SLinkLista>
        </li>
        <li>
          <SLinkLista href="#">F</SLinkLista>
        </li>
        <li>
          <SLinkLista href="#">G</SLinkLista>
        </li>
        <li>
          <SLinkLista href="#">L</SLinkLista>
        </li>
      </SLista>
      <SText tipo="primario">or use your email password</SText>
      <form action="">
        <input type="text" />
        <input type="password" />
        <button type="submit">Sing In</button>
      </form>
    </ContainerFormulario>
  )
}

export default Formulario
