import * as S from './Footer.styles'
import * as C from '../'
import { BsWhatsapp } from 'react-icons/bs'
import 'twin.macro'
import { useStateSeoContext } from '../../../context/seo'

export const Footer = ({ setIsDialogOpen, setNumber }) => {
  const { seo } = useStateSeoContext()

  return (
    <S.Footer>
      <S.Inner>
        <S.Content>
          <C.H3 as={seo ? 'h3' : 'span'} variant="secondary">
            Contacto
          </C.H3>
          <S.RedesSociales>
            <C.Button
              as="button"
              variant="quinary"
              tw="flex items-center gap-2"
              onClick={() => {
                setIsDialogOpen(true)
                setNumber('933459714')
              }}
            >
              <BsWhatsapp size={24} />
              (+51) 933-459-714
            </C.Button>
            <C.Button
              as="button"
              variant="quinary"
              tw="flex items-center gap-2"
              onClick={() => {
                setIsDialogOpen(true)
                setNumber('991853347')
              }}
            >
              <BsWhatsapp size={24} />
              (+51) 991-853-347
            </C.Button>
          </S.RedesSociales>
        </S.Content>
      </S.Inner>
      <S.Copyright>
        <span tw="font-baloo tracking-normal">
          © {new Date().getFullYear()} Paz, Amor y Esperanza
        </span>
        <span tw="font-baloo tracking-normal">
          Diseñado por{' '}
          <C.Button href="https://limadigital.pe" variant="quinary">
            Agencia Lima Digital
          </C.Button>{' '}
          - Todos los derechos reservados.
        </span>
      </S.Copyright>
    </S.Footer>
  )
}
