import * as C from '../../../components/ui'
import * as S from './SServicios.styles'
import tw from 'twin.macro'
import { useStateSeoContext } from '../../../context/seo'
import { useState, useRef } from 'react'

import { OptimizedImg } from '../../../components/ui'

//Componente solamente de la sección
//import { SFunerario, SSepultura, SNichos, SSepelios } from './components'

import dynamic from 'next/dynamic'

const SFunerario = dynamic(() => import('./components/SFunerario/SFunerario'))
const SSepultura = dynamic(() => import('./components/SSepultura/SSepultura'))
const SNichos = dynamic(() => import('./components/SNichos/SNichos'))
const SSepelios = dynamic(() => import('./components/SSepelios/SSepelios'))

export const SServicios = () => {
  const { seo } = useStateSeoContext()

  const [servicios, setServicios] = useState({
    sFunerario: true,
    sSepultura: false,
    sNichos: false,
    sSepelios: false,
  })

  const myRef = useRef(null)

  function handleClick() {
    myRef.current.scrollIntoView()
  }

  return (
    <S.Servicios id="servicios">
      <S.Container ref={myRef}>
        {/* Componentes de Servicios que cambiaran dinamicamente */}
        {servicios.sFunerario && <SFunerario />}
        {servicios.sSepultura && <SSepultura />}
        {servicios.sNichos && <SNichos />}
        {servicios.sSepelios && <SSepelios />}
        {/* <SFunerario sFunerario={servicios.sFunerario} />
        <SSepultura sSepultura={servicios.sSepultura} />
        <SNichos sNichos={servicios.sNichos} />
        <SSepelios sSepelios={servicios.sSepelios} /> */}

        <S.ObContent>
          <C.Button href="#contacto" css={tw`mx-auto block`}>
            Obtener
          </C.Button>
        </S.ObContent>
        <S.SIntegral>
          <S.SIHeading>
            <C.H3>
              <span tw="text-[2.7rem]">S</span>ERVICIO{' '}
              <span tw="text-[2.7rem]">I</span>
              NTEGRAL
            </C.H3>
            <S.SIDescription>Para un mañana más tranquilo</S.SIDescription>
          </S.SIHeading>
          <S.SIContentCard>
            <S.Card>
              <S.CardDeco>
                {/* Imagen */}
                <OptimizedImg stylesTw={S.SIIcons} src="cruz.svg" alt="Cruz" />
              </S.CardDeco>
              <S.CardContent>
                <p tw="leading-[5px]">Servicio de</p>
                <C.H3>SEPULTURA</C.H3>
              </S.CardContent>
              <C.Button
                onClick={() => {
                  handleClick()
                  setServicios({ sSepultura: true })
                }}
                as="button"
                variant="outline"
              >
                Ver mas
              </C.Button>
            </S.Card>

            <S.Card>
              <S.CardDeco>
                {/* Imagen */}
                <OptimizedImg
                  stylesTw={S.SIIcons}
                  src="tres-cruces.svg"
                  alt="Cruz"
                />
              </S.CardDeco>
              <S.CardContent>
                <p tw="leading-[5px]">Servicio de</p>
                <C.H3>NICHOS</C.H3>
              </S.CardContent>
              <C.Button
                variant="outline"
                as="button"
                onClick={() => {
                  handleClick()
                  setServicios({ sNichos: true })
                }}
              >
                Ver mas
              </C.Button>
            </S.Card>

            <S.Card>
              <S.CardDeco>
                {/* Imagen */}
                <OptimizedImg
                  stylesTw={S.SIIcons}
                  src="flor-outline.svg"
                  alt="Flor"
                />
              </S.CardDeco>
              <S.CardContent>
                <p tw="leading-[5px]">Servicio de</p>
                <C.H3>FUNERARIO</C.H3>
              </S.CardContent>
              <C.Button
                onClick={() => {
                  handleClick()
                  setServicios({ sFunerario: true })
                }}
                variant="outline"
                as="button"
              >
                Ver mas
              </C.Button>
            </S.Card>

            <S.Card>
              <S.CardDeco>
                {/* Imagen */}
                <OptimizedImg stylesTw={S.SIIcons} src="ataud.svg" alt="Cruz" />
              </S.CardDeco>
              <S.CardContent>
                <p tw="leading-[5px]">Servicio de</p>
                <C.H3>SEPELIOS</C.H3>
              </S.CardContent>
              <C.Button
                variant="outline"
                as="button"
                onClick={() => {
                  handleClick()
                  setServicios({ sSepelios: true })
                }}
              >
                Ver mas
              </C.Button>
            </S.Card>
          </S.SIContentCard>
        </S.SIntegral>
      </S.Container>
    </S.Servicios>
  )
}
