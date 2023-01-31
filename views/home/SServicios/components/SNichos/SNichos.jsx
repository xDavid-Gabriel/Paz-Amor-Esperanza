import { memo, useEffect, useMemo } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper'

import { useStateSeoContext } from '../../../../../context/seo'
import * as C from '../../../../../components/ui'
import * as S from './SNichos.styles'
import tw from 'twin.macro'
//Hooks
import { useFilter } from '../../../../../hooks/useFilter'
import { serviciosNichos } from './attributes'

//Optimizador de imagenes
import { OptimizedImg } from '../../../../../components/ui'

const SNichos = () => {
  const { seo } = useStateSeoContext()

  //Utilizando mi hook
  const { items, activo, setActivo, filterItem } = useFilter(serviciosNichos, {
    lurin: false,
    ptePiedra: false,
  })

  const memoizedData = useMemo(() => {
    // Aquí iría el cálculo costoso que se quiere memoizar
    return items
  }, [items])

  useEffect(() => {
    filterItem('lurin')
    setActivo({ lurin: true })
  }, [])

  return (
    <S.SNichos>
      <S.SNichosDec />
      <S.SNContent>
        <OptimizedImg
          stylesTw={tw`object-contain w-12`}
          src="tres-cruces.svg"
          alt="Flor"
        />
        <OptimizedImg
          stylesTw={tw`object-contain w-12`}
          src="flor-marron.svg"
          alt="Flor Marron"
        />

        <C.H2 as={seo ? 'h2' : 'span'}>
          SERVICIO <br /> NICHOS
        </C.H2>
        <S.SNDes>
          <p>Espacios personales, en moderno y elegante edificio.</p>
        </S.SNDes>
      </S.SNContent>
      <S.SNContentInfo>
        {memoizedData.map(nichos => (
          <div key={nichos.id} tw="contents">
            <S.SNNumber>
              03.
              <S.SNDistrito>
                <span tw="font-baloo font-bold">{nichos.titleSpan}</span>

                {seo ? (
                  <h3 tw="text-3xl lg:text-5xl">{nichos.title}</h3>
                ) : (
                  <span tw="text-3xl lg:text-5xl">{nichos.title}</span>
                )}
              </S.SNDistrito>
            </S.SNNumber>
            <S.SNInfo>
              <S.SNPlanesBtns>
                <C.Button
                  css={activo.lurin ? tw`bg-primary-1100` : ''}
                  as="button"
                  variant="outline"
                  onClick={() => {
                    filterItem('lurin')
                    setActivo({ lurin: true })
                  }}
                >
                  Lurín
                </C.Button>
                <C.Button
                  as="button"
                  variant="outline"
                  css={activo.ptePiedra ? tw`bg-primary-1100` : ''}
                  onClick={() => {
                    filterItem('ptePiedra')
                    setActivo({ ptePiedra: true })
                  }}
                >
                  Puente Piedra
                </C.Button>
              </S.SNPlanesBtns>
              <Swiper
                loop
                className="swiper swiper--servicios"
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
                }}
              >
                {nichos.images.map(image => (
                  <SwiperSlide key={image.id}>
                    <figure tw="relative">
                      <OptimizedImg
                        stylesTw={S.SNImg}
                        src={image.img}
                        alt={image.title}
                      />
                      <S.SNImgTitle>
                        <p tw="leading-[10px]"> {image.titleSpan}</p>
                        {seo ? (
                          <h4 tw="text-4xl font-romanus">{image.title}</h4>
                        ) : (
                          <span tw="text-4xl font-romanus">{image.title}</span>
                        )}
                      </S.SNImgTitle>
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>
              <S.SNDescription>
                {nichos.descriptions.map(description => (
                  <div key={description.id}>
                    <p tw="font-semibold">{description.title}</p>
                    <ul tw="pl-7">
                      {description.list.map(list => (
                        <li tw="list-disc" key={list.id}>
                          {list.des}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </S.SNDescription>
            </S.SNInfo>
          </div>
        ))}
      </S.SNContentInfo>
    </S.SNichos>
  )
}
export default memo(SNichos)
