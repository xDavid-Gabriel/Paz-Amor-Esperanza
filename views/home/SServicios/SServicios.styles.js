import tw from 'twin.macro'
export const Servicios = tw.section`bg-[url(/images/hojas-fondo-servicios.webp)] bg-no-repeat bg-contain [background-position: 10% 62%] `

export const Container = tw.div`container flex flex-col`

export const CardContent = tw.div`font-bold text-center text-primary-800`

export const Card = tw.div`border-[2px] py-11 border-primary-800 rounded-3xl flex flex-col items-center gap-4 relative before:(absolute  bg-primary-1100/10  top-[13px] left-[13px] w-full h-full z-20) before:rounded-3xl`

export const CardDeco = tw.div`border-[3px] border-primary-800 grid place-content-center rounded-full w-12 h-12 absolute  top-0 left-0 translate-y-[-50%] translate-x-[-50%] bg-primary-100 before:(border-[16px]  content-[''] h-[78px]) before:border-primary-100 before:w-[78px] before:absolute before:rounded-full before:left-[-18px] before:top-[-18px] before:z-[-1]`

// export const ObContent = tw.div`relative xl:border-l-[2px] border-primary-800  before:(absolute left-[-2px] h-[14rem] top-0 translate-y-[-100%]) xl:before:border-l-[2px] before:border-primary-800 pt-[4rem] xl:pt-[12rem]`

export const ObContent = tw.div`relative xl:border-l-[2px] border-primary-800   pt-[4rem] xl:pt-[12rem]`

export const SIntegral = tw.div`xl:border-[2px] border-l-primary-800 xl:border-t-0 xl:border-r-0 border-b-0`

export const SIHeading = tw.div`text-center mb-20 pt-12 xl:pt-32`

export const SIDescription = tw.p`font-bold text-primary-800 text-xl`

export const SIContentCard = tw.div`container grid sm:grid-cols-2  xl:grid-cols-4 gap-9 xl:pl-32 relative before:absolute xl:before:border-[2px] before:border-b-primary-800 before:border-l-primary-800 before:rounded-bl-[40px] before:w-[7rem] before:h-[7rem] before:left-[-2px] before:translate-y-[-100%] before:border-t-0 before:border-r-0 top-[4px] z-10`

export const SIIcons = tw`w-7 h-7 object-contain`
