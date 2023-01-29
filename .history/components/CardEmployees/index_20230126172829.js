import styles from './CardEmployees.module.css'

export default function CardEmployees({
    firstName   =   "none",
    lastName    =   "none",
    pronouns    =   "none",
    jobTitle    =   "none",
    shortBio    =   "none"
}) {
    
    return(
        <div className={styles.}>
            <div style={{
                backgroundColor: "white",
                padding: "24px",
                fontFamily: "Arial",
                color: "#484848",
                fontSize: "16px",
                letterSpacing: "0.1em",
                width: "75%",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgb(100, 100, 100, 0.2)"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "flex-end",
                    paddingBottom: "8px"
                }}>
                    <div style={{
                        fontFamily: "Impact",
                        fontSize: "18px"
                    }}>
                        {firstName}
                        {lastName}
                    </div>

                    <div style={{
                        fontSize: "14px",
                        letterSpacing: "0"
                    }}>
                        {pronouns}
                    </div>
                </div>
                <strong>{jobTitle}</strong>
                <br></br>
                {shortBio}
            </div>

        </div>
    )
}
