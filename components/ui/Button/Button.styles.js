import tw, { styled } from 'twin.macro'
import { buttonVariants } from './Button.variants'

export const Button = styled.a(({ active }) => [
  tw`transition-colors duration-300`,
  ({ variant = 'primary' }) => buttonVariants[variant],
  active && tw`bg-primary-1100 border-primary-1100`,
])
