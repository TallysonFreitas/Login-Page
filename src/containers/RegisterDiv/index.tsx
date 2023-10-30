import { SSingButton } from '../../components/Button/style'
import { SText } from '../../components/Text/style'
import { STitulo } from '../../components/Titulo/style'
import { SRegisterDiv } from './style'

const Register = () => {
  return (
    <SRegisterDiv>
      <STitulo tipo="secundario">Hello, Friend!</STitulo>
      <SText tipo="secundario">
        Register with your personal details to use all of site features
      </SText>
      <SSingButton tipo="secundario">SING UP</SSingButton>
    </SRegisterDiv>
  )
}

export default Register
