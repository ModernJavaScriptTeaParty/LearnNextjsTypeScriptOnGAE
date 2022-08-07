import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const subtitle = "<アプトプットしていくサイト>"
  return (
    <>
    <header>HEADER</header>

    <main>
      <div className="hero">
        <h1 style={{ color: 'red',fontSize: '80px' }}>CUBE</h1>
        <p>{subtitle}</p>
      </div>
    </main>
   
    <footer>FOOTER</footer>
    </>
 )
}

export default Home
