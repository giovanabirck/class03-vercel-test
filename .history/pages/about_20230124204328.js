import data from "../data/employees.json"
import { useState } from "react"
import Menu from '../components/Menu' 

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
         <Menu/>
         <div style={{
            display: "flex",
            marginLeft: "200px" 
         }}>
            <h1 style={{
                fontFamily: "Impact",
                fontSize: "32px",
                color: "#5F7AF2"
            }}>
                Employees
            </h1>
         </div>

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

