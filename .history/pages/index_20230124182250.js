import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'
 import 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data);  
  const [information, setInformation] = useState([...data]);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="about">About</Link>

        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business") {
              return(
                <div key={index}>
            
                  <Card key={index} degree={info.degree} color="red" font="10px"/>
                </div>
              )
            }
          })
        }

        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing") {
              return(
                <div key={index}>
                  {info.degree}
                  <Card key={index} degree={info.degree} color="blue" font="50px"/>
                </div>
              )
            }
          })
        }
      </main>
      
    </>
  )
}
