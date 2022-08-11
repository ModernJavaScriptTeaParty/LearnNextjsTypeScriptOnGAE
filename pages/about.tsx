import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import Hero from   'components/hero'

const Home: NextPage = () => {
  return (
    <Hero 
      title = "About"
      subtitle=" About development activities"
  />
 )
}

export default Home
