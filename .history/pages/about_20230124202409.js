import data from "../data/employees.json"
import { useState } from "react"
import Menu from '../components/Menu' 

<Head>
<title>Programs</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>


export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
            {
                information && information.map((info, index) => {
                    return (
                        info.firstName
                    )

                }
                )
            }

        </>
    )
}