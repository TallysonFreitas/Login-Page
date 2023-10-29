import { STitulo } from './style'

export type TituloType = {
  children: string
}

const Titulo = (props: TituloType) => {
  return <STitulo>{props.children}</STitulo>
}

export default Titulo
