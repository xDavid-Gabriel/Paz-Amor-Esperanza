// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend
import Document, { Html } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            <Html lang="es">
              <link
                href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.cdnfonts.com/css/romanus"
                rel="stylesheet"
              />
              {initialProps.styles}
              {sheet.getStyleElement()}
            </Html>
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
