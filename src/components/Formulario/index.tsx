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
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <input type="text" />
      <input type="password" />
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <button>Sing In</button>
    </ContainerFormulario>
  )
}

export default Formulario
