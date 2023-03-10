import data from "../data/employees.json"
import { useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuEmployees from "@/components/MenuEmployees"
import CardEmployees from "@/components/CardEmployees"

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
        <Head>
            <title>Employees</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <MenuEmployees/>
        </Head>

        <main className={StyleSheet.main}>
            
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
                }
                )
            }

        </main>

        </>
    )
}