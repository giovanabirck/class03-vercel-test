
import data from "../data/employees.json"
import { useState } from "react"

<Head>
    <title>Employees</title>
    <Menu/>
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
