import { useEffect } from 'react'
import * as C from '../../../../../components/ui'
import { useStateSeoContext } from '../../../../../context/seo'
//Hooks
import { useFilter } from '../../../../../hooks/useFilter'
//Data statica
import { serviciosSepultura } from './attributes'
//Estilos
import * as S from './SSepultura.styles'
import tw from 'twin.macro'
//Optimizador de imagenes
import { OptimizedImg } from '../../../../../components/ui'

const SSepultura = ({ sSepultura }) => {
  const { seo } = useStateSeoContext()

  //Utilizando mi hook
  const { items, activo, setActivo, filterItem } = useFilter(
    serviciosSepultura,
    {
      personal: false,
      doble: false,
      triple: false,
      familiar: false,
      compartida: false,
    },
  )
  //Cundo el componente se renderiza cargara por defecto la categoria "personal" y su boton estara activo
  useEffect(() => {
    filterItem('personal')
    setActivo({ personal: true })
  }, [])
  return (
    <div>
      <S.SSHeading>
        <OptimizedImg
          stylesTw={tw`object-contain w-12`}
          src="cruz.svg"
          alt="Flor"
        />
        <OptimizedImg
          stylesTw={tw`object-contain w-12`}
          src="flor-marron.svg"
          alt="Flor"
        />

        <C.H2 as={seo ? 'h2' : 'span'}>
          SERVICIOS DE <br /> SEPULTURA
        </C.H2>
        <S.SSDes>
          <p>
            Te ofrecemos un lugar ideal, con extensas áreas verdes para recordar
            a tus seres queridos <br /> con una ubicación privilegiada,
            accesible y a perpetuidad.
          </p>
        </S.SSDes>
        <S.SSNumberMobile>02.</S.SSNumberMobile>
      </S.SSHeading>
      <S.SSNumberDesktop>02.</S.SSNumberDesktop>
      <S.SSPlanes>
        <S.SSPlanesBtns>
          <C.Button
            css={activo.personal ? tw`bg-primary-1100` : ''}
            variant="outline"
            as="button"
            onClick={() => {
              filterItem('personal')
              setActivo({ personal: true })
            }}
          >
            Personal
          </C.Button>
          <C.Button
            css={activo.doble ? tw`bg-primary-1100` : ''}
            variant="outline"
            as="button"
            onClick={() => {
              filterItem('doble')
              setActivo({ doble: true })
            }}
          >
            Doble
          </C.Button>
          <C.Button
            css={activo.triple ? tw`bg-primary-1100` : ''}
            variant="outline"
            as="button"
            onClick={() => {
              filterItem('triple')
              setActivo({ triple: true })
            }}
          >
            Triple
          </C.Button>
          <C.Button
            css={activo.familiar ? tw`bg-primary-1100` : ''}
            variant="outline"
            as="button"
            onClick={() => {
              filterItem('familiar')
              setActivo({ familiar: true })
            }}
          >
            Familiar
          </C.Button>
          <C.Button
            css={activo.compartida ? tw`bg-primary-1100` : ''}
            variant="outline"
            as="button"
            onClick={() => {
              filterItem('compartida')
              setActivo({ compartida: true })
            }}
          >
            Compartida
          </C.Button>
        </S.SSPlanesBtns>
        <S.SSContent>
          {items.map(sepultura => (
            <S.SSContentInfo key={sepultura.id}>
              <S.SSFigure>
                <OptimizedImg
                  stylesTw={S.SSImg}
                  src={sepultura.image}
                  alt={sepultura.title}
                />
              </S.SSFigure>
              <S.SSInnerInfo>
                <S.SSInfoHeading>
                  <S.SSInfoSpan>{sepultura.titleSpan}</S.SSInfoSpan>
                  <h3 tw="text-4xl">{sepultura.title}</h3>
                  <S.SSInfoPlanes>{sepultura.tipo}</S.SSInfoPlanes>
                </S.SSInfoHeading>
                <S.SSInfo>
                  {
                    <S.SSInfoItem css={tw`border-r-0`}>
                      <p>{sepultura.info.title}</p>
                    </S.SSInfoItem>
                  }
                  {sepultura.info.infoContent.map((inf, i) => (
                    <S.SSInfoItem
                      key={inf.id}
                      css={
                        i === sepultura.info.infoContent.length - 1
                          ? tw`rounded-[0 0 40px 40px] xl:rounded-[0 0 40px 0]`
                          : ''
                      }
                    >
                      <p>{inf.title}</p>
                      <p>{inf.description}</p>
                    </S.SSInfoItem>
                  ))}
                </S.SSInfo>
              </S.SSInnerInfo>
            </S.SSContentInfo>
          ))}
        </S.SSContent>
      </S.SSPlanes>
    </div>
  )
}

export default SSepultura
