import Head from 'next/head'
import React, {useState} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [miVariable, setmiVariable ] = useState(0);

  const sumar= ()=> {
    setmiVariable (miVariable+1)
    //window.location.href = 'https://www.youtube.com';
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>esta es mi pagin en react</h1>
          <button onClick={sumar}>presioname</button>
          <h2>este es mi numero: {miVariable} </h2>
          <a href="https://www.youtube.com" target="_blank">link a youtube</a>
        </div>
      </main>
    </>
  )
}
