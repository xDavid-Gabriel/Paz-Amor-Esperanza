import tw from 'twin.macro'

export const SSHeading = tw.div`flex flex-col gap-7 items-center pb-[8rem] xl:pb-0 border-l-[2px] left-0 rounded-bl-[40px] xl:border-l-0 xl:border-r-[2px]  border-primary-800 relative before:(absolute w-[2px] bg-primary-800 h-[12rem] xl:right-[-2px] xl:left-[initial] top-0 -translate-y-full) before:left-[-2px]`

export const SSDes = tw.div`text-primary-1100 text-center uppercase flex flex-col gap-3 text-lg`

export const SSNumberMobile = tw.span`text-[6rem] xl:text-[9rem] text-primary-800 xl:hidden`

export const SSNumberDesktop = tw.span`text-[6rem] xl:text-[9rem] text-primary-800 hidden pr-12 xl:flex justify-end border-b-[2px] border-primary-800 rounded-br-[40px] xl:border-r-[2px]`

export const SSPlanes = tw.div`relative before:absolute before:border-b-[2px] before:border-l-[2px] before:border-primary-800 before:w-[5rem] before:h-[5rem] before:translate-y-[-100%] before:rounded-bl-[40px] before:left-0 xl:before:border-0`

export const SSPlanesBtns = tw.div`flex flex-wrap xl:flex-nowrap justify-center  items-center gap-3  absolute top-0 left-[50%] translate-x-[-50%] xl:left-0 xl:translate-x-0 translate-y-[-50%] bg-primary-100 z-10`

export const SSContent = tw.div`max-w-[65rem] relative xl:border-r-[2px] border-primary-800 rounded-tr-[40px] before:absolute before:w-[4rem] before:h-[4rem]  before:border-primary-800  before:right-[-2px] before:rounded-tr-[40px] xl:before:border-r-[2px] xl:before:border-t-[2px] rounded-br-[40px] top-[-2px]`

export const SSContentInfo = tw.div`flex flex-col xl:gap-14 xl:flex-row  justify-end pt-[10rem] md:pt-[7rem] xl:justify-between xl:pl-[7rem] `

export const SSFigure = tw.figure`border-l-[2px] border-primary-800 xl:border-l-0 pl-4 sm:pl-0`

export const SSImg = tw`max-w-[20rem] xl:h-[30rem] mx-auto object-contain pt-[7rem]`

export const SSInnerInfo = tw.div`justify-between contents max-w-[27rem] text-primary-800 xl:flex xl:flex-col xl:gap-4`

export const SSInfoHeading = tw.div`flex flex-col  relative before:(left-0  z-[-1] top-[40%] translate-y-[-50%])  items-center xl:items-start xl:translate-y-0 order-[-1] translate-y-0 xl:order-[0] border-l-[2px] border-primary-800 xl:border-l-0 before:absolute before:w-[2px] before:h-[15rem] before:bg-primary-800 before:top-0 before:translate-y-[-100%] before:left-[-2px] before:xl:w-0 text-center`

export const SSInfoSpan = tw.span`font-baloo font-semibold text-xl`

export const SSInfoPlanes = tw.p`font-bold text-3xl`

export const SSInfo = tw.div`relative max-w-[27rem] z-[-1] pt-28  xl:border-r-[2px]  rounded-bl-[40px] rounded-br-[40px] rounded-tr-[40px] border-primary-800 xl:border-none xl:pt-0 xl:w-[27rem] border-t-0 border-b-0 border-l-[2px] border-r-0`

export const SSInfoItem = tw.div`font-bold flex items-center justify-between border-b-[2px] border-primary-800 py-3 p-7 xl:pl-0 xl:pr-[6rem] border-r-[2px] xl:border-r-0`

// export const SSInfoItem = tw.div`font-bold flex items-center justify-between border-b-[2px] border-primary-800 py-3 p-7 xl:pl-0 xl:pr-[6rem] border-r-[2px] xl:border-r-0`
