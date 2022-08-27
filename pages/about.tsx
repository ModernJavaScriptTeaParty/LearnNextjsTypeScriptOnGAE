import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

import Container from 'components/container'
import Hero from   'components/hero'
import PostBody from 'components/post-body'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero title = "About" subtitle ="About development activities" imageOn = {false} />
      
      <PostBody>
        
        <p>
          Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境を結びつけるクリエイティブを提案し続けています。
        </p>
        <h2>
          モノづくりで目指していること
        </h2>
        <p>
          モノづくりではデータの解析からクリエイティブなで幅広いことを担当しています。新しいことを取り入れながらユーザーにマッチする提案を実現するのが目標です。たんさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
        </p>
        <p>
        単純に形にするだけでなく、作る過程やなぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フォードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。 
        </p>
        <h3>
          新しいことへのチャレンジ
        </h3>
        <p>
          今までと違うもののを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことっでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
        </p>
       </PostBody>
      </Container>
  )
}

export default Home
