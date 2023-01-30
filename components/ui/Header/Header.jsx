import { useEffect, useState } from 'react'
import * as S from './Header.styled'
import * as C from '../'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import tw from 'twin.macro'

import { OptimizedImg } from '../'

export const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [listener, setListener] = useState({
    isOpen: false,
  })
  const [navigation, setNavigation] = useState(null)

  useEffect(() => {
    //Para el redimencion de la pantalla
    function handleResize() {
      if (window.innerWidth >= 1020) {
        setListener({ isOpen: false })
      }
    }
    handleResize()

    //Para el redimencion de la pantalla
    window.addEventListener('resize', handleResize)

    //S.Navegación activo
    const sections = document.querySelectorAll('section')

    const handleScroll = () => {
      sections.forEach(section => {
        //Cordenadas de cada sección
        const rect = section.getBoundingClientRect()
        // console.log(rect)
        if ((rect.top <= 150) & (rect.bottom >= 150)) {
          setNavigation(section.id)
          return
        }
      })
    }
    //Para la navegacion activa
    document.addEventListener('scroll', handleScroll)

    return () => {
      //Para hacer el redimencionamiento
      window.removeEventListener('resize', handleResize)
      //Para la navegacion activa
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header tw="sticky top-0 z-[52] w-full [background: rgba(245, 234, 230, 0.2);] [backdrop-filter: blur(12px)]">
      <S.NavDesktop>
        <a href="#inicio">
          <OptimizedImg
            stylesTw={tw`w-28`}
            src="logo.svg"
            alt="Logo Paz amor y esperanza"
          />
        </a>
        <S.NavDesktopList>
          <li className="group">
            <a href="#inicio">Inicio</a>
            <S.Hr css={navigation === 'inicio' && tw`w-full bg-white`} />
          </li>
          <li className="group">
            <a href="#servicios">Servicios</a>
            <S.Hr css={navigation === 'servicios' && tw`w-full bg-white`} />
          </li>
          <li className="group">
            <a href="#campo-santo">Camposanto</a>
            <S.Hr css={navigation === 'campo-santo' && tw`w-full bg-white`} />
          </li>

          <li tw="relative">
            <S.NavBtnTelf onClick={() => setShowModal(showModal => !showModal)}>
              <BsTelephoneFill color="#fff" size={20} />
            </S.NavBtnTelf>
            {showModal && (
              <S.Modal>
                Teléfono Servicio de atención al Cliente{' '}
                <span tw="font-semibold font-baloo tracking-normal">Lima</span>
                <ul>
                  <li>
                    <a
                      tw="hover:text-primary-800 transition-colors duration-200"
                      href="tel:016187070"
                    >
                      (01) 618-7070
                    </a>
                  </li>
                  <li>
                    <a
                      tw="hover:text-primary-800 transition-colors duration-200"
                      href="tel:016187130"
                    >
                      (01) 618-7130
                    </a>
                  </li>
                </ul>
              </S.Modal>
            )}
          </li>
          <li>
            <C.Button href="#contacto" variant="secondary">
              Contacto
            </C.Button>
          </li>
        </S.NavDesktopList>
        <S.NavBtnContent>
          {!listener.isOpen && (
            <div tw="relative text-white">
              <S.NavBtnTelf
                tw="border-primary-1100"
                onClick={() => setShowModal(showModal => !showModal)}
              >
                <BsTelephoneFill color="#7AC97A" size={20} />
              </S.NavBtnTelf>
              {showModal && (
                <S.Modal mobile>
                  Teléfono Servicio de atención al Cliente{' '}
                  <span tw="font-semibold font-baloo tracking-normal">
                    Lima
                  </span>
                  <ul>
                    <li>
                      <a
                        tw="hover:text-primary-800 transition-colors duration-200"
                        href="tel:016187070"
                      >
                        (01) 618-7070
                      </a>
                    </li>
                    <li>
                      <a
                        tw="hover:text-primary-800 transition-colors duration-200"
                        href="tel:016187130"
                      >
                        (01) 618-7130
                      </a>
                    </li>
                  </ul>
                </S.Modal>
              )}
            </div>
          )}

          <FaBars
            size={30}
            tw="cursor-pointer"
            color="#7AC97A"
            onClick={() => setListener({ isOpen: !listener.isOpen })}
          />
        </S.NavBtnContent>
      </S.NavDesktop>
      <S.NavMobile
        css={listener.isOpen ? tw`h-[calc(100vh - 107.55px)]` : tw`h-0`}
      >
        <S.NavMobileList>
          <li>
            <S.NavLinkMobile
              onClick={() => setListener(listener => (listener.isOpen = false))}
              href="#inicio"
              css={
                navigation === 'inicio' &&
                tw`bg-primary-900 rounded-2xl text-white`
              }
            >
              Inicio
            </S.NavLinkMobile>
          </li>
          <li>
            <S.NavLinkMobile
              onClick={() => setListener(listener => (listener.isOpen = false))}
              href="#servicios"
              css={
                navigation === 'servicios' &&
                tw`bg-primary-900 rounded-2xl text-white`
              }
            >
              Servicios
            </S.NavLinkMobile>
          </li>
          <li>
            <S.NavLinkMobile
              onClick={() => setListener(listener => (listener.isOpen = false))}
              href="#campo-santo"
              css={
                navigation === 'campo-santo' &&
                tw`bg-primary-900 rounded-2xl text-white`
              }
            >
              Campo Santo
            </S.NavLinkMobile>
          </li>

          <li>
            <C.Button
              onClick={() => setListener(listener => (listener.isOpen = false))}
              variant="primary100"
              href="#contacto"
            >
              Contacto
            </C.Button>
          </li>
        </S.NavMobileList>
      </S.NavMobile>
    </header>
  )
}
