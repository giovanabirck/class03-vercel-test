
export default function CardEmployees({
    firstName   =   "none",
    lastName    =   "none",
    pronouns    =   "none",
    jobTitle    =   "none",
    shortBio    =   "none"
}) {
    
    return(
        <div style={{
            backgroundColor: "white",
            padding: "24px",
            fontFamily: "Impact",
            color: "#484848",
            fontSize: "18px",
            letterSpacing: "0.1em",
            wid
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgb(100, 100, 100, 0.2)"
        }}>
            {firstName}
            {lastName}
            {pronouns}
            <br></br>
            {jobTitle}
            <br></br>
            {shortBio}
        </div>
    )
}
