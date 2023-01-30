import tw, { styled } from 'twin.macro'

export const Section = tw.section`container`

export const Inner = tw.div`flex flex-col gap-9 relative pb-14 pt-28 border-t-[2px] before:absolute before:h-10 before:bg-primary-100 before:left-0 before:top-[-4px] before:right-[85px] xl:border-l-2 xl:border-primary-800 xl:border-r-2 xl:rounded-tr-[40px] `

export const Slider = tw.div`flex flex-col gap-4 text-center relative lg:gap-11 xl:gap-24`

export const SliderDescription = tw.div`flex flex-col xl:grid grid-cols-3 relative place-items-center gap-x-6 gap-y-4`

export const SliderHr = styled.hr(({ lastChild }) => [
  tw`hidden xl:block border-t-0 bg-primary-800 rounded-full w-full h-[2px] row-start-1 row-end-3`,
  lastChild && tw`col-start-3`,
])

export const SliderContainer = tw.div`lg:container xl:flex gap-6`

export const SliderInfo = tw.div`hidden xl:flex flex-col text-right text-primary-800 gap-4`

export const SliderGroup = styled.div(({ showPaginationButtons }) => [
  tw`grid w-full relative gap-y-7`,
  showPaginationButtons && tw`gap-y-20`,
])

export const HorarioAtencion = tw.span`font-medium font-baloo w-max tracking-normal`

export const P = tw.p`text-[15px] lg:text-lg text-primary-800 col-start-2`

export const Img = tw`rounded-2xl aspect-video`
