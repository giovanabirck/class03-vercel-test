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

