import { Page } from '../components/layouts'
import * as C from '../components/ui'
import * as P from '../views/home'

const Home = () => {
  return (
    <Page title="Paz, Amor y Esperanza">
      <C.Hero />
      <P.SServicios />
      <P.SCampoSanto />
      <P.SContacto />
    </Page>
  )
}

export default Home
