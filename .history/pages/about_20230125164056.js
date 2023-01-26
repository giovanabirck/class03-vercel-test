import data from "../data/employees.json"
import { useState } from "react"
import MenuEmployees from "@/components/MenuEmployees"

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
                        <div key={}>

                        </div>
                        info.firstName
                    )
                }
                )
            }

        </main>

        </>
    )
}



/*


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