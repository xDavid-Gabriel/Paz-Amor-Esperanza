import 'twin.macro'
import * as S from './SContacto.styles'
import * as C from '../../../components/ui'
import { OptimizedImg } from '../../../components/ui'

export const SContacto = () => {
  return (
    <S.Section id="contacto">
      <OptimizedImg
        stylesTw={S.ImgBg}
        src="contacto-bg.webp"
        alt="Fondo contacto"
      />

      <S.Inner>
        <C.Form />
      </S.Inner>
    </S.Section>
  )
}
