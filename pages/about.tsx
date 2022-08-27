import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import Container from 'components/container'
import Hero from   'components/hero'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero 
        title = "About"
        subtitle ="About development activities"
        imageOn = {false}
      />
    </Container>
 )
}

export default Home
