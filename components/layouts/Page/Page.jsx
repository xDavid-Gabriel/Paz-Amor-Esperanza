import Head from 'next/head'
import 'twin.macro'
import * as C from '../../ui'
import { useStateSeoContext } from '../../../context/seo'
import { useState } from 'react'

export const Page = ({ children, title }) => {
  //El "useStateSeoContext()" se usa para validar si est en true estara con SEO si no, no lo estara
  const { seo } = useStateSeoContext()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [number, setNumber] = useState('933459714')

  return (
    <>
      <Head>
        {seo ? (
          <meta name="description" content="Hola es la descripcion" />
        ) : (
          ''
        )}
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <title>{title}</title>
      </Head>
      <C.Header />
      <main>{children}</main>
      <C.SocialNetworks setIsDialogOpen={setIsDialogOpen} />
      {isDialogOpen && (
        <C.Dialogo setIsDialogOpen={setIsDialogOpen} number={number} />
      )}
      <C.Footer setIsDialogOpen={setIsDialogOpen} setNumber={setNumber} />
    </>
  )
}
