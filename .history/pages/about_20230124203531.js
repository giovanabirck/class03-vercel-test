import data from "../data/employees.json"
import { useState } from "react"
import Menu from '../components/Menu' 

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
         <Menu
            style={{
                className: "a-employees",
                color: "#5F7AF2"
            }}
         />

            <a className="a-employees" href="about" style={{padding:"16px", color: "#5F7AF2"}}>Employees</a>

            <br></br>

            <p className="p-programs" style={{padding:"48px 16px 16px 16px"}}>Programs</p>

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