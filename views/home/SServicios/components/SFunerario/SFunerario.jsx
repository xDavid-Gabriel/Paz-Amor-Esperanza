import { memo, useEffect, useMemo } from 'react'
import * as C from '../../../../../components/ui'
import * as S from './SFunerario.styles'
import tw from 'twin.macro'
import { useStateSeoContext } from '../../../../../context/seo'
//Hooks
import { useFilter } from '../../../../../hooks/useFilter'
//Data static
//import { serviciosFunerario } from './attributes'

//Optimizador de imagenes
import { OptimizedImg } from '../../../../../components/ui'

const SFunerario = ({ serviciosFunerario }) => {
  const { seo } = useStateSeoContext()
  //Utilizando mi hook
  const { items, activo, setActivo, filterItem } = useFilter(
    serviciosFunerario,
    { planA: false, planB: false, planC: false, planD: false },
  )

  const memoizedData = useMemo(() => {
    // Aquí iría el cálculo costoso que se quiere memoizar
    return items
  }, [items])

  //Cundo el componente se renderiza cargara por defecto la categoria "planA" y su boton estara activo
  useEffect(() => {
    filterItem('planA')
    setActivo({ planA: true })
  }, [])

  return (
    <div>
      <S.SFunerario>
        <S.SFContent>
          <img
            css={tw`object-contain w-12`}
            src="https://assets.pazamoryesperanza.com/flor-outline.svg"
            alt="Flor"
            loading="lazy"
          />
          <img
            css={tw`object-contain w-12`}
            src="https://assets.pazamoryesperanza.com/flor-marron.svg"
            alt="Flor"
            loading="lazy"
          />

          <C.H2 as={seo ? 'h2' : 'span'}>
            SERVICIO <br /> FUNERARIO
          </C.H2>
          <S.SFDes>
            <p tw="font-semibold">NO DISPONIBLE EN LIMA Y AREQUIPA</p>
            <p>
              Nuestros planes funerarios han sido diseñados pensando en tus
              necesidades para darle a tu ser querido un último <br /> homenaje
              digno de recordar
            </p>
          </S.SFDes>
          <S.SFNumberMobile>01.</S.SFNumberMobile>
        </S.SFContent>
        <S.SFNumberDesktop>01.</S.SFNumberDesktop>
        <S.SFPlanes>
          <S.SFPlanesBtns>
            <C.Button
              css={activo.planA ? tw`bg-primary-1100` : ''}
              as="button"
              variant="outline"
              onClick={() => {
                filterItem('planA')
                setActivo({ planA: true })
              }}
            >
              Plan A
            </C.Button>
            <C.Button
              as="button"
              variant="outline"
              css={activo.planB ? tw`bg-primary-1100` : ''}
              onClick={() => {
                filterItem('planB')
                setActivo({ planB: true })
              }}
            >
              Plan B
            </C.Button>
            <C.Button
              as="button"
              variant="outline"
              css={activo.planC ? tw`bg-primary-1100` : ''}
              onClick={() => {
                filterItem('planC')
                setActivo({ planC: true })
              }}
            >
              Plan C
            </C.Button>
            <C.Button
              as="button"
              css={activo.planE ? tw`bg-primary-1100` : ''}
              variant="outline"
              onClick={() => {
                filterItem('planE')
                setActivo({ planE: true })
              }}
            >
              Plan E
            </C.Button>
          </S.SFPlanesBtns>
          <S.SFContentInfo>
            {memoizedData.map(plan => (
              <div tw="contents" key={plan.id}>
                <S.SFFigure>
                  <OptimizedImg
                    stylesTw={S.SFImg}
                    src={plan.image}
                    alt={plan.imageAlt}
                  />
                  <S.SFIconImg>
                    <OptimizedImg
                      stylesTw={tw`w-7 h-7 object-contain`}
                      src="flor-outline.svg"
                      alt="Flor"
                    />
                  </S.SFIconImg>
                </S.SFFigure>
                <S.SFInnerInfo>
                  <S.SFInfoHeading>
                    <S.SFInfoSpan>{plan.titleSpan}</S.SFInfoSpan>
                    <h3 tw="text-4xl">{plan.title}</h3>
                    <S.SFInfoPlanes>{plan.plan}</S.SFInfoPlanes>
                  </S.SFInfoHeading>
                  <S.SFInfo>
                    {plan.info.map((info, i) => (
                      <S.SFInfoItem
                        key={info.id}
                        css={
                          i === plan.info.length - 1
                            ? tw`border-b-0 xl:border-b-[2px] xl:rounded-br-[40px]`
                            : ''
                        }
                      >
                        <p>{info.title}</p>
                        <p>{info.description}</p>
                      </S.SFInfoItem>
                    ))}

                    {plan.infoButton.title === '' ? (
                      ''
                    ) : (
                      <S.SFInfoItemButton>
                        <p>{plan.infoButton.title}</p>
                        <p tw="max-w-[7rem]">{plan.infoButton.description}</p>
                      </S.SFInfoItemButton>
                    )}
                  </S.SFInfo>
                </S.SFInnerInfo>
              </div>
            ))}
          </S.SFContentInfo>
        </S.SFPlanes>
      </S.SFunerario>
    </div>
  )
}

export default memo(SFunerario)
