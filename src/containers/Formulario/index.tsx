import { SFormulario, SInput, SSingButton } from '../../components/Form/style'
import { SText } from '../../components/Text/style'
import { STitulo } from '../../components/Titulo/style'
import { ContainerFormulario, SLinkLista, SLista } from './style'

const Formulario = () => {
  return (
    <ContainerFormulario>
      <STitulo>Sing In</STitulo>
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
      <SFormulario action="">
        <SInput type="email" placeholder="Email" />
        <SInput type="password" placeholder="Password" />
        <a href="#">
          <SText tipo="primario">Forget Yout Password?</SText>
        </a>
        <SSingButton type="submit">SING IN</SSingButton>
      </SFormulario>
    </ContainerFormulario>
  )
}

export default Formulario
