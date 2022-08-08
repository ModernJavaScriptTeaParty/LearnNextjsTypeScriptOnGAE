import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import layout from 'components/layout'
import Hero from   'components/hero'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
 )
}

export default Home
