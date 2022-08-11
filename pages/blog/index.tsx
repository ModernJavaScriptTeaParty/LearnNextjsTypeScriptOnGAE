import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import Hero from   'components/hero'

const Home: NextPage = () => {
  return (
    <Hero 
      title="Blog" 
      subtitle="React Posts"
    />
 )
}

export default Home
