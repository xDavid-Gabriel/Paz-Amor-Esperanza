import Imgix from 'react-imgix'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'twin.macro'
export const OptimizedImg = ({ src, alt, stylesTw }) => {
  return (
    <Imgix
      css={stylesTw}
      className="lazyload"
      width={500}
      height={500}
      src={`https://assets.pazamoryesperanza.com/${src}`}
      alt={alt}
      imgixParams={{ auto: 'compress,format' }}
      sizes="auto"
      attributeConfig={{
        src: 'data-src',
        srcSet: 'data-srcset',
        sizes: 'data-sizes',
      }}
      htmlAttributes={{
        src: 'https://i.giphy.com/media/sSgvbe1m3n93G/giphy.webp',
      }}
    />
  )
}
