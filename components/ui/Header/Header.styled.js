import tw from 'twin.macro'
import styled from 'styled-components'

export const NavDesktop = tw.nav`container flex justify-between items-center py-4 relative z-10`

export const NavDesktopList = tw.ul`bg-primary-1100 lg:flex items-center gap-[4rem] rounded-full pl-20 pr-4 h-[70px] text-white hidden`

export const NavBtnContent = tw.div`flex gap-8 items-center lg:hidden`

export const NavBtnTelf = tw.button`border-[1px] border-white w-10 h-10 rounded-full grid place-content-center cursor-pointer`

export const NavMobile = styled.nav`
  ${tw`bg-primary-100 fixed w-full overflow-auto transition-[height] duration-500 z-10`}
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const Modal = styled.div(({ mobile }) => [
  tw`absolute bg-primary-1100 w-48 rounded-3xl py-4 px-5 top-[150%] flex flex-col gap-1`,
  mobile && tw`-left-[200%]`,
])

export const NavLinkMobile = tw.a`text-center block py-2 px-7 rounded-xl hover:bg-primary-900 hover:text-white transition-colors duration-500`

export const Hr = tw.hr`h-[4px] rounded-full w-0 transition-[width,background-color] duration-500 group-hover:bg-white group-hover:w-full border-t-0`

export const NavMobileList = tw.ul`flex flex-col gap-10 items-center justify-center min-h-[calc(100vh - 107.55px)] text-primary-1100`
