import tw, { styled } from 'twin.macro'

export const Form = styled.form(({ dialog }) => [
  tw`text-primary-800 flex flex-col gap-5 max-w-xl lg:pl-32`,
  dialog && tw`lg:pl-0`,
])

export const Label = tw.label`flex flex-col gap-1`

export const Input = styled.input(({ textarea }) => [
  tw`border-primary-1400 border-2 rounded-full px-5 py-2 bg-primary-1300 text-primary-800 placeholder-primary-800/40 focus:outline-primary-800`,
  textarea && tw`rounded-[30px]`,
])
