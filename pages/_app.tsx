import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'

/* font awesome の設定 */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
