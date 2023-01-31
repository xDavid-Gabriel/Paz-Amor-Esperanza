import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
h1,h2,h3,span{
font-family: "ROMANUS";
letter-spacing: 1.3px;
font-display: swap;
src:local('ROMANUS'),url(https://fonts.cdnfonts.com/s/50292/ROMANUS.woff) format('woff')
}

body{
font-family: "Baloo Thambi 2", cursive;
background: #F5EAE6;
font-display: swap;
src: url(https://fonts.gstatic.com/s/baloothambi2/v16/cY9cfjeOW0NHpmOQXranrbDyu7hPDpKBZQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
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
