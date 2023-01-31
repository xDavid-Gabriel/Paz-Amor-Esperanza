import * as C from '../'
import { HiArrowDown } from 'react-icons/hi'

import tw from 'twin.macro'

import { useStateSeoContext } from '../../../context/seo'
import * as S from './Hero.styles'
//Optimizador de imagenes Libreria
import { OptimizedImg } from '../'

export const Hero = () => {
  const { seo } = useStateSeoContext()
  return (
    <section
      id="inicio"
      tw="bg-[url(https://assets.pazamoryesperanza.com/hojas-fondo.webp)] mt-12 md:mt-[4rem] pb-20 md:pb-28 bg-cover flex items-center [background-position: 0 18%] relative z-[-1]"
    >
      <div tw="container">
        <div tw="border-primary-800 border-[2px] rounded-[40px] py-[6.5rem] flex flex-col gap-[4.5rem] items-center justify-center relative before:absolute before:w-[7rem] sm:before:w-[10rem] lg:before:w-[15rem] before:h-[2px] before:bg-primary-100 before:top-[-2px]">
          <OptimizedImg stylesTw={S.FlorImg} src="flor.svg" alt="Flor" />

          <div tw="flex flex-col gap-2 items-center">
            <OptimizedImg
              stylesTw={tw`object-contain w-[3rem] h-auto hidden md:block`}
              src="cruz.svg"
              alt="Decoración"
            />

            <OptimizedImg
              stylesTw={tw`object-contain w-[3rem] h-auto mt-5`}
              src="flor-marron.svg"
              alt="Decoración"
            />
            <C.H1 as={seo ? 'h1' : 'span'}>
              RESPIRA LA <br /> TRANQUILIDAD
            </C.H1>
            <p tw="text-primary-1100 text-xl lg:text-3xl font-bold text-center">
              PAZ, AMOR Y ESPERANZA
            </p>
          </div>
          <div tw="w-12 h-12 rounded-full border-[2px] border-primary-800 md:grid place-content-center hidden">
            <HiArrowDown size={25} color="#75585A" />
          </div>
        </div>
      </div>
    </section>
  )
}
