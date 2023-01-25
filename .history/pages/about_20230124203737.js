import data from "../data/employees.json"
import { useState } from "react"
import Menu from '../components/Menu' 

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
         <Menu/>
         <h1 style={{
            
         }}>Employees</h1>
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

