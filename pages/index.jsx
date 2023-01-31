import { Page } from '../components/layouts'
import * as C from '../components/ui'
import * as P from '../views/home'
import { servicios } from '../data'

const Home = ({ data }) => {
  return (
    <Page title="Paz, Amor y Esperanza">
      <C.Hero />
      <P.SServicios servicios={data} />
      <P.SCampoSanto />
      <P.SContacto />
    </Page>
  )
}

export default Home

export const getServerSideProps = async ctx => {
  const data = servicios

  return {
    props: {
      data,
    },
  }
}
