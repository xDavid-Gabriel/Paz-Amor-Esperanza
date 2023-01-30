import * as S from './SCampoSanto.styles'
import * as C from '../../../components/ui'
import 'twin.macro'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper'

import { campossantos } from './attributes'
import { useState } from 'react'
import { useStateSeoContext } from '../../../context/seo'
//Optimizador de imagenes
import { OptimizedImg } from '../../../components/ui'
import tw from 'twin.macro'

export const SCampoSanto = () => {
  const [camposanto, setCamposanto] = useState(campossantos[0])
  const [activeId, setActiveId] = useState(1)
  const showPagButtons = camposanto => camposanto.id !== 1
  const { seo } = useStateSeoContext()

  return (
    <S.Section id="campo-santo">
      <S.Inner>
        <C.Heading variant="primary">
          <OptimizedImg stylesTw={tw`w-14`} src="montana.svg" alt="Montaña" />
          <OptimizedImg
            stylesTw={tw`w-9`}
            src="flor-marron.svg"
            alt="Flor marrón"
          />
          <C.H2 as={seo ? 'h2' : 'span'} tw="uppercase">
            CAMPO SANTO <br />
            {camposanto.nombre}
          </C.H2>
          <C.P>Un lugar en el que descansa la paz</C.P>
        </C.Heading>
        <S.Slider>
          <S.SliderDescription>
            <S.SliderHr />
            <OptimizedImg stylesTw={tw`w-fit h-8`} src="flor.svg" alt="Flor" />
            <S.P>Lunes a Sábado a las 10:00 a.m. haz tu reserva</S.P>
            <S.SliderHr lastChild />
          </S.SliderDescription>
          <S.SliderContainer>
            <S.SliderInfo>
              <p tw="font-bold flex flex-col">
                Horario de <span tw="text-6xl font-normal">Visita</span>
              </p>
              <p tw="flex flex-col">
                Lunes a Viernes
                <S.HorarioAtencion>09:00 a.m. a 05:00 p.m.</S.HorarioAtencion>
              </p>
              <p tw="flex flex-col">
                Sábado, Domingo y Feriado
                <S.HorarioAtencion>08:00 a.m. a 05:00 p.m.</S.HorarioAtencion>
              </p>
            </S.SliderInfo>
            <S.SliderGroup showPaginationButtons={showPagButtons(camposanto)}>
              <Swiper
                className="swiper swiper--campo-santo"
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                rewind={true}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {camposanto.slides.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <OptimizedImg
                      stylesTw={S.Img}
                      src={slide.img}
                      alt={slide.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                tw="rounded-full"
                grabCursor={true}
                rewind={true}
                slidesPerView={2}
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {campossantos.map(camposanto => (
                  <SwiperSlide key={camposanto.id}>
                    <C.Button
                      active={activeId === camposanto.id}
                      as="button"
                      variant="tertiary"
                      onClick={() => {
                        setCamposanto(campossantos[camposanto.id - 1])
                        setActiveId(camposanto.id)
                      }}
                    >
                      {camposanto.nombre}
                    </C.Button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.SliderGroup>
          </S.SliderContainer>
        </S.Slider>
      </S.Inner>
    </S.Section>
  )
}
