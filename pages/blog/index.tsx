import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Meta from 'components/meta'

import Container from 'components/container'
import Hero from   'components/hero'

const Home: NextPage = () => {
  return (
    <Container large={false}>
      <Meta pageTitle='ブログ' />
      <Hero title = "Blog" subtitle = "React Posts" imageOn = {false} />
    </Container>
 )
}

export default Home
