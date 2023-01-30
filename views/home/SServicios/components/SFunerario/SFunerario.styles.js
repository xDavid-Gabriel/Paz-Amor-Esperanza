import tw from 'twin.macro'

export const SFunerario = tw.div`border-l-[2px] rounded-bl-[40px] border-primary-800 relative before:(absolute w-[2px] bg-primary-800 h-[12rem] left-[-2px] top-0 -translate-y-full) xl:rounded-bl-[0]`

export const SFContent = tw.div`flex flex-col gap-7 items-center pb-[8rem] xl:pb-0`

export const SFDes = tw.div`text-primary-1100 text-center uppercase flex flex-col gap-3 text-lg`

export const SFNumberMobile = tw.span`text-[6rem] xl:text-[9rem] text-primary-800 xl:hidden`

export const SFNumberDesktop = tw.span`text-[6rem] xl:text-[9rem] text-primary-800  hidden pl-12 xl:block`

export const SFPlanes = tw.div`border-primary-800 rounded-tr-[40px] rounded-br-[40px] max-w-[80rem] relative xl:border-r-[2px] xl:border-t-[2px] before:absolute before:border-b-[2px] before:border-l-[2px] before:border-primary-800 before:w-[5rem] before:h-[5rem] before:translate-y-[-100%] before:rounded-bl-[40px] before:left-[-2px] after:w-[28px] after:top-[-3px] after:bg-primary-100 after:h-10 after:absolute after:rounded-tr-[6px]`

export const SFPlanesBtns = tw.div`flex flex-wrap xl:flex-nowrap justify-center items-center gap-3  absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary-100`

export const SFContentInfo = tw.div`flex flex-col xl:gap-14 xl:flex-row  justify-end pt-[10rem] md:pt-[7rem]`

export const SFFigure = tw.figure`relative ml-8 mr-4 border-[2px] rounded-3xl border-primary-800 max-w-[25rem] md:max-w-[35rem] self-start sm:mx-auto xl:mx-0 before:absolute before:w-[4rem] before:h-[2px] before:bg-primary-100 before:top-[-2px] after:absolute after:w-[2px] after:h-[2rem] after:bg-primary-100 after:left-[-2px] after:top-[28px]`

export const SFImg = tw`rounded-3xl relative top-[25px] left-[25px] z-[-1]`

export const SFIconImg = tw.div`w-[3.5rem] h-[3.5rem] rounded-full border-[2px] border-primary-800 grid place-content-center absolute top-0 translate-y-[-50%] translate-x-[-50%] bg-primary-100`

export const SFInnerInfo = tw.div`text-primary-800 xl:flex xl:flex-col xl:gap-4 max-w-[27rem] justify-between`

export const SFInfoHeading = tw.div`flex flex-col translate-y-[60%] relative before:(absolute w-[90%] sm:w-[85%] left-0  h-[1rem] z-[-1] top-[40%] translate-y-[-50%]) before:bg-primary-100  items-center xl:items-start xl:translate-y-0`

export const SFInfoSpan = tw.span`font-baloo font-semibold text-xl`

export const SFInfoPlanes = tw.p`font-bold text-3xl`

export const SFInfo = tw.div`relative max-w-[27rem] z-[-1] pt-28 border-t-[2px]  xl:border-r-[2px]  rounded-bl-[40px] rounded-br-[40px] rounded-tr-[40px] border-primary-800 xl:border-none xl:pt-0 xl:w-[27rem] border-b-[2px] border-r-[2px]`

export const SFInfoItem = tw.div`font-bold flex items-center justify-between border-b-[2px] border-primary-800 py-3 p-7 xl:pl-0 xl:pr-[6rem]`

export const SFInfoItemButton = tw.div`border-t-[2px] flex justify-between pt-3 px-7 xl:pl-0 xl:pr-[6rem] w-full font-bold text-primary-800 xl:absolute xl:border-none xl:border-t-[2px] border-primary-800 `
