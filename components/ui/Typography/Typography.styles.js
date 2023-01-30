import tw, { styled } from 'twin.macro'
import { h1Variants, h2Variants, h3Variants } from './Typography.variants'

export const H1 = styled.h1(() => [
  tw`font-normal font-romanus text-dynamic-100`,
  ({ variant = 'primary' }) => h1Variants[variant],
])

export const H2 = styled.h2(() => [
  tw`font-normal`,
  ({ variant = 'primary' }) => h2Variants[variant],
])

export const H3 = styled.h3(() => [
  tw`font-normal font-romanus text-dynamic-200`,
  ({ variant = 'primary' }) => h3Variants[variant],
])
