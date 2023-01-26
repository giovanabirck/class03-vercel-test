import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'
import MenuPrograms from '../components/MenuPrograms'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data);  
  const [information, setInformation] = useState([...data]);


  return (
    <>
      <Head>
        <title>Programs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <MenuPrograms/>
      </Head>
      <main className={styles.main}>

        {
          information && information.map((info, index) => {
            if(info.department === "Business") {
              return(
                <div key={index}>
                  <Card key={index} degree={info.degree; info.department} degree={info.department}/>
                </div>
              )
            }
          })
        }

        {
          information && information.map((info, index) => {
            if(info.department === "Computing") {
              return(
                <div key={index}>
                  <Card key={index} degree={info.degree}/>
                </div>
              )
            }
          })
        }
      </main>
      
    </>
  )
}
