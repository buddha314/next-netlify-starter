import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import heroPic from '../public/hero3.jpg'
import logoPic from '../public/logo5.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Week of the Dead" />
        <p className="description">
          U Get started by editing <code>pages/index.js</code>
        </p>
          <Image src={heroPic} style="width: 100%;"></Image>
      </main>
      <Footer />
    </div>
  )
}
