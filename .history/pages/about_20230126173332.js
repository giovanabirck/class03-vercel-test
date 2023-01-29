import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import CardEmployees from '../components/CardEmployees'
import Link from 'next/link'
import MenuEmployees from '../components/MenuEmployees'

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
        <Head>
            <title>Employees</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>

        <main className={styles.main}>
            
            {
                information && information.map((info, index) => {
                    return (
                        <div key={index}>
                            <CardEmployees
                                key={index}
                                firstName={info.firstName}
                                lastName={info.lastName}
                                pronouns={info.pronouns}
                                jobTitle={info.jobTitle}
                                shortBio={info.shortBio}
                            />
                        </div>
                    )
                })
            }

        </main>

        </>
    )
}