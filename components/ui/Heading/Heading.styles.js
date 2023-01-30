import tw, { styled } from 'twin.macro'
import { headingVariants } from './Heading.variants'

export const Heading = styled.header(() => [
  ({ variant = 'primary' }) => headingVariants[variant],
])

export const P = styled.p(() => [
  tw`font-medium text-sm lg:text-base uppercase text-primary-900 tracking-[0.035em]`,
])
