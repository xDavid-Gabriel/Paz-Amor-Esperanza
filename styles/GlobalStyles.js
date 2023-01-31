import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
@font-face {
  font-family: "ROMANUS" ;
  src: url('/fonts/ROMANUS.woff') format('woff');
}

@font-face {
  font-family: "Baloo Thambi 2";
  src: url('/fonts/BalooThami2/Baloo-Thambi-2-Regular.woff') format('woff');
}
h1,h2,h3,span{
  font-family: "ROMANUS" ;
  letter-spacing: 1.3px;
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

body{
  font-family: "Baloo Thambi 2";
background: #F5EAE6;
font-weight: 400;
font-style: normal;
font-display: swap;
}

p{
font-size: 16px;
line-height: 1.75;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

html{
  scroll-behavior:smooth;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper--campo-santo{
  border-radius: 16px;
  position: static;
}

.swiper--campo-santo .swiper-pagination{
  bottom: 70px;
}

.swiper--campo-santo .swiper-pagination-bullet{
  width: 20px;
  height: 20px;
  border: 2px solid #75585A;
  background-color: transparent;
  position: relative;
  opacity: 1;
}

.swiper--campo-santo .swiper-pagination-bullet-active:before{
  background-color: #75585A;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  content: "";
  display:block;
  border-radius: 100px;
}

.swiper--servicios{

  max-width: 55rem;
  margin-right: 0;
  margin-left: auto;
  padding-top: 2rem;
  padding-bottom: 3.5rem;
}

@media (min-width: 1280px) {
  .swiper--servicios{
padding-top: 4rem;
padding-bottom: 4.5rem;
}
}
.swiper--servicios .swiper-pagination{
  bottom: 0;
}

.swiper--servicios .swiper-pagination-bullet{
  width: 20px;
  height: 20px;
  border: 2px solid #75585A;
  background-color: transparent;
  position: relative;
  opacity: 1;
}

.swiper--servicios .swiper-pagination-bullet-active:before{
  background-color: #75585A;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  content: "";
  display:block;
  border-radius: 100px;
}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
