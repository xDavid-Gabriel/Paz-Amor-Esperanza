import { SEOProvider } from '../context/seo'
import GlobalStyles from './../styles/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <SEOProvider>
    <GlobalStyles />
   
      <Component {...pageProps} />
   
  </SEOProvider>
)

export default App
