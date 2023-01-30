import tw from 'twin.macro'

export const SNichos = tw.div`xl:border-l-[2px]  rounded-bl-[40px] border-primary-800 relative xl:before:(absolute w-[2px] bg-primary-800 h-[12rem] left-[-2px] top-0 -translate-y-full) xl:rounded-bl-[0] xl:border-r-[2px] after:absolute after:bottom-0  after:w-[206px] after:h-[10rem] after:right-0 after:border-r-[2px] after:border-l-[2px] after:border-b-[2px] xl:after:border-primary-800 after:translate-x-[2px] after:translate-y-[90px] after:rounded-bl-[40px] after:rounded-br-[40px]`

export const SNichosDec = tw.div`w-[7rem] h-[10rem] xl:border-primary-800 absolute border-r-[2px] right-[-2px] translate-y-[-100%]`

export const SNContent = tw.div`flex flex-col gap-7 items-center pb-[3rem] xl:pb-0`

export const SNDes = tw.div`text-primary-1100 text-center uppercase flex flex-col gap-3 text-lg`

export const SNContentInfo = tw.div`flex flex-col gap-7 xl:gap-0`

export const SNNumber = tw.span`text-[6rem] xl:text-[9rem] text-primary-800   border-primary-800 xl:border-l-[2px] xl:border-b-[2px] rounded-bl-[40px] mr-[2px] relative left-[-2px] max-w-[56rem] flex flex-col gap-5 items-center xl:flex-row xl:gap-0 xl:pl-12 2xl:max-w-[70rem]`

export const SNDistrito = tw.div`text-2xl text-center  xl:left-[65%] xl:translate-x-[-50%] 2xl:left-[63%] xl:absolute`

export const SNInfo = tw.div`border-primary-800 xl:border-t-[2px]  rounded-tr-[40px] max-w-[56rem] 2xl:max-w-[70rem] relative top-[-2px] xl:left-[50px] xl:before:border-primary-800 before:border-r-[2px] before:absolute before:w-[40rem] before:top-0 before:h-[10rem] before:right-0 before:rounded-tr-[40px]`

export const SNPlanesBtns = tw.div`flex flex-wrap xl:flex-nowrap justify-center items-center gap-3  xl:absolute top-0 left-[50%]  xl:translate-x-[-18%] 2xl:translate-x-[-14%] xl:translate-y-[-50%] bg-primary-100 z-10`

export const SNImg = tw`rounded-[40px] h-[15rem] sm:h-auto xl:h-[25rem]`

export const SNImgTitle = tw.div`hidden xl:block bg-primary-1000/90 absolute bottom-0 left-0 px-28 pb-2 pt-4 rounded-full text-primary-800`

export const SNDescription = tw.div`xl:absolute mt-7 xl:mt-0 mx-auto xl:mx-0 top-16 xl:translate-x-[50%] bg-primary-1000 right-0 h-[404.02px] rounded-[40px] px-5 py-12 max-w-[17rem] text-primary-800 z-10 flex flex-col gap-1`
