import data from "../data/employees.json"
import { useState } from "react"
import Menu from '../components/Menu' 

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
         <Menu
            h1 style={{
                fontFamily: "Impact",
                fontSize: "32px",
                            color: "#5F7AF2",
                            marginLeft: "22%", 
                        }}>
                            Employees
                       
         />

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
