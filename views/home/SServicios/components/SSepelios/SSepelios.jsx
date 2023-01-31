import * as C from '../../../../../components/ui'
import * as S from './SSepelios.styles'
import tw from 'twin.macro'
import { useStateSeoContext } from '../../../../../context/seo'
//Optimizador de imagenes
import { OptimizedImg } from '../../../../../components/ui'

const SSepelios = ({ sSepelios }) => {
  const { seo } = useStateSeoContext()
  return (
    <div>
      <S.SSEContent>
        <OptimizedImg
          stylesTw={tw`object-contain w-12`}
          src="ataud.svg"
          alt="Flor"
        />
        <OptimizedImg
          stylesTw={tw`object-contain w-12`}
          src="flor-marron.svg"
          alt="Flor"
        />

        <C.H2 as={seo ? 'h2' : 'span'}>
          SERVICIO DE <br /> SEPELIOS
        </C.H2>
        <S.SSEDes>
          <p>
            Conmemoramos el recuerdo de tu ser querido con nuestros planes de
            sepelio.
          </p>
        </S.SSEDes>
        <S.SSENumberMobile>04.</S.SSENumberMobile>
      </S.SSEContent>
      <S.SSENumberDesktop>04.</S.SSENumberDesktop>
      <S.SSETradicional>
        <OptimizedImg
          stylesTw={tw`w-[3rem]`}
          src="flor-marron.svg"
          alt="Flor"
        />
        <p tw="font-bold">Servicio</p>
        {seo ? (
          <h3 tw="text-3xl max-w-[10rem] text-center sm:max-w-[initial] xl:text-[3rem] ">
            Sepelio Tradicional
          </h3>
        ) : (
          <span tw="text-3xl max-w-[10rem] text-center sm:max-w-[initial] xl:text-[3rem] ">
            Sepelio Tradicional
          </span>
        )}
      </S.SSETradicional>
      <S.SSEContentInfo>
        <figure tw="relative ml-7 mr-[20px]">
          <OptimizedImg
            stylesTw={tw`rounded-[25px] max-w-[518px] h-[34rem] lg:max-w-[590px]`}
            src="servicios/sepelios/s-sepelios-1.webp"
            alt="Sepelios Tradicional"
          />
          <div tw="border-primary-800 top-[20px] left-[20px] z-[-1] rounded-[25px] border-[2px] absolute h-[34rem] w-full max-w-[518px]   before:absolute before:w-[4rem] before:h-[10.3rem] before:border-primary-800 before:border-r-[2px] before:top-[19px] before:translate-y-[-100%] before:right-[-2px] before:border-t-[2px] before:rounded-tr-[40px] sm:top-[30px] sm:left-[30px] sm:before:h-[9rem] lg:max-w-[590px] xl:before:w-0 xl:before:h-0 "></div>
        </figure>
        <S.SSEInfo>
          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 border-t-[2px] border-primary-800 pt-12 xl:pt-0 rounded-tr-[40px] xl:rounded-[0] xl:border-[0]">
            <p>Objetos</p>
            <p tw="justify-self-center">Cant.</p>
            <p tw="justify-self-center">Tipo</p>
          </div>
          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center border-y-[2px] relative border-primary-800 py-2 xl:before:absolute xl:before:border-t-[2px] xl:before:border-primary-800 xl:before:w-[5rem] xl:before:h-[5rem] xl:before:top-[-2px] xl:before:left-[-30px] pl-10 pr-5">
            <p>Ceremonia</p>
            <p tw="justify-self-center">1</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Urna de Concreto</p>
            <p tw="justify-self-center">1</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Toldos Verdes</p>
            <p tw="justify-self-center">2</p>
            <div tw="flex items-center justify-center gap-5">
              <p>Color</p>
              <div tw="w-[1rem] h-[1rem] rounded-full bg-primary-1500"></div>
            </div>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Sillas</p>
            <p tw="justify-self-center">16</p>
            <div tw="flex items-center justify-center gap-5">
              <p>Color</p>
              <div tw="w-[1rem] h-[1rem] rounded-full bg-primary-1500"></div>
            </div>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Alfombra</p>
            <p tw="justify-self-center">1</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Lápida</p>
            <p tw="justify-self-center">1</p>
            <p tw="justify-self-center">Mármol</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Botellas de Agua</p>
            <p tw="justify-self-center">12</p>
            <p tw="justify-self-center">250ml</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Paquetes de Tisúe</p>
            <p tw="justify-self-center">12</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2 border-b-[2px] border-primary-800">
            <p>Corona de Misa</p>
            <p tw="justify-self-center">1</p>
          </div>

          <div tw="grid [grid-template-columns:1fr min-content 1fr] items-center pl-10 pr-5 py-2  border-primary-800">
            <p>Libros de Condolencia</p>
            <p tw="justify-self-center">1</p>
          </div>
        </S.SSEInfo>
      </S.SSEContentInfo>
    </div>
  )
}

export default SSepelios
