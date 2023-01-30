import * as C from '../'
import * as S from './Dialogo.styles'
import { BsFillXCircleFill } from 'react-icons/bs'

export const Dialogo = ({ number = '933459714', setIsDialogOpen }) => {
  return (
    <>
      <S.Overlay onClick={() => setIsDialogOpen(false)} />
      <S.Dialog>
        <C.Button
          variant="close"
          as="button"
          onClick={() => setIsDialogOpen(false)}
        >
          <BsFillXCircleFill size={30} tw="fill-primary-800" />
        </C.Button>
        <C.Form
          number={number}
          title="Contáctanos"
          variant="primary"
          type="dialog"
        />
      </S.Dialog>
    </>
  )
}
