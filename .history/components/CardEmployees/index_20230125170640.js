
export default function CardEmployees({
    firstName   =   "none",
    lastName    =   "none",
    pronouns    =   "none",
    jobTitle    =   "none",
    shortBio    =   "none"
}) {
    
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            }}>
            <div style={{
                backgroundColor: "white",
                padding: "24px",
                fontFamily: "Arial",
                color: "#484848",
                fontSize: "18px",
                letterSpacing: "0.1em",
                width: "75%",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgb(100, 100, 100, 0.2)"
            }}>
                <div style={{
                    fontFamily: "Impact",
                }}>
                    {firstName}
                    {lastName}
                </div>
                <strong>{lastName}</strong>
                <style></style>{pronouns}
                <br></br>
                {jobTitle}
                <br></br>
                {shortBio}
            </div>

        </div>
    )
}
