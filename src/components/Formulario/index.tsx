import Titulo from '../Titulo'
import { ContainerFormulario } from './style'

const Formulario = () => {
  return (
    <ContainerFormulario>
      <Titulo text="Sing In" />
      <ul>
        <li>
          <a href="#">G</a>
        </li>
        <li>
          <a href="#">F</a>
        </li>
        <li>
          <a href="#">G</a>
        </li>
        <li>
          <a href="#">L</a>
        </li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <input type="text" />
      <input type="password" />
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <button>Sing In</button>
    </ContainerFormulario>
  )
}

export default Formulario
