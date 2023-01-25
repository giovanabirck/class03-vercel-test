
import data from "../data/employees.json"
import { useState } from "react"

export default function About() {
    const [information, setInformation] =
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
