import tw from 'twin.macro'

export const buttonVariants = {
  primary: tw`bg-primary-1100 text-primary-800 hover:bg-primary-1100/90 px-9 w-fit border-[2px] border-transparent py-2 rounded-full`,
  primary100: tw`bg-primary-1100 text-white hover:bg-primary-1100/90 px-9 w-fit border-[2px] border-transparent py-2 rounded-full`,
  secondary: tw`bg-white text-primary-1100 border-white hover:bg-transparent hover:text-white px-9 w-fit border-[2px] border-transparent py-2 rounded-full`,
  tertiary: tw`bg-primary-100 text-primary-800 border-primary-800 hover:bg-primary-1100 hover:border-primary-1100 px-7 w-full border-[2px] py-2 rounded-full`,
  quaternary: tw`bg-primary-100 text-primary-800 border-primary-800 hover:bg-primary-1100 hover:border-primary-1100 px-9 w-fit border-[2px] border-transparent py-2 rounded-full`,
  quinary: tw`hover:text-primary-1100`,
  close: tw`text-primary-800 hover:text-primary-700 self-end`,

  outline: tw`bg-transparent text-primary-800 border-primary-800 hover:bg-primary-1100 hover:border-primary-1100 px-7  border-[2px] py-2 rounded-full w-fit relative z-50`,
}
