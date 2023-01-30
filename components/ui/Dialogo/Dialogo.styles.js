import tw, { styled, css } from 'twin.macro'

export const Overlay = tw.div`fixed inset-0 w-full h-full backdrop-blur-sm z-[55] transition-[opacity,visibility] bg-black/10`

export const Dialog = styled.div`
  ${css`
    ${tw`fixed z-[57] max-w-[90%] w-full max-h-[97%] rounded-3xl overflow-auto bg-primary-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-xl p-7 lg:max-w-2xl flex flex-col lg:px-12`}

    &::-webkit-scrollbar {
      ${tw`bg-transparent w-0`}
    }
  `}
`
