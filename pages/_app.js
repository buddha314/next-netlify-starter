import '@styles/globals.css'
import { SessionProvider } from "next-auth/react"

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
