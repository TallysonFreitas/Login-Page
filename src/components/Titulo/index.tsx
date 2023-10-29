import { STitulo } from './style'

export type TituloType = {
  text: string
}

const Titulo = (props: TituloType) => {
  return <STitulo>{props.text}</STitulo>
}

export default Titulo
