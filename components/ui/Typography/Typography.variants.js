import tw from 'twin.macro'

export const h1Variants = {
  primary: tw`text-primary-800 text-center leading-[1]`,
}

export const h2Variants = {
  primary: tw`text-primary-800 text-center leading-[1] font-romanus text-dynamic-100`,
  secondary: tw`text-black text-center font-romanus text-dynamic-100`,
  tertiary: tw`text-blue-500 font-romanus text-dynamic-100`,
  quaternary: tw`font-baloo tracking-normal font-semibold flex flex-col items-center text-primary-800 lg:text-start lg:w-fit lg:pl-32 lg:items-start`,
}

export const h3Variants = {
  primary: tw`text-primary-800`,
  secondary: tw`font-baloo tracking-normal font-semibold text-primary-800 uppercase`,
}
