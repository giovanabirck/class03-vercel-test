import data from "../data/employees.json"
import { useState } from "react"
import MenuEmployees from "@/components/MenuEmployees"

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
        
         <MenuEmployees/>

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



/*

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
      return(
        <div key={index}>
          <Card 
            key={index}
            degree={info.degree}
            department={info.department}
          />
        </div>
      )
    }
  )
}
*/