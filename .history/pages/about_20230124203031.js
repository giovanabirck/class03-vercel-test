import data from "../data/employees.json"
import { useState } from "react"
import Menu from '../components/Menu' 

export default function About() {
    const [information, setInformation] = useState([...data])

    return(
        <>
         <Menu
            class="p-programs "
            style="color: #A8A8A8"
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