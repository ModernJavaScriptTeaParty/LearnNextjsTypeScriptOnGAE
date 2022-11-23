import Meta from 'components/meta'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import Container from 'components/container'
import Hero from   'components/hero'

const Home: NextPage = () => {
  return (
    <Container large={false}>
      <Meta pageTitle='' pageDesc=''/>
      <Hero title = "CUBE" subtitle = "アプトプットしていくサイト" imageOn = {true} />
    </Container>
 )
}

export default Home
